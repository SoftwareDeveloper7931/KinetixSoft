"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  GitBranch,
  Shield,
  Bot
} from "lucide-react";

interface Hotspot {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  desc: string;
  color: "gold" | "duo" | "cerulean";
  position: { top: string; left: string };
  icon: React.ReactNode;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "human",
    title: "Human Neural Core",
    badge: "Architectural Intent",
    tagline: "Biological Cognition & Senior Leadership",
    desc: "100% senior-led system architecture, intuitive UI/UX psychology, edge-case discernment, and strict enterprise security verification.",
    color: "gold",
    position: { top: "38%", left: "18%" },
    icon: <Brain className="w-4 h-4 text-amber-400" />,
  },
  {
    id: "synthesis",
    title: "The Synthesis Horizon",
    badge: "Continuous Synergy",
    tagline: "Zero-Friction Intent-to-Execution Bridge",
    desc: "Where human specifications seamlessly ignite autonomous multi-agent pipelines with zero translation loss and instant verification loops.",
    color: "duo",
    position: { top: "48%", left: "50%" },
    icon: <Sparkles className="w-4 h-4 text-neon-rose" />,
  },
  {
    id: "ai",
    title: "Autonomous AI Swarm",
    badge: "Silicon Velocity",
    tagline: "Quantum Multi-Agent Tool Calling",
    desc: "Claude-3.5 and LangGraph worker swarms synthesizing robust TypeScript/Dart, generating test fixtures, and self-healing deployment errors.",
    color: "cerulean",
    position: { top: "52%", left: "82%" },
    icon: <Cpu className="w-4 h-4 text-[#00A3DE]" />,
  },
];

interface HumanAISynergy3DProps {
  compact?: boolean;
  showControls?: boolean;
  className?: string;
}

