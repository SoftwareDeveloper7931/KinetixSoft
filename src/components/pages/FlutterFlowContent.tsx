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
import { Card3D } from "@/components/Card3D";

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
    <div className="rounded-xl overflow-hidden glass-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-ff-${q.slice(0, 15).replace(/\s/g, "-")}`}
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
  { label: "AI Apps", icon: <Bot className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Fintech & Payments", icon: <DollarSign className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Social Apps", icon: <Users className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Education", icon: <GraduationCap className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Real Estate", icon: <HomeIcon className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Logistics & On-Demand", icon: <Truck className="w-5 h-5 text-[#00A3DE]" /> },
];

export default function FlutterFlowContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: "rgba(0,123,167,0.15)", border: "1px solid rgba(0,123,167,0.35)", color: "#00A3DE" }}>
              <Smartphone className="w-3.5 h-3.5" /> FlutterFlow Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Turning Ideas Into Production-Ready <span className="text-gradient-cerulean">FlutterFlow</span> Apps
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-[#94A3B8]">
              KinetixSoft is a FlutterFlow engineering studio focused on shipping real, high-performance mobile products. We partner with startups and scaleups to design, architect, and deploy native iOS &amp; Android apps at 60–120 FPS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold rounded-lg btn-cerulean" data-testid="button-hero-start">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 rounded-lg btn-ghost-cyber" data-testid="button-hero-call">
                  Book a Scoping Call <ArrowRight className="w-4 h-4 text-[#FF2D95]" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Phone Mockup Showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[420px]">
            <div className="absolute inset-0 rounded-full bg-[#007BA7]/20 blur-[90px] pointer-events-none" />
            <div className="absolute left-[8%] top-[8%] w-[185px] h-[370px] glass-card rounded-[32px] border border-white/10 p-4 flex flex-col gap-3 rotate-[-8deg] z-0 shadow-2xl">
              <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
              <div className="h-24 bg-gradient-to-br from-[#007BA7]/30 to-[#FF2D95]/20 rounded-xl flex items-center justify-center">
                <BarChart2 className="w-8 h-8 text-[#00A3DE] opacity-60" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4" /><div className="h-2 bg-white/10 rounded w-1/2" /><div className="h-2 bg-white/10 rounded w-5/6" />
              </div>
              <div className="mt-auto h-9 bg-[#FF2D95]/20 rounded-xl" />
            </div>
            <div className="relative w-[200px] h-[400px] glass-panel rounded-[36px] border border-white/20 p-4 flex flex-col gap-3 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] rotate-[4deg]">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="h-28 bg-gradient-to-br from-[#00A3DE]/30 to-[#007BA7]/40 rounded-xl flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-[#00A3DE]" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-white/20 rounded w-5/6" /><div className="h-2.5 bg-white/10 rounded" /><div className="h-2.5 bg-white/10 rounded w-4/5" />
              </div>
              <div className="flex gap-2 mt-1">
                <div className="flex-1 h-8 bg-[#007BA7]/30 border border-[#007BA7]/40 rounded-lg text-[9px] text-[#00A3DE] flex items-center justify-center font-bold">GOAL</div>
                <div className="flex-1 h-8 bg-white/10 rounded-lg text-[9px] text-white/50 flex items-center justify-center font-bold">TRACK</div>
              </div>
              <div className="mt-auto h-10 bg-gradient-to-r from-[#007BA7] to-[#FF2D95] rounded-xl flex items-center justify-center text-[10px] text-white font-bold tracking-widest shadow-[0_4px_15px_rgba(0,123,167,0.4)]">
                FORECAST
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the engineers architecting your app", glow: "cerulean" as const },
            { stat: "24/7", label: "Production Mindset", sub: "Engineered to scale securely under real user load", glow: "rose" as const },
            { stat: "2025", label: "Studio Launched", sub: "Built specifically for modern startups and scaleups", glow: "cerulean" as const },
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
            What Makes KinetixSoft a Strong <span className="text-gradient-duo">FlutterFlow Partner</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">Picking the right build partner shapes everything that comes after launch. Here's how we approach every FlutterFlow sprint.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Code2 className="w-6 h-6 text-[#00A3DE]" />, title: "Real FlutterFlow & Dart Depth", desc: "We don't just drag and drop widgets — our senior developers write custom Dart functions, actions, and widgets that compile natively." },
            { icon: <Zap className="w-6 h-6 text-[#FF5CAE]" />, title: "Speed Without Technical Debt", desc: "FlutterFlow's visual development model lets us ship working builds in weeks, not quarters, with clean architecture from day one." },
            { icon: <Shield className="w-6 h-6 text-[#00A3DE]" />, title: "Engineered to Scale", desc: "Every app is architected around secure backend connections, Private API groups, and Firebase Custom Claims for zero-trust security." },
            { icon: <Users className="w-6 h-6 text-[#FF5CAE]" />, title: "One Dedicated Team", desc: "Strategy, design, development, and post-launch support all come from the same founder-led team — no lost context." },
          ].map((f, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "cerulean" : "rose"} className="p-7">
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Work We've <span className="text-gradient-rose">Shipped</span>
          </h2>
        </div>
        <Card3D glowColor="dual" className="overflow-hidden max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-6 sm:p-8 flex items-center justify-center min-h-[300px] overflow-hidden bg-[#111215]">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#007BA7]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-[160px] sm:w-[180px] aspect-[9/19] rounded-[24px] overflow-hidden border border-[#007BA7]/40 shadow-2xl bg-[#0A0A0A] hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/cashnix/cashnix-screen-1.png"
                    alt="Cashnix FlutterFlow App Dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden sm:block w-[130px] aspect-[9/19] rounded-[20px] overflow-hidden border border-[#FF2D95]/30 shadow-xl opacity-60 -rotate-3 hover:opacity-100 transition-opacity bg-[#0A0A0A]">
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
                {["FinTech", "FlutterFlow", "Forecasting"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full font-mono text-[#00A3DE] bg-[#007BA7]/15 border border-[#007BA7]/30">
                    {t}
                  </span>
                ))}
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium">
                  Live on Google Play
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/cashnix/cashnix-icon.png"
                  alt="Cashnix App Icon"
                  className="w-9 h-9 rounded-xl border border-white/10 shadow-md object-cover"
                />
                <h3 className="text-2xl font-bold text-white">Cashnix</h3>
              </div>
              <p className="text-sm mb-5 leading-relaxed text-[#94A3B8]">
                A financial forecasting app that lets users set savings goals, model what-if scenarios, track KPIs, and view automated projections from transaction data.
              </p>
              <blockquote className="pl-4 italic text-sm mb-5 border-l-2 border-[#007BA7] text-[#E2E8F0]">
                "We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#007BA7] to-[#FF2D95] text-white">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Amir Khan</div>
                  <div className="text-xs text-[#00A3DE]">Founder of Cashnix</div>
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

      {/* FLUTTERFLOW LEARNING TUTORIALS SECTION */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="p-8 md:p-12 rounded-2xl glass-card border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#007BA7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BA7]/15 border border-[#007BA7]/35 text-xs font-semibold text-[#00A3DE] mb-3">
                <BookOpen className="w-3.5 h-3.5" /> FREE ENGINEERING CURRICULUM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                FlutterFlow Learning <span className="text-gradient-cerulean">Tutorials &amp; Guides</span>
              </h2>
              <p className="text-sm text-[#94A3B8] mt-2 max-w-2xl">
                Master FlutterFlow visual development with our step-by-step masterclasses: UI widget layout models, state hierarchy, secure Brevo email APIs, OpenAI chatbots, Firebase Custom Claims RBAC, and App Store publishing.
              </p>
            </div>
            <Link href="/flutterflow/tutorials">
              <button className="h-11 px-6 text-sm font-semibold rounded-lg btn-cerulean flex items-center gap-2 whitespace-nowrap">
                Explore All Tutorials <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
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
              <div key={idx} className="p-6 rounded-xl bg-[#111215] border border-white/5 hover:border-[#007BA7]/60 transition-all flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#007BA7]/20 text-[#00A3DE] border border-[#007BA7]/40">{t.num}</span>
                  <span className="text-[11px] text-[#FF5CAE] font-medium">{t.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00A3DE] transition-colors mb-2">{t.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 flex-1">{t.desc}</p>
                <Link href={t.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A3DE] group-hover:text-[#FF2D95] transition-colors">
                  View Tutorial <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Common <span className="text-gradient-cerulean">Questions</span>
        </h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-12">
        <Card3D glowColor="dual" className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2 text-center">Start Your <span className="text-gradient-duo">FlutterFlow Project</span></h2>
          <p className="text-center text-sm text-[#94A3B8] mb-8">Tell us about your project and we'll get back to you within one business day.</p>
          <ContactForm defaultService="flutterflow" />
        </Card3D>
      </section>
    </div>
  );
}
