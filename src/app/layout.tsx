import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Word Versus — The Right Word, Every Time",
  description:
    "Word Versus teaches the subtle differences between words you've been using interchangeably, like \"alter\" vs \"modify\" or \"start\" vs \"begin\", through a new word pair every day.",
  openGraph: {
    title: "Word Versus — The Right Word, Every Time",
    description:
      "Word Versus teaches the subtle differences between words you've been using interchangeably, so your writing sounds as sharp as your thinking.",
    siteName: "Word Versus",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "Word Versus logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Word Versus — The Right Word, Every Time",
    description:
      "Word Versus teaches the subtle differences between words you've been using interchangeably, so your writing sounds as sharp as your thinking.",
    images: ["/images/logo.png"],
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
      <body suppressHydrationWarning className="min-h-full flex flex-col ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
