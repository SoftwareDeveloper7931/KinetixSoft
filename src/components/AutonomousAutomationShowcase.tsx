"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Bot,
  Workflow,
  Sparkles,
  FileText,
  MessageSquare,
  CheckCircle2,
  Database,
  ArrowRight,
  Play,
  RotateCcw,
  Check,
  Send,
  Cpu,
  Layers,
  Activity
} from "lucide-react";
import { Card3D } from "./Card3D";

interface TriggerFlow {
  id: string;
  title: string;
  type: string;
  input: string;
  intent: string;
  outputs: string[];
  duration: string;
}

const FLOWS: TriggerFlow[] = [
  {
    id: "lead",
    title: "Inbound Enterprise Lead",
    type: "Webhook Trigger",
    input: "Inbound Form Webhook: SaaS Scaleup ($45k budget, Flutter Mobile + Podio CRM)",
    intent: "Classified: High-Priority Enterprise Discovery. Sentiment: Urgent. Tech Stack: FlutterFlow + Podio.",
    outputs: [
      "Podio Workspace: Lead Assigned to Principal Architect (Round-Robin)",
      "GlobiFlow: Auto-generated NDA & Discovery Calendar link dispatched",
      "Slack / SMS: High-priority ping sent to executive engineering channel",
      "Self-Healing QA: Schema validated, zero data leakage verified (18ms)",
    ],
    duration: "18ms",
  },
  {
    id: "pdf",
    title: "Unstructured RFP & Contract",
    type: "Document Parse",
    input: "PDF Ingest: 28-Page Enterprise Scope Document (Healthcare HIPAA Portal)",
    intent: "Extracted: 4 Core Microservices, PostgreSQL DB schema, Role-Based Access Controls.",
    outputs: [
      "AI Synthesizer: Generated structured technical spec & sprint breakdown",
      "Database Schema: pgvector table definitions & RLS policies drafted",
      "Client Dashboard: Interactive scope estimator & live quote dispatched",
      "Audit Trail: Cryptographic SHA-256 hash stamped on ledger",
    ],
    duration: "34ms",
  },
  {
    id: "db",
    title: "Real-Time Event Stream",
    type: "Database Change",
    input: "Stripe Subscription Event: Customer Upgraded to Enterprise Dedicated Swarm",
    intent: "Detected: Tier Upgrade ➔ Provisioning dedicated LangGraph agent container.",
    outputs: [
      "Replit Deployment: Auto-scaled asynchronous FastAPI background workers",
      "Vector Store: Dedicated tenant namespace partitioned in pgvector",
      "Telemetry Sync: Latency SLAs pinned to <30ms edge routing",
      "Verification: End-to-end integration test executed with 100% pass",
    ],
    duration: "22ms",
  },
];

