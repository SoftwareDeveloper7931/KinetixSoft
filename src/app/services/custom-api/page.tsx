import type { Metadata } from "next";
import CustomApiContent from "@/components/pages/CustomApiContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom API Integration Services — Connect Your Apps & Tools | KinetixSoft",
  description:
    "KinetixSoft builds custom API integrations that connect your apps, tools, and databases. REST APIs, webhooks, third-party service connections, and automation pipelines for FlutterFlow, Retool, Podio, and standalone apps.",
  alternates: { canonical: "https://kinetixsoft.com/services/custom-api" },
  keywords: [
    "custom API integration",
    "REST API development",
    "webhook integration",
    "third-party API connection",
    "API consultant",
    "API integration developer",
    "Stripe integration developer",
    "Twilio integration",
    "automation pipeline development",
    "data sync integration",
  ],
  openGraph: {
    title: "Custom API Integration Services — KinetixSoft",
    description: "Connect your apps and data with custom API integrations. REST APIs, webhooks, and automation pipelines built by KinetixSoft.",
    url: "https://kinetixsoft.com/services/custom-api",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/services/custom-api/#service",
  name: "Custom API Integration",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft builds custom REST API integrations, webhook connections, and third-party service connections for FlutterFlow, Retool, Podio, and standalone apps.",
  serviceType: "API Integration & Development",
  areaServed: "Worldwide",
  offers: { "@type": "Offer", url: "https://kinetixsoft.com/contact", description: "Custom API integration — scoped per project" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://kinetixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Custom API Integration", item: "https://kinetixsoft.com/services/custom-api" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a custom API integration?", acceptedAnswer: { "@type": "Answer", text: "A custom API integration connects two or more software systems so they can share data automatically. For example, connecting your Stripe payment data to your Podio CRM, or linking your FlutterFlow app to a third-party shipping service. KinetixSoft builds the middleware, webhook handlers, and data mapping logic that make these connections reliable." } },
    { "@type": "Question", name: "Which services can you integrate with?", acceptedAnswer: { "@type": "Answer", text: "We integrate with any service that exposes a REST API or webhooks. Common integrations include Stripe, Twilio, SendGrid, Brevo, Slack, Google Workspace, Salesforce, HubSpot, QuickBooks, Xero, Shopify, Firebase, Supabase, OpenAI, and Anthropic. If it has an API, we can connect it." } },
    { "@type": "Question", name: "How long does a custom API integration take?", acceptedAnswer: { "@type": "Answer", text: "A simple one-way integration (e.g. sending form data to a CRM) can be built in 1–3 days. Multi-system data pipelines with bidirectional sync, error handling, and retry logic typically take 1–3 weeks depending on complexity." } },
    { "@type": "Question", name: "Can you connect my FlutterFlow or Retool app to an external API?", acceptedAnswer: { "@type": "Answer", text: "Yes — this is one of the most common integration patterns we build. FlutterFlow and Retool have built-in API connectors, but production integrations require proper auth handling, error states, rate limit management, and secure secret storage. We handle all of that." } },
    { "@type": "Question", name: "How do you handle API authentication securely?", acceptedAnswer: { "@type": "Answer", text: "We never expose API keys on the client side. All sensitive credentials are stored as server-side environment variables, and authentication flows use proper token management, refresh logic, and secret rotation where needed." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <CustomApiContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
