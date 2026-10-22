"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Cpu,
  Zap,
  ShieldCheck,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Workflow,
  Search,
  Code2
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  role: string;
  model: string;
  status: "ACTIVE" | "REASONING" | "EXECUTING" | "STANDBY";
  glow: "cerulean" | "neon-rose";
  action: string;
  tools: string[];
}

const AGENTS: Agent[] = [
  {
    id: "planner",
    name: "Architect Agent",
    role: "System Graph & Schema Synthesis",
    model: "Claude 3.5 Sonnet",
    status: "REASONING",
    glow: "cerulean",
    action: "Synthesizing multi-tenant Postgres schemas & API specifications",
    tools: ["schema_validator", "ast_parser", "spec_synthesizer"],
  },
  {
    id: "coder",
    name: "Engineering Swarm",
    role: "Flutter & Backend Generation",
    model: "GPT-4o Agentic Swarm",
    status: "EXECUTING",
    glow: "neon-rose",
    action: "Compiling Flutter Impeller 120 FPS widgets and FastAPI microservices",
    tools: ["flutter_compiler", "dart_linter", "fastapi_builder"],
  },
  {
    id: "security",
    name: "Sentinel Agent",
    role: "Zero-Leak Cryptographic Audit",
    model: "Security Guard LLM",
    status: "ACTIVE",
    glow: "cerulean",
    action: "Verifying Row-Level Security isolation and API rate-limiting tokens",
    tools: ["rls_verifier", "jwt_guard", "soc2_auditor"],
  },
  {
    id: "optimizer",
    name: "Self-Healing QA Agent",
    role: "Autonomous Runtime Diagnostics",
    model: "Adaptive Reasoning Core",
    status: "ACTIVE",
    glow: "neon-rose",
    action: "Profile testing query latency: 28ms avg · Zero memory leaks",
    tools: ["latency_profiler", "leak_detector", "auto_patcher"],
  },
];

const PRESETS = [
  {
    title: "AI-Powered Mobile SaaS",
    prompt: "Engineer a cross-platform iOS/Android app with offline vector sync, biometric Apple Pay, and local LLM embeddings.",
    stack: "FlutterFlow · Supabase · pgvector · Stripe",
    logs: [
      "[Architect] Decomposing mobile requirements into local SQLite + Supabase vector schemas...",
      "[Engineer] Generating Flutter Impeller GPU shaders and custom payment action handlers...",
      "[Sentinel] Validating cryptographic biometric enclave keys and Firebase security rules... PASSED",
      "[Self-Healing QA] Profiling 120 FPS frame latency... 8.3ms render time verified.",
    ],
  },
  {
    title: "Autonomous Enterprise CRM",
    prompt: "Build a bespoke Podio workspace with GlobiFlow autonomous routing, Slack hooks, and automated contract dispatch.",
    stack: "Podio · GlobiFlow · Retool · Python Webhooks",
    logs: [
      "[Architect] Mapping CRM relationship graph: Leads ➔ Deals ➔ Invoices ➔ Commission...",
      "[Engineer] Deploying GlobiFlow webhook triggers for round-robin assignment and automated SMS...",
      "[Sentinel] Auditing OAuth token lifespans and enterprise team permissions... ZERO LEAKS",
      "[Self-Healing QA] Simulating 10,000 webhook events... Queue processed in 420ms with 0 errors.",
    ],
  },
  {
    title: "Multi-Agent AI Copilot Platform",
    prompt: "Deploy a high-throughput autonomous LLM agent workflow with tool dispatch, streaming webhooks, and Claude 3.5.",
    stack: "FastAPI · Claude 3.5 · LangGraph · Redis",
    logs: [
      "[Architect] Synthesizing LangGraph directed cyclic workflow with state persistence...",
      "[Engineer] Spinning up asynchronous FastAPI workers with Claude 3.5 Sonnet tool-calling...",
      "[Sentinel] Hardening egress API proxies against prompt injection and data exfiltration...",
      "[Self-Healing QA] Benchmarking end-to-end multi-agent loop: 32ms response latency confirmed.",
    ],
  },
];

