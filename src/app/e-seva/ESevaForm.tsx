"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig, consultationServices, languages } from "@/lib/config";

export default function ESevaForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = "w-full px-4 py-3 rounded-xl text-sm outline-none";
  const inputBg = {
    background: "rgba(11,14,26,0.5)",
    border: "1px solid rgba(200,162,75,0.18)",
    color: "var(--text-on-dark)",
  } as React.CSSProperties;

  if (submitted) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-16">
        <span className="text-4xl mb-6 block text-gold" aria-hidden="true">✦</span>
        <h3 className="font-display text-3xl font-light text-ivory mb-3">E Seva request received.</h3>
        <p className="text-[var(--text-on-dark-muted)] leading-relaxed">
          Your reading will be prepared personally by Dr. Thangabharathi and delivered to your
          WhatsApp and Email within 24 – 48 hours of payment confirmation.
        </p>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)]"
        >
          <MessageCircle size={16} aria-hidden="true" /> Send payment screenshot
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="max-w-[820px] mx-auto"
    >
      <fieldset
        className="rounded-2xl p-7 border"
        style={{ background: "var(--deep-indigo)", borderColor: "rgba(200,162,75,0.12)" }}
      >
        <legend className="eyebrow px-2">Your Details</legend>
        <div className="grid sm:grid-cols-2 gap-5 mt-2">
          <Field label="Full Name" required>
            <input type="text" required className={inputStyle} style={inputBg} placeholder="Your full name" />
          </Field>
          <Field label="Service" required>
            <select required defaultValue="" className={inputStyle} style={inputBg}>
              <option value="">Select a service</option>
              {consultationServices.map((s) => <option key={s}>{s}</option>)}
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
          <Field label="Preferred Language" required>
            <select required defaultValue="" className={inputStyle} style={inputBg}>
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
              placeholder="Describe your concern. All information is kept strictly confidential."
            />
          </Field>
        </div>

        {/* Delivery method */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5 border" style={{ background: "rgba(11,14,26,0.4)", borderColor: "rgba(200,162,75,0.12)" }}>
            <p className="text-sm font-medium text-soft-gold mb-1">WhatsApp Delivery</p>
            <p className="text-xs text-[var(--text-on-dark-muted)] leading-relaxed">
              Written report, audio message, or video call link sent directly to your WhatsApp number.
            </p>
          </div>
          <div className="rounded-xl p-5 border" style={{ background: "rgba(11,14,26,0.4)", borderColor: "rgba(200,162,75,0.12)" }}>
            <p className="text-sm font-medium text-soft-gold mb-1">Email Delivery</p>
            <p className="text-xs text-[var(--text-on-dark-muted)] leading-relaxed">
              Detailed written prediction and supporting documents sent to your registered email.
            </p>
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full mt-6 py-4 rounded-full text-sm font-medium"
        style={{ background: "var(--champagne-gold)", color: "var(--midnight)" }}
      >
        Submit E Seva Request
      </button>
      <p className="text-center mt-4 text-sm">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-soft-gold"
        >
          Prefer to request via WhatsApp? Click here →
        </a>
      </p>
    </form>
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
