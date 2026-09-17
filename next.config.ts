import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  images: {
    qualities: [75, 90],
    remotePatterns: [
      // Sermon thumbnails come straight from the church's YouTube channel.
      // The feed hands back whichever shard it likes (i.ytimg, i2.ytimg, …),
      // so match the bare host and every subdomain of it.
      { protocol: "https", hostname: "ytimg.com" },
      { protocol: "https", hostname: "**.ytimg.com" },
      { protocol: "https", hostname: "**.youtube.com" },
    ],
  },
  async redirects() {
    // Their current WordPress URLs, so nothing that is already linked or
    // indexed lands on a 404 after the switch.
    return [
      { source: "/who-we-are/our-beliefs", destination: "/beliefs", permanent: true },
      { source: "/who-we-are/our-staff", destination: "/our-pastor", permanent: true },
      { source: "/our-beliefs", destination: "/beliefs", permanent: true },
      { source: "/our-staff", destination: "/our-pastor", permanent: true },
      { source: "/staff", destination: "/our-pastor", permanent: true },
      { source: "/pastor", destination: "/our-pastor", permanent: true },
      { source: "/about", destination: "/who-we-are", permanent: true },
      { source: "/messages", destination: "/sermons", permanent: true },
      { source: "/author/admin", destination: "/", permanent: true },

      // An older generation of the site was hand-built .php pages.
      { source: "/believe.php", destination: "/beliefs", permanent: true },
      { source: "/biblestudies.php", destination: "/sermons", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/events.php", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },

      // The WordPress blog: 43 dated devotional posts, none carried over.
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*",
        destination: "/",
        permanent: true,
      },
      { source: "/blessings", destination: "/", permanent: true },
      { source: "/blessings/:path*", destination: "/", permanent: true },

      // The Events Calendar plugin generated ~2,000 combinatorial URLs
      // (/event/<instance>, /events/<date|month|week|category|tag|list|map>…).
      // There is no events section here, so the whole family goes to /visit,
      // which is the page that now answers "what happens at this church".
      { source: "/event/:path*", destination: "/visit", permanent: true },
      { source: "/events", destination: "/visit", permanent: true },
      { source: "/events/:path*", destination: "/visit", permanent: true },

      // A Bible-study series and a homeschool page, neither carried over.
      { source: "/book/:path*", destination: "/sermons", permanent: true },
      { source: "/homeschool", destination: "/", permanent: true },

      // WordPress feeds.
      { source: "/feed", destination: "/", permanent: true },
      { source: "/home/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
