import type { Metadata } from "next";
import FlutterFlowContent from "@/components/pages/FlutterFlowContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FlutterFlow Development Agency — Mobile & Web Apps | KinetixSoft",
  description:
    "KinetixSoft is a FlutterFlow development agency building production-ready mobile and web apps. Custom UI, Firebase/Supabase integration, API connections, App Store deployment, and post-launch support.",
  alternates: { canonical: "https://kinetixsoft.com/flutterflow" },
  keywords: [
    "FlutterFlow agency",
    "FlutterFlow developer",
    "FlutterFlow app development",
    "hire FlutterFlow developer",
    "FlutterFlow Firebase integration",
    "FlutterFlow Supabase",
    "FlutterFlow mobile app",
    "FlutterFlow production app",
    "no-code mobile app development",
    "cross-platform app development",
  ],
  openGraph: {
    title: "FlutterFlow Development Agency — KinetixSoft",
    description:
      "Production-ready mobile and web apps built on FlutterFlow. Custom UI, Firebase, API integrations, and ongoing support.",
    url: "https://kinetixsoft.com/flutterflow",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/flutterflow/#service",
  name: "FlutterFlow App Development",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft builds production-ready mobile and web apps using FlutterFlow. Services include custom UI design, Firebase and Supabase integration, third-party API connections, App Store and Play Store deployment, and post-launch maintenance.",
  serviceType: "Mobile & Web Application Development",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    url: "https://kinetixsoft.com/contact",
    description: "Custom FlutterFlow app development — scoped per project",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "FlutterFlow Development", item: "https://kinetixsoft.com/flutterflow" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How KinetixSoft Builds Your FlutterFlow App",
  description: "Our 5-step process for delivering production-ready FlutterFlow apps",
  step: [
    { "@type": "HowToStep", position: 1, name: "Discovery & Scoping", text: "We map your requirements, user flows, and data model before writing a single line of code or dragging a single component." },
    { "@type": "HowToStep", position: 2, name: "Data Architecture", text: "We design your Firebase or Supabase schema around your actual data access patterns — not just the happy path." },
    { "@type": "HowToStep", position: 3, name: "UI Build & Integrations", text: "We build your screens in FlutterFlow with custom logic, API integrations, and authentication flows." },
    { "@type": "HowToStep", position: 4, name: "Testing & QA", text: "We test on real iOS and Android devices, covering edge cases, error states, and performance under load." },
    { "@type": "HowToStep", position: 5, name: "Launch & Support", text: "We handle App Store and Play Store submission and provide ongoing support after launch." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is FlutterFlow and what can you build with it?", acceptedAnswer: { "@type": "Answer", text: "FlutterFlow is a visual development platform that generates Flutter code, allowing you to build cross-platform mobile and web apps without writing all the code from scratch. KinetixSoft uses it to build customer-facing mobile apps, web portals, and internal tools — all connected to real backends like Firebase or Supabase." } },
    { "@type": "Question", name: "What makes KinetixSoft different from other FlutterFlow teams?", acceptedAnswer: { "@type": "Answer", text: "We focus on the parts most no-code teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo. Every build starts with a proper data model, not a dragged-in template." } },
    { "@type": "Question", name: "Can you build a fully custom FlutterFlow app, or do you rely on templates?", acceptedAnswer: { "@type": "Answer", text: "Every build starts from your actual requirements. We use FlutterFlow's component system for speed, but the logic, design, and integrations are custom to your product. No template layouts." } },
    { "@type": "Question", name: "How long does a typical FlutterFlow build take?", acceptedAnswer: { "@type": "Answer", text: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs. A lean MVP with Firebase auth and basic CRUD can ship in 3–4 weeks. More complex apps with payment integration, real-time features, or multi-role auth take longer." } },
    { "@type": "Question", name: "Does FlutterFlow work for both iOS and Android?", acceptedAnswer: { "@type": "Answer", text: "Yes — FlutterFlow generates Flutter code which compiles to native iOS and Android apps from a single codebase. We handle App Store and Google Play submission as part of every production build." } },
    { "@type": "Question", name: "Can you integrate my FlutterFlow app with external APIs?", acceptedAnswer: { "@type": "Answer", text: "Yes. We connect FlutterFlow apps to any REST API, including payment gateways (Stripe), messaging (Twilio), email (Brevo), CRM systems, and custom backend services. API integrations are one of our core competencies." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <FlutterFlowContent />
    </>
  );
}
