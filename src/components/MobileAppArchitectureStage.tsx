"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Zap,
  Shield,
  Database,
  Cpu,
  Layers,
  Sparkles,
  CreditCard,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Fingerprint,
  RefreshCw,
  Search,
  Bot
} from "lucide-react";
import { RealisticSmartphone } from "./RealisticSmartphone";

interface ArchNode {
  id: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  glow: "cerulean" | "rose";
  desc: string;
  metric: string;
  screenSnippet: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "impeller",
    title: "120 FPS Impeller GPU",
    badge: "Hardware Accelerated",
    icon: <Zap className="w-4 h-4 text-neon-rose" />,
    glow: "rose",
    desc: "Direct Vulkan & Metal GPU rendering engine ensuring 0% jank and buttery smooth 120 FPS transitions across all iOS and Android hardware.",
    metric: "8.3ms Frametime",
    screenSnippet: "Impeller Engine: Vulkan / Metal Active (120 FPS)",
  },
  {
    id: "edge-ai",
    title: "Edge AI & Vector Search",
    badge: "On-Device Intelligence",
    icon: <Cpu className="w-4 h-4 text-cerulean" />,
    glow: "cerulean",
    desc: "Local SQLite + on-device vector embeddings for instantaneous sub-10ms search without requiring constant cloud roundtrips.",
    metric: "<10ms Vector Query",
    screenSnippet: "Vector Index: pgvector + HNSW Local Cache",
  },
  {
    id: "biometrics",
    title: "Biometric Secure Enclave",
    badge: "Hardware Security",
    icon: <Fingerprint className="w-4 h-4 text-neon-rose" />,
    glow: "rose",
    desc: "Cryptographic hardware enclave binding with FaceID and TouchID for zero-knowledge JWT sessions and banking-grade security.",
    metric: "Hardware Bound",
    screenSnippet: "Secure Enclave: FaceID / TouchID Authenticated",
  },
  {
    id: "realtime",
    title: "Supabase Realtime Sync",
    badge: "Sub-30ms WebSockets",
    icon: <Database className="w-4 h-4 text-cerulean" />,
    glow: "cerulean",
    desc: "Bidirectional WebSocket replication with row-level security policies and instant state propagation across devices.",
    metric: "22ms State Sync",
    screenSnippet: "WebSockets: Connected to Supabase Edge",
  },
  {
    id: "payments",
    title: "Native Apple & Google Pay",
    badge: "Stripe PaymentSheet",
    icon: <CreditCard className="w-4 h-4 text-neon-rose" />,
    glow: "rose",
    desc: "Direct Apple Pay & Google Pay checkout flow via native Stripe PaymentSheet with automated SCA 3D Secure compliance.",
    metric: "1-Click Checkout",
    screenSnippet: "PaymentSheet: Apple Pay & Google Pay Ready",
  },
  {
    id: "offline",
    title: "Offline-First Sync Engine",
    badge: "Zero-Data Loss",
    icon: <WifiOff className="w-4 h-4 text-cerulean" />,
    glow: "cerulean",
    desc: "Optimistic UI mutations stored in local persistence with automatic background conflict resolution when connectivity restores.",
    metric: "100% Offline Ready",
    screenSnippet: "Offline Queue: 0 Pending Synced",
  },
];

