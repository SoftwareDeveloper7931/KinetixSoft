"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Database, Zap, Globe, Shield, Star, ChevronDown, ArrowRight, Layers, Users, ShoppingBag, DollarSign, GraduationCap, Bot, HeartPulse, Truck, Home as HomeIcon, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const faqs = [
  { q: "What makes KinetixSoft different from other Bubble developers?", a: "We don't just use Bubble's drag-and-drop defaults. We design proper data structures, workflows, and API integrations upfront — so the app holds up when real users arrive, not just in a demo." },
  { q: "Can you build a fully custom Bubble app, or do you use templates?", a: "Every build starts from your actual requirements. We use Bubble's component library for speed but the data model, workflows, and design are custom to your product." },
  { q: "Will a Bubble app scale for large user bases?", a: "Yes — with the right database structure and workflow design from the start. We architect Bubble apps to handle growth without requiring a rebuild later." },
  { q: "How long does a typical Bubble build take?", a: "Most projects run 3–8 weeks depending on complexity, number of workflows, and third-party integrations required." },
  { q: "What does a Bubble project usually cost?", a: "Cost depends on how many features, workflows, and integrations the app needs. We'll give you a real number after a scoping call." },
  { q: "Is UI/UX design included?", a: "Yes — design is part of every Bubble build. We can work from your existing designs or create the full UI from scratch." },
  { q: "Do you support the app after it launches?", a: "Yes — we offer ongoing maintenance, workflow updates, and feature development after launch." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden glass-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-[#00A3DE] transition-colors"
        data-testid={`faq-bubble-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
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
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Client Portals", icon: <Users className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Fintech Apps", icon: <DollarSign className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "AI-Powered Tools", icon: <Bot className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Education Platforms", icon: <GraduationCap className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Healthcare Apps", icon: <HeartPulse className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Logistics & Delivery", icon: <Truck className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Real Estate Tools", icon: <HomeIcon className="w-5 h-5 text-[#00A3DE]" /> },
];

const process = [
  { title: "Discovery & Scoping", body: "We map your goals, users, and constraints before any screen gets built." },
  { title: "Data & Workflow Design", body: "We design the database structure and workflow logic side by side, so neither fights the other later." },
  { title: "Build in Bubble", body: "Your app gets built with real workflows and integrations, not just static screens." },
  { title: "QA & Performance Testing", body: "We stress-test the build for speed, edge cases, and security before it goes live." },
  { title: "Launch & Ongoing Support", body: "We ship the app and stay on to handle updates, fixes, and new features." },
];

export default function BubbleContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: "rgba(0,123,167,0.15)", border: "1px solid rgba(0,123,167,0.35)", color: "#00A3DE" }}>
              <span className="w-2 h-2 rounded-full bg-[#00A3DE] animate-pulse" />
              Bubble No-Code Engineering Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Full-Stack Web Apps Built <span className="text-gradient-duo">Without Code</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-[#94A3B8]">
              KinetixSoft builds production-ready web applications on Bubble with proper relational data architecture, workflow logic, and third-party integrations — designed to scale gracefully from prototype to live commercial platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold rounded-lg btn-cerulean" data-testid="button-bubble-start">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 rounded-lg btn-ghost-cyber" data-testid="button-bubble-call">
                  Book a Scoping Call <ArrowRight className="w-4 h-4 text-[#FF2D95]" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Bubble App Mockup with 3D Depth */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-[#007BA7]/20 blur-[90px] pointer-events-none" />
            <Card3D glowColor="dual" className="relative w-full max-w-sm z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#16181D] border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="text-xs text-white/40 ml-2 font-mono">ClientHub · Workspace</span>
              </div>
              <div className="p-5 space-y-3 bg-[#111215]">
                <div className="grid grid-cols-2 gap-2.5">
                  {[{ l: "Active Clients", v: "38" }, { l: "Open Tasks", v: "112" }, { l: "Invoices Sent", v: "26" }, { l: "Paid This Month", v: "$18.4k" }].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#16181D] border border-white/5">
                      <div className="text-sm font-bold text-[#00A3DE]">{s.v}</div>
                      <div className="text-[10px] text-[#94A3B8]">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-1">
                  {["Acme Co · 4 deliverables due", "Northwind · invoice paid ($4.2k)", "Globex · new client onboarded"].map((r, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#16181D] border border-white/5 text-xs text-[#F3F4F6]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D95]" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>

        {/* 3 Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct senior architect access on every project", glow: "cerulean" as const },
            { stat: "24/7", label: "Reliability Mindset", sub: "Clean workflows that don't stall post-launch", glow: "rose" as const },
            { stat: "2025", label: "Studio Launched", sub: "Built for rapid venture & SaaS deployment", glow: "cerulean" as const }
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
            What Makes KinetixSoft a Strong <span className="text-gradient-cerulean">Bubble Partner</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">Bubble is powerful enough to build real production apps — which also means it's easy to build something that breaks under load. Here's how we keep it rock-solid.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Database className="w-6 h-6 text-[#00A3DE]" />, title: "Data Structure First", desc: "We design your database schema before touching the visual canvas, so the app's foundation handles thousands of live records cleanly." },
            { icon: <Zap className="w-6 h-6 text-[#FF5CAE]" />, title: "Workflows That Actually Scale", desc: "Bubble workflows can easily get tangled and slow. We organize custom events and backend workflows to keep latency low." },
            { icon: <Globe className="w-6 h-6 text-[#00A3DE]" />, title: "Production API Integrations", desc: "Stripe billing, Brevo transactional emails, OpenAI models, and webhooks integrated with proper authentication and error handling." },
            { icon: <Shield className="w-6 h-6 text-[#FF5CAE]" />, title: "Privacy Rules Done Right", desc: "Bubble's privacy and access rules are critical for data security. We enforce zero-trust privacy rules across all data types." },
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

      {/* PROCESS */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How a Bubble <span className="text-gradient-rose">Build Runs</span>
        </motion.h2>
        <div className="space-y-4">
          {process.map((step, i) => (
            <div key={i} className="p-6 rounded-xl glass-card flex items-start gap-5">
              <div className="text-2xl font-mono font-bold text-[#00A3DE] opacity-60">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="rounded-2xl glass-card p-10 md:p-14 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Built for Founders Who Need to <span className="text-gradient-duo">Move Fast</span>
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                KinetixSoft works with founders validating an early vision and growing teams that need custom SaaS tools without months of engineering overhead. You get working, scalable software in weeks.
              </p>
              <Link href="/contact">
                <button className="h-11 px-6 text-sm font-semibold rounded-lg btn-duo flex items-center gap-2" data-testid="button-bubble-conversation">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#111215] border border-white/5">
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <span className="text-xs font-medium text-white">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <h2 className="text-3xl font-bold mb-2 text-center">Start Your <span className="text-gradient-duo">Bubble Project</span></h2>
          <p className="text-center text-sm text-[#94A3B8] mb-8">Tell us your idea and we'll scope it out within 24 hours.</p>
          <ContactForm defaultService="bubble" />
        </Card3D>
      </section>
    </div>
  );
}
