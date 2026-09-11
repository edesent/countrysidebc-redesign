import Link from "next/link";
import { missionPillars, missionRefs, missionStatement } from "@/lib/site";

export default function Mission() {
  return (
    <section className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our mission</p>
          <p className="mt-6 text-[clamp(1.12rem,2.2vw,1.6rem)] leading-[1.55] text-ink">
            {missionStatement}
          </p>
          <p className="ref mx-auto mt-6 max-w-xl">({missionRefs})</p>
          <div
            aria-hidden="true"
            className="rule-diamond mx-auto mt-10 max-w-xs text-gold"
          >
            <span className="text-[0.6rem]">&#9670;</span>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {missionPillars.map((pillar) => (
            <article
              key={pillar.word}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-linen-dark bg-cream p-8 transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(34,30,23,0.4)] lg:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent"
              />
              <h3 className="display text-[clamp(1.14rem,1.98vw,1.52rem)] text-oak-dark">
                {pillar.word}
              </h3>
              <p className="ref mt-2">{pillar.verse}</p>
              <p className="mt-6 leading-relaxed text-text-light">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/who-we-are"
            className="focus-ring caps group inline-flex items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            More about who we are
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
