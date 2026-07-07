import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact KinetixSoft — Start Your Project",
  description:
    "Get in touch with KinetixSoft to start your app development project. We respond within one business day.",
  alternates: { canonical: "https://kinetixsoft.com/contact" },
  openGraph: {
    title: "Contact KinetixSoft",
    description: "Get in touch to start your app development project. We respond within one business day.",
    url: "https://kinetixsoft.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact KinetixSoft",
  url: "https://kinetixsoft.com/contact",
  description: "Contact KinetixSoft to start your app development project.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactContent />
    </>
  );
}
