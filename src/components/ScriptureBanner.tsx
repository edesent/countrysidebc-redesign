import { BibleMark } from "@/components/Logo";

/**
 * Philippians 2:16 — the verse the church already puts at the foot of every
 * page on their current site.
 */
export default function ScriptureBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 80% at 50% -20%, rgba(188,143,47,0.28), transparent 70%)",
        }}
      />
      <BibleMark
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[62rem] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.09]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <p className="eyebrow text-gold-light/80">Our text</p>
        <blockquote className="display mt-8 text-[clamp(1.6rem,3.6vw,2.85rem)] leading-[1.32] text-cream">
          Holding forth the word of life; that I may rejoice in the day of
          Christ, that I have not run in vain, neither laboured in vain.
        </blockquote>
        <p className="caps mt-9 text-[0.68rem] font-semibold text-gold-light">
          Philippians 2:16
        </p>
      </div>
    </section>
  );
}
