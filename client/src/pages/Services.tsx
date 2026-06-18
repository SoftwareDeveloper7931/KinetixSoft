import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import {
  Database, Smartphone, Code2, Layers, ArrowRight,
  Bot, Shield, Zap, Layout
} from "lucide-react";
import { SiFlutter, SiRetool, SiReplit } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    href: "/services/podio",
    label: "Podio Solutions",
    accent: "from-green-500/20 to-cyan-500/20",
    border: "hover:border-green-500/40",
    dot: "bg-green-400",
    badge: "bg-green-500/10 border-green-500/20 text-green-300",
    icon: <Database className="w-7 h-7" />,
    iconBg: "bg-green-500/10 border-green-500/20 text-green-400",
    tag: "CRM & Workflow",
    headline: "Custom Podio Workspaces Built Around How Your Team Actually Works",
    body: "We build Podio CRM systems, project trackers, approval workflows, and internal tools that match your actual process — not a template you have to bend yourself around.",
    bullets: ["Process mapping & workspace planning", "Workflow automation", "Third-party integrations", "Data migration from spreadsheets"],
    cta: "Explore Podio →",
  },
  {
    href: "/services/flutterflow",
    label: "FlutterFlow Development",
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/40",
    dot: "bg-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    icon: <SiFlutter className="w-7 h-7" />,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    tag: "Mobile Apps",
    headline: "Production-Grade Flutter Apps, Without the Flutter Learning Curve",
    body: "We build cross-platform iOS and Android apps in FlutterFlow — then add the custom functions, Firebase logic, and integrations that make them production-ready.",
    bullets: ["Custom UI + animations", "Firebase & Supabase backend", "Payment & auth flows", "App Store submission"],
    cta: "Explore FlutterFlow →",
  },
  {
    href: "/services/retool",
    label: "Retool Development",
    accent: "from-violet-500/20 to-indigo-500/20",
    border: "hover:border-violet-500/40",
    dot: "bg-violet-400",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    icon: <SiRetool className="w-7 h-7" />,
    iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    tag: "Internal Tools",
    headline: "Internal Tools Built Directly on Top of Your Data",
    body: "We build admin panels, ops dashboards, and internal tools that connect straight to your existing databases and APIs — no migrating your data into a new system first.",
    bullets: ["Admin panel & dashboard design", "Role-based permissions", "DB & API integration", "Multi-tool architecture"],
    cta: "Explore Retool →",
  },
  {
    href: "/services/lovable",
    label: "Lovable Development",
    accent: "from-rose-500/20 to-purple-500/20",
    border: "hover:border-rose-500/40",
    dot: "bg-rose-400",
    badge: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    icon: <span className="text-2xl leading-none">♥</span>,
    iconBg: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    tag: "AI-Assisted Web Apps",
    headline: "Go From Prompt to Working Web App — Without Skipping the Hard Parts",
    body: "We use Lovable to build working web apps fast, then do what most AI-generated builds skip: clean data structure, proper auth, and integrations that hold up once real users show up.",
    bullets: ["Rapid MVP builds", "Auth & data architecture", "UI/UX refinement", "Ongoing support & maintenance"],
    cta: "Explore Lovable →",
  },
  {
    href: "/services/replit",
    label: "Replit Development",
    accent: "from-orange-500/20 to-red-500/20",
    border: "hover:border-orange-500/40",
    dot: "bg-orange-400",
    badge: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    icon: <SiReplit className="w-7 h-7" />,
    iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    tag: "Custom Code & AI Agents",
    headline: "When Your App Idea Has Outgrown No-Code",
    body: "We build on Replit when a project needs real custom code — AI agents, backend services, or logic that a visual builder can't express. Full control, AI-assisted speed.",
    bullets: ["Custom backend development", "AI agent development", "API & third-party integrations", "Codebase reviews"],
    cta: "Explore Replit →",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />
      <Navigation />

      <main className="pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-blue-300 mb-6 border border-blue-500/20"
          >
            <Layers className="w-4 h-4" /> 5 Platforms. One Studio.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="italic text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Specialized development across five platforms — each chosen because it's the fastest, most cost-effective way to build a specific type of product. We don't do everything; we do these things well.
          </motion.p>
        </div>

        {/* Platform cards */}
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass-card rounded-3xl border border-white/10 ${s.border} transition-colors overflow-hidden`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}>
                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  {/* Badge + icon row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${s.iconBg}`}>
                      {s.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${s.badge}`}>
                      {s.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    {s.headline}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {s.body}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5 text-white/75 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Link href={s.href}>
                      <Button className={`bg-gradient-to-r ${s.accent} border border-white/10 text-white rounded-full h-11 px-6 hover:opacity-90`} data-testid={`button-services-${s.label.toLowerCase().replace(/\s/g, "-")}`}>
                        {s.cta}
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="ghost" className="text-white/60 hover:text-white rounded-full h-11 px-6">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`relative min-h-[240px] lg:min-h-0 bg-gradient-to-br ${s.accent} flex items-center justify-center p-10`}>
                  <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')]" />
                  <div className="relative z-10 glass-panel rounded-2xl border border-white/10 p-6 w-full max-w-[280px] shadow-xl">
                    {/* mini window chrome */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                      <div className="flex-1 ml-2 h-4 bg-white/5 rounded text-[9px] text-white/20 flex items-center px-2 truncate">{s.label}</div>
                    </div>
                    {/* animated skeleton content */}
                    <div className="space-y-2.5">
                      <div className="h-2 bg-white/10 rounded-full w-4/5" />
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/10 rounded-full w-3/5" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[80, 55, 70].map((w, wi) => (
                        <div key={wi} className="h-10 rounded-lg bg-white/5 border border-white/10" />
                      ))}
                    </div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full">
                      <div className={`h-full w-3/5 bg-gradient-to-r ${s.accent.replace("/20", "")} rounded-full`} style={{ filter: "brightness(2)" }} />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <div className={`px-3 py-1 rounded-full text-[10px] font-bold border ${s.badge}`}>Live</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-panel rounded-3xl border border-white/10 text-center py-16 px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Platform Fits?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us what you're building and we'll recommend the right tool for the job — or explain why none of them are the right fit.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full h-12 px-8 hover:opacity-90" data-testid="button-services-contact">
                Talk to Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
