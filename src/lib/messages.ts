import { site } from "@/lib/site";

export interface MessageItem {
  id: string;
  /** Cleaned-up service name, e.g. "Sunday Morning Service". */
  title: string;
  /** Who preached, when the title names them. */
  speaker: string;
  url: string;
  /** Date the church put on the video, when the title carries one. */
  serviceDate: string;
  /** Feed publish date, always present — used for sorting and <time>. */
  isoDate: string;
  published: string;
  thumbnail: string;
  description: string;
}

function matchTag(block: string, tag: string) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  return block.match(regex)?.[1]?.trim() || "";
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value: string) {
  return decodeXml(value)
    .replace(/<[^>]+>/g, "")
    .trim();
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Their upload titles look like:
 *   "Sunday Evening Service 8/16/26 (Pastor Paul Harvey)"
 *   "8/16/26 Sunday Morning Service (Pastor Paul Harvey)"
 *   "Wednesday Evening Service 8/12/25 (Pastor Harvey)"
 *
 * Pull the service name, the speaker and the date out so the cards read like a
 * sermon archive instead of a YouTube dump. The date in the title is sometimes
 * mistyped (a "/25" on a 2026 service), so the feed's own publish date wins
 * whenever the two disagree by more than a few days.
 */
function parseTitle(raw: string, isoDate: string) {
  let rest = raw.trim();
  let speaker = "";

  const paren = rest.match(/\(([^)]+)\)\s*$/);
  if (paren) {
    speaker = paren[1].trim().replace(/\s+/g, " ");
    rest = rest.slice(0, paren.index).trim();
  }

  let serviceDate = "";
  const dateMatch = rest.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (dateMatch) {
    rest = rest.replace(dateMatch[0], " ").trim();

    const month = Number(dateMatch[1]);
    const day = Number(dateMatch[2]);
    const rawYear = Number(dateMatch[3]);
    const year = rawYear < 100 ? 2000 + rawYear : rawYear;
    const fromTitle = new Date(Date.UTC(year, month - 1, day));
    const fromFeed = new Date(isoDate);

    // Trust the title only if it lands within a week of the upload.
    const withinAWeek =
      Math.abs(fromTitle.getTime() - fromFeed.getTime()) <
      8 * 24 * 60 * 60 * 1000;
    const chosen = withinAWeek ? fromTitle : fromFeed;

    if (!Number.isNaN(chosen.getTime())) {
      serviceDate = `${MONTHS[chosen.getUTCMonth()]} ${chosen.getUTCDate()}, ${chosen.getUTCFullYear()}`;
    }
  }

  const title =
    rest
      .replace(/\s{2,}/g, " ")
      .replace(/^[-–—\s]+|[-–—\s]+$/g, "")
      .trim() || "Service";

  return { title, speaker, serviceDate };
}

const FEED_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

/**
 * YouTube throttles bursts of feed requests from datacenter IPs and answers
 * with a 404 or 500 HTML page rather than a 429. A single failed attempt at
 * build time would otherwise be cached as an empty sermon list for the whole
 * revalidation window, so retry before giving up — and never cache a failure.
 */
async function fetchFeed(): Promise<string | null> {
  const delays = [0, 400, 1200];

  for (const delay of delays) {
    if (delay) await new Promise((resolve) => setTimeout(resolve, delay));

    try {
      const response = await fetch(site.social.youtubeChannelFeed, {
        headers: {
          "User-Agent": FEED_UA,
          Accept: "application/atom+xml,application/xml,text/xml,*/*",
        },
        next: { revalidate: 1800 },
      });

      if (!response.ok) continue;

      const xml = await response.text();
      if (xml.includes("<entry>")) return xml;
    } catch {
      // fall through to the next attempt
    }
  }

  return null;
}

export async function getMessages(limit = 15): Promise<MessageItem[]> {
  try {
    const xml = await fetchFeed();
    if (!xml) return [];

    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

    return entries.slice(0, limit).map((entry) => {
      const id = matchTag(entry, "yt:videoId");
      const rawTitle = stripHtml(matchTag(entry, "title"));
      const isoDate = matchTag(entry, "published");
      const { title, speaker, serviceDate } = parseTitle(rawTitle, isoDate);

      const url =
        entry.match(/<link[^>]*href="([^"]+)"[^>]*rel="alternate"/)?.[1] ||
        `https://www.youtube.com/watch?v=${id}`;
      // The feed hands back hqdefault.jpg — a 480×360 frame with black bars
      // baked in above and below the 16:9 picture. maxresdefault is the same
      // frame at 1280×720 with no bars, and YouTube generates it for every
      // upload from an HD stream, which all of theirs are.
      const feedThumb = entry.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1];
      const thumbnail = id
        ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
        : (feedThumb ?? "");

      return {
        id,
        title,
        speaker,
        url,
        serviceDate,
        isoDate,
        published: new Date(isoDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        thumbnail,
        description: stripHtml(matchTag(entry, "media:description")),
      };
    });
  } catch {
    return [];
  }
}
