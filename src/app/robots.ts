import type { MetadataRoute } from "next";
import { canonical, siteUrl } from "@/lib/site";

/**
 * Live on the church's own domain since 17 September 2026, so the site is open
 * to robots. It was closed while it lived on a demo subdomain, where being
 * crawlable could have outranked countrysidebc.com for their own name.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: canonical("/sitemap.xml"),
    host: siteUrl,
  };
}
