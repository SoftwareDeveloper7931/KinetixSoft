"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Database, Zap, Shield, Users, Star, ChevronDown, ArrowRight, BarChart2, Settings, Globe, Layers, DollarSign, GraduationCap, ShoppingBag, Home as HomeIcon, Truck, Bot, HeartPulse } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
  { label: "Real Estate & Property", icon: <HomeIcon className="w-5 h-5" /> },
  { label: "Professional Services", icon: <Users className="w-5 h-5" /> },
  { label: "Logistics & Operations", icon: <Truck className="w-5 h-5" /> },
  { label: "SaaS & Technology", icon: <Layers className="w-5 h-5" /> },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5" /> },
  { label: "Education & Training", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "E-commerce & Retail", icon: <ShoppingBag className="w-5 h-5" /> },
  { label: "Financial Services", icon: <DollarSign className="w-5 h-5" /> },
  { label: "Construction & Contracting", icon: <Settings className="w-5 h-5" /> },
];

export default function PodioContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <Database className="w-4 h-4" /> Podio Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              Custom <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Podio</em> Workspaces That Replace Spreadsheets
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>KinetixSoft builds Podio CRM systems, workflow automations, and operational tools for growing teams. We take you from scattered data and manual processes to a structured system your whole team can actually use.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold" data-testid="button-podio-start" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>Start Your Project</button></Link>
              <Link href="/contact"><button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}>Book a Call <ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </motion.div>
          {/* Dashboard mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[380px]">
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm p-5 z-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                <span className="text-xs text-white/30 ml-2">OpsFlow · Pipeline</span>
              </div>
              <div className="space-y-2">
                {["Lead Qualified → Discovery Call", "Discovery Call → Proposal Sent", "Proposal → Contract Signed", "Contract → Onboarding"].map((stage, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5" style={{ background: "#161B26", borderRadius: "4px", border: "1px solid #232A36" }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ["#4A5FBD", "#C9A86A", "#4ABD7A", "#5A6FCC"][i] }} />
                    <span className="text-xs" style={{ color: "#E9EBEF" }}>{stage}</span>
                    <span className="ml-auto text-xs" style={{ color: "#8A93A3" }}>{[3, 7, 2, 4][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid #232A36" }}>
                <div className="flex items-center justify-between text-xs" style={{ color: "#8A93A3" }}>
                  <span>Pipeline value</span><span style={{ color: "#4A5FBD", fontWeight: 600 }}>$148,500</span>
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>Why Choose KinetixSoft for Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Podio Build</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>A Podio workspace is only as good as the person who built it. Here's how we approach every Podio project.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Database className="w-6 h-6" />, title: "Real Podio Depth", desc: "We don't just create apps and fields — we design data models that make sense for your actual workflows, so your team uses the system instead of going back to email." },
            { icon: <Zap className="w-6 h-6" />, title: "Automation That Works", desc: "Manual tasks slow teams down. We build Podio automations and GlobiFlow/Citrix workflows that eliminate repetitive work without adding fragility." },
            { icon: <Shield className="w-6 h-6" />, title: "Secure by Default", desc: "User roles, permissions, and access controls are part of every build — not an afterthought — so your data stays with the right people." },
            { icon: <Globe className="w-6 h-6" />, title: "Connected to Your Stack", desc: "Podio doesn't live in isolation. We connect it to your CRM, email, calendar, accounting software, and any other tool your team depends on." },
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
                {["Prospect", "Discovery", "Proposal", "Negotiation", "Won"].map((stage, i) => (
                  <div key={i} className="flex items-center gap-3 p-2" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "4px" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4A5FBD" }} />
                    <span className="text-xs" style={{ color: "#E9EBEF" }}>{stage}</span>
                    <div className="ml-auto flex gap-1">{Array(Math.max(1, 5 - i)).fill(0).map((_, j) => <div key={j} className="w-1 h-4 rounded-sm" style={{ background: j === 0 ? "#4A5FBD" : "#232A36" }} />)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">{["CRM", "Podio", "Workflow Automation"].map(t => <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>)}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>OpsFlow</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>A fully custom Podio CRM and operations hub built for a professional services firm managing 80+ active clients. Automated onboarding, deal tracking, invoicing triggers, and client communication — all in one place.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>"Before KinetixSoft, we were running the whole business out of spreadsheets. Now everything lives in Podio and actually gets done."</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>S</div>
                <div><div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Sarah Malik</div><div className="text-xs eyebrow">Operations Director, OpsFlow</div></div>
                <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-14 text-center" style={{ color: "#E9EBEF" }}>How We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Help</em></motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Turn Requirements Into Structure", title: "Podio Workspace", accent: "Architecture" },
            { n: "02", eyebrow: "Eliminate Manual Work", title: "Workflow &", accent: "Automation Setup" },
            { n: "03", eyebrow: "Bring Your Data In", title: "Data Migration", accent: "& Import" },
            { n: "04", eyebrow: "Connect Your Full Stack", title: "Third-Party", accent: "Integrations" },
            { n: "05", eyebrow: "We Stay Accountable", title: "Training &", accent: "Team Onboarding" },
            { n: "06", eyebrow: "We Don't Disappear", title: "Ongoing Support", accent: "& Expansion" },
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
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Have You <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Outgrown</em> Spreadsheets?</h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#8A93A3" }}>If your team is managing clients, projects, or operations out of Excel, you're already slowing down. Podio gives you structure without the rigidity of enterprise software — and we'll build it around the way your team already works.</p>
              <Link href="/contact">
                <button className="h-11 px-6 text-sm font-semibold w-fit flex items-center gap-2" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>
                  Get a Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
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
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Start Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Podio Project</em></h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us about your team and we'll get back to you within one business day.</p>
          <ContactForm defaultService="podio" />
        </div>
      </section>
    </div>
  );
}
