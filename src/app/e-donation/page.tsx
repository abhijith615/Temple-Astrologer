import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { SectionHeading, Prose } from "@/components/ui";
import { PhotoBand } from "@/components/art";
import { donationContent } from "@/lib/config";

export const metadata: Metadata = {
  title: "E-Donation",
  description:
    "Support Arulmigu Sri Naga Kanniamman Temple through online donations — daily poojas, festivals, annadhanam, and charitable activities.",
};

export default function EDonationPage() {
  const d = donationContent;
  return (
    <>
      <PageHero
        eyebrow="Seva & Giving"
        title="Support the Temple Through Online Donations"
        subtitle={d.intro}
      />

      {/* Quote */}
      <section className="py-16 px-6" style={{ background: "var(--deep-indigo)" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <p className="font-display text-xl md:text-2xl font-light italic text-soft-gold leading-relaxed">
            &ldquo;{d.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* Temple sanctum showcase */}
      <div className="relative h-[42vh] md:h-[56vh] w-full overflow-hidden">
        <Image
          src="/img/temple-sanctum.jpg"
          alt="The temple sanctum at dusk with Lord Vinayagar, a lit lamp, and sacred scrolls"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,14,26,0.3), rgba(11,14,26,0.6))" }} aria-hidden="true" />
      </div>

      {/* Categories */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[900px] mx-auto">
          <SectionHeading eyebrow="Choose a Category" title="Donation Categories" onLight />
          <p className="text-center mt-4 mb-12" style={{ color: "var(--text-on-light)", opacity: 0.6 }}>
            Please choose any of the following donation categories:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {d.categories.map((c) => (
              <article
                key={c.n}
                className="rounded-2xl p-8 border"
                style={{ background: "white", borderColor: "rgba(200,162,75,0.18)" }}
              >
                <span className="font-display text-3xl text-gold/50 font-light">{c.n}</span>
                <h3 className="font-display text-xl font-light mt-2 mb-3" style={{ color: "var(--text-on-light)" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-light)", opacity: 0.7 }}>
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donate via QR */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[560px] mx-auto text-center">
          <SectionHeading eyebrow="Quick & Secure" title="Donate via QR Code" />
          <p className="mt-4 mb-10 text-sm text-[var(--text-on-dark-muted)]">
            Scan the QR Code below using any UPI-enabled application:
          </p>
          <div
            className="w-52 h-52 mx-auto rounded-2xl flex items-center justify-center mb-8"
            style={{ background: "var(--deep-indigo)", border: "1px dashed rgba(200,162,75,0.3)" }}
            aria-hidden="true"
          >
            <span className="text-gold/40 text-sm text-center px-4">[Place temple<br />QR code image here]</span>
          </div>
          <div
            className="inline-block rounded-full px-6 py-3 mb-8"
            style={{ background: "rgba(200,162,75,0.1)", border: "1px solid rgba(200,162,75,0.3)" }}
          >
            <span className="text-xs text-[var(--text-on-dark-muted)]">UPI ID: </span>
            <span className="font-display text-base text-gold">{d.upi}</span>
          </div>
          <div>
            <p className="eyebrow mb-4" style={{ opacity: 0.6 }}>Supported Apps</p>
            <div className="flex flex-wrap justify-center gap-3">
              {d.apps.map((app) => (
                <span
                  key={app}
                  className="px-3 py-1.5 text-xs rounded-full border"
                  style={{ borderColor: "rgba(200,162,75,0.25)", color: "var(--text-on-dark-muted)" }}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Privacy */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="Please Note" title="Terms & Conditions" align="left" onLight />
          <ul className="mt-8 space-y-3">
            {d.terms.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0" aria-hidden="true">·</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-on-light)", opacity: 0.75 }}>
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-xl font-light mt-12 mb-4" style={{ color: "var(--text-on-light)" }}>
            Privacy Policy
          </h3>
          <Prose onLight>{d.privacy}</Prose>
        </div>
      </section>

      {/* Closing blessing over temple photo */}
      <PhotoBand src="/img/temple-sunset.jpg" alt="Temple gopuram at sunset">
        <span className="text-3xl mb-6 block" aria-hidden="true">🙏</span>
        <p className="font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-light leading-snug text-soft-gold">
          {d.closing}
        </p>
      </PhotoBand>
    </>
  );
}
