"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0A0A0A] border-t border-white/5">
      {/* Top glowing laser line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #007BA7 30%, #FF2D95 70%, transparent 100%)",
          boxShadow: "0 0 15px rgba(255, 45, 149, 0.4), 0 0 25px rgba(0, 123, 167, 0.4)",
        }}
      />

      {/* Atmospheric glow */}
      <div 
        className="absolute bottom-0 right-10 w-[450px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 123, 167, 0.12) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 left-10 w-[400px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255, 45, 149, 0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#007BA7]/30 blur-md rounded-full group-hover:bg-[#FF2D95]/40 transition-colors" />
                <Image
                  src="/logo.png"
                  alt="KinetixSoft Logo"
                  width={48}
                  height={48}
                  className="object-contain relative z-10"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Kinetix<span className="text-gradient-rose">Soft</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              KinetixSoft is a next-generation engineering studio building production-ready mobile,
              web, and internal systems on FlutterFlow, Lovable, Retool, Podio, Replit, and Bubble.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono" style={{ background: "rgba(0, 123, 167, 0.1)", border: "1px solid rgba(0, 123, 167, 0.3)", color: "#00A3DE" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3DE] animate-pulse" />
              Worldwide Studio · Lahore PK
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider text-gradient-cerulean">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/flutterflow" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">FlutterFlow Apps <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/flutterflow/tutorials" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">FlutterFlow Tutorials <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/lovable" className="hover:text-[#FF2D95] transition-colors flex items-center gap-1 group">Lovable Web Apps <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/retool" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">Retool Dashboards <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/podio" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">Podio CRM & Workflows <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/replit-platform" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">Replit Development <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/bubble" className="hover:text-[#00A3DE] transition-colors flex items-center gap-1 group">Bubble Web Apps <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/services/custom-api" className="hover:text-[#FF2D95] transition-colors flex items-center gap-1 group">Custom API Integration <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider text-gradient-cerulean">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-[#00A3DE] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF2D95] transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-[#00A3DE] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#00A3DE] transition-colors">Engineering Blog</Link></li>
              <li><Link href="/case-studies/cashnix" className="hover:text-[#FF2D95] transition-colors">Case Study: Cashnix</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider text-gradient-rose">Connect</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Get in touch with our engineering team for scoping and architecture consultation.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/kinetixsoft/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="KinetixSoft Instagram" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/70 hover:text-[#FF2D95] hover:border-[#FF2D95]/50 transition-all hover:scale-105"
              >
                <SiInstagram size={18} />
              </a>
              <a 
                href="https://wa.me/923079575055" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="KinetixSoft WhatsApp" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/70 hover:text-[#00A3DE] hover:border-[#007BA7]/50 transition-all hover:scale-105"
              >
                <SiWhatsapp size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kinetix-soft-b4542141b" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="KinetixSoft LinkedIn" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/70 hover:text-[#00A3DE] hover:border-[#007BA7]/50 transition-all hover:scale-105"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:info@kinetixsoft.com" 
                aria-label="Email KinetixSoft" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/70 hover:text-[#FF2D95] hover:border-[#FF2D95]/50 transition-all hover:scale-105"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KinetixSoft. Jet Black · Cerulean Blue · Neon Rose.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
