import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/kinetixmvp-icon-v2-transparent.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", cta: true },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 md:px-6">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-5 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 relative group">
          <img
            src={logoImg}
            alt="KinetixMVP Logo"
            style={{ width: 64, height: 64 }}
            className="object-contain"
          />
          <span className="text-xl font-bold tracking-tight font-display text-white">
            KinetixMVP
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            link.cta ? (
              <Link key={link.href} href={link.href}>
                <Button className="bg-white text-black hover:bg-white/90 border-0 shadow-lg shadow-white/10 rounded-full px-5 h-9 text-sm">
                  {link.label}
                </Button>
              </Link>
            ) : (
              <Link key={link.href} href={link.href} className={`text-sm font-semibold transition-colors hover:text-cyan-400 ${location === link.href ? "text-cyan-400" : "text-white/90"}`}>
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-0 pt-16 pb-8 px-6 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col gap-4 rounded-b-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
