"use client";

import { MotionCanvas3D } from "./MotionCanvas3D";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 3D Interactive Kinetic Particle & Mesh Canvas */}
      <MotionCanvas3D />

      {/* Cyber Grid Base Horizon */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none cyber-grid"
        style={{ maskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)" }}
      />

      {/* Atmospheric Ambient Lighting: Cerulean Blue & Neon Rose */}
      <div
        className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 123, 167, 0.22) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255, 45, 149, 0.16) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] w-[650px] h-[650px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 123, 167, 0.18) 0%, transparent 70%)" }}
      />
    </div>
  );
}
