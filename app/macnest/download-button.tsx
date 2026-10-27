"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, LoaderCircle, X } from "lucide-react";
import { type FormEvent, useEffect, useId, useRef, useState } from "react";

import appIcon from "../../assets/macnest-icon.png";

type DownloadResult = {
  accepted: true;
  downloadUrl: string;
  emailStatus: "sent" | "failed" | "pending" | "recent_request";
};

type Props = {
  className: string;
  label?: string;
  iconSize?: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const installationGuidePath = "/downloads/MacNest-Installation-Guide.txt";
const emailStatuses = ["sent", "failed", "pending", "recent_request"] as const;

type DownloadResponse = DownloadResult | { error?: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isDownloadResult(value: unknown): value is DownloadResult {
  return isRecord(value)
    && value.accepted === true
    && typeof value.downloadUrl === "string"
    && typeof value.emailStatus === "string"
    && emailStatuses.some((status) => status === value.emailStatus);
}

async function readDownloadResponse(response: Response): Promise<DownloadResponse | null> {
  const contentType = response.headers.get("content-type")?.toLowerCase() || "";
  if (!contentType.includes("application/json") && !contentType.includes("+json")) return null;

  try {
    const text = await response.text();
    if (!text.trim()) return null;
    const payload: unknown = JSON.parse(text);
    if (isDownloadResult(payload)) return payload;
    if (isRecord(payload) && typeof payload.error === "string") return { error: payload.error };
    return null;
  } catch {
    return null;
  }
}

function startDownload(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener noreferrer";
  document.body.append(link);
  link.click();
  link.remove();
}

function createRequestId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function MacNestDownloadButton({ className, label = "Download for macOS", iconSize = 16 }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const emailId = useId();
  const errorId = useId();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const requestIdRef = useRef(createRequestId());
  const submissionInProgressRef = useRef(false);
  const downloadStartedRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeDialog() {
    setOpen(false);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }

  function handleClose() {
    setOpen(false);
    if (!submissionInProgressRef.current) {
      setEmail("");
      setError("");
      setSubmitting(false);
      setResult(null);
      downloadStartedRef.current = false;
      requestIdRef.current = createRequestId();
    }
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInProgressRef.current || result) return;
    const normalizedEmail = email.trim().toLowerCase();
    if (!emailPattern.test(normalizedEmail) || normalizedEmail.length > 254) {
      setError("Enter a valid email address to continue.");
      inputRef.current?.focus();
      return;
    }

    setError("");
    submissionInProgressRef.current = true;
    setSubmitting(true);
    const requestId = requestIdRef.current;
    try {
      const response = await fetch("/api/macnest/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail, requestId }),
      });
      const data = await readDownloadResponse(response);
      if (!response.ok || !data || !("accepted" in data)) {
        if (response.status === 429) {
          throw new Error("Too many requests from this network. Please wait a little and try again.");
        }
        const responseError = data && "error" in data ? data.error : undefined;
        throw new Error(responseError || (response.status >= 500
          ? "The download service is temporarily unavailable. Please try again later."
          : "We couldn’t prepare the download. Please try again."));
      }

      if (!downloadStartedRef.current) {
        downloadStartedRef.current = true;
        startDownload(data.downloadUrl, "MacNest_1.0.1_universal.dmg");
      }
      setResult(data);
      if (data.emailStatus === "pending") {
        void refreshEmailStatus(normalizedEmail, requestId);
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "We couldn’t prepare the download. Please try again.");
    } finally {
      submissionInProgressRef.current = false;
      setSubmitting(false);
    }
  }

  async function refreshEmailStatus(normalizedEmail: string, requestId: string) {
    for (let attempt = 0; attempt < 8; attempt += 1) {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      if (requestIdRef.current !== requestId) return;

      try {
        const response = await fetch("/api/macnest/download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: normalizedEmail, requestId }),
        });
        if (!response.ok) return;

        const data = await readDownloadResponse(response);
        if (!data || !("accepted" in data)) return;
        setResult((current) => current ? { ...current, emailStatus: data.emailStatus } : current);
        if (data.emailStatus !== "pending") return;
      } catch {
        return;
      }
    }
  }

  return (
    <>
      <button ref={openerRef} type="button" className={className} onClick={() => setOpen(true)}>
        {label} <ArrowDownToLine size={iconSize} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={`${emailId}-title`}
        aria-describedby={`${emailId}-description`}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={handleClose}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[440px] overflow-y-auto rounded-[24px] border border-white/[0.12] bg-[#101211] p-0 text-white shadow-[0_30px_120px_rgba(0,0,0,0.7)] backdrop:bg-black/75 backdrop:backdrop-blur-[2px]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open && <motion.div
            key={result ? "success" : "form"}
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-6 sm:p-8"
          >
            {!result && (
              <button
                type="button"
                onClick={closeDialog}
                aria-label="Close download dialog"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BE51D]"
              >
                <X size={17} aria-hidden="true" />
              </button>
            )}

            <Image src={appIcon} alt="MacNest app icon" width={48} height={48} className="rounded-[14px] shadow-[0_8px_28px_rgba(0,0,0,0.35)]" />

            {result ? (
              <div aria-live="polite" className="mt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9BE51D]">MacNest for macOS</p>
                <h2 id={`${emailId}-title`} className="mt-2.5 text-2xl font-medium tracking-[-0.04em]">You’re all set.</h2>
                <p id={`${emailId}-description`} className="mt-2.5 text-sm leading-6 text-gray-400">
                  Thank you for giving MacNest a try! Your MacNest DMG download should be starting now. {result.emailStatus === "sent" ? "A confirmation email with the download link and setup details is on its way." : result.emailStatus === "pending" ? "Your confirmation email is still being processed." : result.emailStatus === "recent_request" ? "Hope MacNest makes your development workflow a little smoother!" : "We couldn’t send the confirmation email."}
                </p>
                <a href={installationGuidePath} download="MacNest-Installation-Guide.txt" className="mt-4 inline-flex min-h-8 items-center text-xs text-gray-400 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BE51D]">Download installation guide</a>
                <button type="button" onClick={closeDialog} className="mt-6 min-h-11 w-full rounded-full border border-white/[0.12] text-sm text-gray-300 transition hover:border-white/25 hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BE51D]">Done</button>
              </div>
            ) : (
              <>
                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9BE51D]">MACNEST FOR MACOS</p>
                <h2 id={`${emailId}-title`} className="mt-2.5 text-2xl font-medium tracking-[-0.04em]">Your Mac. Better organized.</h2>
                <p id={`${emailId}-description`} className="mt-2.5 text-sm leading-6 text-gray-400">Enter your email to download MacNest and receive the installation guide.</p>

                <form className="mt-5" onSubmit={handleSubmit} noValidate>
                  <label htmlFor={emailId} className="mb-2 block text-xs font-medium text-gray-200">Email address</label>
                  <input
                    ref={inputRef}
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${errorId} ${emailId}-privacy` : `${emailId}-privacy`}
                    placeholder="you@example.com"
                    className="min-h-12 w-full rounded-xl border border-white/[0.13] bg-black/25 px-4 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-[#9BE51D]/70 focus:ring-2 focus:ring-[#9BE51D]/15 aria-[invalid=true]:border-rose-400/70"
                  />
                  {error && <p id={errorId} role="alert" className="mt-2 text-xs leading-5 text-rose-300">{error}</p>}
                  <button type="submit" disabled={submitting} className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#9BE51D] px-5 text-sm font-semibold text-[#10140a] transition-colors duration-200 hover:bg-[#b2ed4c] active:bg-[#8acb12] disabled:cursor-wait disabled:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D] motion-reduce:transition-none">
                    {submitting ? <><LoaderCircle size={15} className={reduceMotion ? undefined : "animate-spin"} aria-hidden="true" /> Preparing your download…</> : <>Download MacNest <ArrowDownToLine size={15} aria-hidden="true" /></>}
                  </button>
                </form>
                <p id={`${emailId}-privacy`} className="mt-3 text-center text-[11px] leading-5 text-gray-500">Your email is used only for download-related updates.</p>
              </>
            )}
          </motion.div>}
        </AnimatePresence>
      </dialog>
    </>
  );
}
