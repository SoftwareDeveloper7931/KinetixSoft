import type { Metadata } from "next";
import PodioContent from "@/components/pages/PodioContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Podio Development & CRM Solutions Agency | KinetixSoft",
  description:
    "KinetixSoft builds custom Podio workspaces, CRM systems, and workflow automation. Expert Podio development for growing teams replacing spreadsheets with structured, automated processes.",
  alternates: { canonical: "https://kinetixsoft.com/podio" },
  keywords: [
    "Podio developer",
    "Podio agency",
    "Podio CRM development",
    "Podio workflow automation",
    "custom Podio workspace",
    "Podio consulting",
    "Podio GlobiFlow",
    "Podio integration",
    "Podio migration",
    "CRM automation Podio",
  ],
  openGraph: {
    title: "Podio Development & CRM Solutions — KinetixSoft",
    description:
      "Custom Podio workspaces, CRM systems, and workflow automation built by KinetixSoft. Replace spreadsheets with structured, automated processes.",
    url: "https://kinetixsoft.com/podio",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kinetixsoft.com/podio/#service",
  name: "Podio CRM & Workflow Development",
  provider: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft builds custom Podio workspaces, CRM systems, automated workflows, client portals, and third-party integrations for growing teams.",
  serviceType: "CRM & Business Process Automation",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    url: "https://kinetixsoft.com/contact",
    description: "Custom Podio workspace and CRM development — scoped per project",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Podio Development", item: "https://kinetixsoft.com/podio" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How KinetixSoft Builds Your Podio Workspace",
  description: "Our process for delivering custom Podio CRM systems and workflow automation",
  step: [
    { "@type": "HowToStep", position: 1, name: "Process Mapping", text: "We map your existing workflows, data, and team structure before opening Podio — building around how your team works, not what Podio offers." },
    { "@type": "HowToStep", position: 2, name: "Workspace Architecture", text: "We design the app structure, relationships, and field configuration to support your workflow with minimum complexity." },
    { "@type": "HowToStep", position: 3, name: "Build & Configure", text: "We build your apps, views, and forms, then set up the workflow automations and notification rules your team needs." },
    { "@type": "HowToStep", position: 4, name: "Data Migration", text: "We migrate your existing data from spreadsheets or other systems, cleaning and restructuring it for Podio." },
    { "@type": "HowToStep", position: 5, name: "Training & Handover", text: "We train your team on real data and scenarios, then hand over full documentation and admin access." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Podio and what can you build with it?", acceptedAnswer: { "@type": "Answer", text: "Podio is a flexible CRM and project management platform that lets you build custom workspaces for your team. KinetixSoft uses it to build CRM systems, project trackers, client portals, approval workflows, and anything that replaces disconnected spreadsheets and emails." } },
    { "@type": "Question", name: "What can you build in Podio?", acceptedAnswer: { "@type": "Answer", text: "We build custom CRM systems, project management tools, automated workflows, client portals, and any structured process that replaces spreadsheets or disconnected tools. If your team tracks work in spreadsheets or Notion, we can build you a proper Podio workspace around that process." } },
    { "@type": "Question", name: "How long does a Podio project take?", acceptedAnswer: { "@type": "Answer", text: "Most Podio builds take 3–8 weeks depending on complexity, the number of workflows, and how many third-party integrations are needed. A simple CRM replacement can be ready in 2–3 weeks. Multi-team systems with complex automation take longer." } },
    { "@type": "Question", name: "Can you migrate data from our existing system into Podio?", acceptedAnswer: { "@type": "Answer", text: "Yes — data migration is part of the process. We map your existing data from spreadsheets, another CRM, or any exportable system, clean it up, and import it into your new Podio workspace so your team can hit the ground running." } },
    { "@type": "Question", name: "Can Podio connect to other tools we use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Podio connects to hundreds of tools via its native integrations and via GlobiFlow (now Citrix Podio Automation). We connect Podio to email, Slack, accounting software, payment systems, and custom webhooks." } },
    { "@type": "Question", name: "Is Podio right for my business size?", acceptedAnswer: { "@type": "Answer", text: "Podio is ideal for teams of 5–500 people that have outgrown spreadsheets but don't need (or can't justify) enterprise software like Salesforce. It's particularly strong for service businesses, agencies, construction, real estate, and professional services." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <PodioContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
