"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(246,241,231,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,162,75,0.25)",
          boxShadow: scrolled ? "0 6px 24px rgba(11,14,26,0.12)" : "none",
          paddingTop: scrolled ? "0.5rem" : "0.6rem",
          paddingBottom: scrolled ? "0.5rem" : "0.6rem",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Astro Thangabharthi — Home">
            <span
              className="block rounded-full overflow-hidden shrink-0"
              style={{ width: 46, height: 46, border: "1px solid rgba(200,162,75,0.4)" }}
            >
              <Image
                src="/logo.jpeg"
                alt="Astro Thangabharthi logo"
                width={46}
                height={46}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%", transform: "scale(1.35)" }}
                priority
              />
            </span>
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-base md:text-lg tracking-tight font-medium" style={{ color: "var(--text-on-light)" }}>
                Astro Thangabharthi
              </span>
              <span className="block text-[9px] tracking-[0.18em] uppercase" style={{ color: "var(--champagne-gold)" }}>
                Arutperunjothi Jothida Nilayam
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
            {navLinks
              .filter((link) => link.href !== "/book-consultation")
              .map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors duration-200 relative group whitespace-nowrap"
                    style={{ color: active ? "var(--champagne-gold)" : "var(--text-on-light)" }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px transition-transform duration-300 origin-left ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ background: "var(--champagne-gold)" }}
                    />
                  </Link>
                );
              })}
          </nav>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <SearchBar />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:opacity-70"
              style={{ color: "#1a8a4f" }}
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              href="/book-consultation"
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)] hover:bg-[var(--soft-gold)] transition-colors duration-200 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-1"
            style={{ color: "var(--text-on-light)" }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col transition-all duration-500 xl:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--ivory)" }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(200,162,75,0.2)" }}>
          <div className="flex items-center gap-2.5">
            <span className="block rounded-full overflow-hidden" style={{ width: 40, height: 40, border: "1px solid rgba(200,162,75,0.4)" }}>
              <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="w-full h-full object-cover" style={{ objectPosition: "center 30%", transform: "scale(1.35)" }} />
            </span>
            <span className="font-display text-lg font-medium" style={{ color: "var(--text-on-light)" }}>Astro Thangabharthi</span>
          </div>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ color: "var(--text-on-light)" }}>
            <X size={24} />
          </button>
        </div>
        <div className="px-6 py-4">
          <SearchBar compact />
        </div>
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light py-2 border-b transition-colors"
                style={{ color: active ? "var(--champagne-gold)" : "var(--text-on-light)", borderColor: "rgba(200,162,75,0.12)" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-6">
          <Link
            href="/book-consultation"
            className="block w-full py-4 rounded-full text-center text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
