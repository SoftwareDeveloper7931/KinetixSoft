"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface Capability {
  id: string;
  label: string;
  tag: string;
  icon: React.ReactNode;
  glow: "cerulean" | "neon-rose";
  headline: string;
  subheadline: string;
  features: string[];
  metrics: { label: string; value: string }[];
  codePreview: {
    filename: string;
    lang: string;
    lines: string[];
  };
  link: string;
  linkText: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "mobile",
    label: "Mobile Apps",
    tag: "iOS & Android Impeller GPU",
    icon: <Smartphone className="w-4 h-4" />,
    glow: "cerulean",
    headline: "High-Performance Native Mobile Apps",
    subheadline: "Compiled directly to Google Flutter (Dart) with 60-120 FPS Impeller GPU rendering, offline caching, biometrics, and native Apple & Google Pay.",
    features: [
      "App Store & Google Play Ready",
      "Firebase / Supabase Realtime Sync",
      "Native Biometrics & Apple Pay",
      "Private API Serverless Proxies",
    ],
    metrics: [
      { label: "Rendering", value: "120 FPS" },
      { label: "Codebase", value: "Cross-Platform" },
      { label: "Architecture", value: "Zero-Leak" },
    ],
    codePreview: {
      filename: "payment_sheet_action.dart",
      lang: "dart",
      lines: [
        "// Native Apple / Google Pay Integration",
        "final payment = await StripeService.initPaymentSheet(",
        "  clientSecret: cloudFunction.clientSecret,",
        "  merchantDisplayName: 'KinetixSoft App',",
        "  style: ThemeMode.dark,",
        ");",
        "await Stripe.instance.presentPaymentSheet();",
      ],
    },
    link: "/flutterflow",
    linkText: "Explore Mobile Engineering",
  },
  {
    id: "web",
    label: "Web & SaaS",
    tag: "Bubble, Next.js & Supabase",
    icon: <Globe className="w-4 h-4" />,
    glow: "neon-rose",
    headline: "Scalable Full-Stack Web & SaaS Portals",
    subheadline: "Production no-code & full-stack web applications with complex relational schemas, multi-tenant RBAC, recurring Stripe billing, and high-density dashboards.",
    features: [
      "Multi-Tenant SaaS Architecture",
      "Stripe Recurring Subscriptions",
      "Custom Postgres & Supabase Rules",
      "Enterprise SOC-2 / HIPAA Compliant",
    ],
    metrics: [
      { label: "Turnaround", value: "4-8 Weeks" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Billing", value: "Stripe Connect" },
    ],
    codePreview: {
      filename: "multi_tenant_rls.sql",
      lang: "sql",
      lines: [
        "-- Row-Level Security for Multi-Tenant SaaS",
        "CREATE POLICY tenant_isolation ON user_accounts",
        "FOR ALL USING (",
        "  tenant_id = current_setting('app.current_tenant_id')",
        "  AND auth.jwt() ->> 'role' IN ('admin', 'member')",
        ");",
      ],
    },
    link: "/bubble",
    linkText: "Explore Web & SaaS Solutions",
  },
  {
    id: "crm",
    label: "Custom CRMs & Ops",
    tag: "Podio, GlobiFlow & Retool",
    icon: <Database className="w-4 h-4" />,
    glow: "cerulean",
    headline: "Bespoke CRMs & Automated Workflow Engines",
    subheadline: "Tailored operational workspaces that replace 10 disjointed SaaS tools. Automated lead routing, GlobiFlow rules, contract generation, and multi-team pipeline sync.",
    features: [
      "Custom Podio & GlobiFlow Workspaces",
      "Automated SMS & Email Triggers",
      "Retool High-Density Operations",
      "Data Migration & Two-Way Webhooks",
    ],
    metrics: [
      { label: "Automation", value: "GlobiFlow" },
      { label: "Latency", value: "O(1) Realtime" },
      { label: "SaaS Replaced", value: "10+ Tools" },
    ],
    codePreview: {
      filename: "globiflow_pipeline.json",
      lang: "json",
      lines: [
        "// Automated Lead Intake & Routing",
        "{",
        '  "trigger": "item.created_or_updated",',
        '  "condition": "status == \'Qualified\'",',
        '  "action": "assign_rep_round_robin",',
        '  "notify": ["sms_alert", "slack_channel_ops"]',
        "}",
      ],
    },
    link: "/podio",
    linkText: "Explore CRM Systems",
  },
  {
    id: "custom",
    label: "Custom Software & AI",
    tag: "Python, Replit, APIs & Agents",
    icon: <Cpu className="w-4 h-4" />,
    glow: "neon-rose",
    headline: "Autonomous AI Agents & Custom Microservices",
    subheadline: "Dedicated backend microservices, autonomous LLM agent pipelines, custom REST/GraphQL APIs, and background job queues built in Python, Node, and FastAPI.",
    features: [
      "OpenAI & Claude LLM Agent Workflows",
      "Custom REST & Webhook Microservices",
      "FastAPI & Node.js Production Backends",
      "High-Throughput Asynchronous Workers",
    ],
    metrics: [
      { label: "Model", value: "GPT-4o / Claude" },
      { label: "API Speed", value: "<45ms Avg" },
      { label: "Architecture", value: "Stateless" },
    ],
    codePreview: {
      filename: "agent_orchestrator.py",
      lang: "python",
      lines: [
        "# Async AI Agent Workflow Engine",
        "@app.post('/api/v1/agent/orchestrate')",
        "async def run_agent(task: UserTask):",
        "    plan = await planner.synthesize(task.query)",
        "    result = await tool_executor.dispatch(plan)",
        "    return {'status': 'completed', 'data': result}",
      ],
    },
    link: "/replit-platform",
    linkText: "Explore Custom AI Software",
  },
];

