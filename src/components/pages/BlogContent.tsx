"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Sparkles } from "lucide-react";
import { BLOG_SUMMARIES, CATEGORIES } from "@/data/blog-posts";
import { Card3D } from "@/components/Card3D";

export default function BlogContent() {
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return BLOG_SUMMARIES.filter((p) => {
      const matchesCategory = active === "All" || p.category === active;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [active, searchQuery]);

  return (
    <div className="min-h-screen bg-jet text-white">
      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean shadow-sm shadow-cerulean/20">
              <Sparkles className="w-3.5 h-3.5 text-neon-rose" /> Engineering Knowledge Base
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
          >
            Studio Insights &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
              Technical Blueprints
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Practical architecture breakdowns, benchmark case studies, and engineering deep-dives across FlutterFlow, Bubble, Retool, Lovable, Podio, and Replit.
          </motion.p>
        </div>

        {/* Search bar & Category filters */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-cerulean" />
            <input
              type="text"
              placeholder="Search guides (e.g. FlutterFlow, Supabase, Retool, CRM, AI agents)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 text-sm rounded-xl bg-jet-surface border border-jet-border text-white placeholder:text-white/40 focus:border-cerulean focus:ring-2 focus:ring-cerulean/30 focus:outline-none transition-all shadow-inner"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  data-testid={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-cerulean to-neon-rose text-white shadow-lg shadow-cerulean/30 border-transparent"
                      : "bg-jet-surface text-white/70 border border-jet-border hover:border-cerulean/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Results count */}
        <div className="text-xs text-white/50 mb-6 px-1 flex items-center justify-between font-mono">
          <span>
            Showing <strong className="text-cerulean">{filtered.length}</strong> {filtered.length === 1 ? "article" : "articles"}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-neon-rose hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
            >
              <Card3D glowColor={i % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={5} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="h-full flex flex-col rounded-2xl bg-jet-surface/90 border border-jet-border group-hover:border-cerulean/50 transition-colors overflow-hidden backdrop-blur-md">
                    {post.heroImage && (
                      <div className="relative w-full h-44 overflow-hidden bg-jet border-b border-jet-border">
                        <img
                          src={`${post.heroImage}?v=2`}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('og-default.png')) {
                              target.src = '/og-default.png';
                            }
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold mb-3 leading-snug group-hover:text-cerulean transition-colors text-white/95">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-6 flex-1 text-white/60">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-jet-border">
                        <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-cerulean" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-neon-rose" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cerulean group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-jet-surface/50 rounded-2xl border border-jet-border">
            <p className="text-lg text-white mb-2 font-semibold">No matching guides found</p>
            <p className="text-sm text-white/50 mb-6">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => {
                setActive("All");
                setSearchQuery("");
              }}
              className="btn-cerulean"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
