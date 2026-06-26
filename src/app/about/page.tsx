import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, Prose, ClosingCTA } from "@/components/ui";
import { aboutContent } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2010, Arutperunjothi Jothida Nilayam is a premier Vedic astrology consultation and training centre in Thirupur, Tamil Nadu.",
};

export default function AboutPage() {
  const a = aboutContent;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} subtitle={a.intro} />

      {/* Who We Are */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="Our Foundation" title={a.whoWeAre.title} align="left" onLight />
          <div className="mt-8 space-y-5">
            {a.whoWeAre.body.map((p, i) => (
              <Prose key={i} onLight>{p}</Prose>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading eyebrow="Areas of Mastery" title={a.specialities.title} />
          <p className="text-center mt-4 mb-14 text-[var(--text-on-dark-muted)] max-w-xl mx-auto">
            {a.specialities.intro}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.specialities.items.map((item, i) => (
              <article
                key={item.title}
                className="rounded-xl p-7 border"
                style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.1)" }}
              >
                <span className="font-display text-2xl text-gold/50 font-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-light text-ivory mt-3 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-on-dark-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Recognition (two-up) */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Learn With Us" title={a.education.title} align="left" onLight />
            <div className="mt-6">
              <Prose onLight>{a.education.body}</Prose>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Trusted Widely" title={a.recognition.title} align="left" onLight />
            <div className="mt-6">
              <Prose onLight>{a.recognition.body}</Prose>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Guide You On */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--deep-indigo)" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <SectionHeading eyebrow="Your Birth Chart Reveals" title={a.guideOn.title} />
          <p className="mt-4 mb-12 text-[var(--text-on-dark-muted)] max-w-xl mx-auto">
            {a.guideOn.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {a.guideOn.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm border"
                style={{
                  borderColor: "rgba(200,162,75,0.3)",
                  color: "var(--soft-gold)",
                  background: "rgba(200,162,75,0.05)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <p className="eyebrow mb-6">{a.promise.title}</p>
          <p className="font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-light leading-snug text-ivory">
            {a.promise.body}
          </p>
        </div>
      </section>

      <ClosingCTA statement="Begin your journey with a consultation that truly listens." />
    </>
  );
}
