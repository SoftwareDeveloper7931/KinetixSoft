import type { Metadata } from "next";
import LovableContent from "@/components/pages/LovableContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Lovable Development Agency — AI-Powered Web Apps",
  description:
    "KinetixSoft builds production-ready SaaS products and web apps on Lovable. Turn your idea into a working product without the full-stack hiring process.",
  alternates: { canonical: "https://kinetixsoft.com/lovable" },
  keywords: [
    "Lovable agency",
    "Lovable developer",
    "Lovable app development",
    "AI web app development",
    "SaaS development",
    "no-code web app",
  ],
  openGraph: {
    title: "Lovable Development Agency — KinetixSoft",
    description:
      "Production SaaS products and web apps built on Lovable. From idea to launch without the full-stack hiring process.",
    url: "https://kinetixsoft.com/lovable",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lovable Web Application Development",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "KinetixSoft builds production-ready web apps and SaaS products using Lovable, including auth, payments, database setup, and third-party integrations.",
  serviceType: "Web Application Development",
  areaServed: "Worldwide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What kind of apps can you build with Lovable?", acceptedAnswer: { "@type": "Answer", text: "SaaS dashboards, marketplaces, client portals, internal apps, AI-powered tools, and any web app that needs auth, database storage, payments, and API integrations." } },
    { "@type": "Question", name: "How long does a Lovable build take?", acceptedAnswer: { "@type": "Answer", text: "Most projects run 3–8 weeks. Simple MVPs ship faster; more complex apps with multiple integrations take a bit longer." } },
    { "@type": "Question", name: "Can I own and export the code?", acceptedAnswer: { "@type": "Answer", text: "Yes — Lovable generates clean code that you own. We can also help you export, host, and maintain it after launch." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <LovableContent />
    </>
  );
}
