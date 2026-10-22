"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Database, Zap, Shield, Users, Star, ChevronDown, ArrowRight, BarChart2, Settings, Globe, Layers, DollarSign, GraduationCap, ShoppingBag, Home as HomeIcon, Truck, Bot, HeartPulse } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const faqs = [
  { q: "What can you build in Podio?", a: "We build custom CRM systems, project management tools, automated workflows, client portals, and anything that replaces spreadsheets or disconnected tools for your team." },
  { q: "How long does a Podio project take?", a: "Most Podio builds take 3–8 weeks depending on complexity, the number of workflows, and how many third-party integrations are needed." },
  { q: "Can you migrate data from our existing system into Podio?", a: "Yes — data migration is part of the process. We'll map your existing data, clean it up, and import it into your new Podio workspace." },
  { q: "Does Podio connect to our other software?", a: "Yes — Podio has native integrations with hundreds of tools, and we can use Zapier, Make, or custom API connections for anything else." },
  { q: "What does a Podio project usually cost?", a: "Cost depends on the number of apps, workflows, and integrations. We'll give you a clear number after a short scoping conversation." },
  { q: "Do we need a Podio subscription ourselves?", a: "Yes — you'll need an active Podio plan. We can advise on the right tier for your team size and usage." },
  { q: "Do you support the workspace after it's launched?", a: "Yes — we offer ongoing support, modifications, and expansions after delivery so your Podio workspace grows with your business." },
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

const industries = [
  { label: "Real Estate & Property", icon: <HomeIcon className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Professional Services", icon: <Users className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Logistics & Operations", icon: <Truck className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "SaaS & Technology", icon: <Layers className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Education & Training", icon: <GraduationCap className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "E-commerce & Retail", icon: <ShoppingBag className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Financial Services", icon: <DollarSign className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Construction & Contracting", icon: <Settings className="w-5 h-5 text-[#00A3DE]" /> },
];

export default function PodioContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: "rgba(0,123,167,0.15)", border: "1px solid rgba(0,123,167,0.35)", color: "#00A3DE" }}>
              <Database className="w-3.5 h-3.5" /> Podio Architecture Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Custom <span className="text-gradient-cerulean">Podio</span> Workspaces That Replace Spreadsheets
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-[#94A3B8]">
              KinetixSoft builds enterprise Podio CRM systems, GlobiFlow workflow automations, and operational command centers for scaling companies. Eliminate manual paperwork and messy tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold rounded-lg btn-cerulean" data-testid="button-podio-start">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 rounded-lg btn-ghost-cyber">
                  Book a Call <ArrowRight className="w-4 h-4 text-[#FF2D95]" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Dashboard Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-[#007BA7]/20 blur-[90px] pointer-events-none" />
            <Card3D glowColor="cerulean" className="relative w-full max-w-sm p-6 z-10 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="text-xs text-white/40 ml-2 font-mono">OpsFlow · Pipeline Automation</span>
              </div>
              <div className="space-y-2.5">
                {["Lead Qualified → Discovery Call", "Discovery Call → Proposal Sent", "Proposal → Contract Signed", "Contract → Onboarding"].map((stage, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#16181D] border border-white/5">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ["#007BA7", "#FF2D95", "#00A3DE", "#FF5CAE"][i] }} />
                    <span className="text-xs text-white flex-1">{stage}</span>
                    <span className="text-xs font-mono font-bold text-[#00A3DE]">{[3, 7, 2, 4][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Active Pipeline Value</span>
                <span className="text-sm font-bold text-[#FF5CAE]">$148,500</span>
              </div>
            </Card3D>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct consultation with your workflow engineer", glow: "cerulean" as const },
            { stat: "24/7", label: "Reliability Mindset", sub: "Automations stress-tested for uninterrupted ops", glow: "rose" as const },
            { stat: "2025", label: "Studio Launched", sub: "Built for modern agencies and growing teams", glow: "cerulean" as const }
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
            Why Choose KinetixSoft for Your <span className="text-gradient-cerulean">Podio Build</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">A Podio workspace is only as effective as the architectural logic behind it. Here is our delivery framework.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Database className="w-6 h-6 text-[#00A3DE]" />, title: "Structured Relational Modeling", desc: "We design clean app hierarchies and bidirectional calculation fields, preventing clutter and keeping team workflows intuitive." },
            { icon: <Zap className="w-6 h-6 text-[#FF5CAE]" />, title: "GlobiFlow & Citrix Automations", desc: "Automate contract triggers, dynamic PDF generations, task dispatching, and email sequences without brittle failures." },
            { icon: <Shield className="w-6 h-6 text-[#00A3DE]" />, title: "Security & Role Governance", desc: "Multi-workspace segmentation and field-level permissions ensure team members and contractors only access permitted records." },
            { icon: <Globe className="w-6 h-6 text-[#FF5CAE]" />, title: "Connected to Your Stack", desc: "Integrate Podio with QuickBooks, Stripe, DocuSign, Slack, and your external databases through secure webhooks." },
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
          <h2 className="text-3xl md:text-4xl font-bold">Work We've <span className="text-gradient-rose">Shipped</span></h2>
        </div>
        <Card3D glowColor="dual" className="overflow-hidden max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-10 flex items-center justify-center min-h-[260px] bg-[#111215]">
              <div className="w-full max-w-[220px] space-y-2">
                {["Prospect", "Discovery", "Proposal", "Negotiation", "Won"].map((stage, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#16181D] border border-white/5">
                    <div className="w-2 h-2 rounded-full" style={{ background: i === 4 ? "#FF2D95" : "#007BA7" }} />
                    <span className="text-xs text-white">{stage}</span>
                    <div className="ml-auto flex gap-1">
                      {Array(Math.max(1, 5 - i)).fill(0).map((_, j) => (
                        <div key={j} className="w-1.5 h-4 rounded-sm" style={{ background: j === 0 ? "#00A3DE" : "#222630" }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["CRM", "Podio", "Automation"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full font-mono text-[#00A3DE] bg-[#007BA7]/15 border border-[#007BA7]/30">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">OpsFlow</h3>
              <p className="text-sm mb-5 leading-relaxed text-[#94A3B8]">
                A custom Podio CRM and operations hub for a professional services firm managing 80+ active client accounts. Automated client onboarding, project milestone billing, and contract signatures.
              </p>
              <blockquote className="pl-4 italic text-sm mb-5 border-l-2 border-[#007BA7] text-[#E2E8F0]">
                "Before KinetixSoft, we were running the whole business out of spreadsheets. Now everything lives in Podio and actually gets done."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#007BA7] to-[#FF2D95] text-white">
                  S
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Sarah Malik</div>
                  <div className="text-xs text-[#00A3DE]">Operations Director, OpsFlow</div>
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
        <Card3D glowColor="dual" className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold mb-2 text-center">Start Your <span className="text-gradient-duo">Podio Project</span></h2>
          <p className="text-center text-sm text-[#94A3B8] mb-8">Tell us about your team and we'll scope your workspace within one business day.</p>
          <ContactForm defaultService="podio" />
        </Card3D>
      </section>
    </div>
  );
}
