import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  Database, CheckCircle, Zap, Layers, Workflow,
  Star, ChevronDown, Phone, Mail, MapPin, ArrowRight,
  BarChart2, Wrench, Bot, DollarSign, GraduationCap,
  ShoppingBag, Home, Truck, Users, HeartPulse, Settings
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

/* ── Bubble / drift animation keyframes ─────────────────────────── */
const bubbleStyle = `
@keyframes floatBobPodio {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-16px) scale(1.05); }
}
@keyframes driftUpPodio {
  0%   { transform: translateY(0); opacity: 0.45; }
  100% { transform: translateY(-140px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-item-podio, .drift-dot-podio { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "podio-bubble-style";
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
    q: "What makes KinetixSoft different from a generic Podio template?",
    a: "Templates assume your process looks like everyone else's. We build around how your team actually works, which means less retraining and fewer workarounds later."
  },
  {
    q: "Can Podio replace our CRM and project management tools?",
    a: "Often, yes — Podio can model both in one workspace. We'll tell you honestly if your needs are better served by a dedicated tool instead."
  },
  {
    q: "Will the workspace still work as our team grows?",
    a: "Yes — we structure the data and apps with growth in mind, so adding users or new workflows doesn't mean rebuilding from scratch."
  },
  {
    q: "How long does a typical Podio build take?",
    a: "Most workspace builds run 2–6 weeks depending on how many processes and integrations are involved."
  },
  {
    q: "What does a Podio project usually cost?",
    a: "Cost depends on how many workflows and integrations you need. We'll give you a real number after a process discovery call."
  },
  {
    q: "Do you migrate data from our existing spreadsheets or tools?",
    a: "Yes — data migration is part of the build, so your team isn't starting from zero on day one."
  },
  {
    q: "Do you support the workspace after launch?",
    a: "Yes — we offer ongoing adjustments and support as your process changes, not just a one-time handoff."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-podio-${q.slice(0, 20).replace(/\s/g, "-")}`}
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

const driftDots = Array.from({ length: 16 }, (_, i) => ({
  left: `${((i * 37 + 11) % 88) + 5}%`,
  delay: `${((i * 0.7) % 5).toFixed(1)}s`,
  duration: `${(3.2 + (i * 0.41) % 4).toFixed(1)}s`,
  size: i % 3 === 0 ? 7 : 4,
}));

