"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MessageItem } from "@/lib/messages";
import { site } from "@/lib/site";
import SermonPlayer, { isPlainClick } from "@/components/SermonPlayer";

function PlayBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60 bg-ink/55 text-cream backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold-light group-hover:bg-ink/70 ${
        small ? "h-9 w-9" : "h-14 w-14"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`ml-0.5 ${small ? "h-3.5 w-3.5" : "h-5 w-5"}`}
      >
        <path d="M8 5.5v13l11-6.5-11-6.5Z" />
      </svg>
    </span>
  );
}

export function MessageCard({
  message,
  featured = false,
  compact = false,
  onPlay,
}: {
  message: MessageItem;
  featured?: boolean;
  /** Opens the service in the lightbox instead of following the link out. */
  onPlay?: (message: MessageItem) => void;
  /**
   * A thumbnail beside the title instead of above it. The homepage pairs one
   * featured service with three of these; stacked full-width cards ran far
   * taller than the featured card beside them, which left it stretched into a
   * mostly empty box.
   */
  compact?: boolean;
}) {
  return (
    <a
      href={message.url}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        if (!onPlay || !isPlainClick(event)) return;
        event.preventDefault();
        onPlay(message);
      }}
      className={`focus-ring group overflow-hidden rounded-sm border border-linen-dark bg-cream transition-shadow hover:shadow-[0_26px_55px_-32px_rgba(34,30,23,0.45)] ${
        compact ? "flex items-stretch gap-0" : "flex flex-col"
      }`}
    >
      {/* Fixed 16:9 window with object-cover, so a 4:3 fallback thumbnail
          crops instead of showing YouTube's black letterbox bars. */}
      <span
        className={`relative block aspect-video shrink-0 overflow-hidden bg-ink/90 ${
          compact ? "w-[38%] max-w-[190px] sm:w-[34%]" : ""
        }`}
      >
        <Image
          src={message.thumbnail}
          alt=""
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 60vw"
              : compact
                ? "190px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <PlayBadge small={compact} />
      </span>
      <span
        className={`flex flex-1 flex-col justify-center ${
          compact ? "px-5 py-4" : "p-6"
        }`}
      >
        {message.serviceDate && (
          <span className="caps text-[0.6rem] font-semibold text-text-muted">
            {message.serviceDate}
          </span>
        )}
        <span
          className={`display mt-2 leading-tight text-ink ${
            featured
              ? "text-[1.85rem]"
              : compact
                ? "text-[1.08rem]"
                : "text-[1.35rem]"
          }`}
        >
          {message.title}
        </span>
        {message.speaker && (
          <span
            className={`text-[0.85rem] text-text-light ${compact ? "mt-1.5" : "mt-3"}`}
          >
            {message.speaker}
          </span>
        )}
        {!compact && (
          <span
            aria-hidden="true"
            className="mt-5 h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-16"
          />
        )}
      </span>
    </a>
  );
}

/** Shown when YouTube's feed is unreachable, so the section never renders empty. */
function FeedFallback() {
  return (
    <div className="rounded-sm border border-linen-dark bg-cream p-10 text-center">
      <p className="display text-xl text-ink">
        The sermon list is taking a moment to load.
      </p>
      <p className="mt-3 text-[0.9rem] text-text-light">
        Every service is posted to our YouTube channel.
      </p>
      <a
        href={site.social.youtube}
        target="_blank"
        rel="noreferrer"
        className="focus-ring caps mt-6 inline-block rounded-sm bg-ink px-5 py-3 text-[0.66rem] font-semibold text-cream transition hover:bg-oak-dark"
      >
        Open the channel
      </a>
    </div>
  );
}

/** Homepage strip: the newest service played large, then the next three. */
export function LatestMessages({ messages }: { messages: MessageItem[] }) {
  const [playing, setPlaying] = useState<MessageItem | null>(null);

  if (messages.length === 0) {
    return (
      <section className="section-pad paper">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FeedFallback />
        </div>
      </section>
    );
  }

  const [featured, ...rest] = messages;

  return (
    <section className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Sermons</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              Every service, preached and posted.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Sunday morning, Sunday evening, and Wednesday night all go up on
              our channel. Listen to one before you visit — you will know
              exactly what the preaching is like.
            </p>
          </div>
          <Link
            href="/sermons"
            className="focus-ring caps group inline-flex shrink-0 items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            All sermons
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

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
          <MessageCard message={featured} featured onPlay={setPlaying} />
          <div className="grid gap-4">
            {rest.slice(0, 3).map((message) => (
              <MessageCard
                key={message.id}
                message={message}
                compact
                onPlay={setPlaying}
              />
            ))}
          </div>
        </div>
      </div>
      <SermonPlayer message={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}

/** Full archive grid for /sermons. */
export default function MessagesLibrary({
  messages,
}: {
  messages: MessageItem[];
}) {
  const [playing, setPlaying] = useState<MessageItem | null>(null);

  if (messages.length === 0) {
    return <FeedFallback />;
  }

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} onPlay={setPlaying} />
        ))}
      </div>
      <SermonPlayer message={playing} onClose={() => setPlaying(null)} />
    </>
  );
}
