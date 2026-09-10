"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/**
 * The hero plays the church's own footage of Pastor Harvey preaching, silently,
 * behind the copy.
 *
 * The clip is a stable 18s of the wide shot (the original pushes in past ~20s,
 * which read as a jump on every loop) cropped so he sits right of centre —
 * uncropped he stands dead centre and the copy had nowhere to go. The wash over
 * him is *cream*, not the usual dark scrim: their sanctuary is honey oak and
 * pale stone, the site is light, and a dark hero would have fought both. The
 * wash protects the copy column and then falls away fast — carried across the
 * full width it read as washed out, and the footage is graded warmer now so it
 * does not need the help.
 *
 * The video is decorative. It is muted, has no audio track at all, is hidden
 * from assistive tech, and the poster frame stands in whenever it cannot or
 * should not play — reduced motion, a refused autoplay, or a slow first paint.
 *
 * It is only mounted on wide viewports with motion allowed, which is a data
 * decision as much as a design one: `object-cover` in a phone-shaped box zooms
 * a 16:9 clip to a chest-height close-up, and the body copy lost contrast
 * against his suit. Gating the mount rather than hiding it with CSS means a
 * phone never downloads the 1.7MB at all.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const apply = () => setShowVideo(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Safari needs these set as properties, not just attributes, or it treats
    // the clip as user-initiated media and blocks it.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    void video.play().catch(() => {});
  }, [showVideo]);

  return (
    <section className="relative isolate flex min-h-[86svh] flex-col overflow-hidden bg-cream">
      {/* Stands in for the video: reduced motion, refused autoplay, first paint. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/video/hero-poster.jpg')] bg-cover bg-[position:64%_center]"
      />

      {showVideo && (
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 -z-10 size-full object-cover object-[64%_center]"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Cream wash: near-opaque under the words, clearing to the right so he
          stays visible. Kept light on purpose — this is a light site. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(251,247,238,0.90)_0%,rgba(251,247,238,0.94)_100%)] lg:bg-[linear-gradient(100deg,rgba(251,247,238,0.95)_0%,rgba(251,247,238,0.92)_30%,rgba(251,247,238,0.84)_44%,rgba(251,247,238,0.34)_60%,rgba(251,247,238,0.06)_74%,rgba(251,247,238,0)_100%)]"
      />
      {/* Blends the footage down into the section that follows. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(251,247,238,0.95)_0%,rgba(251,247,238,0.30)_14%,rgba(251,247,238,0)_36%)]"
      />
      {/* The same faint gold horizon the hero had before the video. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-gold-pale/25 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="max-w-2xl">
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
              className="focus-ring caps inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream/80 px-6 py-4 text-[0.7rem] font-semibold text-ink-soft backdrop-blur-[2px] transition hover:border-gold hover:text-oak-dark"
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
      </div>
    </section>
  );
}
