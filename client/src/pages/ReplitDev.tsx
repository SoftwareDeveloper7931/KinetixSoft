import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  CheckCircle, Zap, Layers, Star, ChevronDown,
  Phone, Mail, MapPin, ArrowRight, BarChart2, Wrench,
  Bot, DollarSign, GraduationCap, ShoppingBag, Home,
  Truck, Users, HeartPulse, Code2, Shield, Terminal,
  Server, Database, Activity, Cpu
} from "lucide-react";
import { SiReplit } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

/* ── Bubble animation keyframes ─────────────────────────────────── */
const bubbleStyle = `
@keyframes floatBobReplit {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-16px) scale(1.05); }
}
@keyframes driftUpReplit {
  0%   { transform: translateY(0); opacity: 0.45; }
  100% { transform: translateY(-140px); opacity: 0; }
}
@keyframes blinkCursor {
  0%,100% { opacity: 1; }
  50%      { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-replit, .drift-replit, .cursor-blink { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "replit-bubble-style";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = bubbleStyle;
      document.head.appendChild(s);
    }
  }, []);
  return null;
}

/* ── FAQs ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How is this different from a no-code build?",
    a: "You get a real, custom codebase instead of a configuration on top of someone else's platform — which matters once your product needs logic a visual builder can't express."
  },
  {
    q: "Can you build AI agents, not just standard web apps?",
    a: "Yes — AI agent development is one of our core Replit services, from simple automation to more complex multi-step agents."
  },
  {
    q: "Can you take over an existing Replit project?",
    a: "Yes — we regularly review and continue existing codebases rather than starting over from scratch."
  },
  {
    q: "How long does a typical Replit build take?",
    a: "Most projects run 4–10 weeks depending on how much custom logic, AI agent work, and integration is involved."
  },
  {
    q: "What does a Replit project usually cost?",
    a: "Cost depends heavily on complexity — a simple backend service and a multi-agent system are priced very differently. We'll give you a real number after a scoping call."
  },
  {
    q: "Do I own the code at the end?",
    a: "Yes — what we build is a real, exportable codebase that's yours, not something locked into a platform you don't control."
  },
  {
    q: "Do you support the app after it launches?",
    a: "Yes — we offer ongoing monitoring, maintenance, and feature development after launch."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #232A36", borderRadius: "6px", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-replit-${q.slice(0, 20).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors"
        style={{ color: "#E9EBEF" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#161B26"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: "#4A5FBD" }} />
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

/* ── Industries ──────────────────────────────────────────────────── */
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

const driftDots = Array.from({ length: 16 }, (_, i) => ({
  left: `${((i * 37 + 11) % 88) + 5}%`,
  delay: `${((i * 0.7) % 5).toFixed(1)}s`,
  duration: `${(3.2 + (i * 0.41) % 4).toFixed(1)}s`,
  size: i % 3 === 0 ? 7 : 4,
}));

/* ── Terminal log lines for hero mockup ─────────────────────────── */
const terminalLines = [
  { prefix: "→", text: "Agent: reading ticket #4821…", color: "text-orange-300" },
  { prefix: "✓", text: "Urgency score: 8.4 / 10", color: "text-green-400" },
  { prefix: "→", text: "Routing to: Tier-2 Support", color: "text-cyan-300" },
  { prefix: "✓", text: "Notification sent to @maya", color: "text-green-400" },
  { prefix: "→", text: "Agent: reading ticket #4822…", color: "text-orange-300" },
];

export default function ReplitDev() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone ?? "",
          company: data.country ?? "",
          service: "replit",
          budget: "not-specified",
          message: data.message ?? "",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      alert("Thanks! We'll be in touch shortly.");
      reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
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
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6 eyebrow"
              style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}
            >
              <SiReplit className="w-4 h-4" /> Replit Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ color: "#E9EBEF" }}>
              When Your App Idea Has Outgrown{" "}
              <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>No-Code</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8A93A3" }}>
              KinetixSoft builds on Replit when a project needs real, custom code — AI agents, backend services, or logic that a visual builder can't express. You get full control over the codebase, paired with the speed of AI-assisted development, for products that need to do more than what a template allows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button
                  className="h-12 px-8 text-sm font-semibold transition-colors"
                  style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                  data-testid="button-replit-hero-start"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                >
                  Get Started
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="h-12 px-8 text-sm font-semibold transition-colors flex items-center gap-2"
                  style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                  data-testid="button-replit-hero-schedule"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                >
                  Schedule Meeting <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Terminal / editor mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-orange-500/8 blur-[80px]" />
            <div className="relative w-full max-w-[440px] glass-card rounded-2xl border border-white/10 p-4 shadow-2xl font-mono text-sm">
              {/* editor chrome */}
              <div className="flex items-center gap-1.5 mb-3 bg-white/5 rounded-xl px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <div className="flex-1 mx-3 h-5 bg-white/5 rounded text-[10px] text-white/20 flex items-center px-2">agent/triage.py — Replit</div>
                <div className="w-2 h-3.5 bg-orange-400 rounded-sm cursor-blink" style={{ animation: "blinkCursor 1s step-end infinite" }} />
              </div>

              {/* code snippet */}
              <div className="bg-black/30 rounded-xl p-3 mb-3 text-[11px] leading-relaxed">
                <div className="text-purple-400">def <span className="text-yellow-300">triage_ticket</span><span className="text-white">(ticket):</span></div>
                <div className="pl-4 text-blue-300">score = <span className="text-white">ai.score_urgency(ticket)</span></div>
                <div className="pl-4 text-blue-300">route = <span className="text-white">router.get_team(score)</span></div>
                <div className="pl-4 text-green-400">notify(route, ticket)</div>
                <div className="pl-4 text-white/30"># running every 60s ↓</div>
              </div>

              {/* terminal / agent log */}
              <div className="bg-black/40 rounded-xl p-3 space-y-1.5">
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-green-400" />
                  Agent Log — Live
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-auto" />
                </div>
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px]">
                    <span className={`${line.color} shrink-0`}>{line.prefix}</span>
                    <span className="text-white/60">{line.text}</span>
                  </div>
                ))}
              </div>
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
              className="p-6 text-center"
              style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="text-3xl font-bold mb-1" style={{ color: "#4A5FBD" }}>{s.stat}</div>
              <div className="font-semibold mb-1" style={{ color: "#E9EBEF" }}>{s.label}</div>
              <div className="text-sm" style={{ color: "#8A93A3" }}>{s.sub}</div>
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#E9EBEF" }}>
            Why Choose KinetixSoft as Your{" "}
            <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Replit Partner</em>?
          </h2>
          <p className="text-lg" style={{ color: "#8A93A3" }}>
            Replit gives us real code and real infrastructure to work with — which matters once a project needs more than a visual builder can give it.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Full Control Where It Matters",
              desc: "When your product needs custom logic, AI agents, or non-standard integrations, we're not boxed in by what a drag-and-drop builder supports."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "AI-Assisted, Not AI-Replaced",
              desc: "We use Replit's AI tooling to move fast, but every build gets reviewed and structured by people who understand the codebase, not just the prompt."
            },
            {
              icon: <Server className="w-6 h-6" />,
              title: "Built for Real Backend Work",
              desc: "Databases, APIs, scheduled jobs, and AI agent logic are first-class here — not workarounds bolted onto a no-code tool."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "A Real Codebase You Own",
              desc: "What we build is actual code you can take anywhere, hand to another developer, or scale however you need."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-7 card-hover"
              style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "#8A93A3" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 3. CASE STUDY — QueueSense ═══════════════════════════ */}
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
            {/* visual — terminal / agent activity log */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-orange-900/20 p-8 flex items-center justify-center min-h-[280px] font-mono">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 w-full max-w-[230px] space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-orange-400" />
                  <span className="text-[11px] text-orange-300 font-bold uppercase tracking-wider">QueueSense Agent</span>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-auto" />
                </div>
                {[
                  { t: "09:12", msg: "Ticket #4820 → Tier-1", score: "3.1", ok: true },
                  { t: "09:14", msg: "Ticket #4821 → Tier-2", score: "8.4", ok: true },
                  { t: "09:15", msg: "Ticket #4822 → Urgent", score: "9.7", ok: false },
                  { t: "09:16", msg: "Ticket #4823 → Tier-1", score: "2.8", ok: true },
                ].map((row, i) => (
                  <div key={i} className="glass-panel rounded-lg p-2 border border-white/10 text-[10px]">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-white/40">{row.t}</span>
                      <span className={`font-bold px-1.5 py-0.5 rounded ${row.ok ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}>
                        score {row.score}
                      </span>
                    </div>
                    <div className="text-white/70">{row.msg}</div>
                  </div>
                ))}
                <div className="text-[10px] text-white/30 text-center pt-1">48 tickets processed today</div>
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["AI Agents", "Replit", "Backend Automation"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">QueueSense</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A support team needed incoming tickets automatically triaged and routed by urgency. We built an AI agent on Replit that reads each ticket, scores it, and routes it — running continuously in the background.
              </p>
              <blockquote className="border-l-2 border-orange-500 pl-4 text-white/80 italic text-sm mb-5">
                "It's been quietly doing the triage work our team used to fight over every morning, without anyone touching it."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">M</div>
                <div>
                  <div className="text-white text-sm font-semibold">Maya Chen</div>
                  <div className="text-muted-foreground text-xs">Founder of QueueSense</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ 4. SERVICES ═════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Our Replit Development <span className="italic text-gradient">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "When No-Code Hits a Wall", title: "Custom", accent: "Backend Development" },
            { n: "02", eyebrow: "Logic That Runs Itself", title: "AI", accent: "Agent Development" },
            { n: "03", eyebrow: "Real Code, Real Speed", title: "AI-Assisted", accent: "App Builds" },
            { n: "04", eyebrow: "Connect Anything to Anything", title: "API", accent: "& Third-Party Integrations" },
            { n: "05", eyebrow: "A Second Opinion on Your Build", title: "Codebase", accent: "Reviews" },
            { n: "06", eyebrow: "Keep It Running After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-colors cursor-default"
            >
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-bold text-white">
                {s.title} <span className="italic text-gradient">{s.accent}</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 5. BUILT FOR PRODUCTS THAT NEED REAL CODE ══════════ */}
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
                Built for Products That Need{" "}
                <span className="italic text-gradient">Real Code</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixSoft works with technical founders who want speed without giving up control, and with teams whose product has outgrown what a visual builder can support. Either way, we focus on:
              </p>
              <ul className="space-y-3">
                {[
                  "Custom logic that no-code platforms can't express",
                  "A real codebase you can scale, extend, or hand off",
                  "AI-assisted development speed without losing code quality",
                  "Backend infrastructure built to handle production traffic",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] bg-gradient-to-br from-orange-900/20 to-gray-900/60 flex items-center justify-center p-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-400 rounded-r-full" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-9 h-9 text-orange-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted by Founders</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">Real code. Real infrastructure. Real ownership.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. INDUSTRIES WE'VE BUILT FOR (bubble animation) ════ */}
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
          {driftDots.map((d, i) => (
            <span key={i} className="drift-replit absolute rounded-full bg-orange-400/15 pointer-events-none"
              style={{ left: d.left, bottom: 0, width: d.size, height: d.size, animation: `driftUpReplit ${d.duration} ${d.delay} infinite linear` }}
            />
          ))}
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: ind.delay * 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="bubble-replit flex flex-col items-center gap-2.5"
                style={{ animation: `floatBobReplit ${2.6 + (i % 5) * 0.55}s ${ind.delay}s ease-in-out infinite` }}
              >
                <div className="w-20 h-20 rounded-full glass-panel border border-orange-400/20 flex items-center justify-center text-orange-300 relative overflow-hidden"
                  style={{ boxShadow: "0 0 28px 6px rgba(251,146,60,0.1)" }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-500/10 to-transparent" />
                  {ind.icon}
                </div>
                <span className="text-xs text-white/70 text-center max-w-[88px] leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PROCESS ══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          How a Replit <span className="italic text-gradient">Build</span> Runs
        </motion.h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />
          {[
            { step: "01", title: "Technical Scoping", desc: "We define the architecture, data model, and any AI agent logic before writing the first line of code.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "Core Build", desc: "We build the application using Replit's AI-assisted workflow, with a real engineer reviewing structure and logic throughout.", icon: <Code2 className="w-5 h-5" /> },
            { step: "03", title: "Agent & Integration Setup", desc: "Any AI agents, scheduled jobs, or third-party integrations get built and tested in isolation before wiring into the full app.", icon: <Bot className="w-5 h-5" /> },
            { step: "04", title: "Testing & Load Checks", desc: "We test for correctness, security, and how the system behaves under real traffic, not just the happy path.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Deployment & Ongoing Support", desc: "We deploy the build and stay on to handle monitoring, fixes, and new features.", icon: <CheckCircle className="w-5 h-5" /> },
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-orange-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                          <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">{step.icon}</div>
                          <span className="text-xs font-bold text-orange-400">{step.step}</span>
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-orange-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">{step.icon}</div>
                          <span className="text-xs font-bold text-orange-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-orange-500 border-2 border-[#0B0F19] z-10" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY WE BUILD ON REPLIT ═══════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-orange-900/30 via-[#0B0F19] to-red-900/20 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <SiReplit className="w-10 h-10 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white tracking-wide">Replit</div>
              <div className="text-muted-foreground text-sm text-center">Real code, real infrastructure, AI-assisted speed</div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why We Build on <span className="italic text-gradient">Replit</span>
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Replit gives us AI-assisted development speed without trading away control over the actual code. For projects that need more than a no-code platform can offer, that means:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "A real, ownable codebase instead of a black-box build",
                  "AI agents and custom backend logic as first-class features",
                  "Fast iteration without sacrificing engineering quality",
                  "Easy handoff to an in-house team later, if you build one",
                  "Infrastructure that scales with real production traffic",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixSoft builds on Replit when a project's ambitions have outgrown what a visual builder can support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. CONTACT FORM ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl mb-5" style={{ color: "#E9EBEF" }}>
              Outgrown <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>No-Code</em>? Let's Talk About What's Next.
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "#8A93A3" }}>
              Tell us what your current build can't do, and we'll come back with a realistic plan for what a custom build on Replit would take.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+923079575055" },
                { icon: <Mail className="w-5 h-5" />, text: "info@kinetixsoft.com" },
                { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3" style={{ color: "#E9EBEF" }}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(74,95,189,0.12)", border: "1px solid rgba(74,95,189,0.2)", borderRadius: "6px", color: "#4A5FBD" }}>{c.icon}</div>
                  {c.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8" style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: "#E9EBEF" }}>
              Get a <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Project Estimate</em>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("name", { required: true })} placeholder="Full Name *" data-testid="input-replit-name" className="w-full px-4 py-3 focus:outline-none" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "6px", color: "#E9EBEF" }} />
              <input {...register("email", { required: true })} type="email" placeholder="Email Address *" data-testid="input-replit-email" className="w-full px-4 py-3 focus:outline-none" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "6px", color: "#E9EBEF" }} />
              <input {...register("phone", { required: true })} placeholder="Phone Number *" data-testid="input-replit-phone" className="w-full px-4 py-3 focus:outline-none" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "6px", color: "#E9EBEF" }} />
              <input {...register("country", { required: true })} placeholder="Country *" data-testid="input-replit-country" className="w-full px-4 py-3 focus:outline-none" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "6px", color: "#E9EBEF" }} />
              <textarea {...register("message")} placeholder="Tell us about your business" data-testid="input-replit-message" rows={4} className="w-full px-4 py-3 focus:outline-none resize-none" style={{ background: "#161B26", border: "1px solid #232A36", borderRadius: "6px", color: "#E9EBEF" }} />
              <p className="text-xs" style={{ color: "#8A93A3" }}>
                By submitting this form you agree to our{" "}
                <Link href="/terms" className="underline" style={{ color: "#4A5FBD" }}>Terms</Link>{" "}and{" "}
                <Link href="/privacy" className="underline font-semibold" style={{ color: "#4A5FBD" }}>Privacy Policy</Link>.
              </p>
              <button type="submit" disabled={isSubmitting} data-testid="button-replit-submit" className="w-full h-12 font-semibold transition-colors" style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => { if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ══ 10. FAQs ════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ color: "#E9EBEF" }}
        >
          Common <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Questions</em>
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ 11. FINAL CTA ════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center overflow-hidden relative py-20 px-6"
          style={{ background: "#12161F", border: "1px solid #232A36", borderRadius: "6px" }}
        >
          <div className="absolute inset-0" style={{ background: "rgba(74,95,189,0.05)" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm mb-6"
              style={{ background: "rgba(201,168,106,0.08)", border: "1px solid rgba(201,168,106,0.2)", borderRadius: "6px", color: "#C9A86A" }}
            >
              <Star className="w-4 h-4" style={{ fill: "#C9A86A", color: "#C9A86A" }} />
              Trusted by Founders
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" style={{ fill: "#C9A86A", color: "#C9A86A" }} />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-5" style={{ color: "#E9EBEF" }}>
              Ready to Build <em style={{ color: "#4A5FBD", fontStyle: "italic" }}>Beyond No-Code</em>?
            </h2>
            <p className="text-lg mb-10" style={{ color: "#8A93A3" }}>
              If your idea needs real code and real infrastructure, KinetixSoft can build it with you on Replit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button
                  className="h-12 px-8 text-sm font-semibold transition-colors"
                  style={{ background: "#4A5FBD", color: "#E9EBEF", borderRadius: "6px", border: "none", cursor: "pointer" }}
                  data-testid="button-replit-cta-start"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5A6FCC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#4A5FBD"; }}
                >
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="h-12 px-8 text-sm font-semibold transition-colors flex items-center gap-2"
                  style={{ background: "transparent", color: "#E9EBEF", borderRadius: "6px", border: "1px solid #232A36", cursor: "pointer" }}
                  data-testid="button-replit-cta-call"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A5FBD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#232A36"; }}
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
