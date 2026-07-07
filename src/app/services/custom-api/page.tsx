import type { Metadata } from "next";
import CustomApiContent from "@/components/pages/CustomApiContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom API Integration Services — KinetixSoft",
  description:
    "KinetixSoft builds custom API integrations that connect your apps, tools, and databases. REST APIs, webhooks, Zapier alternatives, and third-party service connections.",
  alternates: { canonical: "https://kinetixsoft.com/services/custom-api" },
  keywords: [
    "custom API integration",
    "REST API development",
    "webhook integration",
    "third-party API connection",
    "API consultant",
  ],
  openGraph: {
    title: "Custom API Integration Services — KinetixSoft",
    description:
      "Connect your apps and data with custom API integrations built by KinetixSoft.",
    url: "https://kinetixsoft.com/services/custom-api",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom API Integration",
  provider: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  description:
    "Custom REST API integrations, webhook connections, and third-party service connections for FlutterFlow, Retool, Podio, and standalone apps.",
  serviceType: "API Integration & Development",
  areaServed: "Worldwide",
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <CustomApiContent />
    </>
  );
}
