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
    ];
  },
};

export default nextConfig;
