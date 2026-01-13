import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code2, Zap, Shield, Globe, Cpu, Layers, CheckCircle } from "lucide-react";

export default function CustomApiIntegration() {
  const features = [
    { title: "REST & GraphQL", description: "Connect to any modern API endpoint with standardized protocols.", icon: <Globe className="w-6 h-6" /> },
    { title: "Webhooks", description: "Real-time data synchronization between your favorite platforms.", icon: <Zap className="w-6 h-6" /> },
    { title: "Auth Protocols", description: "Secure integration using OAuth2, API Keys, or JWT.", icon: <Shield className="w-6 h-6" /> },
    { title: "Data Transformation", description: "Custom mapping and cleaning of data between systems.", icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Custom <span className="text-gradient">API Integrations</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground">We bridge the gap between your applications, ensuring data flows seamlessly across your entire business ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Universal Connectivity</h2>
            <p className="text-muted-foreground text-lg">We specialize in connecting disparate systems to create unified workflows. Whether it's legacy software or modern SaaS, we find a way to make them talk.</p>
            <ul className="space-y-4">
              {["Custom Middleware Development", "Third-party API Orchestration", "Real-time Syncing", "Legacy System Bridging"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 border border-white/10 rounded-2xl relative"
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 justify-between">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/20 text-blue-400"><Layers /></div>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/40 to-green-500/20 relative">
                  <motion.div 
                    animate={{ left: ["0%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  />
                </div>
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/20 text-green-400"><Cpu /></div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-white/60 leading-relaxed">
                <span className="text-purple-400">POST</span> /api/sync <br />
                {'{'} <br />
                &nbsp;&nbsp;<span className="text-green-400">"status"</span>: <span className="text-green-400">"success"</span>, <br />
                &nbsp;&nbsp;<span className="text-green-400">"records_processed"</span>: <span className="text-blue-400">1254</span> <br />
                {'}'}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border border-white/10"
            >
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
