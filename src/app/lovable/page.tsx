import type { Metadata } from "next";
import LovableContent from "@/components/pages/LovableContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Lovable Development Agency — AI-Powered Web Apps & SaaS | KinetixSoft",
  description:
    "KinetixSoft builds production-ready SaaS products and web apps on Lovable. We take AI-generated foundations and add the auth, payments, security, and edge-case handling that turn them into real products.",
  alternates: { canonical: "https://kinetixsoft.com/lovable" },
  keywords: [
    "Lovable agency",
    "Lovable developer",
    "Lovable app development",
    "AI web app development",
    "SaaS development",
    "no-code web app",
    "Lovable production app",
    "AI-generated app development",
    "Lovable Supabase integration",
    "Lovable Stripe integration",
  ],
  openGraph: {
    title: "Lovable Development Agency — KinetixSoft",
    description: "Production SaaS and web apps built on Lovable. From idea to launch with proper auth, payments, security, and production-readiness.",
    url: "https://kinetixsoft.com/lovable",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/lovable/#service",
  name: "Lovable Web Application Development",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description: "KinetixSoft builds production-ready web apps and SaaS products using Lovable, including auth, payments, database setup, API integrations, and post-launch support.",
  serviceType: "Web Application Development",
  areaServed: "Worldwide",
  offers: { "@type": "Offer", url: "https://kinetixsoft.com/contact", description: "Custom Lovable app development — scoped per project" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Lovable Development", item: "https://kinetixsoft.com/lovable" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How KinetixSoft Builds Your Lovable Web App",
  description: "Our process for delivering production-ready web apps and SaaS products on Lovable",
  step: [
    { "@type": "HowToStep", position: 1, name: "Requirements & Schema Design", text: "We define your app's data model, user roles, and core workflows before touching Lovable — the decisions made here determine everything." },
    { "@type": "HowToStep", position: 2, name: "Generation & Foundation", text: "We use Lovable to build the initial app structure, screens, and UI — faster than starting from scratch." },
    { "@type": "HowToStep", position: 3, name: "Auth, Payments & Integrations", text: "We add production-grade auth (including session management and edge cases), payment processing, and any third-party integrations." },
    { "@type": "HowToStep", position: 4, name: "Security Review & QA", text: "We review the generated code for security gaps, add server-side validation, and test across real user scenarios and edge cases." },
    { "@type": "HowToStep", position: 5, name: "Launch & Handover", text: "We deploy to production, hand over the codebase, and provide post-launch support." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Lovable and what can you build with it?", acceptedAnswer: { "@type": "Answer", text: "Lovable is an AI-powered development platform that generates full-stack web app code from prompts and descriptions. KinetixSoft uses it to build SaaS dashboards, marketplaces, client portals, internal apps, AI-powered tools, and any web app that needs auth, database storage, payments, and API integrations." } },
    { "@type": "Question", name: "What kind of apps can you build with Lovable?", acceptedAnswer: { "@type": "Answer", text: "SaaS dashboards, marketplaces, client portals, internal apps, AI-powered tools, and any web app that needs auth, database storage, payments, and API integrations. Common examples: booking platforms, team collaboration tools, customer portals, and AI-powered productivity apps." } },
    { "@type": "Question", name: "How long does a Lovable build take?", acceptedAnswer: { "@type": "Answer", text: "Most projects run 3–8 weeks. Simple MVPs with basic auth and CRUD ship faster; apps with complex integrations, multi-role permissions, or payment flows take longer. We always scope before committing to a timeline." } },
    { "@type": "Question", name: "Can I own and export the code?", acceptedAnswer: { "@type": "Answer", text: "Yes — Lovable generates clean React/TypeScript code that you own entirely. We can help you export it, set up your own hosting, and maintain it independently of the Lovable platform after launch." } },
    { "@type": "Question", name: "Is Lovable secure enough for a real product?", acceptedAnswer: { "@type": "Answer", text: "The generated code is a starting point, not a finished product. We perform a security review on every build — checking auth flows, server-side validation, API key exposure, and database access patterns — before anything goes to production." } },
    { "@type": "Question", name: "Can Lovable apps handle real user traffic?", acceptedAnswer: { "@type": "Answer", text: "Yes, when properly configured. Lovable apps run on Supabase (PostgreSQL) and can scale well. The limiting factor is usually query performance and architecture — which is exactly what our review and hardening process addresses before launch." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <LovableContent />
    </>
  );
}
