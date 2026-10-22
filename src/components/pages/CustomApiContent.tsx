"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plug, Zap, Shield, Globe, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

const integrations = [
  "Stripe & Custom Payment Gateways",
  "Twilio (SMS, Voice & WhatsApp)",
  "SendGrid, Postmark & Brevo",
  "Slack & Microsoft Teams Bots",
  "Google Workspace & Cloud APIs",
  "Salesforce & HubSpot CRM",
  "QuickBooks, Xero & Accounting",
  "Shopify & Headless Commerce",
  "Firebase & Supabase Postgres",
  "OpenAI, Claude & Gemini Models",
  "Zapier, Make & n8n Webhooks",
  "High-Throughput REST & GraphQL APIs",
];

export default function CustomApiContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <Plug className="w-3.5 h-3.5 text-neon-rose" /> Enterprise API Integration
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6">
              Connect Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                Apps, Data & AI Models
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-white/70">
              Modern digital bottlenecks happen at the seams between fragmented services. KinetixSoft builds custom, ultra-resilient API integrations and webhook pipelines that connect your tech stack into a single unified engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button data-testid="button-api-start" className="btn-duo">
                  Discuss Your Integration
                </button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-7 rounded-xl font-medium text-sm border border-jet-border bg-jet-surface/80 hover:bg-jet-elevated hover:border-cerulean/50 transition-all flex items-center gap-2 text-white/90">
                  Book a Technical Call <ArrowRight className="w-4 h-4 text-cerulean" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* API connection 3D mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-cerulean/15 blur-[90px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-rose/15 blur-[90px] pointer-events-none" />

            <Card3D glowColor="cerulean" maxTilt={8} className="w-full max-w-md">
              <div className="relative font-mono text-xs bg-jet-surface/95 border border-jet-border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-jet/90 border-b border-jet-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-neon-rose/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-cerulean/80" />
                    <span className="text-white/40 ml-2 text-[11px] flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-cerulean" /> webhook_router.ts
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    200 OK
                  </span>
                </div>
                <div className="p-5 space-y-2 text-xs">
                  <div className="text-white/40">POST /api/v1/webhooks/stripe</div>
                  <div className="text-cerulean">{"{"}</div>
                  <div className="pl-4 text-white/80">"event": "invoice.payment_succeeded",</div>
                  <div className="pl-4 text-white/80">"amount": 14900,</div>
                  <div className="pl-4 text-white/80">"customer_id": "cus_92k8a7L",</div>
                  <div className="pl-4 text-neon-rose">"sync_destinations": ["supabase", "salesforce"]</div>
                  <div className="text-cerulean">{"}"}</div>
                  <div className="pt-2 border-t border-jet-border/60 text-[11px] space-y-1">
                    <div className="text-emerald-400">✓ Webhook signature cryptographically verified</div>
                    <div className="text-cerulean">→ PostgreSQL transaction committed (12ms)</div>
                    <div className="text-neon-rose">→ Discord alerts & telemetry dispatched</div>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase mb-3 rounded-full border border-neon-rose/30 bg-neon-rose/10 text-neon-rose">
            <Sparkles className="w-3.5 h-3.5" /> Core Competencies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Integration Systems We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">
              Architect
            </span>
          </h2>
          <p className="text-lg text-white/60">From micro-webhooks to high-throughput data sync pipelines — reliable integration without edge-case failure.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Plug className="w-6 h-6" />, title: "Third-Party API Connectors", desc: "Seamlessly link FlutterFlow, Bubble, Lovable, or Retool apps with REST, GraphQL, and SOAP backends with automated authentication." },
            { icon: <Zap className="w-6 h-6" />, title: "Event-Driven Automation", desc: "Build reactive pipelines that process webhooks in real-time, retry failed executions with exponential backoff, and notify support instantly." },
            { icon: <Globe className="w-6 h-6" />, title: "Two-Way Data Sync & ETL", desc: "Keep CRMs, production databases, and accounting software synchronized with idempotency keys and strict conflict resolution." },
            { icon: <Shield className="w-6 h-6" />, title: "Hardened Security & Audit Logs", desc: "Cryptographic signature validation, OAuth2 refresh flows, secret rotation in cloud vaults, and comprehensive tamper-proof audit trails." },
          ].map((f, i) => (
            <Card3D key={i} glowColor={i % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={6}>
              <div className="p-8 rounded-2xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/40 transition-colors h-full">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${i % 2 === 0 ? "bg-cerulean/10 text-cerulean border border-cerulean/30 shadow-sm shadow-cerulean/20" : "bg-neon-rose/10 text-neon-rose border border-neon-rose/30 shadow-sm shadow-neon-rose/20"}`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white/95">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS WE BUILD */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <Card3D glowColor="cerulean" maxTilt={3} className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight text-white/95">
              Services & Protocols We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">
                Regularly Integrate
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {integrations.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-jet border border-jet-border text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-cerulean" />
                  <span className="text-white/85 text-xs font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card3D>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/15 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-rose/15 blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center tracking-tight">
            Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Integration</span>
          </h2>
          <p className="text-center text-sm mb-10 text-white/60">
            Tell us which services you need connected and we will provide an architectural plan within 24 hours.
          </p>
          <ContactForm defaultService="custom-api" />
        </div>
      </section>
    </div>
  );
}
