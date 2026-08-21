import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="paper relative overflow-hidden">
      {/* a very faint gold horizon, no texture noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-gold-pale/35 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow animate-fade-up">
            {site.address.city}, {site.address.regionName}
            <span className="mx-2.5 text-gold/50">&#9670;</span>
            Established {site.founded}
          </p>

          <h1 className="display animate-fade-up delay-1 mt-6 text-[clamp(2.9rem,6.6vw,5.1rem)] text-ink">
            Church the way
            <br />
            it{" "}
            <span className="relative italic text-oak-dark">
              used to be
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-gold via-gold-light to-transparent"
              />
            </span>
            .
          </h1>

          <p className="animate-fade-up delay-2 mt-9 max-w-xl text-[1.09rem] leading-relaxed text-text-light">
            An Independent Baptist church on Shoemaker Road, preaching the King
            James Bible and singing the old hymns out of the hymnal — the same
            way we have since {site.founded}. No screens, no smoke, no sales
            pitch. Just the Book, sung and preached, and a seat saved for you.
          </p>

          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/visit"
              className="focus-ring caps group inline-flex items-center gap-2.5 rounded-sm bg-ink px-6 py-4 text-[0.7rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              Plan Your First Visit
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
            <Link
              href="/sermons"
              className="focus-ring caps inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream/70 px-6 py-4 text-[0.7rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
            >
              Hear a Sermon
            </Link>
          </div>

          <dl className="animate-fade-up delay-4 mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-linen pt-8 sm:grid-cols-4">
            {[
              ["Sunday School", "10:00 a.m."],
              ["Worship", "11:00 a.m."],
              ["Sunday Evening", "6:00 p.m."],
              ["Wednesday", "7:00 p.m."],
            ].map(([label, time]) => (
              <div key={label}>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  {label}
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Their own auditorium, uncropped — a copy panel beside a real photo
            beats a scrim over one. */}
        <figure className="animate-fade-up delay-2">
          {/* The offset gold frame tracks the photo only, not the caption. */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm border border-linen-dark bg-linen shadow-[0_30px_70px_-25px_rgba(34,30,23,0.35)]">
              <Image
                src="/csbc/sanctuary-wide.jpg"
                alt="The auditorium at Countryside Baptist Church during a Sunday service — honey-oak pews and pulpit, a stacked-stone wall behind the platform, and the American and Christian flags on either side."
                width={1280}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-auto w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-gold/35"
            />
          </div>
          <figcaption className="mt-5 flex items-start gap-3 text-[0.78rem] leading-relaxed text-text-muted">
            <span
              aria-hidden="true"
              className="mt-1.5 h-px w-6 shrink-0 bg-gold/60"
            />
            The auditorium on a Sunday morning. {site.address.street},{" "}
            {site.address.city}.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
