import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "App Development Services — FlutterFlow, Lovable, Retool, Podio & Replit | KinetixSoft",
  description:
    "KinetixSoft offers app development services across five platforms: FlutterFlow (mobile apps), Lovable (web apps/SaaS), Retool (internal tools), Podio (CRM), and Replit (full-stack/AI). Find the right platform for your project.",
  alternates: { canonical: "https://kinetixsoft.com/services" },
  keywords: [
    "app development services",
    "FlutterFlow development",
    "Lovable app development",
    "Retool internal tools",
    "Podio CRM development",
    "Replit full-stack",
    "no-code development services",
    "low-code agency services",
  ],
  openGraph: {
    title: "Services — KinetixSoft",
    description: "Five platforms. One studio. FlutterFlow, Lovable, Retool, Podio, and Replit development services.",
    url: "https://kinetixsoft.com/services",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://kinetixsoft.com/services" },
  ],
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KinetixSoft App Development Services",
  url: "https://kinetixsoft.com/services",
  description: "Production-ready app development services across five low-code and no-code platforms.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "FlutterFlow App Development", url: "https://kinetixsoft.com/flutterflow", description: "Cross-platform mobile and web apps built on FlutterFlow with Firebase, Supabase, and custom API integrations." },
    { "@type": "ListItem", position: 2, name: "Lovable Web App Development", url: "https://kinetixsoft.com/lovable", description: "AI-powered SaaS products and web apps built on Lovable with proper auth, payments, and production hardening." },
    { "@type": "ListItem", position: 3, name: "Retool Internal Tools", url: "https://kinetixsoft.com/retool", description: "Purpose-built internal tools, admin panels, and dashboards on Retool connected to your database or API." },
    { "@type": "ListItem", position: 4, name: "Podio CRM Development", url: "https://kinetixsoft.com/podio", description: "Custom Podio workspaces, CRM systems, and workflow automation for growing teams." },
    { "@type": "ListItem", position: 5, name: "Replit Full-Stack & AI Development", url: "https://kinetixsoft.com/replit-platform", description: "Full-stack apps, AI agents, and backend services built on Replit using Python and Node.js." },
    { "@type": "ListItem", position: 6, name: "Custom API Integration", url: "https://kinetixsoft.com/services/custom-api", description: "Custom REST API integrations, webhooks, and automation pipelines connecting your apps and data sources." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which platform should I choose for my project?", acceptedAnswer: { "@type": "Answer", text: "It depends on what you're building: FlutterFlow for mobile apps, Lovable for web apps and SaaS, Retool for internal tools, Podio for CRM and workflow automation, and Replit for full-stack apps and AI agents. Contact us and we'll recommend the right platform for your specific use case." } },
    { "@type": "Question", name: "Can KinetixSoft work across multiple platforms for one project?", acceptedAnswer: { "@type": "Answer", text: "Yes — many projects combine platforms. A common setup is a FlutterFlow customer app connected to a Retool admin panel and a Podio CRM, all tied together with custom API integrations. We handle multi-platform builds as a single project." } },
    { "@type": "Question", name: "Do you offer ongoing support after launch?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer post-launch support and maintenance packages. Most clients continue working with us after launch for feature additions, bug fixes, and platform updates." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={listSchema} />
      <JsonLd data={faqSchema} />
      <ServicesContent />
    </>
  );
}
