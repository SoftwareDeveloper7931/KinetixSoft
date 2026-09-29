import type { MetadataRoute } from "next";
import { ALL_POSTS } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kinetixsoft.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date("2026-07-22"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/flutterflow`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/podio`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/lovable`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/replit-platform`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retool`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bubble`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-api`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/cashnix`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date("2026-07-22"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: new Date("2026-07-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = ALL_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
