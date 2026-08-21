/**
 * The church's own mark, redrawn.
 *
 * Their logo is a script "Countryside" sitting over a line-drawn open Bible in
 * pale gold, with "BAPTIST CHURCH" in outlined caps beneath. Only a 326px PNG
 * of it exists, so the Bible is redrawn here as clean SVG geometry in their own
 * gold (#FFD479, darkened to #bc8f2f where it must carry on cream), and the
 * wordmark is set in live type so it stays sharp at any size on any band.
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
  /** Drop the Bible line-drawing — used where space is tight. */
  bare?: boolean;
  className?: string;
};

export default function Logo({
  tone = "ink",
  bare = false,
  className = "",
}: LogoProps) {
  const word = tone === "ink" ? "text-ink" : "text-cream";
  const sub = tone === "ink" ? "text-oak" : "text-gold-light";
  const mark = tone === "ink" ? "text-gold" : "text-gold-light";

  return (
    <span className={`relative block leading-none ${className}`}>
      {!bare && (
        <BibleMark
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[114%] w-[118%] -translate-x-1/2 -translate-y-[72%] ${mark} opacity-[0.72]`}
        />
      )}
      <span className="relative block text-center">
        <span
          className={`display block text-[1.62em] italic leading-[0.95] ${word}`}
        >
          Countryside
        </span>
        <span
          className={`caps mt-[0.22em] block text-[0.54em] font-semibold leading-none tracking-[0.16em] ${sub}`}
        >
          Baptist Church
        </span>
      </span>
    </span>
  );
}
