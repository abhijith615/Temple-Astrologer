import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, Prose } from "@/components/ui";
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
      <PageHero
        eyebrow="A Sacred Heritage"
        title={t.title}
        subtitle={t.intro}
      />

      {/* History narrative */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="The Sacred Tradition" title="Origins in Divine Worship" align="left" onLight />
          <div className="mt-8 space-y-5">
            {t.history.map((p, i) => (
              <Prose key={i} onLight>{p}</Prose>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[860px] mx-auto">
          <SectionHeading eyebrow="Why Devotees Come" title={t.significance.title} />
          <ul className="mt-12 space-y-4 max-w-2xl mx-auto">
            {t.significance.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl p-5 border"
                style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.1)" }}
              >
                <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">✦</span>
                <span className="text-sm leading-relaxed text-[var(--text-on-dark-muted)]">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-12 text-center max-w-2xl mx-auto">
            <p className="font-display text-xl md:text-2xl font-light italic text-soft-gold leading-relaxed">
              &ldquo;{t.significance.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

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
