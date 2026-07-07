import type { Metadata } from "next";
import PodioContent from "@/components/pages/PodioContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Podio Development & CRM Solutions Agency",
  description:
    "KinetixSoft builds custom Podio workspaces, workflows, and CRM systems. Expert Podio development for growing teams that have outgrown spreadsheets.",
  alternates: { canonical: "https://kinetixsoft.com/podio" },
  keywords: [
    "Podio developer",
    "Podio agency",
    "Podio CRM development",
    "Podio workflow automation",
    "custom Podio workspace",
    "Podio consulting",
  ],
  openGraph: {
    title: "Podio Development & CRM Solutions — KinetixSoft",
    description:
      "Custom Podio workspaces, CRM systems, and workflow automation built by KinetixSoft.",
    url: "https://kinetixsoft.com/podio",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Podio CRM & Workflow Development",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "Custom Podio workspaces, CRM systems, automated workflows, and integrations built for growing teams.",
  serviceType: "CRM & Business Process Automation",
  areaServed: "Worldwide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What can you build in Podio?", acceptedAnswer: { "@type": "Answer", text: "We build custom CRM systems, project management tools, automated workflows, client portals, and anything that replaces spreadsheets or disconnected tools for your team." } },
    { "@type": "Question", name: "How long does a Podio project take?", acceptedAnswer: { "@type": "Answer", text: "Most Podio builds take 3–8 weeks depending on complexity, the number of workflows, and how many third-party integrations are needed." } },
    { "@type": "Question", name: "Can you migrate data from our existing system into Podio?", acceptedAnswer: { "@type": "Answer", text: "Yes — data migration is part of the process. We'll map your existing data, clean it up, and import it into your new Podio workspace." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PodioContent />
    </>
  );
}
