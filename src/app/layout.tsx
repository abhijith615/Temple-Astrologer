import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Mulish is the closest free, self-hosted match for the proprietary
// "Avenir Next". Avenir Next is preferred first for visitors who have it.
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${mulish.variable} h-full`}>
      <body
        className="min-h-full"
        style={{
          fontFamily:
            '"Avenir Next", "Avenir", var(--font-mulish), system-ui, -apple-system, sans-serif',
        }}
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
