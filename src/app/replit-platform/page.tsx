import type { Metadata } from "next";
import ReplitContent from "@/components/pages/ReplitContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Replit Development Agency — Full-Stack & AI App Development | KinetixSoft",
  description:
    "KinetixSoft builds full-stack apps, AI agents, and backend services on Replit. Python, Node.js, LLM integrations, and production-grade backend infrastructure — from prototype to live product.",
  alternates: { canonical: "https://kinetixsoft.com/replit-platform" },
  keywords: [
    "Replit developer",
    "Replit agency",
    "Replit app development",
    "full-stack AI development",
    "Python AI agent development",
    "Replit AI tools",
    "LLM app development",
    "OpenAI integration developer",
    "AI automation development",
    "Replit production deployment",
  ],
  openGraph: {
    title: "Replit Development Agency — KinetixSoft",
    description: "Full-stack apps, AI agents, and backend services built on Replit. Python, Node.js, LLM integrations — from prototype to production.",
    url: "https://kinetixsoft.com/replit-platform",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/replit-platform/#service",
  name: "Replit Full-Stack & AI Development",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description: "KinetixSoft builds full-stack apps, AI agents, and backend services on Replit for startups and teams that need production-ready code fast.",
  serviceType: "Full-Stack & AI Application Development",
  areaServed: "Worldwide",
  offers: { "@type": "Offer", url: "https://kinetixsoft.com/contact", description: "Custom Replit app and AI agent development — scoped per project" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Replit Development", item: "https://kinetixsoft.com/replit-platform" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How KinetixSoft Builds Your Replit App or AI Agent",
  description: "Our process for delivering full-stack apps and AI tools on Replit",
  step: [
    { "@type": "HowToStep", position: 1, name: "Requirements & Architecture", text: "We scope the app or agent requirements, choose the right stack, and plan the architecture before writing code." },
    { "@type": "HowToStep", position: 2, name: "Backend & API Development", text: "We build the server, API endpoints, database schema, and any external service integrations." },
    { "@type": "HowToStep", position: 3, name: "AI Integration & Agent Logic", text: "For AI projects, we integrate LLM providers (OpenAI, Anthropic), build the prompt logic, and add state management for reliable agent operation." },
    { "@type": "HowToStep", position: 4, name: "Error Handling & Observability", text: "We add proper error handling, retry logic, logging, and monitoring so the app behaves predictably in production." },
    { "@type": "HowToStep", position: 5, name: "Deployment & Handover", text: "We deploy to production on Replit or your preferred infrastructure and provide documentation and post-launch support." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What can you build with Replit?", acceptedAnswer: { "@type": "Answer", text: "Full-stack web apps, AI agents, automation scripts, REST APIs, bots, internal tools, and backend services using Python, Node.js, or any modern language Replit supports. Replit is particularly strong for AI-powered applications and rapid backend development." } },
    { "@type": "Question", name: "Can you build AI agents or LLM-powered features?", acceptedAnswer: { "@type": "Answer", text: "Yes — AI integrations are a core part of what we build on Replit. We work with OpenAI, Anthropic, and custom model pipelines. We also build the observability, error handling, and state management that make AI agents reliable in production, not just in demos." } },
    { "@type": "Question", name: "How long does a Replit project take?", acceptedAnswer: { "@type": "Answer", text: "Simple tools and scripts can ship in days. A basic AI agent or REST API can be ready in 1–2 weeks. Production-grade full-stack apps typically take 3–8 weeks depending on scope, integrations, and complexity." } },
    { "@type": "Question", name: "Is Replit suitable for production applications?", acceptedAnswer: { "@type": "Answer", text: "Yes — Replit supports production deployments with persistent storage, custom domains, and always-on hosting. We build with production requirements in mind from day one: proper error handling, environment variable management, database connections, and deployment configuration." } },
    { "@type": "Question", name: "What languages and frameworks do you use on Replit?", acceptedAnswer: { "@type": "Answer", text: "We primarily use Python (FastAPI, Flask) and Node.js (Express, Next.js) depending on the project requirements. For AI applications we typically use Python with LangChain or direct OpenAI/Anthropic SDK integrations." } },
    { "@type": "Question", name: "Can you build a chatbot or AI assistant for my business?", acceptedAnswer: { "@type": "Answer", text: "Yes — AI chatbots and assistants are one of the most common projects we build on Replit. We handle the LLM integration, prompt engineering, conversation state management, knowledge base connections, and deployment. We also add the monitoring and fallback logic that keeps your chatbot working reliably." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <ReplitContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
