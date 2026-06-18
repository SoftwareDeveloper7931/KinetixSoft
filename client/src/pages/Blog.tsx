import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

const ALL_POSTS = [
  {
    slug: "podio-workspace-guide",
    title: "How to Build a Podio Workspace Your Team Actually Uses",
    date: "Jun 10, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    excerpt: "Most Podio workspaces fail not because Podio is wrong for the job, but because the workspace was built around what the tool offers instead of how the team works. Here's how to avoid that."
  },
  {
    slug: "flutterflow-production-apps",
    title: "What It Really Takes to Ship a FlutterFlow App to Production",
    date: "Jun 8, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "FlutterFlow gets you a working UI fast. But getting from a working UI to an app you'd put your name on — with real auth, a solid data model, and App Store approval — is a different story."
  },
  {
    slug: "retool-internal-tools",
    title: "Why Your Team Keeps Going Back to SQL (And How Retool Fixes That)",
    date: "Jun 6, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Retool",
    categoryColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    excerpt: "If your ops team is still running manual SQL queries to approve records, look up users, or export reports — the problem isn't the people. It's that no one built them a proper interface."
  },
  {
    slug: "lovable-ai-apps",
    title: "From Prompt to Product: What AI-Generated Apps Still Get Wrong",
    date: "Jun 4, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Lovable",
    categoryColor: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    excerpt: "AI-assisted tools like Lovable can generate a working app in minutes. The part they don't tell you: the app usually breaks the moment it meets real users, real data, or real edge cases."
  },
  {
    slug: "replit-ai-agents",
    title: "Building AI Agents That Run in the Background Without Breaking",
    date: "Jun 2, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Replit",
    categoryColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    excerpt: "An AI agent that works in a demo and an agent that runs reliably in production are very different things. Here's what the gap looks like and how to close it."
  },
  {
    slug: "future-of-low-code",
    title: "The Future of Low-Code Development",
    date: "Jan 12, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Industry",
    categoryColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    excerpt: "How platforms like FlutterFlow and Retool are changing development forever — and why the hybrid approach wins."
  },
  {
    slug: "automating-crm-podio",
    title: "Automating Your CRM with Podio",
    date: "Jan 10, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    excerpt: "5 ways Podio workflow automation can save your team 10+ hours a week — without writing a single line of code."
  },
];

const CATEGORIES = ["All", "Podio", "FlutterFlow", "Retool", "Lovable", "Replit", "Industry"];

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ALL_POSTS : ALL_POSTS.filter(p => p.category === active);

  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />
      <Navigation />

      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-5"
          >
            Low-Code <span className="italic text-gradient">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Practical guides, case studies, and lessons from building real products across Podio, FlutterFlow, Retool, Lovable, and Replit.
          </motion.p>
        </div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`filter-blog-${cat.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === cat
                  ? "bg-white text-black border-white"
                  : "glass-panel border-white/10 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="glass-card border border-white/10 rounded-2xl flex flex-col overflow-hidden hover:border-white/20 transition-colors group"
            >
              {/* Color band top */}
              <div className={`h-1 w-full bg-gradient-to-r ${
                post.category === "Podio"      ? "from-green-500 to-cyan-500" :
                post.category === "FlutterFlow"? "from-blue-500 to-cyan-500"  :
                post.category === "Retool"     ? "from-violet-500 to-indigo-500":
                post.category === "Lovable"    ? "from-rose-500 to-purple-500" :
                post.category === "Replit"     ? "from-orange-500 to-red-500"  :
                                                 "from-cyan-500 to-blue-500"
              }`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Category + meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/30">
                    <Clock size={10} /> {post.readTime}
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-cyan-400 text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all"
                    data-testid={`link-blog-${post.slug}`}
                  >
                    Read <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-20">No posts in this category yet.</div>
        )}
      </main>

      <Footer />
    </div>
  );
}
