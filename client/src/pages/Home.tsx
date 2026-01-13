import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code2, Database, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import heroImage from "@assets/stock_images/modern_minimalist_so_a8208d2d.jpg";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-24 md:pb-32 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card-extreme border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden min-h-[600px] flex items-center"
        >
          {/* Background Image with Dark Wash */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Software Agency Background" 
              className="h-full w-full object-cover"
            />
            {/* Dark "Wash" Gradient for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="p-12 md:p-24 relative z-20 flex flex-col items-start text-left max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
                ✨ Redefining Digital Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
            >
              Building the Future of <br />
              <span className="text-gradient">Digital Architecture</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
            >
              We specialize in crafting high-performance applications using Podio, FlutterFlow, and Retool. Elevate your business efficiency with our custom-tailored digital tools.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 border-0 h-14 px-10 text-base font-semibold rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 text-base font-semibold rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
              <p className="text-muted-foreground text-lg">We leverage the most powerful low-code and no-code platforms to deliver enterprise-grade solutions in record time.</p>
            </div>
            <Link href="/services" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center transition-colors">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/podio">
              <ServiceCard 
                title="Podio Solutions"
                description="Streamline your workflows with custom Podio architecture. We build automated CRM and project management systems."
                icon={<Database size={24} />}
                delay={0.1}
                className="cursor-pointer"
              />
            </Link>
            <Link href="/services/flutterflow">
              <ServiceCard 
                title="FlutterFlow Apps"
                description="Launch beautiful, native mobile applications faster. We design and develop cross-platform apps."
                icon={<Smartphone size={24} />}
                delay={0.2}
                className="cursor-pointer"
              />
            </Link>
            <Link href="/services/retool">
              <ServiceCard 
                title="Retool Development"
                description="Empower your team with custom internal tools. We build robust dashboards and admin panels."
                icon={<Code2 size={24} />}
                delay={0.3}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/2 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just write code; we solve business problems. Our approach combines technical expertise with a deep understanding of operational efficiency.
              </p>
              
              <div className="space-y-4">
                {[
                  "Rapid Development & Deployment",
                  "Enterprise-Grade Security",
                  "Scalable Architecture",
                  "Ongoing Support & Maintenance"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract visual for 'Why Choose Us' */}
              <div className="glass-panel rounded-2xl p-8 border border-white/10 relative z-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="w-32 h-2 bg-white/10 rounded-full" />
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-white/5 rounded-lg" />
                    <div className="flex gap-4">
                      <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                      <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="px-4 py-2 bg-cyan-500/20 rounded-lg text-cyan-400 text-sm font-mono">Status: Optimized</div>
                    <div className="w-24 h-2 bg-green-500/50 rounded-full" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold h-14 px-10 text-lg rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
