import type { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — KinetixSoft",
  description: "KinetixSoft's terms of service. Read our usage terms before engaging our services.",
  alternates: { canonical: "https://kinetixsoft.com/terms" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TermsContent />;
}
