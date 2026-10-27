import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KinetixSoft — Autonomous Agentic AI, FlutterFlow, Bubble & Internal Tools Agency",
  description:
    "KinetixSoft builds autonomous agentic AI systems, production-ready mobile apps, web applications, and internal tools using FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit. Founder-led engineering studio serving startups worldwide.",
  alternates: { canonical: "https://kinetixsoft.com" },
  openGraph: {
    title: "KinetixSoft — Autonomous Agentic AI & App Development Studio",
    description:
      "Production-ready autonomous AI agents, mobile, web, and internal tools built on FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit. Founder-led, worldwide.",
    url: "https://kinetixsoft.com",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kinetixsoft.com/#webpage",
  name: "KinetixSoft — Autonomous Agentic AI & App Development Studio",
  url: "https://kinetixsoft.com",
  isPartOf: { "@id": "https://kinetixsoft.com/#website" },
  about: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft builds autonomous agentic AI systems, production-ready mobile apps, web applications, and internal tools using FlutterFlow, Bubble, Lovable, Retool, Podio, and Replit.",
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
      name: "What kind of software can KinetixSoft build for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build whatever you envision: native mobile apps (iOS & Android via FlutterFlow), scalable web applications & SaaS (Bubble, Lovable, Next.js), bespoke enterprise CRMs & workflow automation (Podio, GlobiFlow, Retool), and custom AI microservices & APIs (Python, FastAPI, Node)."
      }
    },
    {
      "@type": "Question",
      name: "What makes KinetixSoft different from traditional dev agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional agencies take 9 months, charge six figures, and pass you to junior developers. We are a founder-led studio that delivers production-ready software in 4 to 10 weeks with zero technical debt, direct senior architect access, and complete IP ownership."
      }
    },
    {
      "@type": "Question",
      name: "Can you build a fully custom app, or do you rely on rigid templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every single build starts from your custom business requirements. We leverage mature low-code frameworks for speed where it makes sense, but the database schemas, serverless logic, custom APIs, and UI/UX design are engineered uniquely for your product."
      }
    },
    {
      "@type": "Question",
      name: "Will my application scale if our user base grows rapidly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we engineer data models, indexing, and serverless proxies specifically for exponential scale. Whether your app has 10 users or 50,000 active users, the architecture handles spikes without requiring an emergency rewrite."
      }
    },
    {
      "@type": "Question",
      name: "How long does a typical build take from kickoff to launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVP and growth builds launch in 4 to 10 weeks depending on custom integrations, backend schemas, and payment logic. We provide a transparent sprint roadmap with weekly demo milestones."
      }
    },
    {
      "@type": "Question",
      name: "Do I own 100% of the code, IP, and backend accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. You retain 100% ownership of your GitHub repositories, database schemas, cloud keys, and app store accounts. There is zero proprietary lock-in."
      }
    },
    {
      "@type": "Question",
      name: "Do you support the app after it goes live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we offer dedicated post-launch SLA support, real-time monitoring, security updates, and ongoing sprint cycles for new feature releases."
      }
    }
  ]
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
