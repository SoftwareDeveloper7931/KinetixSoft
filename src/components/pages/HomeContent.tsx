"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Bot, Zap, Eye, TrendingUp, Star, ChevronDown,
  Phone, Mail, MapPin, Code2, DollarSign, Layers, Users,
  GraduationCap, Home as HomeIcon, ShoppingBag, HeartPulse, Truck,
  Sparkles, CheckCircle2, Shield, ArrowUpRight, Cpu
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";
import { Hero3DVisual } from "@/components/Hero3DVisual";
import { CyberGrid3D } from "@/components/CyberGrid3D";
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
    <div className="rounded-xl overflow-hidden glass-card transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-home-${q.slice(0, 15).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white transition-colors hover:text-[#00A3DE]"
      >
        <span className="text-base">{q}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${open ? "bg-[#FF2D95]/20 text-[#FF5CAE]" : "bg-white/5 text-[#00A3DE]"}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PodioLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-[0_4px_16px_rgba(0,123,167,0.3)]">
      <img src="/podio-logo.jfif" alt="Podio" className="w-12 h-12 object-cover" />
    </div>
  );
}

function BubbleLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-[0_4px_16px_rgba(0,123,167,0.3)]">
      <img src="/bubble-logo.png" alt="Bubble" className="w-10 h-10 object-contain" />
    </div>
  );
}

function LovableLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-12 h-12 drop-shadow-[0_4px_16px_rgba(255,45,149,0.35)]" fill="none">
      <rect width="60" height="60" rx="14" fill="#1C141E" stroke="#FF2D95" strokeWidth="2" />
      <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="#FF2D95">♥</text>
      <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF5CAE" fontFamily="sans-serif">lovable</text>
    </svg>
  );
}

