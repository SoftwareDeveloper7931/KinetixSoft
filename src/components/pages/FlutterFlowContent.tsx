"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Smartphone, Zap, Shield, Code2, Star, ChevronDown, ArrowRight,
  BarChart2, DollarSign, Layers, Users, GraduationCap, ShoppingBag,
  Home as HomeIcon, Truck, Bot, HeartPulse, BookOpen, ChevronRight, ExternalLink
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const faqs = [
  { q: "What makes KinetixSoft different from other FlutterFlow teams?", a: "We focus on the parts most no-code teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo." },
  { q: "Can you build a fully custom FlutterFlow app, or do you rely on templates?", a: "Every build starts from your actual requirements. We use FlutterFlow's component system for speed, but the logic, design, and integrations are custom to your product." },
  { q: "Will the app still work if my user base grows quickly?", a: "Yes — we design the data model and backend connections with growth in mind from the first sprint, so scaling up doesn't require a rebuild." },
  { q: "How long does a typical FlutterFlow build take?", a: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs." },
  { q: "What does a FlutterFlow project usually cost?", a: "Cost depends on complexity — a simple MVP and a multi-integration platform are priced very differently. We'll give you a real number after a scoping call." },
  { q: "Is UI/UX design included, or do I need to bring my own designs?", a: "Design is part of the process. We can work from your existing designs or create the UI/UX from scratch as part of the build." },
  { q: "Do you support the app after it launches?", a: "Yes — we offer ongoing maintenance, monitoring, and feature updates after launch so the app keeps running smoothly." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} data-testid={`faq-ff-${q.slice(0, 15).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold" style={{ color: "#E9EBEF" }}
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

const industries = [
  { label: "AI Apps", icon: <Bot className="w-5 h-5" /> },
  { label: "Fintech & Payments", icon: <DollarSign className="w-5 h-5" /> },
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5" /> },
  { label: "Social Apps", icon: <Users className="w-5 h-5" /> },
  { label: "Education", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Real Estate", icon: <HomeIcon className="w-5 h-5" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5" /> },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5" /> },
  { label: "Logistics & On-Demand", icon: <Truck className="w-5 h-5" /> },
];

export default function FlutterFlowContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <Smartphone className="w-4 h-4" /> FlutterFlow Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Turning Ideas Into Production-Ready <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>FlutterFlow</em> Apps
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft is a FlutterFlow development studio focused on shipping real, working products — not just prototypes. We partner with founders, growing teams, and established companies to design, build, and scale mobile and web apps on FlutterFlow.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold" data-testid="button-hero-start"
                  style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                >Start Your Project</button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" data-testid="button-hero-call"
                  style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                >Book a Call <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
          </motion.div>
          {/* Phone mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[420px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="absolute left-[8%] top-[8%] w-[185px] h-[370px] glass-card rounded-[32px] border border-white/10 p-4 flex flex-col gap-3 rotate-[-8deg] z-0">
              <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
              <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                <BarChart2 className="w-8 h-8 text-purple-300 opacity-40" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4" /><div className="h-2 bg-white/10 rounded w-1/2" /><div className="h-2 bg-white/10 rounded w-5/6" />
              </div>
              <div className="mt-auto h-9 bg-purple-500/20 rounded-xl" />
            </div>
            <div className="relative w-[200px] h-[400px] glass-panel rounded-[36px] border border-white/20 p-4 flex flex-col gap-3 z-10 shadow-2xl rotate-[4deg]">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="h-28 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-cyan-300 opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-white/20 rounded w-5/6" /><div className="h-2.5 bg-white/10 rounded" /><div className="h-2.5 bg-white/10 rounded w-4/5" />
              </div>
              <div className="flex gap-2 mt-1">
                <div className="flex-1 h-8 bg-cyan-500/30 rounded-lg text-[9px] text-cyan-300 flex items-center justify-center font-bold">GOAL</div>
                <div className="flex-1 h-8 bg-white/10 rounded-lg text-[9px] text-white/30 flex items-center justify-center">TRACK</div>
              </div>
              <div className="mt-auto h-10 bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-xl flex items-center justify-center text-[10px] text-white font-bold tracking-widest">FORECAST</div>
            </div>
          </motion.div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your app" },
            { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after launch" },
            { stat: "2025", label: "Studio Launched", sub: "Built specifically for startups and scaleups" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }}
              className="p-6 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>What Makes KinetixSoft a Strong <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>FlutterFlow Partner</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>Picking the right build partner shapes everything that comes after launch. Here's how we approach every FlutterFlow project.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Code2 className="w-6 h-6" />, title: "Real FlutterFlow Depth", desc: "We don't just drag and drop components — our team understands FlutterFlow's logic layer, API integrations, and data structures well enough to build apps that hold up under real usage." },
            { icon: <Zap className="w-6 h-6" />, title: "Built to Move Quickly", desc: "FlutterFlow's visual development model lets us ship working builds in weeks, not months, without skipping the architecture decisions that matter later." },
            { icon: <Shield className="w-6 h-6" />, title: "Engineered to Scale", desc: "Every app we build is structured around clean data models and secure backend connections, so growth doesn't mean a rebuild." },
            { icon: <Users className="w-6 h-6" />, title: "One Team, Start to Finish", desc: "Strategy, design, development, and post-launch support all come from the same team — no handoffs, no lost context." },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-7 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>
          Work We've <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Shipped</em>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-hidden max-w-4xl mx-auto" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-6 sm:p-8 flex items-center justify-center min-h-[300px] overflow-hidden" style={{ background: "#161B26" }}>
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-[160px] sm:w-[180px] aspect-[9/19] rounded-[24px] overflow-hidden border border-[#2D374D] shadow-2xl bg-[#0D121B] hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/cashnix/cashnix-screen-1.png"
                    alt="Cashnix FlutterFlow App Dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden sm:block w-[130px] aspect-[9/19] rounded-[20px] overflow-hidden border border-[#232A36] shadow-xl opacity-60 -rotate-3 hover:opacity-100 transition-opacity bg-[#0D121B]">
                  <img
                    src="/images/cashnix/cashnix-screen-2.png"
                    alt="Cashnix Cash Flow Forecasting"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {["FinTech", "FlutterFlow", "Forecasting"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>
                ))}
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium">
                  Live on Google Play
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/cashnix/cashnix-icon.png"
                  alt="Cashnix App Icon"
                  className="w-9 h-9 rounded-xl border border-[#232A36] shadow-md object-cover"
                />
                <h3 className="text-2xl font-semibold" style={{ color: "#E9EBEF" }}>Cashnix</h3>
              </div>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>A financial forecasting app that lets users set savings goals, model what-if scenarios, track financial KPIs, and view monthly and yearly forecasts generated automatically from their transaction history.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>"We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>A</div>
                <div><div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Amir Khan</div><div className="text-xs eyebrow">Founder of Cashnix</div></div>
                <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>
          How We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Help</em>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Validate Before You Build", title: "Product Strategy", accent: "& Scoping" },
            { n: "02", eyebrow: "Interfaces People Actually Enjoy", title: "UI/UX Design", accent: "for FlutterFlow" },
            { n: "03", eyebrow: "Add Intelligence Where It Counts", title: "AI Features", accent: "in FlutterFlow" },
            { n: "04", eyebrow: "Plug Into the Tools You Already Use", title: "Third-Party", accent: "API Integrations" },
            { n: "05", eyebrow: "A Second Opinion on Your Build", title: "FlutterFlow App", accent: "Reviews" },
            { n: "06", eyebrow: "We Stay After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
              className="p-6 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <span className="text-xs font-bold px-2 py-1" style={{ color: "#4A5FBD", background: "rgba(74,95,189,0.12)", borderRadius: "4px" }}>{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{s.title} <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>{s.accent}</em></h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLUTTERFLOW LEARNING TUTORIALS SECTION */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#131926] to-[#0E131F] border border-[#232A36]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A5FBD]/10 border border-[#4A5FBD]/30 text-xs font-semibold text-[#7E95F7] mb-3">
                <BookOpen className="w-3.5 h-3.5" /> FREE ENGINEERING CURRICULUM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E9EBEF]">
                FlutterFlow Learning <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Tutorials &amp; Guides</em>
              </h2>
              <p className="text-sm text-[#8A93A3] mt-2 max-w-2xl">
                Master FlutterFlow visual development with our step-by-step masterclasses: UI widget layout models, state hierarchy, secure Brevo email APIs, OpenAI chatbots, Firebase Custom Claims RBAC, and App Store publishing.
              </p>
            </div>
            <Link href="/flutterflow/tutorials">
              <button className="h-11 px-6 text-sm font-semibold rounded-md bg-[#4A5FBD] hover:bg-[#5A6FCC] text-[#E9EBEF] flex items-center gap-2 whitespace-nowrap transition-all shadow-lg shadow-[#4A5FBD]/20">
                Explore All Tutorials <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                badge: "UI Architecture",
                title: "UI Widget Taxonomy & Layouts",
                desc: "Rows, Columns, Stacks, Containers, and Form Elements. Master the mental model of the reactive widget tree.",
                link: "/flutterflow/tutorials#widget-architecture"
              },
              {
                num: "02",
                badge: "REST APIs & AI",
                title: "Brevo Email & OpenAI Chatbot",
                desc: "Zero-leak Private API Groups via Firebase Cloud Functions, multi-turn chat history in App State, and dynamic UI.",
                link: "/flutterflow/tutorials#brevo-email-api"
              },
              {
                num: "03",
                badge: "Security & Launch",
                title: "Custom Claims RBAC & App Stores",
                desc: "Cryptographic token claims, 0-database read costs, token force refresh, and Apple/Google launch checklists.",
                link: "/flutterflow/tutorials#firebase-custom-claims"
              }
            ].map((t, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0B0F19] border border-[#1F2937] hover:border-[#4A5FBD]/60 transition-all flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#161F30] text-[#60A5FA] border border-[#23314B]">{t.num}</span>
                  <span className="text-[11px] text-[#06B6D4] font-medium">{t.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-[#E9EBEF] group-hover:text-[#60A5FA] transition-colors mb-2">{t.title}</h3>
                <p className="text-xs text-[#8A93A3] leading-relaxed mb-6 flex-1">{t.desc}</p>
                <Link href={t.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5FBD] group-hover:text-[#7E95F7] transition-colors">
                  View Tutorial <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#CBD5E1]">
                Featured Masterclass: <strong className="text-white">The Ultimate FlutterFlow Beginner Guide (2026)</strong> (28 min read)
              </span>
            </div>
            <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026" className="text-xs font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors flex items-center gap-1">
              Read Pillar Guide <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUILT FOR STARTUPS */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>Built for <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Startups & Growing Teams</em></h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#8A93A3" }}>KinetixSoft works with founders validating a first version and with teams scaling an app that already has real users. Either way, the priorities are the same: ship fast, build correctly, and keep things running after launch.</p>
              <ul className="space-y-3">
                {["Fast to market without sacrificing structure", "App architecture designed for real growth", "Clear communication throughout the build", "Post-launch support, not ghosting"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#E9EBEF" }}>
                    <span className="w-5 h-5 rounded flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: "rgba(74,95,189,0.12)", color: "#4A5FBD" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-10 flex flex-col justify-center" style={{ background: "#161B26", borderLeft: "1px solid #232A36" }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#E9EBEF" }}>Industries We've Built For</h3>
              <div className="grid grid-cols-1 gap-2">
                {industries.map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < industries.length - 1 ? "1px solid #232A36" : "none" }}>
                    <span className="flex items-center justify-center w-7 h-7" style={{ background: "rgba(74,95,189,0.12)", borderRadius: "4px", color: "#4A5FBD" }}>{ind.icon}</span>
                    <span className="text-sm" style={{ color: "#E9EBEF" }}>{ind.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-12" style={{ color: "#E9EBEF" }}>
          Common <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Questions</em>
        </motion.h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>FlutterFlow Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us about your project and we'll get back to you within one business day.</p>
          <ContactForm defaultService="flutterflow" />
        </div>
      </section>
    </div>
  );
}
