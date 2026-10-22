"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Layers } from "lucide-react";
import { SiFlutter, SiReplit, SiRetool } from "react-icons/si";
import { Card3D } from "@/components/Card3D";

function PodioLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border border-jet-border">
      <img src="/podio-logo.jfif" alt="Podio" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
}
function BubbleLogo() {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border border-jet-border">
      <img src="/bubble-logo.png" alt="Bubble" className="w-10 h-10 object-contain" />
    </div>
  );
}

function LovableLogo() {
  return (
    <div className="w-12 h-12 rounded-xl bg-neon-rose/10 border border-neon-rose/30 flex items-center justify-center">
      <span className="text-neon-rose text-2xl font-bold">♥</span>
    </div>
  );
}

const services = [
  {
    href: "/podio",
    badge: "CRM & Ops Architecture",
    logo: <PodioLogo />,
    name: "Podio",
    headline: "CRM & Automated Workflow Systems",
    body: "Custom Podio workspaces, high-velocity CRM pipelines, and GlobiFlow/Make automated workflows engineered for teams outgrowing spreadsheets.",
    bullets: ["Custom workspace architecture", "Workflow & GlobiFlow automation", "Data migration & import pipelines", "Third-party webhook integrations"],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="space-y-2.5 w-full max-w-[260px]">
        {["Lead Qualified", "Discovery Call", "Proposal Sent", "Contract Signed"].map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2 bg-jet/90 rounded-lg border border-jet-border text-xs">
            <div className={`w-2 h-2 rounded-full ${i === 3 ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : i === 2 ? "bg-neon-rose" : "bg-cerulean"}`} />
            <span className="text-white/80 font-mono">{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    href: "/flutterflow",
    badge: "Native Mobile & Web",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-cerulean/10 border border-cerulean/30 flex items-center justify-center">
        <SiFlutter className="w-6 h-6 text-cerulean" />
      </div>
    ),
    name: "FlutterFlow",
    headline: "Mobile & Web App Development",
    body: "Cross-platform iOS and Android mobile apps alongside responsive web applications built on FlutterFlow, powered by Firebase & Supabase backends.",
    bullets: ["App Store & Play Store ready", "Realtime Firebase / Supabase data", "Custom Flutter action code & APIs", "High-performance responsive UI"],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="flex justify-center gap-3">
        <div className="w-[85px] h-[160px] rounded-[18px] border border-cerulean/40 bg-jet p-2 flex flex-col justify-between shadow-lg shadow-cerulean/20">
          <div className="h-16 rounded-lg bg-cerulean/20 border border-cerulean/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-cerulean animate-pulse" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-jet-border" />
            <div className="h-2 rounded w-3/4 bg-cerulean/30" />
          </div>
        </div>
        <div className="w-[85px] h-[160px] rounded-[18px] border border-neon-rose/40 bg-jet p-2 flex flex-col justify-between shadow-lg shadow-neon-rose/20">
          <div className="h-16 rounded-lg bg-neon-rose/20 border border-neon-rose/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-neon-rose animate-pulse" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-jet-border" />
            <div className="h-2 rounded w-2/3 bg-neon-rose/30" />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/retool",
    badge: "Internal Ops Tools",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
        <SiRetool className="w-6 h-6 text-amber-400" />
      </div>
    ),
    name: "Retool",
    headline: "Admin Dashboards & Internal Tooling",
    body: "Purpose-built operational portals, customer support admin interfaces, and real-time database CRUD viewers with strict enterprise permission controls.",
    bullets: ["Direct Postgres & MongoDB queries", "Granular role-based permissions", "Multi-step approval workflows", "Enterprise audit log trails"],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="w-full max-w-[260px] space-y-2.5">
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "47", l: "Open" }, { v: "12", l: "Active" }, { v: "203", l: "Resolved" }].map((s, i) => (
            <div key={i} className="p-2 text-center bg-jet rounded-lg border border-jet-border">
              <div className="text-xs font-bold text-cerulean">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-3 py-1.5 bg-jet rounded border border-jet-border text-[11px]">
            <span className="font-mono text-white/80">#ORD-9021</span>
            <span className="text-emerald-400 text-[10px] font-bold">APPROVED</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1.5 bg-jet rounded border border-jet-border text-[11px]">
            <span className="font-mono text-white/80">#ORD-9022</span>
            <span className="text-neon-rose text-[10px] font-bold">REVIEW</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/lovable",
    badge: "AI-Generated SaaS",
    logo: <LovableLogo />,
    name: "Lovable",
    headline: "Modern AI-Assisted SaaS & Web Apps",
    body: "Rapidly engineered modern web products built on Lovable with Supabase backend, Stripe billing subscriptions, and responsive Tailwind UI.",
    bullets: ["SaaS web app architecture", "Supabase authentication & RLS", "Stripe subscription billing", "Production CI/CD deployment"],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="w-full max-w-[260px] space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Active Users", v: "1,248" }, { l: "MRR Growth", v: "+38%" }].map((s, i) => (
            <div key={i} className="p-2.5 bg-jet rounded-lg border border-jet-border">
              <div className="text-xs font-bold text-neon-rose">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-12 flex items-end gap-1.5 px-1 bg-jet p-2 rounded-lg border border-jet-border">
          {[35, 55, 45, 75, 60, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                background: i === 5 ? "var(--neon-rose)" : "rgba(255, 45, 149, 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    href: "/replit-platform",
    badge: "Full-Stack & Multi-Agent",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
        <SiReplit className="w-6 h-6 text-orange-400" />
      </div>
    ),
    name: "Replit",
    headline: "Full-Stack Cloud Apps & AI Agents",
    body: "Custom Python & TypeScript microservices, automated scraping pipelines, and LLM orchestration agents hosted on Replit Deployments.",
    bullets: ["Autonomous AI agent pipelines", "FastAPI / Node.js backend services", "Webhook integrations & bots", "Instant cloud deployments"],
    glowColor: "cerulean" as const,
    mockup: (
      <div className="font-mono text-[11px] space-y-1.5 p-3 rounded-lg bg-jet border border-jet-border w-full max-w-[260px]">
        <div className="text-white/40">$ python agent.py</div>
        <div className="text-cerulean">{">"} Syncing LLM pipeline...</div>
        <div className="text-white/70">{">"} Processing 84 requests</div>
        <div className="text-emerald-400">{">"} Live Deployment ✓</div>
      </div>
    ),
  },
  {
    href: "/bubble",
    badge: "No-Code Enterprise Web Apps",
    logo: <BubbleLogo />,
    name: "Bubble",
    headline: "Full-Stack Web Apps Without Code",
    body: "Complex multi-tenant web applications, marketplace platforms, and user portals built with battle-tested database schemas on Bubble.",
    bullets: ["Multi-tenant portals & marketplaces", "Complex database schema design", "External REST API connectors", "Full performance optimization audits"],
    glowColor: "neon-rose" as const,
    mockup: (
      <div className="space-y-2.5 w-full max-w-[260px]">
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Active Portals", v: "24" }, { l: "API Calls / day", v: "150k" }].map((s, i) => (
            <div key={i} className="p-2 text-center bg-jet border border-jet-border rounded-lg">
              <div className="text-xs font-bold text-cerulean">{s.v}</div>
              <div className="text-[10px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="h-10 flex items-end gap-1.5 px-2 bg-jet rounded-lg border border-jet-border">
          {[40, 60, 50, 70, 65, 88].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? "var(--cerulean)" : "rgba(0, 123, 167, 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
            <Layers className="w-3.5 h-3.5 text-neon-rose" /> 6 Supported Platforms
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          6 Platforms.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
            One Dedicated Studio.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-white/70 leading-relaxed"
        >
          We choose the technology that truly fits your product needs — not whichever one we default to. Explore our specialised engineering across mobile, web, and internal ops.
        </motion.p>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto relative z-10 space-y-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <Card3D glowColor={svc.glowColor} maxTilt={4} className="w-full">
              <div className="rounded-2xl bg-jet-surface/90 border border-jet-border overflow-hidden backdrop-blur-xl shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Visual mockup panel */}
                  <div className="p-8 flex items-center justify-center min-h-[220px] bg-jet border-b lg:border-b-0 lg:border-r border-jet-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-cerulean/5 to-transparent pointer-events-none" />
                    {svc.mockup}
                  </div>

                  {/* Content panel */}
                  <div className="p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      {svc.logo}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-cerulean mb-1 font-semibold">
                          {svc.badge}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/95">
                          {svc.name}
                        </h2>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-white/85">
                      {svc.headline}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed text-white/60">
                      {svc.body}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.bullets.map((b, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-sm text-white/80">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${svc.glowColor === "neon-rose" ? "text-neon-rose" : "text-cerulean"}`} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={svc.href} className="w-fit">
                      <button
                        data-testid={`button-service-${svc.name.toLowerCase()}`}
                        className={svc.glowColor === "neon-rose" ? "btn-neon-rose" : "btn-cerulean"}
                      >
                        Explore {svc.name} Services <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 rounded-3xl bg-jet-surface/90 border border-jet-border backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/15 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-rose/15 blur-[80px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase mb-4 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean">
            <Sparkles className="w-3.5 h-3.5" /> Tailored Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Not Sure Which{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">
              Platform Fits?
            </span>
          </h2>
          <p className="mb-8 text-white/60 max-w-lg mx-auto text-sm leading-relaxed">
            Tell us about your product roadmap, scale expectations, and timeline. We will recommend the right stack with zero bias.
          </p>
          <Link href="/contact">
            <button className="btn-duo mx-auto flex items-center gap-2">
              Get an Architecture Recommendation <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
