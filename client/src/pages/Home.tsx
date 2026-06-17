import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Bot, Zap, Eye, TrendingUp, CheckCircle,
  Star, ChevronDown, Phone, Mail, MapPin, Code2,
  Database, Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "@assets/software-house-offices-gliwice-1-700x467_1768334823016.jpg";
import { SiFlutter, SiReplit } from "react-icons/si";

/* ── FAQ data (unchanged from existing set) ──────────────────────── */
const faqs = [
  {
    q: "What makes KinetixMVP different from other development teams?",
    a: "We focus on the parts most teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo."
  },
  {
    q: "Can you build a fully custom app, or do you rely on templates?",
    a: "Every build starts from your actual requirements. We use platform components for speed, but the logic, design, and integrations are custom to your product."
  },
  {
    q: "Will the app still work if my user base grows quickly?",
    a: "Yes — we design the data model and backend connections with growth in mind from the first sprint, so scaling up doesn't require a rebuild."
  },
  {
    q: "How long does a typical build take?",
    a: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs."
  },
  {
    q: "What does a project usually cost?",
    a: "Cost depends on complexity — a simple MVP and a multi-integration platform are priced very differently. We'll give you a real number after a scoping call."
  },
  {
    q: "Is UI/UX design included, or do I need to bring my own designs?",
    a: "Design is part of the process. We can work from your existing designs or create the UI/UX from scratch as part of the build."
  },
  {
    q: "Do you support the app after it launches?",
    a: "Yes — we offer ongoing maintenance, monitoring, and feature updates after launch so the app keeps running smoothly."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-home-${q.slice(0, 15).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Platform logo components ────────────────────────────────────── */
function PodioLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
      <rect width="60" height="60" rx="12" fill="#E8F5E9" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4CAF50" fontFamily="sans-serif">Podio</text>
    </svg>
  );
}

function LovableLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
      <rect width="60" height="60" rx="12" fill="#FFF0F0" />
      <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#E53935">♥</text>
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E53935" fontFamily="sans-serif">lovable</text>
    </svg>
  );
}

