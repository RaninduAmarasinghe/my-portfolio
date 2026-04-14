import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranindu.dev"),

  title: "Ranindu Amarasinghe | Backend Developer",
  description:
    "Backend Developer Trainee building real-world applications using Java and Spring Boot.",

  openGraph: {
    title: "Ranindu Amarasinghe | Backend Developer",
    description:
      "Backend Developer Trainee building real-world applications using Java and Spring Boot.",
    url: "https://ranindu.dev",
    siteName: "Ranindu Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* 🔥 Analytics */}
        <Analytics />
      </body>
    </html>
  );
}