import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact KinetixSoft — Start Your App Development Project",
  description:
    "Ready to build? Contact KinetixSoft to discuss your FlutterFlow, Lovable, Retool, Podio, or Replit project. We respond within one business day and schedule a free scoping call.",
  alternates: { canonical: "https://kinetixsoft.com/contact" },
  keywords: [
    "contact KinetixSoft",
    "hire FlutterFlow developer",
    "hire app development agency",
    "app development quote",
    "software agency contact",
  ],
  openGraph: {
    title: "Contact KinetixSoft — Start Your Project",
    description: "Tell us about your project. We respond within one business day and schedule a free scoping call.",
    url: "https://kinetixsoft.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://kinetixsoft.com/contact/#webpage",
  name: "Contact KinetixSoft",
  url: "https://kinetixsoft.com/contact",
  isPartOf: { "@id": "https://kinetixsoft.com/#website" },
  description: "Contact KinetixSoft to start your app development project. We respond within one business day.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://kinetixsoft.com/contact" },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": "https://kinetixsoft.com/#organization",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@kinetixsoft.com",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly will KinetixSoft respond to my inquiry?", acceptedAnswer: { "@type": "Answer", text: "We respond to all inquiries within one business day. After your initial message, we'll schedule a scoping call to understand your requirements in detail." } },
    { "@type": "Question", name: "Do you offer free consultations?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer a free initial scoping call for all new projects. We discuss your requirements, recommend the right platform, and provide a rough timeline and budget estimate." } },
    { "@type": "Question", name: "How do you price your projects?", acceptedAnswer: { "@type": "Answer", text: "Projects are priced per scope — not hourly. After the scoping call, we provide a fixed-price proposal based on what you need to build. No surprise invoices." } },
    { "@type": "Question", name: "Do you work with clients outside Pakistan?", acceptedAnswer: { "@type": "Answer", text: "Yes — the majority of our clients are based in the US, UK, Australia, UAE, and other regions. We work fully remotely and are experienced with international collaboration across time zones." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={faqSchema} />
      <ContactContent />
    </>
  );
}
