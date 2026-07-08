import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://kinetixsoft.com"),
  title: {
    default: "KinetixSoft — FlutterFlow, Lovable, Retool, Podio & Replit Development Agency",
    template: "%s | KinetixSoft",
  },
  description:
    "KinetixSoft is a founder-led app development studio that builds production-ready mobile apps, web apps, internal tools, and CRM systems using FlutterFlow, Lovable, Retool, Podio, and Replit. Based in Lahore, Pakistan — serving clients worldwide.",
  keywords: [
    "FlutterFlow agency",
    "FlutterFlow developer for hire",
    "Lovable development agency",
    "Retool internal tools developer",
    "Podio CRM developer",
    "Podio workspace consultant",
    "Replit full-stack development",
    "no-code app development agency",
    "low-code development studio",
    "AI app development",
    "mobile app development Pakistan",
    "custom API integration",
    "SaaS development agency",
    "internal tools development",
    "app development studio Lahore",
  ],
  authors: [{ name: "KinetixSoft", url: "https://kinetixsoft.com" }],
  creator: "KinetixSoft",
  publisher: "KinetixSoft",
  category: "Technology",
  openGraph: {
    siteName: "KinetixSoft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "KinetixSoft — App Development Studio building on FlutterFlow, Lovable, Retool, Podio and Replit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KinetixSoft — App Development Studio",
    description:
      "Production-ready apps on FlutterFlow, Lovable, Retool, Podio & Replit. Founder-led studio, worldwide clients.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://kinetixsoft.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://kinetixsoft.com/#organization",
  name: "KinetixSoft",
  alternateName: "Kinetix Soft",
  url: "https://kinetixsoft.com",
  logo: {
    "@type": "ImageObject",
    url: "https://kinetixsoft.com/logo.png",
    width: 200,
    height: 200,
  },
  image: "https://kinetixsoft.com/logo-full.png",
  slogan: "Build Fast. Launch Right.",
  description:
    "KinetixSoft is a founder-led app development studio that builds production-ready mobile apps, web applications, internal tools, and CRM systems using FlutterFlow, Lovable, Retool, Podio, and Replit. Founded in 2025 and based in Lahore, Pakistan, KinetixSoft works with startups and growing teams worldwide who need working software fast without sacrificing scalability or security.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    name: "Lahore, Pakistan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "FlutterFlow app development",
    "Lovable web application development",
    "Retool internal tools development",
    "Podio CRM development",
    "Replit full-stack development",
    "No-code development",
    "Low-code development",
    "AI agent development",
    "Mobile app development",
    "SaaS product development",
    "Custom API integration",
    "Firebase integration",
    "Supabase integration",
    "Workflow automation",
    "Business process automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "FlutterFlow App Development", url: "https://kinetixsoft.com/flutterflow" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lovable Web App Development", url: "https://kinetixsoft.com/lovable" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retool Internal Tools", url: "https://kinetixsoft.com/retool" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Podio CRM & Workflow", url: "https://kinetixsoft.com/podio" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Replit Full-Stack & AI", url: "https://kinetixsoft.com/replit-platform" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom API Integration", url: "https://kinetixsoft.com/services/custom-api" } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@kinetixsoft.com",
    availableLanguage: ["English"],
    areaServed: "Worldwide",
  },
  sameAs: [
    "https://www.linkedin.com/in/kinetix-soft-b4542141b",
    "https://www.instagram.com/kinetixsoft/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kinetixsoft.com/#website",
  name: "KinetixSoft",
  url: "https://kinetixsoft.com",
  description: "KinetixSoft builds production-ready apps on FlutterFlow, Lovable, Retool, Podio, and Replit.",
  publisher: { "@id": "https://kinetixsoft.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://kinetixsoft.com/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
