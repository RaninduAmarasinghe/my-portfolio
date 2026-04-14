import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ranindu Amarasinghe | Backend Developer",
  description:
    "Backend Developer Trainee building real-world applications using Java and Spring Boot. Focused on scalable backend systems, performance, automation, and AI integration.",

      keywords: [
    "Ranindu Amarasinghe",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "Backend Engineer Sri Lanka",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Ranindu Amarasinghe" }],
  creator: "Ranindu Amarasinghe",
  
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Ranindu Amarasinghe | Backend Developer",
    description:
      "Backend Developer Trainee building real-world applications using Java and Spring Boot. Focused on scalable backend systems, performance, automation, and AI integration.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
