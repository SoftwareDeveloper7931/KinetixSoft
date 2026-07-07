import type { Metadata } from "next";
import CareersContent from "@/components/pages/CareersContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Careers at KinetixSoft — Join Our Studio",
  description:
    "Join the KinetixSoft team. We're hiring FlutterFlow developers, Podio architects, and internal tools engineers.",
  alternates: { canonical: "https://kinetixsoft.com/careers" },
  openGraph: {
    title: "Careers at KinetixSoft",
    description: "Join our studio. Open roles in FlutterFlow development, Podio, and internal tools.",
    url: "https://kinetixsoft.com/careers",
  },
};

const jobSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  hiringOrganization: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  employmentType: "FULL_TIME",
  jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" } },
  datePosted: "2025-01-01",
  validThrough: "2026-12-31",
  applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={jobSchema} />
      <CareersContent />
    </>
  );
}
