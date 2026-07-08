"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Layout, Zap, Shield, Database, Star, ChevronDown, ArrowRight, BarChart2, Settings, Users, Layers, DollarSign, Globe, Bot } from "lucide-react";
import { SiRetool } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";

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

export default function RetoolContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <SiRetool className="w-4 h-4" /> Retool Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              Internal Tools That <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Actually Get Used</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft builds admin dashboards, ops tools, and data interfaces on Retool for teams that have outgrown spreadsheets. Purpose-built software that your team can actually operate — without needing a developer nearby.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold" data-testid="button-retool-start" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start Your Project</button></Link>
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}>Book a Call <ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </motion.div>
          {/* Admin panel mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm z-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#161B26", borderBottom: "1px solid #232A36" }}>
                <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                <span className="text-xs text-white/30 ml-2">ClaimDesk · Admin</span>
              </div>
              <div className="p-4 space-y-2">
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {[{ l: "Open Claims", v: "47" }, { l: "Processing", v: "12" }, { l: "Resolved", v: "203" }].map((s, i) => (
                    <div key={i} className="p-2 text-center" style={{ background: "#161B26", borderRadius: "4px" }}>
                      <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
                      <div className="text-[10px]" style={{ color: "#8A93A3" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                {["CLM-0041 · Pending Review", "CLM-0040 · Approved", "CLM-0039 · Rejected", "CLM-0038 · Pending Review"].map((row, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2" style={{ background: "#161B26", borderRadius: "4px" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#C9A86A", "#4ABD7A", "#E55353", "#C9A86A"][i] }} />
                    <span className="text-xs" style={{ color: "#E9EBEF" }}>{row}</span>
                  </div>
                ))}
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>Why Build Internal Tools with <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>KinetixSoft</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>Internal tools fail when they're hard to use or don't connect to the right data. Here's how we avoid that.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Layout className="w-6 h-6" />, title: "Real Retool Depth", desc: "We write proper SQL and REST queries — not just point-and-click. Every tool we build is connected to real data sources and built to handle edge cases." },
            { icon: <Zap className="w-6 h-6" />, title: "Fast to Deploy", desc: "Retool's component model lets us ship working internal tools in days, not sprints. You'll be using the tool before you've forgotten what you asked for." },
            { icon: <Shield className="w-6 h-6" />, title: "Secure for Operations", desc: "Role-based access, audit logs, and data masking are included in every build — not optional extras." },
            { icon: <Database className="w-6 h-6" />, title: "Connected to Your Data", desc: "Whether your data lives in Postgres, Airtable, an API, or a spreadsheet, we'll connect Retool to it and make it useful." },
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold" style={{ color: "#E9EBEF" }}>Claims Queue</span>
                  <span className="text-xs" style={{ color: "#4A5FBD" }}>47 open</span>
                </div>
                {["#CLM-041 · Auto Claim", "#CLM-040 · Home Fire", "#CLM-039 · Vehicle", "#CLM-038 · Medical"].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "4px" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#C9A86A", "#4ABD7A", "#E55353", "#C9A86A"][i] }} />
                    <span className="text-[10px]" style={{ color: "#E9EBEF" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">{["InsurTech", "Retool", "Admin Dashboard"].map(t => <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>)}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>ClaimDesk</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>A claims management dashboard built on Retool for an insurance operations team. Handlers can review, approve, reject, and escalate claims from a single interface connected to their PostgreSQL backend — replacing a slow, email-based process.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>"Claims that used to take 3 days to process now get handled in the same morning. KinetixSoft built exactly what we needed."</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>R</div>
                <div><div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Raza Ahmed</div><div className="text-xs eyebrow">Head of Operations, ClaimDesk</div></div>
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
            { n: "01", eyebrow: "Map Before You Build", title: "Discovery &", accent: "Scoping" },
            { n: "02", eyebrow: "Hook Into Your Data", title: "Database &", accent: "API Connections" },
            { n: "03", eyebrow: "UI That Makes Sense", title: "Admin UI", accent: "Development" },
            { n: "04", eyebrow: "From Simple to Complex", title: "Workflow", accent: "Automation" },
            { n: "05", eyebrow: "Right People, Right Access", title: "Role & Permission", accent: "Setup" },
            { n: "06", eyebrow: "We Stay After Launch", title: "Ongoing Support", accent: "& Expansion" },
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
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Retool Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us what your team needs and we'll scope it out in 24 hours.</p>
          <ContactForm defaultService="retool" />
        </div>
      </section>
    </div>
  );
}
