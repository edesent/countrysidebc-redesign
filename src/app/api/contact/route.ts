import { NextResponse } from "next/server";
import { CHAT } from "@/config/chat";
import { spamReason } from "@/lib/antispam";

/**
 * Contact form target.
 *
 * It delivers through the same WBC Chat connection the chat bubble uses, so a
 * message opens a thread in the church's own Slack channel (#countrysidebc) and
 * notifies whoever is on call. That path needs no env var, no incoming-webhook
 * app and no verified sending domain, which is why it is the default: the form
 * worked the moment the site went live.
 *
 * `SLACK_WEBHOOK_URL` still wins if it is ever set, for a church that would
 * rather post into a channel of their own.
 *
 * The one thing this must never do is what it did before — accept the message,
 * answer `ok`, and write it to a server log nobody reads. A form that quietly
 * swallows a visitor asking about a funeral is worse than no form at all, so a
 * delivery failure is reported to the sender as a failure.
 */

type Payload = Record<string, unknown>;

// Per-IP budget. In-memory, so it resets on a cold start — a floor, not a wall.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (rateLimited(request)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Payload;

  try {
    body = (await request.json()) as Payload;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      throw new Error("not an object");
    }
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Spam gets the same `ok` a real message does, and goes nowhere.
  const spam = spamReason(body);
  if (spam) {
    console.info("contact: dropped as spam", spam);
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const reason = clean(body.reason, 120);
  const message = clean(body.message);

  if (!name || !message || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 },
    );
  }

  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (webhook) {
    const lines = [
      "*New message from the Countryside Baptist website*",
      `*Name:* ${name}`,
      email ? `*Email:* ${email}` : null,
      phone ? `*Phone:* ${phone}` : null,
      reason ? `*About:* ${reason}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lines }),
      });

      if (!response.ok) {
        console.error("contact: slack webhook rejected", response.status);
        return NextResponse.json(
          { ok: false, error: "delivery_failed" },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("contact: slack webhook unreachable", error);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 },
      );
    }
  }

  // The key goes in the JSON body, not a header — sent as a header every
  // request 401s.
  try {
    const response = await fetch(`${CHAT.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: CHAT.apiKey,
        subject: reason
          ? `✉️ Website message — ${reason}`
          : "✉️ Message from the website",
        name,
        contact: [email, phone].filter(Boolean).join(" · "),
        message,
      }),
    });

    if (!response.ok) {
      // 503 means the key is good but Slack is not connected to that site.
      console.error("contact: chat backend rejected", response.status);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("contact: chat backend unreachable", error);
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
