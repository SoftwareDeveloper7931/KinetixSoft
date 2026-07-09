"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6" style={{ border: "1px solid #232A36", borderRadius: "6px", color: "#8A93A3", background: "rgba(74,95,189,0.08)" }}>
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Let's Build Something <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Amazing</em>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#8A93A3" }}>
              Whether you have a fully scoped project or just an idea you're still working through — reach out. We'll listen, ask the right questions, and tell you honestly what we think the best path forward is.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@kinetixsoft.com", href: "mailto:info@kinetixsoft.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+92 307 9575055", href: "tel:+923079575055" },
                { icon: <SiWhatsapp className="w-5 h-5" />, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/923079575055" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Lahore, Pakistan", href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{c.icon}</div>
                  <div>
                    <div className="text-xs eyebrow">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: "#E9EBEF" }}>{c.value}</a>
                    ) : (
                      <div className="text-sm font-semibold" style={{ color: "#E9EBEF" }}>{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <h3 className="font-semibold mb-2" style={{ color: "#E9EBEF" }}>Response time</h3>
              <p className="text-sm" style={{ color: "#8A93A3" }}>We respond to all enquiries within one business day. For urgent projects, mention it in your message and we'll prioritise.</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="p-8 md:p-10" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#E9EBEF" }}>Send Us a Message</h2>
              <p className="text-sm mb-8" style={{ color: "#8A93A3" }}>Fill in the details below and we'll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
