import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 border border-white/10 rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: January 13, 2026</p>
            <section>
              <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
              <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">3. Disclaimer</h2>
              <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
