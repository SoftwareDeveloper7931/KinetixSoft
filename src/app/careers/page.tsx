import type { Metadata } from "next";
import CareersContent from "@/components/pages/CareersContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Careers at KinetixSoft — Join Our Studio | Lahore, Pakistan",
  description:
    "Join KinetixSoft — a founder-led app development studio building on FlutterFlow, Lovable, Retool, Podio, and Replit. Open roles for developers who want to ship real products fast.",
  alternates: { canonical: "https://kinetixsoft.com/careers" },
  keywords: [
    "KinetixSoft careers",
    "software jobs Lahore Pakistan",
    "FlutterFlow developer job",
    "Podio developer job",
    "Retool developer job",
    "no-code developer job",
    "remote software job Pakistan",
  ],
  openGraph: {
    title: "Careers at KinetixSoft — Join Our Studio",
    description: "Open roles at KinetixSoft for FlutterFlow, Lovable, Retool, Podio, and Replit developers. Lahore-based, remote-friendly.",
    url: "https://kinetixsoft.com/careers",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://kinetixsoft.com/careers" },
  ],
};

const jobPostings = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "FlutterFlow Developer",
    description: "Build production mobile and web apps on FlutterFlow for KinetixSoft clients worldwide. Work with Firebase, Supabase, and REST APIs. 2+ years experience with FlutterFlow or Flutter required.",
    hiringOrganization: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com", logo: "https://kinetixsoft.com/logo.png" },
    employmentType: "FULL_TIME",
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } },
    applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
    datePosted: "2026-01-01",
    validThrough: "2026-12-31",
    baseSalary: { "@type": "MonetaryAmount", currency: "PKR", value: { "@type": "QuantitativeValue", minValue: 100000, maxValue: 250000, unitText: "MONTH" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Podio Developer / CRM Architect",
    description: "Design and build custom Podio workspaces, CRM systems, and workflow automations for KinetixSoft clients. Experience with GlobiFlow or Podio Workflow Automation required.",
    hiringOrganization: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com", logo: "https://kinetixsoft.com/logo.png" },
    employmentType: "FULL_TIME",
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } },
    applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
    datePosted: "2026-01-01",
    validThrough: "2026-12-31",
    baseSalary: { "@type": "MonetaryAmount", currency: "PKR", value: { "@type": "QuantitativeValue", minValue: 80000, maxValue: 200000, unitText: "MONTH" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Retool / Internal Tools Developer",
    description: "Build internal tools and dashboards on Retool for operations and logistics teams. SQL proficiency and REST API experience required. Experience with Retool or similar low-code internal tool builders preferred.",
    hiringOrganization: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com", logo: "https://kinetixsoft.com/logo.png" },
    employmentType: "FULL_TIME",
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } },
    applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
    datePosted: "2026-01-01",
    validThrough: "2026-12-31",
    baseSalary: { "@type": "MonetaryAmount", currency: "PKR", value: { "@type": "QuantitativeValue", minValue: 80000, maxValue: 200000, unitText: "MONTH" } },
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {jobPostings.map((job, i) => (
        <JsonLd key={i} data={job} />
      ))}
      <CareersContent />
    </>
  );
}
