"use client";

import { MotionCanvas3D } from "./MotionCanvas3D";

export function BackgroundElements() {
  return (
    <>
      {/* Deep Background Ambience & Cyber Grid (Behind Content) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cyber Grid Base Horizon */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none cyber-grid"
          style={{ maskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)" }}
        />

        {/* Atmospheric Ambient Lighting: Cerulean Blue & Neon Rose */}
        <div
          className="absolute top-[-15%] left-[10%] w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0, 123, 167, 0.28) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[40%] right-[-5%] w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255, 45, 149, 0.22) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[25%] w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0, 123, 167, 0.25) 0%, transparent 70%)" }}
        />
      </div>

      {/* FOREGROUND 3D KINETIC MESH & PARTICLES (IN FRONT OF CONTENT) */}
      <MotionCanvas3D className="z-30" />
    </>
  );
}