export function HumanAISynergy3D({
  compact = false,
  showControls = true,
  className = "",
}: HumanAISynergy3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[1]);
  const [activeMode, setActiveMode] = useState<"synergy" | "human" | "ai">("synergy");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse 3D tilt tracking with spring feel
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 14, // Tilt up/down
      y: x * 18,  // Tilt left/right
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Interactive 3D Canvas Synaptic Impulse & Circuit Stream Overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle pulse stream flowing from Human synapses (left) -> Core (center) -> AI circuits (right)
    interface ImpulseParticle {
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
      color: string;
      curveAmp: number;
      freq: number;
    }

    const impulses: ImpulseParticle[] = Array.from({ length: 42 }, () => ({
      x: Math.random() * (width * 0.4),
      y: height * 0.25 + Math.random() * (height * 0.5),
      speed: 1.2 + Math.random() * 2.2,
      size: Math.random() * 2.4 + 1.2,
      opacity: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? "#FFB84D" : "#00A3DE",
      curveAmp: (Math.random() - 0.5) * 35,
      freq: 0.02 + Math.random() * 0.03,
    }));

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Render impulses flowing across the fusion core
      for (const p of impulses) {
        p.x += p.speed;
        if (p.x > width * 0.95) {
          p.x = width * 0.05 + Math.random() * 40;
          p.y = height * 0.3 + Math.random() * (height * 0.4);
        }

        const offsetY = Math.sin(time * 2 + p.x * p.freq) * p.curveAmp;
        const currentY = p.y + offsetY;

        // Gradient glow particle
        const isCore = p.x > width * 0.4 && p.x < width * 0.65;
        const pulseColor = isCore ? "#FF2D95" : p.x > width * 0.55 ? "#00A3DE" : "#F59E0B";

        ctx.fillStyle = pulseColor;
        ctx.shadowColor = pulseColor;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.opacity;

        ctx.beginPath();
        ctx.arc(p.x, currentY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw faint electric trail
        ctx.strokeStyle = pulseColor;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = p.opacity * 0.4;
        ctx.beginPath();
        ctx.moveTo(p.x, currentY);
        ctx.lineTo(p.x - p.speed * 4, currentY - offsetY * 0.1);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${className} select-none`}
      style={{ perspective: "1200px" }}
    >
      {/* 3D TILT CONTAINER */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-b from-[#161822] via-[#0B0C12] to-black shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(0,123,167,0.35),0_0_50px_rgba(255,45,149,0.25)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ATMOSPHERIC BACKGROUND RADIAL GLOWS */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cerulean/25 blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-neon-rose/25 blur-[90px] pointer-events-none" />

        {/* PHOTOREALISTIC 3D COMPILATION RENDER: HUMAN NEURAL SYNAPSES + AI SILICON MATRIX */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] max-h-[560px] overflow-hidden flex items-center justify-center">
          <img
            src="/ai-human-synergy-3d.jpg"
            alt="3D Fusion of Human Neural Synapses and Autonomous AI Matrix"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-[1.02] filter contrast-[1.05] brightness-[1.02]"
            style={{
              transform: isHovered ? "scale(1.04)" : "scale(1.0)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* DYNAMIC IMPULSE PARTICLE CANVAS OVERLAY */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10 w-full h-full"
          />

          {/* SPECULAR GLASS SURFACE GLARE (SIMULATING EXPENSIVE OPTICAL LENS) */}
          <div
            className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-screen"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.y * 1.5}% ${
                50 + tilt.x * 1.5
              }%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
          />

          {/* VIGNETTE & EDGING */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-20" />

          {/* INTERACTIVE 3D HOTSPOTS ON THE MODEL */}
          {HOTSPOTS.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                style={{ top: spot.position.top, left: spot.position.left }}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
              >
                {/* Pulsing Aura Ping */}
                <span
                  className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                    spot.color === "gold"
                      ? "bg-amber-400"
                      : spot.color === "duo"
                      ? "bg-neon-rose"
                      : "bg-[#00A3DE]"
                  }`}
                />

                {/* Hotspot Button Center */}
                <div
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-2xl backdrop-blur-md ${
                    isSelected
                      ? "scale-125 border-white bg-black/90 shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                      : "border-white/40 bg-black/70 hover:scale-110 hover:border-white"
                  }`}
                >
                  {spot.icon}
                </div>

                {/* Floating Hotspot Tooltip */}
                <div
                  className={`hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-md text-[10px] font-mono whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? "opacity-100 bg-black/90 text-white border border-white/20 shadow-lg"
                      : "opacity-0 group-hover:opacity-100 bg-black/80 text-white/80"
                  }`}
                >
                  {spot.title}
                </div>
              </button>
            );
          })}

          {/* FLOATING 3D TELEMETRY BADGES (ANCHORED IN 3D SPACE) */}
          {/* Top Left: Human Intelligence Badge */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-amber-500/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(245,158,11,0.25)]"
            style={{ transform: "translateZ(35px)" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
            <div>
              <div className="text-[9px] font-mono text-amber-300/80 uppercase">Human Layer</div>
              <div className="text-xs font-bold text-white">Senior Architects & Intent</div>
            </div>
          </motion.div>

          {/* Top Right: AI Silicon Swarm Badge */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-cerulean/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,123,167,0.3)]"
            style={{ transform: "translateZ(35px)" }}
          >
            <Cpu className="w-4 h-4 text-cerulean" />
            <div>
              <div className="text-[9px] font-mono text-cerulean/80 uppercase">AI Swarm Layer</div>
              <div className="text-xs font-bold text-white">Claude 3.5 & Tool Calling</div>
            </div>
          </motion.div>

          {/* Bottom Center: Synthesis Telemetry Pill */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-xl shadow-xl text-xs font-mono"
            style={{ transform: "translateZ(45px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold">SYNTHESIS: OPERATIONAL</span>
            <span className="text-white/30">|</span>
            <span className="text-neon-rose font-bold">100% Synergy</span>
          </div>
        </div>

        {/* ACTIVE HOTSPOT EXPANDED INFO DRAWER (BELOW 3D VISUAL) */}
        <div className="p-5 sm:p-6 bg-jet-surface/90 border-t border-white/10 backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-start sm:items-center gap-3.5">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                  activeHotspot.color === "gold"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                    : activeHotspot.color === "duo"
                    ? "bg-neon-rose/15 border-neon-rose/40 text-neon-rose"
                    : "bg-cerulean/15 border-cerulean/40 text-cerulean"
                }`}
              >
                {activeHotspot.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-base font-bold text-white">{activeHotspot.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                    {activeHotspot.badge}
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed max-w-xl">
                  {activeHotspot.desc}
                </p>
              </div>
            </div>

            {/* Hotspot Selectors */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              {HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                    activeHotspot.id === s.id
                      ? "bg-white/15 text-white border border-white/30 font-bold shadow-sm"
                      : "bg-white/5 text-white/50 hover:text-white border border-white/5"
                  }`}
                >
                  {s.id.toUpperCase()}
                </button>
              ))}
            </div>

          </div>
        </div>

      </motion.div>

      {/* OPTIONAL MODE TOGGLE BUTTONS BELOW */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <div className="text-xs font-mono text-white/50 mr-2 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cerulean" /> Architectural Modes:
          </div>
          {[
            {
              id: "synergy",
              label: "Dual Synergy (AI + Human)",
              color: "border-neon-rose/40 bg-neon-rose/10 text-white",
              hotspotId: "synthesis",
            },
            {
              id: "human",
              label: "Human Strategic Intent",
              color: "border-amber-500/40 bg-amber-500/10 text-white",
              hotspotId: "human",
            },
            {
              id: "ai",
              label: "Autonomous Swarm Execution",
              color: "border-cerulean/40 bg-cerulean/10 text-white",
              hotspotId: "ai",
            },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setActiveMode(mode.id as any);
                const found = HOTSPOTS.find((h) => h.id === mode.hotspotId);
                if (found) setActiveHotspot(found);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-all flex items-center gap-2 ${
                activeMode === mode.id
                  ? `${mode.color} font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]`
                  : "border-white/10 bg-jet-surface/60 text-white/60 hover:text-white"
              }`}
            >
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