export function AgenticSwarmVisualizer() {
  const [activePreset, setActivePreset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);

  // Auto-cycle through agents
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgentIndex((prev) => (prev + 1) % AGENTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleRunPreset = (index: number) => {
    setActivePreset(index);
    setIsRunning(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 700);
  };

  const selectedPreset = PRESETS[activePreset];

  return (
    <div className="w-full relative py-12 px-4 md:px-6 max-w-7xl mx-auto z-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#00A3DE] bg-cerulean/15 border border-cerulean/40 shadow-[0_0_20px_rgba(0,123,167,0.3)] mb-4">
          <Bot className="w-3.5 h-3.5 text-neon-rose animate-pulse" />
          <span>Autonomous Multi-Agent Engineering Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          How Our <span className="text-gradient-duo">Agentic Swarms</span> Build Software
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Traditional dev teams take 6 months of meetings. We deploy autonomous multi-agent pipelines that perceive your business requirements, reason over architecture, write production code, and auto-verify security.
        </p>
      </div>

      {/* Main Orchestrator Glass Grid */}
      <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-jet-surface/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,123,167,0.3),0_15px_50px_rgba(255,45,149,0.2)] relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cerulean/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-neon-rose/15 blur-[120px] pointer-events-none" />

        {/* Top Control Bar: Presets */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-white/50 mb-1 flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-cerulean" />
              <span>Select An Agentic Blueprint Simulation</span>
            </div>
            <div className="text-sm font-semibold text-white">Click any build to watch the autonomous swarm execute</div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleRunPreset(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  activePreset === idx
                    ? "bg-cerulean text-white border border-[#00A3DE] shadow-[0_0_20px_rgba(0,123,167,0.5)] font-bold"
                    : "bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <Play className={`w-3 h-3 ${activePreset === idx ? "text-neon-rose fill-neon-rose" : ""}`} />
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Swarm Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The 4 Autonomous Agents */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-cerulean font-bold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" /> Active Agent Swarm Cluster
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/30">
                ● 4 Nodes Synchronized
              </span>
            </div>

            {AGENTS.map((agent, i) => {
              const isSelected = activeAgentIndex === i;
              return (
                <motion.div
                  key={agent.id}
                  onClick={() => setActiveAgentIndex(i)}
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? agent.glow === "neon-rose"
                        ? "bg-jet/90 border-[#FF2D95]/60 shadow-[0_0_25px_rgba(255,45,149,0.35)]"
                        : "bg-jet/90 border-[#007BA7]/60 shadow-[0_0_25px_rgba(0,123,167,0.35)]"
                      : "bg-jet/50 border-white/5 hover:border-white/15"
                  }`}
                >
                  {/* Active Indicator Pulse Bar */}
                  {isSelected && (
                    <div
                      className={`absolute top-0 left-0 bottom-0 w-1 ${
                        agent.glow === "neon-rose" ? "bg-neon-rose" : "bg-cerulean"
                      }`}
                    />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          agent.glow === "neon-rose"
                            ? "bg-neon-rose/20 text-neon-rose border border-neon-rose/40"
                            : "bg-cerulean/20 text-cerulean border border-cerulean/40"
                        }`}
                      >
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{agent.name}</div>
                        <div className="text-[11px] font-mono text-white/50">{agent.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                        {agent.model}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          agent.glow === "neon-rose"
                            ? "bg-neon-rose/20 text-neon-rose"
                            : "bg-cerulean/20 text-cerulean"
                        }`}
                      >
                        {agent.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-3 pl-10">
                    {agent.action}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pl-10">
                    <span className="text-[10px] font-mono text-white/40 mr-1">Tools:</span>
                    {agent.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10 text-white/60"
                      >
                        {t}()
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Agentic Synthesis Terminal */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between">
            
            {/* Active Task Prompt Card */}
            <div className="p-5 rounded-2xl bg-jet/80 border border-white/10 mb-5 relative">
              <div className="text-xs font-mono uppercase text-neon-rose mb-1.5 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Target Blueprint Requirement</span>
              </div>
              <div className="text-sm font-medium text-white mb-3 leading-relaxed">
                "{selectedPreset.prompt}"
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10 text-white/50">
                <span>Stack: <strong className="text-cerulean">{selectedPreset.stack}</strong></span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Autonomous Ready
                </span>
              </div>
            </div>

            {/* Live Streaming Execution Console */}
            <div className="rounded-2xl bg-[#08090D] border border-white/10 p-4 sm:p-5 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-rose" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cerulean" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-white/60 ml-2">agentic_orchestrator.log</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>STREAMING</span>
                </div>
              </div>

              {/* Streaming Logs */}
              <div className="space-y-3 font-mono text-xs leading-relaxed overflow-y-auto max-h-[260px] pr-2">
                {selectedPreset.logs.map((log, idx) => {
                  const isVisible = idx <= activeStep;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isVisible ? 1 : 0.25, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors ${
                        idx === activeStep && isRunning
                          ? "bg-white/5 border border-cerulean/30"
                          : ""
                      }`}
                    >
                      <span className="text-white/30 select-none text-[10px] pt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="flex-1">
                        <span
                          className={
                            log.includes("[Architect]")
                              ? "text-cerulean font-bold"
                              : log.includes("[Engineer]")
                              ? "text-neon-rose font-bold"
                              : log.includes("[Sentinel]")
                              ? "text-amber-400 font-bold"
                              : "text-emerald-400 font-bold"
                          }
                        >
                          {log.split(" ")[0]}
                        </span>{" "}
                        <span className="text-white/80">{log.substring(log.indexOf(" ") + 1)}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Execution Telemetry Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-cerulean" />
                  <span>Agent Latency: <strong className="text-white">28ms</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Tokens/sec: <strong className="text-neon-rose">184 t/s</strong></span>
                </div>
                <button
                  onClick={() => handleRunPreset(activePreset)}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-1.5 cursor-pointer text-[10px]"
                >
                  <RotateCcw className="w-2.5 h-2.5 text-cerulean" />
                  <span>Re-run Swarm</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
