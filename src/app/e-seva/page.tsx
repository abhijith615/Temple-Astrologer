import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { PhotoBand } from "@/components/art";
import ESevaForm from "./ESevaForm";
import { eSevaContent, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "E-Seva — Online Astrology Services",
  description:
    "Receive authentic Vedic astrology guidance from anywhere in the world — delivered personally to your WhatsApp and Email by Dr. N. Thangabharathi.",
};

export default function ESevaPage() {
  const e = eSevaContent;
  return (
    <>
      <PageHero
        eyebrow={`${siteConfig.brandName} · Online Services`}
        title="E Seva — Digital Astrology Services"
        subtitle={e.intro}
      />

      {/* How it works steps */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {e.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl p-6 border text-center"
              style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-xl text-gold"
                style={{ border: "1px solid rgba(200,162,75,0.3)" }}
              >
                {s.n}
              </div>
              <h3 className="font-display text-base font-light text-ivory mb-2">{s.title}</h3>
              <p className="text-xs text-[var(--text-on-dark-muted)] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading eyebrow="Popular" title="Choose Your E Seva" onLight />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {e.featured.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl p-7 flex flex-col border"
                style={{ background: "white", borderColor: "rgba(200,162,75,0.15)" }}
              >
                <h3 className="font-display text-lg font-light mb-3" style={{ color: "var(--text-on-light)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-on-light)", opacity: 0.7 }}>
                  {f.text}
                </p>
                <p className="font-display text-2xl font-light mt-5" style={{ color: "var(--champagne-gold)" }}>
                  {f.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fee table */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[960px] mx-auto">
          <SectionHeading eyebrow="Transparent Pricing" title="E Seva Fee Structure" />
          <div
            className="mt-12 rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(200,162,75,0.15)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(200,162,75,0.08)" }}>
                    {["Service", "Type", "Delivery", "Fee"].map((h) => (
                      <th key={h} className="text-left px-5 py-4 eyebrow" style={{ color: "var(--champagne-gold)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {e.fees.map((row, i) => (
                    <tr
                      key={row.service}
                      style={{
                        background: i % 2 === 0 ? "var(--deep-indigo)" : "rgba(22,27,51,0.5)",
                        borderTop: "1px solid rgba(200,162,75,0.08)",
                      }}
                    >
                      <td className="px-5 py-4 text-ivory">{row.service}</td>
                      <td className="px-5 py-4 text-[var(--text-on-dark-muted)]">{row.type}</td>
                      <td className="px-5 py-4 text-[var(--text-on-dark-muted)]">{row.delivery}</td>
                      <td className="px-5 py-4 font-medium text-gold whitespace-nowrap">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-center text-[var(--text-on-dark-muted)] mt-5">{e.feeNote}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--deep-indigo)" }}>
        <div className="mb-12">
          <SectionHeading eyebrow="Request Your Reading" title="Submit Your E Seva Request" />
        </div>
        <ESevaForm />
      </section>

      {/* Delivery timeline */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--midnight)" }}>
        <div className="max-w-[860px] mx-auto">
          <SectionHeading eyebrow="What to Expect" title="Delivery Timeline" />
          <div className="mt-12 space-y-4">
            {e.timeline.map((t) => (
              <div
                key={t.n}
                className="flex items-start gap-5 rounded-xl p-6 border"
                style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-display text-gold"
                  style={{ border: "1px solid rgba(200,162,75,0.3)" }}
                >
                  {t.n}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-display text-base font-light text-ivory">{t.title}</h3>
                    <span className="text-xs text-gold">{t.when}</span>
                  </div>
                  <p className="text-sm text-[var(--text-on-dark-muted)] mt-1 leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment + confidentiality */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="Secure & Simple" title="Payment" onLight />
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {e.payment.methods.map((m) => (
              <div
                key={m}
                className="rounded-xl p-5 text-center text-sm border"
                style={{ background: "white", borderColor: "rgba(200,162,75,0.2)", color: "var(--text-on-light)" }}
              >
                {m}
              </div>
            ))}
          </div>
          <div
            className="mt-6 rounded-xl p-7 text-center border"
            style={{ background: "white", borderColor: "rgba(200,162,75,0.2)" }}
          >
            <p className="font-display text-xl" style={{ color: "var(--text-on-light)" }}>{e.payment.upi}</p>
            <p className="text-sm text-[var(--text-on-light)] opacity-60 mt-2 leading-relaxed">{e.payment.note}</p>
          </div>
          <p
            className="mt-10 text-center text-xs leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--text-on-light)", opacity: 0.6 }}
          >
            {e.confidentiality}
          </p>
        </div>
      </section>

      {/* Closing band */}
      <PhotoBand src="/img/temple-interior.jpg" alt="Sacred temple interior with lamps and deities" minHeight="360px">
        <span className="text-3xl mb-5 block text-soft-gold" aria-hidden="true">✦</span>
        <p className="font-display text-[clamp(1.5rem,3.5vw,2.6rem)] font-light leading-snug text-ivory">
          Ancient guidance, delivered wherever you are in the world.
        </p>
      </PhotoBand>
    </>
  );
}
