import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { SectionHeading, Prose } from "@/components/ui";
import { templeContent } from "@/lib/config";

export const metadata: Metadata = {
  title: "Temple History",
  description:
    "The sacred history of Arulmigu Sri Naga Kanniamman Temple, Pongalur — a powerful Parihara Sthalam for Naga Dosha, marriage, and childbirth blessings.",
};

const deities = [
  {
    src: "/img/deity-naga.jpg",
    name: "Sri Naga Kanniamman",
    role: "The Presiding Goddess",
    text: "The powerful guardian goddess who protects devotees from obstacles and grants peace, prosperity, and spiritual well-being.",
  },
  {
    src: "/img/deity-vinayagar.jpg",
    name: "Lord Vinayagar",
    role: "Remover of Obstacles",
    text: "Worshipped first for wisdom, knowledge, and auspicious beginnings — sought for success in all endeavours.",
  },
  {
    src: "/img/deity-karuppasamy.jpg",
    name: "Sri Karuppasamy",
    role: "The Guardian Deity",
    text: "The protector of the temple and community, revered for justice, courage, and safeguarding devotees from all harm.",
  },
];

export default function TempleHistoryPage() {
  const t = templeContent;
  return (
    <>
      <PageHero eyebrow="A Sacred Heritage" title={t.title} subtitle={t.intro} />

      {/* Sacred deities gallery */}
      <section className="py-24 md:py-28 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="The Divine Presence" title="Deities of the Temple" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {deities.map((d) => (
              <article
                key={d.name}
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.2)" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={d.src} alt={d.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" style={{ objectPosition: "center 25%" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,14,26,0.55), transparent 55%)" }} aria-hidden="true" />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-1">{d.role}</p>
                  <h3 className="font-display text-xl font-light text-ivory mb-3">{d.name}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-on-dark-muted)]">{d.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
