"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks, solutions } from "@/lib/config";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-16 md:py-20"
      style={{ background: "var(--midnight)", borderColor: "rgba(200,162,75,0.1)" }}
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="block rounded-full overflow-hidden shrink-0"
                style={{ width: 64, height: 64, border: "2px solid rgba(200,162,75,0.5)", boxShadow: "0 0 0 4px rgba(200,162,75,0.1)" }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Astro Thangabharthi logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.04)" }}
                />
              </span>
              <div>
                <p className="font-display text-base text-ivory font-light leading-tight">Astro Thangabharthi</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-gold/60 font-sans">Arutperunjothi Jothida Nilayam</p>
              </div>
            </div>
            <p className="eyebrow mb-3" style={{ opacity: 0.5 }}>Est. {siteConfig.established}</p>
            <p className="text-sm leading-relaxed text-[var(--text-on-dark-muted)] max-w-[220px]">
              {siteConfig.tagline} Where ancient Vedic science meets the modern seeker.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--text-on-dark-muted)] hover:text-ivory transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="eyebrow mb-5">Solutions</p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions#${s.id}`}
                    className="text-sm text-[var(--text-on-dark-muted)] hover:text-ivory transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-[var(--text-on-dark-muted)]">
              {siteConfig.contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p.replace(/\s/g, "")}`} className="hover:text-ivory transition-colors">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-ivory transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                {siteConfig.contact.address.lines.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "rgba(200,162,75,0.08)" }}
        >
          <p className="text-xs text-[var(--text-on-dark-muted)]">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-on-dark-muted)]">
            Consultation Hours: {siteConfig.contact.hours} · {siteConfig.contact.days}
          </p>
        </div>
      </div>
    </footer>
  );
}
