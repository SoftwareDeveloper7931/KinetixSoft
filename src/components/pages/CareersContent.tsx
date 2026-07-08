"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Senior FlutterFlow Developer",
    type: "Full-time",
    location: "Remote (Pakistan preferred)",
    description: "We're looking for an experienced FlutterFlow developer who understands data modelling, Firebase/Supabase integration, and can build production-ready apps — not just prototypes.",
    requirements: ["2+ years FlutterFlow experience", "Strong Firebase or Supabase knowledge", "Experience shipping to App Store / Play Store", "Comfortable with REST API integration"],
  },
  {
    title: "Podio Architect",
    type: "Full-time",
    location: "Remote (Pakistan preferred)",
    description: "Join our Podio practice and help growing companies move from spreadsheets to structured Podio workspaces. You'll own the architecture, automation, and client delivery from start to finish.",
    requirements: ["3+ years Podio development", "Experience with GlobiFlow or Podio workflow automation", "Strong process mapping and client communication skills", "Data migration experience"],
  },
  {
    title: "Internal Tools Engineer (Retool)",
    type: "Full-time",
    location: "Remote (Pakistan preferred)",
    description: "Build admin dashboards and operational tools on Retool that replace manual workflows for our clients' operations teams. You'll work across SQL, REST APIs, and Retool's component system.",
    requirements: ["Strong SQL knowledge (PostgreSQL preferred)", "Retool or comparable internal tools experience", "REST API integration experience", "Ability to translate ops requirements into working tools"],
  },
];

export default function CareersContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6" style={{ border: "1px solid #232A36", borderRadius: "6px", color: "#8A93A3", background: "rgba(74,95,189,0.08)" }}>We're Hiring</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl mb-6" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}
          >
            Join the <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Team</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg" style={{ color: "#8A93A3" }}
          >
            We're a small, founder-led team that builds real products and takes pride in the quality of what we ship. If that sounds like where you want to work, we'd like to hear from you.
          </motion.p>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto relative z-10 space-y-6">
        {jobs.map((job, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="p-8 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>{job.title}</h2>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs eyebrow" style={{ color: "#8A93A3" }}>
                  <Clock className="w-3.5 h-3.5" />{job.type}
                </span>
                <span className="flex items-center gap-1.5 text-xs eyebrow" style={{ color: "#8A93A3" }}>
                  <MapPin className="w-3.5 h-3.5" />{job.location}
                </span>
              </div>
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>{job.description}</p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3" style={{ color: "#E9EBEF" }}>What we're looking for:</h4>
              <ul className="space-y-2">
                {job.requirements.map((r, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "#8A93A3" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4A5FBD" }} />{r}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact">
              <button className="h-10 px-6 text-sm font-semibold flex items-center gap-2 w-fit"
                style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
              >Apply for this Role <ArrowRight className="w-4 h-4" /></button>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* OPEN APPLICATION */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto relative z-10 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-8 text-center" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>Don't See Your Role?</h3>
          <p className="text-sm mb-6" style={{ color: "#8A93A3" }}>We're always interested in people who are great at what they do. Send us a message introducing yourself and the kind of work you'd like to do.</p>
          <Link href="/contact">
            <button className="h-10 px-6 text-sm font-semibold"
              style={{ background: "transparent", color: "#4A5FBD", borderRadius: "6px", border: "1px solid rgba(74,95,189,0.3)", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(74,95,189,0.3)"; }}
            >Get in Touch</button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
