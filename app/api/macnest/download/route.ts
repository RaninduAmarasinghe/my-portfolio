import { createHmac } from "node:crypto";
import { after, NextResponse } from "next/server";

import { getMacNestBrowserDownloadUrl, getMacNestGithubUrl, getSiteOrigin } from "../../../macnest/download-config";
import { createMacNestThankYouEmail } from "../../../macnest/email-template";

export const runtime = "nodejs";

const BODY_LIMIT_BYTES = 4096;
const RATE_WINDOW_SECONDS = 15 * 60;
const RATE_LIMIT = 5;
const REQUEST_TTL_SECONDS = 24 * 60 * 60;
const RECIPIENT_COOLDOWN_SECONDS = 15 * 60;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitScript = `
local count = tonumber(redis.call('GET', KEYS[1]) or '0')
if count >= tonumber(ARGV[1]) then return 0 end
count = redis.call('INCR', KEYS[1])
if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[2]) end
return 1
`;

type RedisResult<T> = { result?: T; error?: string };

function hash(value: string) {
  const pepper = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!pepper) throw new Error("Rate limiting is not configured.");
  return createHmac("sha256", pepper).update(value).digest("hex");
}

async function redisCommand<T>(command: unknown[]) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("Rate limiting is not configured.");

  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error("Rate limit service request failed.");
  const payload = (await response.json()) as RedisResult<T>;
  if (payload.error) throw new Error("Rate limit service request failed.");
  return payload.result as T;
}

function reply(status: number, body: Record<string, unknown>, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

async function sendThankYouEmail(email: string, requestKey: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM?.trim();
  if (!apiKey || !from) return false;

  try {
    const template = createMacNestThankYouEmail({
      githubUrl: getMacNestGithubUrl(),
      siteUrl: getSiteOrigin(),
    });
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": requestKey,
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "Thanks for checking out MacNest",
        html: template.html,
        text: template.text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error("MacNest thank-you email was not accepted by the provider", response.status);
      return false;
    }
    return true;
  } catch {
    console.error("MacNest thank-you email request failed.");
    return false;
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > BODY_LIMIT_BYTES) return reply(413, { error: "That request is too large. Please try again." });
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return reply(415, { error: "Please submit a valid email address." });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > BODY_LIMIT_BYTES) return reply(413, { error: "That request is too large. Please try again." });
    body = JSON.parse(raw);
  } catch {
    return reply(400, { error: "Please submit a valid email address." });
  }

  if (!body || typeof body !== "object") return reply(400, { error: "Please submit a valid email address." });
  const payload = body as { email?: unknown; requestId?: unknown };
  if (typeof payload.email !== "string") return reply(400, { error: "Enter a valid email address to continue." });
  const email = payload.email.trim().toLowerCase();
  if (email.length > 254 || !emailPattern.test(email)) return reply(400, { error: "Enter a valid email address to continue." });
  if (typeof payload.requestId !== "string" || !/^[a-zA-Z0-9-]{16,64}$/.test(payload.requestId)) {
    return reply(400, { error: "Please refresh the page and try again." });
  }

  let downloadUrl: string;
  try {
    downloadUrl = getMacNestBrowserDownloadUrl();
  } catch {
    return reply(503, { error: "The MacNest download is temporarily unavailable. Please try again later." });
  }

  const requestIdHash = hash(payload.requestId);
  const requestKey = `macnest:request:${requestIdHash}`;
  const lockKey = `macnest:lock:${requestIdHash}`;
  const idempotencyKey = `macnest-${requestIdHash}`;
  const resultBody = (emailStatus: "sent" | "failed" | "pending" | "recent_request") => ({
    accepted: true,
    downloadUrl,
    emailStatus,
  });

  try {
    const cached = await redisCommand<string | null>(["GET", requestKey]);
    if (cached) return reply(200, JSON.parse(cached) as Record<string, unknown>);

    const lockAcquired = await redisCommand<string | null>(["SET", lockKey, "processing", "NX", "EX", 60]);
    if (!lockAcquired) return reply(202, resultBody("pending"));

    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() || "unknown";
    const ipHash = hash(forwardedFor);
    const withinLimit = await redisCommand<number>([
      "EVAL", rateLimitScript, 1, `macnest:rate:${ipHash}`, RATE_LIMIT, RATE_WINDOW_SECONDS,
    ]);
    if (Number(withinLimit) !== 1) {
      await redisCommand(["DEL", lockKey]);
      return reply(429, { error: "Too many requests from this network. Please wait a little and try again." }, { "Retry-After": String(RATE_WINDOW_SECONDS) });
    }

    const recipientKey = `macnest:recipient:${hash(email)}`;
    const recipientLock = await redisCommand<string | null>(["SET", recipientKey, "processing", "NX", "EX", 60]);
    if (!recipientLock) {
      const recipientStatus = await redisCommand<string | null>(["GET", recipientKey]);
      const result = resultBody(recipientStatus === "sent" ? "recent_request" : "pending");
      await redisCommand(["SET", requestKey, JSON.stringify(result), "EX", REQUEST_TTL_SECONDS]);
      await redisCommand(["DEL", lockKey]);
      return reply(200, result);
    }

    // This small record is written only after email validation and rate-limit acceptance.
    await redisCommand(["SET", requestKey, JSON.stringify(resultBody("pending")), "EX", REQUEST_TTL_SECONDS]);
    after(async () => {
      try {
        const emailSent = await sendThankYouEmail(email, idempotencyKey);
        const result = resultBody(emailSent ? "sent" : "failed");
        await redisCommand(["SET", requestKey, JSON.stringify(result), "EX", REQUEST_TTL_SECONDS]);
        if (emailSent) {
          await redisCommand(["SET", recipientKey, "sent", "EX", RECIPIENT_COOLDOWN_SECONDS]);
        } else {
          await redisCommand(["DEL", recipientKey]);
        }
      } catch {
        console.error("MacNest email status could not be recorded.");
      } finally {
        try {
          await redisCommand(["DEL", lockKey]);
        } catch {
          console.error("MacNest request lock could not be released.");
        }
      }
    });

    return reply(200, resultBody("pending"));
  } catch {
    // If the email was already accepted, the cached idempotency record lets a retry recover safely.
    return reply(503, { error: "We couldn’t prepare the download just now. Please try again." });
  }
}
