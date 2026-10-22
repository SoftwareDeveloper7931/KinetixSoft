"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/flutterflow/tutorials", label: "Tutorials" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact", cta: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6">
      <div
        className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between rounded-xl transition-all"
        style={{
          background: "rgba(10, 10, 10, 0.82)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        }}
      >
        <Link href="/" className="flex items-center gap-2.5 z-50 relative group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#007BA7]/30 blur-md rounded-full group-hover:bg-[#FF2D95]/40 transition-colors" />
            <Image
              src="/logo.png"
              alt="KinetixSoft Logo"
              width={48}
              height={48}
              priority
              className="object-contain relative z-10 transition-transform group-hover:scale-105"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
            Kinetix<span className="text-gradient-rose">Soft</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return link.cta ? (
              <Link key={link.href} href={link.href}>
                <button
                  data-testid="nav-cta-contact"
                  className="btn-duo px-5 py-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer shadow-[0_0_20px_rgba(0,123,167,0.45)] group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="relative text-sm font-medium transition-colors py-1 group"
                style={{
                  color: isActive ? "#00A3DE" : "#94A3B8",
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #007BA7, #FF2D95)",
                      boxShadow: "0 0 8px #FF2D95",
                    }}
                  />
                )}
                {!isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007BA7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white hover:text-[#00A3DE] transition-colors"
          data-testid="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 pt-20 pb-8 px-6 md:hidden flex flex-col gap-4 rounded-b-2xl"
            style={{
              background: "rgba(10, 10, 10, 0.98)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium py-2.5 flex items-center justify-between border-b border-white/5"
                style={{
                  color: pathname === link.href ? "#FF2D95" : "#E2E8F0",
                }}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {link.cta && (
                  <span className="text-xs px-2.5 py-1 rounded bg-[#007BA7]/20 text-[#00A3DE] border border-[#007BA7]/40">
                    Get in touch
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
