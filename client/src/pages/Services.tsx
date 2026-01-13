import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Database, Smartphone, Code2, Layers, Cpu, Globe } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "podio",
      title: "Podio Solutions",
      icon: <Database className="w-8 h-8" />,
      description: "We architect complex Podio environments that automate your business processes. From real-time integrations to custom calculation fields, we turn Podio into a powerhouse.",
      features: ["Workflow Automation (Globiflow)", "Custom App Architecture", "External API Integrations", "Data Migration"]
    },
    {
      id: "flutterflow",
      title: "FlutterFlow Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Get to market faster with high-quality native mobile apps. We use FlutterFlow to build visually stunning, performant applications for iOS and Android.",
      features: ["Cross-Platform Deployment", "Custom Actions & Widgets", "Firebase Integration", "Complex State Management"]
    },
    {
      id: "retool",
      title: "Retool Development",
      icon: <Code2 className="w-8 h-8" />,
      description: "Build internal tools 10x faster. We create custom admin panels, dashboards, and operational tools that connect directly to your databases and APIs.",
      features: ["Admin Dashboards", "CRUD Interfaces", "Data Visualization", "SQL & REST API Integration"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Specialized development for modern businesses. We focus on platforms that deliver maximum value with minimum time-to-market.
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href={`/services/${service.id}`}>
                  <Button className="glass-panel hover:bg-white/10 border-white/10 text-white mr-4">
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                    Get Started
                  </Button>
                </Link>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl group">
                   {/* Placeholder visual for service */}
                   <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 z-10" />
                   {/* Abstract tech pattern */}
                   <div className={`absolute inset-0 bg-[url('/grid.svg')] opacity-20 ${index % 2 === 0 ? 'rotate-0' : 'rotate-180'}`} />
                   
                   <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="glass-panel p-6 rounded-xl border border-white/10 max-w-xs w-full transform group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-3">
                          <div className="h-2 bg-white/10 rounded-full w-3/4" />
                          <div className="h-2 bg-white/10 rounded-full w-full" />
                          <div className="h-2 bg-white/10 rounded-full w-5/6" />
                          <div className="h-2 bg-white/10 rounded-full w-2/3" />
                        </div>
                        <div className="mt-6 flex justify-end">
                           <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Deploying...</div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
