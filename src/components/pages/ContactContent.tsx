"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";
import { Card3D } from "@/components/Card3D";

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-jet text-white">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> Direct Studio Channels
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                Extraordinary
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 text-white/70">
              Whether you have a fully scoped product architecture or an early-stage concept that needs technical validation — reach out. We'll examine feasibility, outline architecture options, and give you honest, actionable advice.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@kinetixsoft.com", href: "mailto:info@kinetixsoft.com", color: "cerulean" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+92 307 9575055", href: "tel:+923079575055", color: "neon-rose" },
                { icon: <SiWhatsapp className="w-5 h-5 text-emerald-400" />, label: "WhatsApp", value: "Chat with engineering (+92 307 9575055)", href: "https://wa.me/923079575055", color: "emerald" },
                { icon: <MapPin className="w-5 h-5" />, label: "Global HQ", value: "Lahore, Pakistan (Worldwide Delivery)", href: null, color: "cerulean" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-3.5 rounded-xl bg-jet-surface/60 border border-jet-border hover:border-cerulean/40 transition-colors">
                  <div
                    className={`w-11 h-11 flex items-center justify-center shrink-0 rounded-xl ${
                      c.color === "neon-rose"
                        ? "bg-neon-rose/10 text-neon-rose border border-neon-rose/30 shadow-sm shadow-neon-rose/20"
                        : c.color === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/20"
                        : "bg-cerulean/10 text-cerulean border border-cerulean/30 shadow-sm shadow-cerulean/20"
                    }`}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white/40">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white/90 hover:text-cerulean transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-white/90">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card3D glowColor="cerulean" maxTilt={4}>
              <div className="p-6 rounded-2xl bg-jet-surface/80 border border-jet-border">
                <div className="flex items-center gap-2 mb-2 text-cerulean font-semibold text-sm">
                  <Clock className="w-4 h-4 text-neon-rose" /> 24-Hour SLA Guarantee
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  We respond to all project requests within one business day. For urgent launches or ongoing system emergencies, note it in your message and we'll escalate immediately.
                </p>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card3D glowColor="neon-rose" maxTilt={4}>
              <div className="p-8 md:p-12 rounded-3xl bg-jet-surface/90 border border-jet-border backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/10 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-rose/10 blur-[80px] pointer-events-none" />

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white/95">
                  Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Message</span>
                </h2>
                <p className="text-sm mb-8 text-white/60">
                  Tell us about your requirements and we will reply with an estimate and proposal.
                </p>
                <ContactForm />
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