export function Agency3DStage() {
  const [activeTab, setActiveTab] = useState<string>("mobile");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeCapability = CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];

  // 3D Canvas rendering rotating gyroscope core
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = 520;
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(2, 2);

    let angleX = 0.25;
    let angleY = 0.35;
    let targetAngleX = 0.25;
    let targetAngleY = 0.35;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = x * 1.8;
      targetAngleX = -y * 1.8;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // 3D Polyhedral sphere vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];

    const sphereRadius = 115;
    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [(x / len) * sphereRadius, (y / len) * sphereRadius, (z / len) * sphereRadius];
    });

    const edges: [number, number][] = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i][0] - vertices[j][0];
        const dy = vertices[i][1] - vertices[j][1];
        const dz = vertices[i][2] - vertices[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < sphereRadius * 1.25) {
          edges.push([i, j]);
        }
      }
    }

    // Particles orbiting
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 2,
      speed: (i % 2 === 0 ? 0.016 : -0.019) + (Math.random() - 0.5) * 0.006,
      radius: 145 + (i % 3) * 28,
      isRose: i % 2 !== 0,
      size: Math.random() * 2.2 + 1.2,
      tilt: i % 2 === 0 ? 0.7 : -0.7,
    }));

    let time = 0;

    const render = () => {
      time += 0.018;
      angleX += (targetAngleX - angleX) * 0.06;
      angleY += (targetAngleY - angleY) * 0.06;

      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      const rotY = angleY + time * 0.45;
      const rotX = angleX + Math.sin(time * 0.35) * 0.2;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const project = (x: number, y: number, z: number) => {
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;
        const cameraDistance = 450;
        const scale = cameraDistance / (cameraDistance + z2);
        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          z: z2,
          scale,
        };
      };

      // Outer Cerulean Ring
      ctx.save();
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.08) {
        const rx = Math.cos(a) * 165;
        const rz = Math.sin(a) * 165;
        const ry = Math.sin(a * 2 + time) * 12;
        const p = project(rx, ry, rz);
        if (a === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 123, 167, 0.55)";
      ctx.lineWidth = 1.6;
      ctx.shadowColor = "#007BA7";
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.restore();

      // Inner Neon Rose Orthogonal Ring
      ctx.save();
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.08) {
        const ry = Math.cos(a) * 150;
        const rz = Math.sin(a) * 150;
        const rx = Math.cos(a * 2 - time) * 12;
        const p = project(rx, ry, rz);
        if (a === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(255, 45, 149, 0.6)";
      ctx.lineWidth = 1.6;
      ctx.shadowColor = "#FF2D95";
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.restore();

      // Render wireframe edges
      const projected = vertices.map(([x, y, z]) => project(x, y, z));
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, Math.min(0.85, (avgZ + sphereRadius) / (sphereRadius * 2)));

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = i % 2 === 0
          ? `rgba(0, 163, 222, ${alpha * 0.75})`
          : `rgba(255, 92, 174, ${alpha * 0.75})`;
        ctx.lineWidth = alpha * 1.5;
        ctx.stroke();
        ctx.restore();
      });

      // Render vertices
      projected.forEach((p, idx) => {
        const isRose = idx % 2 === 1;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.scale * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = isRose ? "#FF2D95" : "#00A3DE";
        ctx.shadowColor = isRose ? "#FF2D95" : "#007BA7";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      // Render orbiting satellites
      particles.forEach((s) => {
        s.angle += s.speed;
        const sx = Math.cos(s.angle) * s.radius;
        const sz = Math.sin(s.angle) * s.radius;
        const sy = Math.sin(s.angle * 2 + time) * 35 * s.tilt;
        const sp = project(sx, sy, sz);

        ctx.save();
        ctx.beginPath();
        ctx.arc(sp.px, sp.py, s.size * sp.scale, 0, Math.PI * 2);
        ctx.fillStyle = s.isRose ? "#FF5CAE" : "#67E8F9";
        ctx.shadowColor = s.isRose ? "#FF2D95" : "#007BA7";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

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
    <div ref={containerRef} className="w-full relative z-20">
      
      {/* CAPABILITY SELECTOR TABS */}
      <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {CAPABILITIES.map((cap) => {
          const isActive = activeTab === cap.id;
          return (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? cap.glow === "neon-rose"
                    ? "bg-[#FF2D95] text-white shadow-[0_0_25px_rgba(255,45,149,0.5)] border border-[#FF5CAE]"
                    : "bg-[#007BA7] text-white shadow-[0_0_25px_rgba(0,123,167,0.5)] border border-[#00A3DE]"
                  : "bg-jet-surface/90 text-white/70 hover:text-white border border-jet-border hover:border-white/20"
              }`}
            >
              {cap.icon}
              <span>{cap.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* 3D INTERACTIVE STAGE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 md:p-10 bg-jet-surface/80 border border-jet-border backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        
        {/* Atmospheric Glow in Jet Black */}
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 ${
            activeCapability.glow === "neon-rose" ? "bg-neon-rose/15" : "bg-cerulean/15"
          }`}
        />
        <div
          className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 ${
            activeCapability.glow === "neon-rose" ? "bg-cerulean/10" : "bg-neon-rose/10"
          }`}
        />

        {/* Left Column: Active Capability Details */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapability.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border bg-white/5"
                style={{
                  color: activeCapability.glow === "neon-rose" ? "#FF5CAE" : "#00A3DE",
                  borderColor: activeCapability.glow === "neon-rose" ? "rgba(255,45,149,0.35)" : "rgba(0,123,167,0.35)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeCapability.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                {activeCapability.headline}
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                {activeCapability.subheadline}
              </p>

              {/* Key Features Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {activeCapability.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/85">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        activeCapability.glow === "neon-rose" ? "text-neon-rose" : "text-cerulean"
                      }`}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Live Architectural Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-jet border border-jet-border mb-6">
                {activeCapability.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-lg sm:text-xl font-bold font-mono"
                      style={{
                        color: activeCapability.glow === "neon-rose" ? "#FF5CAE" : "#00A3DE",
                      }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono text-white/50 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href={activeCapability.link} className="group inline-flex">
                  <button
                    className={`${
                      activeCapability.glow === "neon-rose" ? "btn-neon-rose" : "btn-cerulean"
                    } group`}
                  >
                    <span>{activeCapability.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </button>
                </Link>

                <Link href="/contact" className="inline-flex">
                  <button className="btn-ghost-cyber">
                    <span>Scope This Build</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: 3D Holographic Core & Code Terminal Stream */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Background Rotating 3D Gyroscope Canvas */}
          <div className="relative flex items-center justify-center w-full">
            <canvas
              ref={canvasRef}
              className="relative z-10 drop-shadow-[0_0_40px_rgba(0,123,167,0.45)] max-w-full"
            />

            {/* Orbiting Telemetry Chip 1 - Top Right */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-0 sm:right-4 z-20 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl glass-card border border-cerulean/30 text-xs shadow-lg"
            >
              <Activity className="w-3.5 h-3.5 text-cerulean animate-pulse" />
              <div>
                <div className="text-[9px] font-mono uppercase text-white/50">Pipeline</div>
                <div className="text-[11px] font-bold text-white">Active Sprints</div>
              </div>
            </motion.div>

            {/* Orbiting Telemetry Chip 2 - Bottom Left */}
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [1, -1, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-2 left-0 sm:left-4 z-20 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl glass-card border border-neon-rose/30 text-xs shadow-lg"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-neon-rose" />
              <div>
                <div className="text-[9px] font-mono uppercase text-white/50">Security</div>
                <div className="text-[11px] font-bold text-white">Zero-Leak Guard</div>
              </div>
            </motion.div>
          </div>

          {/* Holographic Code Snippet Overlay */}
          <div className="w-full mt-4 rounded-xl bg-jet/90 border border-jet-border p-3.5 shadow-xl relative z-20">
            <div className="flex items-center justify-between border-b border-jet-border pb-2 mb-2 text-xs font-mono text-white/50">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cerulean" />
                <span>{activeCapability.codePreview.filename}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-400">Verified Syntax</span>
            </div>
            <pre className="font-mono text-xs text-white/80 overflow-x-auto leading-relaxed space-y-0.5">
              {activeCapability.codePreview.lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-white/20 select-none w-6 shrink-0">{i + 1}</span>
                  <span className={line.startsWith("//") || line.startsWith("--") || line.startsWith("#") ? "text-white/40 italic" : "text-white/90"}>
                    {line}
                  </span>
                </div>
              ))}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
}
