import type { MetadataRoute } from "next";
import { canonical } from "@/lib/site";

const routes = [
  "/",
  "/who-we-are",
  "/our-pastor",
  "/beliefs",
  "/sermons",
  "/visit",
  "/salvation",
  "/contact",
  "/transparency",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: canonical(route),
    lastModified: now,
    changeFrequency: route === "/sermons" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/salvation" ? 0.9 : 0.7,
  }));
}
