"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cerulean" | "rose" | "neon-rose" | "dual";
  maxTilt?: number;
  scaleOnHover?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function Card3D({
  children,
  className = "",
  glowColor = "cerulean",
  maxTilt = 12,
  scaleOnHover = 1.02,
  style = {},
  onClick,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  // Border & Glare color gradients
  let glareGradient =
    "radial-gradient(circle at 50% 50%, rgba(0, 123, 167, 0.25), transparent 70%)";
  let borderHoverStyle = "rgba(0, 123, 167, 0.45)";

  if (glowColor === "rose" || glowColor === "neon-rose") {
    glareGradient = `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 45, 149, 0.35), transparent 60%)`;
    borderHoverStyle = "rgba(255, 45, 149, 0.5)";
  } else if (glowColor === "dual") {
    glareGradient = `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 123, 167, 0.25) 0%, rgba(255, 45, 149, 0.2) 40%, transparent 70%)`;
    borderHoverStyle = "rgba(0, 123, 167, 0.5)";
  } else {
    glareGradient = `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 123, 167, 0.35), transparent 60%)`;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      whileHover={{ scale: scaleOnHover }}
      className={`relative preserve-3d cursor-pointer rounded-xl overflow-hidden transition-colors ${className}`}
      style={{
        transformStyle: "preserve-3d",
        background: "rgba(17, 18, 21, 0.78)",
        border: `1px solid ${glarePos.opacity > 0 ? borderHoverStyle : "rgba(255, 255, 255, 0.08)"}`,
        backdropFilter: "blur(20px)",
        ...style,
      }}
    >
      {/* Dynamic 3D Glare Light */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
        style={{
          background: glareGradient,
          opacity: glarePos.opacity,
          mixBlendMode: "screen",
        }}
      />

      {/* Card Content with 3D Pop */}
      <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
