"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const ALL_POSTS = [
  {
    slug: "podio-workspace-guide",
    title: "How to Build a Podio Workspace Your Team Actually Uses",
    date: "Jun 10, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    excerpt: "Most Podio workspaces fail not because Podio is wrong for the job, but because the workspace was built around what the tool offers instead of how the team works. Here's how to avoid that.",
  },
  {
    slug: "flutterflow-production-apps",
    title: "What It Really Takes to Ship a FlutterFlow App to Production",
    date: "Jun 8, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "FlutterFlow gets you a working UI fast. But getting from a working UI to an app you'd put your name on — with real auth, a solid data model, and App Store approval — is a different story.",
  },
  {
    slug: "retool-internal-tools",
    title: "Why Your Team Keeps Going Back to SQL (And How Retool Fixes That)",
    date: "Jun 6, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Retool",
    categoryColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    excerpt: "If your ops team is still running manual SQL queries to approve records, look up users, or export reports — the problem isn't the people. It's that no one built them a proper interface.",
  },
  {
    slug: "lovable-ai-apps",
    title: "From Prompt to Product: What AI-Generated Apps Still Get Wrong",
    date: "Jun 4, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Lovable",
    categoryColor: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    excerpt: "AI-assisted tools like Lovable can generate a working app in minutes. The part they don't tell you: the app usually breaks the moment it meets real users, real data, or real edge cases.",
  },
  {
    slug: "replit-ai-agents",
    title: "Building AI Agents That Run in the Background Without Breaking",
    date: "Jun 2, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Replit",
    categoryColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    excerpt: "An AI agent that works in a demo and an agent that runs reliably in production are very different things. Here's what the gap looks like and how to close it.",
  },
  {
    slug: "future-of-low-code",
    title: "The Future of Low-Code Development",
    date: "Jan 12, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Industry",
    categoryColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    excerpt: "How platforms like FlutterFlow and Retool are changing development forever — and why the hybrid approach wins.",
  },
  {
    slug: "automating-crm-podio",
    title: "Automating Your CRM with Podio",
    date: "Jan 10, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    excerpt: "5 ways Podio workflow automation can save your team 10+ hours a week — without writing a single line of code.",
  },
];

const CATEGORIES = ["All", "Podio", "FlutterFlow", "Retool", "Lovable", "Replit", "Industry"];

export default function BlogContent() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-5" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}
          >
            Low-Code <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Insights</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg" style={{ color: "#8A93A3" }}
          >
            Practical guides, case studies, and lessons from building real products across Podio, FlutterFlow, Retool, Lovable, and Replit.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} data-testid={`filter-${cat.toLowerCase()}`}
              className="px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                background: active === cat ? "#4A5FBD" : "#12161F",
                color: active === cat ? "#E9EBEF" : "#8A93A3",
                border: active === cat ? "1px solid #4A5FBD" : "1px solid #232A36",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="p-6 h-full flex flex-col card-hover" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${post.categoryColor}`}>{post.category}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-3 leading-snug" style={{ color: "#E9EBEF" }}>{post.title}</h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8A93A3" }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs" style={{ color: "#8A93A3" }}>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4" style={{ color: "#4A5FBD" }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "#8A93A3" }}>
            No posts found for this category.
          </div>
        )}
      </main>
    </div>
  );
}
