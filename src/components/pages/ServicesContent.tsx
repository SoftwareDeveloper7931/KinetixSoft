"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";

function PodioLogo() {
  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white">
      <img src="/podio-logo.jfif" alt="Podio" className="w-10 h-10 object-cover" />
    </div>
  );
}
function BubbleLogo() {
  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white">
      <img src="/bubble-logo.png" alt="Bubble" className="w-9 h-9 object-contain" />
    </div>
  );
}

function LovableLogo() {
  return <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none"><rect width="60" height="60" rx="12" fill="#FFF0F0" /><text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#E53935">♥</text><text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E53935" fontFamily="sans-serif">lovable</text></svg>;
}

const services = [
  {
    href: "/podio",
    badge: "CRM & Ops",
    logo: <PodioLogo />,
    name: "Podio",
    headline: "CRM & Workflow Automation",
    body: "Custom Podio workspaces, CRM systems, and automated workflows for teams that have outgrown spreadsheets.",
    bullets: ["Custom workspace architecture", "Workflow & GlobiFlow automation", "Data migration & import", "Third-party integrations"],
    mockup: (
      <div className="space-y-2 w-full">
        {["Lead Qualified", "Discovery Call", "Proposal Sent", "Contract Signed"].map((s, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2" style={{ background: "#0A0E14", borderRadius: "4px", border: "1px solid #232A36" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#4A5FBD", "#C9A86A", "#4ABD7A", "#4A5FBD"][i] }} />
            <span className="text-xs" style={{ color: "#E9EBEF" }}>{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    href: "/flutterflow",
    badge: "Mobile & Web",
    logo: <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><SiFlutter className="w-6 h-6 text-blue-500" /></div>,
    name: "FlutterFlow",
    headline: "Mobile & Web App Development",
    body: "Production-ready mobile and web apps built on FlutterFlow with Firebase, custom APIs, and full UI/UX design.",
    bullets: ["iOS & Android apps", "Web app builds", "Firebase / Supabase integration", "Custom logic & API connections"],
    mockup: (
      <div className="flex justify-center gap-4">
        <div className="w-[80px] h-[155px] rounded-[18px] border border-white/10" style={{ background: "#12161F" }}>
          <div className="h-20 m-2 rounded-lg" style={{ background: "rgba(74,95,189,0.2)" }} />
          <div className="space-y-1.5 mx-2"><div className="h-1.5 rounded" style={{ background: "#232A36" }} /><div className="h-1.5 rounded w-2/3" style={{ background: "#232A36" }} /></div>
        </div>
        <div className="w-[80px] h-[155px] rounded-[18px] border border-white/20" style={{ background: "#161B26" }}>
          <div className="h-20 m-2 rounded-lg" style={{ background: "rgba(74,189,180,0.2)" }} />
          <div className="space-y-1.5 mx-2"><div className="h-1.5 rounded" style={{ background: "#232A36" }} /><div className="h-1.5 rounded w-3/4" style={{ background: "#232A36" }} /></div>
        </div>
      </div>
    ),
  },
  {
    href: "/retool",
    badge: "Internal Tools",
    logo: <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center"><SiRetool className="w-6 h-6 text-yellow-600" /></div>,
    name: "Retool",
    headline: "Admin Dashboards & Internal Tools",
    body: "Purpose-built admin panels, ops dashboards, and data interfaces for teams that need real tools — not spreadsheets.",
    bullets: ["Admin panel development", "Database & API connections", "Role-based access control", "Workflow automation"],
    mockup: (
      <div className="w-full space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          {["47 Open", "12 Proc.", "203 Done"].map((s, i) => (
            <div key={i} className="p-2 text-center" style={{ background: "#0A0E14", borderRadius: "4px" }}>
              <div className="text-xs font-bold" style={{ color: "#4A5FBD" }}>{s.split(" ")[0]}</div>
              <div className="text-[9px]" style={{ color: "#8A93A3" }}>{s.split(" ")[1]}</div>
            </div>
          ))}
        </div>
        {["CLM-041 · Pending", "CLM-040 · Approved"].map((r, i) => (
          <div key={i} className="flex items-center gap-2 px-2 py-1.5" style={{ background: "#0A0E14", borderRadius: "4px" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? "#C9A86A" : "#4ABD7A" }} />
            <span className="text-[10px]" style={{ color: "#E9EBEF" }}>{r}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    href: "/lovable",
    badge: "SaaS & Web",
    logo: <LovableLogo />,
    name: "Lovable",
    headline: "AI-Powered SaaS & Web Apps",
    body: "Full-stack web apps and SaaS products built on Lovable with auth, payments, database, and third-party integrations.",
    bullets: ["SaaS dashboard builds", "Auth & user management", "Stripe payment integration", "Supabase / PostgreSQL backend"],
    mockup: (
      <div className="w-full space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Users", v: "847" }, { l: "MRR", v: "$12k" }].map((s, i) => (
            <div key={i} className="p-2" style={{ background: "#0A0E14", borderRadius: "4px" }}>
              <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
              <div className="text-[9px]" style={{ color: "#8A93A3" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-12 flex items-end gap-1 px-1">
          {[40, 55, 45, 70, 60, 85].map((h, i) => <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#4A5FBD" : "rgba(74,95,189,0.3)" }} />)}
        </div>
      </div>
    ),
  },
  {
    href: "/replit-platform",
    badge: "Full-Stack & AI",
    logo: <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><SiReplit className="w-6 h-6 text-orange-500" /></div>,
    name: "Replit",
    headline: "Full-Stack Apps & AI Agents",
    body: "Full-stack apps, AI agents, and automation tools built on Replit using Python, Node.js, and modern AI APIs.",
    bullets: ["Full-stack app development", "AI agent & LLM integration", "REST API & webhook builds", "Replit deployment & hosting"],
    mockup: (
      <div className="font-mono text-[10px] space-y-1" style={{ color: "#4A5FBD" }}>
        <div style={{ color: "#8A93A3" }}>$ python agent.py</div>
        <div>{">"} Connecting...</div>
        <div>{">"} Analysing queue...</div>
        <div style={{ color: "#4ABD7A" }}>{">"} Done ✓</div>
      </div>
    ),
  },
  {
    href: "/bubble",
    badge: "No-Code Web Apps",
    logo: <BubbleLogo />,
    name: "Bubble",
    headline: "Full-Stack Web Apps Without Code",
    body: "Production-ready web apps built on Bubble with proper data architecture, workflow logic, and third-party API integrations.",
    bullets: ["Custom Bubble app builds", "Data & workflow architecture", "API & plugin integrations", "App audits & ongoing support"],
    mockup: (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Users", v: "1.2k" }, { l: "Workflows", v: "86" }].map((s, i) => (
            <div key={i} className="p-2 text-center" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "4px" }}>
              <div className="text-sm font-bold" style={{ color: "#4A5FBD" }}>{s.v}</div>
              <div className="text-[10px]" style={{ color: "#8A93A3" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-10 flex items-end gap-1 px-1">
          {[35, 50, 42, 65, 58, 80].map((h, i) => <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#4A5FBD" : "rgba(74,95,189,0.3)" }} />)}
        </div>
      </div>
    ),
  },
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6" style={{ border: "1px solid #232A36", borderRadius: "6px", color: "#8A93A3", background: "rgba(74,95,189,0.08)" }}>Our Platforms</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl mb-6" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          6 Platforms. <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>One Studio.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto" style={{ color: "#8A93A3" }}
        >
          We choose the platform that actually fits your product — not whichever one we default to. Here's what we build on and why.
        </motion.p>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10 space-y-6">
        {services.map((svc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
            style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Visual mockup */}
              <div className="p-8 flex items-center justify-center min-h-[180px]" style={{ background: "#161B26", borderRight: "1px solid #232A36" }}>
                {svc.mockup}
              </div>
              {/* Content */}
              <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {svc.logo}
                  <div>
                    <div className="text-xs eyebrow mb-0.5" style={{ color: "#8A93A3" }}>{svc.badge}</div>
                    <h2 className="text-2xl font-semibold" style={{ color: "#E9EBEF" }}>{svc.name}</h2>
                  </div>
                </div>
                <h3 className="text-lg mb-2" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)" }}>{svc.headline}</h3>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8A93A3" }}>{svc.body}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {svc.bullets.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm" style={{ color: "#E9EBEF" }}>
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#4A5FBD" }} />{b}
                    </div>
                  ))}
                </div>
                <Link href={svc.href}>
                  <button className="h-10 px-6 text-sm font-semibold flex items-center gap-2 w-fit" data-testid={`button-service-${svc.name.toLowerCase()}`}
                    style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                  >View {svc.name} Services <ArrowRight className="w-4 h-4" /></button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-12" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <h2 className="text-3xl mb-4" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
            Not Sure Which <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Platform Fits?</em>
          </h2>
          <p className="mb-8" style={{ color: "#8A93A3" }}>Tell us what you're building and we'll recommend the right platform — and explain why.</p>
          <Link href="/contact">
            <button className="h-12 px-8 text-sm font-semibold mx-auto flex items-center gap-2"
              style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
            >Get a Recommendation <ArrowRight className="w-4 h-4" /></button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
