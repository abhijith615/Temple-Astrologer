import Link from "next/link";

/* Section heading block */
export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  onLight = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  onLight?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="eyebrow mb-4" style={{ color: "var(--champagne-gold)" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.12] font-light"
        style={{ color: onLight ? "var(--text-on-light)" : "var(--ivory)" }}
      >
        {title}
      </h2>
    </div>
  );
}

/* A paragraph styled for dark or light sections */
export function Prose({
  children,
  onLight = false,
  className = "",
}: {
  children: React.ReactNode;
  onLight?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-base leading-relaxed ${className}`}
      style={{
        color: onLight ? "var(--text-on-light)" : "var(--text-on-dark-muted)",
        opacity: onLight ? 0.78 : 1,
      }}
    >
      {children}
    </p>
  );
}

/* Pill CTA */
export function GoldButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-block px-8 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 text-center";
  if (variant === "solid") {
    return (
      <Link
        href={href}
        className={`${base} text-[var(--midnight)] bg-[var(--champagne-gold)] hover:bg-[var(--soft-gold)] ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} text-ivory border border-white/20 hover:border-white/40 ${className}`}
    >
      {children}
    </Link>
  );
}

/* Closing CTA band, reusable across inner pages */
export function ClosingCTA({
  statement,
  primaryHref = "/book-consultation",
  primaryLabel = "Book a Consultation",
}: {
  statement: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--midnight)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,162,75,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[760px] mx-auto text-center">
        <span className="text-3xl mb-6 block text-gold/70" aria-hidden="true">✦</span>
        <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] font-light text-ivory mb-9">
          {statement}
        </h2>
        <GoldButton href={primaryHref}>{primaryLabel}</GoldButton>
      </div>
    </section>
  );
}
