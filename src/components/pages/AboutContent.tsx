"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Users, Target, ArrowRight } from "lucide-react";

const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    desc: "We embrace the latest platforms and tools — not for novelty, but because the right technology genuinely helps our clients ship faster and build more durably.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Transparency",
    desc: "No black boxes, no hidden timelines. You'll always know where your project stands, what's coming next, and what we'd do differently if we were in your position.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    desc: "Good enough isn't a standard we use. Every app we ship is something we'd be comfortable putting our name on in public.",
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6" style={{ border: "1px solid #232A36", borderRadius: "6px", color: "#8A93A3", background: "rgba(74,95,189,0.08)" }}>
              About KinetixSoft
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}
          >
            Who <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>KinetixSoft</em> Is
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed" style={{ color: "#8A93A3" }}
          >
            KinetixSoft is an app development studio that builds production-ready mobile, web, and internal tools using FlutterFlow, Lovable, Retool, Podio, and Replit. Founded in 2025, we work with startups and growing teams who need a working product fast — without sacrificing scalability or security.
          </motion.p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
          >
            <div className="ledger-rule mb-6"><span className="ledger-index">Mission</span><span className="ledger-line" /></div>
            <h2 className="text-2xl mb-4" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              Ship Real Products, <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Not Just Demos</em>
            </h2>
            <p className="leading-relaxed" style={{ color: "#8A93A3" }}>
              Our mission is to give founders and growing teams access to the same quality of product development that was previously only available to well-funded startups. We do this by leveraging mature, AI-accelerated platforms that let us move at speed without cutting the corners that matter.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
          >
            <div className="ledger-rule mb-6"><span className="ledger-index">Vision</span><span className="ledger-line" /></div>
            <h2 className="text-2xl mb-4" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
              A Studio Known for <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Honest Execution</em>
            </h2>
            <p className="leading-relaxed" style={{ color: "#8A93A3" }}>
              We want to be the studio founders recommend not because we're the cheapest option, but because we told them the truth, built what they asked for, and stayed around after launch. That reputation is what we're building, one project at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto mb-14">
          <div className="ledger-rule mb-6"><span className="ledger-index">Values</span><span className="ledger-line" /></div>
          <h2 className="text-3xl md:text-4xl" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
            What We <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Stand For</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}
              className="p-8 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{v.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{v.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 flex flex-col justify-center">
              <div className="ledger-rule mb-6"><span className="ledger-index">Why Us</span><span className="ledger-line" /></div>
              <h2 className="text-3xl mb-5" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
                Founder-Led, <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Always</em>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#8A93A3" }}>
                When you work with KinetixSoft, you're not handed off to a project manager and a team of juniors. The people building your app are the same people you spoke to in the first meeting. That means better decisions, faster communication, and accountability that doesn't disappear after the kick-off call.
              </p>
              <ul className="space-y-3">
                {["Direct access to the people building your app", "Honest assessments before we start, not after", "Built on mature platforms — we don't experiment on your idea", "Post-launch support is part of how we work"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#E9EBEF" }}>
                    <span className="w-5 h-5 rounded flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: "rgba(74,95,189,0.12)", color: "#4A5FBD" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative p-10 flex items-center justify-center min-h-[300px]" style={{ background: "#161B26", borderLeft: "1px solid #232A36" }}
            >
              <div className="text-center">
                <div className="text-6xl font-bold mb-2" style={{ color: "#4A5FBD", fontFamily: "Newsreader, serif" }}>2025</div>
                <div className="text-sm eyebrow mb-8">Studio Founded</div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ v: "5+", l: "Platforms" }, { v: "100%", l: "Founder-Led" }, { v: "24/7", l: "Support" }, { v: "PKR/USD", l: "Both welcome" }].map((s, i) => (
                    <div key={i} className="p-3 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                      <div className="font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
                      <div className="text-xs eyebrow">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-12" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <h2 className="text-3xl mb-4" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>
            Ready to <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Build Something?</em>
          </h2>
          <p className="mb-8" style={{ color: "#8A93A3" }}>Tell us about your project and we'll get back to you with a real plan — not a sales pitch.</p>
          <Link href="/contact">
            <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2 mx-auto" data-testid="button-about-cta"
              style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
            >Get in Touch <ArrowRight className="w-4 h-4" /></button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
