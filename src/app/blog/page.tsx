import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";
import JsonLd from "@/components/JsonLd";
import { ALL_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Low-Code & AI Development Insights from KinetixSoft",
  description:
    "Practical guides, tutorials, and case studies on FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit from the KinetixSoft team. Learn how to ship better apps faster.",
  alternates: { canonical: "https://kinetixsoft.com/blog" },
  keywords: [
    "FlutterFlow tutorials",
    "FlutterFlow app use cases",
    "Podio guides",
    "Bubble development",
    "Retool tips",
    "Lovable development guide",
    "Replit AI development",
    "no-code blog",
    "low-code app development blog",
    "app development insights",
  ],
  openGraph: {
    title: "Blog — KinetixSoft",
    description: "Practical guides and case studies on FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit development.",
    url: "https://kinetixsoft.com/blog",
    images: [
      {
        url: "https://kinetixsoft.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "KinetixSoft Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — KinetixSoft",
    description: "Practical guides and case studies on FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit development.",
    images: ["https://kinetixsoft.com/og-default.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kinetixsoft.com/blog" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://kinetixsoft.com/blog/#blog",
  name: "KinetixSoft Blog",
  url: "https://kinetixsoft.com/blog",
  description: "Practical guides, tutorials, and case studies on low-code and AI app development platforms including FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit.",
  publisher: {
    "@id": "https://kinetixsoft.com/#organization",
  },
  inLanguage: "en-US",
  blogPost: ALL_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://kinetixsoft.com/blog/${post.slug}`,
    datePublished: post.isoDate,
    description: post.excerpt,
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />
      <BlogContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
