import type { Metadata } from "next";
import MacNestPage from "./page-content";

export const metadata: Metadata = {
  title: "MacNest — A Modern Package Manager for macOS Developers",
  description:
    "Discover MacNest, a modern macOS desktop application for exploring Homebrew packages, managing development tools, and keeping your development environment organized.",
  openGraph: {
    title: "MacNest — A Modern Package Manager for macOS Developers",
    description:
      "Explore Homebrew packages and manage your development tools in a thoughtfully designed macOS desktop application.",
    url: "/macnest",
    type: "website",
  },
};

export default function Page() {
  return <MacNestPage />;
}
