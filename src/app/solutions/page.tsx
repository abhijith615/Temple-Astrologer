import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Prose, ClosingCTA } from "@/components/ui";
import { solutions } from "@/lib/config";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Marriage matching, conception & fertility guidance, divorce & separation counsel, love marriage support, and delayed marriage solutions through authentic Vedic astrology.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Can Help"
        title="Solutions"
        subtitle="Every life carries its own celestial story. These are the areas in which we offer the deepest guidance — each consultation conducted with scholarship, honesty, and compassion."
      />

      {/* Quick nav */}
      <nav
        className="sticky top-[60px] z-30 border-y px-6 py-4 backdrop-blur-md"
        style={{ background: "rgba(11,14,26,0.85)", borderColor: "rgba(200,162,75,0.12)" }}
        aria-label="Solutions navigation"
      >
        <div className="max-w-[1100px] mx-auto flex gap-3 overflow-x-auto justify-start md:justify-center">
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs whitespace-nowrap px-3 py-1.5 rounded-full border transition-colors duration-200 text-[var(--text-on-dark-muted)] hover:text-ivory"
              style={{ borderColor: "rgba(200,162,75,0.2)" }}
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {solutions.map((sol, idx) => {
        const onLight = idx % 2 === 1;
        return (
          <section
            key={sol.id}
            id={sol.id}
            className="py-24 md:py-28 px-6 scroll-mt-32"
            style={{ background: onLight ? "var(--ivory)" : "var(--midnight)" }}
          >
            <div className="max-w-[860px] mx-auto">
              <p className="eyebrow mb-4" style={{ color: "var(--champagne-gold)" }}>
                {String(idx + 1).padStart(2, "0")} — Solution
              </p>
              <h2
                className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-light"
                style={{ color: onLight ? "var(--text-on-light)" : "var(--ivory)" }}
              >
                {sol.title}
              </h2>
              <p
                className="mt-3 font-display text-lg md:text-xl italic font-light"
                style={{ color: "var(--champagne-gold)" }}
              >
                {sol.subtitle}
              </p>

              <div className="mt-8">
                <Prose onLight={onLight}>{sol.intro}</Prose>
              </div>

              <div className="mt-8 space-y-8">
                {sol.blocks.map((b) => (
                  <div key={b.heading}>
                    <h3
                      className="font-display text-xl font-light mb-3"
                      style={{ color: onLight ? "var(--text-on-light)" : "var(--ivory)" }}
                    >
                      {b.heading}
                    </h3>
                    <Prose onLight={onLight}>{b.body}</Prose>
                  </div>
                ))}
              </div>

              {sol.list && (
                <div className="mt-10">
                  <h3
                    className="font-display text-xl font-light mb-5"
                    style={{ color: onLight ? "var(--text-on-light)" : "var(--ivory)" }}
                  >
                    {sol.list.heading}
                  </h3>
                  <div className="space-y-4">
                    {sol.list.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl p-5 border"
                        style={{
                          background: onLight ? "white" : "var(--deep-indigo)",
                          borderColor: "rgba(200,162,75,0.15)",
                        }}
                      >
                        <h4
                          className="text-sm font-semibold mb-1.5"
                          style={{ color: "var(--champagne-gold)" }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: onLight ? "var(--text-on-light)" : "var(--text-on-dark-muted)",
                            opacity: onLight ? 0.78 : 1,
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sol.closing && (
                <div
                  className="mt-10 rounded-xl p-7 border-l-2"
                  style={{
                    borderColor: "var(--champagne-gold)",
                    background: onLight ? "rgba(200,162,75,0.06)" : "rgba(200,162,75,0.04)",
                  }}
                >
                  <h3
                    className="font-display text-lg font-light mb-3"
                    style={{ color: onLight ? "var(--text-on-light)" : "var(--ivory)" }}
                  >
                    {sol.closing.heading}
                  </h3>
                  <Prose onLight={onLight}>{sol.closing.body}</Prose>
                </div>
              )}

              <div className="mt-10">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--champagne-gold)" }}
                >
                  Book a consultation for {sol.title} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <ClosingCTA statement="Whatever you are facing, there is a path forward. Let us find it together." />
    </>
  );
}
