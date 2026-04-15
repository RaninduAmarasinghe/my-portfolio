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

  title: "Ranindu Amarasinghe | Backend Developer Portfolio",
  description:
    "Ranindu Amarasinghe (Ranidu) is a Backend Developer specializing in Java and Spring Boot. Explore projects, skills, and portfolio.",

  keywords: [
    "Ranindu Amarasinghe",
    "Ranindu",
    "Ranidu",
    "Ranindu developer",
    "Backend Developer Sri Lanka",
    "Java Spring Boot Developer",
  ],

  authors: [{ name: "Ranindu Amarasinghe" }],
  creator: "Ranindu Amarasinghe",

  openGraph: {
    title: "Ranindu Amarasinghe | Backend Developer",
    description:
      "Portfolio of Ranindu Amarasinghe, a Backend Developer working with Java and Spring Boot.",
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

  robots: {
    index: true,
    follow: true,
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