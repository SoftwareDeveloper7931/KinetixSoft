"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Bot, Zap, Eye, TrendingUp, Star, ChevronDown,
  Phone, Mail, MapPin, Code2, DollarSign, Layers, Users,
  GraduationCap, Home as HomeIcon, ShoppingBag, HeartPulse, Truck,
  Sparkles, CheckCircle2, Shield, ArrowUpRight, Cpu, Smartphone,
  Globe, Database, Rocket, Terminal, Check
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";
import { CyberGrid3D } from "@/components/CyberGrid3D";
import { Hero3DVisual } from "@/components/Hero3DVisual";
import { Agency3DStage } from "@/components/Agency3DStage";
import { Scroll3DDeviceFrame } from "@/components/Scroll3DDeviceFrame";
import { Hero3DParticleCosmos } from "@/components/Hero3DParticleCosmos";
import { AutonomousAutomationShowcase } from "@/components/AutonomousAutomationShowcase";
import { MobileAppArchitectureStage } from "@/components/MobileAppArchitectureStage";
import { AgenticSwarmVisualizer } from "@/components/AgenticSwarmVisualizer";
import { ProjectScopeEstimator } from "@/components/ProjectScopeEstimator";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";

const faqs = [
  { q: "What kind of software can KinetixSoft build for my business?", a: "We build whatever you envision: native mobile apps (iOS & Android via FlutterFlow), scalable web applications & SaaS (Bubble, Lovable, Next.js), bespoke enterprise CRMs & workflow automation (Podio, GlobiFlow, Retool), and custom AI microservices & APIs (Python, FastAPI, Node)." },
  { q: "What makes KinetixSoft different from traditional dev agencies?", a: "Traditional agencies take 9 months, charge six figures, and pass you to junior developers. We are a founder-led studio that delivers production-ready software in 4 to 10 weeks with zero technical debt, direct senior architect access, and complete IP ownership." },
  { q: "Can you build a fully custom app, or do you rely on rigid templates?", a: "Every single build starts from your custom business requirements. We leverage mature low-code frameworks for speed where it makes sense, but the database schemas, serverless logic, custom APIs, and UI/UX design are engineered uniquely for your product." },
  { q: "Will my application scale if our user base grows rapidly?", a: "Yes — we engineer data models, indexing, and serverless proxies specifically for exponential scale. Whether your app has 10 users or 50,000 active users, the architecture handles spikes without requiring an emergency rewrite." },
  { q: "How long does a typical build take from kickoff to launch?", a: "Most MVP and growth builds launch in 4 to 10 weeks depending on custom integrations, backend schemas, and payment logic. We provide a transparent sprint roadmap with weekly demo milestones." },
  { q: "Do I own 100% of the code, IP, and backend accounts?", a: "Yes, absolutely. You retain 100% ownership of your GitHub repositories, database schemas, cloud keys, and app store accounts. There is zero proprietary lock-in." },
  { q: "Do you support the app after it goes live?", a: "Yes — we offer dedicated post-launch SLA support, real-time monitoring, security updates, and ongoing sprint cycles for new feature releases." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden bg-jet-surface/80 border border-jet-border transition-all duration-300 hover:border-cerulean/40">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-home-${q.slice(0, 15).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white transition-colors hover:text-cerulean cursor-pointer"
      >
        <span className="text-base sm:text-lg pr-4">{q}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${open ? "bg-neon-rose/20 text-neon-rose" : "bg-white/5 text-cerulean"}`}>
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
            <p className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-jet-border pt-4">
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
  { label: "AI Apps & Autonomous Agents", icon: <Bot className="w-4 h-4" /> },
  { label: "FinTech & Cash Flow Modeling", icon: <DollarSign className="w-4 h-4" /> },
  { label: "B2B SaaS & Subscription Portals", icon: <Layers className="w-4 h-4" /> },
  { label: "Social Networks & Communities", icon: <Users className="w-4 h-4" /> },
  { label: "EdTech & Interactive Learning", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Real Estate CRMs & Portals", icon: <HomeIcon className="w-4 h-4" /> },
  { label: "Multi-Vendor Marketplaces", icon: <ShoppingBag className="w-4 h-4" /> },
  { label: "HealthTech & Patient Care", icon: <HeartPulse className="w-4 h-4" /> },
  { label: "Logistics & Fleet Dispatch", icon: <Truck className="w-4 h-4" /> },
];

const platforms = [
  { name: "FlutterFlow", description: "Native iOS, Android & Web apps with Google Flutter Impeller engine", href: "/flutterflow", glow: "cerulean" as const, logo: <div className="w-12 h-12 rounded-xl bg-cerulean/20 border border-cerulean/40 flex items-center justify-center shadow-[0_4px_16px_rgba(0,123,167,0.35)]"><SiFlutter className="w-7 h-7 text-cerulean" /></div> },
  { name: "Lovable", description: "AI-native full-stack web applications and scalable SaaS systems", href: "/lovable", glow: "rose" as const, logo: <LovableLogo /> },
  { name: "Retool", description: "High-density enterprise dashboards, CRM bridges & internal operations", href: "/retool", glow: "cerulean" as const, logo: <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.25)]"><SiRetool className="w-7 h-7 text-amber-400" /></div> },
  { name: "Podio", description: "Bespoke CRM workspaces, automated pipeline tracking & task routing", href: "/podio", glow: "cerulean" as const, logo: <PodioLogo /> },
  { name: "Replit", description: "Full-stack Python/Node applications, background microservices & AI agents", href: "/replit-platform", glow: "rose" as const, logo: <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_4px_16px_rgba(249,115,22,0.25)]"><SiReplit className="w-7 h-7 text-orange-400" /></div> },
  { name: "Bubble", description: "Production no-code web portals, complex relational logic & payment flows", href: "/bubble", glow: "cerulean" as const, logo: <BubbleLogo /> },
];

const comparisonMatrix = [
  { feature: "Engineering Engine", us: "Autonomous Multi-Agent Swarms + Senior Architect", agency: "Manual Devs & Broken Hand-offs", freelancer: "Single Person Bottleneck" },
  { feature: "Typical Delivery Speed", us: "4 to 10 Weeks (Self-Verifying PRs)", agency: "6 to 12 Months of Meetings", freelancer: "Unpredictable & Ghost-prone" },
  { feature: "AI & Vector Capabilities", us: "Production Swarms, pgvector & Tool-Calling", agency: "Basic Bolt-on ChatGPT Wrapper", freelancer: "Superficial API Calls" },
  { feature: "Code Quality & Healing", us: "Autonomous Synthesizers & Sentinel Verification", agency: "Manual QA & Delayed Patch Cycles", freelancer: "Fragile Hacks & Technical Debt" },
  { feature: "Code & Model Ownership", us: "100% Client Owned (Weights, Schemas & Repos)", agency: "Often Proprietary Lock-in", freelancer: "Varies & Ambiguous" },
  { feature: "Scale Readiness", us: "Built for 100k+ Users & Low Latency Day 1", agency: "Billed as Phase 2 Milestone", freelancer: "Hits Immediate Wall" },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-jet text-[#F3F4F6] relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 md:px-6 max-w-7xl mx-auto z-20">
        
        {/* AMBIENT CYBER AURA & 3D HORIZON MATRIX (BEHIND HERO) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[560px] pointer-events-none -z-10 overflow-hidden">
          {/* Dual Glow Orbs */}
          <div className="absolute top-8 left-12 sm:left-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cerulean/25 blur-[130px] animate-pulse" />
          <div className="absolute top-12 right-12 sm:right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-neon-rose/25 blur-[130px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          
          {/* 3D Perspective Matrix Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 123, 167, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 45, 149, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 85%)",
            }}
          />

          {/* Laser Accent Beam */}
          <div
            className="absolute top-1/2 left-0 right-0 h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,123,167,0.8) 25%, rgba(255,45,149,0.9) 75%, transparent 100%)",
              boxShadow: "0 0 20px #FF2D95, 0 0 40px #007BA7",
            }}
          />
        </div>

        {/* 2-COLUMN BALANCED HERO GRID (MATCHING PIN 621989398580723128) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LEFT COLUMN: 100% READABLE TYPOGRAPHY (ZERO OVERLAPPING CARDS) */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-jet-surface/90 border border-cerulean/40 mb-6 shadow-[0_0_25px_rgba(0,123,167,0.3)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neon-rose animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00A3DE] font-bold">
                Autonomous Agentic AI · Global Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tight mb-5 leading-[1.05] text-white"
            >
              AUTONOMOUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                AGENTIC AI.
              </span> <br />
              ENGINEERED FOR ANY VISION.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-7 max-w-xl leading-relaxed font-normal"
            >
              Tell us what you want built. From autonomous <strong className="text-white font-semibold">AI Agent Swarms</strong> and scalable <strong className="text-white font-semibold">SaaS Platforms</strong> to high-velocity <strong className="text-white font-semibold">Mobile Apps</strong> and enterprise <strong className="text-white font-semibold">Self-Healing CRMs</strong>. We turn visionary requirements into production reality with zero technical debt.
            </motion.p>

            {/* Quick Capability Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 text-xs font-mono"
            >
              <span className="px-3 py-1.5 rounded-full bg-neon-rose/15 border border-neon-rose/40 text-neon-rose font-semibold flex items-center gap-1.5 hover:bg-neon-rose/25 transition-colors">
                <Cpu className="w-3.5 h-3.5" /> Agent Swarms (Claude 3.5 & GPT-4o)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cerulean/15 border border-cerulean/40 text-[#00A3DE] font-semibold flex items-center gap-1.5 hover:bg-cerulean/25 transition-colors">
                <Smartphone className="w-3.5 h-3.5" /> AI Mobile (Flutter 120 FPS)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-neon-rose/15 border border-neon-rose/40 text-neon-rose font-semibold flex items-center gap-1.5 hover:bg-neon-rose/25 transition-colors">
                <Globe className="w-3.5 h-3.5" /> Web & SaaS (pgvector)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cerulean/15 border border-cerulean/40 text-[#00A3DE] font-semibold flex items-center gap-1.5 hover:bg-cerulean/25 transition-colors">
                <Database className="w-3.5 h-3.5" /> Self-Healing CRMs (Podio & GlobiFlow)
              </span>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link href="/contact" className="group">
                <button
                  data-testid="button-hero-get-in-touch"
                  className="btn-duo px-8 py-4 text-base font-bold shadow-[0_0_35px_rgba(255,45,149,0.4)]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>

              <Link href="/services">
                <button
                  data-testid="button-hero-view-services"
                  className="btn-ghost-cyber px-8 py-4 text-base font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-cerulean" />
                  <span>Explore All Stacks</span>
                </button>
              </Link>
            </motion.div>

            {/* Micro Proof Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/70 font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cerulean" />
                <span>100% Founder-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-rose" />
                <span>Impeller 120 FPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cerulean" />
                <span>Zero-Leak Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-rose" />
                <span>100% IP & Code Ownership</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D KINETIC PARTICLE SCULPTURE (PIN 621989398580723128) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3DParticleCosmos />
          </div>

        </div>

        {/* 3D SCROLL-DRIVEN DEVICE REVEAL (REVERSIBLE ON SCROLL TOP) */}
        <Scroll3DDeviceFrame
          title="KinetixSoft Studio Engine"
          badge="Impeller 120 FPS Native"
          subtitle="kinetixsoft.dev/studio/engine"
        >
          <Agency3DStage />
        </Scroll3DDeviceFrame>

      </section>

      {/* HORIZON CYBER GRID DIVIDER */}
      <CyberGrid3D />

      {/* STUDIO STATS & VELOCITY BAR */}
      <section className="py-14 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct senior architect access on every single sprint", glow: "cerulean" as const },
            { stat: "4-10 Wk", label: "Typical Delivery", sub: "From blank canvas to production launch & app store", glow: "rose" as const },
            { stat: "50+", label: "Features Shipped", sub: "From complex DB schemas to custom API proxies", glow: "cerulean" as const },
            { stat: "5.0 ★", label: "Client Satisfaction", sub: "Trusted by founders across US, UK & worldwide", glow: "rose" as const },
          ].map((s, i) => (
            <Card3D key={i} glowColor={s.glow} className="p-7 text-center">
              <div className={`text-4xl font-extrabold mb-2 font-mono ${s.glow === "rose" ? "text-gradient-rose" : "text-gradient-cerulean"}`}>
                {s.stat}
              </div>
              <div className="font-bold text-white text-base mb-1.5">{s.label}</div>
              <div className="text-xs text-white/60 leading-relaxed">{s.sub}</div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* AUTONOMOUS AUTOMATION SHOWCASE (MATCHING PIN 1107815208384805540) */}
      <AutonomousAutomationShowcase />

      {/* MOBILE APP ARCHITECTURE 3D ORBITAL STAGE (MATCHING PINS 904942118911052510 & 600949144074050374) */}
      <MobileAppArchitectureStage />

      {/* AUTONOMOUS AGENTIC SWARM VISUALIZER */}
      <AgenticSwarmVisualizer />

      {/* INTERACTIVE PROJECT SCOPE ESTIMATOR */}
      <ProjectScopeEstimator />

      {/* PICK YOUR PLATFORM (3D TILT CARDS) */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-cerulean bg-cerulean/10 border border-cerulean/30 mb-4">
            <Cpu className="w-3.5 h-3.5" /> High-Performance Stacks
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            Pick Your <span className="text-gradient-duo">Platform</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            We build on whichever framework actually fits your business model — not a rigid one-size-fits-all default.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <Link key={i} href={p.href} className="group">
              <Card3D glowColor={p.glow} className="p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    {p.logo}
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-cerulean">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cerulean transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-6 text-xs font-semibold uppercase tracking-wider" style={{ color: p.glow === "rose" ? "#FF5CAE" : "#00A3DE" }}>
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Card3D>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY: CASHNIX */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-neon-rose bg-neon-rose/10 border border-neon-rose/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Featured Production Build
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Work We've <span className="text-gradient-rose">Shipped</span>
          </h2>
        </div>

        <Link href="/case-studies/cashnix" className="block group" aria-label="Read Cashnix case study">
          <Card3D glowColor="dual" className="overflow-hidden border border-jet-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Visual Mockups */}
              <div className="lg:col-span-6 relative p-8 sm:p-12 flex items-center justify-center min-h-[340px] bg-gradient-to-br from-[#12141C] to-jet">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,167,0.25)_0%,transparent_70%)]" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-[170px] sm:w-[190px] aspect-[9/19] rounded-[24px] overflow-hidden border border-cerulean/40 shadow-[0_15px_40px_rgba(0,123,167,0.35)] bg-jet transition-transform duration-500 group-hover:scale-105">
                    <img
                      src="/images/cashnix/cashnix-screen-1.png"
                      alt="Cashnix FlutterFlow App Dashboard"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="hidden sm:block w-[140px] aspect-[9/19] rounded-[22px] overflow-hidden border border-neon-rose/30 shadow-[0_10px_30px_rgba(255,45,149,0.25)] opacity-85 -rotate-3 group-hover:opacity-100 transition-opacity bg-jet">
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
                  <span className="text-xs px-2.5 py-0.5 rounded-full border border-neon-rose/30 bg-neon-rose/10 text-neon-rose font-medium">
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

                <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
                  A high-performance financial forecasting mobile application enabling users to model what-if scenarios, track cash flow KPIs, and project future balances from transaction histories.
                </p>

                <blockquote className="pl-4 italic text-sm mb-6 border-l-2 border-cerulean text-[#E2E8F0] bg-white/5 p-3 rounded-r-lg">
                  "We came in with a complex forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">FinTech Founder, US</div>
                    <div className="text-xs text-cerulean">Cashnix Client</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-rose text-neon-rose" />
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
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-cerulean bg-cerulean/10 border border-cerulean/30 mb-4">
            <Shield className="w-3.5 h-3.5" /> Architectural Rigor
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            What You Actually <span className="text-gradient-cerulean">Get</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            We engineer software designed to scale to tens of thousands of active users without needing an emergency rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Bot className="w-6 h-6 text-cerulean" />,
              title: "AI-Native Engineering From Day One",
              desc: "We leverage modern AI tools to accelerate development velocity while upholding human-verified software architecture and clean code standards.",
              glow: "cerulean" as const,
            },
            {
              icon: <Zap className="w-6 h-6 text-neon-rose" />,
              title: "Speed Without Technical Debt",
              desc: "By designing clean data models and modular component trees from sprint 1, we deliver speed without fragile shortcuts that haunt you later.",
              glow: "rose" as const,
            },
            {
              icon: <Eye className="w-6 h-6 text-cerulean" />,
              title: "Transparent Sprint Milestones",
              desc: "Real-time visibility into your codebase, staging environments, and sprint deliverables with weekly demos and async Loom walk-throughs.",
              glow: "cerulean" as const,
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-neon-rose" />,
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
              <p className="text-white/70 leading-relaxed text-sm">{f.desc}</p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* WHY THIS WORKS: COMPARISON MATRIX */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-neon-rose bg-neon-rose/10 border border-neon-rose/30 mb-4">
            <Check className="w-3.5 h-3.5" /> Battle-Tested Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            Why Working With Us <span className="text-gradient-rose">Actually Works</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            See how our founder-led engineering studio stacks up against bloated legacy agencies and solo freelancers.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-jet-border bg-jet-surface/90 shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-jet-border bg-jet">
                  <th className="p-4 sm:p-6 text-white/60 font-mono uppercase text-xs">Dimension</th>
                  <th className="p-4 sm:p-6 text-cerulean font-bold text-sm sm:text-base bg-cerulean/10 border-x border-cerulean/30">
                    KinetixSoft Studio
                  </th>
                  <th className="p-4 sm:p-6 text-white/50 font-medium">Traditional Agency</th>
                  <th className="p-4 sm:p-6 text-white/50 font-medium">Solo Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jet-border text-white/80">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-white">{row.feature}</td>
                    <td className="p-4 sm:p-6 font-bold text-white bg-cerulean/5 border-x border-cerulean/20">
                      <div className="flex items-center gap-2 text-cerulean">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{row.us}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-white/50">{row.agency}</td>
                    <td className="p-4 sm:p-6 text-white/50">{row.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
            Who We <span className="text-gradient-duo">Build For</span>
          </h2>
          <p className="text-base text-white/70">
            Teams and founders who value velocity, craft, and zero operational friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Funded Startups & Scaleups",
              desc: "Need to launch a validated MVP before your next funding milestone without burning $150k on full-time engineering hires.",
              glow: "cerulean" as const,
              badge: "Fast Delivery",
            },
            {
              title: "Non-Technical Founders",
              desc: "Have a brilliant domain idea but need senior technical leadership to architect databases, select platforms, and steer development.",
              glow: "rose" as const,
              badge: "Full Leadership",
            },
            {
              title: "Operations Teams Outgrowing Sheets",
              desc: "Need automated CRM pipelines, Retool admin portals, and GlobiFlow workflows that eradicate repetitive manual tasks.",
              glow: "cerulean" as const,
              badge: "High Automation",
            },
          ].map((c, i) => (
            <Card3D key={i} glowColor={c.glow} className="p-8 h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cerulean mb-4 inline-block font-semibold">
                  {c.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-jet-border flex items-center gap-2 text-xs font-semibold text-white/50">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dedicated Sprint Focus</span>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
            Industries We've <span className="text-gradient-rose">Built For</span>
          </h2>
          <p className="text-base text-white/70">
            Specialized domain logic and battle-tested architectures across high-growth digital sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/50 transition-all hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-lg bg-cerulean/15 border border-cerulean/30 flex items-center justify-center text-cerulean">
                {ind.icon}
              </div>
              <span className="text-sm font-semibold text-white">{ind.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PHYSICAL ENGINEERING STUDIO & CULTURE (REQUESTED BY USER) */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Studio Workspace Image with Glass Badges */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_60px_rgba(0,123,167,0.3)]">
              <img
                src="/studio-workspace.jpg"
                alt="KinetixSoft Engineering Studio & Collaborative Workspace"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-black/30 pointer-events-none" />

              {/* Floating Live Telemetry Badge */}
              <div className="absolute top-5 left-5 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-white/20 backdrop-blur-xl flex items-center gap-2.5 shadow-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-white">Engineering Studio HQ</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/30">Live Lab</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-jet-surface/85 border border-white/20 backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4 shadow-2xl">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>100% In-House Senior Builders & AI Swarm Directors</span>
                  </div>
                  <div className="text-xs text-white/70 font-mono mt-0.5">
                    Open Collaborative Lofts • Direct Slack Channels • 0% Middlemen
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cerulean/20 text-cerulean border border-cerulean/40 font-bold">
                  Physical Hub
                </span>
              </div>
            </div>
          </div>

          {/* Right: Studio Culture & Human-Agent Synergy */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-[#00A3DE] bg-cerulean/10 border border-cerulean/30">
              <Users className="w-3.5 h-3.5 text-neon-rose" /> Inside KinetixSoft Studio
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Real Senior Architects. <br />
              <span className="text-gradient-duo">Agentic Velocity.</span>
            </h2>

            <p className="text-base text-white/75 leading-relaxed">
              We aren’t an anonymous freelancer broker. Our physical engineering studio houses senior full-stack engineers, UI/UX designers, and systems architects working alongside autonomous AI swarms to ship production software with zero lag.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Collaborative Open Studio",
                  desc: "Rapid pair programming, whiteboarding, and hardware test rigs for FlutterFlow 120 FPS mobile apps.",
                  icon: <Sparkles className="w-4 h-4 text-neon-rose" />,
                },
                {
                  title: "Human + Agentic Synergy",
                  desc: "Senior engineers architect the foundation; autonomous Claude-3.5 agent swarms synthesize boilerplate, tests, and API connectors.",
                  icon: <Bot className="w-4 h-4 text-cerulean" />,
                },
                {
                  title: "Direct Access To Your Builders",
                  desc: "No middlemen or junior account managers. You speak directly to the engineers pushing code to your production repo.",
                  icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-jet-surface/60 border border-white/10 hover:border-cerulean/30 transition-all flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/65 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-neon-rose bg-neon-rose/10 border border-neon-rose/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white leading-tight">
              Let's Build An App That <span className="text-gradient-duo">Ships</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
              Whether you have an early concept wireframe, a Figma prototype, or an existing app needing urgent rescue,
              share your goals. We'll respond with clear feasibility analysis and a concrete roadmap within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5 text-cerulean" />, text: "+92 307 9575055" },
                { icon: <Mail className="w-5 h-5 text-neon-rose" />, text: "info@kinetixsoft.com" },
                { icon: <MapPin className="w-5 h-5 text-cerulean" />, text: "Lahore, Pakistan (Serving Globally)" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3.5 text-sm font-medium text-white">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-jet-border">
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
              <p className="text-sm text-white/60 mb-6">
                Tell us about your project requirements and target launch window.
              </p>
              <ContactForm />
            </Card3D>
          </div>

        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
            Frequently Asked <span className="text-gradient-cerulean">Questions</span>
          </h2>
          <p className="text-white/60 text-sm">
            Everything you need to know about partnering with KinetixSoft.
          </p>
        </div>
        <div className="space-y-3.5">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION: 3D HOLOGRAPHIC STAGE BROUGHT TO FRONT */}
      <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-jet-surface/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,123,167,0.35),0_15px_50px_rgba(255,45,149,0.25)] relative overflow-hidden"
        >
          {/* Ambient Cyber Light Auroras */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cerulean/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-rose/20 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 3D Holographic AI + Human Synergy Visual Brought to Front */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Hero3DVisual />
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-neon-rose bg-neon-rose/10 border border-neon-rose/30 mb-4">
                <Star className="w-3.5 h-3.5 fill-neon-rose" />
                <span>Ready for Immediate Deployment</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Let's Bring Your Vision <span className="text-gradient-duo">To Life</span>
              </h2>
              <p className="text-base text-white/70 mb-8 leading-relaxed">
                Join founders and product teams building scalable software on FlutterFlow, Bubble, Retool, Podio, and Replit with senior human architects and autonomous agent swarms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group">
                  <button
                    data-testid="button-cta-getstarted"
                    className="btn-duo px-9 py-4 text-base font-bold shadow-[0_0_35px_rgba(255,45,149,0.4)] group"
                  >
                    <span>Book Scoping Session</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cyber Grid Horizon Transition into Footer */}
      <CyberGrid3D />

    </div>
  );
}
