# Countryside Baptist Church — redesign

A proposed website for **Countryside Baptist Church**, Port Washington, Ohio
(<https://countrysidebc.com>). Independent Baptist, King James Bible, incorporated
in Ohio in 1975. Pastor Paul Harvey.

- Repo: `edesent/countrysidebc-redesign` (private)
- Demo: <https://countrysidebc.elijahdesent.com>

## This is a demo, not the live church site

Two guards keep it from competing with the church's real site in search. **Both
must be removed together, on the day this becomes the live site on their own
domain — and not before:**

1. `src/app/robots.ts` — `disallow: "/"` for all robots.
2. `src/app/layout.tsx` — `robots: { index: false, follow: false }`.

Also delete `src/components/DemoBanner.tsx` and its call in `layout.tsx` (the
brown "Design proposal" strip), and set `siteUrl` in `src/lib/site.ts` to
`https://countrysidebc.com`.

## For AI editors (ChatGPT, Claude, etc.) — read this before editing

### Stack snapshot

| Thing | Version / setting |
| --- | --- |
| Next.js | **16.2.4** (App Router, Server Components by default) |
| React | 19.2.4 |
| Tailwind | **v4** — CSS-first config in `src/app/globals.css`, no `tailwind.config.js` |
| TypeScript | strict — `next build` fails on any type error |
| Hosting | Vercel |

### Next.js 16 conventions that bite older code

1. Dynamic route `params` and `searchParams` are **Promises** — `await` them.
2. `generateMetadata` is `async`.
3. `<Image>` remote hosts must be allow-listed in `next.config.ts`.
   `**.ytimg.com` is already there for sermon thumbnails.
4. Tailwind v4 has no config file. Theme tokens live in `globals.css` under
   `@theme`.

### Where things live

- `src/lib/site.ts` — **the single source of truth** for the church's facts:
  address, service times, mission, pastor's biography, first-visit answers.
  Change a fact here, not in a component.
- `src/lib/content.ts` — the salvation tract and the full statement of faith,
  carried over **verbatim** from the church's own pages. Generated from a scrape
  so nothing was retyped. Do not paraphrase this text; it is the church's own
  doctrinal wording.
- `src/lib/messages.ts` — reads the church's YouTube RSS feed and parses their
  upload titles (`"Sunday Evening Service 8/16/26 (Pastor Paul Harvey)"`) into a
  service name, speaker and date. Revalidates every 30 minutes, so `/sermons`
  follows their uploads with no manual step.
- `src/components/` — one component per homepage section, plus `Logo`, `Prose`,
  `Phone`, `PageHero`.
- `public/csbc/` — photographs. See "Photographs" below.
- `src/og-fonts/` — EB Garamond as **static, non-variable TTF**, read at request
  time by `opengraph-image.tsx`. Satori cannot read woff2 or variable fonts;
  swapping these for the `public/fonts` woff2 files breaks the OG image with
  `Cannot read properties of undefined`.

### Design system

Palette is drawn from the church's own material — the honey-oak pulpit and pews,
the stacked-stone wall behind the platform, their cream sanctuary walls, and the
pale gold of the open Bible in their own logo (`#ffd479`). Tokens are in
`globals.css`.

Type: **EB Garamond** for display, **Inter** for body, **Cinzel** for the small
letterspaced caps. All three are self-hosted in `public/fonts` — `next/font/google`
can fail the Vercel build outright, so do not switch to it.

EB Garamond ships as **two faces**: `ebgaramond.woff2` (roman) and
`ebgaramond-italic.woff2`. Both `@font-face` rules are required. With the italic
alone, every heading renders italic and the emphasis italics on "used to be",
the service times, and the section numerals silently stop meaning anything.

Custom classes (`.display`, `.eyebrow`, `.caps`, `.paper`, `.ref`) live inside
`@layer components` so Tailwind utilities still beat them. Keep new ones there —
an unlayered `.display { color: … }` would override every `text-*` utility.

### Conventions worth keeping

- **The phone number never appears in the HTML.** It is base64'd in `site.ts` and
  assembled in the browser by `src/components/Phone.tsx`, which keeps it out of
  scraper harvests. Do not paste the digits into a component or into JSON-LD.
- **No email address on the public pages.** Link `/contact` instead.
- The contact form posts to `src/app/api/contact/route.ts`, which forwards to
  Slack when `SLACK_WEBHOOK_URL` is set and otherwise logs the message. It never
  silently drops a submission.
- Old WordPress URLs (`/who-we-are/our-beliefs`, `/who-we-are/our-staff`, …)
  are redirected in `next.config.ts`. Add to that list rather than breaking them.

### Photographs

Every photo on this site is **real** — no AI-generated, upscaled, or invented
imagery, and no stock. Sources:

- `sanctuary-wide.jpg`, `preaching-*.jpg` — frames from the church's own
  livestream recordings on their YouTube channel.
- `pastor-harvey.jpg`, `pastor-harvey-family.jpg` — the photograph of Pastor
  Harvey and Joanna from their current site, cropped.

If a new photo is needed, get it from the church. Do not generate one.

### Facts to confirm with the church

- The welcome quotation attributed to Pastor Harvey in `site.ts`
  (`pastor.welcomeQuote`) is written in his register but is **not** a real quote.
  Replace it with his own words or remove it before launch.
- `visitFacts` in `site.ts` describes parking, dress and children's classes from
  general knowledge of the church's own material. Worth a read-through by
  someone who is there on a Sunday.
- The site says the church does not stream services live, only posts recordings.
  Confirm before adding any "Watch Live" call to action.

## After-push protocol — DO NOT SKIP

Vercel runs `next build` (including strict TypeScript) on every push. **The build
can fail even when your edit looked fine locally, and when it does Vercel keeps
the previous build live** — the change appears to "404" or simply not happen.

After every push, confirm the deployment reached `Ready` before reporting the
change as live. If it errored, read the build log, fix the file, and push again.

Two failure classes that bite this codebase:

- **Strict TypeScript at build time.** Whenever you change a shape in
  `site.ts` or `content.ts` (rename a key, drop a property), grep for callers
  before pushing.
- **Unlayered CSS.** See the design-system note above.
