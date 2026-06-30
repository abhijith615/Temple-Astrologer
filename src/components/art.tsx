import Image from "next/image";

/* Framed photograph with gold hairline + offset accent */
export function FramedImage({
  src,
  alt,
  aspect = "4/5",
  priority = false,
  accent = true,
}: {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: aspect, border: "1px solid rgba(200,162,75,0.25)" }}
      >
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      </div>
      {accent && (
        <div
          className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl pointer-events-none"
          style={{ border: "1px solid rgba(200,162,75,0.3)" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

/* A full-bleed photo band with dark overlay and centered content */
export function PhotoBand({
  src,
  alt,
  children,
  minHeight = "420px",
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  minHeight?: string;
}) {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden" style={{ minHeight }}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(11,14,26,0.82), rgba(11,14,26,0.88))" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[820px] mx-auto text-center">{children}</div>
    </section>
  );
}

/* Thin celestial divider */
export function CelestialDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(200,162,75,0.5))" }} />
      <span className="text-gold text-sm">✦</span>
      <span className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(200,162,75,0.5))" }} />
    </div>
  );
}

/* ---- Line-art SVG glyphs for solution / speciality cards ---- */
type GlyphProps = { size?: number; className?: string };
const gprops = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "var(--champagne-gold)",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function RingsGlyph({ size = 40, className }: GlyphProps) {
  return (
    <svg {...gprops(size)} className={className} aria-hidden="true">
      <circle cx="19" cy="28" r="10" />
      <circle cx="29" cy="28" r="10" />
      <path d="M19 14l2 4h-4l2-4z" />
      <path d="M29 12l2 4h-4l2-4z" />
    </svg>
  );
}

export function CradleGlyph({ size = 40, className }: GlyphProps) {
  // conception / fertility — lotus cradle with star
  return (
    <svg {...gprops(size)} className={className} aria-hidden="true">
      <path d="M10 30c4 6 24 6 28 0" />
      <path d="M14 30c2-5 18-5 20 0" />
      <path d="M24 10v8M21 13l3-3 3 3" />
      <circle cx="24" cy="24" r="2.2" />
    </svg>
  );
}

export function PathsGlyph({ size = 40, className }: GlyphProps) {
  // divorce / two paths
  return (
    <svg {...gprops(size)} className={className} aria-hidden="true">
      <path d="M24 38V24" />
      <path d="M24 24c0-8-6-10-12-14" />
      <path d="M24 24c0-8 6-10 12-14" />
      <circle cx="12" cy="10" r="2.4" />
      <circle cx="36" cy="10" r="2.4" />
    </svg>
  );
}

export function HeartsGlyph({ size = 40, className }: GlyphProps) {
  // love marriage
  return (
    <svg {...gprops(size)} className={className} aria-hidden="true">
      <path d="M24 36s-12-7-12-16a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 9-12 16-12 16z" />
      <path d="M24 12v-4M22 10l2-2 2 2" />
    </svg>
  );
}

export function HourglassGlyph({ size = 40, className }: GlyphProps) {
  // delayed marriage — time
  return (
    <svg {...gprops(size)} className={className} aria-hidden="true">
      <path d="M14 8h20M14 40h20" />
      <path d="M16 8c0 8 16 8 16 16 0 8-16 8-16 16" />
      <path d="M32 8c0 8-16 8-16 16 0 8 16 8 16 16" />
      <circle cx="24" cy="6" r="1.4" />
    </svg>
  );
}

/* Cosmic illustration for science/cosmos sections */
export function CosmosArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <g stroke="rgba(200,162,75,0.5)" strokeWidth="0.8">
        <circle cx="100" cy="100" r="70" />
        <ellipse cx="100" cy="100" rx="70" ry="26" />
        <ellipse cx="100" cy="100" rx="40" ry="70" transform="rotate(30 100 100)" />
        <circle cx="100" cy="100" r="10" fill="rgba(200,162,75,0.18)" />
      </g>
      <g fill="rgba(228,206,151,0.85)">
        <circle cx="170" cy="60" r="2" />
        <circle cx="40" cy="150" r="1.6" />
        <circle cx="150" cy="160" r="1.4" />
        <circle cx="55" cy="45" r="1.8" />
      </g>
    </svg>
  );
}
