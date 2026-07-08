"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Code2, Zap, Shield, Bot, Star, ChevronDown, ArrowRight, Database, Globe, Layers, DollarSign, Users, GraduationCap, ShoppingBag, HeartPulse, Truck, Home as HomeIcon } from "lucide-react";
import { SiReplit } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";

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
    <div style={{ border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold" style={{ color: "#E9EBEF" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#161B26"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: "#4A5FBD" }} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const terminalLines = [
  { text: "$ python triage_agent.py", color: "#8A93A3" },
  { text: "> Connecting to support queue...", color: "#4A5FBD" },
  { text: "> Analysing 47 open tickets...", color: "#8A93A3" },
  { text: "> Priority: URGENT — API timeout (x3)", color: "#E55353" },
  { text: "> Assigning to: @backend-team", color: "#4ABD7A" },
  { text: "> Slack notification sent ✓", color: "#4ABD7A" },
];

export default function ReplitContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <SiReplit className="w-4 h-4" /> Replit Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              Full-Stack Apps and <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>AI Tools</em> Built Fast on Replit
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft builds production-ready full-stack apps, AI agents, and automation tools on Replit. From a simple API to a multi-agent pipeline — we ship working code, not demos.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold" data-testid="button-replit-start" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start Your Project</button></Link>
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}>Book a Call <ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </motion.div>
          {/* Terminal mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm z-10 font-mono text-xs" style={{ background: "#0A0E14", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#12161F", borderBottom: "1px solid #232A36" }}>
                <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                <span className="text-white/30 ml-2">triage_agent.py</span>
              </div>
              <div className="p-4 space-y-1.5">
                {terminalLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.3 }} style={{ color: line.color }}>{line.text}</motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 2.5, repeat: Infinity, duration: 1 }} style={{ color: "#4A5FBD" }}>▋</motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[{ stat: "100%", label: "Founder-Led", sub: "Direct access to your build team" }, { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after delivery" }, { stat: "2025", label: "Studio Launched", sub: "Built for startups and growing teams" }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="p-6 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#4A5FBD" }}>{s.stat}</div>
              <div className="font-semibold mb-1" style={{ color: "#E9EBEF" }}>{s.label}</div>
              <div className="text-sm" style={{ color: "#8A93A3" }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>Why Build on <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Replit with KinetixSoft</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>Replit gives us the development speed of a full cloud IDE with instant deployment. Here's how we use it to ship faster without cutting corners.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Bot className="w-6 h-6" />, title: "AI-Native by Default", desc: "We build with LLM integrations (OpenAI, Anthropic, custom) as first-class features — not bolt-ons — so AI features are stable, not just demos." },
            { icon: <Zap className="w-6 h-6" />, title: "Rapid Deployment", desc: "Replit Deployments gives us production hosting in minutes. We ship to real infrastructure from day one, not just localhost." },
            { icon: <Code2 className="w-6 h-6" />, title: "Real Engineering", desc: "We write clean Python, TypeScript, or Node.js — not just prompts. The code is maintainable, tested, and yours to own." },
            { icon: <Shield className="w-6 h-6" />, title: "Secure & Observable", desc: "Environment secrets, error logging, and health checks are part of every build — so you're not flying blind in production." },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-7 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>Work We've <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Shipped</em></motion.h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden max-w-4xl mx-auto" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-8 flex items-center justify-center min-h-[260px]" style={{ background: "#0A0E14" }}>
              <div className="font-mono text-xs space-y-1.5 w-full max-w-[240px]">
                {terminalLines.slice(0, 5).map((line, i) => (
                  <div key={i} style={{ color: line.color }}>{line.text}</div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">{["Customer Support", "Replit", "AI Agent"].map(t => <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>)}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>QueueSense</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>An AI triage agent built on Replit for a SaaS support team. QueueSense reads incoming Zendesk tickets, categorises them by severity and topic, assigns priority scores, and routes them to the right team — all without a human touching the queue.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>"Our support queue was a mess. KinetixSoft built an AI agent that handles the triage we were doing manually every morning."</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>F</div>
                <div><div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Fatima Noor</div><div className="text-xs eyebrow">CTO, QueueSense</div></div>
                <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>How We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Help</em></motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Scope It Right", title: "Architecture", accent: "& Tech Stack Design" },
            { n: "02", eyebrow: "Working Builds Fast", title: "Full-Stack App", accent: "Development" },
            { n: "03", eyebrow: "Intelligence Built In", title: "AI Agent &", accent: "LLM Integration" },
            { n: "04", eyebrow: "Ship to Production", title: "Replit Deployment", accent: "& Hosting" },
            { n: "05", eyebrow: "Hook Into Everything", title: "API & Webhook", accent: "Integrations" },
            { n: "06", eyebrow: "After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="p-6 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <span className="text-xs font-bold px-2 py-1" style={{ color: "#4A5FBD", background: "rgba(74,95,189,0.12)", borderRadius: "4px" }}>{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{s.title} <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>{s.accent}</em></h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-12" style={{ color: "#E9EBEF" }}>Common <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Questions</em></motion.h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Replit Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us what you need and we'll scope it out in 24 hours.</p>
          <ContactForm defaultService="replit" />
        </div>
      </section>
    </div>
  );
}
