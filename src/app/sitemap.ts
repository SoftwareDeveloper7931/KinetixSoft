import type { MetadataRoute } from "next";
import { ALL_POSTS } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kinetixsoft.com";

  const latestRelease = new Date("2026-10-26");

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: latestRelease, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/flutterflow`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bubble`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/podio`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/lovable`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/replit-platform`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retool`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-api`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/cashnix`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: latestRelease, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: latestRelease, changeFrequency: "monthly", priority: 0.6 },
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
