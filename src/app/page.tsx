import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KinetixSoft — FlutterFlow, Lovable, Retool, Podio & Replit Development Agency",
  description:
    "KinetixSoft builds production-ready mobile apps, web apps, and internal tools using FlutterFlow, Lovable, Retool, Podio, and Replit. Founder-led studio serving startups and growing teams worldwide.",
  alternates: { canonical: "https://kinetixsoft.com" },
  openGraph: {
    title: "KinetixSoft — App Development Studio",
    description:
      "Production-ready mobile, web, and internal tools built on FlutterFlow, Lovable, Retool, Podio, and Replit. Founder-led, worldwide.",
    url: "https://kinetixsoft.com",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kinetixsoft.com/#webpage",
  name: "KinetixSoft — App Development Studio",
  url: "https://kinetixsoft.com",
  isPartOf: { "@id": "https://kinetixsoft.com/#website" },
  about: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft builds production-ready mobile apps, web apps, and internal tools using FlutterFlow, Lovable, Retool, Podio, and Replit.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" }],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    xPath: ["//h1", "//meta[@name='description']/@content"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does KinetixSoft do?",
      acceptedAnswer: { "@type": "Answer", text: "KinetixSoft is a founder-led app development studio that builds production-ready mobile apps, web apps, and internal tools using FlutterFlow, Lovable, Retool, Podio, and Replit. We work with startups and growing teams who need working software fast without sacrificing quality." },
    },
    {
      "@type": "Question",
      name: "Which platforms does KinetixSoft build on?",
      acceptedAnswer: { "@type": "Answer", text: "We build on FlutterFlow (mobile and web apps), Lovable (AI-powered web apps and SaaS), Retool (internal tools and dashboards), Podio (CRM and workflow automation), and Replit (full-stack apps and AI agents)." },
    },
    {
      "@type": "Question",
      name: "Where is KinetixSoft based?",
      acceptedAnswer: { "@type": "Answer", text: "KinetixSoft is based in Lahore, Pakistan, and serves clients worldwide. We work remotely with startups and growing businesses across the US, UK, Australia, Middle East, and beyond." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an app with KinetixSoft?",
      acceptedAnswer: { "@type": "Answer", text: "Most projects ship in 3–10 weeks depending on scope and platform. Simple tools and MVPs can be ready in as little as 2–3 weeks. We scope every project before committing to a timeline." },
    },
    {
      "@type": "Question",
      name: "How do I get started with KinetixSoft?",
      acceptedAnswer: { "@type": "Answer", text: "Fill out the contact form at kinetixsoft.com/contact or email info@kinetixsoft.com. We respond within one business day and will schedule a scoping call to understand your requirements." },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={faqSchema} />
      <HomeContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
