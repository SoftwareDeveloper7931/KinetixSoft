import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code2, Database, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import heroImage from "@assets/software-house-offices-gliwice-1-700x467_1768334823016.jpg";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />
      
      {/* Hero Section with Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Absolute and covering */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Software Agency Background" 
            className="h-full w-full object-cover object-top"
          />
          {/* Dark "Wash" Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B0F19] z-10" />
        </div>

        {/* Floating Navigation on top of hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        <div className="relative z-30 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <div className="flex flex-col items-center text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-sm">
                  ✨ Redefining Digital Excellence
                </span>
              </motion.div>
              
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.2] text-white"
                >
                  The <span className="text-gradient">Low Code Era</span> is Here <br />
                  Building the Future Together
                </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-white/80 mb-8 max-w-xl font-light leading-relaxed"
              >
                We specialize in crafting high-performance applications using Podio, FlutterFlow, and Retool. Elevate your business efficiency with our custom-tailored digital tools.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
              >
                <Link href="/services">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 border-0 h-12 px-8 text-sm font-semibold rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
                    View Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 text-sm font-semibold rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative bg-[#0B0F19]">
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
      <section className="py-24 relative overflow-hidden bg-[#0B0F19]">
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

      {/* CTA Section with Contact Form */}
      <section className="py-24 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Let's discuss your project and find the perfect solution for your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Free Consultation</h4>
                    <p className="text-muted-foreground text-sm">Expert advice tailored to your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-lg mx-auto lg:ml-auto"
            >
              <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Get Started</h3>
                <p className="text-white/60 mb-8 text-center">Send us a message and we'll get back to you shortly.</p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
