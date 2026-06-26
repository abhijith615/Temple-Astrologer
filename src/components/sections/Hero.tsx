"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Starfield from "@/components/Starfield";
import { siteConfig, homeContent } from "@/lib/config";

/* Round to a fixed precision so SSR and client render identical SVG coords */
const round = (n: number) => Math.round(n * 1000) / 1000;

/* Slow-rotating zodiac wheel */
function ZodiacWheel({ opacity }: { opacity: number }) {
  const symbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 m-auto w-[520px] h-[520px] max-w-[90vw] max-h-[90vw] pointer-events-none"
      aria-hidden="true"
      style={{ opacity, transition: "opacity 0.5s ease" }}
    >
      <g
        fill="none"
        stroke="rgba(200,162,75,0.16)"
        strokeWidth="0.8"
        transform="translate(200,200)"
        style={{ animation: "spin 120s linear infinite", transformOrigin: "200px 200px" }}
      >
        <circle cx="0" cy="0" r="180" />
        <circle cx="0" cy="0" r="140" />
        <circle cx="0" cy="0" r="100" />
        {symbols.map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={round(Math.cos(angle) * 100)}
              y1={round(Math.sin(angle) * 100)}
              x2={round(Math.cos(angle) * 180)}
              y2={round(Math.sin(angle) * 180)}
            />
          );
        })}
        {symbols.map((s, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <text
              key={i}
              x={round(Math.cos(angle - Math.PI / 2) * 162)}
              y={round(Math.sin(angle - Math.PI / 2) * 162 + 4)}
              textAnchor="middle"
              fontSize="13"
              fill="rgba(200,162,75,0.32)"
              stroke="none"
            >
              {s}
            </text>
          );
        })}
      </g>
      <style>{`@keyframes spin { from { transform: translate(200px,200px) rotate(0deg);} to { transform: translate(200px,200px) rotate(360deg);} }`}</style>
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
      setProgress(1);
      return;
    }
    const onScroll = () => {
      const pinHeight = window.innerHeight * 1.5;
      const p = Math.min(1, Math.max(0, window.scrollY / pinHeight));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = prefersReduced;
  const eyebrowO = r ? 1 : progress > 0.05 ? Math.min(1, (progress - 0.05) / 0.1) : 0;
  const line1O = r ? 1 : progress > 0.15 ? Math.min(1, (progress - 0.15) / 0.1) : 0;
  const line2O = r ? 1 : progress > 0.24 ? Math.min(1, (progress - 0.24) / 0.1) : 0;
  const subO = r ? 1 : progress > 0.34 ? Math.min(1, (progress - 0.34) / 0.1) : 0;
  const wheelO = r ? 0.5 : progress > 0.45 ? Math.min(0.55, (progress - 0.45) / 0.2) : 0;
  const portraitO = r ? 1 : progress > 0.5 ? Math.min(1, (progress - 0.5) / 0.2) : 0;
  const statsO = r ? 1 : progress > 0.72 ? Math.min(1, (progress - 0.72) / 0.15) : 0;

  const ty = (o: number) => (r ? 0 : o < 1 ? 40 - o * 40 : 0);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: r ? "auto" : "250vh" }}
      aria-label="Hero"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden grain-overlay flex"
        style={{ background: "linear-gradient(to bottom, var(--midnight) 0%, var(--deep-indigo) 100%)" }}
      >
        <Starfield density={200} />
        <ZodiacWheel opacity={wheelO} />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center py-24">
          <p className="eyebrow mb-7" style={{ opacity: eyebrowO }}>
            {siteConfig.astrologerName} · Vedic Astrologer
          </p>

          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.05] font-light text-ivory">
            <span className="block" style={{ opacity: line1O, transform: `translateY(${ty(line1O)}px)` }}>
              Celestial Insight.
            </span>
            <span className="block text-gold" style={{ opacity: line2O, transform: `translateY(${ty(line2O)}px)` }}>
              Timeless Guidance.
            </span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-[var(--text-on-dark-muted)] max-w-xl"
            style={{ opacity: subO, transform: `translateY(${ty(subO)}px)` }}
          >
            {homeContent.hero.sub}
          </p>

          {/* Logo */}
          <div
            className="mt-9 relative"
            style={{ opacity: portraitO, transform: `translateY(${ty(portraitO)}px)` }}
          >
            <div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto border-2 border-[rgba(200,162,75,0.35)] overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(200,162,75,0.2), 0 0 120px rgba(200,162,75,0.07)" }}
            >
              <Image
                src="/logo.jpeg"
                alt="Astro Thangabharthi"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Credentials + CTAs */}
          <div className="mt-9" style={{ opacity: statsO }}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
              {siteConfig.credentials.map((c, i) => (
                <div key={c} className="flex items-center gap-6">
                  <span className="text-sm text-soft-gold">{c}</span>
                  {i < siteConfig.credentials.length - 1 && (
                    <span className="text-gold/30" aria-hidden="true">·</span>
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
                className="px-8 py-3.5 rounded-full text-sm font-medium text-ivory border border-white/20 hover:border-white/40 transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: progress > 0.1 ? 0 : 1, transition: "opacity 0.3s" }}
          aria-hidden="true"
        >
          <span className="eyebrow" style={{ color: "rgba(169,174,194,0.6)" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[rgba(200,162,75,0.4)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
