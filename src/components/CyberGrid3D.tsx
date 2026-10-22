"use client";

import { motion } from "framer-motion";

export function CyberGrid3D() {
  return (
    <div className="relative w-full h-32 overflow-hidden pointer-events-none select-none">
      {/* 3D Perspective Plane */}
      <div
        className="absolute inset-0 origin-bottom"
        style={{
          transform: "perspective(300px) rotateX(65deg) scale(1.6)",
          backgroundSize: "36px 36px",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 123, 167, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 45, 149, 0.15) 1px, transparent 1px)
          `,
          maskImage: "linear-gradient(to top, black 20%, transparent 80%)",
        }}
      />
      {/* Laser Horizon Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #007BA7 30%, #FF2D95 70%, transparent 100%)",
          boxShadow: "0 0 15px #FF2D95, 0 0 30px #007BA7",
        }}
      />
    </div>
  );
}
