import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  Smartphone, Zap, Shield, Code2, Rocket, Layout, CheckCircle,
  Star, ChevronDown, Phone, Mail, MapPin, ArrowRight,
  BarChart2, Wrench, Globe, Layers, GraduationCap,
  ShoppingBag, Home, Truck, DollarSign, Bot, Users, HeartPulse
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

/* ── Bubble / drift animation keyframes ─────────────────────────── */
const bubbleStyle = `
@keyframes floatBob {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-16px) scale(1.05); }
}
@keyframes driftUp {
  0%   { transform: translateY(0); opacity: 0.45; }
  100% { transform: translateY(-140px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-item, .drift-dot { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "ff-bubble-style-v2";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = bubbleStyle;
      document.head.appendChild(s);
    }
  }, []);
  return null;
}

/* ── FAQ accordion ───────────────────────────────────────────────── */
const faqs = [
  {
    q: "What makes KinetixSoft different from other FlutterFlow teams?",
    a: "We focus on the parts most no-code teams skip — data architecture, API integrations, and security — so your app holds up after it has real users, not just in a demo."
  },
  {
    q: "Can you build a fully custom FlutterFlow app, or do you rely on templates?",
    a: "Every build starts from your actual requirements. We use FlutterFlow's component system for speed, but the logic, design, and integrations are custom to your product."
  },
  {
    q: "Will the app still work if my user base grows quickly?",
    a: "Yes — we design the data model and backend connections with growth in mind from the first sprint, so scaling up doesn't require a rebuild."
  },
  {
    q: "How long does a typical FlutterFlow build take?",
    a: "Most projects run 4–10 weeks depending on scope, integrations, and how much custom logic the app needs."
  },
  {
    q: "What does a FlutterFlow project usually cost?",
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
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s/g, "-")}`}
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

/* ── Industries bubble data ──────────────────────────────────────── */
const industries = [
  { label: "AI Apps", icon: <Bot className="w-5 h-5" />, delay: 0 },
  { label: "Fintech & Payments", icon: <DollarSign className="w-5 h-5" />, delay: 0.45 },
  { label: "SaaS Platforms", icon: <Layers className="w-5 h-5" />, delay: 0.9 },
  { label: "Social Apps", icon: <Users className="w-5 h-5" />, delay: 1.3 },
  { label: "Education", icon: <GraduationCap className="w-5 h-5" />, delay: 0.2 },
  { label: "Real Estate", icon: <Home className="w-5 h-5" />, delay: 0.65 },
  { label: "Marketplaces", icon: <ShoppingBag className="w-5 h-5" />, delay: 1.1 },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5" />, delay: 0.35 },
  { label: "Logistics & On-Demand", icon: <Truck className="w-5 h-5" />, delay: 0.75 },
];

/* deterministic "random" values so SSR / re-renders are stable */
const driftDots = Array.from({ length: 16 }, (_, i) => ({
  left: `${((i * 37 + 11) % 88) + 5}%`,
  delay: `${((i * 0.7) % 5).toFixed(1)}s`,
  duration: `${(3.2 + (i * 0.41) % 4).toFixed(1)}s`,
  size: i % 3 === 0 ? 7 : 4,
}));

