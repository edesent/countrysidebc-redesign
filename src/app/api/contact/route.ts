import { NextResponse } from "next/server";

/**
 * Contact form target. Posts to Slack when SLACK_WEBHOOK_URL is set (works from
 * day one, no domain verification needed); otherwise it accepts the message and
 * records it in the server log so the form is never a dead end.
 */

const FIELDS = ["name", "email", "phone", "reason", "message"] as const;

type Payload = Partial<Record<(typeof FIELDS)[number], string>>;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
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

  const lines = [
    `*New message from the Countryside Baptist website*`,
    `*Name:* ${name}`,
    email ? `*Email:* ${email}` : null,
    phone ? `*Phone:* ${phone}` : null,
    reason ? `*About:* ${reason}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lines }),
      });

      if (!response.ok) {
        console.error("contact: slack rejected", response.status);
        return NextResponse.json(
          { ok: false, error: "delivery_failed" },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("contact: slack unreachable", error);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 },
      );
    }
  } else {
    console.info("contact (no SLACK_WEBHOOK_URL set):\n", lines);
  }

  return NextResponse.json({ ok: true });
}
