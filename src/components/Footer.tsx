"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks, solutions } from "@/lib/config";

/* Brand glyphs (lucide removed brand icons for trademark reasons) */
const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M13 22v-8h2.6l.5-3H13V9c0-.9.3-1.6 1.7-1.6h1.6V4.7C16.4 4.6 15.4 4.5 14.3 4.5 11.9 4.5 10.4 6 10.4 8.6V11H8v3h2.4v8z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="6" width="20" height="12" rx="3.5" />
      <path d="M10 9.3l5.2 2.7L10 14.7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
];

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

            {/* Social */}
            <div className="mt-6">
              <p className="eyebrow mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-200 text-[var(--text-on-dark-muted)] hover:text-[var(--midnight)] hover:bg-[var(--champagne-gold)] hover:border-[var(--champagne-gold)]"
                    style={{ borderColor: "rgba(200,162,75,0.3)" }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
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
