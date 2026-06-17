import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  Smartphone, Zap, Shield, Code2, Rocket, Layout, CheckCircle,
  Star, ChevronDown, Phone, Mail, MapPin, ArrowRight, Cpu,
  Globe, Layers, BarChart2, Wrench, HeartPulse, GraduationCap,
  ShoppingBag, Home, Truck, DollarSign, Bot, Users
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const ACCENT = "#4F8EFF";

/* ── Bubble animation keyframes injected once ─────────────────── */
const bubbleStyle = `
@keyframes floatBob {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-14px) scale(1.04); }
}
@keyframes driftUp {
  0%   { transform: translateY(0); opacity: 0.5; }
  100% { transform: translateY(-120px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .bubble-item, .drift-dot { animation: none !important; }
}
`;

function InjectStyle() {
  useEffect(() => {
    const id = "ff-bubble-style";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = bubbleStyle;
      document.head.appendChild(s);
    }
  }, []);
  return null;
}

/* ── FAQ accordion ─────────────────────────────────────────────── */
const faqs = [
  {
    q: "What makes KinetixMVP a top FlutterFlow Agency?",
    a: "KinetixMVP combines deep FlutterFlow expertise with strong UI/UX design and backend integration skills. Our team has delivered production-ready apps for startups and enterprises across multiple industries, with a proven track record of on-time delivery."
  },
  {
    q: "Do you provide custom FlutterFlow development?",
    a: "Yes. We go beyond drag-and-drop — we inject custom Dart code, build custom actions, and wire up any third-party API or backend your project requires. Every solution is tailored to your specific business needs."
  },
  {
    q: "Can FlutterFlow apps scale for large user bases?",
    a: "Absolutely. FlutterFlow outputs production-ready Flutter code that can be connected to scalable backends like Firebase, Supabase, or custom REST/GraphQL APIs. We architect for scale from day one."
  },
  {
    q: "How long does it take to build a FlutterFlow app?",
    a: "A simple MVP can be ready in 2–4 weeks. More complex apps with multiple integrations typically take 6–12 weeks. We'll give you a detailed timeline estimate after an initial discovery call."
  },
  {
    q: "How much does FlutterFlow app development cost?",
    a: "Project costs vary based on complexity, number of screens, and integrations required. We offer transparent fixed-price packages and custom quotes — reach out for a free estimate tailored to your project."
  },
  {
    q: "Do you offer UI/UX design along with FlutterFlow development?",
    a: "Yes. Our process starts with UI/UX design in Figma before any FlutterFlow build begins. We design intuitive, user-centric interfaces that translate perfectly into the FlutterFlow canvas."
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "We do. Post-launch, we offer maintenance retainers that cover bug fixes, FlutterFlow/Firebase version updates, performance monitoring, and feature enhancements as your product grows."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${q.slice(0, 20)}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Industries bubble data ────────────────────────────────────── */
const industries = [
  { label: "AI Apps", icon: <Bot className="w-5 h-5" />, delay: 0 },
  { label: "Fintech & Payments", icon: <DollarSign className="w-5 h-5" />, delay: 0.4 },
  { label: "SaaS Platform", icon: <Layers className="w-5 h-5" />, delay: 0.8 },
  { label: "Social Media Apps", icon: <Users className="w-5 h-5" />, delay: 1.2 },
  { label: "Education", icon: <GraduationCap className="w-5 h-5" />, delay: 0.2 },
  { label: "Real Estate", icon: <Home className="w-5 h-5" />, delay: 0.6 },
  { label: "Marketplace", icon: <ShoppingBag className="w-5 h-5" />, delay: 1.0 },
  { label: "Healthcare", icon: <HeartPulse className="w-5 h-5" />, delay: 0.3 },
  { label: "Logistic & On-Demand", icon: <Truck className="w-5 h-5" />, delay: 0.7 },
];

const driftDots = Array.from({ length: 14 }, (_, i) => ({
  left: `${Math.random() * 90 + 5}%`,
  delay: `${(i * 0.8).toFixed(1)}s`,
  duration: `${(3 + Math.random() * 4).toFixed(1)}s`,
  size: Math.random() > 0.5 ? 6 : 4,
}));

export default function FlutterFlowDev() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
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
              <Smartphone className="w-4 h-4" /> Leading FlutterFlow Agency
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Leading{" "}
              <span className="italic text-gradient">FlutterFlow</span>{" "}
              Agency for Scalable App Development
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              KinetixMVP is a results-driven FlutterFlow Agency specializing in building fast, scalable, and production-ready applications. We help startups, SMEs, and enterprises transform ideas into high-performing mobile and web apps with speed, precision, and scalability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-hero-getstarted">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10" data-testid="button-hero-schedule">
                  Schedule Meeting <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center h-[420px]"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[80px]" />
            {/* back phone */}
            <div className="absolute left-[10%] top-[5%] w-[190px] h-[380px] glass-card rounded-[32px] border border-white/10 p-4 flex flex-col gap-3 rotate-[-8deg] z-0">
              <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
              <div className="h-28 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl" />
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4" />
                <div className="h-2 bg-white/10 rounded w-1/2" />
              </div>
              <div className="mt-auto h-9 bg-blue-500/30 rounded-xl" />
            </div>
            {/* front phone */}
            <div className="relative w-[200px] h-[400px] glass-panel rounded-[36px] border border-white/20 p-4 flex flex-col gap-3 z-10 shadow-2xl rotate-[4deg]">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="h-32 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-cyan-300 opacity-60" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-white/20 rounded w-5/6" />
                <div className="h-2.5 bg-white/10 rounded" />
                <div className="h-2.5 bg-white/10 rounded w-4/5" />
              </div>
              <div className="flex gap-2 mt-1">
                <div className="flex-1 h-8 bg-cyan-500/30 rounded-lg text-[9px] text-cyan-300 flex items-center justify-center font-bold">SIGN UP</div>
                <div className="flex-1 h-8 bg-white/10 rounded-lg" />
              </div>
              <div className="mt-auto h-10 bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-xl flex items-center justify-center text-[10px] text-white font-bold tracking-widest">SUBMIT</div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { stat: "100%", label: "Transparency", sub: "Clear communication at every step" },
            { stat: "24/7", label: "Mindset", sub: "Reliability built into every product" },
            { stat: "2025", label: "Founded", sub: "Built for startups & growing teams" },
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
            <span className="italic text-gradient">FlutterFlow Agency</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Choosing the right FlutterFlow Agency can define the success of your product. At KinetixMVP, we focus on performance, scalability, and long-term growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Proven FlutterFlow Development Expertise",
              desc: "We have deep expertise in FlutterFlow development, enabling us to build complex apps with clean architecture, optimized workflows, and seamless integrations."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Faster Time-to-Market",
              desc: "Using FlutterFlow's powerful no-code/low-code ecosystem, we accelerate development timelines without compromising quality."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Scalable & Secure Architecture",
              desc: "Our FlutterFlow app development follows best practices for scalability, performance optimization, and secure backend integrations."
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: "End-to-End FlutterFlow App Development Agency",
              desc: "From ideation and UI/UX design to deployment and maintenance, KinetixMVP is a complete FlutterFlow app development agency."
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

      {/* ══ 3. CASE STUDIES ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Our <span className="italic text-gradient">Case Studies</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* visual */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-10 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 bg-blue-500/5" />
              <div className="relative z-10 flex gap-3">
                {[
                  ["🧘", "🌿"], ["📖", "💪"], ["🎯", "🌅"]
                ].map((row, ri) => (
                  <div key={ri} className="flex flex-col gap-3">
                    {row.map((em, ei) => (
                      <div key={ei} className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                        {em}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {["UI/UX", "FlutterFlow", "Wellness"].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Well Quest</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A wellness app to create meaningful goals across Spiritual, Physical, Mental, Emotional, and Personal Development areas.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-4 text-white/80 italic text-sm mb-5">
                "The webapp was built so amazingly, the team was very cooperative, they understood my vision perfectly."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">J</div>
                <div>
                  <div className="text-white text-sm font-semibold">John Doe</div>
                  <div className="text-muted-foreground text-xs">Founder of Well Quest</div>
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
          Our FlutterFlow Development <span className="italic text-gradient">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "01", eyebrow: "Build the Right Thing Before You Build It", title: "Product Strategy", accent: "& App Planning" },
            { n: "02", eyebrow: "Designs That Feel Natural to Use", title: "UI/UX Design", accent: "for FlutterFlow Apps" },
            { n: "03", eyebrow: "Connect Your App to What Matters", title: "AI-Powered", accent: "FlutterFlow Apps" },
            { n: "04", eyebrow: "Smarter Apps, Real AI Value", title: "Third-Party", accent: "Integrations" },
            { n: "05", eyebrow: "Evaluate, Optimize, Improve", title: "FlutterFlow App", accent: "Audit" },
            { n: "06", eyebrow: "Stable, Secure, and Always Running", title: "FlutterFlow App Support", accent: "& Maintenance" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors"
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

      {/* ══ 5. BEST FOR STARTUPS & ENTERPRISES ══════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-white mb-5">
                Best FlutterFlow App Development Agency for{" "}
                <span className="italic text-gradient">Startups & Enterprises</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KinetixMVP is recognized as one of the best FlutterFlow app development agencies for businesses looking to scale quickly and efficiently. Whether you are a startup validating an idea or an enterprise modernizing internal systems, our FlutterFlow Agency ensures:
              </p>
              <ul className="space-y-3">
                {["High performance", "Clean, scalable architecture", "Reduced development cost", "Faster go-to-market"].map((item, i) => (
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
                  <Users className="w-9 h-9 text-blue-300" />
                </div>
                <div className="text-white font-bold text-xl mb-1">Trusted Partner</div>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-muted-foreground text-sm">From MVP to enterprise scale — we grow with you.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. INDUSTRIES WE SERVE (bubble animation) ════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Industries We <span className="italic text-gradient">Serve</span>
        </motion.h2>

        <div className="relative min-h-[460px]">
          {/* Drift dots */}
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

          {/* Bubbles arranged in loose rows */}
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: ind.delay * 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="bubble-item flex flex-col items-center gap-2"
                style={{
                  animation: `floatBob ${2.8 + (i % 4) * 0.5}s ${ind.delay}s ease-in-out infinite`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full glass-panel border border-blue-400/20 flex items-center justify-center text-blue-300 relative overflow-hidden"
                  style={{ boxShadow: "0 0 24px 4px rgba(79,142,255,0.15)" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/10 to-transparent" />
                  {ind.icon}
                </div>
                <span className="text-xs text-white/70 text-center max-w-[90px] leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. DEVELOPMENT PROCESS (timeline) ═══════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          FlutterFlow Development <span className="italic text-gradient">Process</span>
        </motion.h2>

        <div className="relative">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10" />

          {[
            { step: "01", title: "Discovery & Strategy", desc: "We analyze your business goals and define the best FlutterFlow development approach.", icon: <BarChart2 className="w-5 h-5" /> },
            { step: "02", title: "UI/UX & Architecture Design", desc: "We design scalable workflows and user-centric interfaces.", icon: <Layout className="w-5 h-5" /> },
            { step: "03", title: "FlutterFlow App Development", desc: "Our FlutterFlow Agency builds your app with optimized logic and integrations.", icon: <Code2 className="w-5 h-5" /> },
            { step: "04", title: "Testing & Optimization", desc: "Rigorous testing ensures performance, security, and scalability.", icon: <Wrench className="w-5 h-5" /> },
            { step: "05", title: "Deployment & Support", desc: "We deploy your app and provide ongoing maintenance and enhancements.", icon: <Rocket className="w-5 h-5" /> },
          ].map((step, i) => {
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex md:grid md:grid-cols-2 gap-6 mb-10 ${isRight ? "" : "md:flex-row-reverse"}`}
              >
                {/* content */}
                <div className={`${isRight ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
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

                {/* center dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#0B0F19] z-10" />

                {/* empty col for alternating */}
                {isRight && <div className="hidden md:block" />}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ 8. WHY FLUTTERFLOW ══════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* FF logo card */}
            <div className="bg-gradient-to-br from-blue-900/40 via-[#0B0F19] to-purple-900/30 p-12 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white tracking-wide">FlutterFlow</div>
              <div className="text-muted-foreground text-sm text-center">Low-code platform for production-ready Flutter apps</div>
            </div>
            {/* content */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why FlutterFlow for <span className="italic text-gradient">App Development</span>?
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                FlutterFlow is a powerful low-code platform that enables faster development while maintaining flexibility. Benefits of FlutterFlow app development include:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Rapid development cycles",
                  "Cross-platform compatibility",
                  "Scalable backend integrations",
                  "Cost-effective development",
                  "Production-ready Flutter code",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                KinetixMVP leverages FlutterFlow to its full potential, making us a reliable FlutterFlow development agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. CONTACT FORM ═════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Let's Build Your App with a Trusted{" "}
              <span className="italic text-gradient">FlutterFlow Agency</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you're looking for a reliable FlutterFlow Agency to bring your app idea to life, KinetixMVP is your ideal partner. Fill out the form or contact us directly to get a personalized quote. Let's build something scalable, user-friendly, and production-ready together.
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

          {/* right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Get <span className="italic text-gradient">Started</span>
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

      {/* ══ 10. FAQS ════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          FAQ<span className="italic text-gradient">s</span>
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ 11. FINAL CTA ═══════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl border border-white/10 text-center overflow-hidden relative py-20 px-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* trusted badge */}
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
              If you're looking for a reliable FlutterFlow Agency to bring your app idea to life, KinetixMVP is your ideal partner.
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
