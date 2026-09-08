import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Muhammad Agil, Backend Engineer",
  description:
    "Portfolio of Muhammad Agil, backend engineer building fintech, e-commerce, HR, and IoT platforms in Go and Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3e08916b-f787-46b2-b2de-3f613a0f2c37"
        />
      </body>
    </html>
  );
}
