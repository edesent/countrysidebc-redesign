import { NextResponse } from "next/server";
import { getMessages } from "@/lib/messages";
import { site } from "@/lib/site";

/**
 * Reports what the YouTube RSS feed does when fetched from the deployed
 * runtime. Kept because "the sermons list is empty in production but fine
 * locally" is otherwise invisible — the page just renders its fallback.
 */
export const dynamic = "force-dynamic";

const CHANNEL_ID = "UCfOTOQ7Uucrqv_EE5Q0Asxw";
// A channel's uploads playlist is its id with the UC prefix swapped for UU.
const UPLOADS_PLAYLIST = `UU${CHANNEL_ID.slice(2)}`;

const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

const attempts: Array<{ label: string; url: string; headers?: HeadersInit }> = [
  { label: "bare-www-channel", url: `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}` },
  {
    label: "ua-www-channel",
    url: `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
    headers: { "User-Agent": BROWSER_UA, Accept: "application/atom+xml,application/xml,text/xml,*/*" },
  },
  {
    label: "ua-nowww-channel",
    url: `https://youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
    headers: { "User-Agent": BROWSER_UA },
  },
  {
    label: "ua-www-playlist",
    url: `https://www.youtube.com/feeds/videos.xml?playlist_id=${UPLOADS_PLAYLIST}`,
    headers: { "User-Agent": BROWSER_UA },
  },
  {
    label: "bare-www-playlist",
    url: `https://www.youtube.com/feeds/videos.xml?playlist_id=${UPLOADS_PLAYLIST}`,
  },
];

export async function GET() {
  const results = [];

  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, {
        cache: "no-store",
        headers: attempt.headers,
      });
      const body = await response.text();
      results.push({
        label: attempt.label,
        status: response.status,
        bytes: body.length,
        entries: (body.match(/<entry>/g) || []).length,
        snippet: body.slice(0, 120),
      });
    } catch (error) {
      results.push({ label: attempt.label, error: String(error) });
    }
  }

  const messages = await getMessages(3);

  return NextResponse.json({
    configured: site.social.youtubeChannelFeed,
    parsedByApp: messages.length,
    firstTitle: messages[0]?.title ?? null,
    results,
  });
}
