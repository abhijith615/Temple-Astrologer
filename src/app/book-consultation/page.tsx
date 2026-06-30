import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "./BookingForm";
import { FramedImage } from "@/components/art";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a Vedic astrology consultation with Dr. N. Thangabharathi. Share your details and we will confirm your appointment within 24 hours. Conducted in strict confidence.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow={`${siteConfig.brandName} · Est. ${siteConfig.established}`}
        title="Book a Consultation"
        subtitle="Share your details below and we will confirm your appointment within 24 hours. All consultations are conducted in strict confidence."
      />

      {/* Reassurance intro with photo */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FramedImage src="/img/consultation.jpg" alt="Dr. N. Thangabharathi explaining a horoscope chart to a client" priority />
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--champagne-gold)" }}>What to Expect</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light leading-tight mb-6" style={{ color: "var(--text-on-light)" }}>
              A calm, personal reading — guided with care.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-on-light)", opacity: 0.78 }}>
              Every consultation is conducted personally by Dr. N. Thangabharathi. Simply share your date,
              time, and place of birth, and bring whatever question weighs on your heart.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-on-light)", opacity: 0.78 }}>
              Your birth details and everything discussed remain in complete confidence — always.
            </p>
          </div>
        </div>
      </section>

      <div style={{ background: "var(--midnight)" }} className="pt-16">
        <BookingForm />
      </div>
    </>
  );
}