export function MobileAppArchitectureStage() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const activeNode = ARCH_NODES[activeNodeIndex];

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cerulean bg-cerulean/10 border border-cerulean/30 shadow-[0_0_20px_rgba(0,123,167,0.25)] mb-4">
          <Smartphone className="w-3.5 h-3.5 text-neon-rose" />
          <span>Mobile App Architecture · Cross-Platform Stacks</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Engineered For <span className="text-gradient-duo">120 FPS Fluidity & Edge AI</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          We architect native iOS and Android applications with Google Flutter's Impeller GPU engine, on-device vector intelligence, and bulletproof security.
        </p>
      </div>

      {/* Main 3D Orbital & Floating Card Stage: Seamless Canvas (No Weird Container Edges) */}
      <div className="relative py-4">
        
        {/* Holographic Glowing Orbit Ring Behind Phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full border border-cerulean/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full border border-neon-rose/25 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cerulean/15 blur-[130px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Architectural Capability Cards (Nodes 0, 1, 2) */}
          <div className="lg:col-span-4 space-y-4">
            {ARCH_NODES.slice(0, 3).map((node, i) => {
              const isSelected = activeNodeIndex === i;
              return (
                <motion.div
                  key={node.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveNodeIndex(i)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? node.glow === "rose"
                        ? "bg-jet/90 border-neon-rose shadow-[0_0_25px_rgba(255,45,149,0.35)]"
                        : "bg-jet/90 border-cerulean shadow-[0_0_25px_rgba(0,123,167,0.35)]"
                      : "bg-jet/50 border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {node.icon}
                      </div>
                      <span className="font-bold text-white text-sm">{node.title}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {node.metric}
                    </span>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed pl-10">
                    {node.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Hyper-Realistic Flagship Smartphone with Live Layer Visual (Pin 4 & Pin 2) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            
            {/* Realistic Flagship Smartphone Hardware Frame */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotateZ: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[320px] flex justify-center"
            >
              <RealisticSmartphone
                glowColor={activeNode.glow === "rose" ? "rose" : "cerulean"}
                className="w-full max-w-[310px]"
              >
                {/* Screen Content Inside Realistic Flagship Display */}
                <div className="p-4 pt-3 flex-1 flex flex-col justify-between text-white">
                  
                  {/* App Screen Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[10px] font-mono text-cerulean uppercase tracking-wider">Architecture Layer</div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{activeNode.title}</span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neon-rose/20 text-neon-rose border border-neon-rose/40 font-bold">
                        120 FPS
                      </span>
                    </div>

                    {/* Active Architectural Layer Inspector Banner */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-cerulean/30 mb-3 shadow-[0_0_15px_rgba(0,123,167,0.15)]">
                      <div className="text-[9px] font-mono text-white/50 mb-0.5">HARDWARE TELEMETRY</div>
                      <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{activeNode.screenSnippet}</span>
                      </div>
                    </div>

                    {/* Mobile App Active Modules Feed */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-jet/90 border border-white/10 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-cerulean/20 text-cerulean flex items-center justify-center text-xs">
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium">Edge AI Copilot</span>
                        </div>
                        <span className="text-[10px] font-mono text-cerulean font-bold">4ms ONNX</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-jet/90 border border-white/10 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-neon-rose/20 text-neon-rose flex items-center justify-center text-xs">
                            <CreditCard className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium">Apple Pay / Stripe</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">Instant</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-jet/90 border border-white/10 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">
                            <Shield className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium">Biometric Secure Enclave</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/70">Hardware Locked</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Nav Bar */}
                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-around text-[11px] font-mono text-white/50">
                    <span className="text-cerulean font-bold">Home</span>
                    <span>Swarm</span>
                    <span>Wallet</span>
                    <span>Profile</span>
                  </div>

                </div>
              </RealisticSmartphone>
            </motion.div>

            {/* Orbit Selector Dots */}
            <div className="flex items-center gap-2 mt-6">
              {ARCH_NODES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeNodeIndex === idx
                      ? "bg-neon-rose w-7 shadow-[0_0_10px_#FF2D95]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Architectural Capability Cards (Nodes 3, 4, 5) */}
          <div className="lg:col-span-4 space-y-4">
            {ARCH_NODES.slice(3, 6).map((node, i) => {
              const actualIdx = i + 3;
              const isSelected = activeNodeIndex === actualIdx;
              return (
                <motion.div
                  key={node.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveNodeIndex(actualIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? node.glow === "rose"
                        ? "bg-jet/90 border-neon-rose shadow-[0_0_25px_rgba(255,45,149,0.35)]"
                        : "bg-jet/90 border-cerulean shadow-[0_0_25px_rgba(0,123,167,0.35)]"
                      : "bg-jet/50 border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {node.icon}
                      </div>
                      <span className="font-bold text-white text-sm">{node.title}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {node.metric}
                    </span>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed pl-10">
                    {node.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
