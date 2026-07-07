"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Zap, Shield, Code2, Star, ChevronDown, ArrowRight, BarChart2, DollarSign, Layers, Users, GraduationCap, ShoppingBag, Bot, HeartPulse, Truck, Home as HomeIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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

const industries = [
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5" /> },
  { label: "AI-Powered Tools", icon: <Bot className="w-5 h-5" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5" /> },
  { label: "Fintech Apps", icon: <DollarSign className="w-5 h-5" /> },
  { label: "Client Portals", icon: <Users className="w-5 h-5" /> },
  { label: "Education Platforms", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Healthcare Apps", icon: <HeartPulse className="w-5 h-5" /> },
  { label: "Real Estate Tools", icon: <HomeIcon className="w-5 h-5" /> },
  { label: "Logistics & Delivery", icon: <Truck className="w-5 h-5" /> },
];

export default function LovableContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <span className="text-base">♥</span> Lovable Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              SaaS Apps That <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Ship Fast</em> and Scale
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft builds production-ready web apps and SaaS products on Lovable. From idea validation to a fully working product with auth, payments, and real users — without the typical timeline or cost of a full engineering team.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold" data-testid="button-lovable-start" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start Your Project</button></Link>
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}>Book a Call <ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </motion.div>
          {/* SaaS dashboard mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-rose-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm z-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#161B26", borderBottom: "1px solid #232A36" }}>
                <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                <span className="text-xs text-white/30 ml-2">Pitchloop · Dashboard</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {[{ l: "Active Decks", v: "24" }, { l: "Views Today", v: "189" }, { l: "Investors", v: "7" }, { l: "Avg. Time", v: "4:32" }].map((s, i) => (
                    <div key={i} className="p-2" style={{ background: "#161B26", borderRadius: "4px" }}>
                      <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
                      <div className="text-[10px]" style={{ color: "#8A93A3" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["Seed Round Deck · 12 views", "Series A Pitch · 5 views", "Demo Day 2025 · 47 views"].map((r, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2" style={{ background: "#161B26", borderRadius: "4px" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <span className="text-xs" style={{ color: "#E9EBEF" }}>{r}</span>
                    </div>
                  ))}
                </div>
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>What Makes KinetixSoft a Strong <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Lovable Partner</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>Lovable is powerful — but only if the person building knows what they're doing. Here's how we approach every build.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Globe className="w-6 h-6" />, title: "Full-Stack, Not Just UI", desc: "We build complete Lovable apps — auth, database, payments, API integrations, and the business logic that makes them useful to real users." },
            { icon: <Zap className="w-6 h-6" />, title: "Fast Without the Shortcuts", desc: "Lovable's AI-first approach lets us ship in weeks, not months — without skipping the design decisions and data architecture that matter post-launch." },
            { icon: <Shield className="w-6 h-6" />, title: "Production-Ready Architecture", desc: "Every app we build is structured around Supabase and PostgreSQL, designed to handle real traffic without requiring a rebuild once users arrive." },
            { icon: <Code2 className="w-6 h-6" />, title: "You Own the Code", desc: "Lovable generates clean, exportable code. We document what we build so you're never locked in — to us or the platform." },
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
            <div className="relative p-10 flex items-center justify-center min-h-[260px]" style={{ background: "#161B26" }}>
              <div className="w-full max-w-[220px] space-y-2">
                <div className="p-3" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                  <div className="text-xs font-semibold mb-2" style={{ color: "#E9EBEF" }}>Investor Views</div>
                  <div className="flex items-end gap-1 h-12">{[30, 60, 45, 80, 55, 90, 70].map((h, i) => <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#4A5FBD" : "rgba(74,95,189,0.3)" }} />)}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[{ l: "Decks", v: "24" }, { l: "Views", v: "891" }].map((s, i) => (
                    <div key={i} className="p-2 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "4px" }}>
                      <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
                      <div className="text-[10px]" style={{ color: "#8A93A3" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">{["SaaS", "Lovable", "Pitch Analytics"].map(t => <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>)}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>Pitchloop</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>A SaaS platform for founders that tracks investor engagement with pitch decks — who opened it, how long they spent on each slide, and which sections drove interest. Built on Lovable with Supabase and PDF analytics.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>"KinetixSoft shipped a working product in three weeks. It's already the tool I show founders when they ask how to pitch smarter."</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>K</div>
                <div><div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Kamran Siddiqui</div><div className="text-xs eyebrow">Founder of Pitchloop</div></div>
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
            { n: "01", eyebrow: "Know Before You Build", title: "Product Strategy", accent: "& Scoping" },
            { n: "02", eyebrow: "UI That Earns Users", title: "UX Design", accent: "in Lovable" },
            { n: "03", eyebrow: "Secure, Real Auth", title: "Authentication", accent: "& User Management" },
            { n: "04", eyebrow: "Take Payments from Day One", title: "Payments &", accent: "Subscription Logic" },
            { n: "05", eyebrow: "Connect Your Stack", title: "API &", accent: "Third-Party Integrations" },
            { n: "06", eyebrow: "After Launch, Not After You Pay", title: "Post-Launch", accent: "Support" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="p-6 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <span className="text-xs font-bold px-2 py-1" style={{ color: "#4A5FBD", background: "rgba(74,95,189,0.12)", borderRadius: "4px" }}>{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{s.title} <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>{s.accent}</em></h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES + CTA */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Built for <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Founders Who Need to Ship</em></h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#8A93A3" }}>If you're a founder with a working idea but no development team, Lovable is often the fastest path to a real product. We'll take your requirements from concept to launched app — with real users, real data, and real infrastructure behind it.</p>
              <Link href="/contact"><button className="h-11 px-6 text-sm font-semibold w-fit flex items-center gap-2" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start a Conversation <ArrowRight className="w-4 h-4" /></button></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10" style={{ background: "#161B26", borderLeft: "1px solid #232A36" }}>
              <h3 className="text-lg font-semibold mb-5" style={{ color: "#E9EBEF" }}>Industries We've Built For</h3>
              <div className="space-y-2">
                {industries.map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < industries.length - 1 ? "1px solid #232A36" : "none" }}>
                    <span className="flex items-center justify-center w-7 h-7 shrink-0" style={{ background: "rgba(74,95,189,0.12)", borderRadius: "4px", color: "#4A5FBD" }}>{ind.icon}</span>
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
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-12" style={{ color: "#E9EBEF" }}>Common <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Questions</em></motion.h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Lovable Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us your idea and we'll scope it out in 24 hours.</p>
          <ContactForm defaultService="lovable" />
        </div>
      </section>
    </div>
  );
}
