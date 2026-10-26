"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layout, Zap, Shield, Database, Star, ChevronDown, ArrowRight, BarChart2, Settings, Users, Layers, DollarSign, Globe, Bot } from "lucide-react";
import { SiRetool } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const faqs = [
  { q: "What kinds of tools can you build with Retool?", a: "Admin panels, ops dashboards, claims processors, order management tools, customer support UIs, data pipelines, approval workflows — anything that your internal team uses to run the business." },
  { q: "Will the Retool tool connect to our existing database?", a: "Yes — Retool connects to PostgreSQL, MySQL, MongoDB, REST APIs, GraphQL, and most modern data sources. We handle the connection setup and query writing." },
  { q: "How long does a typical Retool build take?", a: "Most internal tools ship in 2–6 weeks depending on the number of views, data sources, and workflow complexity." },
  { q: "Can non-technical users operate the tool after it's built?", a: "Yes — that's the point. Retool tools are built for your operations, support, or admin teams to use daily without needing a developer." },
  { q: "What does a Retool project usually cost?", a: "Cost depends on complexity — a simple single-view tool and a multi-step operations platform are priced differently. We'll give you a real number after scoping." },
  { q: "Do we need our own Retool license?", a: "Yes — you'll need an active Retool subscription. We can advise on the right plan for your team size." },
  { q: "Do you support the tool after it's launched?", a: "Yes — we offer ongoing support, new feature additions, and modifications after delivery so your internal tool grows with your operations." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden glass-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-[#00A3DE] transition-colors"
      >
        <span>{q}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${open ? "bg-[#FF2D95]/20 text-[#FF5CAE]" : "bg-white/5 text-[#00A3DE]"}`}>
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RetoolContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: "rgba(0,123,167,0.15)", border: "1px solid rgba(0,123,167,0.35)", color: "#00A3DE" }}>
              <SiRetool className="w-3.5 h-3.5" /> Retool Internal Systems Studio
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight mb-5">
              Internal Tools That <span className="text-gradient-cerulean">Actually Get Used</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#94A3B8]">
              KinetixSoft builds custom admin dashboards, operations portals, and database interfaces on Retool for teams that have outgrown manual spreadsheets. High-speed, secure, and production-tested.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold rounded-lg btn-cerulean" data-testid="button-retool-start">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 rounded-lg btn-ghost-cyber">
                  Book a Scoping Call <ArrowRight className="w-4 h-4 text-[#FF2D95]" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Admin Panel Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-[#007BA7]/20 blur-[90px] pointer-events-none" />
            <Card3D glowColor="cerulean" className="relative w-full max-w-sm z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#16181D] border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="text-xs text-white/40 ml-2 font-mono">ClaimDesk · Internal Ops</span>
              </div>
              <div className="p-5 space-y-3 bg-[#111215]">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[{ l: "Open Claims", v: "47" }, { l: "Processing", v: "12" }, { l: "Resolved", v: "203" }].map((s, i) => (
                    <div key={i} className="p-2.5 text-center rounded-lg bg-[#16181D] border border-white/5">
                      <div className="text-sm font-bold text-[#00A3DE]">{s.v}</div>
                      <div className="text-[10px] text-[#94A3B8]">{s.l}</div>
                    </div>
                  ))}
                </div>
                {["CLM-0041 · Pending Review", "CLM-0040 · Approved ($12.5k)", "CLM-0039 · Rejected", "CLM-0038 · In Review"].map((row, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#16181D] border border-white/5 text-xs text-[#F3F4F6]">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#FF2D95", "#00A3DE", "#E55353", "#00A3DE"][i] }} />
                    <span>{row}</span>
                  </div>
                ))}
              </div>
            </Card3D>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to your internal tools architect", glow: "cerulean" as const },
            { stat: "24/7", label: "Operational Mindset", sub: "Built for zero downtime and data integrity", glow: "rose" as const },
            { stat: "2025", label: "Studio Launched", sub: "Specialized in high-density data systems", glow: "cerulean" as const }
          ].map((s, i) => (
            <Card3D key={i} glowColor={s.glow} className="p-6 text-center">
              <div className={`text-3xl font-extrabold mb-1 ${s.glow === "rose" ? "text-gradient-rose" : "text-gradient-cerulean"}`}>{s.stat}</div>
              <div className="font-semibold text-white mb-1">{s.label}</div>
              <div className="text-xs text-[#94A3B8]">{s.sub}</div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Build Internal Tools with <span className="text-gradient-cerulean">KinetixSoft</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">Internal tools fail when they're clunky or disconnected from source-of-truth databases. Here is how we engineer them to succeed.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Layout className="w-6 h-6 text-[#00A3DE]" />, title: "Real SQL & API Depth", desc: "We write optimized PostgreSQL, MySQL, and REST queries — connecting directly to production databases with parameterized security." },
            { icon: <Zap className="w-6 h-6 text-[#FF5CAE]" />, title: "Rapid Operational Velocity", desc: "Retool's component model lets us ship working internal tools in days or weeks, giving your operations immediate leverage." },
            { icon: <Shield className="w-6 h-6 text-[#00A3DE]" />, title: "Enterprise Access Control", desc: "Granular RBAC permissions, audit logging, and sensitive data masking are built into every tool by default." },
            { icon: <Database className="w-6 h-6 text-[#FF5CAE]" />, title: "Unified Data Orchestration", desc: "Seamlessly merge data from PostgreSQL, Stripe, Salesforce, Google Sheets, and custom microservices into one screen." },
          ].map((f, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "cerulean" : "rose"} className="p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{f.desc}</p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Work We've <span className="text-gradient-duo">Shipped</span></h2>
        </div>
        <Card3D glowColor="cerulean" className="overflow-hidden max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-10 flex items-center justify-center min-h-[260px] bg-[#111215]">
              <div className="w-full max-w-[220px] space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white">Claims Queue</span>
                  <span className="text-xs text-[#00A3DE] font-mono">47 open</span>
                </div>
                {["#CLM-041 · Auto Claim", "#CLM-040 · Property Damage", "#CLM-039 · Equipment", "#CLM-038 · Medical Review"].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#16181D] border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#FF2D95", "#00A3DE", "#E55353", "#00A3DE"][i] }} />
                    <span className="text-[10px] text-white">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["InsurTech", "Retool", "Admin Portal"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full font-mono text-[#00A3DE] bg-[#007BA7]/15 border border-[#007BA7]/30">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ClaimDesk</h3>
              <p className="text-sm mb-5 leading-relaxed text-[#94A3B8]">
                A claims management portal built on Retool for an insurance operations team. Handlers review, approve, reject, and trigger automated payouts directly connected to PostgreSQL.
              </p>
              <blockquote className="pl-4 italic text-sm mb-5 border-l-2 border-[#007BA7] text-[#E2E8F0]">
                "Claims that used to take 3 days to process now get handled in the same morning. KinetixSoft built exactly what we needed."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#007BA7] to-[#FF2D95] text-white">
                  R
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Raza Ahmed</div>
                  <div className="text-xs text-[#00A3DE]">Head of Operations, ClaimDesk</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF2D95] text-[#FF2D95]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Common <span className="text-gradient-cerulean">Questions</span>
        </h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-12">
        <Card3D glowColor="cerulean" className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold mb-2 text-center">Start Your <span className="text-gradient-cerulean">Retool Project</span></h2>
          <p className="text-center text-sm text-[#94A3B8] mb-8">Tell us what internal tools your team needs and we'll scope it out within 24 hours.</p>
          <ContactForm defaultService="retool" />
        </Card3D>
      </section>
    </div>
  );
}
