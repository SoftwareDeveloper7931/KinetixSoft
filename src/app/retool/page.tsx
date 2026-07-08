import type { Metadata } from "next";
import RetoolContent from "@/components/pages/RetoolContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Retool Development Agency — Internal Tools & Dashboards | KinetixSoft",
  description:
    "KinetixSoft builds custom internal tools, admin panels, and operational dashboards on Retool. Replace manual SQL queries and spreadsheets with purpose-built software your team actually uses.",
  alternates: { canonical: "https://kinetixsoft.com/retool" },
  keywords: [
    "Retool agency",
    "Retool developer",
    "Retool dashboard development",
    "internal tools development",
    "custom admin panel",
    "Retool consultant",
    "Retool PostgreSQL",
    "ops dashboard Retool",
    "internal software development",
    "business tool builder",
  ],
  openGraph: {
    title: "Retool Development Agency — KinetixSoft",
    description: "Custom internal tools and dashboards built on Retool. Replace spreadsheets with purpose-built operational software.",
    url: "https://kinetixsoft.com/retool",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/retool/#service",
  name: "Retool Internal Tools Development",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description: "KinetixSoft builds internal tools, admin dashboards, and operational workflows using Retool for operations, logistics, finance, and product teams.",
  serviceType: "Internal Tools & Dashboard Development",
  areaServed: "Worldwide",
  offers: { "@type": "Offer", url: "https://kinetixsoft.com/contact", description: "Custom Retool internal tool development — scoped per project" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Retool Development", item: "https://kinetixsoft.com/retool" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How KinetixSoft Builds Your Retool Internal Tool",
  description: "Our process for delivering purpose-built internal tools on Retool",
  step: [
    { "@type": "HowToStep", position: 1, name: "Workflow Discovery", text: "We identify the exact workflow the tool needs to replace — the SQL queries being run manually, the spreadsheets being exported, the approval steps that need a UI." },
    { "@type": "HowToStep", position: 2, name: "Data Source Connection", text: "We connect Retool to your database, API, or service (PostgreSQL, MySQL, REST API, GraphQL) and write the queries the tool needs." },
    { "@type": "HowToStep", position: 3, name: "UI Build", text: "We build the interface — tables, forms, buttons, and modals — purpose-built for the specific workflow, not a general data viewer." },
    { "@type": "HowToStep", position: 4, name: "Permissions & Access Control", text: "We set up role-based access so the right people can see and do the right things." },
    { "@type": "HowToStep", position: 5, name: "Handover & Documentation", text: "We hand over the tool with documentation and train your team, then provide support for the first 30 days." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Retool and what is it used for?", acceptedAnswer: { "@type": "Answer", text: "Retool is a platform for building internal tools — admin panels, dashboards, approval workflows, and data management UIs — that connect directly to your database or API. It's used by operations, support, finance, and product teams who need a proper interface into their data instead of running SQL queries or maintaining spreadsheets." } },
    { "@type": "Question", name: "What kinds of tools can you build with Retool?", acceptedAnswer: { "@type": "Answer", text: "Admin panels, ops dashboards, claims processors, order management tools, customer support UIs, data pipelines, approval workflows — anything that your internal team uses to run the business. Common examples: user lookup tools, refund processors, inventory managers, KPI dashboards, and content moderation queues." } },
    { "@type": "Question", name: "Will the Retool tool connect to our existing database?", acceptedAnswer: { "@type": "Answer", text: "Yes — Retool connects to PostgreSQL, MySQL, MongoDB, REST APIs, GraphQL, and most modern data sources. We handle the connection setup, write the queries, and ensure proper read/write permissions are in place." } },
    { "@type": "Question", name: "How long does a typical Retool build take?", acceptedAnswer: { "@type": "Answer", text: "Most internal tools ship in 2–6 weeks depending on the number of views, data sources, and workflow complexity. A single-purpose tool (e.g. a refund processor or user lookup panel) can be ready in a week. Multi-module ops platforms take 4–8 weeks." } },
    { "@type": "Question", name: "Is Retool secure for internal business data?", acceptedAnswer: { "@type": "Answer", text: "Yes — Retool has enterprise-grade security including SSO, audit logs, row-level permissions, and the ability to self-host. We configure proper role-based access control on every build so users only see and interact with what they're supposed to." } },
    { "@type": "Question", name: "Can Retool replace our current spreadsheet-based processes?", acceptedAnswer: { "@type": "Answer", text: "That's the most common use case. If your team is exporting data to spreadsheets, running manual queries, or copy-pasting between systems, a Retool tool built on your actual database will be faster, less error-prone, and maintainable long-term." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <RetoolContent />
    </>
  );
}
