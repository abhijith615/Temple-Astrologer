"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarCheck, MessageSquare, Wallet, Clock, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, consultationServices, languages } from "@/lib/config";

const fees = [
  { name: "General Reading", price: "₹ 500", note: "30 – 45 mins" },
  { name: "Marriage Matching", price: "₹ 800", note: "45 – 60 mins" },
  { name: "Detailed Chart", price: "₹ 1,000", note: "60 – 90 mins" },
  { name: "Jamakkol / Naadi", price: "₹ 1,000", note: "60 – 90 mins" },
  { name: "Premium Package", price: "₹ 2,000", note: "Full Day · Follow-up" },
];

const paymentMethods = ["UPI / GPay / PhonePe", "Cash on Visit"];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "9:00 AM – 8:00 PM" },
];

// Google Apps Script web-app endpoint that logs bookings to a Google Sheet
// and emails a notification. See docs/booking-apps-script.gs.
const BOOKING_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwtRaSauym1CNx0Fu8GR3afOrL7lStqzvJro9IlBJIQeeZU5pXOWbXprtRrEFXWX3V_bw/exec";

export default function BookingForm() {
  const [service, setService] = useState("");
  const [selectedFee, setSelectedFee] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);

    // Build URL-encoded params from the form — this is a "simple" request,
    // so the browser sends it without a CORS preflight the script can't answer.
    const params = new URLSearchParams();
    new FormData(e.currentTarget).forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });
    // Button-selected values aren't native form fields, so add them explicitly.
    params.append("Consultation Fee", `${fees[selectedFee].name} — ${fees[selectedFee].price}`);
    params.append("Preferred Payment", paymentMethods[selectedPayment]);

    try {
      // Apps Script web apps don't return CORS headers, so the response is
      // opaque (mode: "no-cors"); the submission still succeeds server-side.
      await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });
      setSubmitted(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Network error. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
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
            name="Service"
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
              <input type="text" name="Full Name" required className={inputStyle} style={inputBg} placeholder="Your full name" />
            </Field>
            <Field label="Gender" required>
              <select name="Gender" required className={inputStyle} style={inputBg} defaultValue="">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
            <Field label="Date of Birth" required>
              <input type="date" name="Date of Birth" required className={inputStyle} style={inputBg} />
            </Field>
            <Field label="Exact Time of Birth" required>
              <input type="time" name="Time of Birth" required className={inputStyle} style={inputBg} />
            </Field>
            <Field label="Place of Birth" required>
              <input type="text" name="Place of Birth" required className={inputStyle} style={inputBg} placeholder="City, State, Country" />
            </Field>
            <Field label="WhatsApp Number" required>
              <input type="tel" name="WhatsApp Number" required className={inputStyle} style={inputBg} placeholder="+91 ..." />
            </Field>
            <Field label="Email Address" required>
              <input type="email" name="email" required className={inputStyle} style={inputBg} placeholder="you@example.com" />
            </Field>
            <Field label="Country / Region">
              <input type="text" name="Country" className={inputStyle} style={inputBg} placeholder="India" />
            </Field>
            <Field label="Preferred Language" required>
              <select name="Preferred Language" required className={inputStyle} style={inputBg} defaultValue="">
                <option value="">Select</option>
                {languages.map((l) => <option key={l}>{l}</option>)}
              </select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Your Question or Concern">
              <textarea
                name="Question or Concern"
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
            <p className="text-xs text-[var(--text-on-dark-muted)] mb-4">Scan the QR with any UPI app to pay</p>
            <div className="w-52 max-w-full mx-auto rounded-xl overflow-hidden bg-white p-2">
              <Image
                src="/img/qr-code.jpg"
                alt="Scan to pay — UPI ID thangabharathi1970-2@okaxis"
                width={420}
                height={560}
                className="w-full h-auto"
              />
            </div>
            <p className="font-display text-base text-ivory mt-4">{siteConfig.contact.upi}</p>
            <p className="text-xs text-[var(--text-on-dark-muted)] mt-2">
              After payment, please share the screenshot via WhatsApp for confirmation
            </p>
          </div>
        </fieldset>

        {/* Honeypot spam trap (must stay empty) */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        {error && (
          <p
            className="text-center text-sm rounded-xl py-3 px-4"
            style={{ background: "rgba(220,80,80,0.12)", color: "#ffb4b4", border: "1px solid rgba(220,80,80,0.3)" }}
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full py-4 rounded-full text-sm font-medium transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "var(--champagne-gold)", color: "var(--midnight)" }}
        >
          {sending ? "Sending…" : "Confirm Booking Request"}
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
