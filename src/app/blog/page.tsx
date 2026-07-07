import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Low-Code Insights from KinetixSoft",
  description:
    "Practical guides and case studies on FlutterFlow, Lovable, Retool, Podio, and Replit from the KinetixSoft team.",
  alternates: { canonical: "https://kinetixsoft.com/blog" },
  openGraph: {
    title: "Blog — KinetixSoft",
    description:
      "Insights on FlutterFlow, Lovable, Retool, Podio, and Replit from KinetixSoft.",
    url: "https://kinetixsoft.com/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "KinetixSoft Blog",
  url: "https://kinetixsoft.com/blog",
  description:
    "Practical guides and case studies on low-code and AI development platforms.",
  publisher: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogContent />
    </>
  );
}
