"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const ALL_POSTS = [
  // --- 15 HIGH-TRAFFIC CONTENT PLAN POSTS ---
  {
    slug: "flutterflow-vs-bubble-vs-lovable-2026",
    title: "FlutterFlow vs Bubble vs Lovable: Which One Should You Actually Build On in 2026?",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "9 min read",
    category: "Comparisons",
    categoryColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    excerpt: "Comparing FlutterFlow, Bubble, and Lovable for 2026? We break down cost, speed, scalability, and which platform fits your project — without the hype.",
  },
  {
    slug: "how-long-does-it-take-to-build-an-app-2026",
    title: "How Long Does It Take to Build an App in 2026? (Real Timelines, Not Sales Pitches)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Real app development timelines from a studio that ships products daily. From 2-week MVPs to 10-week full builds — here's what actually takes time and why.",
  },
  {
    slug: "how-much-does-app-development-cost-2026",
    title: "How Much Does App Development Actually Cost in 2026? (No Vague Ranges)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "9 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Tired of 'it depends' answers on app cost? Here's a real breakdown of what FlutterFlow, Bubble, Lovable, and Replit builds cost in 2026 — with actual ranges.",
  },
  {
    slug: "flutterflow-app-development-company-pakistan",
    title: "Best FlutterFlow App Development Company in Pakistan in 2026",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Rankings",
    categoryColor: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    excerpt: "Looking for a FlutterFlow development company in Pakistan? Here's what to look for, what to avoid, and why KinetixSoft is the right choice for startups and growing teams.",
  },
  {
    slug: "bubble-io-app-development-company-pakistan",
    title: "Best Bubble.io Development Agency in Pakistan in 2026",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Rankings",
    categoryColor: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    excerpt: "Looking for a Bubble.io development agency in Pakistan? We compare what to look for and explain why a local team can ship your Bubble app faster and more affordably.",
  },
  {
    slug: "what-is-flutterflow-complete-guide-2026",
    title: "What Is FlutterFlow? A Complete Guide for Non-Technical Founders (2026)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "What is FlutterFlow and is it right for your app? This plain-language guide covers how it works, what you can build, what it costs, and when it's the wrong choice.",
  },
  {
    slug: "no-code-vs-custom-development-which-is-right",
    title: "No-Code vs Custom Development: Which Is Right for Your Startup in 2026?",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Comparisons",
    categoryColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    excerpt: "Should your startup use no-code tools like FlutterFlow or Bubble, or hire developers to build custom? Here's the honest answer based on your stage, budget, and goals.",
  },
  {
    slug: "what-is-bubble-io-guide-2026",
    title: "What Is Bubble.io? A Plain-Language Guide for Founders Who Don't Code (2026)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Bubble.io lets you build full web apps without code — but how does it actually work? This guide covers the basics, real use cases, costs, and honest limitations.",
  },
  {
    slug: "how-to-build-saas-with-bubble-io",
    title: "How to Build a SaaS App with Bubble.io in 2026: A Founder's Step-by-Step Guide",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "10 min read",
    category: "How To's",
    categoryColor: "bg-teal-500/10 border-teal-500/20 text-teal-300",
    excerpt: "Want to build a SaaS product with Bubble.io? Here's the step-by-step process we use at KinetixSoft — from data design to launch — with real timelines and cost estimates.",
  },
  {
    slug: "retool-vs-internal-tool-development-guide",
    title: "Retool vs Custom-Built Internal Tools: Which Is Right for Your Team in 2026?",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Comparisons",
    categoryColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    excerpt: "Should you use Retool or build a custom internal tool? We compare cost, speed, flexibility, and long-term fit — with real examples from teams we've helped.",
  },
  {
    slug: "lovable-ai-app-builder-guide-2026",
    title: "Lovable AI App Builder: What It Is, What You Can Build, and When to Hire an Expert (2026)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Lovable turns prompts into working web apps — but what happens after the first draft? A real guide to what Lovable can and can't do, and when you need expert help.",
  },
  {
    slug: "podio-crm-development-guide-2026",
    title: "How to Build a Custom CRM with Podio in 2026 (Without Paying Enterprise Software Prices)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "How To's",
    categoryColor: "bg-teal-500/10 border-teal-500/20 text-teal-300",
    excerpt: "Podio lets you build a CRM that actually fits how your team works — not a template you bend yourself around. Here's how to do it right and what it costs.",
  },
  {
    slug: "mvp-development-guide-for-founders-2026",
    title: "How to Build an MVP in 2026 Without Wasting Money on the Wrong Things",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "9 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Most founders overbuild their first version and run out of money before they learn what users actually want. Here's how to build an MVP that teaches you something fast.",
  },
  {
    slug: "flutterflow-vs-react-native-2026",
    title: "FlutterFlow vs React Native in 2026: Which One Should You Use to Build Your Mobile App?",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Comparisons",
    categoryColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    excerpt: "FlutterFlow or React Native for your mobile app? We compare build speed, cost, output quality, and long-term flexibility — with a clear recommendation for each use case.",
  },
  {
    slug: "how-to-find-good-app-development-agency-2026",
    title: "How to Find a Good App Development Agency in 2026 (Without Getting Burned)",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "9 min read",
    category: "Guides",
    categoryColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    excerpt: "Hiring the wrong dev agency is one of the most expensive mistakes a founder can make. Here's exactly what to ask, what to look for, and what red flags to run from.",
  },
  // --- COUNTRY-SPECIFIC FLUTTERFLOW POSTS ---
  {
    slug: "best-flutterflow-app-development-company-usa",
    title: "Best FlutterFlow App Development Company in the USA in 2026",
    date: "Jul 21, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for the best FlutterFlow app development company in the USA? Compare what to look for, red flags to avoid, and why global studios deliver better results for US startups.",
  },
  {
    slug: "best-flutterflow-app-development-company-uk",
    title: "Best FlutterFlow App Development Company in the UK in 2026",
    date: "Jul 20, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow development company in the UK? Here's what separates great agencies from expensive ones — and how to get a production-ready app without London pricing.",
  },
  {
    slug: "best-flutterflow-app-development-company-uae",
    title: "Best FlutterFlow App Development Company in UAE in 2026",
    date: "Jul 19, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow app development company in UAE or Dubai? We cover what to look for, common app types in the UAE market, and how to work with the right team.",
  },
  {
    slug: "best-flutterflow-app-development-company-saudi-arabia",
    title: "Best FlutterFlow App Development Company in Saudi Arabia in 2026",
    date: "Jul 18, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in Saudi Arabia? Learn what Vision 2030 app builders need to know, and find a partner who understands the KSA market.",
  },
  {
    slug: "best-flutterflow-app-development-company-india",
    title: "Best FlutterFlow App Development Company in India in 2026",
    date: "Jul 17, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow development agency in India? We cover what to look for beyond a low price — architecture quality, communication, and production-ready apps.",
  },
  {
    slug: "best-flutterflow-app-development-company-gulf",
    title: "Best FlutterFlow App Development Companies in the Gulf Region in 2026",
    date: "Jul 16, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow agency serving the Gulf region? We cover what GCC founders need in a development partner — Arabic support, compliance, and real delivery track records.",
  },
  {
    slug: "best-flutterflow-app-development-company-europe",
    title: "Best FlutterFlow App Development Companies in Europe in 2026",
    date: "Jul 15, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow development agency in Europe? This overview covers what European founders need, GDPR requirements, and how to find a team that delivers.",
  },
  {
    slug: "best-flutterflow-app-development-company-germany",
    title: "Best FlutterFlow App Development Company in Germany in 2026",
    date: "Jul 14, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development company in Germany? Learn what German startups need from a FlutterFlow agency in 2026 — including GDPR, data hosting, and delivery standards.",
  },
  {
    slug: "best-flutterflow-app-development-company-australia",
    title: "Best FlutterFlow App Development Company in Australia in 2026",
    date: "Jul 13, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in Australia? Here's what Australian founders get wrong when hiring, and how to find a team that ships on time without Sydney pricing.",
  },
  {
    slug: "best-flutterflow-app-development-company-canada",
    title: "Best FlutterFlow App Development Company in Canada in 2026",
    date: "Jul 12, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development agency in Canada? We break down what to look for, what Canadian startups typically build on FlutterFlow, and how to hire right.",
  },
  {
    slug: "best-flutterflow-app-development-company-qatar",
    title: "Best FlutterFlow App Development Company in Qatar in 2026",
    date: "Jul 11, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development agency in Qatar? We cover what Qatari founders look for in 2026, plus what to ask before signing with any development team.",
  },
  {
    slug: "best-flutterflow-app-development-company-france",
    title: "Best FlutterFlow App Development Company in France in 2026",
    date: "Jul 10, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development agency in France? We cover what French founders need from a development partner — including language support, GDPR, and realistic timelines.",
  },
  {
    slug: "best-flutterflow-app-development-company-netherlands",
    title: "Best FlutterFlow App Development Company in the Netherlands in 2026",
    date: "Jul 9, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in the Netherlands? We cover what Dutch founders value in a development partner — and why global teams often outperform local ones on cost.",
  },
  {
    slug: "best-flutterflow-app-development-company-singapore",
    title: "Best FlutterFlow App Development Company in Singapore in 2026",
    date: "Jul 8, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development agency in Singapore? We cover what Singapore-based founders need — from PDPA compliance to fintech capabilities and real delivery speed.",
  },
  {
    slug: "best-flutterflow-app-development-company-pakistan",
    title: "Best FlutterFlow App Development Company in Pakistan in 2026",
    date: "Jul 7, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development agency in Pakistan? Here's what Pakistan-based founders and global clients working with Pakistani teams need to know in 2026.",
  },
  {
    slug: "best-flutterflow-app-development-company-spain",
    title: "Best FlutterFlow App Development Company in Spain in 2026",
    date: "Jul 6, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in Spain? We cover what Spanish founders look for in 2026 — from Spanish language support to EU data compliance and real delivery timelines.",
  },
  {
    slug: "best-flutterflow-app-development-company-sweden",
    title: "Best FlutterFlow App Development Company in Sweden in 2026",
    date: "Jul 5, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow agency in Sweden or Scandinavia? We cover what Nordic founders value in a dev partner — including privacy standards, design expectations, and realistic costs.",
  },
  {
    slug: "best-flutterflow-app-development-company-italy",
    title: "Best FlutterFlow App Development Company in Italy in 2026",
    date: "Jul 4, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow development agency in Italy? Learn what Italian founders need from a dev partner in 2026 — and how to hire a team that delivers on time.",
  },
  {
    slug: "best-flutterflow-app-development-company-poland",
    title: "Best FlutterFlow App Development Company in Poland in 2026",
    date: "Jul 3, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow agency in Poland? We cover what Polish founders and EU-facing startups need in a development partner in 2026.",
  },
  {
    slug: "best-flutterflow-app-development-company-kuwait",
    title: "Best FlutterFlow App Development Company in Kuwait in 2026",
    date: "Jul 2, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in Kuwait? Learn what to look for, what Kuwaiti businesses are building on FlutterFlow, and how to hire the right team.",
  },
  {
    slug: "best-flutterflow-app-development-company-bahrain",
    title: "Best FlutterFlow App Development Company in Bahrain in 2026",
    date: "Jul 1, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Looking for a FlutterFlow development company in Bahrain? Here's what Bahraini fintech and startup founders should know before hiring a development team in 2026.",
  },
  {
    slug: "best-flutterflow-app-development-company-oman",
    title: "Best FlutterFlow App Development Company in Oman in 2026",
    date: "Jun 30, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    excerpt: "Searching for a FlutterFlow agency in Oman? We cover what Omani businesses need from a development partner in 2026 and how to evaluate international teams.",
  },
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

const CATEGORIES = ["All", "FlutterFlow", "Bubble", "Lovable", "Replit", "Retool", "Podio", "Comparisons", "How To's", "Guides", "Rankings", "Industry"];

export default function BlogContent() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-5" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}
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
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
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
