"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Sparkles } from "lucide-react";

export function Hero3DVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = 480;
    canvas.width = size * 2; // Retina resolution
    canvas.height = size * 2;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(2, 2);

    let angleX = 0.3;
    let angleY = 0.4;
    let targetAngleX = 0.3;
    let targetAngleY = 0.4;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = x * 1.5;
      targetAngleX = -y * 1.5;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Generate Icosahedron 3D Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    // Normalize and scale
    const sphereRadius = 110;
    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [(x / len) * sphereRadius, (y / len) * sphereRadius, (z / len) * sphereRadius];
    });

    // Edges between vertices
    const edges: [number, number][] = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i][0] - vertices[j][0];
        const dy = vertices[i][1] - vertices[j][1];
        const dz = vertices[i][2] - vertices[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // Connect neighbors
        if (d < sphereRadius * 1.25) {
          edges.push([i, j]);
        }
      }
    }

    // Orbiting particle satellites
    const satelliteCount = 36;
    const satellites = Array.from({ length: satelliteCount }, (_, i) => ({
      angle: (i / satelliteCount) * Math.PI * 2,
      speed: (i % 2 === 0 ? 0.015 : -0.018) + (Math.random() - 0.5) * 0.005,
      radius: 150 + (i % 3) * 25,
      color: i % 2 === 0 ? "#007BA7" : "#FF2D95",
      size: Math.random() * 2 + 1.5,
      tilt: (i % 2 === 0 ? 0.65 : -0.65),
    }));

    let time = 0;

    const render = () => {
      time += 0.018;
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      // Rotating angles
      const rotY = angleY + time * 0.4;
      const rotX = angleX + Math.sin(time * 0.3) * 0.15;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Core energetic glow
      const corePulse = Math.sin(time * 2) * 15 + 40;
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, corePulse);
      coreGrad.addColorStop(0, "rgba(255, 45, 149, 0.45)");
      coreGrad.addColorStop(0.5, "rgba(0, 123, 167, 0.35)");
      coreGrad.addColorStop(1, "rgba(10, 10, 10, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Transform 3D vertices
      const transformed = vertices.map(([x, y, z]) => {
        // Rotate Y
        let rx = x * cosY - z * sinY;
        let rz = x * sinY + z * cosY;

        // Rotate X
        let ry = y * cosX - rz * sinX;
        rz = y * sinX + rz * cosX;

        const fov = 380;
        const scale = fov / (fov + rz + 180);
        return {
          x: rx * scale + centerX,
          y: ry * scale + centerY,
          z: rz,
          scale,
        };
      });

      // Draw Edges (Cerulean wireframe with Neon Rose pulse)
      ctx.lineWidth = 1.2;
      for (const [i, j] of edges) {
        const v1 = transformed[i];
        const v2 = transformed[j];

        const avgZ = (v1.z + v2.z) / 2;
        const edgeAlpha = Math.max(0.12, Math.min(0.85, (avgZ + sphereRadius) / (sphereRadius * 2)));

        const edgeGrad = ctx.createLinearGradient(v1.x, v1.y, v2.x, v2.y);
        edgeGrad.addColorStop(0, `rgba(0, 123, 167, ${edgeAlpha})`);
        edgeGrad.addColorStop(0.5, `rgba(255, 45, 149, ${edgeAlpha * 0.9})`);
        edgeGrad.addColorStop(1, `rgba(0, 123, 167, ${edgeAlpha})`);

        ctx.strokeStyle = edgeGrad;
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.stroke();
      }

      // Draw Vertices (Glowing cyan/magenta nodes)
      for (const v of transformed) {
        const nodeAlpha = Math.max(0.2, (v.z + sphereRadius) / (sphereRadius * 2));
        const rad = Math.max(1.8, 3.2 * v.scale);

        ctx.fillStyle = `rgba(0, 163, 222, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, rad, 0, Math.PI * 2);
        ctx.fill();

        // Node specular glow
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, rad * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render 3D Orbiting Rings with Particle Satellites
      for (const sat of satellites) {
        sat.angle += sat.speed;

        // Position in local orbit
        const localX = Math.cos(sat.angle) * sat.radius;
        const localZ = Math.sin(sat.angle) * sat.radius;
        const localY = Math.sin(sat.angle) * sat.radius * sat.tilt;

        // Apply world rotation
        let rx = localX * cosY - localZ * sinY;
        let rz = localX * sinY + localZ * cosY;

        let ry = localY * cosX - rz * sinX;
        rz = localY * sinX + rz * cosX;

        const fov = 380;
        const scale = fov / (fov + rz + 180);
        const px = rx * scale + centerX;
        const py = ry * scale + centerY;

        const satAlpha = Math.max(0.15, Math.min(1, (rz + sat.radius) / (sat.radius * 2)));

        // Glow
        const glowRad = sat.size * 3.5 * scale;
        const satGlow = ctx.createRadialGradient(px, py, 0, px, py, glowRad);
        satGlow.addColorStop(0, sat.color === "#FF2D95" ? `rgba(255, 45, 149, ${satAlpha})` : `rgba(0, 123, 167, ${satAlpha})`);
        satGlow.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = satGlow;
        ctx.beginPath();
        ctx.arc(px, py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = sat.color === "#FF2D95" ? `rgba(255, 200, 230, ${satAlpha})` : `rgba(200, 240, 255, ${satAlpha})`;
        ctx.beginPath();
        ctx.arc(px, py, sat.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-[500px] h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* Dynamic 3D Atmospheric Backing */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#007BA7]/20 via-transparent to-[#FF2D95]/20 blur-[70px] pointer-events-none animate-pulse-glow" />

      {/* Primary 3D WebGL / Canvas Centerpiece */}
      <canvas
        ref={canvasRef}
        className="relative z-10 drop-shadow-[0_0_35px_rgba(0,123,167,0.4)]"
      />

      {/* Floating 3D Telemetry Chip 1 - Top Left */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-0 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-lg glass-card border border-[#007BA7]/30 shadow-[0_8px_24px_rgba(0,123,167,0.25)]"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="w-7 h-7 rounded-md bg-[#007BA7]/20 flex items-center justify-center text-[#00A3DE]">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Framework</div>
          <div className="text-xs font-semibold text-white">FlutterFlow & Lovable</div>
        </div>
      </motion.div>

      {/* Floating 3D Telemetry Chip 2 - Bottom Right */}
      <motion.div
        animate={{
          y: [8, -8, 8],
          rotate: [1, -2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-8 right-0 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-lg glass-card border border-[#FF2D95]/30 shadow-[0_8px_24px_rgba(255,45,149,0.25)]"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="w-7 h-7 rounded-md bg-[#FF2D95]/20 flex items-center justify-center text-[#FF5CAE]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Architecture</div>
          <div className="text-xs font-semibold text-white">Enterprise Scalable</div>
        </div>
      </motion.div>

      {/* Floating 3D Telemetry Chip 3 - Center Top */}
      <motion.div
        animate={{
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-12 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#111215]/90 border border-white/10 text-xs shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF2D95] animate-ping" />
        <span className="text-[11px] font-medium text-gray-300">Impeller GPU 120 FPS</span>
      </motion.div>
    </div>
  );
}
