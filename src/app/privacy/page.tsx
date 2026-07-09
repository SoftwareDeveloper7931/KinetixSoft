import type { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — KinetixSoft",
  description: "KinetixSoft's privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://kinetixsoft.com/privacy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacyContent />;
}

export const dynamic = "force-static";
export const revalidate = 86400;
