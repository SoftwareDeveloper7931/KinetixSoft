"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Terms of Service</h1>
          <p className="text-sm mb-12" style={{ color: "#8A93A3" }}>Last updated: January 2025</p>
        </motion.div>

        <div className="space-y-8" style={{ color: "#8A93A3" }}>
          {[
            { title: "Agreement to Terms", body: "By engaging KinetixSoft for development services or accessing our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services." },
            { title: "Services", body: "KinetixSoft provides app development services on platforms including FlutterFlow, Lovable, Retool, Podio, and Replit. The specific scope, timeline, and deliverables for each engagement are defined in the project agreement or Statement of Work (SOW) provided before work commences." },
            { title: "Intellectual Property & Ownership", body: "Upon full payment for services, you own all custom work product created specifically for your project. KinetixSoft retains the right to display project work in our portfolio (without sharing proprietary business information) unless you request otherwise in writing. Pre-existing tools, libraries, and frameworks used in your build remain the property of their respective owners." },
            { title: "Payment Terms", body: "Payment terms are agreed upon in the project agreement. We typically require a deposit before work begins, with remaining payments tied to project milestones. Late payments may result in project work being paused. All prices are quoted in USD unless otherwise agreed." },
            { title: "Revisions & Change Requests", body: "Our project agreements include a defined number of revision rounds. Requests that materially change the agreed scope will be quoted as separate work and require a new agreement or change order before proceeding." },
            { title: "Limitation of Liability", body: "KinetixSoft's liability in connection with any project is limited to the total amount paid for that engagement. We are not liable for indirect, incidental, or consequential damages, including lost profits, data loss, or business interruption." },
            { title: "Disclaimer", body: "Our services and deliverables are provided as-is. While we take quality seriously and stand behind our work, we cannot guarantee specific business outcomes, app store approval, or revenue results from any app we build." },
            { title: "Governing Law", body: "These terms are governed by the laws of Pakistan. Any disputes arising from our engagement will be resolved through good-faith negotiation first, and if necessary, through mediation." },
            { title: "Changes to These Terms", body: "We may update these terms from time to time. The most current version will always be published on this page with the updated date shown above." },
            { title: "Contact", body: "Questions about these terms? Reach us at info@kinetixsoft.com." },
          ].map((section, i) => (
            <section key={i}>
              <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>{section.title}</h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
