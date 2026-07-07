import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web", "Google-Extended", "Omgilibot"],
        allow: "/",
      },
    ],
    sitemap: "https://kinetixsoft.com/sitemap.xml",
    host: "https://kinetixsoft.com",
  };
}
