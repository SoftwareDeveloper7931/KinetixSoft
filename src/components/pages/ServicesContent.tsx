"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Layers, Cpu, ShieldCheck, Zap, GitBranch, Bot, Terminal, HeartHandshake, Smartphone, MessageSquare, ChevronDown } from "lucide-react";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";
import { Card3D } from "@/components/Card3D";
import { Hero3DVisual } from "@/components/Hero3DVisual";
import { CyberGrid3D } from "@/components/CyberGrid3D";
import { HumanAISynergy3D } from "@/components/HumanAISynergy3D";

function PodioLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border border-jet-border">
      <img src="/podio-logo.jfif" alt="Podio" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
}
function BubbleLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border border-jet-border">
      <img src="/bubble-logo.png" alt="Bubble" className="w-10 h-10 object-contain" />
    </div>
  );
}

function LovableLogo() {
  return (
    <div className="w-12 h-12 rounded-xl bg-neon-rose/10 border border-neon-rose/30 flex items-center justify-center">
      <span className="text-neon-rose text-2xl font-bold">♥</span>
    </div>
  );
}

const services = [
  {
    href: "/flutterflow",
    badge: "Native iOS & Android Mobile Engineering",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-cerulean/10 border border-cerulean/30 flex items-center justify-center shadow-[0_4px_16px_rgba(0,123,167,0.3)]">
        <SiFlutter className="w-6 h-6 text-cerulean" />
      </div>
    ),
    name: "FlutterFlow",
    headline: "120 FPS Native Mobile Apps with Google Impeller Engine & Serverless Architecture",
    body: "We engineer cross-platform iOS and Android mobile applications compiling directly into clean Google Flutter (Dart) source code. Utilizing Google's next-generation Impeller GPU rendering engine, your app runs fluidly at 60–120 FPS with zero dropped frames. Our production setups include offline SQLite caching, custom Dart Actions/Widgets, Firebase Custom Claims (O(1) RBAC), zero-leak Stripe payment flows (Apple Pay, Google Pay, recurring subscriptions, and Connect splits), and automated App Store & Google Play deployments.",
    bullets: [
      "Native Google Flutter (Dart) compilation with Impeller GPU acceleration",
      "Zero-leak serverless API proxies (private Firebase Cloud Functions)",
      "Enterprise RBAC via cryptographic Firebase Custom Claims & Supabase RLS",
      "Offline-first SQLite local sync, push notifications & biometrics"
    ],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="flex justify-center gap-3">
        <div className="w-[85px] h-[160px] rounded-[18px] border border-cerulean/40 bg-jet p-2 flex flex-col justify-between shadow-lg shadow-cerulean/20">
          <div className="h-16 rounded-lg bg-cerulean/20 border border-cerulean/30 flex flex-col items-center justify-center gap-1">
            <Bot className="w-4 h-4 text-cerulean" />
            <span className="text-[9px] font-mono text-cerulean">Edge AI</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-jet-border" />
            <div className="h-2 rounded w-3/4 bg-cerulean/40" />
          </div>
        </div>
        <div className="w-[85px] h-[160px] rounded-[18px] border border-neon-rose/40 bg-jet p-2 flex flex-col justify-between shadow-lg shadow-neon-rose/20">
          <div className="h-16 rounded-lg bg-neon-rose/20 border border-neon-rose/30 flex flex-col items-center justify-center gap-1">
            <Zap className="w-4 h-4 text-neon-rose" />
            <span className="text-[9px] font-mono text-neon-rose">120 FPS</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-jet-border" />
            <div className="h-2 rounded w-2/3 bg-neon-rose/40" />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/bubble",
    badge: "Full-Stack Relational Web Platforms",
    logo: <BubbleLogo />,
    name: "Bubble",
    headline: "Complex Relational Databases, Multi-Vendor Marketplaces & B2B SaaS",
    body: "The undisputed industry standard for database-heavy web platforms, directories, and multi-tenant SaaS products. We engineer scalable relational data models, optimized search indexing, Stripe Connect marketplace split payouts, and automated background workflows that handle high transaction volumes with zero frontend/backend disconnect.",
    bullets: [
      "Complex relational database schemas & optimized query indexing",
      "Two-sided marketplaces with Stripe Connect automated vendor payouts",
      "Multi-tenant B2B SaaS portals with role-based privacy rules",
      "Full capacity audits, server-side workflows & zero technical debt"
    ],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="space-y-2.5 w-full max-w-[260px]">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Active Portals", v: "24" }, { l: "AI Requests / d", v: "280k" }].map((s, i) => (
            <div key={i} className="p-2 text-center bg-jet border border-jet-border rounded-lg">
              <div className="text-xs font-bold text-cerulean">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-10 flex items-end gap-1.5 px-2 bg-jet rounded-lg border border-jet-border">
          {[40, 60, 50, 70, 65, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? "var(--cerulean)" : "rgba(0, 123, 167, 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    href: "/lovable",
    badge: "AI-Native Web Applications & Fast MVPs",
    logo: <LovableLogo />,
    name: "Lovable",
    headline: "AI-First Web Platforms with React, Vite & Supabase pgvector",
    body: "Ship production-ready web products and SaaS applications at breakthrough velocity. We build on Lovable utilizing clean React, Vite, and Tailwind CSS code bases paired with Supabase. Backends are equipped with pgvector semantic vector search, conversational AI copilots, Stripe subscription billing, and instant edge deployments with full source code export.",
    bullets: [
      "Full-stack React, Vite & Tailwind CSS with zero proprietary lock-in",
      "Supabase authentication, Row Level Security (RLS) & pgvector search",
      "Stripe automated subscription billing & lifecycle webhooks",
      "Rapid commercial MVP launches delivered in 2 to 4 weeks"
    ],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="w-full max-w-[260px] space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Agentic Actions", v: "84.2k" }, { l: "Vector Latency", v: "14ms" }].map((s, i) => (
            <div key={i} className="p-2.5 bg-jet rounded-lg border border-jet-border">
              <div className="text-xs font-bold text-neon-rose">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-12 flex items-end gap-1.5 px-1 bg-jet p-2 rounded-lg border border-jet-border">
          {[40, 65, 55, 85, 70, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                background: i === 5 ? "var(--neon-rose)" : "rgba(255, 45, 149, 0.35)",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    href: "/retool",
    badge: "Enterprise Operations & Internal Tools",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.25)]">
        <SiRetool className="w-6 h-6 text-amber-400" />
      </div>
    ),
    name: "Retool",
    headline: "High-Density Admin Panels, Dispatch Hubs & Database Management Consoles",
    body: "Eliminate manual spreadsheet operations and fragmented internal workflows. We design custom enterprise command centers, customer support consoles, inventory dispatchers, and database CRUD viewers connecting securely to PostgreSQL, MongoDB, Snowflake, REST, and GraphQL endpoints with fine-grained RBAC and audit logging.",
    bullets: [
      "Direct SQL, MongoDB, Snowflake, REST & GraphQL enterprise connections",
      "Granular Role-Based Access Control (RBAC) & cryptographic audit trails",
      "Multi-step approval flows with human-in-the-loop validation",
      "Automated data ETL pipelines, webhook alerts & self-healing sync"
    ],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="w-full max-w-[260px] space-y-2.5">
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "99.8%", l: "Auto-Heal" }, { v: "18ms", l: "Query" }, { v: "520", l: "Agents" }].map((s, i) => (
            <div key={i} className="p-2 text-center bg-jet rounded-lg border border-jet-border">
              <div className="text-xs font-bold text-cerulean">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-3 py-1.5 bg-jet rounded border border-jet-border text-[11px]">
            <span className="font-mono text-white/80">#SWARM-9021</span>
            <span className="text-emerald-400 text-[10px] font-bold">DISPATCHED</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1.5 bg-jet rounded border border-jet-border text-[11px]">
            <span className="font-mono text-white/80">#SWARM-9022</span>
            <span className="text-cerulean text-[10px] font-bold">REASONING</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/podio",
    badge: "Automated Enterprise CRM Workspaces",
    logo: <PodioLogo />,
    name: "Podio",
    headline: "Bespoke Workspace Architectures & GlobiFlow Trigger Engines",
    body: "Custom-architected Podio CRM ecosystems engineered for high-volume deal pipelines, real estate acquisitions, and multi-department service firms. Powered by advanced GlobiFlow triggers, Make/Zapier webhooks, and automated document generation that processes thousands of records with zero human error.",
    bullets: [
      "Custom workspace hierarchies & relational app relationship modeling",
      "Autonomous GlobiFlow calculations, automated triggers & task routing",
      "Automated PDF document contracts & DocuSign/DocuSeal integration",
      "Zero-downtime data migration from legacy spreadsheets and Salesforce"
    ],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="space-y-2.5 w-full max-w-[260px]">
        {["Lead Ingested (AI Filter)", "Discovery Scheduled", "Proposal Generated", "Self-Healing Sync [OK]"].map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2 bg-jet/90 rounded-lg border border-jet-border text-xs">
            <div className={`w-2 h-2 rounded-full ${i === 3 ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : i === 2 ? "bg-neon-rose" : "bg-cerulean"}`} />
            <span className="text-white/80 font-mono">{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    href: "/replit-platform",
    badge: "Autonomous Multi-Agent AI Systems",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
        <SiReplit className="w-6 h-6 text-orange-400" />
      </div>
    ),
    name: "Replit & Agent Swarms",
    headline: "Cognitive LLM Swarms, Tool-Calling Pipelines & Python Microservices",
    body: "Autonomous multi-agent swarms engineered with Claude 3.5 Sonnet, GPT-4o, and LangGraph/CrewAI cognitive graphs. We deploy self-directed research workers, database mutation tools, automated code runners, and FastAPI/Node backend microservices running on zero-DevOps cloud infrastructure.",
    bullets: [
      "Autonomous multi-agent swarms with LangGraph & CrewAI graphs",
      "FastAPI & Node.js backend microservices with persistent WebSocket queues",
      "Tool-calling agents for automated scraping, data enrichment & DB mutations",
      "Instant cloud deployment with automated error recovery & self-healing runs"
    ],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="font-mono text-[11px] space-y-1.5 p-3 rounded-lg bg-jet border border-jet-border w-full max-w-[260px]">
        <div className="text-white/40 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-cerulean" /> agent_swarm.py
        </div>
        <div className="text-cerulean">{">"} Claude-3.5 Reasoning: 98.4%</div>
        <div className="text-neon-rose">{">"} ToolCall: DB_MUTATE [OK]</div>
        <div className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Autonomous Loop Active ✓
        </div>
      </div>
    ),
  },
];

