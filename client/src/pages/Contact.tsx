import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to start your project? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl border-l-4 border-cyan-500">
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400">hello@nestofdev.com</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-purple-400">+1 (555) 987-6543</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
