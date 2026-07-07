import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  CheckCircle, Zap, Layers, Star, ChevronDown,
  Phone, Mail, MapPin, ArrowRight, BarChart2, Wrench,
  Bot, DollarSign, GraduationCap, ShoppingBag, Home,
  Truck, Users, HeartPulse, Database, Shield, Layout,
  Lock, BarChart3, Table2, Settings
} from "lucide-react";
import { SiRetool } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

/* ── Bubble animation keyframes ─────────────────────────────────── */
const bubbleStyle = `
@keyframes floatBobRetool {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-16px) scale(1.05); }
}
@keyframes driftUpRetool {
  0%   { transform: translateY(0); opacity: 0.45; }
  100% { transform: translateY(-140px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-retool, .drift-retool { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "retool-bubble-style";
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
    q: "How is this different from the Podio service you offer?",
    a: "Podio is a self-contained workspace for teams starting fresh. Retool connects directly to databases and systems you already run — it's the right fit when your data already exists somewhere and you just need a fast, safe interface on top of it."
  },
  {
    q: "Do we need to migrate our data to use Retool?",
    a: "No — that's the main advantage. Retool connects to your existing databases and APIs directly, so there's nothing to migrate."
  },
  {
    q: "Can you build tools for multiple teams or departments?",
    a: "Yes — we structure permissions and components so different teams can have their own views without duplicating the underlying logic."
  },
  {
    q: "How long does a typical Retool build take?",
    a: "Most internal tools run 2–6 weeks depending on how many data sources and permission levels are involved."
  },
  {
    q: "What does a Retool project usually cost?",
    a: "Cost depends on data complexity and how many workflows the tool needs to support. We'll give you a real number after a discovery call."
  },
  {
    q: "Is this secure enough for sensitive internal data?",
    a: "Yes — role-based permissions and audit trails are part of the build, since most internal tools touch data that shouldn't be open to everyone."
  },
  {
    q: "Do you support the tool after it launches?",
    a: "Yes — we offer ongoing support as your data sources, permissions, or workflows change."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-retool-${q.slice(0, 20).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
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

export default function RetoolDev() {
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
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-violet-300 mb-6 border border-violet-500/20">
              <SiRetool className="w-4 h-4" /> Retool Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Internal Tools Built Directly on Top of{" "}
              <span className="italic text-gradient">Your</span> Data
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              KinetixSoft uses Retool to build admin panels, ops dashboards, and internal tools that connect straight to your existing databases and APIs — no migrating your data into a new system first. If your team is stuck running production fixes through raw SQL or waiting on engineering for every internal request, we build the interface that fixes that.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-retool-hero-start">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-retool-hero-schedule">
                  Schedule Meeting <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Admin panel dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-violet-500/8 blur-[80px]" />
            <div className="relative w-full max-w-[440px] glass-card rounded-2xl border border-white/10 p-4 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 mb-3 bg-white/5 rounded-xl px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <div className="flex-1 mx-3 h-5 bg-white/5 rounded text-[10px] text-white/20 flex items-center px-2">admin.claimdesk.io/panel</div>
              </div>

              {/* top metric row */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "Open Claims", val: "142", color: "text-violet-300" },
                  { label: "Approved Today", val: "38", color: "text-green-400" },
                  { label: "Pending Review", val: "27", color: "text-yellow-400" },
                ].map((m, i) => (
                  <div key={i} className="glass-panel rounded-xl p-2.5 border border-white/10 text-center">
                    <div className={`text-lg font-bold ${m.color}`}>{m.val}</div>
                    <div className="text-[9px] text-muted-foreground leading-tight mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* claims table */}
              <div className="glass-panel rounded-xl border border-white/10 overflow-hidden mb-3">
                <div className="grid grid-cols-4 gap-0 px-3 py-2 border-b border-white/10 text-[9px] text-white/40 uppercase tracking-wider font-bold">
                  <span>Claim ID</span><span>Type</span><span>Status</span><span>Action</span>
                </div>
                {[
                  { id: "CLM-4821", type: "Medical", status: "Pending", statusColor: "text-yellow-400 bg-yellow-500/10" },
                  { id: "CLM-4820", type: "Property", status: "Approved", statusColor: "text-green-400 bg-green-500/10" },
                  { id: "CLM-4819", type: "Auto", status: "Review", statusColor: "text-blue-400 bg-blue-500/10" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-0 items-center px-3 py-2 border-b border-white/5 last:border-0 text-[10px]">
                    <span className="text-white/60 font-mono">{row.id}</span>
                    <span className="text-white/70">{row.type}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full border border-current/20 inline-block ${row.statusColor}`}>{row.status}</span>
                    <button className="text-[9px] text-violet-400 hover:underline text-left">Open →</button>
                  </div>
                ))}
              </div>

              {/* action buttons row */}
              <div className="flex gap-2">
                <div className="flex-1 py-2 rounded-lg bg-violet-500/20 border border-violet-500/30 text-[10px] text-violet-300 font-bold text-center">Approve Selected</div>
                <div className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/50 text-center">Export CSV</div>
                <div className="w-8 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock className="w-3 h-3 text-white/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Founder-Led", sub: "Direct access to the people building your tool" },
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
            <span className="italic text-gradient">Retool Partner</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Retool is fast to build in, but it's easy to end up with a tangle of disconnected panels. Here's how we keep internal tools maintainable as they grow.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Database className="w-6 h-6" />,
              title: "Built on Your Real Data",
              desc: "We connect directly to your existing databases and APIs instead of asking you to duplicate data into a new system."
            },
            {
              icon: <Layout className="w-6 h-6" />,
              title: "Designed for the People Who'll Use It",
              desc: "We build around your support, ops, or sales team's actual day-to-day tasks, not a generic CRUD interface."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Permissions Done Properly",
              desc: "Role-based access and audit trails are part of the build from the start, since internal tools usually touch sensitive data."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Maintainable as You Add More Tools",
              desc: "We structure queries and components so your second and third internal tool don't turn into a maze of copy-pasted logic."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-5 group-hover:bg-violet-500/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 3. CASE STUDY — ClaimDesk ════════════════════════════ */}
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
            {/* visual — claim admin panel mockup */}
            <div className="relative bg-gradient-to-br from-violet-900/30 to-indigo-900/30 p-8 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 bg-violet-500/5" />
              <div className="relative z-10 w-full max-w-[220px] space-y-2">
                {/* header */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Claims Panel</span>
                  <span className="text-[9px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full border border-violet-500/20">Reviewer Role</span>
                </div>
                {/* claim cards */}
                {[
                  { id: "CLM-4821", amt: "$12,400", label: "Medical", badge: "Pending", bc: "text-yellow-400" },
                  { id: "CLM-4820", amt: "$3,100", label: "Property", badge: "Approved", bc: "text-green-400" },
                  { id: "CLM-4819", amt: "$8,750", label: "Auto", badge: "In Review", bc: "text-blue-400" },
                ].map((c, i) => (
                  <div key={i} className="glass-panel rounded-xl p-2.5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-white/60">{c.id}</span>
                      <span className={`text-[9px] font-bold ${c.bc}`}>{c.badge}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/70">{c.label}</span>
                      <span className="text-xs font-bold text-white">{c.amt}</span>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <div className="py-1.5 rounded-lg bg-violet-500/20 border border-violet-500/30 text-[9px] text-violet-300 font-bold text-center">Approve</div>
                  <div className="py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[9px] text-red-400 font-bold text-center">Reject</div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Internal Tools", "Retool", "Operations"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ClaimDesk</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                An insurance ops team was approving claims by running manual SQL queries and emailing spreadsheets back and forth. We built a Retool admin panel connected directly to their production database, with proper role-based permissions for reviewers and approvers.
              </p>
              <blockquote className="border-l-2 border-violet-500 pl-4 text-white/80 italic text-sm mb-5">
                "Our reviewers stopped asking engineering for help every time they needed to fix a claim record."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">L</div>
                <div>
                  <div className="text-white text-sm font-semibold">Lucas Ferreira</div>
                  <div className="text-muted-foreground text-xs">Ops Manager at ClaimDesk</div>
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
          Our Retool Development <span className="italic text-gradient">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Built Around Your Actual Workflow", title: "Admin Panel", accent: "& Dashboard Design" },
            { n: "02", eyebrow: "Connect to What You Already Run", title: "Database", accent: "& API Integration" },
            { n: "03", eyebrow: "Who Can See and Do What", title: "Role-Based", accent: "Permissions" },
            { n: "04", eyebrow: "From One-Off to Internal Platform", title: "Multi-Tool", accent: "Architecture" },
            { n: "05", eyebrow: "Clean Up What's Already There", title: "Retool App", accent: "Audit" },
            { n: "06", eyebrow: "Keep It Running After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-colors cursor-default"
            >
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-bold text-white">
                {s.title} <span className="italic text-gradient">{s.accent}</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 5. BUILT FOR TEAMS RUNNING OPS THROUGH RAW QUERIES ═ */}
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
                Built for Teams Running Ops Through{" "}
                <span className="italic text-gradient">Raw Queries</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixSoft works with startups building their first internal tool and with larger teams whose internal tools have outgrown a single engineer's spare time. Either way, we focus on:
              </p>
              <ul className="space-y-3">
                {[
                  "Interfaces built directly on your existing data, no migration needed",
                  "Permissions and audit trails handled properly from day one",
                  "Faster delivery than custom-coded internal software",
                  "A structure that scales as you add more internal tools",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] bg-gradient-to-br from-violet-900/20 to-indigo-900/30 flex items-center justify-center p-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-400 rounded-r-full" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Table2 className="w-9 h-9 text-violet-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted by Founders</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">From first admin panel to full ops platform.</p>
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
            <span key={i} className="drift-retool absolute rounded-full bg-violet-400/15 pointer-events-none"
              style={{ left: d.left, bottom: 0, width: d.size, height: d.size, animation: `driftUpRetool ${d.duration} ${d.delay} infinite linear` }}
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
                className="bubble-retool flex flex-col items-center gap-2.5"
                style={{ animation: `floatBobRetool ${2.6 + (i % 5) * 0.55}s ${ind.delay}s ease-in-out infinite` }}
              >
                <div className="w-20 h-20 rounded-full glass-panel border border-violet-400/20 flex items-center justify-center text-violet-300 relative overflow-hidden"
                  style={{ boxShadow: "0 0 28px 6px rgba(139,92,246,0.12)" }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-500/10 to-transparent" />
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
          How a Retool <span className="italic text-gradient">Build</span> Runs
        </motion.h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />
          {[
            { step: "01", title: "Workflow & Data Discovery", desc: "We learn what your team needs to see and do, and map which databases and APIs the tool needs to touch.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "Permission & Access Design", desc: "We define who can view, edit, or approve what before building a single screen.", icon: <Shield className="w-5 h-5" /> },
            { step: "03", title: "Build the Interface", desc: "We build the panel or dashboard directly against your real data sources.", icon: <Layout className="w-5 h-5" /> },
            { step: "04", title: "Testing With Your Team", desc: "We test with the actual people who'll use it daily, not just against sample data.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Rollout & Support", desc: "We deploy the tool and stay on to add features or fix issues as your operations change.", icon: <CheckCircle className="w-5 h-5" /> },
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                          <div className="w-9 h-9 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">{step.icon}</div>
                          <span className="text-xs font-bold text-violet-400">{step.step}</span>
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">{step.icon}</div>
                          <span className="text-xs font-bold text-violet-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-violet-500 border-2 border-[#0B0F19] z-10" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY WE BUILD ON RETOOL ═══════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-violet-900/30 via-[#0B0F19] to-indigo-900/30 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <SiRetool className="w-10 h-10 text-violet-300" />
              </div>
              <div className="text-2xl font-bold text-white tracking-wide">Retool</div>
              <div className="text-muted-foreground text-sm text-center">Internal tools built directly on your existing infrastructure</div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why We Build on <span className="italic text-gradient">Retool</span>
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Retool lets us build directly against your existing infrastructure instead of standing up a parallel system. For most internal-tool needs, that means:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "No data migration — it connects to what you already run",
                  "Faster delivery than custom-coded admin tools",
                  "Built-in support for role-based permissions",
                  "Easy to extend as your team needs more tools",
                  "Lower cost than a full custom engineering build",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixSoft builds on Retool when the data already exists and the missing piece is just a fast, safe way for your team to work with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. CONTACT FORM ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Still Running Ops Through{" "}
              <span className="italic text-gradient">Spreadsheets and SQL</span>?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us what your team is doing manually today, and we'll come back with a realistic plan for an internal tool built directly on your existing data.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+923079575055" },
                { icon: <Mail className="w-5 h-5" />, text: "info@kinetixsoft.com" },
                { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">{c.icon}</div>
                  {c.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get a <span className="italic text-gradient">Project Estimate</span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("name", { required: true })} placeholder="Full Name *" data-testid="input-retool-name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50" />
              <input {...register("email", { required: true })} type="email" placeholder="Email Address *" data-testid="input-retool-email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50" />
              <input {...register("phone", { required: true })} placeholder="Phone Number *" data-testid="input-retool-phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50" />
              <input {...register("country", { required: true })} placeholder="Country *" data-testid="input-retool-country" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50" />
              <textarea {...register("message")} placeholder="Tell us about your business" data-testid="input-retool-message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 resize-none" />
              <p className="text-muted-foreground text-xs">
                By submitting this form you agree to our{" "}
                <Link href="/terms" className="underline text-violet-400">Terms</Link>{" "}and{" "}
                <Link href="/privacy" className="underline text-violet-400 font-semibold">Privacy Policy</Link>.
              </p>
              <Button type="submit" disabled={isSubmitting} data-testid="button-retool-submit" className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-xl h-12 font-semibold hover:opacity-90">
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
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-orange-300 border border-orange-400/20 mb-6">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              Trusted by Founders
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Get Off <span className="italic text-gradient">Manual Ops</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              If your team is duct-taping internal workflows together with spreadsheets and SQL, KinetixSoft can build the tool that replaces that.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-retool-cta-start">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-retool-cta-call">
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