export default function PodioSolutions() {
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
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-green-300 mb-6 border border-green-500/20">
              <Database className="w-4 h-4" /> Podio Workspace Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Custom <span className="italic text-gradient">Podio</span> Workspaces Built Around How Your Team Actually Works
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              KinetixSoft builds custom Podio workspaces for teams who've outgrown spreadsheets and generic CRMs but don't want the cost or rigidity of enterprise software. We design CRM systems, project trackers, approval workflows, and internal tools that match your actual process — not a template you have to bend yourself around.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-podio-hero-start">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-podio-hero-schedule">
                  Schedule Meeting <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-green-500/8 blur-[80px]" />
            <div className="relative w-full max-w-[420px] glass-card rounded-2xl border border-white/10 p-5 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
                <div className="flex-1 mx-2 h-5 bg-white/5 rounded text-[10px] text-white/20 flex items-center px-2">podio.com/workspace</div>
              </div>
              {/* pipeline columns */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "New Leads", color: "bg-blue-500/20 border-blue-500/30", count: 5 },
                  { label: "In Progress", color: "bg-yellow-500/20 border-yellow-500/30", count: 3 },
                  { label: "Completed", color: "bg-green-500/20 border-green-500/30", count: 8 },
                ].map((col, ci) => (
                  <div key={ci} className={`rounded-xl p-2 border ${col.color}`}>
                    <div className="text-[9px] font-bold text-white/60 mb-2 uppercase tracking-wider">{col.label}</div>
                    {Array.from({ length: Math.min(col.count, 3) }).map((_, ri) => (
                      <div key={ri} className="h-8 bg-white/5 rounded-lg mb-1.5 flex items-center px-2 gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-white/10 shrink-0" />
                        <div className="flex-1 h-1.5 bg-white/10 rounded" />
                      </div>
                    ))}
                    <div className="text-[9px] text-white/30 text-center mt-1">{col.count} items</div>
                  </div>
                ))}
              </div>
              {/* bottom row */}
              <div className="flex gap-2">
                <div className="flex-1 h-8 bg-white/5 rounded-lg flex items-center px-3 gap-2">
                  <Workflow className="w-3 h-3 text-cyan-400" />
                  <div className="flex-1 h-1.5 bg-white/10 rounded" />
                </div>
                <div className="flex-1 h-8 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-[9px] text-green-300 font-bold border border-green-500/20">
                  AUTOMATION ON
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your workspace" },
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
            Why Choose KinetixSoft as Your{" "}
            <span className="italic text-gradient">Podio Partner</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Podio is flexible enough to model almost any business process — which also means it's easy to build something messy. Here's how we keep it clean.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Workflow className="w-6 h-6" />,
              title: "Workspaces Modeled on Your Process",
              desc: "We map your actual workflow before touching Podio's app builder, so the structure fits how your team works rather than forcing a generic CRM template."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Automation That Removes Busywork",
              desc: "Approval chains, status updates, and notifications run automatically, so your team spends less time managing the tool and more time using it."
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Clean Data Structure From the Start",
              desc: "We design your fields, relationships, and apps so reporting stays accurate as your workspace grows — not something bolted on later."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "One Partner, Ongoing",
              desc: "We don't just hand off a workspace and leave. As your process changes, we adjust the build with you."
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

      {/* ══ 3. CASE STUDY — OpsFlow ════════════════════════════ */}
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
            {/* visual — ops dashboard */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-green-900/20 p-10 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 bg-blue-500/5" />
              <div className="relative z-10 w-full max-w-[210px] space-y-2.5">
                {/* shipment rows */}
                {[
                  { id: "SH-1042", status: "Delivered", color: "text-green-400 bg-green-500/10 border-green-500/20" },
                  { id: "SH-1043", status: "In Transit", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
                  { id: "SH-1044", status: "Pending", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                ].map((row, i) => (
                  <div key={i} className="glass-panel rounded-xl p-2.5 border border-white/10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Truck className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-white/60 font-mono">{row.id}</div>
                      <div className={`text-[9px] px-1.5 py-0.5 rounded-full border inline-block ${row.color}`}>{row.status}</div>
                    </div>
                  </div>
                ))}
                <div className="glass-panel rounded-xl p-2.5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-white/50">Approval Queue</span>
                    <span className="text-[10px] text-orange-400 font-bold">2 pending</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-1/3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Operations", "Podio", "Workflow Automation"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">OpsFlow</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A logistics company needed one place to track shipments, automate manager approvals, and replace six disconnected spreadsheets. We built a Podio workspace that gave their team a single source of truth.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-4 text-white/80 italic text-sm mb-5">
                "We went from chasing updates across five tools to having one dashboard everyone actually opens every morning."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">P</div>
                <div>
                  <div className="text-white text-sm font-semibold">Priya Sharma</div>
                  <div className="text-muted-foreground text-xs">Operations Lead at OpsFlow</div>
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
          Our Podio Development <span className="italic text-gradient">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Map Before You Build", title: "Process Mapping", accent: "& Workspace Planning" },
            { n: "02", eyebrow: "Custom Apps, Not Templates", title: "Podio App", accent: "& Pipeline Design" },
            { n: "03", eyebrow: "Remove the Manual Steps", title: "Workflow", accent: "Automation" },
            { n: "04", eyebrow: "Connect Your Other Tools", title: "Third-Party", accent: "Integrations" },
            { n: "05", eyebrow: "Clean Up What's Already There", title: "Podio Workspace", accent: "Audit" },
            { n: "06", eyebrow: "Stay Running as You Grow", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors cursor-default"
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

      {/* ══ 5. BUILT FOR TEAMS THAT OUTGREW SPREADSHEETS ═══════ */}
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
                Built for Teams That Have{" "}
                <span className="italic text-gradient">Outgrown Spreadsheets</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixSoft works with small teams setting up their first real CRM and with larger teams consolidating tools that no longer talk to each other. Either way, we focus on:
              </p>
              <ul className="space-y-3">
                {[
                  "Workspaces that match your actual process, not a generic template",
                  "Clean data structure that keeps reporting accurate as you grow",
                  "Lower cost than custom-built internal software",
                  "A working system in weeks, not a multi-month rollout",
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
                  <Settings className="w-9 h-9 text-blue-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted by Teams</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">From first CRM to full ops platform.</p>
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
            <span
              key={i}
              className="drift-dot-podio absolute rounded-full bg-blue-400/20 pointer-events-none"
              style={{
                left: d.left,
                bottom: 0,
                width: d.size,
                height: d.size,
                animation: `driftUpPodio ${d.duration} ${d.delay} infinite linear`,
              }}
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
                className="bubble-item-podio flex flex-col items-center gap-2.5"
                style={{
                  animation: `floatBobPodio ${2.6 + (i % 5) * 0.55}s ${ind.delay}s ease-in-out infinite`,
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

      {/* ══ 7. PROCESS — "How a Podio Build Runs" ═══════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          How a Podio <span className="italic text-gradient">Build</span> Runs
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />

          {[
            { step: "01", title: "Process Discovery", desc: "We sit down with your team to understand how work actually moves today, not how the org chart says it should.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "Workspace & Data Design", desc: "We design the apps, fields, and relationships that will hold up as your data grows.", icon: <Database className="w-5 h-5" /> },
            { step: "03", title: "Build & Automate", desc: "Your workspace gets built with the automations, approval flows, and integrations it needs to actually save time.", icon: <Workflow className="w-5 h-5" /> },
            { step: "04", title: "Testing With Real Users", desc: "We test the workspace with your team before rollout, not just on our own end.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Rollout & Support", desc: "We help your team adopt the new workspace and stay on to adjust it as your process evolves.", icon: <CheckCircle className="w-5 h-5" /> },
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
                          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">{step.icon}</div>
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
                          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">{step.icon}</div>
                          <span className="text-xs font-bold text-blue-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#0B0F19] z-10" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY WE BUILD ON PODIO ════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-green-900/30 via-[#0B0F19] to-blue-900/30 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Database className="w-10 h-10 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white tracking-wide">Podio</div>
              <div className="text-muted-foreground text-sm text-center">Flexible, fast, and built for real business processes</div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why We Build on <span className="italic text-gradient">Podio</span>
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Podio gives us a flexible base for building real business tools without the cost of custom software. For most internal-tool projects, that means:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Faster rollout than custom-built software",
                  "Flexible enough to model CRM, project tracking, or approval workflows",
                  "Automation built in, not bolted on",
                  "Lower long-term cost than enterprise platforms",
                  "Easy to adjust as your process changes",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixSoft builds on Podio when a team needs a real system fast — without committing to enterprise software they'll outgrow in a different way.
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
              Have a Process That Needs a{" "}
              <span className="italic text-gradient">Real System</span>?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us how your team works today — and where it's breaking down — and we'll come back with a realistic plan and estimate for a Podio build that fits.
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
            className="glass-card rounded-3xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get a <span className="italic text-gradient">Project Estimate</span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("name", { required: true })} placeholder="Full Name *" data-testid="input-podio-name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              <input {...register("email", { required: true })} type="email" placeholder="Email Address *" data-testid="input-podio-email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              <input {...register("phone", { required: true })} placeholder="Phone Number *" data-testid="input-podio-phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              <input {...register("country", { required: true })} placeholder="Country *" data-testid="input-podio-country" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              <textarea {...register("message")} placeholder="Tell us about your business" data-testid="input-podio-message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 resize-none" />
              <p className="text-muted-foreground text-xs">
                By submitting this form you agree to our{" "}
                <Link href="/terms" className="underline text-blue-400">Terms</Link>{" "}and{" "}
                <Link href="/privacy" className="underline text-blue-400 font-semibold">Privacy Policy</Link>.
              </p>
              <Button type="submit" disabled={isSubmitting} data-testid="button-podio-submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl h-12 font-semibold hover:opacity-90">
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-orange-300 border border-orange-400/20 mb-6">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              Trusted by Founders
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Get <span className="italic text-gradient">Organized</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              If your team is managing critical work across spreadsheets and sticky notes, KinetixSoft can build you a real system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-podio-cta-start">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-podio-cta-call">
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