const platforms = [
  {
    name: "Podio",
    description: "CRM & workflow automation",
    href: "/services/podio",
    logo: <PodioLogo />,
    color: "from-green-500/10 to-emerald-600/10",
    border: "hover:border-green-500/30",
  },
  {
    name: "FlutterFlow",
    description: "Mobile & web app development",
    href: "/services/flutterflow",
    logo: (
      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
        <SiFlutter className="w-6 h-6 text-blue-500" />
      </div>
    ),
    color: "from-blue-500/10 to-cyan-600/10",
    border: "hover:border-blue-500/30",
  },
  {
    name: "Lovable",
    description: "AI-powered web apps",
    href: "/services",
    logo: <LovableLogo />,
    color: "from-rose-500/10 to-pink-600/10",
    border: "hover:border-rose-500/30",
  },
  {
    name: "Replit",
    description: "Full-stack AI development",
    href: "/services",
    logo: (
      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
        <SiReplit className="w-6 h-6 text-orange-500" />
      </div>
    ),
    color: "from-orange-500/10 to-amber-600/10",
    border: "hover:border-orange-500/30",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />

      {/* ══ HERO (untouched) ════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Software Agency Background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B0F19] z-10" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        <div className="relative z-30 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <div className="flex flex-col items-center text-center w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-sm">
                  ✨ Redefining Digital Excellence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.2] text-white"
              >
                The <span className="text-gradient">KinetixMVP</span> is Here <br />
                Building the Future Together
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-white/80 mb-8 max-w-xl font-light leading-relaxed"
              >
                We specialize in crafting high-performance applications using Podio, FlutterFlow, and Retool. Elevate your business efficiency with our custom-tailored digital tools.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
              >
                <Link href="/services">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 border-0 h-12 px-8 text-sm font-semibold rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
                    View Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 text-sm font-semibold rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 1. STATS ROW ════════════════════════════════════════ */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your app" },
            { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after launch" },
            { stat: "2025", label: "Studio Launched", sub: "Built specifically for startups and scaleups" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{s.stat}</div>
              <div className="text-white font-semibold mb-1">{s.label}</div>
              <div className="text-muted-foreground text-sm">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 2. WHAT YOU ACTUALLY GET ════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What You Actually <span className="italic text-gradient">Get</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Bot className="w-6 h-6" />,
              title: "Built AI-Native From Day One",
              desc: "We default to AI-assisted development on every project, which means faster turnaround without sacrificing code quality or structure."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Speed Without the Technical Debt",
              desc: "We move quickly because the platforms we build on are mature — not because we're cutting corners you'll end up paying for later."
            },
            {
              icon: <Eye className="w-6 h-6" />,
              title: "Full Visibility, Every Step",
              desc: "You'll always know exactly where your project stands, from kickoff through launch and into the support window after."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Built to Handle Real Growth",
              desc: "Every app is architected so a spike in users is a good problem, not an emergency rebuild."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-500/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 3. CASE STUDY — Cashnix ═════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Work We've <span className="italic text-gradient">Shipped</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* visual */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-10 flex items-center justify-center min-h-[260px]">
              <div className="absolute inset-0 bg-blue-500/5" />
              <div className="relative z-10 w-full max-w-[200px] space-y-3">
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Savings Goal</span>
                    <span className="text-xs text-green-400 font-bold">+12%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  </div>
                </div>
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Monthly Forecast</span>
                    <span className="text-[10px] text-cyan-400">$</span>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {[40, 55, 45, 70, 60, 80, 65].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/60 to-blue-500/30" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">KPI Score</div>
                  <div className="text-xl font-bold text-white">94<span className="text-xs text-muted-foreground">/100</span></div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["FinTech", "FlutterFlow", "Forecasting"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cashnix</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A financial forecasting app that lets users set savings goals, model what-if scenarios, track financial KPIs, and view monthly and yearly forecasts generated automatically from their transaction history.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-4 text-white/80 italic text-sm mb-5">
                "We came in with a complicated forecasting model and KinetixMVP shipped something our users genuinely understand and enjoy using."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                <div>
                  <div className="text-white text-sm font-semibold">Amir Khan</div>
                  <div className="text-muted-foreground text-xs">Founder of Cashnix</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ 4. PICK YOUR PLATFORM ════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pick Your <span className="italic text-gradient">Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We build on whichever platform actually fits your product — not whichever one we default to out of habit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={p.href}>
                <div className={`glass-panel rounded-2xl p-6 border border-white/10 ${p.border} transition-all hover:-translate-y-1 cursor-pointer group bg-gradient-to-br ${p.color}`}>
                  <div className="mb-4">{p.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 5. WHERE WE FOCUS ════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-white/10 p-10 md:p-14 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Where We <span className="italic text-gradient">Focus</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're not generalists, and we're not trying to be. Our focus is AI-powered applications built on platforms designed for speed. If you need something that ships in weeks instead of months — and still holds up once real users show up — that's exactly where we operate. No padding, no stalling, no perpetual "almost done." Just shipped products.
          </p>
        </motion.div>
      </section>

      {/* ══ 6. WHY THIS ACTUALLY WORKS ══════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* platform logos visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-12 flex items-center justify-center min-h-[300px]"
            >
              <div className="absolute inset-0 bg-blue-500/5" />
              {/* overlapping circles with logos */}
              <div className="relative z-10 w-52 h-52">
                {platforms.map((p, i) => {
                  const positions = [
                    { top: "0%", left: "25%" },
                    { top: "25%", left: "50%" },
                    { top: "50%", left: "25%" },
                    { top: "25%", left: "0%" },
                  ];
                  return (
                    <div
                      key={i}
                      className="absolute w-20 h-20 rounded-full glass-panel border border-white/20 flex items-center justify-center shadow-lg"
                      style={positions[i]}
                    >
                      <div className="scale-75">{p.logo}</div>
                    </div>
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-white mb-5">
                Why This Actually <span className="italic text-gradient">Works</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most dev shops either move too slowly to keep up, or move fast by cutting corners that show up later. We sit in neither camp. The platforms we build on aren't experimental — they're mature tools that have already powered thousands of live products. We know exactly where each one is strong, where it isn't, and how to get the most out of it for your specific build. You're not paying us to experiment on your idea — you're paying us to execute it well.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 7. WHO WE BUILD FOR ═════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Who We <span className="italic text-gradient">Build For</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { n: "01", title: "Founders With", accent: "Vision", rest: ", Not Yet a Dev Team" },
            { n: "02", title: "Startups on a", accent: "Deadline", rest: "" },
            { n: "03", title: "Agencies Promising", accent: "AI", rest: " to Their Clients" },
            { n: "04", title: "Teams Bolting", accent: "AI", rest: " Onto an Existing Product" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{c.n}</span>
              <h3 className="text-xl font-bold text-white mt-5">
                {c.title} <span className="italic text-gradient">{c.accent}</span>{c.rest}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 8. WHAT MAKES US DIFFERENT ══════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-white mb-5">
                What Makes Us <span className="italic text-gradient">Different</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Plenty of teams can write code. Fewer will tell you honestly whether an idea is ready to build or needs more thinking first. We'll tell you which one it is, then build accordingly — using whichever platform actually fits the job, not whichever one we're most comfortable defaulting to.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-900/30 to-orange-900/20 min-h-[280px] flex items-center justify-center p-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-400 rounded-r-full" />
              {/* laptop / dashboard mockup */}
              <div className="glass-panel rounded-2xl border border-white/10 p-5 w-full max-w-[260px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-2 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/5" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-white/5 rounded-lg" />
                    <div className="h-10 bg-white/5 rounded-lg" />
                  </div>
                  <div className="h-2 bg-green-500/40 rounded-full w-4/5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 9. CONTACT FORM ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Your App with a Team That{" "}
              <span className="italic text-gradient">Ships</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you've got a rough sketch of an idea or an app that's outgrown its current build, tell us where things stand. We'll come back with real next steps and an honest estimate — not a sales pitch.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 000-0000" },
                { icon: <Mail className="w-5 h-5" />, text: "hello@kinetixmvp.com" },
                { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {c.icon}
                  </div>
                  {c.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto lg:ml-auto"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Let's Get <span className="italic text-gradient">Started</span>
              </h3>
              <p className="text-white/60 mb-8 text-center text-sm">Send us a message and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 10. FAQS — "Common Questions" ═══════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Common <span className="italic text-gradient">Questions</span>
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ 11. FINAL CTA ════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl border border-white/10 text-center overflow-hidden relative py-20 px-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-orange-300 border border-orange-400/20 mb-6">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              Your Trusted Partner
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              We Should <span className="italic text-gradient">Talk</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              If you're ready to turn an idea into something real, KinetixMVP is ready to build it with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-cta-getstarted">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-cta-schedule">
                  Schedule Meeting <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
