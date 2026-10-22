"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Cpu,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Card3D } from "./Card3D";

interface BuildOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  defaultWeeks: number;
  stack: string;
  description: string;
}

const BUILD_TYPES: BuildOption[] = [
  {
    id: "mobile",
    title: "Native Mobile App",
    icon: <Smartphone className="w-5 h-5" />,
    defaultWeeks: 5,
    stack: "FlutterFlow (Dart) + Firebase / Supabase",
    description: "Cross-platform iOS and Android apps with 60-120 FPS Impeller rendering, biometrics, and offline caching.",
  },
  {
    id: "web",
    title: "Full-Stack SaaS / Web",
    icon: <Globe className="w-5 h-5" />,
    defaultWeeks: 6,
    stack: "Bubble / Next.js + PostgreSQL + Stripe",
    description: "Scalable web applications with complex relational schemas, multi-tenant RBAC, and subscription billing.",
  },
  {
    id: "crm",
    title: "Custom CRM & Ops",
    icon: <Database className="w-5 h-5" />,
    defaultWeeks: 4,
    stack: "Podio + GlobiFlow + Retool + Webhooks",
    description: "Operational workspaces replacing fragmented tools with automated pipelines, SMS triggers, and custom dashboards.",
  },
  {
    id: "custom",
    title: "Custom AI & Backend",
    icon: <Cpu className="w-5 h-5" />,
    defaultWeeks: 5,
    stack: "FastAPI / Node + OpenAI + Cloud Workers",
    description: "Autonomous LLM workflows, custom REST/GraphQL endpoints, webhook listeners, and background task queues.",
  },
];

const SCALES = [
  { id: "mvp", label: "MVP Speedrun", addWeeks: 0, desc: "Lean, tested, ready to launch to your first 1,000 users" },
  { id: "scale", label: "Production Scaleup", addWeeks: 2, desc: "Hardened security, automated tests, full analytics, and custom APIs" },
  { id: "enterprise", label: "Enterprise Architecture", addWeeks: 4, desc: "SOC-2/HIPAA compliance, multi-region failover, custom SLA" },
];

const ADDONS = [
  { id: "stripe", label: "Stripe Billing & Invoices", icon: "💳" },
  { id: "ai", label: "OpenAI / Claude AI Agent", icon: "🤖" },
  { id: "rbac", label: "Custom Claims & RBAC", icon: "🔒" },
  { id: "realtime", label: "Realtime Data Sync", icon: "⚡" },
  { id: "store", label: "App & Play Store Submission", icon: "🚀" },
];

