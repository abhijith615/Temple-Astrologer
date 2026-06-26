import Hero from "@/components/sections/Hero";
import { SectionHeading, Prose, ClosingCTA } from "@/components/ui";
import { homeContent, siteConfig } from "@/lib/config";

const trustItems = [
  "Est. 2010",
  "Thirupur, Tamil Nadu",
  "Consultations Across India & Abroad",
  "100% Confidential",
];

export default function Home() {
  const c = homeContent;
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <div
        className="border-y border-[rgba(200,162,75,0.15)] py-5 px-6"
        style={{ background: "var(--deep-indigo)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-0">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center">
              <span className="text-sm text-[var(--text-on-dark-muted)]">{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block mx-6 text-[rgba(200,162,75,0.3)]" aria-hidden="true">·</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto text-center">
          <p className="eyebrow mb-6" style={{ color: "var(--champagne-gold)" }}>A Personal Calling</p>
          <p
            className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.4] font-light italic"
            style={{ color: "var(--text-on-light)" }}
          >
            &ldquo;{c.introduction}&rdquo;
          </p>
        </div>
      </section>

      {/* About Vedic Astrology */}
      <section className="py-24 md:py-32 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="The Science of Light" title={c.aboutVedic.title} align="left" />
          <div className="mt-8 space-y-5">
            {c.aboutVedic.body.map((p, i) => (
              <Prose key={i}>{p}</Prose>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-24 md:py-32 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="Why It Matters" title={c.purpose.title} align="left" onLight />
          <div className="mt-8">
            <Prose onLight>{c.purpose.body}</Prose>
          </div>
        </div>
      </section>

      {/* Science & Cosmos */}
      <section className="py-24 md:py-32 px-6" style={{ background: "var(--deep-indigo)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="Ancient Wisdom, Modern Echoes" title={c.science.title} align="left" />
          <div className="mt-8">
            <Prose>{c.science.body}</Prose>
          </div>
        </div>
      </section>

      {/* Credentials block */}
      <section
        className="py-24 md:py-28 px-6 relative overflow-hidden"
        style={{ background: "var(--midnight)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,162,75,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <p className="eyebrow mb-5">{c.credentialsBlock.heading}</p>
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.6rem)] font-light text-gold leading-snug">
            {c.credentialsBlock.line}
          </p>
          <p className="mt-5 text-sm text-[var(--text-on-dark-muted)]">{c.credentialsBlock.sub}</p>
        </div>
      </section>

      <ClosingCTA statement={`${siteConfig.tagline} Let us read your chart together.`} />
    </>
  );
}
