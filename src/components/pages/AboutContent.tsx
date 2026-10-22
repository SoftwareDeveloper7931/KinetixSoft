"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Users, Target, ArrowRight, ShieldCheck, Sparkles, Award } from "lucide-react";
import { Card3D } from "@/components/Card3D";

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

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 rounded-3xl bg-jet-surface/90 border border-jet-border backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/15 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-rose/15 blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Build Something Great?</span>
          </h2>
          <p className="mb-8 text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
            Tell us about your product roadmap and timeline. We'll deliver an actionable architectural blueprint — zero fluff, zero sales pressure.
          </p>
          <Link href="/contact">
            <button data-testid="button-about-cta" className="btn-duo mx-auto flex items-center gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
