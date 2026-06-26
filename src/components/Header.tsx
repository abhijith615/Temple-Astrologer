"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md border-b border-white/5" : "py-4"
        }`}
        style={{
          background: scrolled || !isHome ? "rgba(11,14,26,0.9)" : "transparent",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-4">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
            <span className="text-gold text-lg">✦</span>
            <span className="font-display text-base md:text-lg tracking-tight text-ivory font-light leading-tight">
              Arutperunjothi
              <span className="block text-[9px] tracking-[0.2em] uppercase text-gold/70 font-sans">
                Jothida Nilayam
              </span>
            </span>
          </Link>

          {/* Desktop nav — all links except the Book CTA */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Main navigation">
            {navLinks
              .filter((link) => link.href !== "/book-consultation")
              .map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors duration-200 relative group whitespace-nowrap ${
                      active ? "text-gold" : "text-muted-celestial hover:text-ivory"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px bg-[var(--champagne-gold)] transition-transform duration-300 origin-left ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
          </nav>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-celestial hover:text-[#25d366] transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              href="/book-consultation"
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--midnight)] bg-[var(--champagne-gold)] hover:bg-[var(--soft-gold)] transition-colors duration-200"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-ivory p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[var(--midnight)] flex flex-col transition-all duration-500 xl:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-display text-lg text-gold font-light">✦ Arutperunjothi</span>
          <button onClick={() => setMenuOpen(false)} className="text-ivory" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-3xl font-light py-2 border-b border-white/5 transition-colors ${
                  active ? "text-gold" : "text-ivory/80 hover:text-ivory"
                }`}
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
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
