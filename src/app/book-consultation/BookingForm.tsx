"use client";

import { useState } from "react";
import { CalendarCheck, MessageSquare, Wallet, Clock, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, consultationServices, languages } from "@/lib/config";

const fees = [
  { name: "General Reading", price: "₹ 500", note: "30 – 45 mins" },
  { name: "Marriage Matching", price: "₹ 800", note: "45 – 60 mins" },
  { name: "Detailed Chart", price: "₹ 1,200", note: "60 – 90 mins" },
  { name: "Jamakkol / Naadi", price: "₹ 1,500", note: "60 – 90 mins" },
  { name: "Premium Package", price: "₹ 2,500", note: "Full Day · Follow-up" },
];

const paymentMethods = ["UPI / GPay / PhonePe", "Bank Transfer", "Cash on Visit"];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "9:00 AM – 8:00 PM" },
];

export default function BookingForm() {
  const [service, setService] = useState("");
  const [selectedFee, setSelectedFee] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="max-w-[640px] mx-auto px-6 py-20 text-center">
        <span className="text-4xl mb-6 block text-gold" aria-hidden="true">✦</span>
        <h2 className="font-display text-3xl font-light text-ivory mb-3">Booking request received.</h2>
        <p className="text-[var(--text-on-dark-muted)] leading-relaxed">
          Thank you. We will confirm your appointment within 24 hours via WhatsApp or email.
          All consultations are conducted in strict confidence.
        </p>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3.5 rounded-full text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)]"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  const inputStyle =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors";
  const inputBg = {
    background: "rgba(11,14,26,0.5)",
    border: "1px solid rgba(200,162,75,0.18)",
    color: "var(--text-on-dark)",
  } as React.CSSProperties;

  return (
    <div className="max-w-[920px] mx-auto px-6 pb-24 relative z-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Consultation Type */}
        <fieldset
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <legend className="eyebrow px-2 flex items-center gap-2">
            <CalendarCheck size={14} aria-hidden="true" /> Consultation Type
          </legend>
          <label htmlFor="service" className="block text-sm mb-2 mt-2 text-ivory">
            Select Service <span className="text-gold">*</span>
          </label>
          <select
            id="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputStyle}
            style={inputBg}
          >
            <option value="">Choose a service</option>
            {consultationServices.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </fieldset>

        {/* Your Details */}
        <fieldset
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <legend className="eyebrow px-2">Your Details</legend>
          <div className="grid sm:grid-cols-2 gap-5 mt-2">
            <Field label="Full Name" required>
              <input type="text" required className={inputStyle} style={inputBg} placeholder="Your full name" />
            </Field>
            <Field label="Gender" required>
              <select required className={inputStyle} style={inputBg} defaultValue="">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
            <Field label="Date of Birth" required>
              <input type="date" required className={inputStyle} style={inputBg} />
            </Field>
            <Field label="Exact Time of Birth" required>
              <input type="time" required className={inputStyle} style={inputBg} />
            </Field>
            <Field label="Place of Birth" required>
              <input type="text" required className={inputStyle} style={inputBg} placeholder="City, State, Country" />
            </Field>
            <Field label="WhatsApp Number" required>
              <input type="tel" required className={inputStyle} style={inputBg} placeholder="+91 ..." />
            </Field>
            <Field label="Email Address" required>
              <input type="email" required className={inputStyle} style={inputBg} placeholder="you@example.com" />
            </Field>
            <Field label="Country / Region">
              <input type="text" className={inputStyle} style={inputBg} placeholder="India" />
            </Field>
            <Field label="Preferred Language" required>
              <select required className={inputStyle} style={inputBg} defaultValue="">
                <option value="">Select</option>
                {languages.map((l) => <option key={l}>{l}</option>)}
              </select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Your Question or Concern">
              <textarea
                rows={4}
                className={inputStyle}
                style={inputBg}
                placeholder="Please describe your situation or question in brief. All information is kept strictly confidential."
              />
            </Field>
          </div>
        </fieldset>

        {/* Consultation Fees */}
        <fieldset
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <legend className="eyebrow px-2 flex items-center gap-2">
            <Wallet size={14} aria-hidden="true" /> Consultation Fees
          </legend>
          <p className="text-sm text-[var(--text-on-dark-muted)] mt-2 mb-5">
            Select the type of consultation to view the applicable fee. Fees are indicative — final fee
            confirmed at the time of booking.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fees.map((f, i) => (
              <button
                type="button"
                key={f.name}
                onClick={() => setSelectedFee(i)}
                className="rounded-xl p-4 text-center border transition-all duration-200"
                style={{
                  background: selectedFee === i ? "rgba(200,162,75,0.1)" : "rgba(11,14,26,0.4)",
                  borderColor: selectedFee === i ? "var(--champagne-gold)" : "rgba(200,162,75,0.12)",
                }}
                aria-pressed={selectedFee === i}
              >
                <div className="text-xs text-[var(--text-on-dark-muted)] mb-1">{f.name}</div>
                <div className="font-display text-xl text-gold font-light">{f.price}</div>
                <div className="text-[11px] text-[var(--text-on-dark-muted)] mt-1">{f.note}</div>
              </button>
            ))}
          </div>
        </fieldset>

        {/* Payment */}
        <fieldset
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <legend className="eyebrow px-2 flex items-center gap-2">
            <MessageSquare size={14} aria-hidden="true" /> Payment
          </legend>
          <p className="text-sm text-[var(--text-on-dark-muted)] mt-2 mb-5">
            Select your preferred payment method. Payment can be made before or at the time of consultation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {paymentMethods.map((m, i) => (
              <button
                type="button"
                key={m}
                onClick={() => setSelectedPayment(i)}
                className="rounded-xl py-4 px-3 text-center text-sm border transition-all duration-200"
                style={{
                  background: selectedPayment === i ? "rgba(200,162,75,0.1)" : "rgba(11,14,26,0.4)",
                  borderColor: selectedPayment === i ? "var(--champagne-gold)" : "rgba(200,162,75,0.12)",
                  color: selectedPayment === i ? "var(--soft-gold)" : "var(--text-on-dark-muted)",
                }}
                aria-pressed={selectedPayment === i}
              >
                {m}
              </button>
            ))}
          </div>
          <div
            className="rounded-xl p-6 text-center"
            style={{ background: "rgba(11,14,26,0.5)" }}
          >
            <p className="font-display text-lg text-ivory">{siteConfig.contact.upi}</p>
            <p className="text-xs text-[var(--text-on-dark-muted)] mt-1">Scan QR or pay directly to UPI ID above</p>
            <div
              className="w-24 h-24 mx-auto my-4 rounded-lg flex items-center justify-center"
              style={{ border: "1px dashed rgba(200,162,75,0.3)" }}
              aria-hidden="true"
            >
              <span className="text-gold/40 text-xs text-center px-2">[QR Code]</span>
            </div>
            <p className="text-xs text-[var(--text-on-dark-muted)]">
              After payment, please share screenshot via WhatsApp for confirmation
            </p>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-4 rounded-full text-sm font-medium transition-colors duration-200"
          style={{ background: "var(--champagne-gold)", color: "var(--midnight)" }}
        >
          Confirm Booking Request
        </button>
        <p className="text-center text-xs text-[var(--text-on-dark-muted)]">
          We will confirm your appointment within 24 hours. All consultations are conducted in strict confidence.
        </p>
      </form>

      {/* Contact + hours */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <p className="eyebrow mb-5">Reach Us Directly</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-[var(--text-on-dark-muted)]">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>{siteConfig.contact.phones.join(" · ")}</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--text-on-dark-muted)]">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ivory break-all">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-[var(--text-on-dark-muted)]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span className="leading-relaxed">
                {siteConfig.contact.address.lines.join(", ")}
                <br />
                <span className="text-xs opacity-70">{siteConfig.contact.address.landmark}</span>
              </span>
            </li>
          </ul>
        </div>

        <div
          className="rounded-2xl p-7 border"
          style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
        >
          <p className="eyebrow mb-5 flex items-center gap-2">
            <Clock size={14} aria-hidden="true" /> Consultation Hours
          </p>
          <ul className="space-y-3">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between text-sm border-b last:border-0 pb-3 last:pb-0"
                style={{ borderColor: "rgba(200,162,75,0.1)" }}
              >
                <span className="text-ivory font-medium">{h.day}</span>
                <span className="text-[var(--text-on-dark-muted)]">{h.time}</span>
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(37,211,102,0.12)", color: "#4ade80" }}
                >
                  Open
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-[var(--text-on-dark-muted)] mt-4">{siteConfig.contact.days}</p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm mb-2 text-ivory">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
