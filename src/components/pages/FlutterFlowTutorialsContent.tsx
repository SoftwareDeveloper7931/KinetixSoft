"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen, Code2, Smartphone, Shield, Zap, Bot,
  Layers, ArrowRight, CheckCircle2, ChevronDown, ChevronRight,
  ExternalLink, Sparkles, Terminal, Cpu, Database, PlayCircle
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

interface TutorialModule {
  id: string;
  number: string;
  badge: string;
  category: "all" | "widgets" | "apis" | "ai" | "security" | "publishing";
  title: string;
  subtitle: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  image: string;
  highlights: string[];
  keySnippet?: {
    lang: string;
    label: string;
    code: string;
  };
  deepLink?: string;
}

const tutorialModules: TutorialModule[] = [
  {
    id: "widget-architecture",
    number: "01",
    badge: "UI & Layout Hierarchy",
    category: "widgets",
    title: "Understanding the Concepts of All FlutterFlow UI Widgets",
    subtitle: "The 4 Core Widget Categories & Spatial Layout Mental Model",
    readTime: "15 min read",
    difficulty: "Beginner",
    description: "Master the mental model of Flutter's reactive widget tree. Learn when to use Rows vs. Columns, how to avoid yellow-and-black RenderFlex overflows, how to build reusable components, and how to configure NavBars without manual action wiring.",
    image: "/images/blog/flutterflow-widget-taxonomy.svg",
    highlights: [
      "The 5 Core Widgets: Container, Text, Icon, Button, Image (80% of all UI)",
      "Layout Elements: Row, Column, Stack, Container, ListView, GridView, Wrap",
      "Page Elements: Scaffold skeleton, AppBar leading/actions, zero-wiring NavBar",
      "Form Elements: TextField keyboard types, Checkbox vs. Toggle/Switch distinction",
      "Hands-on Challenge: Building a responsive Profile Card component from scratch"
    ],
    keySnippet: {
      lang: "dart",
      label: "Mental Model: Widget Tree Hierarchy",
      code: `Scaffold (Page Skeleton)
 └── SafeArea
      └── Column (Vertical axis)
           ├── Container (Profile Card - radius: 16)
           │    └── Row (Horizontal alignment)
           │         ├── Image (Avatar - fit: cover)
           │         └── Column (Name + Bio texts)
           └── ListView (Dynamic scrollable feed)`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "state-management",
    number: "02",
    badge: "State & Data Flow",
    category: "widgets",
    title: "State Management Demystified: Widget vs. Page vs. App State",
    subtitle: "In-Memory Session Caching vs. Persistent Database Writes",
    readTime: "12 min read",
    difficulty: "Beginner",
    description: "Eliminate sluggish performance and unnecessary database billing by choosing the exact right state container for your data. Learn when to use ephemeral Page State versus in-memory App State versus Cloud Firestore / Supabase persistence.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Widget State: Local to input fields, checkboxes, and interactive sliders",
      "Page State: Ephemeral to a single screen (multi-step form step counters)",
      "App State: Global in-memory list (shopping carts, chat sessions, auth tokens)",
      "Database State: Persistent cloud documents in Firebase or Supabase",
      "Performance Benchmark: Saving $100s/mo in Firebase read/write query costs"
    ],
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "brevo-email-api",
    number: "03",
    badge: "Third-Party REST APIs",
    category: "apis",
    title: "Connecting Brevo (Sendinblue) to FlutterFlow to Send Emails",
    subtitle: "Zero-Leak Private Environment Values & Cloud Function Proxies",
    readTime: "18 min read",
    difficulty: "Beginner",
    description: "Send transactional welcome emails, contact form notifications, and order confirmations directly from your app. Learn why 'Make Private' is mandatory and how to avoid the #1 trailing slash URL mistake.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Base URL Rule: https://api.brevo.com/v3 (NEVER append a trailing slash!)",
      "Secure Storage: Private Environment Value 'brevoAPI' on Firebase Blaze plan",
      "Serverless Proxy: Deploying Cloud Functions so API keys never ship in APK/IPA",
      "6-Variable Payload: sender, receiver, subject, and dynamic htmlContent",
      "Troubleshooting Guide: Fixing 401 Unauthorized, 400 Bad Request, and unverified senders"
    ],
    keySnippet: {
      lang: "json",
      label: "Brevo POST /smtp/email Request Payload",
      code: `{
  "sender": { "name": "[senderName]", "email": "[senderEmail]" },
  "to": [{ "email": "[receiverEmail]", "name": "[receiverName]" }],
  "subject": "[title]",
  "htmlContent": "[htmlContent]"
}`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "openai-chatbot",
    number: "04",
    badge: "AI & Conversational UX",
    category: "ai",
    title: "How to Build a Conversational Chatbot Using OpenAI & Gemini",
    subtitle: "In-Session Chat History, Dynamic ListView Children & 5-Step Action Flow",
    readTime: "20 min read",
    difficulty: "Intermediate",
    description: "Build a context-aware AI chatbot like ChatGPT without writing backend code. Understand LLM statelessness, format multi-turn message arrays in App State, and wire a 5-step action chain with dynamic UI updates.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "The LLM Memory Paradigm: Why passing full chatHistory with each turn is essential",
      "Model Comparison: GPT-4o mini vs. Gemini 2.5 Flash vs. Claude Haiku 4.5",
      "App State: Storing chatHistory as List<JSON> that resets on app exit",
      "Dynamic Children: Generating left/right chat bubbles from JSON list state",
      "5-Step Action Flow: Add user msg -> Clear input -> Call API -> Add AI reply -> Scroll to bottom"
    ],
    keySnippet: {
      lang: "json",
      label: "OpenAI Chat Completions Body Structure",
      code: `{
  "model": "gpt-4o-mini",
  "messages": <messages>,
  "max_tokens": 500
}
// JSON Path Mapping: $.choices[:].message`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "firebase-custom-claims",
    number: "05",
    badge: "Enterprise Security & RBAC",
    category: "security",
    title: "Firebase Custom Claims with FlutterFlow: Production Role-Based Access Control",
    subtitle: "The Hotel Key Card Analogy, 0-Database Read Costs & Instant Security Rules",
    readTime: "22 min read",
    difficulty: "Intermediate",
    description: "Never store roles solely in a Firestore document where malicious actors can tamper with them. Learn how to set cryptographically signed Custom Claims via Cloud Functions and force-refresh tokens in Dart.",
    image: "/images/blog/flutterflow-firebase-rbac-claims-flow.svg",
    highlights: [
      "Custom Claims vs. Firestore Roles: 0ms overhead, tamper-proof, zero DB read costs",
      "Cloud Function: setCustomClaim using Firebase Admin SDK with security validation",
      "The Chicken-and-Egg Fix: How to bootstrap the very first admin safely",
      "Critical Pattern: Custom Action await user.getIdToken(true) to bypass 1-hour wait",
      "Security Rules: allow write: if request.auth.token.role == 'admin'"
    ],
    keySnippet: {
      lang: "dart",
      label: "Dart Custom Action: refreshUserToken.dart",
      code: `import 'package:firebase_auth/firebase_auth.dart';

Future refreshUserToken() async {
  final user = FirebaseAuth.instance.currentUser;
  if (user == null) return;
  // 'true' forces Firebase to issue a new token with updated claims!
  await user.getIdToken(true);
}`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "app-store-publishing",
    number: "06",
    badge: "Publishing & Compliance",
    category: "publishing",
    title: "App Store & Google Play Publishing Master Checklist (2026 Edition)",
    subtitle: "Asset Specifications, Xcode ATS, TargetSdk 34 & Closed Testing Mandates",
    readTime: "16 min read",
    difficulty: "Intermediate",
    description: "Avoid the top 10 rejection pitfalls that delay over 40% of first-time launches. From 1024x1024 no-alpha icons to Google's mandatory 20-tester closed test rule and Info.plist privacy descriptions.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Developer Setup: Apple ($99/yr) + Google Play ($25 one-time) + 2FA setup",
      "Graphic Assets: 1024x1024 iOS PNG, 512x512 Android PNG, 1024x500 Feature Graphic",
      "Technical Mandates: Xcode latest, iOS 16+ ATS, Android targetSdk 34+, 64-bit arm64-v8a",
      "Google 20-Tester Mandate: Running closed testing for 14 continuous days",
      "Top 10 Rejection Traps: Broken links, missing demo accounts, and Sign in with Apple"
    ],
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  }
];

