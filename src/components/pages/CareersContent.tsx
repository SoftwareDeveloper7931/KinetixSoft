"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Sparkles, Briefcase, CheckCircle2 } from "lucide-react";
import { Card3D } from "@/components/Card3D";

const jobs = [
  {
    title: "Senior FlutterFlow Developer",
    type: "Full-time",
    location: "Remote (Global / Pakistan)",
    glow: "cerulean" as const,
    description: "We're looking for an experienced FlutterFlow developer who understands complex data modelling, Firebase/Supabase rule architectures, and builds production-ready mobile apps with custom Dart code.",
    requirements: ["2+ years active FlutterFlow experience", "Strong Firebase or Supabase backend skills", "Experience deploying to Apple App Store & Google Play", "Comfortable with custom APIs & payment webhooks"],
  },
  {
    title: "Podio Solutions Architect",
    type: "Full-time",
    location: "Remote (Global / Pakistan)",
    glow: "neon-rose" as const,
    description: "Join our core Podio practice and help enterprise clients transition from chaotic spreadsheets into structured Podio workspaces. You'll architect schema, GlobiFlow rules, and client integrations.",
    requirements: ["3+ years architecting Podio environments", "Mastery of GlobiFlow / Citrix workflow automation", "Strong process mapping and client communication skills", "Data migration & database integrity experience"],
  },
  {
    title: "Internal Tools Engineer (Retool)",
    type: "Full-time",
    location: "Remote (Global / Pakistan)",
    glow: "cerulean" as const,
    description: "Build custom administrative dashboards, operational portals, and customer success workflows on Retool. You'll write performant SQL, handle REST/GraphQL APIs, and configure role-based access.",
    requirements: ["Advanced SQL knowledge (PostgreSQL preferred)", "Deep experience with Retool components & transformers", "REST / GraphQL API integration experience", "Ability to translate complex ops requirements into slick UIs"],
  },
];

export default function CareersContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> We Are Hiring
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Build With Purpose.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
              Join Our Engineering Studio.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            We're a high-velocity, founder-led engineering studio building production apps for worldwide clients. We value craftsmanship, clean systems, and direct autonomy.
          </motion.p>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto relative z-10 space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card3D glowColor={job.glow} maxTilt={4} className="w-full">
              <div className="p-8 md:p-10 rounded-2xl bg-jet-surface/90 border border-jet-border hover:border-cerulean/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold tracking-tight text-white/95">{job.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-cerulean/10 text-cerulean border border-cerulean/20">
                      <Clock className="w-3.5 h-3.5" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-neon-rose/10 text-neon-rose border border-neon-rose/20">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm mb-6 leading-relaxed text-white/65">{job.description}</p>

                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">Key Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {job.requirements.map((r, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-white/80">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${job.glow === "neon-rose" ? "text-neon-rose" : "text-cerulean"}`} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-jet-border/60">
                  <span className="text-xs font-mono text-white/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    Accepting Applications
                  </span>
                  <Link href="/contact" className="group inline-flex">
                    <button className={job.glow === "neon-rose" ? "btn-neon-rose group" : "btn-cerulean group"}>
                      <span>Apply for this Role</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </section>

      {/* OPEN APPLICATION */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto relative z-10 mb-8">
        <Card3D glowColor="cerulean" maxTilt={3}>
          <div className="p-8 md:p-12 text-center rounded-3xl bg-jet-surface/90 border border-jet-border">
            <div className="w-12 h-12 rounded-xl bg-cerulean/10 text-cerulean border border-cerulean/30 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white/95">Don't See Your Exact Role?</h3>
            <p className="text-sm mb-8 text-white/60 max-w-xl mx-auto leading-relaxed">
              We're always scouting for extraordinary engineers, technical project managers, and UI/UX designers. Drop us a note with your portfolio and GitHub profile.
            </p>
            <Link href="/contact" className="inline-flex group">
              <button className="btn-duo mx-auto px-8 py-3.5 text-sm font-bold flex items-center gap-2 group shadow-[0_0_30px_rgba(255,45,149,0.35)]">
                <span>Send Open Application</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
        </Card3D>
      </section>
    </div>
  );
}