export function AutonomousAutomationShowcase() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [completedStep, setCompletedStep] = useState(3);

  const activeFlow = FLOWS[activeFlowIndex];

  const handleSimulate = (idx: number) => {
    setActiveFlowIndex(idx);
    setIsSimulating(true);
    setCompletedStep(0);

    const timer = setInterval(() => {
      setCompletedStep((prev) => {
        if (prev >= 3) {
          clearInterval(timer);
          setIsSimulating(false);
          return 3;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Header section inspired by Pin 3 */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-neon-rose bg-neon-rose/10 border border-neon-rose/30 shadow-[0_0_20px_rgba(255,45,149,0.25)] mb-4">
          <Workflow className="w-3.5 h-3.5 text-[#00A3DE]" />
          <span>Autonomous Event-Driven Pipeline</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Watch Autonomous <span className="text-gradient-rose">Automation In Action</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          From incoming webhooks and unstructured PDFs to self-healing CRM routing. Our multi-agent swarms orchestrate business processes with zero human friction.
        </p>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {FLOWS.map((flow, i) => (
            <button
              key={flow.id}
              onClick={() => handleSimulate(i)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeFlowIndex === i
                  ? "bg-gradient-to-r from-cerulean to-[#00A3DE] text-white border border-cerulean/50 shadow-[0_0_20px_rgba(0,123,167,0.4)] font-bold"
                  : "bg-jet-surface/80 text-white/70 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <Play className={`w-3 h-3 ${activeFlowIndex === i ? "text-neon-rose fill-neon-rose" : "text-cerulean"}`} />
              <span>{flow.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 3-Column Automation Pipeline Stage (Directly inspired by Pin 1107815208384805540) */}
      <div className="rounded-3xl p-6 sm:p-10 bg-jet-surface/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,123,167,0.25),0_15px_50px_rgba(255,45,149,0.2)] relative">
        
        {/* Ambient Backlight Radiance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient from-cerulean/15 via-neon-rose/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          
          {/* LEFT COLUMN: Inbound Triggers & Inputs (Pin 3 Left Cards) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase text-cerulean font-bold flex items-center gap-2 mb-2">
              <Zap className="w-3.5 h-3.5" /> Inbound Triggers
            </div>

            {[
              {
                title: "Webhook Ingestion",
                sub: "Stripe, Typeform, Inbound API",
                icon: <Zap className="w-4 h-4 text-cerulean" />,
                active: activeFlowIndex === 0,
              },
              {
                title: "Unstructured Document",
                sub: "PDF, RFP, Voice Transcripts",
                icon: <FileText className="w-4 h-4 text-neon-rose" />,
                active: activeFlowIndex === 1,
              },
              {
                title: "Event-Driven Stream",
                sub: "Postgres Changefeed & DB Logs",
                icon: <Database className="w-4 h-4 text-amber-400" />,
                active: activeFlowIndex === 2,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSimulate(i)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                  card.active
                    ? "bg-jet/90 border-cerulean shadow-[0_0_25px_rgba(0,123,167,0.35)]"
                    : "bg-jet/50 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">{card.title}</div>
                    <div className="text-[11px] text-white/50 font-mono">{card.sub}</div>
                  </div>
                </div>

                {/* Animated Signal Packet Indicator */}
                {card.active && isSimulating && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cerulean blur-sm"
                  />
                )}
              </motion.div>
            ))}

            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-white/60 leading-relaxed">
                <span className="text-cerulean font-bold">Input Stream: </span>
                {activeFlow.input}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Autonomous Device Orchestrator (Pin 3 Phone & Energy Halo) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Glowing Halo Rings */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-cerulean/30 animate-pulse pointer-events-none" />
            <div className="absolute w-88 h-88 sm:w-96 sm:h-96 rounded-full border border-neon-rose/20 animate-spin-slow pointer-events-none" />

            {/* Floating 3D Phone Shell */}
            <div className="w-full max-w-[320px] rounded-[36px] p-3.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border-2 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(0,123,167,0.35)] relative overflow-hidden backdrop-blur-2xl">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 z-30 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] font-mono text-white/70">AGENT v2.4</span>
              </div>

              {/* Internal Screen Content */}
              <div className="rounded-[28px] bg-[#07090E] p-4 pt-10 border border-white/10 min-h-[380px] flex flex-col justify-between text-xs font-mono">
                
                {/* Header */}
                <div className="border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-neon-rose" />
                      Claude-3.5 Swarm
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/30">
                      AUTONOMOUS
                    </span>
                  </div>
                  <div className="text-[10px] text-white/40 mt-1">Status: Reasoning & Tool Dispatch</div>
                </div>

                {/* Live Agent Thought Bubble */}
                <div className="space-y-2.5 flex-1 py-1">
                  <div className="p-2.5 rounded-xl bg-cerulean/10 border border-cerulean/30 text-white/90">
                    <div className="text-[10px] text-cerulean font-bold mb-1 uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-neon-rose" /> Semantic Intent
                    </div>
                    <p className="text-[11px] leading-relaxed text-white/80">{activeFlow.intent}</p>
                  </div>

                  {/* Active Tool-Calling Loop */}
                  <div className="p-2.5 rounded-xl bg-jet border border-white/10 space-y-1.5 text-[11px]">
                    <div className="text-[10px] text-white/40 flex items-center justify-between">
                      <span>TOOL CALL EXECUTION</span>
                      <span className="text-emerald-400 font-bold">{activeFlow.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-rose animate-ping" />
                      <span>{activeFlow.outputs[Math.min(completedStep, activeFlow.outputs.length - 1)]}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                  <span>Latency: <strong className="text-emerald-400">{activeFlow.duration}</strong></span>
                  <span className="text-cerulean flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Zero Human In-Loop
                  </span>
                </div>

              </div>

            </div>

            {/* Trigger Simulation Button */}
            <button
              onClick={() => handleSimulate(activeFlowIndex)}
              className="mt-6 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
            >
              <RotateCcw className="w-3 h-3 text-neon-rose" />
              <span>Simulate Next Event</span>
            </button>
          </div>

          {/* RIGHT COLUMN: Automated Actions & Results (Pin 3 Output Cards) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-neon-rose font-bold flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Autonomous Results
            </div>

            {activeFlow.outputs.map((out, idx) => {
              const isDone = idx <= completedStep;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: isDone ? 1 : 0.4, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isDone
                      ? "bg-jet/90 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      : "bg-jet/40 border-white/5"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isDone
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-white/5 text-white/30"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white mb-0.5">
                        {out.split(":")[0]}
                      </div>
                      <div className="text-[11px] text-white/60 leading-relaxed font-mono">
                        {out.substring(out.indexOf(":") + 1)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Live Operational Status Strip */}
            <div className="p-3.5 rounded-xl bg-cerulean/10 border border-cerulean/30 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">100% Operational</span>
              </div>
              <span className="text-[#00A3DE] font-semibold">SLA Guaranteed</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
