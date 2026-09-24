/**
 * Spam screening for the contact form.
 *
 * Pure and dependency-free so it can be checked from a plain node script. The
 * route calls `spamReason`; anything that returns a reason gets a cheerful
 * `ok` and is never posted to Slack, so a bot learns nothing from the reply.
 *
 * The filters are aimed at what actually arrives. The first wave (Sept 2026)
 * looked like this:
 *
 *   Name:    jClkJNpKDOgxSJWIsJ
 *   Contact: r.emo.ye.f.7.43@gmail.com
 *   Message: YjQbDMjCnyZtDokNTyZnq
 *
 * Random mixed-case strings and a Gmail address stuffed with dots (Gmail
 * ignores them, so one inbox yields endless "new" addresses). Nobody writing to
 * a church types either.
 */

/** Our own form reports how long it was on screen; a person needs longer. */
export const MIN_FILL_MS = 2500;

/** Keys the form sends. Anything else did not come from the page. */
export const ALLOWED_FIELDS = new Set([
  "name",
  "email",
  "phone",
  "reason",
  "message",
  "website", // honeypot
  "elapsedMs",
]);

/**
 * A single run of letters with no spaces that flips from lower to upper case
 * over and over — `jClkJNpKDOgxSJWIsJ`. Real names manage one or two flips at
 * most (McDonald, DeShawn); four is noise.
 */
export function isGibberish(value: string): boolean {
  const tokens = value.split(/\s+/).filter(Boolean);
  return tokens.some((token) => {
    const letters = token.replace(/[^\p{L}]/gu, "");
    if (letters.length < 8) return false;
    const flips = letters.match(/\p{Ll}\p{Lu}/gu)?.length ?? 0;
    return flips >= 4;
  });
}

/** `r.emo.ye.f.7.43@gmail.com` — three or more dots in a Gmail local part. */
export function isDotStuffedGmail(email: string): boolean {
  const match = /^([^@]+)@(gmail|googlemail)\.com$/i.exec(email.trim());
  if (!match) return false;
  return (match[1].match(/\./g)?.length ?? 0) >= 3;
}

/** A link drop. A visitor asking about Sunday never needs to send one. */
export function containsLink(value: string): boolean {
  const v = value.toLowerCase();
  if (/(https?:\/\/|www\.)/.test(v)) return true;
  if (/\[url[=\]]|\[link[=\]]|<a\s/.test(v)) return true;
  return /\b[a-z0-9-]+\.(com|net|org|ru|cn|xyz|top|info|biz|io|shop|club|online|site)\b/.test(
    v,
  );
}

/** Returns why a submission is spam, or null if it should be delivered. */
export function spamReason(raw: Record<string, unknown>): string | null {
  if (Object.keys(raw).some((key) => !ALLOWED_FIELDS.has(key))) {
    return "unexpected_fields";
  }
  if (String(raw.website ?? "").trim()) return "honeypot";

  const elapsed = Number(raw.elapsedMs);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return "too_fast";

  const name = String(raw.name ?? "");
  const email = String(raw.email ?? "");
  const message = String(raw.message ?? "");

  if (isGibberish(name) || isGibberish(message)) return "gibberish";
  if (isDotStuffedGmail(email)) return "dot_stuffed_email";
  if (containsLink(name) || containsLink(message)) return "link";

  return null;
}
