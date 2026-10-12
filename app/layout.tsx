import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// local components
import Header from "@/components/header.component";

// const
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "@/constants/site.constant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="min-h-screen bg-white font-sans text-gray-900">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
