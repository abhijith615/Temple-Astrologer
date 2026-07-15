"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Starfield from "@/components/Starfield";
import { siteConfig, homeContent } from "@/lib/config";

const round = (n: number) => Math.round(n * 1000) / 1000;

/* Slow-rotating zodiac wheel */
function ZodiacWheel({ opacity }: { opacity: number }) {
  const symbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 m-auto w-[560px] h-[560px] max-w-[92vw] max-h-[92vw] pointer-events-none"
      aria-hidden="true"
      style={{ opacity, transition: "opacity 0.4s ease" }}
    >
      <g
        fill="none"
        stroke="rgba(228,206,151,0.3)"
        strokeWidth="0.7"
        style={{ animation: "spin 140s linear infinite", transformOrigin: "200px 200px" }}
      >
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="100" />
        {symbols.map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={round(200 + Math.cos(a) * 100)}
              y1={round(200 + Math.sin(a) * 100)}
              x2={round(200 + Math.cos(a) * 180)}
              y2={round(200 + Math.sin(a) * 180)}
            />
          );
        })}
        {symbols.map((s, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <text
              key={i}
              x={round(200 + Math.cos(a - Math.PI / 2) * 162)}
              y={round(200 + Math.sin(a - Math.PI / 2) * 162 + 4)}
              textAnchor="middle"
              fontSize="13"
              fill="rgba(228,206,151,0.5)"
              stroke="none"
            >
              {s}
            </text>
          );
        })}
      </g>
      <style>{`@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }`}</style>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setProgress(0.85);
      return;
    }
    const onScroll = () => {
      const pinHeight = window.innerHeight * 1.6;
      const p = Math.min(1, Math.max(0, window.scrollY / pinHeight));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = prefersReduced;
  // Photo prominent at start, recedes as text appears
  const overlayDark = r ? 0.62 : 0.18 + progress * 0.62; // 0.18 → 0.8
  const starsO = r ? 1 : progress > 0.2 ? Math.min(1, (progress - 0.2) / 0.3) : 0;

  const eyebrowO = r ? 1 : Math.min(1, progress / 0.04 + 0.15);
  const line1O = r ? 1 : progress > 0.16 ? Math.min(1, (progress - 0.16) / 0.1) : 0;
  const line2O = r ? 1 : progress > 0.25 ? Math.min(1, (progress - 0.25) / 0.1) : 0;
  const subO = r ? 1 : progress > 0.35 ? Math.min(1, (progress - 0.35) / 0.1) : 0;
  const wheelO = r ? 0.5 : progress > 0.4 ? Math.min(0.6, (progress - 0.4) / 0.25) : 0;
  const statsO = r ? 1 : progress > 0.62 ? Math.min(1, (progress - 0.62) / 0.18) : 0;

  const ty = (o: number) => (r ? 0 : o < 1 ? 36 - o * 36 : 0);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: r ? "auto" : "260vh" }}
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen overflow-hidden grain-overlay flex">
        {/* Photo background — separate desktop & mobile images */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, var(--midnight) 0%, var(--deep-indigo) 100%)" }}
        >
          {/* Desktop / tablet — full image, never cropped */}
          <Image
            src="/img/hero-desktop.jpg"
            alt="Dr. N. Thangabharathi writing a horoscope by lamplight"
            fill
            priority
            className="object-contain object-center hidden md:block"
            sizes="100vw"
          />
          {/* Mobile — full image, never cropped */}
          <Image
            src="/img/hero-mobile.jpg"
            alt="Dr. N. Thangabharathi writing a horoscope by lamplight"
            fill
            priority
            className="object-contain object-center md:hidden"
            sizes="100vw"
          />
          {/* Dark overlay that intensifies on scroll */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(11,14,26,${overlayDark}) 0%, rgba(11,14,26,${Math.min(0.92, overlayDark + 0.15)}) 100%)`,
            }}
          />
          {/* Gold radial glow */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(200,162,75,0.1) 0%, transparent 70%)" }}
          />
        </div>

        {/* Starfield fades in as photo darkens */}
        <div className="absolute inset-0" style={{ opacity: starsO }} aria-hidden="true">
          <Starfield density={180} />
        </div>

        <ZodiacWheel opacity={wheelO} />

        {/* Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center py-24">
          <p className="eyebrow mb-7" style={{ opacity: eyebrowO, color: "var(--soft-gold)" }}>
            {siteConfig.astrologerName} · Vedic Astrologer
          </p>

          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.05] font-light text-ivory drop-shadow-lg">
            <span className="block" style={{ opacity: line1O, transform: `translateY(${ty(line1O)}px)` }}>
              Celestial Insight.
            </span>
            <span className="block text-soft-gold" style={{ opacity: line2O, transform: `translateY(${ty(line2O)}px)` }}>
              Timeless Guidance.
            </span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-xl"
            style={{ opacity: subO, transform: `translateY(${ty(subO)}px)` }}
          >
            {homeContent.hero.sub}
          </p>

          {/* Credentials + CTAs */}
          <div className="mt-10" style={{ opacity: statsO }}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8">
              {siteConfig.credentials.map((c, i) => (
                <div key={c} className="flex items-center gap-5">
                  <span className="text-sm text-soft-gold">{c}</span>
                  {i < siteConfig.credentials.length - 1 && (
                    <span className="text-gold/40" aria-hidden="true">·</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="px-8 py-3.5 rounded-full text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)] hover:bg-[var(--soft-gold)] transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-3.5 rounded-full text-sm font-medium text-ivory border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: progress > 0.08 ? 0 : 1, transition: "opacity 0.3s" }}
          aria-hidden="true"
        >
          <span className="eyebrow" style={{ color: "rgba(246,241,231,0.8)" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[rgba(228,206,151,0.6)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
