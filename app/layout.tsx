import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// local components
import Header from "@/components/header.component";
import JsonLd from "@/components/json-ld.component";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://pinvee.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Pinvee – Pinterest Video Downloader Online",
    template: "%s | Pinvee",
  },

  description:
    "Download Pinterest videos online for free with Pinvee. Paste a Pinterest video link to get your video and save it to your device in a few simple steps.",

  applicationName: "Pinvee",

  keywords: [
    "Pinterest video downloader",
    "download Pinterest videos",
    "Pinterest video downloader online",
    "Pinterest video download online",
    "Pinterest MP4 downloader",
    "Pinvee",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Pinvee – Pinterest Video Downloader Online",
    description:
      "Download Pinterest videos online for free. Paste your Pinterest video link and save your video with Pinvee.",
    url: "/",
    siteName: "Pinvee",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pinvee – Pinterest Video Downloader",
    description:
      "Download Pinterest videos online for free with Pinvee. Paste a video link and get started.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd url={siteUrl} />
        <main className="min-h-screen bg-white font-sans text-gray-900">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
