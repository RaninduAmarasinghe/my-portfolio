const DEFAULT_DOWNLOAD_PATH = "/downloads/MacNest_0.1.4_aarch64.dmg";
const DEFAULT_GITHUB_URL = "https://github.com/RaninduAmarasinghe/MacNest";
const DEFAULT_SITE_URL = "https://ranindu.dev";

function getSiteUrl() {
  const configured = process.env.SITE_URL?.trim() || DEFAULT_SITE_URL;
  const url = new URL(configured);
  if (url.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && url.hostname === "localhost" && url.protocol === "http:")) {
    throw new Error("SITE_URL must use HTTPS.");
  }
  return url.origin;
}

export function getMacNestDownloadUrl() {
  const configured = process.env.MACNEST_DOWNLOAD_URL?.trim() || DEFAULT_DOWNLOAD_PATH;
  const siteUrl = getSiteUrl();

  if (configured.startsWith("/") && !configured.startsWith("//")) {
    return new URL(configured, siteUrl).toString();
  }

  const url = new URL(configured);
  if (url.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && url.hostname === "localhost" && url.protocol === "http:")) {
    throw new Error("MACNEST_DOWNLOAD_URL must use HTTPS.");
  }
  return url.toString();
}

export function getMacNestBrowserDownloadUrl() {
  const configured = process.env.MACNEST_DOWNLOAD_URL?.trim() || DEFAULT_DOWNLOAD_PATH;
  if (configured.startsWith("/") && !configured.startsWith("//")) return configured;
  return getMacNestDownloadUrl();
}

export function getMacNestGithubUrl() {
  const configured = process.env.MACNEST_GITHUB_URL?.trim() || DEFAULT_GITHUB_URL;
  const url = new URL(configured);
  if (url.protocol !== "https:" || url.hostname !== "github.com") {
    throw new Error("MACNEST_GITHUB_URL must be an HTTPS GitHub URL.");
  }
  return url.toString();
}

export function getSiteOrigin() {
  return getSiteUrl();
}
