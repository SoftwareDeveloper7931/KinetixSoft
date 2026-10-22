"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Layers, Cpu, ShieldCheck, Zap, GitBranch, Bot, Terminal } from "lucide-react";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";
import { Card3D } from "@/components/Card3D";
import { Hero3DVisual } from "@/components/Hero3DVisual";
import { CyberGrid3D } from "@/components/CyberGrid3D";

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
    href: "/replit-platform",
    badge: "Autonomous Agent Swarms",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
        <SiReplit className="w-6 h-6 text-orange-400" />
      </div>
    ),
    name: "Replit & Agent Swarms",
    headline: "Multi-Agent LLM Orchestration & Autonomous Microservices",
    body: "Autonomous agent swarms powered by Claude 3.5 Sonnet, GPT-4o, and LangGraph. We build self-directed scraping workers, tool-calling pipelines, and FastAPI background engines hosted with zero DevOps friction.",
    bullets: ["Autonomous multi-agent swarms & tool calling", "FastAPI / Node.js backend microservices", "LangGraph & CrewAI cognitive graphs", "Instant edge deployment & self-healing runs"],
    glowColor: "cerulean" as const,
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
  {
    href: "/flutterflow",
    badge: "AI-Native Mobile & Web",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-cerulean/10 border border-cerulean/30 flex items-center justify-center shadow-[0_4px_16px_rgba(0,123,167,0.3)]">
        <SiFlutter className="w-6 h-6 text-cerulean" />
      </div>
    ),
    name: "FlutterFlow",
    headline: "Edge AI Mobile Apps with 120 FPS Fluidity",
    body: "Cross-platform iOS and Android mobile apps engineered with Google Flutter Impeller engine, integrated with on-device vector search, local LLM interfaces, and real-time Supabase / Firebase streaming backends.",
    bullets: ["App Store & Play Store certified launch", "On-device & edge AI vector search", "Custom Flutter Dart actions & Supabase Auth", "Ultra-fluid 120 FPS Impeller renderer"],
    glowColor: "neon-rose" as const,
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
    href: "/lovable",
    badge: "Agentic Web & SaaS",
    logo: <LovableLogo />,
    name: "Lovable",
    headline: "AI-Native SaaS Platforms & Relational Stacks",
    body: "Rapidly engineered modern web products built on Lovable with Supabase pgvector semantic search, autonomous agentic copilot features, Stripe billing subscriptions, and responsive Tailwind UI.",
    bullets: ["SaaS web app architecture & multi-tenancy", "Supabase authentication, RLS & pgvector", "Stripe subscription billing & webhooks", "Production CI/CD deployment with zero debt"],
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
    href: "/podio",
    badge: "Autonomous CRM & Ops Architecture",
    logo: <PodioLogo />,
    name: "Podio",
    headline: "Self-Healing CRM & Autonomous Workflow Systems",
    body: "Custom Podio workspaces, high-velocity CRM pipelines, and GlobiFlow/Make automated agent workflows engineered for operations teams outgrowing spreadsheets. Handles thousands of records with zero human intervention.",
    bullets: ["Self-healing workspace architecture", "Autonomous GlobiFlow & trigger agents", "High-throughput data sync & ETL pipelines", "Multi-platform webhook & agentic integrations"],
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
    href: "/retool",
    badge: "AI Copilot Internal Ops",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.25)]">
        <SiRetool className="w-6 h-6 text-amber-400" />
      </div>
    ),
    name: "Retool",
    headline: "Admin Dashboards & Agentic Command Centers",
    body: "Purpose-built operational command centers, customer support admin interfaces, and real-time database CRUD viewers with autonomous agent action buttons and strict enterprise cryptographic permission controls.",
    bullets: ["Direct Postgres, pgvector & MongoDB queries", "Autonomous action triggers & agent workflows", "Multi-step approval flows with human-in-the-loop", "Cryptographic audit trails & enterprise RBAC"],
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
    href: "/bubble",
    badge: "Enterprise No-Code Web Systems",
    logo: <BubbleLogo />,
    name: "Bubble",
    headline: "Complex Relational Portals & AI Automation",
    body: "Complex multi-tenant web applications, marketplace platforms, and user portals built with battle-tested database schemas, external LLM endpoints, and Stripe payment logic on Bubble.",
    bullets: ["Multi-tenant portals & marketplaces", "Complex database schema & indexing", "AI API connectors & tool-calling webhooks", "Full performance optimization & capacity audits"],
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
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-[#00A3DE] shadow-sm shadow-cerulean/20">
            <Cpu className="w-3.5 h-3.5 text-neon-rose" /> Autonomous Agentic AI & Custom Software
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6"
        >
          Autonomous Agentic Stacks.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
            Engineered For Pure Velocity.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/70 leading-relaxed"
        >
          From multi-agent LLM swarms orchestrating complex business processes to high-velocity mobile frontends and self-healing CRMs. We architect intelligent, high-throughput digital ecosystems for founders who refuse to settle.
        </motion.p>
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
                  <div className="p-8 flex items-center justify-center min-h-[220px] bg-jet/60 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-cerulean/10 to-transparent pointer-events-none" />
                    {svc.mockup}
                  </div>

                  {/* Content panel */}
                  <div className="p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      {svc.logo}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-cerulean mb-1 font-semibold">
                          {svc.badge}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/95">
                          {svc.name}
                        </h2>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-white/85">
                      {svc.headline}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed text-white/60">
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

                    <Link href={svc.href} className="w-fit inline-flex group">
                      <button
                        data-testid={`button-service-${svc.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        className={`${svc.glowColor === "neon-rose" ? "btn-neon-rose" : "btn-cerulean"} group`}
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

      {/* HOW OUR AGENTIC PIPELINE OPERATES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#00A3DE] bg-cerulean/10 border border-cerulean/30 mb-4">
            <GitBranch className="w-3.5 h-3.5 text-neon-rose" /> Autonomous Execution Cycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-white">
            The Agentic <span className="text-gradient-duo">Execution Loop</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Every build is orchestrated through collaborative multi-agent swarms combined with senior human oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Ingest & Intent Parsing",
              desc: "Multi-modal schema extraction, webhook listeners, user intent analysis, and functional spec generation.",
              icon: <Terminal className="w-5 h-5 text-cerulean" />,
              glow: "cerulean" as const,
            },
            {
              step: "02",
              title: "Multi-Agent Reasoning",
              desc: "Architect Agent plans decomposition, while specialized coding agents develop in parallel sprints.",
              icon: <Bot className="w-5 h-5 text-neon-rose" />,
              glow: "rose" as const,
            },
            {
              step: "03",
              title: "Sentinel Verification",
              desc: "Automated unit tests, edge-case probes, zero-hallucination guardrails, and cryptographic audits.",
              icon: <ShieldCheck className="w-5 h-5 text-cerulean" />,
              glow: "cerulean" as const,
            },
            {
              step: "04",
              title: "Zero-Downtime Deploy",
              desc: "Autonomous staging PR verification, blue-green deployment, and live edge monitoring with self-healing SLA.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Architect Your Custom{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                  Agentic AI Stack
                </span>
              </h2>
              <p className="mb-8 text-white/70 text-sm md:text-base leading-relaxed">
                Whether you need an autonomous multi-agent swarm, an AI-native mobile app, or a self-healing operational CRM, our principal architects will engineer a bulletproof blueprint.
              </p>
              <Link href="/contact" className="inline-flex group">
                <button className="btn-duo flex items-center gap-2 shadow-[0_0_30px_rgba(255,45,149,0.4)]">
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