const serviceFaqs = [
  {
    q: "What services does KinetixSoft provide for startups and enterprises?",
    a: "We engineer full-lifecycle software solutions across six production stacks: native mobile apps (FlutterFlow with Google Impeller 120 FPS), complex relational web SaaS and marketplaces (Bubble), AI-native web products (Lovable with Supabase pgvector), enterprise command centers (Retool), automated CRM pipelines (Podio with GlobiFlow), and autonomous AI agent swarms (Replit with LangGraph and FastAPI)."
  },
  {
    q: "How do you ensure low-code applications scale without performance bottlenecks?",
    a: "We engineer low-code frontends with enterprise backend architectures. For FlutterFlow, code compiles to native ARM binary using Google Impeller GPU acceleration with local SQLite caching. For databases, we configure indexed Supabase Postgres schemas, serverless Firebase Cloud Functions for heavy compute, and cryptographic Row-Level Security (RLS) to ensure sub-100ms response times at scale."
  },
  {
    q: "Which framework should I choose: FlutterFlow, Bubble, or Lovable?",
    a: "Choose FlutterFlow for native iOS & Android apps needing GPU performance, offline sync, and App Store distribution. Choose Bubble for database-heavy web platforms, directories, and multi-sided marketplaces. Choose Lovable for rapid, AI-first web applications and MVPs built on clean React and Supabase."
  },
  {
    q: "Can you integrate custom backend APIs without exposing confidential API keys?",
    a: "Yes — zero-trust security is our foundational standard. We never expose API keys on client devices. In FlutterFlow, we configure Private API Groups routed through serverless Firebase Cloud Functions that inject secrets server-side. In Bubble and Lovable, all third-party integrations communicate through secure backend API connectors."
  },
  {
    q: "Do I own 100% of my private GitHub repository, database, and source code?",
    a: "Yes, absolutely. You retain 100% ownership of your GitHub repositories, database schemas, API accounts, and app store credentials from Day 1. There is zero proprietary lock-in and zero ongoing platform royalty fees owed to KinetixSoft."
  },
  {
    q: "How long does a typical production build take from kickoff to App Store launch?",
    a: "Most commercial MVPs and client applications ship in 4 to 10 weeks, depending on integration depth and payment complexity. We deliver weekly working builds (TestFlight / staging web URLs) with direct Slack collaboration so you can test features continuously."
  }
];

function ServiceFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden bg-jet-surface/80 border border-jet-border transition-all duration-300 hover:border-cerulean/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white transition-colors hover:text-cerulean cursor-pointer"
      >
        <span className="text-base sm:text-lg pr-4">{q}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${open ? "bg-neon-rose/20 text-neon-rose" : "bg-white/5 text-cerulean"}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-jet-border pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-[#00A3DE] shadow-sm shadow-cerulean/20">
            <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> Full-Lifecycle Engineering Studio · Direct Architect Access
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[46px] font-extrabold tracking-tight leading-[1.15] mb-4"
        >
          Software Built For Real Users.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
            Senior Craft Powered By Modern Stacks.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto text-white/70 leading-relaxed"
        >
          We architect and ship production-ready applications across Flutter mobile, full-stack web platforms, and automated workflow engines. High velocity, zero fluff, and direct collaboration with senior engineers who care about your launch.
        </motion.p>

        {/* 3D INTERACTIVE AI + HUMAN SYNERGY FLAGSHIP STAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <HumanAISynergy3D />
        </motion.div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto relative z-10 space-y-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <Card3D glowColor={svc.glowColor} maxTilt={4} className="w-full">
              <div className="rounded-2xl bg-jet-surface/60 border border-white/10 overflow-hidden backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Visual mockup panel */}
                  <div className="p-6 sm:p-8 flex items-center justify-center min-h-[180px] sm:min-h-[220px] bg-jet/60 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-cerulean/10 to-transparent pointer-events-none" />
                    {svc.mockup}
                  </div>

                  {/* Content panel */}
                  <div className="p-6 sm:p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      {svc.logo}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-cerulean mb-1 font-semibold">
                          {svc.badge}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/95">
                          {svc.name}
                        </h2>
                      </div>
                    </div>

                    <h3 className="text-base font-semibold mb-2.5 text-white/85">
                      {svc.headline}
                    </h3>
                    <p className="text-xs sm:text-sm mb-6 leading-relaxed text-white/60">
                      {svc.body}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.bullets.map((b, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-sm text-white/80">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${svc.glowColor === "neon-rose" ? "text-neon-rose" : "text-cerulean"}`} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={svc.href} className="w-full sm:w-fit inline-flex group">
                      <button
                        data-testid={`button-service-${svc.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        className={`${svc.glowColor === "neon-rose" ? "btn-neon-rose" : "btn-cerulean"} group w-full sm:w-auto justify-center`}
                      >
                        <span>Explore {svc.name} Services</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </section>

      {/* HOW WE BUILD TOGETHER (COLLABORATIVE STUDIO MODEL) */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#00A3DE] bg-cerulean/10 border border-cerulean/30 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-neon-rose" /> High-Touch Client Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            How We Build <span className="text-gradient-duo">Together</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Every engagement pairs direct human communication with modern development workflows to ship faster without compromising architecture or security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Discovery & Blueprint",
              desc: "We dive deep into your requirements, map out database models, user flows, and select the exact stack for your budget and growth.",
              icon: <Terminal className="w-5 h-5 text-cerulean" />,
              glow: "cerulean" as const,
            },
            {
              step: "02",
              title: "Rapid Sprints & Slack",
              desc: "Senior engineers build your core features in focused sprints, pairing human craft with modern AI tools for exceptional speed.",
              icon: <Bot className="w-5 h-5 text-neon-rose" />,
              glow: "rose" as const,
            },
            {
              step: "03",
              title: "Weekly TestFlight",
              desc: "Every single week, you get a hands-on build. You test features in the real world on your phone as they are created, giving instant feedback.",
              icon: <Smartphone className="w-5 h-5 text-cerulean" />,
              glow: "cerulean" as const,
            },
            {
              step: "04",
              title: "Store Launch & Handover",
              desc: "We manage App Store and Google Play submissions, cloud deployment, and hand over 100% of your private GitHub repo, keys, and docs.",
              icon: <Zap className="w-5 h-5 text-neon-rose" />,
              glow: "rose" as const,
            },
          ].map((item, idx) => (
            <Card3D key={idx} glowColor={item.glow} className="p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-white/40">PHASE // {item.step}</span>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-white/65 leading-relaxed">{item.desc}</p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* SERVICE FAQS (TARGETING USER QUESTION REGEX QUERIES) */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-cerulean bg-cerulean/10 border border-cerulean/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Architecture & Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
            Frequently Asked <span className="text-gradient-cerulean">Questions</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm">
            Everything you need to know about our engineering services, security standards, and delivery process.
          </p>
        </div>
        <div className="space-y-3.5">
          {serviceFaqs.map((f, i) => (
            <ServiceFAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* BOTTOM CTA WITH 3D HOLOGRAPHIC STAGE BROUGHT TO FRONT */}
      <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-jet-surface/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,123,167,0.35),0_15px_50px_rgba(255,45,149,0.25)] relative overflow-hidden"
        >
          {/* Ambient Cyber Light Auroras */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cerulean/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-rose/20 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 3D Holographic Visual Brought to Front */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Hero3DVisual />
            </div>

            {/* Right Column: Content & Actions */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase mb-4 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean">
                <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> Agentic Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 tracking-tight text-white">
                Architect Your Custom{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                  Agentic AI Stack
                </span>
              </h2>
              <p className="mb-6 text-white/70 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                Whether you need an autonomous multi-agent swarm, an AI-native mobile app, or a self-healing operational CRM, our principal architects will engineer a bulletproof blueprint.
              </p>
              <Link href="/contact" className="inline-flex group">
                <button className="btn-duo px-7 py-3 text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(255,45,149,0.4)]">
                  <span>Request Agentic Architecture Roadmap</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cyber Grid Horizon Transition into Footer */}
      <CyberGrid3D />
    </div>
  );
}
