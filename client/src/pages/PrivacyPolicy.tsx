import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: January 13, 2026</p>
            <section>
              <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
              <p>We collect information you provide directly to us through our contact forms, including name, email, and project details.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
              <p>We use the information to respond to your inquiries, provide our services, and improve our website experience.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share data with service providers like Brevo and Podio to process your requests.</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
