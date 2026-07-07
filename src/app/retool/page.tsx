import type { Metadata } from "next";
import RetoolContent from "@/components/pages/RetoolContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Retool Development Agency — Internal Tools & Dashboards",
  description:
    "KinetixSoft builds custom internal tools, admin dashboards, and operational workflows on Retool. Purpose-built tools that replace clunky spreadsheets and off-the-shelf software.",
  alternates: { canonical: "https://kinetixsoft.com/retool" },
  keywords: [
    "Retool agency",
    "Retool developer",
    "Retool dashboard development",
    "internal tools development",
    "custom admin panel",
    "Retool consultant",
  ],
  openGraph: {
    title: "Retool Development Agency — KinetixSoft",
    description:
      "Custom internal tools and dashboards built on Retool. Replace spreadsheets with purpose-built operational software.",
    url: "https://kinetixsoft.com/retool",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retool Internal Tools Development",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "KinetixSoft builds internal tools, admin dashboards, and data pipelines using Retool for operations, logistics, and product teams.",
  serviceType: "Internal Tools & Dashboard Development",
  areaServed: "Worldwide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What kinds of tools can you build with Retool?", acceptedAnswer: { "@type": "Answer", text: "Admin panels, ops dashboards, claims processors, order management tools, customer support UIs, data pipelines, approval workflows — anything that your internal team uses to run the business." } },
    { "@type": "Question", name: "Will the Retool tool connect to our existing database?", acceptedAnswer: { "@type": "Answer", text: "Yes — Retool connects to PostgreSQL, MySQL, MongoDB, REST APIs, GraphQL, and most modern data sources. We handle the connection setup and query writing." } },
    { "@type": "Question", name: "How long does a typical Retool build take?", acceptedAnswer: { "@type": "Answer", text: "Most internal tools ship in 2–6 weeks depending on the number of views, data sources, and workflow complexity." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <RetoolContent />
    </>
  );
}
