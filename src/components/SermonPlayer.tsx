"use client";

import { useEffect, useRef } from "react";
import type { MessageItem } from "@/lib/messages";

/**
 * Plays a service in a lightbox over the page instead of sending the visitor
 * to YouTube and losing them.
 *
 * `message.id` is the `yt:videoId` straight off the feed, so the embed needs no
 * URL parsing. It goes through youtube-nocookie.com: the player still works,
 * but YouTube sets no tracking cookie unless the visitor actually presses play.
 *
 * The cards stay real links to YouTube underneath — the click is intercepted
 * only for a plain left-click, so middle-click, cmd-click and "open in new tab"
 * behave the way people expect, and the archive still works with no JavaScript.
 */

export function sermonEmbedUrl(id: string) {
  return (
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` +
    "?autoplay=1&rel=0&modestbranding=1&playsinline=1"
  );
}

export default function SermonPlayer({
  message,
  onClose,
}: {
  message: MessageItem | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const open = message !== null;

  // Remember what had focus, move focus into the dialog, put it back on close.
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => restoreRef.current?.focus?.();
  }, [open]);

  // Escape closes; the page behind must not scroll while the video is up.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!message) return null;

  return (
    <div
      // Above the chat bubble, which sits at 99999 — a video half-covered by a
      // chat launcher looks broken.
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${message.title}${message.serviceDate ? ` — ${message.serviceDate}` : ""}`}
        className="w-full max-w-5xl"
      >
        <div className="flex items-start justify-between gap-6 pb-3">
          <div className="min-w-0">
            <p className="display truncate text-[1.15rem] leading-tight text-cream sm:text-[1.35rem]">
              {message.title}
            </p>
            <p className="caps mt-1 text-[0.6rem] font-semibold text-gold-light/80">
              {message.serviceDate || message.published}
              {message.speaker ? ` · ${message.speaker}` : ""}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close the video"
            className="focus-ring -mr-1 -mt-1 shrink-0 rounded-sm p-2 text-cream/70 transition hover:text-cream"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-hidden rounded-sm border border-cream/15 bg-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
          <iframe
            key={message.id}
            src={sermonEmbedUrl(message.id)}
            title={message.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video h-auto w-full"
          />
        </div>

        <a
          href={message.url}
          target="_blank"
          rel="noreferrer"
          className="focus-ring caps mt-3 inline-block text-[0.62rem] font-semibold text-cream/55 transition hover:text-gold-light"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

/** True for a plain left-click — the only one we should take over from a link. */
export function isPlainClick(event: React.MouseEvent) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}
