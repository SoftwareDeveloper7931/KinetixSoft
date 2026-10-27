import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "App Development Services — FlutterFlow, Lovable, Retool, Podio, Replit & Bubble | KinetixSoft",
  description:
    "KinetixSoft offers app development services across six platforms: FlutterFlow (mobile apps), Lovable (web apps/SaaS), Retool (internal tools), Podio (CRM), Replit (full-stack/AI), and Bubble (no-code web apps). Find the right platform for your project.",
  alternates: { canonical: "https://kinetixsoft.com/services" },
  keywords: [
    "app development services",
    "FlutterFlow development",
    "Lovable app development",
    "Retool internal tools",
    "Podio CRM development",
    "Replit full-stack",
    "Bubble app development",
    "no-code development services",
    "low-code agency services",
  ],
  openGraph: {
    title: "Services — KinetixSoft",
    description: "Six platforms. One studio. FlutterFlow, Lovable, Retool, Podio, Replit, and Bubble development services.",
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
  description: "Production-ready app development services across six low-code and no-code platforms.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "FlutterFlow App Development", url: "https://kinetixsoft.com/flutterflow", description: "Cross-platform mobile and web apps built on FlutterFlow with Firebase, Supabase, and custom API integrations." },
    { "@type": "ListItem", position: 2, name: "Lovable Web App Development", url: "https://kinetixsoft.com/lovable", description: "AI-powered SaaS products and web apps built on Lovable with proper auth, payments, and production hardening." },
    { "@type": "ListItem", position: 3, name: "Retool Internal Tools", url: "https://kinetixsoft.com/retool", description: "Purpose-built internal tools, admin panels, and dashboards on Retool connected to your database or API." },
    { "@type": "ListItem", position: 4, name: "Podio CRM Development", url: "https://kinetixsoft.com/podio", description: "Custom Podio workspaces, CRM systems, and workflow automation for growing teams." },
    { "@type": "ListItem", position: 5, name: "Replit Full-Stack & AI Development", url: "https://kinetixsoft.com/replit-platform", description: "Full-stack apps, AI agents, and backend services built on Replit using Python and Node.js." },
    { "@type": "ListItem", position: 6, name: "Bubble Web App Development", url: "https://kinetixsoft.com/bubble", description: "Production-ready no-code web apps built on Bubble with proper data architecture, workflows, and API integrations." },
    { "@type": "ListItem", position: 7, name: "Custom API Integration", url: "https://kinetixsoft.com/services/custom-api", description: "Custom REST API integrations, webhooks, and automation pipelines connecting your apps and data sources." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does KinetixSoft provide for startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We engineer full-lifecycle software solutions across six production stacks: native mobile apps (FlutterFlow with Google Impeller 120 FPS), complex relational web SaaS and marketplaces (Bubble), AI-native web products (Lovable with Supabase pgvector), enterprise command centers (Retool), automated CRM pipelines (Podio with GlobiFlow), and autonomous AI agent swarms (Replit with LangGraph and FastAPI)."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure low-code applications scale without performance bottlenecks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We engineer low-code frontends with enterprise backend architectures. For FlutterFlow, code compiles to native ARM binary using Google Impeller GPU acceleration with local SQLite caching. For databases, we configure indexed Supabase Postgres schemas, serverless Firebase Cloud Functions for heavy compute, and cryptographic Row-Level Security (RLS) to ensure sub-100ms response times at scale."
      }
    },
    {
      "@type": "Question",
      name: "Which framework should I choose: FlutterFlow, Bubble, or Lovable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose FlutterFlow for native iOS & Android apps needing GPU performance, offline sync, and App Store distribution. Choose Bubble for database-heavy web platforms, directories, and multi-sided marketplaces. Choose Lovable for rapid, AI-first web applications and MVPs built on clean React and Supabase."
      }
    },
    {
      "@type": "Question",
      name: "Can you integrate custom backend APIs without exposing confidential API keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — zero-trust security is our foundational standard. We never expose API keys on client devices. In FlutterFlow, we configure Private API Groups routed through serverless Firebase Cloud Functions that inject secrets server-side. In Bubble and Lovable, all third-party integrations communicate through secure backend API connectors."
      }
    },
    {
      "@type": "Question",
      name: "Do I own 100% of my private GitHub repository, database, and source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. You retain 100% ownership of your GitHub repositories, database schemas, API accounts, and app store credentials from Day 1. There is zero proprietary lock-in and zero ongoing platform royalty fees owed to KinetixSoft."
      }
    },
    {
      "@type": "Question",
      name: "How long does a typical production build take from kickoff to App Store launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most commercial MVPs and client applications ship in 4 to 10 weeks, depending on integration depth and payment complexity. We deliver weekly working builds (TestFlight / staging web URLs) with direct Slack collaboration so you can test features continuously."
      }
    }
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

export const dynamic = "force-static";
export const revalidate = 86400;
