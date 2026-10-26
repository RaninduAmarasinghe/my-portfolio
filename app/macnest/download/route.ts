import { NextResponse } from "next/server";

import { getMacNestBrowserDownloadUrl } from "../download-config";

export function GET(request: Request) {
  try {
    return NextResponse.redirect(new URL(getMacNestBrowserDownloadUrl(), request.url), {
      status: 302,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      { error: "The MacNest download is temporarily unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
