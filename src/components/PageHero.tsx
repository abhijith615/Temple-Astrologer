import Starfield from "@/components/Starfield";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden grain-overlay"
      style={{ background: "linear-gradient(to bottom, var(--midnight) 0%, var(--deep-indigo) 100%)" }}
    >
      <Starfield density={120} />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(200,162,75,0.07) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-[840px] mx-auto text-center">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] font-light text-ivory">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-[var(--text-on-dark-muted)] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex justify-center" aria-hidden="true">
          <span className="text-gold/50 text-xl">✦</span>
        </div>
      </div>
    </section>
  );
}
