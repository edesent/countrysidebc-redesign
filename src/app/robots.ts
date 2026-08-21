import type { MetadataRoute } from "next";
import { canonical, siteUrl } from "@/lib/site";

/**
 * This build re-hosts the church's own content on a demo domain. Left
 * crawlable it could outrank countrysidebc.com for their own name, so it is
 * closed to robots until it becomes the live site on their domain — at which
 * point flip to `allow: "/"` here and to index/follow in layout.tsx.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: canonical("/sitemap.xml"),
    host: siteUrl,
  };
}
