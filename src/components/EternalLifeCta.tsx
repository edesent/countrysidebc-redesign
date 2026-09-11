import Link from "next/link";

/**
 * Their current homepage gives "HOW TO HAVE ETERNAL LIFE – GUARANTEED" the
 * biggest button on the page. It keeps that weight here.
 */
export default function EternalLifeCta() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-cream px-7 py-14 text-center shadow-[0_30px_70px_-40px_rgba(34,30,23,0.4)] sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,212,121,0.22), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="eyebrow">The most important page on this site</p>
            <h2 className="display mx-auto mt-6 max-w-3xl text-[clamp(1.67rem,3.65vw,2.74rem)] text-ink">
              How to have eternal life &mdash;{" "}
              <span className="text-gold">guaranteed</span>.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-text-light">
              Not a program, not a membership, and not something you have to earn.
              This is the single most crucial decision you will make in your
              lifetime, laid out plainly and entirely from Scripture &mdash; what
              the Bible says about your guilt, about the Gospel, and about the
              promise God cannot lie about.
            </p>
            <Link
              href="/salvation"
              className="focus-ring caps group mt-10 inline-flex items-center gap-3 rounded-sm bg-ink px-8 py-4.5 text-[0.72rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              Read it now
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
            <p className="ref mt-7">
              &ldquo;These things have I written unto you that believe on the name
              of the Son of God; that ye may know that ye have eternal life.
              &rdquo; &mdash; 1 John 5:13
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
