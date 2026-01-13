import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Smartphone, Zap, Shield, Code2, Rocket, Layout, CheckCircle, Globe, Cpu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FlutterFlowDev() {
  const features = [
    { title: "Visual Development", description: "Build complex UIs visually while maintaining full control over the underlying code.", icon: <Layout className="w-6 h-6" /> },
    { title: "Cross-Platform", description: "Develop once and deploy native apps for both iOS and Android from a single codebase.", icon: <Globe className="w-6 h-6" /> },
    { title: "Firebase Integration", description: "Robust backend connectivity with real-time data, authentication, and cloud storage.", icon: <Shield className="w-6 h-6" /> },
    { title: "Custom Code Support", description: "Need something unique? We inject custom Dart code and external APIs seamlessly.", icon: <Code2 className="w-6 h-6" /> },
    { title: "Real-time Preview", description: "Iterate faster with instant feedback and live previews during the development process.", icon: <Zap className="w-6 h-6" /> },
    { title: "Fast Deployment", description: "Reduce your time-to-market significantly with our optimized development workflow.", icon: <Rocket className="w-6 h-6" /> },
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
            FlutterFlow <span className="text-gradient">Development</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We build high-performance, native-quality mobile applications using FlutterFlow. Get the best of both worlds: the speed of low-code and the power of Flutter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="glass-card w-[240px] h-[480px] border border-white/20 rounded-[40px] p-4 flex flex-col shadow-2xl relative z-10 transform -rotate-6">
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6" />
              <div className="space-y-4">
                <div className="h-4 w-2/3 bg-cyan-500/20 rounded" />
                <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl" />
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded" />
                  <div className="h-2 bg-white/10 rounded w-5/6" />
                </div>
                <div className="mt-auto h-10 bg-cyan-500/30 rounded-xl flex items-center justify-center text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Submit Form</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Native Performance, Record Speed</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Using FlutterFlow, we deliver pixel-perfect designs and native performance for both iOS and Android. Our process ensures your app is scalable and maintainable.
            </p>
            <ul className="space-y-4">
              {["Custom visual design & UX", "Firebase or Supabase backend", "Push notifications & Auth", "Apple & Play Store deployment"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your App?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's turn your idea into a stunning native mobile application in weeks, not months.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full h-12 px-8">
                Start Your App Project
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
