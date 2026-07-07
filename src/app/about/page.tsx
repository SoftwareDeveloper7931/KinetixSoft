import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About KinetixSoft — Founder-Led App Development Studio",
  description:
    "KinetixSoft is a founder-led app development studio based in Lahore, Pakistan. We build production-ready apps on FlutterFlow, Lovable, Retool, Podio, and Replit for startups worldwide.",
  alternates: { canonical: "https://kinetixsoft.com/about" },
  openGraph: {
    title: "About KinetixSoft",
    description:
      "Founder-led app development studio building production-ready products on FlutterFlow, Lovable, Retool, Podio, and Replit.",
    url: "https://kinetixsoft.com/about",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About KinetixSoft",
  url: "https://kinetixsoft.com/about",
  description:
    "KinetixSoft is a founder-led app development studio that builds production-ready apps on FlutterFlow, Lovable, Retool, Podio, and Replit.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <AboutContent />
    </>
  );
}
