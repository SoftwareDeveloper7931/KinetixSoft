"use client";

import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  glowColor: string;
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
  pulsePhase: number;
}

export function MotionCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & smooth target tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    // Scroll depth tracking
    let scrollY = window.scrollY;
    let targetScrollZ = 0;
    let scrollZ = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.35;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      targetScrollZ = (scrollY * 0.4) % 1200;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Palette: Cerulean Blue (#007BA7) and Neon Rose (#FF2D95)
    const cerulean = "#007BA7";
    const ceruleanGlow = "rgba(0, 123, 167, 0.45)";
    const neonRose = "#FF2D95";
    const neonRoseGlow = "rgba(255, 45, 149, 0.45)";

    // Generate 3D point cloud
    const pointCount = width < 768 ? 65 : 125;
    const points: Point3D[] = [];

    const fieldRadiusX = 850;
    const fieldRadiusY = 550;
    const fieldDepthZ = 1200;

    for (let i = 0; i < pointCount; i++) {
      const isRose = i % 3 === 0; // 1 in 3 is Neon Rose, 2 in 3 are Cerulean Blue
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const radius = 250 + Math.random() * 550;

      const x = Math.cos(theta) * Math.cos(phi) * radius;
      const y = Math.sin(phi) * radius * 0.8;
      const z = Math.sin(theta) * Math.cos(phi) * radius + (Math.random() - 0.5) * 600;

      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.2 + 1.2,
        color: isRose ? neonRose : cerulean,
        glowColor: isRose ? neonRoseGlow : ceruleanGlow,
        orbitRadius: Math.sqrt(x * x + z * z),
        orbitAngle: Math.atan2(z, x),
        orbitSpeed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // 3D Perspective Projection Camera
    const fov = 450;
    const cameraZ = 750;

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth camera interpolation
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;
      scrollZ += (targetScrollZ - scrollZ) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cosY = Math.cos(rotY + time * 0.05);
      const sinY = Math.sin(rotY + time * 0.05);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projectedPoints: { px: number; py: number; pz: number; scale: number; pt: Point3D; alpha: number }[] = [];

      // Project each point
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // Orbit drift
        pt.orbitAngle += pt.orbitSpeed;
        const currentBaseX = Math.cos(pt.orbitAngle) * pt.orbitRadius;
        const currentBaseZ = Math.sin(pt.orbitAngle) * pt.orbitRadius;

        // Wave displacement
        const wave = Math.sin(time * 1.5 + pt.pulsePhase) * 15;

        let posX = currentBaseX;
        let posY = pt.baseY + wave;
        let posZ = currentBaseZ - (scrollZ % fieldDepthZ);

        // Wrap around Z bounds
        if (posZ < -cameraZ + 50) posZ += fieldDepthZ;
        if (posZ > fieldDepthZ - cameraZ) posZ -= fieldDepthZ;

        // Rotate Y
        let rx = posX * cosY - posZ * sinY;
        let rz = posX * sinY + posZ * cosY;

        // Rotate X
        let ry = posY * cosX - rz * sinX;
        rz = posY * sinX + rz * cosX;

        // Depth offset
        const totalZ = rz + cameraZ;

        if (totalZ > 30) {
          const scale = fov / totalZ;
          const px = rx * scale + width / 2;
          const py = ry * scale + height / 2;

          // Fade out when too close or too far
          const alpha = Math.min(1, Math.max(0, (totalZ - 40) / 250)) * Math.min(1, Math.max(0, (1400 - totalZ) / 400));

          projectedPoints.push({ px, py, pz: totalZ, scale, pt, alpha });
        }
      }

      // Sort by depth (painter's algorithm)
      projectedPoints.sort((a, b) => b.pz - a.pz);

      // Render 3D connecting filaments
      const maxDist = width < 768 ? 95 : 130;
      ctx.lineWidth = 1;

      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.alpha <= 0.05) continue;

        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          if (p2.alpha <= 0.05) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.35;
            
            // Gradient line between Cerulean and Neon Rose
            const grad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
            grad.addColorStop(0, p1.pt.color === neonRose ? `rgba(255, 45, 149, ${lineAlpha})` : `rgba(0, 123, 167, ${lineAlpha})`);
            grad.addColorStop(1, p2.pt.color === neonRose ? `rgba(255, 45, 149, ${lineAlpha})` : `rgba(0, 123, 167, ${lineAlpha})`);

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Render glowing 3D points
      for (let i = 0; i < projectedPoints.length; i++) {
        const { px, py, scale, pt, alpha } = projectedPoints[i];
        if (alpha <= 0.05) continue;

        const radius = Math.max(1, pt.size * scale * 1.1);

        // Point glow
        const glowRad = radius * 4.5;
        const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, glowRad);
        glowGrad.addColorStop(0, pt.color === neonRose ? `rgba(255, 45, 149, ${alpha * 0.8})` : `rgba(0, 123, 167, ${alpha * 0.8})`);
        glowGrad.addColorStop(0.4, pt.color === neonRose ? `rgba(255, 45, 149, ${alpha * 0.3})` : `rgba(0, 123, 167, ${alpha * 0.3})`);
        glowGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(px, py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Point core
        ctx.fillStyle = pt.color === neonRose ? `rgba(255, 180, 220, ${alpha})` : `rgba(180, 235, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
