"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { BLOG_SUMMARIES, CATEGORIES } from "@/data/blog-posts";

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
    <div className="min-h-screen bg-[#0B0F19]">
      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-5"
            style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Low-Code <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Insights</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg"
            style={{ color: "#8A93A3" }}
          >
            Practical guides, case studies, and engineering breakdowns for FlutterFlow, Bubble, Retool, Lovable, Podio, and Replit.
          </motion.p>
        </div>

        {/* Search bar & Category filters */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#8A93A3]" />
            <input
              type="text"
              placeholder="Search guides (e.g. wellness, car booking, fintech, delivery, Bubble)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm rounded-lg bg-[#12161F] text-[#E9EBEF] border border-[#232A36] focus:border-[#4A5FBD] focus:outline-none transition-colors placeholder:text-[#8A93A3]/60"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="px-4 py-2 text-xs md:text-sm font-semibold transition-colors"
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
        </div>

        {/* Results count */}
        <div className="text-xs text-[#8A93A3] mb-6 px-1 flex items-center justify-between">
          <span>Showing {filtered.length} {filtered.length === 1 ? "article" : "articles"}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#4A5FBD] hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div
                  className="p-6 h-full flex flex-col transition-all duration-300 group-hover:border-[#4A5FBD]/40 group-hover:-translate-y-1"
                  style={{
                    background: "#12161F",
                    border: "1px solid #232A36",
                    borderRadius: "6px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2
                    className="text-lg font-semibold mb-3 leading-snug group-hover:text-[#4A5FBD] transition-colors"
                    style={{ color: "#E9EBEF" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8A93A3" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#232A36]/60">
                    <div className="flex items-center gap-3 text-xs" style={{ color: "#8A93A3" }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#4A5FBD] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-[#12161F]/50 rounded-lg border border-[#232A36]">
            <p className="text-base text-[#E9EBEF] mb-2 font-medium">No matching guides found</p>
            <p className="text-sm text-[#8A93A3] mb-4">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setActive("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 text-xs font-semibold rounded bg-[#4A5FBD] text-white hover:bg-[#5A6FCC] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
