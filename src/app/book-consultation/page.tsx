import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "./BookingForm";
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
      <div style={{ background: "var(--midnight)" }} className="pt-2">
        <BookingForm />
      </div>
    </>
  );
}
