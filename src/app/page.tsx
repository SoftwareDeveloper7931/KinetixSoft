import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KinetixSoft — App Development on FlutterFlow, Lovable, Retool, Podio & Replit",
  description:
    "KinetixSoft builds production-ready apps fast using FlutterFlow, Lovable, Retool, Podio, and Replit. Founder-led development for startups and growing teams.",
  alternates: { canonical: "https://kinetixsoft.com" },
  openGraph: {
    title: "KinetixSoft — App Development Studio",
    description:
      "Production-ready mobile, web, and internal tools built on FlutterFlow, Lovable, Retool, Podio, and Replit.",
    url: "https://kinetixsoft.com",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "KinetixSoft — App Development Studio",
  url: "https://kinetixsoft.com",
  description:
    "KinetixSoft builds production-ready apps fast using FlutterFlow, Lovable, Retool, Podio, and Replit.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <HomeContent />
    </>
  );
}
