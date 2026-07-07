"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Bot, Zap, Eye, TrendingUp, Star, ChevronDown,
  Phone, Mail, MapPin, Code2, DollarSign, Layers, Users,
  GraduationCap, Home as HomeIcon, ShoppingBag, HeartPulse, Truck
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";

const faqs = [
  { q: "What makes KinetixSoft different from other development teams?", a: "We focus on the parts most teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo." },
  { q: "Can you build a fully custom app, or do you rely on templates?", a: "Every build starts from your actual requirements. We use platform components for speed, but the logic, design, and integrations are custom to your product." },
  { q: "Will the app still work if my user base grows quickly?", a: "Yes — we design the data model and backend connections with growth in mind from the first sprint, so scaling up doesn't require a rebuild." },
  { q: "How long does a typical build take?", a: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs." },
  { q: "What does a project usually cost?", a: "Cost depends on complexity — a simple MVP and a multi-integration platform are priced very differently. We'll give you a real number after a scoping call." },
  { q: "Is UI/UX design included, or do I need to bring my own designs?", a: "Design is part of the process. We can work from your existing designs or create the UI/UX from scratch as part of the build." },
  { q: "Do you support the app after it launches?", a: "Yes — we offer ongoing maintenance, monitoring, and feature updates after launch so the app keeps running smoothly." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} data-testid={`faq-home-${q.slice(0, 15).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold"
        style={{ color: "#E9EBEF" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#161B26"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: "#4A5FBD" }} />
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

function PodioLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
      <rect width="60" height="60" rx="12" fill="#E8F5E9" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4CAF50" fontFamily="sans-serif">Podio</text>
    </svg>
  );
}

function LovableLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
      <rect width="60" height="60" rx="12" fill="#FFF0F0" />
      <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#E53935">♥</text>
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E53935" fontFamily="sans-serif">lovable</text>
    </svg>
  );
}

const industries = [
  { label: "AI Apps", icon: <Bot className="w-4 h-4" /> },
  { label: "Fintech & Payments", icon: <DollarSign className="w-4 h-4" /> },
  { label: "SaaS Platforms", icon: <Layers className="w-4 h-4" /> },
  { label: "Social Apps", icon: <Users className="w-4 h-4" /> },
  { label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Real Estate", icon: <HomeIcon className="w-4 h-4" /> },
  { label: "Marketplaces", icon: <ShoppingBag className="w-4 h-4" /> },
  { label: "Healthcare", icon: <HeartPulse className="w-4 h-4" /> },
  { label: "Logistics & On-Demand", icon: <Truck className="w-4 h-4" /> },
];

const platforms = [
  { name: "Podio", description: "CRM & workflow automation", href: "/podio", logo: <PodioLogo /> },
  { name: "FlutterFlow", description: "Mobile & web app development", href: "/flutterflow", logo: <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><SiFlutter className="w-6 h-6 text-blue-500" /></div> },
  { name: "Lovable", description: "AI-powered web apps", href: "/lovable", logo: <LovableLogo /> },
  { name: "Replit", description: "Full-stack AI development", href: "/replit-platform", logo: <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><SiReplit className="w-6 h-6 text-orange-500" /></div> },
  { name: "Retool", description: "Internal tools & dashboards", href: "/retool", logo: <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center"><SiRetool className="w-6 h-6 text-yellow-600" /></div> },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen relative" style={{ background: "#0A0E14" }}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-office.jpg" alt="KinetixSoft Software Agency" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-[#0A0E14] z-10" />
        </div>
        <div className="relative z-30 w-full pt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <div className="flex flex-col items-center text-center w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6" style={{ border: "1px solid #232A36", borderRadius: "6px", color: "#8A93A3", background: "rgba(74,95,189,0.08)" }}>
                  Engineering Studio · Est. 2025
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}
              >
                The <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>KinetixSoft</em> is Here <br />
                Building the Future Together
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "#8A93A3" }}
              >
                From idea to launch, we deliver custom digital solutions that save time, cut costs, and drive results.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
              >
                <Link href="/services">
                  <button className="h-12 px-8 text-sm font-semibold" data-testid="button-view-services"
                    style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                  >View Services</button>
                </Link>
                <Link href="/contact">
                  <button className="h-12 px-8 text-sm font-semibold" data-testid="button-get-in-touch"
                    style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                  >Get in Touch</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your app" },
            { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after launch" },
            { stat: "2025", label: "Studio Launched", sub: "Built specifically for startups and scaleups" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}
              className="p-8 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="text-3xl font-bold mb-1" style={{ color: "#4A5FBD", fontFamily: "Newsreader, serif" }}>{s.stat}</div>
              <div className="font-semibold mb-1" style={{ color: "#E9EBEF" }}>{s.label}</div>
              <div className="text-sm" style={{ color: "#8A93A3" }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT YOU ACTUALLY GET */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">02</span><span className="ledger-line" /></div>
          <h2 className="text-3xl md:text-4xl" style={{ color: "#E9EBEF" }}>What You Actually <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Get</em></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: <Bot className="w-6 h-6" />, title: "Built AI-Native From Day One", desc: "We default to AI-assisted development on every project, which means faster turnaround without sacrificing code quality or structure." },
            { icon: <Zap className="w-6 h-6" />, title: "Speed Without the Technical Debt", desc: "We move quickly because the platforms we build on are mature — not because we're cutting corners you'll end up paying for later." },
            { icon: <Eye className="w-6 h-6" />, title: "Full Visibility, Every Step", desc: "You'll always know exactly where your project stands, from kickoff through launch and into the support window after." },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Built to Handle Real Growth", desc: "Every app is architected so a spike in users is a good problem, not an emergency rebuild." },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-8 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{f.icon}</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">03</span><span className="ledger-line" /></div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl" style={{ color: "#E9EBEF" }}>
            Work We've <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Shipped</em>
          </motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-hidden max-w-4xl mx-auto" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative p-10 flex items-center justify-center min-h-[260px]" style={{ background: "#161B26" }}>
              <div className="relative z-10 w-full max-w-[200px] space-y-3">
                <div className="p-3" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Savings Goal</span>
                    <span className="text-xs text-green-400 font-bold">+12%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full"><div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" /></div>
                </div>
                <div className="p-3" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Monthly Forecast</span>
                    <span className="text-[10px] text-cyan-400">$</span>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {[40, 55, 45, 70, 60, 80, 65].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/60 to-blue-500/30" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="p-3" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">KPI Score</div>
                  <div className="text-xl font-bold text-white">94<span className="text-xs text-muted-foreground">/100</span></div>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["FinTech", "FlutterFlow", "Forecasting"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>Cashnix</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>A financial forecasting app that lets users set savings goals, model what-if scenarios, track financial KPIs, and view monthly and yearly forecasts generated automatically from their transaction history.</p>
              <blockquote className="pl-4 italic text-sm mb-5" style={{ borderLeft: "2px solid #4A5FBD", color: "#E9EBEF" }}>
                "We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-sm" style={{ borderRadius: "6px", background: "#4A5FBD", color: "#E9EBEF" }}>A</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>Amir Khan</div>
                  <div className="text-xs eyebrow">Founder of Cashnix</div>
                </div>
                <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PICK YOUR PLATFORM */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">04</span><span className="ledger-line" /></div>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>Pick Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Platform</em></h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>We build on whichever platform actually fits your product — not whichever one we default to out of habit.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {platforms.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Link href={p.href}>
                <div className="p-6 card-hover cursor-pointer group" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }} data-testid={`platform-card-${p.name.toLowerCase()}`}>
                  <div className="mb-4">{p.logo}</div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "#E9EBEF" }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: "#8A93A3" }}>{p.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#4A5FBD" }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHERE WE FOCUS */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-10 md:p-14 max-w-4xl mx-auto" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <div className="ledger-rule mb-6"><span className="ledger-index">05</span><span className="ledger-line" /></div>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#E9EBEF" }}>Where We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Focus</em></h2>
          <p className="text-lg leading-relaxed" style={{ color: "#8A93A3" }}>We're not generalists, and we're not trying to be. Our focus is AI-powered applications built on platforms designed for speed. If you need something that ships in weeks instead of months — and still holds up once real users show up — that's exactly where we operate. No padding, no stalling, no perpetual "almost done." Just shipped products.</p>
        </motion.div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="overflow-hidden" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative p-12 flex items-center justify-center min-h-[300px]" style={{ background: "#161B26" }}
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  {platforms.slice(0, 3).map((p, i) => (
                    <div key={i} className="w-14 h-14 flex items-center justify-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                      <div className="scale-75">{p.logo}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {platforms.slice(3).map((p, i) => (
                    <div key={i} className="w-14 h-14 flex items-center justify-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                      <div className="scale-75">{p.logo}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Code2 className="w-4 h-4" style={{ color: "#4A5FBD" }} />
                  <span className="text-xs eyebrow">5 mature platforms</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <div className="ledger-rule mb-6"><span className="ledger-index">06</span><span className="ledger-line" /></div>
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF" }}>Why This Actually <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Works</em></h2>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>Most dev shops either move too slowly to keep up, or move fast by cutting corners that show up later. We sit in neither camp. The platforms we build on aren't experimental — they're mature tools that have already powered thousands of live products. We know exactly where each one is strong, where it isn't, and how to get the most out of it for your specific build. You're not paying us to experiment on your idea — you're paying us to execute it well.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">07</span><span className="ledger-line" /></div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl" style={{ color: "#E9EBEF" }}>
            Who We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Build For</em>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { n: "01", title: "Founders With", accent: "Vision", rest: ", Not Yet a Dev Team" },
            { n: "02", title: "Startups on a", accent: "Deadline", rest: "" },
            { n: "03", title: "Agencies Promising", accent: "AI", rest: " to Their Clients" },
            { n: "04", title: "Teams Bolting", accent: "AI", rest: " Onto an Existing Product" },
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-8 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="ledger-rule mb-4"><span className="ledger-index">{c.n}</span><span className="ledger-line" /></div>
              <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{c.title} <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>{c.accent}</em>{c.rest}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">08</span><span className="ledger-line" /></div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl" style={{ color: "#E9EBEF" }}>
            Industries We've <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Built For</em>
          </motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12" style={{ border: "1px solid #232A36", borderRadius: "6px", background: "#12161F", padding: "8px 24px" }}
        >
          {industries.map((ind, i) => (
            <div key={i} className="flex items-center gap-3" style={{ padding: "14px 8px", borderBottom: i < industries.length - 2 ? "1px solid #232A36" : "none" }}
              data-testid={`industry-row-${i}`}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#161B26"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
            >
              <span className="shrink-0 font-semibold text-xs w-5" style={{ color: "#8A93A3" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="shrink-0 flex items-center justify-center w-8 h-8" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{ind.icon}</span>
              <span className="text-sm" style={{ color: "#E9EBEF" }}>{ind.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="overflow-hidden" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <div className="ledger-rule mb-6"><span className="ledger-index">09</span><span className="ledger-line" /></div>
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF" }}>What Makes Us <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Different</em></h2>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>Plenty of teams can write code. Fewer will tell you honestly whether an idea is ready to build or needs more thinking first. We'll tell you which one it is, then build accordingly — using whichever platform actually fits the job, not whichever one we're most comfortable defaulting to.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative min-h-[280px] flex items-center justify-center p-10" style={{ background: "#161B26", borderLeft: "1px solid #232A36" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#4A5FBD" }} />
              <div className="p-5 w-full max-w-[260px]" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-2 h-1.5 rounded" style={{ background: "#232A36" }} />
                </div>
                <div className="space-y-2">
                  <div className="h-3 rounded w-3/4" style={{ background: "#232A36" }} />
                  <div className="h-8 rounded border" style={{ background: "rgba(74,95,189,0.15)", borderColor: "#232A36" }} />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 rounded" style={{ background: "#161B26" }} />
                    <div className="h-10 rounded" style={{ background: "#161B26" }} />
                  </div>
                  <div className="h-2 rounded-full w-4/5" style={{ background: "rgba(74,189,120,0.4)" }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="ledger-rule mb-6"><span className="ledger-index">10</span><span className="ledger-line" /></div>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#E9EBEF" }}>Let's Build Your App with a Team That <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Ships</em></h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#8A93A3" }}>Whether you've got a rough sketch of an idea or an app that's outgrown its current build, tell us where things stand. We'll come back with real next steps and an honest estimate — not a sales pitch.</p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+923079575055" },
                { icon: <Mail className="w-5 h-5" />, text: "info@kinetixsoft.com" },
                { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3" style={{ color: "#E9EBEF" }}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{c.icon}</div>
                  {c.text}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full max-w-lg mx-auto lg:ml-auto">
            <div className="p-8" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: "#E9EBEF" }}>Let's Get <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Started</em></h3>
              <p className="mb-8 text-center text-sm" style={{ color: "#8A93A3" }}>Send us a message and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <div className="ledger-rule mb-6"><span className="ledger-index">11</span><span className="ledger-line" /></div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-12" style={{ color: "#E9EBEF" }}>
          Common <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Questions</em>
        </motion.h2>
        <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 mb-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center overflow-hidden relative py-20 px-6" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <div className="absolute inset-0" style={{ background: "rgba(74,95,189,0.05)" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6" style={{ background: "rgba(201,168,106,0.08)", border: "1px solid rgba(201,168,106,0.2)", borderRadius: "6px", color: "#C9A86A" }}>
              <Star className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />Your Trusted Partner
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}</div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-5" style={{ color: "#E9EBEF" }}>We Should <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Talk</em></h2>
            <p className="text-lg mb-10" style={{ color: "#8A93A3" }}>If you're ready to turn an idea into something real, KinetixSoft is ready to build it with you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold" data-testid="button-cta-getstarted"
                  style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                >Get Started</button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2" data-testid="button-cta-schedule"
                  style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                >Schedule Meeting <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
