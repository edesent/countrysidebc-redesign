import { NextResponse } from "next/server";
import { getMessages } from "@/lib/messages";
import { site } from "@/lib/site";

/**
 * Reports what the YouTube feed does from the deployed runtime.
 *
 * Worth keeping: YouTube throttles datacenter IPs and answers with a 404/500
 * HTML page rather than a 429, and a static page swallows that entirely — the
 * sermon list just renders its empty state with no clue why. This distinguishes
 * "YouTube is throttling us" from "the parser broke".
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const out: Record<string, unknown> = { feed: site.social.youtubeChannelFeed };

  try {
    const response = await fetch(site.social.youtubeChannelFeed, {
      cache: "no-store",
    });
    const body = await response.text();
    out.rawStatus = response.status;
    out.rawEntries = (body.match(/<entry>/g) || []).length;
  } catch (error) {
    out.rawError = String(error);
  }

  const messages = await getMessages(3);
  out.parsedWithRetries = messages.length;
  out.newest = messages[0]
    ? {
        title: messages[0].title,
        speaker: messages[0].speaker,
        serviceDate: messages[0].serviceDate,
      }
    : null;

  return NextResponse.json(out);
}
