import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { HashScroller } from "@/components/HashScroller";
import { CHAT } from "@/config/chat";
import { localKeywords, site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Countryside Baptist Church | Independent Baptist Church in Port Washington, Ohio",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: localKeywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [`${siteUrl}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [`${siteUrl}/twitter-image`],
  },
  // This is a design proposal that re-hosts the church's own words. It must
  // never compete with countrysidebc.com in search. Flip to index/follow only
  // once it becomes the live site on their own domain.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  category: "religion",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/apple-icon.png"],
  },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ee" },
    { media: "(prefers-color-scheme: dark)", color: "#221e17" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="focus-ring caps sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-[0.7rem] focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <HashScroller />
        {children}
        {/*
          The chat bubble. A plain <script> on purpose: the widget reads its own
          data- attributes off this tag, so they have to be in the served HTML
          exactly as written.
        */}
        <script
          src={`${CHAT.origin}/widget/wbc-chat.js`}
          data-api={CHAT.origin}
          data-key={CHAT.apiKey}
          data-accent-color={CHAT.accentColor}
          data-greeting={CHAT.greeting}
          defer
        />
      </body>
    </html>
  );
}
