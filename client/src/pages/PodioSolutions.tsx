import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Database, Smartphone, Code2, CheckCircle, Zap, Shield, Workflow, Cpu, Layers } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PodioSolutions() {
  const features = [
    { title: "Custom Workflows", description: "Tailored automation with Globiflow that matches your business logic exactly.", icon: <Workflow className="w-6 h-6" /> },
    { title: "CRM Capabilities", description: "Build a customer relationship management system that your team actually enjoys using.", icon: <Database className="w-6 h-6" /> },
    { title: "Project Management", description: "Keep track of every task, deadline, and deliverable in one centralized location.", icon: <CheckCircle className="w-6 h-6" /> },
    { title: "Reporting & Analytics", description: "Visualize your data with custom dashboards and automated reports.", icon: <Zap className="w-6 h-6" /> },
    { title: "Mobile Access", description: "Access your business data and workflows from anywhere with the Podio mobile app.", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Integrations", description: "Connect Podio to your existing tech stack via robust API integrations.", icon: <Layers className="w-6 h-6" /> },
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
            Podio <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Transform your business operations with a custom-architected Podio environment. We turn messy spreadsheets and scattered communications into streamlined, automated workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Why Podio?</h2>
            <p className="text-muted-foreground text-lg">
              Podio is more than just a tool; it's a flexible platform that allows us to build exactly what your business needs. No more forcing your processes into rigid software.
            </p>
            <ul className="space-y-4">
              {["Eliminate repetitive manual tasks", "Centralize team communication", "Get real-time visibility into performance", "Scale your operations with ease"].map((item, i) => (
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
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-white/40 font-mono">workflow_automation.js</div>
              </div>
              <div className="space-y-3 font-mono text-sm text-cyan-300/80">
                <div><span className="text-purple-400">if</span> (newLead.status === <span className="text-green-400">'interested'</span>) {'{'}</div>
                <div className="pl-4">createTask(<span className="text-green-400">'Follow up'</span>);</div>
                <div className="pl-4">sendEmail(newLead.email);</div>
                <div>{'}'}</div>
              </div>
              <div className="pt-4 flex justify-center">
                 <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-cyan-500/20 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-white/10 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-white/10 rounded col-span-2"></div>
                          <div className="h-2 bg-white/10 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-xl border border-white/10 hover-elevate"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="py-20 glass-panel rounded-3xl border border-white/10 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Workflow?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our consultation starts with a deep dive into your current processes to find the perfect automation opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full h-12 px-8">
                Request a Podio Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
