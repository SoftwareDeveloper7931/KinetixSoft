import type { Metadata } from "next";
import FlutterFlowContent from "@/components/pages/FlutterFlowContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FlutterFlow Development Agency — Mobile & Web Apps",
  description:
    "KinetixSoft is a FlutterFlow development studio building production-ready mobile and web apps. Custom logic, Firebase/Supabase integration, API connections, and post-launch support.",
  alternates: { canonical: "https://kinetixsoft.com/flutterflow" },
  keywords: [
    "FlutterFlow agency",
    "FlutterFlow developer",
    "FlutterFlow app development",
    "hire FlutterFlow developer",
    "FlutterFlow Firebase integration",
    "mobile app development",
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
  name: "FlutterFlow App Development",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "KinetixSoft builds production-ready mobile and web apps using FlutterFlow, including custom logic, Firebase/Supabase integration, and third-party API connections.",
  serviceType: "Mobile & Web Application Development",
  areaServed: "Worldwide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What makes KinetixSoft different from other FlutterFlow teams?", acceptedAnswer: { "@type": "Answer", text: "We focus on the parts most no-code teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo." } },
    { "@type": "Question", name: "Can you build a fully custom FlutterFlow app, or do you rely on templates?", acceptedAnswer: { "@type": "Answer", text: "Every build starts from your actual requirements. We use FlutterFlow's component system for speed, but the logic, design, and integrations are custom to your product." } },
    { "@type": "Question", name: "How long does a typical FlutterFlow build take?", acceptedAnswer: { "@type": "Answer", text: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <FlutterFlowContent />
    </>
  );
}
