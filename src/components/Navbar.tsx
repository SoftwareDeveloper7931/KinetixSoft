"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", cta: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 md:px-6">
      <div
        className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between overflow-visible"
        style={{
          background: "rgba(10,14,20,0.92)",
          border: "1px solid #232A36",
          borderRadius: "6px",
          backdropFilter: "blur(16px)",
        }}
      >
        <Link href="/" className="flex items-center z-50 relative group">
          <Image
            src="/logo.png"
            alt="KinetixSoft Logo"
            width={72}
            height={72}
            className="object-contain"
            priority
          />
          <span
            className="text-xl font-semibold tracking-tight -ml-2"
            style={{ color: "#E9EBEF", fontFamily: "Inter, sans-serif" }}
          >
            KinetixSoft
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.cta ? (
              <Link key={link.href} href={link.href}>
                <button
                  data-testid="nav-cta-contact"
                  style={{
                    background: "#4A5FBD",
                    color: "#E9EBEF",
                    borderRadius: "6px",
                    padding: "0 20px",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD";
                  }}
                >
                  {link.label}
                </button>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "#4A5FBD" : "#8A93A3",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden z-50 relative"
          style={{ color: "#E9EBEF" }}
          data-testid="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-0 pt-16 pb-8 px-6 md:hidden flex flex-col gap-4"
            style={{
              background: "rgba(10,14,20,0.97)",
              borderBottom: "1px solid #232A36",
              borderRadius: "0 0 6px 6px",
              backdropFilter: "blur(16px)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium py-2"
                style={{
                  color: "#E9EBEF",
                  borderBottom: "1px solid #232A36",
                  fontFamily: "Inter, sans-serif",
                }}
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
