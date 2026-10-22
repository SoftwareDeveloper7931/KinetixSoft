"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Code2, Zap, Shield, Bot, Star, ChevronDown, ArrowRight, Terminal, Sparkles } from "lucide-react";
import { SiReplit } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const faqs = [
  { q: "What can you build with Replit?", a: "Full-stack web apps, AI agents, automation scripts, REST APIs, bots, and internal tools using Python, Node.js, or any modern language Replit supports." },
  { q: "Can you build AI agents or LLM-powered features?", a: "Yes — AI integrations are a core part of what we build on Replit. We work with OpenAI, Anthropic, and custom model pipelines." },
  { q: "How long does a Replit project take?", a: "Simple tools and scripts can ship in days. Production-grade apps typically take 3–8 weeks depending on scope and complexity." },
  { q: "Is Replit production-ready for real users?", a: "Yes — Replit Deployments provides production hosting with scalable infrastructure, custom domains, and persistent storage." },
  { q: "What does a Replit project usually cost?", a: "Cost depends on complexity. We'll give you a clear estimate after a 30-minute scoping call." },
  { q: "Can you work with an existing codebase?", a: "Yes — we can pick up an existing Replit project, refactor it, add features, or connect it to new services." },
  { q: "Do you offer support after the project launches?", a: "Yes — we offer ongoing maintenance, monitoring alerts, and feature additions after deployment." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-jet-border rounded-xl overflow-hidden bg-jet-surface/70 transition-colors hover:border-cerulean/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white/90 hover:bg-jet-surface transition-colors"
      >
        <span className="text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-cerulean transition-transform duration-300 ${open ? "rotate-180 text-neon-rose" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-white/60 leading-relaxed text-sm border-t border-jet-border/50 pt-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const terminalLines = [
  { text: "$ python triage_agent.py", color: "#9CA3AF" },
  { text: "> Connecting to support queue...", color: "#00A3DE" },
  { text: "> Analysing 47 open tickets...", color: "#9CA3AF" },
  { text: "> Priority: URGENT — API timeout (x3)", color: "#FF2D95" },
  { text: "> Assigning to: @backend-team", color: "#00E5A3" },
  { text: "> Slack notification sent ✓", color: "#00E5A3" },
];

export default function ReplitContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <SiReplit className="w-4 h-4 text-neon-rose" /> Replit Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6">
              Full-Stack Apps &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                AI Agents
              </span>{" "}
              Built on Replit
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-white/70">
              KinetixSoft builds production-ready full-stack applications, intelligent multi-agent pipelines, and automation tools on Replit. From serverless scripts to high-scale SaaS — we ship working code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button data-testid="button-replit-start" className="btn-duo">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-7 rounded-xl font-medium text-sm border border-jet-border bg-jet-surface/80 hover:bg-jet-elevated hover:border-cerulean/50 transition-all flex items-center gap-2 text-white/90">
                  Book a Scoping Call <ArrowRight className="w-4 h-4 text-cerulean" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-cerulean/15 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-rose/15 blur-[90px] pointer-events-none" />

            <Card3D glowColor="cerulean" maxTilt={8} className="w-full max-w-md">
              <div className="relative font-mono text-xs bg-jet-surface/95 border border-jet-border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-jet/90 border-b border-jet-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-neon-rose/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-cerulean/80" />
                    <span className="text-white/40 ml-2 text-[11px] flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-cerulean" /> triage_agent.py
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cerulean/10 text-cerulean border border-cerulean/20">
                    REPLIT CLOUD
                  </span>
                </div>
                <div className="p-5 space-y-2.5 min-h-[220px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.25 }}
                      style={{ color: line.color }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2.2, repeat: Infinity, duration: 1 }}
                    className="text-neon-rose font-bold text-sm"
                  >
                    ▋
                  </motion.div>
                </div>
                <div className="px-5 py-3 bg-jet/60 border-t border-jet-border/60 flex items-center justify-between text-[11px] text-white/50">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Status: Live Deploy
                  </span>
                  <span className="text-cerulean font-mono">0.02s latency</span>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct collaboration with senior engineers" },
            { stat: "24/7", label: "Production Mindset", sub: "Built for continuous reliability & alerts" },
            { stat: "Instant", label: "Cloud Deployments", sub: "Zero devops bottlenecks via Replit" },
          ].map((s, i) => (
            <Card3D key={i} glowColor={i === 1 ? "neon-rose" : "cerulean"} maxTilt={6}>
              <div className="p-6 text-center rounded-2xl bg-jet-surface/70 border border-jet-border backdrop-blur-md h-full">
                <div className={`text-3xl font-extrabold mb-1 ${i === 1 ? "text-neon-rose" : "text-cerulean"}`}>{s.stat}</div>
                <div className="font-semibold text-white/90 mb-1">{s.label}</div>
                <div className="text-xs text-white/50">{s.sub}</div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase mb-3 rounded-full border border-neon-rose/30 bg-neon-rose/10 text-neon-rose">
            <Sparkles className="w-3.5 h-3.5" /> High-Velocity Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Build on Replit with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">
              KinetixSoft
            </span>
          </h2>
          <p className="text-lg text-white/60">Replit gives us the development velocity of a cloud IDE with instant deployments. Here is how we turn it into production software.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Bot className="w-6 h-6" />, title: "AI-Native by Default", desc: "We architect LLM systems (OpenAI, Claude, custom agents) as core components — with prompt defenses, token budgeting, and fallbacks." },
            { icon: <Zap className="w-6 h-6" />, title: "Rapid Deployments", desc: "Replit Deployments yields scalable production hosting in minutes. We deploy live staging links from day one." },
            { icon: <Code2 className="w-6 h-6" />, title: "Clean, Scalable Code", desc: "We write clean Python, FastAPI, TypeScript, or Node.js. Fully documented, modular, and 100% owned by your company." },
            { icon: <Shield className="w-6 h-6" />, title: "Secure & Observable", desc: "Integrated secrets management, health checks, Sentry logging, and uptime monitors safeguard your production workloads." },
          ].map((f, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={6}>
              <div className="p-8 rounded-2xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/40 transition-colors h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cerulean/10 border border-cerulean/30 text-cerulean mb-5 shadow-sm shadow-cerulean/20">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white/95">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Shipped</span>
          </h2>
        </motion.div>

        <Card3D glowColor="neon-rose" maxTilt={4} className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-jet-surface/90 border border-jet-border shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative p-8 flex items-center justify-center min-h-[280px] bg-jet border-b md:border-b-0 md:border-r border-jet-border">
                <div className="font-mono text-xs space-y-2 w-full max-w-[260px]">
                  {terminalLines.slice(0, 5).map((line, i) => (
                    <div key={i} style={{ color: line.color }}>{line.text}</div>
                  ))}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Customer Support", "Replit", "AI Agent"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 font-mono rounded-full bg-cerulean/10 border border-cerulean/20 text-cerulean">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white/95">QueueSense</h3>
                <p className="text-sm mb-5 leading-relaxed text-white/60">
                  An AI triage agent built on Replit for a SaaS support team. QueueSense reads incoming Zendesk tickets, categorises them by severity and topic, assigns priority scores, and routes them to the right team.
                </p>
                <blockquote className="pl-4 italic text-sm mb-5 border-l-2 border-neon-rose text-white/80">
                  "Our support queue was overflowing. KinetixSoft built an AI agent on Replit that cut our initial response time by 80%."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cerulean to-neon-rose flex items-center justify-center font-bold text-sm text-white">
                    F
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/90">Fatima Noor</div>
                    <div className="text-xs text-white/40">CTO, QueueSense</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Help</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "01", eyebrow: "Scope It Right", title: "Architecture", accent: "& Tech Stack Design" },
            { n: "02", eyebrow: "Working Builds Fast", title: "Full-Stack App", accent: "Development" },
            { n: "03", eyebrow: "Intelligence Built In", title: "AI Agent &", accent: "LLM Integration" },
            { n: "04", eyebrow: "Ship to Production", title: "Replit Deployment", accent: "& Hosting" },
            { n: "05", eyebrow: "Hook Into Everything", title: "API & Webhook", accent: "Integrations" },
            { n: "06", eyebrow: "After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={6}>
              <div className="p-7 rounded-2xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cerulean/15 text-cerulean border border-cerulean/25">
                    {s.n}
                  </span>
                  <p className="text-white/40 text-xs font-mono mt-4 mb-2">{s.eyebrow}</p>
                  <h3 className="text-lg font-bold text-white/90">
                    {s.title} <span className="text-neon-rose">{s.accent}</span>
                  </h3>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Questions</span>
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-rose/10 blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center tracking-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Replit Project</span>
          </h2>
          <p className="text-center text-sm mb-10 text-white/60">Tell us what you need and we will scope it out in 24 hours.</p>
          <ContactForm defaultService="replit" />
        </div>
      </section>
    </div>
  );
}
