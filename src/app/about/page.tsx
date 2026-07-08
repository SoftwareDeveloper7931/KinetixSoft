import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About KinetixSoft — Founder-Led App Development Studio | Lahore, Pakistan",
  description:
    "KinetixSoft is a founder-led app development studio based in Lahore, Pakistan. We build production-ready apps on FlutterFlow, Lovable, Retool, Podio, and Replit for startups and growing teams worldwide. No account managers — just engineers who ship.",
  alternates: { canonical: "https://kinetixsoft.com/about" },
  keywords: [
    "KinetixSoft",
    "app development studio Pakistan",
    "FlutterFlow agency Lahore",
    "no-code development studio",
    "founder-led software agency",
    "software agency Pakistan",
  ],
  openGraph: {
    title: "About KinetixSoft — Founder-Led App Development Studio",
    description: "Founder-led app development studio building production-ready products on FlutterFlow, Lovable, Retool, Podio, and Replit.",
    url: "https://kinetixsoft.com/about",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://kinetixsoft.com/about/#webpage",
  name: "About KinetixSoft",
  url: "https://kinetixsoft.com/about",
  isPartOf: { "@id": "https://kinetixsoft.com/#website" },
  about: { "@id": "https://kinetixsoft.com/#organization" },
  description:
    "KinetixSoft is a founder-led app development studio that builds production-ready apps on FlutterFlow, Lovable, Retool, Podio, and Replit. Based in Lahore, Pakistan, serving clients worldwide.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://kinetixsoft.com/about" },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    xPath: ["//h1", "//meta[@name='description']/@content"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <AboutContent />
    </>
  );
}
