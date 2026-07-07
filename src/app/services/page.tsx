import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Services — FlutterFlow, Lovable, Retool, Podio & Replit",
  description:
    "KinetixSoft offers app development services across five platforms: FlutterFlow, Lovable, Retool, Podio, and Replit. Choose the right platform for your project.",
  alternates: { canonical: "https://kinetixsoft.com/services" },
  openGraph: {
    title: "Services — KinetixSoft",
    description:
      "Five platforms. One studio. FlutterFlow, Lovable, Retool, Podio, and Replit development services.",
    url: "https://kinetixsoft.com/services",
  },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KinetixSoft Development Services",
  url: "https://kinetixsoft.com/services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "FlutterFlow App Development", url: "https://kinetixsoft.com/flutterflow" },
    { "@type": "ListItem", position: 2, name: "Lovable Web App Development", url: "https://kinetixsoft.com/lovable" },
    { "@type": "ListItem", position: 3, name: "Retool Internal Tools", url: "https://kinetixsoft.com/retool" },
    { "@type": "ListItem", position: 4, name: "Podio CRM Development", url: "https://kinetixsoft.com/podio" },
    { "@type": "ListItem", position: 5, name: "Replit Full-Stack Development", url: "https://kinetixsoft.com/replit-platform" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={listSchema} />
      <ServicesContent />
    </>
  );
}
