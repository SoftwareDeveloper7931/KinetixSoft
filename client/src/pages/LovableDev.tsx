import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  CheckCircle, Zap, Layers, Star, ChevronDown,
  Phone, Mail, MapPin, ArrowRight, BarChart2, Wrench,
  Bot, DollarSign, GraduationCap, ShoppingBag, Home,
  Truck, Users, HeartPulse, Code2, Shield, Eye, Rocket
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

/* ── Bubble animation keyframes ─────────────────────────────────── */
const bubbleStyle = `
@keyframes floatBobLovable {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-16px) scale(1.05); }
}
@keyframes driftUpLovable {
  0%   { transform: translateY(0); opacity: 0.45; }
  100% { transform: translateY(-140px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-lovable, .drift-lovable { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "lovable-bubble-style";
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
    q: "What makes KinetixMVP different from just using Lovable myself?",
    a: "Lovable gets you a first draft fast. We handle the parts that draft usually gets wrong — data structure, auth, and edge cases — so what ships is actually production-ready."
  },
  {
    q: "Can you take over a Lovable app I've already started?",
    a: "Yes — we regularly pick up existing Lovable builds, review the structure, and take them the rest of the way to a real launch."
  },
  {
    q: "Will the app hold up once it has real users?",
    a: "That's the main thing we add on top of Lovable's output — proper data architecture and testing so growth doesn't break the app."
  },
  {
    q: "How long does a typical Lovable build take?",
    a: "A first working version can be days. A polished, production-ready build usually runs 2–5 weeks depending on scope."
  },
  {
    q: "What does a Lovable project usually cost?",
    a: "Cost depends on how much custom logic and integration work is involved. We'll give you a real number after a scoping call."
  },
  {
    q: "Is design included, or do I need to bring my own?",
    a: "Design is part of the process — we can refine what Lovable generates or design the UI more deliberately from the start."
  },
  {
    q: "Do you support the app after it launches?",
    a: "Yes — we offer ongoing maintenance and feature updates after launch."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-lovable-${q.slice(0, 20).replace(/\s/g, "-")}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-rose-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
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

export default function LovableDev() {
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
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-rose-300 mb-6 border border-rose-500/20">
              <span className="text-rose-400">♥</span> Lovable Development Studio
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Go From Prompt to Working{" "}
              <span className="italic text-gradient">Web App</span>{" "}
              — Without Skipping the Hard Parts
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              KinetixMVP uses Lovable to turn product ideas into real, working web apps fast — then does what most AI-generated builds skip: clean data structure, proper auth, and integrations that hold up once real users show up.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-lovable-hero-start">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-lovable-hero-schedule">
                  Schedule Meeting <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Browser / SaaS dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-rose-500/8 blur-[80px]" />
            <div className="relative w-full max-w-[440px] glass-card rounded-2xl border border-white/10 p-4 shadow-2xl">
              {/* browser chrome */}
              <div className="flex items-center gap-1.5 mb-3 bg-white/5 rounded-xl px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <div className="flex-1 mx-3 h-5 bg-white/5 rounded text-[10px] text-white/20 flex items-center px-2">app.pitchloop.io/dashboard</div>
              </div>
              {/* app content */}
              <div className="space-y-2.5 p-1">
                {/* top bar */}
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider">Pitch Dashboard</div>
                  <div className="px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/20 text-[10px] text-rose-300 font-bold">+ New Pitch</div>
                </div>
                {/* stat cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Pitches", val: "12", delta: "+3" },
                    { label: "Reviews", val: "48", delta: "+8" },
                    { label: "Score", val: "82%", delta: "↑5" },
                  ].map((s, i) => (
                    <div key={i} className="glass-panel rounded-xl p-2.5 border border-white/10 text-center">
                      <div className="text-base font-bold text-white">{s.val}</div>
                      <div className="text-[9px] text-muted-foreground">{s.label}</div>
                      <div className="text-[9px] text-green-400">{s.delta}</div>
                    </div>
                  ))}
                </div>
                {/* pitch list */}
                {["Series A Deck — Draft 3", "Seed Round — v2", "Demo Day Pitch"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 glass-panel rounded-xl p-2.5 border border-white/10">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-500/20 to-purple-500/20 flex items-center justify-center text-[10px] font-bold text-rose-300 shrink-0">P</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-white truncate">{item}</div>
                      <div className="h-1 bg-white/10 rounded-full mt-1 w-3/4">
                        <div className="h-full bg-gradient-to-r from-rose-400 to-purple-500 rounded-full" style={{ width: `${75 - i * 20}%` }} />
                      </div>
                    </div>
                    <div className="text-[9px] text-rose-300 shrink-0">Review</div>
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
            Why Choose KinetixMVP as Your{" "}
            <span className="italic text-gradient">Lovable Partner</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Anyone can type a prompt into Lovable. Getting from a rough first version to something you'd actually put your name on is a different skill.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "We Know Where AI Builds Break",
              desc: "AI-generated apps tend to fall apart around auth, data relationships, and edge cases. We catch and fix those before they become your users' problem."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Fast First Version, Solid Final One",
              desc: "We use Lovable to get a working app in front of you within days, then spend the remaining time hardening it instead of starting over."
            },
            {
              icon: <Eye className="w-6 h-6" />,
              title: "Structured Data From the Start",
              desc: "We design your database schema deliberately instead of letting the AI improvise it, so the app doesn't need a rebuild once it has real users."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "We Stay Past the First Prompt",
              desc: "Most Lovable builds need refinement after the initial generation. We handle that refinement as a normal part of the project, not an afterthought."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-rose-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:bg-rose-500/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 3. CASE STUDY — Pitchloop ════════════════════════════ */}
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
            {/* visual — pitch deck dashboard */}
            <div className="relative bg-gradient-to-br from-rose-900/30 to-purple-900/30 p-10 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 bg-rose-500/5" />
              <div className="relative z-10 w-full max-w-[210px] space-y-2.5">
                <div className="glass-panel rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Pitch Score</span>
                    <span className="text-xs text-green-400 font-bold">82%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-4/5 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full" />
                  </div>
                </div>
                {["Market Fit", "Team Slide", "Financials"].map((label, i) => (
                  <div key={i} className="glass-panel rounded-xl p-2.5 border border-white/10 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-rose-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-300" />
                    </div>
                    <span className="text-[11px] text-white/70">{label}</span>
                    <div className="ml-auto h-1.5 w-12 bg-white/10 rounded-full">
                      <div className="h-full bg-gradient-to-r from-rose-400 to-purple-500 rounded-full" style={{ width: `${85 - i * 15}%` }} />
                    </div>
                  </div>
                ))}
                <div className="glass-panel rounded-xl p-2.5 border border-white/10 text-center">
                  <div className="text-[9px] text-muted-foreground mb-1">Investor Reviews</div>
                  <div className="text-lg font-bold text-white">48 <span className="text-xs text-muted-foreground">this week</span></div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["SaaS", "Lovable", "MVP"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pitchloop</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A startup needed a way for founders to draft investor pitch decks and get structured feedback before a real meeting. We used Lovable to ship a working web app in under two weeks, then hardened the auth and data layer for a public launch.
              </p>
              <blockquote className="border-l-2 border-rose-500 pl-4 text-white/80 italic text-sm mb-5">
                "We had a real product to show investors in the time it would've taken most agencies to finish a proposal."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">D</div>
                <div>
                  <div className="text-white text-sm font-semibold">Daniel Reyes</div>
                  <div className="text-muted-foreground text-xs">Founder of Pitchloop</div>
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
          Our Lovable Development <span className="italic text-gradient">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "From Rough Idea to Working App", title: "Rapid", accent: "MVP Builds" },
            { n: "02", eyebrow: "The Part Lovable Doesn't Do for You", title: "Auth", accent: "& Data Architecture" },
            { n: "03", eyebrow: "Make It Feel Like a Real Product", title: "UI/UX", accent: "Refinement" },
            { n: "04", eyebrow: "Connect It to Your Stack", title: "Third-Party", accent: "API Integrations" },
            { n: "05", eyebrow: "A Second Look Before Launch", title: "Lovable App", accent: "Reviews" },
            { n: "06", eyebrow: "Keep It Running After Launch", title: "Ongoing Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-rose-500/30 transition-colors cursor-default"
            >
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">{s.n}</span>
              <p className="text-muted-foreground text-xs mt-4 mb-2">{s.eyebrow}</p>
              <h3 className="text-xl font-bold text-white">
                {s.title} <span className="italic text-gradient">{s.accent}</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 5. BUILT FOR FOUNDERS WHO NEED TO MOVE FAST ════════ */}
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
                Built for Founders Who Need to{" "}
                <span className="italic text-gradient">Move Fast</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixMVP works with founders validating a first idea and with teams that already have a Lovable build and need it taken further. Either way, we focus on:
              </p>
              <ul className="space-y-3">
                {[
                  "A real working app in days, not months",
                  "Data architecture that won't need a rebuild later",
                  "Lower cost than a from-scratch custom build",
                  "A product you can actually put in front of users or investors",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] bg-gradient-to-br from-rose-900/30 to-orange-900/20 flex items-center justify-center p-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 to-orange-400 rounded-r-full" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-9 h-9 text-rose-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted by Founders</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">From idea to investor-ready — fast.</p>
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
            <span key={i} className="drift-lovable absolute rounded-full bg-rose-400/15 pointer-events-none"
              style={{ left: d.left, bottom: 0, width: d.size, height: d.size, animation: `driftUpLovable ${d.duration} ${d.delay} infinite linear` }}
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
                className="bubble-lovable flex flex-col items-center gap-2.5"
                style={{ animation: `floatBobLovable ${2.6 + (i % 5) * 0.55}s ${ind.delay}s ease-in-out infinite` }}
              >
                <div className="w-20 h-20 rounded-full glass-panel border border-rose-400/20 flex items-center justify-center text-rose-300 relative overflow-hidden"
                  style={{ boxShadow: "0 0 28px 6px rgba(244,63,94,0.1)" }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-rose-500/10 to-transparent" />
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
          How a Lovable <span className="italic text-gradient">Build</span> Runs
        </motion.h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />
          {[
            { step: "01", title: "Scoping the First Version", desc: "We define exactly what the first working version needs to prove before any prompting starts.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "Generate & Structure", desc: "We build the initial app in Lovable, then immediately address the data model and auth setup.", icon: <Code2 className="w-5 h-5" /> },
            { step: "03", title: "Refine the Real Build", desc: "We go past the AI-generated first draft to fix edge cases, polish the UI, and connect real integrations.", icon: <Eye className="w-5 h-5" /> },
            { step: "04", title: "Testing & Hardening", desc: "We test for the failure points AI-generated apps commonly miss — permissions, data validation, and load.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Launch & Ongoing Support", desc: "We ship the app and stay on for fixes, updates, and new features as you grow.", icon: <Rocket className="w-5 h-5" /> },
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-rose-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                          <div className="w-9 h-9 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">{step.icon}</div>
                          <span className="text-xs font-bold text-rose-400">{step.step}</span>
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
                      <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-rose-500/20 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">{step.icon}</div>
                          <span className="text-xs font-bold text-rose-400">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-rose-500 border-2 border-[#0B0F19] z-10" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY WE BUILD ON LOVABLE ══════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-rose-900/30 via-[#0B0F19] to-purple-900/30 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl">♥</div>
              <div className="text-2xl font-bold text-white tracking-wide">Lovable</div>
              <div className="text-muted-foreground text-sm text-center">AI-powered web apps with a real codebase underneath</div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why We Build on <span className="italic text-gradient">Lovable</span>
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Lovable lets us go from idea to working app faster than traditional development, without giving up a real codebase underneath. For most early-stage products, that means:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "A working app in days instead of weeks",
                  "A real, exportable codebase — not a black box",
                  "Fast iteration during the validation stage",
                  "Lower cost for a first version",
                  "A natural path to a more custom build later, if you need one",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixMVP uses Lovable to get founders a real product fast — then does the unglamorous work of making sure it holds up.
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
              Have an Idea That Needs to Exist{" "}
              <span className="italic text-gradient">This Week</span>?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us what you're trying to validate, and we'll come back with a realistic timeline and estimate for getting a working version in front of real users.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 000-0000" },
                { icon: <Mail className="w-5 h-5" />, text: "hello@kinetixmvp.com" },
                { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">{c.icon}</div>
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
              <input {...register("name", { required: true })} placeholder="Full Name *" data-testid="input-lovable-name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50" />
              <input {...register("email", { required: true })} type="email" placeholder="Email Address *" data-testid="input-lovable-email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50" />
              <input {...register("phone", { required: true })} placeholder="Phone Number *" data-testid="input-lovable-phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50" />
              <input {...register("country", { required: true })} placeholder="Country *" data-testid="input-lovable-country" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50" />
              <textarea {...register("message")} placeholder="Tell us about your business" data-testid="input-lovable-message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 resize-none" />
              <p className="text-muted-foreground text-xs">
                By submitting this form you agree to our{" "}
                <Link href="/terms" className="underline text-rose-400">Terms</Link>{" "}and{" "}
                <Link href="/privacy" className="underline text-rose-400 font-semibold">Privacy Policy</Link>.
              </p>
              <Button type="submit" disabled={isSubmitting} data-testid="button-lovable-submit" className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-xl h-12 font-semibold hover:opacity-90">
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
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-purple-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-orange-300 border border-orange-400/20 mb-6">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              Trusted by Founders
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to See It <span className="italic text-gradient">Built</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              If you've got an idea you need to see working — not just described — KinetixMVP can have it in front of you fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-lovable-cta-start">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-lovable-cta-call">
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
