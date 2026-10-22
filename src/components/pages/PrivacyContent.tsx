"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest mb-4 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean">
            <Shield className="w-3.5 h-3.5 text-neon-rose" /> Legal Governance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Policy</span>
          </h1>
          <p className="text-xs font-mono text-white/50">Last updated: 2026 Edition</p>
        </motion.div>

        <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border space-y-8 backdrop-blur-md">
          <section>
            <h2 className="text-xl font-bold mb-3 text-white/95">Information We Collect</h2>
            <p className="text-sm leading-relaxed text-white/65">
              When you contact us through our website, we collect the details you provide: your name, email address, phone number (optional), company name, and project message. We also collect anonymized analytics data (pages visited, device type, country) to optimize interface performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white/95">How We Use Your Information</h2>
            <p className="text-sm leading-relaxed text-white/65">
              We use submissions solely to evaluate project scope and communicate directly with you. We do not sell, rent, trade, or distribute your information to any third parties for advertising or commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white/95">Data Storage & Security</h2>
            <p className="text-sm leading-relaxed text-white/65">
              Contact requests are transmitted over encrypted TLS 1.3 channels and stored in secure cloud vaults with role-based access restrictions. We retain enquiry records for up to 24 months or until deletion is formally requested.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white/95">Transactional Email Services</h2>
            <p className="text-sm leading-relaxed text-white/65">
              We use Brevo to route transactional notification emails when forms are submitted. Brevo acts as a compliant data processor under strict confidentiality terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white/95">Your Rights & Contact</h2>
            <p className="text-sm leading-relaxed text-white/65">
              You maintain the right to inspect, update, or completely erase any personal information we hold. Direct requests to our privacy officer at{" "}
              <a href="mailto:info@kinetixsoft.com" className="text-cerulean underline hover:text-neon-rose transition-colors">
                info@kinetixsoft.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
