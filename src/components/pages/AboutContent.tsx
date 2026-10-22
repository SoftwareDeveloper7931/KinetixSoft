"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Users, Target, ArrowRight, ShieldCheck, Sparkles, Award } from "lucide-react";
import { Card3D } from "@/components/Card3D";
import { Hero3DVisual } from "@/components/Hero3DVisual";
import { CyberGrid3D } from "@/components/CyberGrid3D";

const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Velocity with Precision",
    desc: "We leverage modern frameworks and AI accelerators not for hype, but because they empower our clients to test hypotheses and deploy stable products in weeks instead of quarters.",
    glow: "cerulean" as const,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Radical Transparency",
    desc: "Zero black boxes. Real-time staging links, open architecture diagrams, and straightforward architectural advice from founders who have built at scale.",
    glow: "neon-rose" as const,
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Engineering Excellence",
    desc: "Every system we architect is built to handle enterprise traffic, maintain strict data segregation, and pass security audits without emergency refactors.",
    glow: "cerulean" as const,
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> About KinetixSoft Studio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Engineering What's Next in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
              Modern Software
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-white/70"
          >
            KinetixSoft is an elite app development studio engineering production-ready mobile apps, web platforms, and internal tools across FlutterFlow, Lovable, Retool, Podio, and Replit. Founded in 2025, we partner with venture-backed startups and scaling enterprises to deploy secure, high-scale applications fast.
          </motion.p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card3D glowColor="cerulean" maxTilt={5}>
            <div className="p-10 rounded-2xl bg-jet-surface/90 border border-jet-border h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-cerulean/15 text-cerulean border border-cerulean/25">
                    OUR MISSION
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white/95">
                  Ship Real Products, <span className="text-cerulean">Not Disposable Demos</span>
                </h2>
                <p className="leading-relaxed text-white/65 text-sm md:text-base">
                  Our mission is to give ambitious founders and enterprise teams direct access to top-tier product engineering without bureaucratic agency overhead. We harness modern platforms and AI acceleration to deliver rock-solid, production-grade applications that scale seamlessly.
                </p>
              </div>
            </div>
          </Card3D>

          <Card3D glowColor="neon-rose" maxTilt={5}>
            <div className="p-10 rounded-2xl bg-jet-surface/90 border border-jet-border h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-neon-rose/15 text-neon-rose border border-neon-rose/25">
                    OUR VISION
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white/95">
                  A Studio Renowned for <span className="text-neon-rose">Uncompromising Execution</span>
                </h2>
                <p className="leading-relaxed text-white/65 text-sm md:text-base">
                  We aim to be the development studio founders trust with their critical infrastructure because we are technically rigorous, completely honest in scoping, and committed long after launch day. That reputation is built piece by piece with every deployment.
                </p>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cerulean font-semibold">Core Principles</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Stand For</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <Card3D key={i} glowColor={v.glow} maxTilt={6}>
              <div className="p-8 rounded-2xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${v.glow === "neon-rose" ? "bg-neon-rose/10 text-neon-rose border border-neon-rose/30 shadow-sm shadow-neon-rose/20" : "bg-cerulean/10 text-cerulean border border-cerulean/30 shadow-sm shadow-cerulean/20"}`}>
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white/95">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{v.desc}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <Card3D glowColor="cerulean" maxTilt={3} className="w-full">
          <div className="rounded-2xl bg-jet-surface/90 border border-jet-border overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-mono uppercase tracking-wider text-cerulean font-semibold mb-3">Direct Engagement</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-white/95">
                  Founder-Led, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Always</span>
                </h2>
                <p className="leading-relaxed mb-8 text-white/65 text-sm md:text-base">
                  When you partner with KinetixSoft, you are never handed off to an intermediary account manager or junior developers. The experienced engineers who design your database and write your custom cloud functions are the ones in your daily Slack channel.
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Direct daily access to senior full-stack architects",
                    "Thorough upfront feasibility audits and architecture blueprints",
                    "Clean, documented code with full intellectual property transfer",
                    "Dedicated SLA monitoring and long-term maintenance support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative p-10 flex items-center justify-center min-h-[320px] bg-jet border-t md:border-t-0 md:border-l border-jet-border">
                <div className="text-center w-full max-w-sm">
                  <div className="text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose font-mono">
                    2025
                  </div>
                  <div className="text-xs font-mono tracking-widest text-white/50 uppercase mb-8">Studio Established</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: "6+", l: "Specialized Stacks" },
                      { v: "100%", l: "Founder-Led Builds" },
                      { v: "24/7", l: "Uptime Support" },
                      { v: "Global", l: "Client Footprint" },
                    ].map((s, i) => (
                      <div key={i} className="p-3.5 text-center bg-jet-surface/90 border border-jet-border rounded-xl">
                        <div className="text-lg font-bold text-cerulean">{s.v}</div>
                        <div className="text-[11px] text-white/50">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </section>

      {/* PHYSICAL ENGINEERING STUDIO & CULTURE SHOWCASE */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Studio Photo */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(0,123,167,0.3)]">
              <img
                src="/studio-workspace.jpg"
                alt="KinetixSoft Engineering Studio & Open Collaborative Workspace"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-black/30 pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 px-3.5 py-2 rounded-xl bg-jet-surface/80 border border-white/15 backdrop-blur-xl flex items-center gap-2.5 shadow-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-white">Engineering Studio Floor</span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-jet-surface/85 border border-white/20 backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4 shadow-2xl">
                <div>
                  <div className="text-sm font-bold text-white">In-House Architects & Developers</div>
                  <div className="text-xs text-white/70 font-mono mt-0.5">
                    Lahore Tech Hub • Direct Collaboration • Senior Led
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cerulean/20 text-cerulean border border-cerulean/40 font-bold">
                  Physical HQ
                </span>
              </div>
            </div>
          </div>

          {/* Right: Studio Culture */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cerulean bg-cerulean/10 border border-cerulean/30 rounded-full">
              <Users className="w-3.5 h-3.5 text-neon-rose" /> Our Studio Space
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Where Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">Meets Execution</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We operate from a high-energy collaborative studio where senior software engineers, system architects, and UI/UX designers pair program, whiteboard complex data models, and deploy production software daily.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-jet-surface/70 border border-white/10 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cerulean mt-1.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">100% In-House Team</div>
                  <div className="text-xs text-white/60">Every line of code is designed and reviewed by our own engineering team.</div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-jet-surface/70 border border-white/10 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-rose mt-1.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">Human Architecture + Agentic AI</div>
                  <div className="text-xs text-white/60">Combining deep technical discernment with autonomous agents for 10x delivery speed.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION: 3D HOLOGRAPHIC LASER VISUAL BROUGHT DIRECTLY TO THE FRONT */}
      <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-jet-surface/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,123,167,0.35),0_15px_50px_rgba(255,45,149,0.25)] relative overflow-hidden"
        >
          {/* Ambient Cyber Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cerulean/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-rose/20 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3D Holographic Element Brought to Front */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Hero3DVisual />
            </div>

            {/* Right Column: CTA Copy & Action */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase mb-4 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean">
                <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> Ready to Deploy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Build Something Great?</span>
              </h2>
              <p className="mb-8 text-white/70 text-sm md:text-base leading-relaxed">
                Tell us about your product roadmap and timeline. We'll deliver an actionable architectural blueprint — zero fluff, zero sales pressure.
              </p>
              <Link href="/contact" className="inline-flex group">
                <button data-testid="button-about-cta" className="btn-duo flex items-center gap-2 shadow-[0_0_30px_rgba(255,45,149,0.4)]">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Cyber Grid Horizon Transition into Footer */}
      <CyberGrid3D />
    </div>
  );
}
