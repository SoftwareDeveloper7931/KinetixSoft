import type { Metadata } from "next";
import ReplitContent from "@/components/pages/ReplitContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Replit Development Agency — Full-Stack & AI App Development",
  description:
    "KinetixSoft builds full-stack apps and AI tools on Replit. From prototypes to production — Python, Node.js, AI agents, and custom backend services.",
  alternates: { canonical: "https://kinetixsoft.com/replit-platform" },
  keywords: [
    "Replit developer",
    "Replit agency",
    "Replit app development",
    "full-stack AI development",
    "Python AI agent development",
    "Replit AI tools",
  ],
  openGraph: {
    title: "Replit Development Agency — KinetixSoft",
    description:
      "Full-stack apps and AI tools built on Replit. Python, Node.js, AI agents, and production backend services.",
    url: "https://kinetixsoft.com/replit-platform",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Replit Full-Stack & AI Development",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "KinetixSoft builds full-stack apps, AI agents, and backend services on Replit for startups and teams that need production-ready code fast.",
  serviceType: "Full-Stack & AI Application Development",
  areaServed: "Worldwide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What can you build with Replit?", acceptedAnswer: { "@type": "Answer", text: "Full-stack web apps, AI agents, automation scripts, REST APIs, bots, and internal tools using Python, Node.js, or any modern language Replit supports." } },
    { "@type": "Question", name: "Can you build AI agents or LLM-powered features?", acceptedAnswer: { "@type": "Answer", text: "Yes — AI integrations are a core part of what we build on Replit. We work with OpenAI, Anthropic, and custom model pipelines." } },
    { "@type": "Question", name: "How long does a Replit project take?", acceptedAnswer: { "@type": "Answer", text: "Simple tools and scripts can ship in days. Production-grade apps typically take 3–8 weeks depending on scope and complexity." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ReplitContent />
    </>
  );
}
