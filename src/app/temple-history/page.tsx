import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { SectionHeading, Prose } from "@/components/ui";
import { FramedImage, PhotoBand } from "@/components/art";
import { templeContent } from "@/lib/config";

export const metadata: Metadata = {
  title: "Temple History",
  description:
    "The sacred history of Arulmigu Sri Naga Kanniamman Temple, Pongalur — a powerful Parihara Sthalam for Naga Dosha, marriage, and childbirth blessings.",
};

export default function TempleHistoryPage() {
  const t = templeContent;
  return (
    <>
      <PageHero eyebrow="A Sacred Heritage" title={t.title} subtitle={t.intro} />

      {/* Showcase image strip */}
      <div className="relative h-[42vh] md:h-[58vh] w-full overflow-hidden">
        <Image
          src="/img/temple-sunset.jpg"
          alt="The temple gopuram at sunset, with a lit brass lamp and horoscope on the steps"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,14,26,0.6))" }} aria-hidden="true" />
      </div>

      {/* History narrative — two column */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 md:items-start">
          <div className="md:sticky md:top-28">
            <SectionHeading eyebrow="The Sacred Tradition" title="Origins in Divine Worship" align="left" onLight />
            <div className="mt-6">
              <FramedImage src="/img/temple-interior.jpg" alt="Temple interior with deities, garlands, lamps and a sacred manuscript" aspect="4/5" accent={false} />
            </div>
          </div>
          <div className="space-y-5">
            {t.history.map((p, i) => (
              <Prose key={i} onLight>{p}</Prose>
            ))}
          </div>
        </div>
      </section>

      {/* Significance over photo */}
      <PhotoBand src="/img/temple-dawn.jpg" alt="Temple courtyard at dawn">
        <p className="eyebrow mb-4">Why Devotees Come</p>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-light text-ivory mb-10">
          {t.significance.title}
        </h2>
        <ul className="space-y-3 max-w-2xl mx-auto text-left">
          {t.significance.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl p-4 border"
              style={{ background: "rgba(11,14,26,0.4)", borderColor: "rgba(200,162,75,0.18)" }}
            >
              <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">✦</span>
              <span className="text-sm leading-relaxed text-ivory/85">{item}</span>
            </li>
          ))}
        </ul>
        <blockquote className="mt-10 max-w-2xl mx-auto">
          <p className="font-display text-xl md:text-2xl font-light italic text-soft-gold leading-relaxed">
            &ldquo;{t.significance.quote}&rdquo;
          </p>
        </blockquote>
      </PhotoBand>

      {/* Sri Naga Devathai Amman */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="The Divine Mother" title={t.nagaDevathai.title} align="left" onLight />
          <div className="mt-8 space-y-5">
            {t.nagaDevathai.body.map((p, i) => (
              <Prose key={i} onLight>{p}</Prose>
            ))}
          </div>

          <h3 className="font-display text-xl font-light mt-10 mb-5" style={{ color: "var(--text-on-light)" }}>
            {t.nagaDevathai.offeringsIntro}
          </h3>
          <ul className="space-y-3">
            {t.nagaDevathai.offerings.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0" aria-hidden="true">·</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-on-light)", opacity: 0.78 }}>
                  {o}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Prose onLight>{t.nagaDevathai.putru}</Prose>
          </div>

          <div
            className="mt-10 rounded-xl p-7 text-center border"
            style={{ background: "rgba(200,162,75,0.06)", borderColor: "rgba(200,162,75,0.25)" }}
          >
            <p className="text-2xl mb-3" aria-hidden="true">🙏</p>
            <p className="font-display text-lg md:text-xl font-light italic" style={{ color: "var(--text-on-light)" }}>
              &ldquo;{t.nagaDevathai.blessing}&rdquo;
            </p>
          </div>

          <p className="mt-8 text-center text-sm" style={{ color: "var(--text-on-light)", opacity: 0.6 }}>
            {t.nagaDevathai.closing}
          </p>
        </div>
      </section>
    </>
  );
}
