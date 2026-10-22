"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Zap, Shield, Code2, Star, ChevronDown, ArrowRight, BarChart2, DollarSign, Layers, Users, GraduationCap, ShoppingBag, Bot, HeartPulse, Truck, Home as HomeIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const faqs = [
  { q: "What kind of apps can you build with Lovable?", a: "SaaS dashboards, marketplaces, client portals, internal apps, AI-powered tools, and any web app that needs auth, database storage, payments, and API integrations." },
  { q: "How long does a Lovable build take?", a: "Most projects run 3–8 weeks. Simple MVPs ship faster; more complex apps with multiple integrations take a bit longer." },
  { q: "Can I own and export the code?", a: "Yes — Lovable generates clean code that you own. We can also help you export, host, and maintain it after launch." },
  { q: "What makes Lovable different from just using an engineer?", a: "Lovable lets us ship 3–5x faster than building from scratch. You get the same quality of product in a fraction of the time and cost." },
  { q: "Can Lovable apps scale to real users?", a: "Yes — Lovable apps run on proper infrastructure (Supabase, PostgreSQL) designed for production workloads. We architect it correctly from day one." },
  { q: "Is design included in the build?", a: "Yes — we handle the full product design within Lovable's system, or we can work from your existing Figma files or brand guidelines." },
  { q: "Do you support the app after launch?", a: "Yes — we offer post-launch support, feature additions, and bug fixes. You're not on your own once the app ships." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden glass-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-[#FF5CAE] transition-colors"
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
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "AI-Powered Tools", icon: <Bot className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Fintech Apps", icon: <DollarSign className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Client Portals", icon: <Users className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Education Platforms", icon: <GraduationCap className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Healthcare Apps", icon: <HeartPulse className="w-5 h-5 text-[#FF5CAE]" /> },
  { label: "Real Estate Tools", icon: <HomeIcon className="w-5 h-5 text-[#00A3DE]" /> },
  { label: "Logistics & Delivery", icon: <Truck className="w-5 h-5 text-[#FF5CAE]" /> },
];

export default function LovableContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: "rgba(255,45,149,0.15)", border: "1px solid rgba(255,45,149,0.35)", color: "#FF5CAE" }}>
              <span className="w-2 h-2 rounded-full bg-[#FF2D95] animate-pulse" />
              Lovable AI Full-Stack Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              SaaS Apps That <span className="text-gradient-rose">Ship Fast</span> and Scale
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-[#94A3B8]">
              KinetixSoft builds production-ready web applications and scalable SaaS products on Lovable. From validated MVP to live paying customers with Supabase auth, Stripe payments, and PostgreSQL architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold rounded-lg btn-neon-rose" data-testid="button-lovable-start">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 rounded-lg btn-ghost-cyber">
                  Book a Scoping Call <ArrowRight className="w-4 h-4 text-[#00A3DE]" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Dashboard Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-[#FF2D95]/20 blur-[90px] pointer-events-none" />
            <Card3D glowColor="rose" className="relative w-full max-w-sm z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#16181D] border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="text-xs text-white/40 ml-2 font-mono">Pitchloop · Analytics</span>
              </div>
              <div className="p-5 space-y-3 bg-[#111215]">
                <div className="grid grid-cols-2 gap-2.5">
                  {[{ l: "Active Decks", v: "24" }, { l: "Views Today", v: "189" }, { l: "Investors", v: "7" }, { l: "Avg. Time", v: "4:32" }].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#16181D] border border-white/5">
                      <div className="text-sm font-bold text-[#FF5CAE]">{s.v}</div>
                      <div className="text-[10px] text-[#94A3B8]">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-1">
                  {["Seed Round Deck · 12 views", "Series A Pitch · 5 views", "Demo Day 2025 · 47 views"].map((r, i) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to senior full-stack developers", glow: "rose" as const },
            { stat: "24/7", label: "Production Delivery", sub: "Clean code structure that doesn't collapse", glow: "cerulean" as const },
            { stat: "2025", label: "Studio Launched", sub: "Built for ambitious founders and scaleups", glow: "rose" as const }
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
            What Makes KinetixSoft a Strong <span className="text-gradient-rose">Lovable Partner</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">Lovable is extraordinarily fast — but only if the engineering team understands data modeling and production security. Here is our blueprint.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Globe className="w-6 h-6 text-[#FF5CAE]" />, title: "Full-Stack, Not Just Prototypes", desc: "We build complete Lovable apps — auth, database, payments, and custom API connections that support real business logic." },
            { icon: <Zap className="w-6 h-6 text-[#00A3DE]" />, title: "Fast Without Fragile Code", desc: "Lovable's AI-assisted model lets us ship in weeks, not quarters — with clean modular code and proper tests." },
            { icon: <Shield className="w-6 h-6 text-[#FF5CAE]" />, title: "Supabase & PostgreSQL Scalability", desc: "Relational database modeling with Row-Level Security (RLS) configured to protect user data from day one." },
            { icon: <Code2 className="w-6 h-6 text-[#00A3DE]" />, title: "Full Source Code Ownership", desc: "Lovable generates clean, exportable code. You own 100% of your repository with zero lock-in." },
          ].map((f, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "rose" : "cerulean"} className="p-8">
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
        <Card3D glowColor="dual" className="overflow-hidden max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-10 flex items-center justify-center min-h-[260px] bg-[#111215]">
              <div className="w-full max-w-[220px] space-y-2">
                <div className="p-4 rounded-xl bg-[#16181D] border border-white/5">
                  <div className="text-xs font-semibold mb-3 text-white">Investor Views</div>
                  <div className="flex items-end gap-1.5 h-14">
                    {[30, 60, 45, 80, 55, 95, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#FF2D95" : "#007BA7" }} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[{ l: "Decks", v: "24" }, { l: "Views", v: "891" }].map((s, i) => (
                    <div key={i} className="p-3 text-center rounded-lg bg-[#16181D] border border-white/5">
                      <div className="text-sm font-bold text-[#FF5CAE]">{s.v}</div>
                      <div className="text-[10px] text-[#94A3B8]">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["SaaS", "Lovable", "Analytics"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full font-mono text-[#FF5CAE] bg-[#FF2D95]/15 border border-[#FF2D95]/30">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pitchloop</h3>
              <p className="text-sm mb-5 leading-relaxed text-[#94A3B8]">
                A SaaS platform for startup founders that monitors investor slide engagement and reading duration, built on Lovable with Supabase and PDF analytics.
              </p>
              <blockquote className="pl-4 italic text-sm mb-5 border-l-2 border-[#FF2D95] text-[#E2E8F0]">
                "KinetixSoft shipped a working product in three weeks. It's already the tool I show founders when they ask how to pitch smarter."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#FF2D95] to-[#007BA7] text-white">
                  K
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Kamran Siddiqui</div>
                  <div className="text-xs text-[#FF5CAE]">Founder of Pitchloop</div>
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
          Common <span className="text-gradient-rose">Questions</span>
        </h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-12">
        <Card3D glowColor="rose" className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold mb-2 text-center">Start Your <span className="text-gradient-rose">Lovable Project</span></h2>
          <p className="text-center text-sm text-[#94A3B8] mb-8">Tell us your vision and we'll map out the architecture within 24 hours.</p>
          <ContactForm defaultService="lovable" />
        </Card3D>
      </section>
    </div>
  );
}