export function ProjectScopeEstimator() {
  const [selectedBuild, setSelectedBuild] = useState<string>("mobile");
  const [selectedScale, setSelectedScale] = useState<string>("mvp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["stripe", "rbac"]);

  const currentBuild = BUILD_TYPES.find((b) => b.id === selectedBuild) || BUILD_TYPES[0];
  const currentScale = SCALES.find((s) => s.id === selectedScale) || SCALES[0];

  const totalWeeksMin = currentBuild.defaultWeeks + currentScale.addWeeks;
  const totalWeeksMax = totalWeeksMin + Math.ceil(selectedAddons.length * 0.5);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-14 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-cerulean bg-cerulean/10 border border-cerulean/30 mb-4">
          <Zap className="w-3.5 h-3.5" /> Interactive Project Architect
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Configure Your <span className="text-gradient-duo">Dream Build</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Select what you want engineered. Our team delivers custom software tailored exactly to your specification — from early prototypes to high-scale enterprise platforms.
        </p>
      </div>

      {/* ESTIMATOR GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Platform Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cerulean font-bold">
                01. Select Software Category
              </span>
              <span className="text-xs text-white/40">Any technology. Any device.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {BUILD_TYPES.map((build) => {
                const isSelected = selectedBuild === build.id;
                return (
                  <button
                    key={build.id}
                    onClick={() => setSelectedBuild(build.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? "bg-cerulean/15 border-cerulean shadow-[0_0_25px_rgba(0,123,167,0.35)]"
                        : "bg-jet-surface/90 border-jet-border hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? "bg-cerulean text-white" : "bg-white/5 text-cerulean"
                        }`}
                      >
                        {build.icon}
                      </div>
                      <span className="font-bold text-sm text-white">{build.title}</span>
                    </div>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                      {build.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Complexity Scale */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-rose font-bold">
                02. Choose Target Scope & Scale
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SCALES.map((scale) => {
                const isSelected = selectedScale === scale.id;
                return (
                  <button
                    key={scale.id}
                    onClick={() => setSelectedScale(scale.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-neon-rose/15 border-neon-rose shadow-[0_0_20px_rgba(255,45,149,0.3)]"
                        : "bg-jet-surface/80 border-jet-border hover:border-white/20"
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white mb-1">{scale.label}</div>
                    <div className="text-[11px] text-white/50 leading-relaxed">{scale.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Key Features & Addons */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00A3DE] font-bold">
                03. Key Architectural Modules
              </span>
              <span className="text-xs text-white/40">Toggle to include</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all border cursor-pointer flex items-center gap-2 ${
                      isChecked
                        ? "bg-white/10 border-cerulean text-white shadow-[0_0_15px_rgba(0,123,167,0.25)]"
                        : "bg-jet-surface border-jet-border text-white/60 hover:text-white"
                    }`}
                  >
                    <span>{addon.icon}</span>
                    <span>{addon.label}</span>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-cerulean" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Live Estimate Card Column */}
        <div className="lg:col-span-5">
          <Card3D glowColor="dual" maxTilt={6}>
            <div className="p-7 sm:p-8 rounded-3xl bg-jet-surface border border-jet-border shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-jet-border pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-rose" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/80 font-bold">
                    Real-Time Sprint Synthesis
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Ready to Build
                </span>
              </div>

              {/* Timeline Display */}
              <div className="mb-6 p-5 rounded-2xl bg-jet border border-jet-border text-center relative overflow-hidden">
                <div className="text-xs font-mono uppercase text-white/50 mb-1">
                  Estimated Delivery Timeline
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono text-gradient-duo mb-2">
                  {totalWeeksMin}–{totalWeeksMax} Weeks
                </div>
                <div className="text-xs text-white/60 flex items-center justify-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cerulean" />
                  <span>Production-Grade Shipped & Tested</span>
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-3.5 mb-8 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-jet-border/60">
                  <span className="text-white/50">Core Platform</span>
                  <span className="font-semibold text-white">{currentBuild.title}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-jet-border/60">
                  <span className="text-white/50">Recommended Stack</span>
                  <span className="font-mono text-cerulean text-right max-w-[210px] truncate">{currentBuild.stack}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-jet-border/60">
                  <span className="text-white/50">Sprint Architecture</span>
                  <span className="font-semibold text-white">{currentScale.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Included Modules</span>
                  <span className="font-mono text-neon-rose font-bold">{selectedAddons.length} Integrated</span>
                </div>
              </div>

              {/* Founder Guarantee */}
              <div className="p-3.5 rounded-xl bg-cerulean/10 border border-cerulean/20 text-xs text-white/70 mb-6 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-cerulean shrink-0 mt-0.5" />
                <span>
                  <strong>100% Code & IP Ownership:</strong> Every single line of code, schema, API key, and repository belongs strictly to you.
                </span>
              </div>

              {/* Action Button */}
              <Link href={`/contact?platform=${selectedBuild}&timeline=${totalWeeksMin}-${totalWeeksMax}weeks`} className="w-full block group">
                <button className="btn-duo w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group">
                  <span>Lock In This Sprint Roadmap</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>
            </div>
          </Card3D>
        </div>

      </div>

    </section>
  );
}
