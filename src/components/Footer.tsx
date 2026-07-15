"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0B0F19]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="KinetixSoft Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              KinetixSoft is an app development studio that builds production-ready mobile,
              web, and internal tools using FlutterFlow, Lovable, Retool, Podio, Replit, and Bubble.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/podio" className="hover:text-[#4A5FBD] transition-colors">Podio Solutions</Link></li>
              <li><Link href="/flutterflow" className="hover:text-[#4A5FBD] transition-colors">FlutterFlow Apps</Link></li>
              <li><Link href="/retool" className="hover:text-[#4A5FBD] transition-colors">Retool Development</Link></li>
              <li><Link href="/lovable" className="hover:text-[#4A5FBD] transition-colors">Lovable Builds</Link></li>
              <li><Link href="/replit-platform" className="hover:text-[#4A5FBD] transition-colors">Replit Development</Link></li>
              <li><Link href="/bubble" className="hover:text-[#4A5FBD] transition-colors">Bubble Web Apps</Link></li>
              <li><Link href="/services/custom-api" className="hover:text-[#4A5FBD] transition-colors">Custom API Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-[#4A5FBD] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#4A5FBD] transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-[#4A5FBD] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#4A5FBD] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kinetixsoft/" target="_blank" rel="noopener noreferrer" aria-label="KinetixSoft Instagram" className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-white/70 hover:text-[#4A5FBD] transition-all">
                <SiInstagram size={18} />
              </a>
              <a href="https://wa.me/923079575055" target="_blank" rel="noopener noreferrer" aria-label="KinetixSoft WhatsApp" className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-white/70 hover:text-[#4A5FBD] transition-all">
                <SiWhatsapp size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kinetix-soft-b4542141b" target="_blank" rel="noopener noreferrer" aria-label="KinetixSoft LinkedIn" className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-white/70 hover:text-[#4A5FBD] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:info@kinetixsoft.com" aria-label="Email KinetixSoft" className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-white/70 hover:text-[#4A5FBD] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 KinetixSoft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
