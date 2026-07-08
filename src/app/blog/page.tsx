import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Low-Code & AI Development Insights from KinetixSoft",
  description:
    "Practical guides, tutorials, and case studies on FlutterFlow, Lovable, Retool, Podio, and Replit from the KinetixSoft team. Learn how to ship better apps faster.",
  alternates: { canonical: "https://kinetixsoft.com/blog" },
  keywords: [
    "FlutterFlow tutorials",
    "Podio guides",
    "Retool tips",
    "Lovable development guide",
    "Replit AI development",
    "no-code blog",
    "low-code app development blog",
    "app development insights",
  ],
  openGraph: {
    title: "Blog — KinetixSoft",
    description: "Practical guides and case studies on FlutterFlow, Lovable, Retool, Podio, and Replit development.",
    url: "https://kinetixsoft.com/blog",
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
  description: "Practical guides, tutorials, and case studies on low-code and AI app development platforms including FlutterFlow, Lovable, Retool, Podio, and Replit.",
  publisher: {
    "@id": "https://kinetixsoft.com/#organization",
  },
  inLanguage: "en-US",
  blogPost: [
    { "@type": "BlogPosting", headline: "Complete Guide to Building a Podio Workspace for Your Business", url: "https://kinetixsoft.com/blog/podio-workspace-guide", datePublished: "2026-06-10" },
    { "@type": "BlogPosting", headline: "Building Production-Ready Apps with FlutterFlow", url: "https://kinetixsoft.com/blog/flutterflow-production-apps", datePublished: "2026-06-08" },
    { "@type": "BlogPosting", headline: "Retool: The Best Way to Build Internal Tools Without Coding From Scratch", url: "https://kinetixsoft.com/blog/retool-internal-tools", datePublished: "2026-06-06" },
    { "@type": "BlogPosting", headline: "How Lovable Is Changing the Way We Build Web Apps", url: "https://kinetixsoft.com/blog/lovable-ai-apps", datePublished: "2026-06-04" },
    { "@type": "BlogPosting", headline: "Building AI Agents with Replit: A Practical Guide", url: "https://kinetixsoft.com/blog/replit-ai-agents", datePublished: "2026-06-02" },
  ],
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
