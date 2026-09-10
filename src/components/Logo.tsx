/**
 * The church's own logo.
 *
 * `Logo` is their real mark — the script "Countryside" over a line-drawn open
 * Bible with "BAPTIST CHURCH" in caps beneath. The church has no vector copy of
 * it; the largest raster that exists anywhere is the 326x175 PNG kept beside
 * these files as `public/csbc/wordmark-source.png`. That PNG was colour-separated
 * (gold line art vs. lettering) and traced to vector, so the lockup is now sharp
 * at any size instead of topping out at 326px. Two colourways are checked in:
 *
 *   wordmark-ink.svg    ink #221e17 + gold #bc8f2f  — for cream bands
 *   wordmark-cream.svg  cream #fbf7ee + gold #ffd479 — for ink bands
 *
 * The cream one is the church's own footer artwork, not a recolour we invented.
 * To regenerate either file, re-trace from `wordmark-source.png`; do not redraw
 * the lettering by hand and do not substitute a script font for it.
 *
 * `BibleMark` below is a *separate*, simplified redraw of just the open-Bible
 * outline. It is decorative only — the oversized watermark behind the scripture
 * banner — and is deliberately cleaner than the real line art, which is too
 * fine to read at that scale. It is not the logo; do not swap it in for one.
 */

export function BibleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 124 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* left page */}
      <path
        d="M62 11.2C53 5.6 39.4 2.4 24.2 2.4c-5.2 0-10 .38-14.2 1.1 1.9 7.1 3 14.5 3.1 22.1 3.5-.6 7.4-.92 11.6-.92 13.6 0 25.6 2.9 34.6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right page */}
      <path
        d="M62 11.2c9-5.6 22.6-8.8 37.8-8.8 5.2 0 10 .38 14.2 1.1-1.9 7.1-3 14.5-3.1 22.1-3.5-.6-7.4-.92-11.6-.92-13.6 0-25.6 2.9-34.6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* the crease where the two pages meet */}
      <path
        d="M56.4 8.6 62 11.2l5.6-2.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      {/* outer page edges, hinting at the thickness of the book */}
      <path
        d="M10 3.5C7 4.1 4.5 4.9 2.6 5.8c1.9 7.1 3 14.5 3.1 22.2 1.9-.85 4.4-1.55 7.4-2.1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M114 3.5c3 .6 5.5 1.4 7.4 2.3-1.9 7.1-3 14.5-3.1 22.2-1.9-.85-4.4-1.55-7.4-2.1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

type LogoProps = {
  /** "ink" for cream bands, "cream" for dark bands. */
  tone?: "ink" | "cream";
  /**
   * Leave empty where an ancestor already labels the logo — the navbar's home
   * link does, and a duplicate label just gets announced twice.
   */
  alt?: string;
  className?: string;
};

const WORDMARK = {
  ink: "/csbc/wordmark-ink.svg",
  cream: "/csbc/wordmark-cream.svg",
} as const;

/** Intrinsic size of the traced artwork, cropped to the ink. */
const WORDMARK_SIZE = { width: 326, height: 92 };

export default function Logo({
  tone = "ink",
  alt = "Countryside Baptist Church",
  className = "",
}: LogoProps) {
  return (
    // A two-colour SVG lockup: nothing for the image optimiser to do, and
    // inlining ~100KB of traced path data into every page would be worse.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={WORDMARK[tone]}
      alt={alt}
      width={WORDMARK_SIZE.width}
      height={WORDMARK_SIZE.height}
      className={`block h-auto ${className}`}
    />
  );
}
