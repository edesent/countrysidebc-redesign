import { NextResponse } from "next/server";
import { getMessages } from "@/lib/messages";
import { site } from "@/lib/site";

/**
 * Reports what the YouTube RSS feed does when fetched from the deployed
 * runtime. Kept because "the sermons list is empty in production but fine
 * locally" is otherwise invisible — the page just renders its fallback.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const url = site.social.youtubeChannelFeed;
  const out: Record<string, unknown> = { url };

  try {
    const response = await fetch(url, { cache: "no-store" });
    out.status = response.status;
    out.contentType = response.headers.get("content-type");
    const body = await response.text();
    out.bytes = body.length;
    out.entryCount = (body.match(/<entry>/g) || []).length;
    out.head = body.slice(0, 300);
  } catch (error) {
    out.fetchError = String(error);
  }

  try {
    const messages = await getMessages(3);
    out.parsed = messages.length;
    out.first = messages[0]?.title ?? null;
  } catch (error) {
    out.parseError = String(error);
  }

  return NextResponse.json(out);
}
