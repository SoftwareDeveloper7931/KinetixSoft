import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Code2, Database, Shield, Layout, Zap, Users, CheckCircle, ArrowRight, BarChart3, Lock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RetoolDev() {
  const features = [
    { title: "Rapid Development", description: "Build complex internal interfaces in days by leveraging pre-built components and integrations.", icon: <Zap className="w-6 h-6" /> },
    { title: "Database Connectivity", description: "Connect directly to PostgreSQL, MySQL, MongoDB, and any REST or GraphQL API.", icon: <Database className="w-6 h-6" /> },
    { title: "Custom Logic", description: "Extend functionality with custom JavaScript to handle complex business logic and data processing.", icon: <Code2 className="w-6 h-6" /> },
    { title: "Access Control", description: "Granular permissions and SSO integration to ensure data security and compliance.", icon: <Lock className="w-6 h-6" /> },
    { title: "Pre-built Components", description: "100+ professional components like tables, forms, and charts that work out of the box.", icon: <Layout className="w-6 h-6" /> },
    { title: "Workflow Automation", description: "Build backend jobs and scheduled tasks that run independently of your UI.", icon: <BarChart3 className="w-6 h-6" /> },
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
            Retool <span className="text-gradient">Development</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Empower your operations with custom internal tools. We build admin panels, dashboards, and custom CRM extensions that connect your data and automate your workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Internal Tools, Supercharged</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stop wasting engineering time on internal CRUD apps. Retool allows us to build robust, secure, and beautiful tools for your team in a fraction of the time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Customer Support Tools", "Admin Dashboards", "Inventory Management", "Data Management", "Custom CRM Extensions", "Marketing Panels"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Admin Dashboard</div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-white/5 rounded-lg border border-white/5 p-3">
                    <div className="w-8 h-1 bg-white/10 rounded mb-2" />
                    <div className="w-full h-4 bg-cyan-500/10 rounded" />
                  </div>
                ))}
              </div>
              <div className="h-32 bg-white/5 rounded-lg border border-white/5 p-4 flex items-end gap-2">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-cyan-500/30 rounded-t" />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-white/5 rounded w-full" />
                <div className="h-3 bg-white/5 rounded w-5/6" />
                <div className="h-3 bg-white/5 rounded w-4/6" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Internal Tools?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Stop fighting with spreadsheets. Let's build the tools your team needs to work more efficiently.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full h-12 px-8">
                Request a Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