const industries = [
  { label: "AI Apps & Agents", icon: <Bot className="w-4 h-4" /> },
  { label: "Fintech & Forecasting", icon: <DollarSign className="w-4 h-4" /> },
  { label: "SaaS Platforms", icon: <Layers className="w-4 h-4" /> },
  { label: "Social & Community", icon: <Users className="w-4 h-4" /> },
  { label: "EdTech & Learning", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Real Estate Portals", icon: <HomeIcon className="w-4 h-4" /> },
  { label: "E-Commerce Marketplaces", icon: <ShoppingBag className="w-4 h-4" /> },
  { label: "Health & Telemedicine", icon: <HeartPulse className="w-4 h-4" /> },
  { label: "Logistics & Fleet", icon: <Truck className="w-4 h-4" /> },
];

const platforms = [
  { name: "FlutterFlow", description: "Native iOS, Android & Web apps with Google Flutter Impeller engine", href: "/flutterflow", glow: "cerulean" as const, logo: <div className="w-12 h-12 rounded-xl bg-[#007BA7]/20 border border-[#007BA7]/40 flex items-center justify-center shadow-[0_4px_16px_rgba(0,123,167,0.35)]"><SiFlutter className="w-7 h-7 text-[#00A3DE]" /></div> },
  { name: "Lovable", description: "AI-native full-stack web applications and scalable SaaS systems", href: "/lovable", glow: "rose" as const, logo: <LovableLogo /> },
  { name: "Retool", description: "High-density enterprise dashboards, CRM bridges & internal operations", href: "/retool", glow: "cerulean" as const, logo: <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.25)]"><SiRetool className="w-7 h-7 text-amber-400" /></div> },
  { name: "Podio", description: "Bespoke CRM workspaces, automated pipeline tracking & task routing", href: "/podio", glow: "cerulean" as const, logo: <PodioLogo /> },
  { name: "Replit", description: "Full-stack Python/Node applications, background microservices & AI agents", href: "/replit-platform", glow: "rose" as const, logo: <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(249,115,22,0.25)]"><SiReplit className="w-7 h-7 text-orange-400" /></div> },
  { name: "Bubble", description: "Production no-code web portals, complex relational logic & payment flows", href: "/bubble", glow: "cerulean" as const, logo: <BubbleLogo /> },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] relative overflow-hidden">
      
      {/* HERO SECTION WITH 3D MOTION CENTERPIECE */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-[#007BA7]/40 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2D95] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00A3DE] font-semibold">
                Engineering Studio · Est. 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.08]"
            >
              Build the Future. <br />
              <span className="text-gradient-duo">Engineered in 3D Motion.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-[#94A3B8] mb-8 max-w-2xl leading-relaxed"
            >
              KinetixSoft builds production-ready mobile apps, web applications, and internal tools
              using <strong className="text-white">FlutterFlow</strong>, <strong className="text-white">Lovable</strong>, <strong className="text-white">Retool</strong>, <strong className="text-white">Podio</strong>, and <strong className="text-white">Replit</strong>. Rapid execution without technical debt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <button
                  data-testid="button-hero-get-in-touch"
                  className="w-full sm:w-auto h-13 px-8 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white btn-duo"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <button
                  data-testid="button-hero-view-services"
                  className="w-full sm:w-auto h-13 px-8 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 btn-ghost-cyber"
                >
                  <Sparkles className="w-4 h-4 text-[#00A3DE]" />
                  <span>Explore Platforms</span>
                </button>
              </Link>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3DE]" />
                <span>100% Founder-Led Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF2D95]" />
                <span>Impeller 120 FPS Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3DE]" />
                <span>Enterprise Security Hardened</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Kinetic Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3DVisual />
          </div>

        </div>
      </section>

      {/* HORIZON CYBER GRID */}
      <CyberGrid3D />

      {/* METRICS & STATS BAR */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct senior architect access on every sprint", glow: "cerulean" as const },
            { stat: "4-10 Wk", label: "Typical Delivery", sub: "Production deployment with test automation", glow: "rose" as const },
            { stat: "50+", label: "Features Shipped", sub: "From complex DB schemas to custom APIs", glow: "cerulean" as const },
            { stat: "5.0 ★", label: "Client Satisfaction", sub: "Trusted by founders across US, UK & worldwide", glow: "rose" as const },
          ].map((s, i) => (
            <Card3D key={i} glowColor={s.glow} className="p-6 text-center">
              <div className={`text-3xl font-extrabold mb-1.5 ${s.glow === "rose" ? "text-gradient-rose" : "text-gradient-cerulean"}`}>
                {s.stat}
              </div>
              <div className="font-semibold text-white mb-1">{s.label}</div>
              <div className="text-xs text-[#94A3B8]">{s.sub}</div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* PICK YOUR PLATFORM (3D TILT CARDS) */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#00A3DE] bg-[#007BA7]/10 border border-[#007BA7]/30 mb-4">
            <Cpu className="w-3.5 h-3.5" /> High-Performance Stacks
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Pick Your <span className="text-gradient-duo">Platform</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">
            We build on whichever platform actually fits your product's architecture — not a generic one-size-fits-all default.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <Link key={i} href={p.href}>
              <Card3D glowColor={p.glow} className="p-7 h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    {p.logo}
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[#00A3DE]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00A3DE] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-6 text-xs font-semibold uppercase tracking-wider" style={{ color: p.glow === "rose" ? "#FF5CAE" : "#00A3DE" }}>
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card3D>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY: CASHNIX */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#FF5CAE] bg-[#FF2D95]/10 border border-[#FF2D95]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Featured Production Build
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Work We've <span className="text-gradient-rose">Shipped</span>
          </h2>
        </div>

        <Link href="/case-studies/cashnix" className="block" aria-label="Read Cashnix case study">
          <Card3D glowColor="dual" className="overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Visual Mockups */}
              <div className="lg:col-span-6 relative p-8 sm:p-12 flex items-center justify-center min-h-[340px] bg-gradient-to-br from-[#12141C] to-[#0A0A0A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,167,0.25)_0%,transparent_70%)]" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-[170px] sm:w-[190px] aspect-[9/19] rounded-[24px] overflow-hidden border border-[#007BA7]/40 shadow-[0_15px_40px_rgba(0,123,167,0.35)] bg-[#0A0A0A] transition-transform duration-500 hover:scale-105">
                    <img
                      src="/images/cashnix/cashnix-screen-1.png"
                      alt="Cashnix FlutterFlow App Dashboard"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="hidden sm:block w-[140px] aspect-[9/19] rounded-[22px] overflow-hidden border border-[#FF2D95]/30 shadow-[0_10px_30px_rgba(255,45,149,0.25)] opacity-80 -rotate-3 hover:opacity-100 transition-opacity bg-[#0A0A0A]">
                    <img
                      src="/images/cashnix/cashnix-screen-2.png"
                      alt="Cashnix Cash Flow Forecasting"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Copy & Details */}
              <div className="lg:col-span-6 p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {["FinTech", "FlutterFlow", "Financial Modeling"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full font-mono text-[#00A3DE] bg-[#007BA7]/15 border border-[#007BA7]/30"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#FF2D95]/30 bg-[#FF2D95]/10 text-[#FF5CAE] font-medium">
                    Google Play Live
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/images/cashnix/cashnix-icon.png"
                    alt="Cashnix App Icon"
                    className="w-10 h-10 rounded-xl border border-white/10 shadow-md object-cover"
                  />
                  <h3 className="text-3xl font-bold text-white">Cashnix</h3>
                </div>

                <p className="text-sm sm:text-base text-[#94A3B8] mb-6 leading-relaxed">
                  A high-performance financial forecasting mobile application enabling users to model what-if scenarios, track cash flow KPIs, and project future balances from transaction histories.
                </p>

                <blockquote className="pl-4 italic text-sm mb-6 border-l-2 border-[#007BA7] text-[#E2E8F0] bg-white/5 p-3 rounded-r-lg">
                  "We came in with a complex forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">FinTech Founder, US</div>
                    <div className="text-xs text-[#00A3DE]">Cashnix Client</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF2D95] text-[#FF2D95]" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Card3D>
        </Link>
      </section>

      {/* CORE CAPABILITIES / WHAT YOU GET */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#00A3DE] bg-[#007BA7]/10 border border-[#007BA7]/30 mb-4">
            <Shield className="w-3.5 h-3.5" /> Architectural Rigor
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            What You Actually <span className="text-gradient-cerulean">Get</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">
            We engineer software designed to scale to tens of thousands of active users without needing an emergency rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Bot className="w-6 h-6 text-[#00A3DE]" />,
              title: "AI-Native Engineering From Day One",
              desc: "We leverage modern AI tools to accelerate development velocity while upholding human-verified software architecture and clean code standards.",
              glow: "cerulean" as const,
            },
            {
              icon: <Zap className="w-6 h-6 text-[#FF5CAE]" />,
              title: "Speed Without Technical Debt",
              desc: "By designing clean data models and modular component trees from sprint 1, we deliver speed without fragile shortcuts that haunt you later.",
              glow: "rose" as const,
            },
            {
              icon: <Eye className="w-6 h-6 text-[#00A3DE]" />,
              title: "Transparent Sprint Milestones",
              desc: "Real-time visibility into your codebase, staging environments, and sprint deliverables with weekly demos and async Loom walk-throughs.",
              glow: "cerulean" as const,
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-[#FF5CAE]" />,
              title: "Built to Handle Serious Growth",
              desc: "Serverless proxies, Firebase Custom Claims RBAC, and Supabase indexes that support growth smoothly without ballooning cloud bills.",
              glow: "rose" as const,
            },
          ].map((f, i) => (
            <Card3D key={i} glowColor={f.glow} className="p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed text-sm">{f.desc}</p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Industries We've <span className="text-gradient-rose">Built For</span>
          </h2>
          <p className="text-base text-[#94A3B8]">
            Specialized domain logic across high-growth digital sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 p-4 rounded-xl glass-card hover:border-[#007BA7]/50 transition-all hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-lg bg-[#007BA7]/15 border border-[#007BA7]/30 flex items-center justify-center text-[#00A3DE]">
                {ind.icon}
              </div>
              <span className="text-sm font-semibold text-white">{ind.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-[#FF5CAE] bg-[#FF2D95]/10 border border-[#FF2D95]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Let's Build An App That <span className="text-gradient-duo">Ships</span>
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Whether you have an early concept wireframe or an existing app needing architectural rescue,
              share your goals. We'll respond with clear feasibility analysis and a concrete roadmap.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5 text-[#00A3DE]" />, text: "+92 307 9575055" },
                { icon: <Mail className="w-5 h-5 text-[#FF5CAE]" />, text: "info@kinetixsoft.com" },
                { icon: <MapPin className="w-5 h-5 text-[#00A3DE]" />, text: "Lahore, Pakistan (Serving Globally)" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3.5 text-sm font-medium text-white">
                  <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card3D glowColor="dual" className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white mb-2">Technical Scoping Brief</h3>
              <p className="text-sm text-[#94A3B8] mb-6">
                Tell us about your project requirements and expected timeline.
              </p>
              <ContactForm />
            </Card3D>
          </div>

        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-gradient-cerulean">Questions</span>
          </h2>
          <p className="text-[#94A3B8] text-sm">
            Everything you need to know about working with KinetixSoft.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 mb-12">
        <Card3D glowColor="dual" className="p-12 sm:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#007BA7]/10 via-transparent to-[#FF2D95]/10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#FF5CAE] bg-[#FF2D95]/10 border border-[#FF2D95]/30 mb-6">
              <Star className="w-3.5 h-3.5 fill-[#FF2D95]" />
              <span>Ready for Immediate Deployment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Let's Bring Your Vision <span className="text-gradient-duo">To Life</span>
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Join founders and product teams building scalable software on FlutterFlow, Lovable, Retool, and Replit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button
                  data-testid="button-cta-getstarted"
                  className="h-13 px-8 rounded-xl font-semibold text-sm flex items-center gap-2 btn-duo"
                >
                  <span>Book Scoping Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </Card3D>
      </section>

    </div>
  );
}
