"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Database, Zap, Globe, Shield, Star, ChevronDown, ArrowRight, Layers, Users, ShoppingBag, DollarSign, GraduationCap, Bot, HeartPulse, Truck, Home as HomeIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
    <div style={{ border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold" style={{ color: "#E9EBEF" }} data-testid={`faq-bubble-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
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
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5" /> },
  { label: "Client Portals", icon: <Users className="w-5 h-5" /> },
  { label: "Fintech Apps", icon: <DollarSign className="w-5 h-5" /> },
  { label: "AI-Powered Tools", icon: <Bot className="w-5 h-5" /> },
  { label: "Education Platforms", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Healthcare Apps", icon: <HeartPulse className="w-5 h-5" /> },
  { label: "Logistics & Delivery", icon: <Truck className="w-5 h-5" /> },
  { label: "Real Estate Tools", icon: <HomeIcon className="w-5 h-5" /> },
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
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <span className="text-base">◉</span> Bubble Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Full-Stack Web Apps Built <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Without Code</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft builds production-ready web applications on Bubble — with proper data architecture, workflow logic, and third-party integrations — so what launches is ready for real users, not just a prototype.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold" data-testid="button-bubble-start" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start Your Project</button></Link>
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" data-testid="button-bubble-call" style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}>Book a Call <ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </motion.div>
          {/* Bubble app mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm z-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#161B26", borderBottom: "1px solid #232A36" }}>
                <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                <span className="text-xs text-white/30 ml-2">ClientHub · Workspace</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {[{ l: "Active Clients", v: "38" }, { l: "Open Tasks", v: "112" }, { l: "Invoices Sent", v: "26" }, { l: "Paid This Month", v: "$18.4k" }].map((s, i) => (
                    <div key={i} className="p-2" style={{ background: "#161B26", borderRadius: "4px" }}>
                      <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
                      <div className="text-[10px]" style={{ color: "#8A93A3" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["Acme Co · 4 deliverables due", "Northwind · invoice paid", "Globex · new client onboarded"].map((r, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2" style={{ background: "#161B26", borderRadius: "4px" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span className="text-xs" style={{ color: "#E9EBEF" }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[{ stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your app" }, { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after launch" }, { stat: "2025", label: "Studio Launched", sub: "Built for startups and scaleups" }].map((s, i) => (
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>What Makes KinetixSoft a Strong <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Bubble Partner</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>Bubble is powerful enough to build real production apps — which also means it's easy to build something that breaks under load. Here's how we keep it solid.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Database className="w-6 h-6" />, title: "Data Structure First", desc: "We design your database schema before touching the canvas, so the app's foundation holds up as data grows." },
            { icon: <Zap className="w-6 h-6" />, title: "Workflows That Actually Work", desc: "Bubble workflows can get messy fast. We keep them clean, documented, and debuggable from day one." },
            { icon: <Globe className="w-6 h-6" />, title: "Real API Integrations", desc: "Stripe, Brevo, OpenAI, Zapier — we connect the tools your business already uses, not just what's in the plugin store." },
            { icon: <Shield className="w-6 h-6" />, title: "Privacy Rules Done Right", desc: "Bubble's privacy and access rules are powerful and easy to get wrong. We configure them correctly from the start." },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-7 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>Our Bubble Development <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Services</em></motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Validate Before You Build", title: "Product Strategy", accent: "& Scoping" },
            { n: "02", eyebrow: "Interfaces People Enjoy", title: "Bubble UI/UX", accent: "Design" },
            { n: "03", eyebrow: "No Code, Real Logic", title: "Custom Bubble", accent: "App Builds" },
            { n: "04", eyebrow: "Connect Your Stack", title: "API & Third-Party", accent: "Integrations" },
            { n: "05", eyebrow: "A Second Opinion", title: "Bubble App", accent: "Audits" },
            { n: "06", eyebrow: "We Stay After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="p-6 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <span className="text-xs font-bold px-2 py-1" style={{ color: "#4A5FBD", background: "rgba(74,95,189,0.12)", borderRadius: "4px" }}>{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{s.title} <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>{s.accent}</em></h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-12" style={{ color: "#E9EBEF" }}>How a Bubble <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Build</em> Runs</motion.h2>
        <div>
          {process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="grid gap-5 py-8" style={{ gridTemplateColumns: "40px 1fr", borderBottom: i < process.length - 1 ? "1px solid #232A36" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#4A5FBD", opacity: 0.5, paddingTop: 2 }}>0{i + 1}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#E9EBEF" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES + CTA */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>Built for Founders Who Need to <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Move Fast</em></h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#8A93A3" }}>KinetixSoft works with founders validating a first idea and with growing teams that need a scalable web product without a full engineering hire. Either way, you get a working web app in weeks — with proper data structure that won't need a rebuild, at a lower cost than custom-coded development.</p>
              <Link href="/contact"><button className="h-11 px-6 text-sm font-semibold w-fit flex items-center gap-2" data-testid="button-bubble-conversation" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start a Conversation <ArrowRight className="w-4 h-4" /></button></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10" style={{ background: "#161B26", borderLeft: "1px solid #232A36" }}>
              <h3 className="text-lg font-semibold mb-5" style={{ color: "#E9EBEF" }}>Industries We Build For</h3>
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
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Bubble Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us your idea and we'll scope it out in 24 hours.</p>
          <ContactForm defaultService="bubble" />
        </div>
      </section>
    </div>
  );
}
