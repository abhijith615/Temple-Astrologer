"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to book a consultation."
  )}`;

  useEffect(() => {
    const check = () => setShow(window.scrollY > window.innerHeight * 0.6);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const onBookingPage = pathname === "/book-consultation";

  return (
    <>
      {/* WhatsApp bubble */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-105"
        style={{ background: "#25d366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} color="white" aria-hidden="true" />
      </a>

      {/* Mobile sticky Book bar (hidden on the booking page itself) */}
      {!onBookingPage && (
        <div
          className="xl:hidden fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-3 transition-all duration-300"
          style={{
            background: "linear-gradient(to top, rgba(11,14,26,0.98) 0%, transparent 100%)",
            transform: show ? "translateY(0)" : "translateY(120%)",
            opacity: show ? 1 : 0,
          }}
          aria-hidden={!show}
        >
          <Link
            href="/book-consultation"
            tabIndex={show ? 0 : -1}
            className="block w-full py-4 rounded-full text-sm font-medium text-center"
            style={{ background: "var(--champagne-gold)", color: "var(--midnight)" }}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </>
  );
}
