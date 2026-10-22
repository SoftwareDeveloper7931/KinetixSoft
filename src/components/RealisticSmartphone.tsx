"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Battery } from "lucide-react";

interface RealisticSmartphoneProps {
  children: React.ReactNode;
  glowColor?: "cerulean" | "rose" | "duo";
  className?: string;
  tiltAngle?: number;
}

export function RealisticSmartphone({
  children,
  glowColor = "cerulean",
  className = "",
  tiltAngle = 0,
}: RealisticSmartphoneProps) {
  const glowShadow =
    glowColor === "rose"
      ? "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.95),0_0_60px_rgba(255,45,149,0.35)]"
      : glowColor === "duo"
      ? "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.95),-20px_0_50px_rgba(0,123,167,0.3),20px_0_50px_rgba(255,45,149,0.3)]"
      : "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.95),0_0_60px_rgba(0,123,167,0.35)]";

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        transform: tiltAngle ? `perspective(1000px) rotateY(${tiltAngle}deg)` : undefined,
      }}
    >
      {/* HARDWARE BUTTONS (LEFT SIDE: Action Button + Volume Up/Down) */}
      <div className="absolute -left-[3px] top-[95px] w-[3px] h-[24px] rounded-l-[2px] bg-gradient-to-r from-[#4A4E5A] to-[#252830] border-l border-white/20 shadow-sm" />
      <div className="absolute -left-[3px] top-[135px] w-[3px] h-[44px] rounded-l-[2px] bg-gradient-to-r from-[#4A4E5A] to-[#252830] border-l border-white/20 shadow-sm" />
      <div className="absolute -left-[3px] top-[190px] w-[3px] h-[44px] rounded-l-[2px] bg-gradient-to-r from-[#4A4E5A] to-[#252830] border-l border-white/20 shadow-sm" />

      {/* HARDWARE BUTTON (RIGHT SIDE: Power / Side Button) */}
      <div className="absolute -right-[3px] top-[140px] w-[3px] h-[64px] rounded-r-[2px] bg-gradient-to-l from-[#4A4E5A] to-[#252830] border-r border-white/20 shadow-sm" />

      {/* OUTER TITANIUM / AEROSPACE CHASSIS */}
      <div
        className={`w-full max-w-[320px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#3A3D46] via-[#1E2026] to-[#14161C] border-[1.5px] border-white/25 ${glowShadow} relative overflow-hidden backdrop-blur-3xl`}
      >
        {/* Subtle Metallic Bevel Rim Highlight */}
        <div className="absolute inset-[1px] rounded-[48px] border border-white/10 pointer-events-none" />

        {/* TOP SPEAKER EAR-PIECE MICRO APERTURE */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-14 h-[3.5px] rounded-full bg-[#0E1015] border border-white/10 z-40" />

        {/* INNER DISPLAY BEZEL (ULTRA-THIN BLACK BORDER) */}
        <div className="relative rounded-[40px] bg-black overflow-hidden p-[2px] border border-[#262830]">
          
          {/* DYNAMIC ISLAND PILL */}
          <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-40 flex items-center justify-between px-3 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {/* Front Camera Optical Lens with AR Glint */}
            <div className="w-3 h-3 rounded-full bg-[#0a0d14] border border-white/10 flex items-center justify-center relative">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0055ff]/40" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white/50 blur-[0.5px]" />
            </div>
            {/* Ambient / Proximity Sensor */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#08090C] border border-white/5" />
          </div>

          {/* REALISTIC GLASS SURFACE SPECULAR GLARE REFLECTION OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none z-30 opacity-40 mix-blend-screen"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, transparent 60%)",
            }}
          />

          {/* ACTUAL DISPLAY CONTENT */}
          <div className="relative rounded-[38px] bg-[#0A0C12] overflow-hidden min-h-[520px] flex flex-col justify-between text-white">
            
            {/* AUTHENTIC IOS / ANDROID STATUS BAR */}
            <div className="relative z-30 pt-3 pb-2 px-6 flex items-center justify-between text-[11px] font-semibold text-white/90 font-mono">
              <span>9:41</span>
              <div className="flex items-center gap-2 text-white/80">
                {/* 4G/5G Cellular signal bars */}
                <div className="flex items-end gap-[1.5px] h-2.5">
                  <div className="w-[2.5px] h-1 bg-white rounded-xs" />
                  <div className="w-[2.5px] h-1.5 bg-white rounded-xs" />
                  <div className="w-[2.5px] h-2 bg-white rounded-xs" />
                  <div className="w-[2.5px] h-2.5 bg-white rounded-xs" />
                </div>
                <Wifi className="w-3 h-3 text-white" />
                {/* Battery Pill */}
                <div className="flex items-center gap-0.5">
                  <div className="w-5 h-2.5 rounded-[3px] border border-white/80 p-[1px] flex items-center">
                    <div className="w-full h-full bg-white rounded-2xs" />
                  </div>
                  <div className="w-[1px] h-1 bg-white/80 rounded-r-xs" />
                </div>
              </div>
            </div>

            {/* SCREEN BODY (INJECTED CHILDREN APP CONTENT) */}
            <div className="relative z-20 flex-1 flex flex-col">
              {children}
            </div>

            {/* AUTHENTIC BOTTOM HOME INDICATOR BAR */}
            <div className="relative z-30 py-2.5 flex items-center justify-center">
              <div className="w-28 h-1 rounded-full bg-white/70 shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
