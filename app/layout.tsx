import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

// local components
import Header from "@/components/header.component";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "PinFetch - Pinterest Video Downloader",
  description: "Download Pinterest videos quickly and easily.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main className="min-h-screen bg-white text-gray-900 font-sans">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
