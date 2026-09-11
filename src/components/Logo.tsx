/**
 * The church's own logo, which the brand guide says to keep as-is.
 *
 * It is the original raster embedded in a cropped SVG wrapper — no lettering or
 * Bible contour is re-traced. Each colourway is recoloured per pixel: neutral
 * lettering and warm line art are told apart by saturation and blended by it,
 * so the antialiased edges stay smooth, and the original alpha is preserved.
 * A channel-driven colour filter was tried first and fringed every letter.
 *
 * Light bands get Charcoal lettering and an Earth line — Soft Gold on Off-White
 * all but disappears at nav size. Dark bands use the brand's own pairing.
 *
 * Do not replace the lettering with a script font. BibleMark below is a separate
 * decorative watermark, not the church logo.
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

/** Display bounds of the original artwork, cropped to the visible mark. */
const WORDMARK_SIZE = { width: 332, height: 97 };

export default function Logo({
  tone = "ink",
  alt = "Countryside Baptist Church",
  className = "",
}: LogoProps) {
  return (
    // An SVG wrapper preserves the original artwork and trims its empty space.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={WORDMARK[tone]}
      alt={alt}
      width={WORDMARK_SIZE.width}
      height={WORDMARK_SIZE.height}
      className={`block h-auto max-w-full ${className}`}
    />
  );
}
