import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

import logoImg from "@assets/ChatGPT_Image_Sep_14,_2025,_05_33_41_PM_1770836779259.png";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0B0F19]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                <img 
                  src={logoImg} 
                  alt="Low Code Era Logo" 
                  className="w-full h-full object-contain logo-gradient scale-110" 
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter font-display text-white">
                Low Code Era
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences that transcend the ordinary. We build future-ready software solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services/podio" className="hover:text-cyan-400 transition-colors">Podio Solutions</Link></li>
              <li><Link href="/services/flutterflow" className="hover:text-cyan-400 transition-colors">FlutterFlow Apps</Link></li>
              <li><Link href="/services/retool" className="hover:text-cyan-400 transition-colors">Retool Development</Link></li>
              <li><Link href="/services/custom-api" className="hover:text-cyan-400 transition-colors">Custom API Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Github size={18} />
              </a>
              <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact@lowcodeera.com" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Low Code Era. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
