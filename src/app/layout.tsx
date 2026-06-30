import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Update this to the real domain once deployed (used for OG/Twitter image URLs)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://astrothangabharthi.com"),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.astrologerName} | Vedic Astrologer`,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: `Authentic Vedic astrology consultations with ${siteConfig.astrologerName} at ${siteConfig.brandName}, ${siteConfig.location}. Marriage matching, fertility, love marriage, and life guidance. Est. ${siteConfig.established}.`,
  openGraph: {
    title: `${siteConfig.brandName} — ${siteConfig.astrologerName}`,
    description: `Authentic Vedic astrology consultations. ${siteConfig.tagline}`,
    type: "website",
    images: [{ url: "/logo.jpeg", width: 1024, height: 1024, alt: "Astro Thangabharthi" }],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
          style={{ background: "var(--champagne-gold)", color: "var(--midnight)" }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
