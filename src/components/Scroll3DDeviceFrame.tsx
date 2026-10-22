"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Lock, Sparkles, ChevronDown, RotateCcw, Maximize2, ShieldCheck, Zap } from "lucide-react";

interface Scroll3DDeviceFrameProps {
  children: React.ReactNode;
  title?: string;
  badge?: string;
  subtitle?: string;
}

export function Scroll3DDeviceFrame({
  children,
  title = "KinetixSoft Studio Engine",
  badge = "IMPELER 120 FPS NATIVE",
  subtitle = "kinetixsoft.dev/studio/engine",
}: Scroll3DDeviceFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [manualOverride, setManualOverride] = useState<"auto" | "flat" | "tilted">("auto");
  const [currentProgress, setCurrentProgress] = useState(0);

  // Responsive device check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position through this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth physical spring physics for trackpad, wheel, and touch
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    mass: 0.18,
    restDelta: 0.001,
  });

  // Keep track of numeric progress for UI telemetry badges
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setCurrentProgress(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Transform mappings for scroll down & reverse on scroll up
  // Reacts immediately as user begins scrolling down
  // - Starts at 24deg tilt (14deg on mobile), scale 0.88
  // - Reaches 0deg (flat) and scale 1.0 smoothly as user scrolls
  // - When scrolling up, it seamlessly reverses back to tilted 24deg and scaled down!
  const scrollRotateX = useTransform(
    smoothProgress,
    [0.02, 0.36],
    isMobile ? [14, 0] : [24, 0]
  );

  const scrollScale = useTransform(
    smoothProgress,
    [0.02, 0.36],
    isMobile ? [0.93, 1] : [0.88, 1]
  );

  const scrollTranslateY = useTransform(
    smoothProgress,
    [0.02, 0.36],
    [40, 0]
  );

  const screenGlossOpacity = useTransform(
    smoothProgress,
    [0.02, 0.32],
    [0.35, 0]
  );

  const baseOpacity = useTransform(
    smoothProgress,
    [0.02, 0.36],
    [0.95, 0.2]
  );

  const baseRotateX = useTransform(
    smoothProgress,
    [0.02, 0.36],
    [68, 84]
  );

  const baseScaleY = useTransform(
    smoothProgress,
    [0.02, 0.36],
    [1, 0.5]
  );

  const hintOpacity = useTransform(
    smoothProgress,
    [0.02, 0.28],
    [1, 0]
  );

  // Computed angles taking manual override buttons into account
  const activeRotateX = manualOverride === "flat" ? 0 : manualOverride === "tilted" ? (isMobile ? 14 : 24) : scrollRotateX;
  const activeScale = manualOverride === "flat" ? 1 : manualOverride === "tilted" ? (isMobile ? 0.93 : 0.88) : scrollScale;
  const activeTranslateY = manualOverride === "flat" ? 0 : manualOverride === "tilted" ? 40 : scrollTranslateY;

  // Approximate tilt degrees for live UI telemetry
  const calculatedAngle = Math.round(
    manualOverride === "flat"
      ? 0
      : manualOverride === "tilted"
      ? (isMobile ? 14 : 24)
      : Math.max(0, Math.min(24, (1 - Math.min(1, Math.max(0, (currentProgress - 0.02) / 0.34))) * 24))
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full pt-0 pb-10 sm:pb-16 z-20"
      style={{ perspective: "1300px" }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-cerulean/20 via-neon-rose/20 to-cerulean/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Interactive Control & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-5xl mx-auto px-4 mb-6 text-xs font-mono">
        <motion.div
          style={{ opacity: hintOpacity }}
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-jet-surface/90 border border-cerulean/35 text-white/80 shadow-[0_0_20px_rgba(0,123,167,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-cerulean animate-ping" />
          <span className="font-semibold text-cerulean">Scroll Down</span>
          <span className="text-white/40">to flatten & zoom</span>
          <span className="text-white/20">|</span>
          <span className="font-semibold text-neon-rose">Scroll Up</span>
          <span className="text-white/40">to reverse</span>
        </motion.div>

        {/* Live 3D Angle Telemetry & Manual Preview Toggles */}
        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-jet-surface/70 border border-jet-border text-white/60">
            <Sparkles className="w-3.5 h-3.5 text-neon-rose" />
            <span>Tilt:</span>
            <span className="font-bold text-white font-mono">{calculatedAngle}°</span>
          </div>

          <button
            onClick={() => setManualOverride(manualOverride === "flat" ? "auto" : "flat")}
            title="Toggle Flat 0° Mode"
            className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
              manualOverride === "flat"
                ? "bg-cerulean text-white border-cerulean shadow-[0_0_15px_rgba(0,123,167,0.5)]"
                : "bg-jet-surface/80 text-white/60 border-jet-border hover:text-white hover:border-white/20"
            }`}
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline">Flat Mode</span>
          </button>

          <button
            onClick={() => setManualOverride(manualOverride === "tilted" ? "auto" : "tilted")}
            title="Toggle 3D Perspective Tilt"
            className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
              manualOverride === "tilted"
                ? "bg-neon-rose text-white border-neon-rose shadow-[0_0_15px_rgba(255,45,149,0.5)]"
                : "bg-jet-surface/80 text-white/60 border-jet-border hover:text-white hover:border-white/20"
            }`}
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">3D Tilt</span>
          </button>
        </div>
      </div>

      {/* 3D PERSPECTIVE DEVICE STAGE CONTAINER */}
      <motion.div
        style={{
          rotateX: activeRotateX,
          scale: activeScale,
          y: activeTranslateY,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto max-w-6xl w-full transition-shadow duration-500"
      >
        {/* LAPTOP DISPLAY LID (CHASSIS) */}
        <div
          className="relative rounded-[22px] sm:rounded-[32px] p-2.5 sm:p-4 bg-[#0D0E13] border-2 border-white/10 shadow-[0_30px_100px_rgba(0,123,167,0.4),0_15px_50px_rgba(255,45,149,0.3)] transition-all overflow-hidden"
          style={{
            boxShadow:
              "0 35px 90px -15px rgba(0, 123, 167, 0.45), 0 20px 45px -10px rgba(255, 45, 149, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Subtle Titanium Edge Shimmer */}
          <div className="absolute inset-0 rounded-[22px] sm:rounded-[32px] pointer-events-none border border-white/5" />

          {/* Top Notch & Camera Module */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#08090C] border border-white/10 shadow-inner">
            {/* Camera Lens */}
            <div className="w-2 h-2 rounded-full bg-[#181A22] border border-white/20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-cerulean/80" />
            </div>
            {/* Active Green / Cerulean Privacy LED */}
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
            {/* Stereo Mic Pinhole */}
            <div className="w-1 h-1 rounded-full bg-black/60" />
          </div>

          {/* Browser / Studio Window Frame Bar */}
          <div className="relative flex items-center justify-between px-3 sm:px-5 py-2.5 mb-2 rounded-t-xl bg-[#14151C]/90 border border-white/5 backdrop-blur-md">
            {/* Cyber Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF2D95] shadow-[0_0_8px_rgba(255,45,149,0.6)] cursor-pointer hover:scale-110 transition-transform" />
              <span className="w-3 h-3 rounded-full bg-[#007BA7] shadow-[0_0_8px_rgba(0,123,167,0.6)] cursor-pointer hover:scale-110 transition-transform" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)] cursor-pointer hover:scale-110 transition-transform" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] sm:text-xs font-mono text-white/70 max-w-sm w-full mx-2 sm:mx-6 justify-center">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{subtitle}</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cerulean animate-ping ml-1" />
            </div>

            {/* Right Status Badge */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-cerulean uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          </div>

          {/* Inner OLED Display Glass */}
          <div className="relative rounded-2xl overflow-hidden bg-jet/90 border border-jet-border p-2 sm:p-5 md:p-6">
            {/* Dynamic 3D Glare Reflection (Disappears when flat) */}
            <motion.div
              style={{ opacity: screenGlossOpacity }}
              className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent"
            />

            {/* Content Slot: The interactive Agency 3D Stage */}
            <div className="relative z-20">
              {children}
            </div>
          </div>
        </div>

        {/* 3D LAPTOP HINGE & LOWER KEYBOARD BASE SHELF */}
        <motion.div
          style={{
            opacity: baseOpacity,
            rotateX: baseRotateX,
            scaleY: baseScaleY,
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          }}
          className="relative mx-auto -mt-2 w-[94%] sm:w-[96%] h-20 sm:h-28 rounded-b-[24px] sm:rounded-b-[36px] bg-gradient-to-b from-[#181A22] via-[#0F1015] to-[#08090C] border-x border-b border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col items-center justify-start pt-2 pointer-events-none"
        >
          {/* Metallic Hinge Recess */}
          <div className="w-40 sm:w-60 h-2 rounded-full bg-[#2A2C38] border border-white/10 shadow-inner mb-3" />

          {/* Keyboard Deck Silhouette */}
          <div className="w-[88%] h-5 sm:h-8 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center">
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 sm:w-6 h-2 sm:h-3 rounded-[3px] bg-white/[0.04] border border-white/5"
                />
              ))}
            </div>
          </div>

          {/* Glowing Trackpad Silhouette */}
          <div className="w-24 sm:w-36 h-4 sm:h-7 mt-2 rounded-md bg-black/70 border border-cerulean/30 shadow-[0_0_12px_rgba(0,123,167,0.25)]" />

          {/* Thumb Notch Cutout */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-2 rounded-t-md bg-white/10" />
        </motion.div>
      </motion.div>

      {/* Floating Bottom Prompt */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="mt-8 flex items-center justify-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jet-surface/60 border border-white/10 text-white/50 text-xs font-mono">
          <ChevronDown className="w-3.5 h-3.5 text-cerulean animate-bounce" />
          <span>Keep scrolling to explore full studio stack & build calculator</span>
        </div>
      </motion.div>
    </div>
  );
}
