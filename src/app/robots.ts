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
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "ClaudeBot",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
          "PerplexityBot",
          "Omgilibot",
          "Diffbot",
          "Bytespider",
          "cohere-ai",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "applebot",
          "Applebot-Extended",
          "YouBot",
          "ia_archiver",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://kinetixsoft.com/sitemap.xml",
    host: "https://kinetixsoft.com",
  };
}
