"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest mb-4 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean">
            <FileText className="w-3.5 h-3.5 text-neon-rose" /> Terms of Engagement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Service</span>
          </h1>
          <p className="text-xs font-mono text-white/50">Last updated: 2026 Edition</p>
        </motion.div>

        <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border space-y-8 backdrop-blur-md">
          {[
            {
              title: "Agreement to Terms",
              body: "By commissioning KinetixSoft for engineering work or accessing this website, you agree to these Terms of Service. If you disagree with any terms, please do not engage our services.",
            },
            {
              title: "Engineering Services & SOW",
              body: "KinetixSoft builds production mobile applications, web platforms, and internal tools on FlutterFlow, Lovable, Retool, Podio, and Replit. Deliverables, milestones, and timelines are codified in individual Statements of Work (SOW).",
            },
            {
              title: "Intellectual Property Ownership",
              body: "Upon complete settlement of project invoices, you own 100% of custom code, designs, and architectural artifacts created specifically for your build. KinetixSoft retains portfolio exhibition rights unless governed by an explicit mutual NDA.",
            },
            {
              title: "Payment Milestones",
              body: "Standard builds are structured across phased milestones (e.g. Kickoff, Staging Alpha, Production Cutover). Work commences upon initial deposit. All pricing is invoiced in USD unless otherwise documented.",
            },
            {
              title: "Scope & Engineering Changes",
              body: "Any material expansion beyond the approved SOW is handled transparently through documented change orders with clear schedule and cost impact estimates before implementation.",
            },
            {
              title: "Contact & Legal Notices",
              body: "For all contractual notices, reach our engineering leadership at info@kinetixsoft.com.",
            },
          ].map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold mb-3 text-white/95">{section.title}</h2>
              <p className="text-sm leading-relaxed text-white/65">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
