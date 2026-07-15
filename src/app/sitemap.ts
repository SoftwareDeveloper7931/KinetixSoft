import type { MetadataRoute } from "next";

const BLOG_POSTS = [
  { slug: "podio-workspace-guide", date: "2026-06-10" },
  { slug: "flutterflow-production-apps", date: "2026-06-08" },
  { slug: "retool-internal-tools", date: "2026-06-06" },
  { slug: "lovable-ai-apps", date: "2026-06-04" },
  { slug: "replit-ai-agents", date: "2026-06-02" },
  { slug: "future-of-low-code", date: "2026-01-12" },
  { slug: "automating-crm-podio", date: "2026-01-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kinetixsoft.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date("2026-07-01"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/flutterflow`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/podio`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/lovable`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/replit-platform`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retool`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bubble`, lastModified: new Date("2026-07-14"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-api`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date("2026-06-10"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
