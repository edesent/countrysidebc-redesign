"use client";

import { useRef, useState, type FormEvent } from "react";

const reasons = [
  "Planning a first visit",
  "A question about the church",
  "I would like to talk with the pastor",
  "A prayer request",
  "Something else",
];

const field =
  "w-full rounded-sm border border-linen-dark bg-cream px-4 py-3.5 text-[0.95rem] font-normal text-ink outline-none transition placeholder:text-text-muted/70 focus:border-gold focus:bg-white";
const label = "caps block text-[0.6rem] font-semibold text-text-muted";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const shownAt = useRef(Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          reason: data.get("reason"),
          message: data.get("message"),
          website: data.get("website"),
          elapsedMs: Date.now() - shownAt.current,
        }),
      });

      if (!response.ok) throw new Error("failed");

      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-sm border border-gold/40 bg-cream p-10 text-center shadow-[0_24px_50px_-34px_rgba(34,30,23,0.4)]">
        <div
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="display mt-6 text-2xl text-ink">Thank you &mdash; it sent.</p>
        <p className="mt-3 leading-relaxed text-text-light">
          Someone from the church will get back to you. If it is urgent, please
          give us a call instead.
        </p>
        <button
          type="button"
          onClick={() => {
            shownAt.current = Date.now();
            setState("idle");
          }}
          className="focus-ring caps mt-7 text-[0.66rem] font-semibold text-oak-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-sm border border-linen-dark bg-parchment p-6 shadow-[0_24px_55px_-38px_rgba(34,30,23,0.4)] sm:p-8"
    >
      {/* Honeypot: hidden from people and screen readers, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className={label}>Your name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="space-y-2">
          <span className={label}>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={field}
          />
        </label>
        <label className="space-y-2">
          <span className={label}>Phone</span>
          <input name="phone" autoComplete="tel" className={field} />
        </label>
        <label className="space-y-2">
          <span className={label}>What is this about?</span>
          <select name="reason" defaultValue={reasons[0]} className={field}>
            {reasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className={label}>Your message</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <p className="mt-3 text-[0.78rem] leading-relaxed text-text-muted">
        Please leave either an email address or a phone number so we can reply.
      </p>

      <button
        type="submit"
        disabled={state === "sending"}
        className="focus-ring caps mt-6 w-full rounded-sm bg-ink px-6 py-4 text-[0.7rem] font-semibold text-cream transition hover:bg-oak-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending…" : "Send Message"}
      </button>

      {state === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-sm border border-claret/30 bg-claret/5 px-4 py-3 text-[0.86rem] text-claret-dark"
        >
          Something went wrong sending that. Please try again, or give the church
          a call.
        </p>
      )}
    </form>
  );
}