const tutorialsFaqs = [
  {
    q: "Can I learn FlutterFlow if I have zero coding experience?",
    a: "Absolutely. FlutterFlow was engineered specifically for visual development. You build UI by dragging widgets onto a canvas, configure interactions through visual Action Flows, and connect to Firebase or Supabase with pre-built integrations. However, knowing basic logic concepts (if/else conditionals, lists, and key-value JSON) will help you build faster."
  },
  {
    q: "Is FlutterFlow suitable for commercial, production-ready apps?",
    a: "Yes. FlutterFlow is not a toy prototype tool. It generates clean Google Flutter (Dart) source code that compiles directly to native ARM machine code on iOS, Android, macOS, Windows, and the Web. Leading enterprises and venture-backed startups use FlutterFlow for apps with hundreds of thousands of users."
  },
  {
    q: "How does FlutterFlow compare to Bubble for mobile development?",
    a: "While Bubble is an outstanding platform for browser-based web applications, it does not output native mobile code (relying instead on wrapped web views or native plugins). FlutterFlow outputs native Flutter code running at 60–120 FPS on the GPU via Google's Impeller engine, with full offline storage and native hardware access (Bluetooth, Biometrics, Camera)."
  },
  {
    q: "How do I secure my FlutterFlow database and API keys?",
    a: "Never store secrets in client-side code. For REST APIs, always use FlutterFlow's 'Make Private' setting, which routes calls through serverless Firebase Cloud Functions. For your database, enforce Firebase Security Rules or Supabase Row Level Security (RLS) so the database itself blocks unauthorized read/write attempts."
  },
  {
    q: "How can KinetixSoft help my team learn or build on FlutterFlow?",
    a: "We offer both full-lifecycle development (scoping, UI/UX, backend architecture, building, and App Store submission) and consulting/code review services. If your team is stuck on complex custom actions, API integrations, or database performance, our senior engineers can audit and optimize your build."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#232A36] rounded-lg overflow-hidden bg-[#12161F]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#E9EBEF] hover:bg-[#161B26] transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform text-[#4A5FBD] ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#8A93A3] text-sm leading-relaxed border-t border-[#1F2633] pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FlutterFlowTutorialsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredModules = activeCategory === "all"
    ? tutorialModules
    : tutorialModules.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E9EBEF]">
      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold mb-6 rounded-full bg-[#4A5FBD]/10 border border-[#4A5FBD]/30 text-[#7E95F7]">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              KinetixSoft FlutterFlow Learning Academy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Master FlutterFlow: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E95F7] via-[#06B6D4] to-[#10B981]">
                From Blank Canvas to App Store
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#8A93A3] leading-relaxed mb-8">
              A comprehensive, production-grade curriculum designed for beginners and ambitious founders.
              Learn reactive UI widgets, state architecture, secure REST API integrations,
              conversational AI, and battle-tested App Store publishing protocols.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026">
                <button className="h-12 px-8 text-sm font-semibold rounded-md bg-[#4A5FBD] hover:bg-[#5A6FCC] text-[#E9EBEF] flex items-center gap-2 shadow-lg shadow-[#4A5FBD]/20 transition-all">
                  <PlayCircle className="w-4 h-4" /> Start Complete Beginner Guide
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-6 text-sm font-semibold rounded-md border border-[#232A36] hover:border-[#4A5FBD] text-[#CBD5E1] flex items-center gap-2 transition-all">
                  Hire Our FlutterFlow Team <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PILLAR BANNER */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-[#4A5FBD]/40 via-[#06B6D4]/30 to-[#10B981]/30">
          <div className="bg-[#101522] rounded-2xl p-6 md:p-10 border border-[#232A36] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-bold rounded bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                  PILLAR MASTERCLASS 2026
                </span>
                <span className="text-xs text-[#8A93A3]">28 min read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
                The Ultimate FlutterFlow Beginner Guide (2026): From Visual UI to Production App Store Launch
              </h2>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed mb-6">
                Everything you need to know in a single, deeply documented engineering guide. Covers the FlutterFlow mental model, all 4 widget categories, state lifecycle, Brevo email APIs, an OpenAI context-aware chatbot, Firebase Custom Claims RBAC, and the full App Store &amp; Google Play checklist.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["4 Widget Categories", "Zero-Leak APIs", "OpenAI Chatbot", "Custom Claims RBAC", "App Store Checklist"].map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#1E293B] text-[#93C5FD] border border-[#334155]">
                    ✓ {t}
                  </span>
                ))}
              </div>
              <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors cursor-pointer">
                  Read Full Masterclass Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="lg:col-span-5">
              <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026" className="block group">
                <div className="relative rounded-xl overflow-hidden border border-[#232A36] group-hover:border-[#4A5FBD] transition-all shadow-xl">
                  <Image
                    src="/images/blog/flutterflow-beginner-guide-hero.svg"
                    alt="FlutterFlow Beginner Guide Hero"
                    width={600}
                    height={340}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F2937] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#F8FAFC]">Curriculum Modules</h2>
            <p className="text-xs text-[#8A93A3] mt-1">Explore step-by-step tutorials categorized by engineering domain</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Modules" },
              { id: "widgets", label: "UI & Widgets" },
              { id: "apis", label: "REST APIs" },
              { id: "ai", label: "AI & Chatbots" },
              { id: "security", label: "Security & RBAC" },
              { id: "publishing", label: "Store Launch" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#4A5FBD] text-[#F8FAFC] shadow-md shadow-[#4A5FBD]/30"
                    : "bg-[#12161F] text-[#8A93A3] hover:text-[#E9EBEF] border border-[#232A36]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TUTORIAL CARDS GRID */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#12161F] rounded-xl border border-[#232A36] overflow-hidden flex flex-col hover:border-[#4A5FBD]/60 transition-all hover:shadow-xl hover:shadow-[#4A5FBD]/5 group"
            >
              {/* Card Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0A0E17] border-b border-[#1F2937]">
                <Image
                  src={module.image}
                  alt={module.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#0B0F19]/90 border border-[#334155] text-[#93C5FD]">
                    MODULE {module.number}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[#4A5FBD]/20 border border-[#4A5FBD]/40 text-[#7E95F7]">
                    {module.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-[#CBD5E1]">
                  {module.readTime}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-[#06B6D4] mb-2">{module.badge}</span>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors leading-snug">
                  {module.title}
                </h3>
                <p className="text-xs text-[#8A93A3] mb-4 leading-relaxed line-clamp-3">
                  {module.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 flex-1">
                  {module.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Code Snippet Box (if available) */}
                {module.keySnippet && (
                  <div className="mb-4 rounded-md bg-[#0A0D14] border border-[#1E293B] p-2.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] mb-1">
                      <span>{module.keySnippet.label}</span>
                      <span>{module.keySnippet.lang}</span>
                    </div>
                    <pre className="text-[10px] font-mono text-[#38BDF8] overflow-x-auto whitespace-pre leading-tight">
                      <code>{module.keySnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Action Link */}
                <div className="pt-4 border-t border-[#1F2937] mt-auto flex items-center justify-between">
                  <Link
                    href={module.deepLink || "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
                  >
                    Read Detailed Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] text-[#64748B]">Free Tutorial</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE DEEP DIVE INFOGRAPHIC SECTION */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-[#12161F] rounded-2xl border border-[#232A36] p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 uppercase tracking-wider">
              Visual Learning Infographics
            </span>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC] mt-4 mb-3">
              The Architecture of Production FlutterFlow Apps
            </h2>
            <p className="text-sm text-[#8A93A3] leading-relaxed">
              Understand how compiled Flutter code, in-memory state, serverless Cloud Function proxies, and cloud datastores interact at runtime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="rounded-xl overflow-hidden border border-[#1F2937] shadow-2xl">
                <Image
                  src="/images/blog/flutterflow-firebase-rbac-claims-flow.svg"
                  alt="Firebase Custom Claims RBAC Flow"
                  width={600}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-center text-[#64748B] mt-2">
                Figure A: Role-Based Access Control token lifecycle without extra database reads.
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-[#1F2937] shadow-2xl">
                <Image
                  src="/images/blog/flutterflow-widget-taxonomy.svg"
                  alt="FlutterFlow Widget Taxonomy"
                  width={600}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-center text-[#64748B] mt-2">
                Figure B: Complete 4-category UI widget taxonomy and spatial relationship model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO FAQ SECTION */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#06B6D4]/15 text-[#67E8F9] border border-[#06B6D4]/30 uppercase tracking-wider">
            Knowledge Vault
          </span>
          <h2 className="text-3xl font-extrabold text-[#F8FAFC] mt-3 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-[#8A93A3]">
            Direct, definitive answers to the most common FlutterFlow learning and engineering questions.
          </p>
        </div>

        <div className="space-y-3">
          {tutorialsFaqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-4 md:px-6 max-w-3xl mx-auto pb-24">
        <div className="p-8 md:p-10 rounded-2xl bg-[#12161F] border border-[#232A36]">
          <h2 className="text-3xl font-bold mb-2 text-center text-[#E9EBEF]">
            Need a Professional FlutterFlow Build?
          </h2>
          <p className="text-center text-sm mb-8 text-[#8A93A3] max-w-lg mx-auto">
            Skip the learning curve. Partner with KinetixSoft to design, build, and deploy your production-grade mobile app in weeks.
          </p>
          <ContactForm defaultService="flutterflow" />
        </div>
      </section>
    </div>
  );
}
