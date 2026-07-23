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
  title: "CYBERNETIX // Neural-OS Telemetry & Augmentation Platform",
  description: "Next-generation neural interface, bionic telemetry, and cybernetic augmentation dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased selection:bg-purple-500/30 selection:text-purple-200`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