export default function FlutterFlowDev() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (_data: any) => {
    await new Promise(r => setTimeout(r, 800));
    alert("Thanks! We'll be in touch shortly.");
    reset();
  };

  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <InjectStyle />
      <BackgroundElements />
      <Navigation />

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-blue-300 mb-6 border border-blue-500/20">
              <Smartphone className="w-4 h-4" /> FlutterFlow Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Turning Ideas Into Production-Ready{" "}
              <span className="italic text-gradient">FlutterFlow</span>{" "}Apps
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              KinetixSoft is a FlutterFlow development studio focused on shipping real, working products — not just prototypes. We partner with founders, growing teams, and established companies to design, build, and scale mobile and web apps on FlutterFlow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-hero-start">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-hero-call">
                  Book a Call <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center h-[420px]"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[80px]" />
            {/* back phone */}
            <div className="absolute left-[8%] top-[8%] w-[185px] h-[370px] glass-card rounded-[32px] border border-white/10 p-4 flex flex-col gap-3 rotate-[-8deg] z-0">
              <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
              <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                <BarChart2 className="w-8 h-8 text-purple-300 opacity-40" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4" />
                <div className="h-2 bg-white/10 rounded w-1/2" />
                <div className="h-2 bg-white/10 rounded w-5/6" />
              </div>
              <div className="mt-auto h-9 bg-purple-500/20 rounded-xl" />
            </div>
            {/* front phone */}
            <div className="relative w-[200px] h-[400px] glass-panel rounded-[36px] border border-white/20 p-4 flex flex-col gap-3 z-10 shadow-2xl rotate-[4deg]">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="h-28 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-cyan-300 opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-white/20 rounded w-5/6" />
                <div className="h-2.5 bg-white/10 rounded" />
                <div className="h-2.5 bg-white/10 rounded w-4/5" />
              </div>
              <div className="flex gap-2 mt-1">
                <div className="flex-1 h-8 bg-cyan-500/30 rounded-lg text-[9px] text-cyan-300 flex items-center justify-center font-bold">GOAL</div>
                <div className="flex-1 h-8 bg-white/10 rounded-lg text-[9px] text-white/30 flex items-center justify-center">TRACK</div>
              </div>
              <div className="mt-auto h-10 bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-xl flex items-center justify-center text-[10px] text-white font-bold tracking-widest">FORECAST</div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your app" },
            { stat: "24/7", label: "Support Mindset", sub: "We don't disappear after launch" },
            { stat: "2025", label: "Studio Launched", sub: "Built specifically for startups and scaleups" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="glass-card rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{s.stat}</div>
              <div className="text-white font-semibold mb-1">{s.label}</div>
              <div className="text-muted-foreground text-sm">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 2. WHY CHOOSE US ════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Makes KinetixSoft a Strong{" "}
            <span className="italic text-gradient">FlutterFlow Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Picking the right build partner shapes everything that comes after launch. Here's how we approach every FlutterFlow project.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Real FlutterFlow Depth",
              desc: "We don't just drag and drop components — our team understands FlutterFlow's logic layer, API integrations, and data structures well enough to build apps that hold up under real usage."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Built to Move Quickly",
              desc: "FlutterFlow's visual development model lets us ship working builds in weeks, not months, without skipping the architecture decisions that matter later."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Engineered to Scale",
              desc: "Every app we build is structured around clean data models and secure backend connections, so growth doesn't mean a rebuild."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "One Team, Start to Finish",
              desc: "Strategy, design, development, and post-launch support all come from the same team — no handoffs, no lost context."
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

      {/* ══ 3. CASE STUDIES ─ Cashnix ═══════════════════════════ */}
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
            {/* visual — fintech dashboard */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-10 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 bg-blue-500/5" />
              <div className="relative z-10 w-full max-w-[200px] space-y-3">
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Savings Goal</span>
                    <span className="text-xs text-green-400 font-bold">+12%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full"><div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" /></div>
                </div>
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Monthly Forecast</span>
                    <DollarSign className="w-3 h-3 text-cyan-400" />
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
                "We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using."
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

      {/* ══ 4. SERVICES ─ "How We Help" ═════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          How We <span className="italic text-gradient">Help</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Validate Before You Build", title: "Product Strategy", accent: "& Scoping" },
            { n: "02", eyebrow: "Interfaces People Actually Enjoy", title: "UI/UX Design", accent: "for FlutterFlow" },
            { n: "03", eyebrow: "Add Intelligence Where It Counts", title: "AI Features", accent: "in FlutterFlow" },
            { n: "04", eyebrow: "Plug Into the Tools You Already Use", title: "Third-Party", accent: "API Integrations" },
            { n: "05", eyebrow: "A Second Opinion on Your Build", title: "FlutterFlow App", accent: "Reviews" },
            { n: "06", eyebrow: "We Stay After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors group cursor-default"
            >
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-bold text-white">
                {s.title} <span className="italic text-gradient">{s.accent}</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 5. BUILT FOR STARTUPS & GROWING TEAMS ═══════════════ */}
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
                Built for <span className="italic text-gradient">Startups & Growing Teams</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixSoft works with founders validating a first version and with teams scaling an app that already has real users. Either way, the priorities are the same:
              </p>
              <ul className="space-y-3">
                {[
                  "Performance that holds up under load",
                  "An architecture you won't outgrow in six months",
                  "Development costs that match your stage",
                  "A faster path from idea to live product",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] bg-gradient-to-br from-blue-900/40 to-orange-900/20 flex items-center justify-center p-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-400 rounded-r-full" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-9 h-9 text-blue-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted by Founders</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">From MVP to scaleup — we grow with you.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. INDUSTRIES (bubble animation) ════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Industries We've <span className="italic text-gradient">Built For</span>
        </motion.h2>

        <div className="relative min-h-[420px]">
          {/* Drifting background dots */}
          {driftDots.map((d, i) => (
            <span
              key={i}
              className="drift-dot absolute rounded-full bg-blue-400/20 pointer-events-none"
              style={{
                left: d.left,
                bottom: 0,
                width: d.size,
                height: d.size,
                animation: `driftUp ${d.duration} ${d.delay} infinite linear`,
              }}
            />
          ))}

          {/* Bubble grid */}
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: ind.delay * 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="bubble-item flex flex-col items-center gap-2.5"
                style={{
                  animation: `floatBob ${2.6 + (i % 5) * 0.55}s ${ind.delay}s ease-in-out infinite`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full glass-panel border border-blue-400/20 flex items-center justify-center text-blue-300 relative overflow-hidden"
                  style={{ boxShadow: "0 0 28px 6px rgba(79,142,255,0.15)" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/10 to-transparent" />
                  {ind.icon}
                </div>
                <span className="text-xs text-white/70 text-center max-w-[88px] leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PROCESS — "How a Project Runs" ═══════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          How a <span className="italic text-gradient">Project</span> Runs
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />

          {[
            { step: "01", title: "Discovery & Scoping", desc: "We map out your goals, users, and constraints before any screen gets built.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "UI/UX & Data Architecture", desc: "We design the interface and the underlying data structure side by side, so neither one fights the other later.", icon: <Layout className="w-5 h-5" /> },
            { step: "03", title: "Build in FlutterFlow", desc: "Your app gets built with real logic and integrations, not just static screens.", icon: <Code2 className="w-5 h-5" /> },
            { step: "04", title: "QA & Performance Testing", desc: "We stress-test the build for speed, security, and edge cases before it goes live.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Launch & Ongoing Support", desc: "We ship the app and stay on to handle updates, fixes, and new features.", icon: <Rocket className="w-5 h-5" /> },
          ].map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              >
                {isLeft ? (
                  <>
                    <div className="md:pr-12 md:text-right">
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            {step.icon}
                          </div>
                          <span className="text-xs font-bold text-blue-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-12">
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            {step.icon}
                          </div>
                          <span className="text-xs font-bold text-blue-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </>
                )}
                {/* center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#0B0F19] z-10" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY WE BUILD ON FLUTTERFLOW ══════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-900/40 via-[#0B0F19] to-purple-900/30 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white tracking-wide">FlutterFlow</div>
              <div className="text-muted-foreground text-sm text-center">The fastest path to production-ready Flutter apps</div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why We Build on <span className="italic text-gradient">FlutterFlow</span>
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                FlutterFlow lets us move fast without giving up control over the final product. For most app ideas, it means:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Faster build cycles than traditional development",
                  "One codebase across iOS, Android, and web",
                  "Backend integrations that scale with your data",
                  "Lower cost than a from-scratch build",
                  "Production-grade Flutter code under the hood",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixSoft builds on FlutterFlow daily — it's the core of how we deliver fast without cutting corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. CONTACT FORM ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Have an App Idea?{" "}
              <span className="italic text-gradient">Let's Talk It Through</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us where things stand — whether you have a rough idea or an existing app that needs to scale — and we'll get back to you with next steps and a realistic estimate.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+923079575055" },
                { icon: <Mail className="w-5 h-5" />, text: "info@kinetixsoft.com" },
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
            className="glass-card rounded-3xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get a <span className="italic text-gradient">Project Estimate</span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: true })}
                placeholder="Full Name *"
                data-testid="input-contact-name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address *"
                data-testid="input-contact-email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <input
                {...register("phone", { required: true })}
                placeholder="Phone Number *"
                data-testid="input-contact-phone"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <input
                {...register("country", { required: true })}
                placeholder="Country *"
                data-testid="input-contact-country"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <textarea
                {...register("message")}
                placeholder="Tell us about your business"
                data-testid="input-contact-message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 resize-none"
              />
              <p className="text-muted-foreground text-xs">
                By submitting this form you agree to our{" "}
                <Link href="/terms" className="underline text-blue-400">Terms</Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline text-blue-400 font-semibold">Privacy Policy</Link>.
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl h-12 font-semibold hover:opacity-90"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ══ 10. FAQs — "Common Questions" ═══════════════════════ */}
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

      {/* ══ 11. FINAL CTA — "Ready to Build?" ═══════════════════ */}
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
              Trusted by Founders
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to <span className="italic text-gradient">Build</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              If you've got an app idea that needs a real build partner — not just a freelancer — KinetixSoft is ready when you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-cta-start">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-cta-call">
                  Book a Call <ArrowRight className="w-4 h-4 ml-2" />
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
