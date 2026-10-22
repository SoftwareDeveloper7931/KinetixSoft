"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Sparkles } from "lucide-react";

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

    // Generate 3D particle sculpture (Spherical core + Orbital celestial rings like Pin 1)
    const particleCount = 850;
    const particles: Particle3D[] = [];

    const cerulean = "#00A3DE";
    const neonRose = "#FF2D95";
    const white = "#FFFFFF";

    for (let i = 0; i < particleCount; i++) {
      const isRing = i > particleCount * 0.6;
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
        const ringTilt = 0.5; // Angled celestial orbit
        x = Math.cos(angle) * ringRadius;
        y = Math.sin(angle) * ringRadius * ringTilt + (Math.random() - 0.5) * 25;
        z = Math.sin(angle) * ringRadius * (1 - ringTilt * 0.5);
      }

      const isRose = i % 3 === 0;
      const isWhite = i % 7 === 0;

      particles.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        size: isWhite ? 2.5 : Math.random() * 2 + 1,
        color: isWhite ? white : isRose ? neonRose : cerulean,
        glow: isRose ? "rgba(255, 45, 149, 0.6)" : "rgba(0, 163, 222, 0.6)",
        speed: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      rotY += (targetRotY - rotY) * 0.05 + 0.004; // Smooth continuous rotation
      rotX += (targetRotX - rotX) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const fov = 380;
      const cx = width / 2;
      const cy = height / 2;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Sort particles by depth for correct 3D perspective
      const projected = particles.map((p) => {
        const pulse = Math.sin(time * p.speed * 8 + p.phase) * 6;
        const curX = p.baseX + pulse;
        const curY = p.baseY + pulse * 0.5;
        const curZ = p.baseZ;

        // Y-axis rotation
        const x1 = curX * cosY - curZ * sinY;
        const z1 = curZ * cosY + curX * sinY;

        // X-axis rotation
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

      projected.sort((a, b) => a.z - b.z);

      // Draw faint constellation filaments between close core particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i += 6) {
        const p1 = projected[i];
        for (let j = i + 1; j < Math.min(i + 12, projected.length); j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 42) {
            ctx.strokeStyle = `rgba(0, 163, 222, ${(1 - dist / 42) * 0.22 * p1.alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D particle nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = p.size > 2 ? 8 : 4;

        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(p.size, 0.8), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none">
      {/* Ambient background glow behind particle sculpture */}
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-cerulean/20 blur-[90px] pointer-events-none" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-neon-rose/20 blur-[100px] pointer-events-none" />

      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Kinetic Agentic Cosmos (Move cursor to orbit)"
      />

      {/* Floating Telemetry Chips Around the Sculpture (Non-blocking) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-4 sm:left-8 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-cerulean/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,123,167,0.3)] z-20 flex items-center gap-2.5 text-xs font-mono"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="text-white font-semibold">16 Agent Nodes Active</span>
        <span className="text-white/30">|</span>
        <span className="text-cerulean font-medium">24ms Latency</span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-4 right-4 sm:right-8 px-3.5 py-2 rounded-xl bg-jet-surface/85 border border-neon-rose/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,45,149,0.3)] z-20 flex items-center gap-2 text-xs font-mono"
      >
        <Cpu className="w-3.5 h-3.5 text-neon-rose" />
        <span className="text-white font-semibold">Autonomous Swarm Core</span>
      </motion.div>
    </div>
  );
}
