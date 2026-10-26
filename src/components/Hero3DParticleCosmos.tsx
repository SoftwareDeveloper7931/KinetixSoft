"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Sparkles, Brain } from "lucide-react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  glow: string;
  speed: number;
  phase: number;
}

export function Hero3DParticleCosmos() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let rotY = 0;
    let rotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetRotY = x * 1.5;
      targetRotX = -y * 1.2;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Optimized 3D particle sculpture (Crisp core + Orbital celestial rings)
    const particleCount = 160;
    const particles: Particle3D[] = [];

    const cerulean = "#00A3DE";
    const neonRose = "#FF2D95";
    const white = "#FFFFFF";

    for (let i = 0; i < particleCount; i++) {
      const isRing = i > particleCount * 0.55;
      let x = 0, y = 0, z = 0;

      if (!isRing) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * 160;

        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta) * 0.9;
        z = r * Math.cos(phi);
      } else {
        const angle = Math.random() * Math.PI * 2;
        const ringRadius = 180 + Math.random() * 60;
        const ringTilt = 0.5;
        x = Math.cos(angle) * ringRadius;
        y = Math.sin(angle) * ringRadius * ringTilt + (Math.random() - 0.5) * 25;
        z = Math.sin(angle) * ringRadius * (1 - ringTilt * 0.5);
      }

      const isRose = i % 3 === 0;
      const isWhite = i % 7 === 0;

      particles.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        size: isWhite ? 2.4 : Math.random() * 1.8 + 1,
        color: isWhite ? white : isRose ? neonRose : cerulean,
        glow: isRose ? "rgba(255, 45, 149, 0.3)" : "rgba(0, 163, 222, 0.3)",
        speed: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let isVisible = true;

    // Pause rendering loop when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) return;

      time += 0.012;
      rotY += (targetRotY - rotY) * 0.05 + 0.004;
      rotX += (targetRotX - rotX) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const fov = 380;
      const cx = width / 2;
      const cy = height / 2;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project particles in 3D
      const projected = particles.map((p) => {
        const pulse = Math.sin(time * p.speed * 8 + p.phase) * 6;
        const curX = p.baseX + pulse;
        const curY = p.baseY + pulse * 0.5;
        const curZ = p.baseZ;

        const x1 = curX * cosY - curZ * sinY;
        const z1 = curZ * cosY + curX * sinY;

        const y2 = curY * cosX - z1 * sinX;
        const z2 = z1 * cosX + curY * sinX;

        const distance = fov + z2 + 300;
        const scale = fov / Math.max(distance, 1);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.min(Math.max((z2 + 250) / 450, 0.15), 1.0);

        return {
          px,
          py,
          scale,
          z: z2,
          alpha,
          color: p.color,
          glow: p.glow,
          size: p.size * scale,
        };
      });

      // Draw faint constellation filaments between nearby core nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i += 4) {
        const p1 = projected[i];
        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 46) {
            ctx.strokeStyle = `rgba(0, 163, 222, ${(1 - dist / 46) * 0.25 * p1.alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw fast hardware-accelerated 3D particle nodes (no CPU shadowBlur fallback)
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        
        // Soft outer ambient halo
        ctx.fillStyle = p.glow;
        ctx.globalAlpha = p.alpha * 0.45;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // High-contrast bright core
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(p.size, 0.8), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none group">
      {/* Ambient background glow behind particle sculpture */}
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-cerulean/25 blur-[100px] pointer-events-none" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-neon-rose/25 blur-[110px] pointer-events-none" />
      <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-amber-500/15 blur-[80px] pointer-events-none" />

      {/* 3D CORE DISC: PHOTOREALISTIC HUMAN SYNAPSE + AI SILICON MATRIX */}
      <motion.div
        animate={{ scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[200px] sm:w-[250px] lg:w-[280px] aspect-square rounded-full overflow-hidden border-2 border-white/25 shadow-[0_0_80px_rgba(0,123,167,0.5),0_0_50px_rgba(255,45,149,0.35)] z-0 pointer-events-none"
      >
        <img
          src="/ai-human-synergy-3d.jpg"
          alt="3D Fusion of Human Neural Synapses and Autonomous AI Swarms"
          className="w-full h-full object-cover scale-105 filter contrast-105 brightness-105"
        />
        {/* Specular Glare Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cerulean/25 via-transparent to-neon-rose/25 mix-blend-screen" />
        <div className="absolute inset-0 rounded-full border border-white/30" />
      </motion.div>

      {/* Interactive 3D Canvas (Orbital Rings & Celestial Particles in front & around core) */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Kinetic Agentic Cosmos (Move cursor to orbit)"
      />

      {/* Floating Telemetry Chips Around the Sculpture (Non-blocking) */}
      {/* Bottom Left: Human Architecture Telemetry */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-4 sm:left-8 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-amber-500/40 backdrop-blur-xl shadow-[0_0_25px_rgba(245,158,11,0.25)] z-20 flex items-center gap-2.5 text-xs font-mono"
      >
        <Brain className="w-3.5 h-3.5 text-amber-400" />
        <div>
          <div className="text-[9px] text-amber-300/80 uppercase">Human Layer</div>
          <span className="text-white font-semibold">100% Senior Architect Led</span>
        </div>
      </motion.div>

      {/* Top Right: Autonomous AI Swarm Telemetry */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-4 right-4 sm:right-8 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-cerulean/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,123,167,0.3)] z-20 flex items-center gap-2 text-xs font-mono"
      >
        <Cpu className="w-3.5 h-3.5 text-cerulean" />
        <div>
          <div className="text-[9px] text-cerulean/80 uppercase">Autonomous AI</div>
          <span className="text-white font-semibold">Claude-3.5 Swarm Core</span>
        </div>
      </motion.div>

      {/* Center Bottom: Synergy Status Pill */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/85 border border-white/20 backdrop-blur-xl shadow-xl text-[10px] font-mono text-white">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>HUMAN + AI SYNERGY: ACTIVE</span>
      </div>
    </div>
  );
}
