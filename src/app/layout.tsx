import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://kinetixsoft.com"),
  title: {
    default: "KinetixSoft — App Development on FlutterFlow, Lovable, Retool, Podio & Replit",
    template: "%s | KinetixSoft",
  },
  description:
    "KinetixSoft builds production-ready apps fast using FlutterFlow, Lovable, Retool, Podio, and Replit. Founder-led development for startups and growing teams.",
  keywords: [
    "FlutterFlow agency",
    "Lovable development",
    "Retool agency",
    "Podio developer",
    "Replit development",
    "app development Pakistan",
    "no-code agency",
  ],
  authors: [{ name: "KinetixSoft" }],
  creator: "KinetixSoft",
  openGraph: {
    siteName: "KinetixSoft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "KinetixSoft — App Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KinetixSoft — App Development Studio",
    description:
      "Production-ready apps on FlutterFlow, Lovable, Retool, Podio & Replit.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://kinetixsoft.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KinetixSoft",
  url: "https://kinetixsoft.com",
  logo: "https://kinetixsoft.com/logo.png",
  description:
    "KinetixSoft is an app development studio that builds production-ready mobile, web, and internal tools using FlutterFlow, Lovable, Retool, Podio, and Replit. Founded in 2025, KinetixSoft works with startups and growing teams who need a working product fast without sacrificing scalability or security.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    name: "Lahore, Pakistan",
  },
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@kinetixsoft.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/in/kinetix-soft-b4542141b",
    "https://www.instagram.com/kinetixsoft/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
