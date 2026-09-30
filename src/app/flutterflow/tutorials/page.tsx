import type { Metadata } from "next";
import FlutterFlowTutorialsContent from "@/components/pages/FlutterFlowTutorialsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FlutterFlow Tutorials & Complete Learning Guide (2026) | KinetixSoft",
  description:
    "Master FlutterFlow from scratch with KinetixSoft's complete learning tutorials. Covers UI widgets, state management, Brevo REST API email, OpenAI chatbots, Firebase Custom Claims RBAC, and App Store publishing.",
  alternates: { canonical: "https://kinetixsoft.com/flutterflow/tutorials" },
  keywords: [
    "FlutterFlow tutorials",
    "FlutterFlow learning guide",
    "learn FlutterFlow step by step",
    "FlutterFlow beginner course",
    "FlutterFlow widgets tutorial",
    "FlutterFlow state management",
    "FlutterFlow REST API Brevo",
    "FlutterFlow OpenAI chatbot",
    "FlutterFlow Firebase Custom Claims",
    "FlutterFlow App Store publishing checklist",
  ],
  openGraph: {
    title: "FlutterFlow Tutorials & Complete Learning Guide (2026) — KinetixSoft",
    description:
      "Step-by-step FlutterFlow tutorials for beginners and founders. Learn UI architecture, REST APIs, AI chatbots, enterprise security, and app store deployment.",
    url: "https://kinetixsoft.com/flutterflow/tutorials",
    images: [
      {
        url: "https://kinetixsoft.com/images/blog/flutterflow-beginner-guide-hero.svg",
        width: 1200,
        height: 675,
        alt: "FlutterFlow Complete Beginner Guide & Learning Tutorials",
      },
    ],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "FlutterFlow Production App Development: From Blank Canvas to App Store",
  description:
    "A comprehensive, step-by-step masterclass covering FlutterFlow UI widgets, state management, REST API integrations (Brevo email), conversational AI chatbots (OpenAI), Firebase Custom Claims RBAC security, and App Store publishing.",
  provider: {
    "@type": "Organization",
    name: "KinetixSoft",
    url: "https://kinetixsoft.com",
    logo: "https://kinetixsoft.com/logo.png",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "PT6H",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
    { "@type": "ListItem", position: 2, name: "FlutterFlow Development", item: "https://kinetixsoft.com/flutterflow" },
    { "@type": "ListItem", position: 3, name: "Tutorials & Learning Guide", item: "https://kinetixsoft.com/flutterflow/tutorials" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I learn FlutterFlow if I have zero coding experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FlutterFlow was engineered specifically for visual development. You build UI by dragging widgets onto a canvas, configure interactions through visual Action Flows, and connect to Firebase or Supabase with pre-built integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Is FlutterFlow suitable for commercial, production-ready apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FlutterFlow generates clean Google Flutter (Dart) source code that compiles directly to native ARM machine code on iOS, Android, macOS, Windows, and the Web. Leading enterprises and venture-backed startups use FlutterFlow for apps with hundreds of thousands of users.",
      },
    },
    {
      "@type": "Question",
      name: "How does FlutterFlow compare to Bubble for mobile development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While Bubble is an outstanding platform for browser-based web applications, FlutterFlow outputs native Flutter code running at 60–120 FPS on the GPU via Google's Impeller engine, with full offline storage and native hardware access.",
      },
    },
    {
      "@type": "Question",
      name: "How do I secure my FlutterFlow database and API keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never store secrets in client-side code. For REST APIs, always use FlutterFlow's 'Make Private' setting, which routes calls through serverless Firebase Cloud Functions. For your database, enforce Firebase Security Rules or Supabase Row Level Security (RLS).",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <FlutterFlowTutorialsContent />
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = 86400;
