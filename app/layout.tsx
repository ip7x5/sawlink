import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  title: "SAWLINK | Elmas Tel Teknolojileri",
  description: "Elmas tel testere sarf malzemeleri, üretim ekipmanları ve teknik destek çözümleri.",
  applicationName: "SAWLINK",
  keywords: ["elmas tel", "mermer kesim", "üretim hattı", "diamond wire"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "SAWLINK | Elmas Tel Teknolojileri",
    description: "Kesim teknolojisinde profesyonel çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
