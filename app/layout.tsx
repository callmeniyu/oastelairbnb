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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteDescription =
  "Earn more, stress less with Oastel. Full-service property management in Cameron Highlands, from setup to daily operations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oastel | Short Term Rental Management in Cameron Highlands",
    template: "%s | Oastel",
  },
  description: siteDescription,
  applicationName: "Oastel",
  keywords: [
    "short term rental management",
    "Airbnb management",
    "Cameron Highlands",
    "property management",
    "OTA management",
    "vacation rental",
    "hospitality management",
  ],
  authors: [{ name: "Oastel" }],
  creator: "Oastel",
  publisher: "Oastel",
  category: "Hospitality",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Oastel | Short Term Rental Management in Cameron Highlands",
    description: siteDescription,
    type: "website",
    locale: "en_MY",
    url: "/",
    siteName: "Oastel",
    images: [
      {
        url: "/favicons/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Oastel",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Oastel | Short Term Rental Management in Cameron Highlands",
    description: siteDescription,
    images: ["/favicons/apple-touch-icon.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  themeColor: "#0f172a",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
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
