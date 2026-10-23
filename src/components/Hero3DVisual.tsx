"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface Hero3DVisualProps {
  className?: string;
}

export function Hero3DVisual({ className = "" }: Hero3DVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 16,
      y: x * 20,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Live Canvas Synapse & Quantum Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 380);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 380);

    const particles: {
      x: number;
      y: number;
      speed: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.8 + Math.random() * 1.5,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "#FF2D95" : "#00A3DE",
      alpha: Math.random() * 0.7 + 0.3,
    }));

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw flowing synapses
      for (const p of particles) {
        p.x += p.speed;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;

        ctx.beginPath();
        ctx.arc(p.x, p.y + Math.sin(time + p.x * 0.05) * 10, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* 3D TILT DISC */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
        className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 bg-[#0A0C14] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(0,123,167,0.35),0_0_40px_rgba(255,45,149,0.25)] flex items-center justify-center group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* PHOTOREALISTIC AI + HUMAN SYNERGY IMAGE LAYER */}
        <img
          src="/ai-human-synergy-3d.jpg"
          alt="Photorealistic 3D Human + AI Synergy Core"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* INTERACTIVE CANVAS PARTICLES */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-10 w-full h-full"
        />

        {/* SPECULAR GLASS SURFACE LIGHTING GLARE */}
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-35 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.y * 1.5}% ${
              50 + tilt.x * 1.5
            }%, rgba(255,255,255,0.45) 0%, transparent 60%)`,
          }}
        />

        {/* VIGNETTE GRADIENTS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none z-20" />

        {/* FLOATING 3D BADGES */}
        {/* Top-Left: Human Neural Badge */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-amber-500/40 backdrop-blur-xl shadow-lg"
          style={{ transform: "translateZ(30px)" }}
        >
          <Brain className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono font-bold text-white">Human Architect</span>
        </motion.div>

        {/* Top-Right: AI Swarm Badge */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-4 right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-cerulean/40 backdrop-blur-xl shadow-lg"
          style={{ transform: "translateZ(30px)" }}
        >
          <Cpu className="w-3.5 h-3.5 text-cerulean" />
          <span className="text-[11px] font-mono font-bold text-white">Autonomous AI</span>
        </motion.div>

        {/* Bottom Synthesis Status Pill */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/85 border border-white/20 backdrop-blur-xl shadow-xl text-[10px] font-mono text-white whitespace-nowrap"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>SYNTHESIS: ACTIVE</span>
          <span className="text-neon-rose font-bold">100% Synergy</span>
        </div>
      </motion.div>
    </div>
  );
}
