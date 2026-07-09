"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plug, Zap, Shield, Globe, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const integrations = [
  "Stripe & Payment Gateways",
  "Twilio (SMS & Voice)",
  "SendGrid & Brevo (Email)",
  "Slack & Microsoft Teams",
  "Google Workspace APIs",
  "Salesforce & HubSpot",
  "QuickBooks & Xero",
  "Shopify & WooCommerce",
  "Firebase & Supabase",
  "OpenAI & Anthropic APIs",
  "Zapier & Make Webhooks",
  "Custom REST & GraphQL APIs",
];

export default function CustomApiContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
              <Plug className="w-4 h-4" /> Custom API Integration
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Connect Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Apps, Data & Tools</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>
              Most software problems aren't about the software itself — they're about the gaps between the software. KinetixSoft builds the API integrations that close those gaps, so your tools actually talk to each other.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold" data-testid="button-api-start"
                  style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                >Discuss Your Integration</button>
              </Link>
              <Link href="/contact">
                <button className="h-12 px-8 text-sm font-semibold flex items-center gap-2"
                  style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                >Book a Call <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
          </motion.div>
          {/* API connection mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex items-center justify-center h-[360px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="relative w-full max-w-sm z-10 font-mono text-xs space-y-2 p-5" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <div style={{ color: "#8A93A3" }}>POST /api/webhook/stripe</div>
              <div style={{ color: "#4ABD7A" }}>{"{"}</div>
              <div className="pl-4" style={{ color: "#E9EBEF" }}>"event": "payment.succeeded",</div>
              <div className="pl-4" style={{ color: "#E9EBEF" }}>"amount": 4900,</div>
              <div className="pl-4" style={{ color: "#E9EBEF" }}>"customer": "cus_xyz123"</div>
              <div style={{ color: "#4ABD7A" }}>{"}"}</div>
              <div className="pt-2" style={{ color: "#8A93A3" }}>{">"} Validated ✓</div>
              <div style={{ color: "#4A5FBD" }}>{">"} Updated CRM record</div>
              <div style={{ color: "#4A5FBD" }}>{">"} Sent onboarding email</div>
              <div style={{ color: "#4ABD7A" }}>{">"} 200 OK</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>What We Build</h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>From simple webhook connections to multi-system data pipelines — here's the kind of integration work we do.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Plug className="w-6 h-6" />, title: "Third-Party API Connections", desc: "Connect your FlutterFlow, Lovable, or Retool app to any REST API, GraphQL endpoint, or webhook-enabled service." },
            { icon: <Zap className="w-6 h-6" />, title: "Workflow Automation", desc: "Build custom automation pipelines that move data between your tools, trigger actions based on events, and eliminate manual steps." },
            { icon: <Globe className="w-6 h-6" />, title: "Data Sync & ETL", desc: "Sync data between your CRM, database, and operational tools so every system has the information it needs, when it needs it." },
            { icon: <Shield className="w-6 h-6" />, title: "Secure Integration Architecture", desc: "Proper secret management, API key rotation, webhook signature validation, and error handling — built in from the start." },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-7 card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS WE BUILD */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px", padding: "40px" }}>
            <h2 className="text-2xl font-semibold mb-8" style={{ color: "#E9EBEF" }}>Services & Platforms We Integrate With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {integrations.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#4A5FBD" }} />
                  <span className="text-sm" style={{ color: "#E9EBEF" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10 mb-8">
        <div className="p-8 md:p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
          <h2 className="text-3xl mb-2 text-center" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
            Discuss Your <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Integration</em>
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: "#8A93A3" }}>Tell us what needs to connect and we'll scope it out in 24 hours.</p>
          <ContactForm defaultService="custom-api" />
        </div>
      </section>
    </div>
  );
}
