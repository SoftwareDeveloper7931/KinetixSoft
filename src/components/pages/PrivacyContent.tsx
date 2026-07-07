"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <section className="pt-36 pb-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontWeight: 500 }}>Privacy Policy</h1>
          <p className="text-sm mb-12" style={{ color: "#8A93A3" }}>Last updated: January 2025</p>
        </motion.div>

        <div className="prose prose-invert prose-sm max-w-none space-y-8" style={{ color: "#8A93A3" }}>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Information We Collect</h2>
            <p>When you contact us through our website, we collect the information you provide: your name, email address, phone number (optional), company name (optional), and the message you send. We also collect basic analytics data (page views, session duration) to understand how our website is used.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>How We Use Your Information</h2>
            <p>We use contact form submissions solely to respond to your enquiry and discuss potential projects. We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information may be stored in our CRM system to facilitate ongoing communication about your project.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Data Storage & Security</h2>
            <p>Contact form submissions are stored in a secured database. We use industry-standard encryption for data in transit (HTTPS) and at rest. We retain enquiry data for up to 2 years or until you request deletion, whichever is sooner.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Third-Party Services</h2>
            <p>We use Brevo (formerly Sendinblue) to send email notifications when you submit our contact form. Your submission data is transmitted to Brevo's servers for this purpose. Brevo's privacy policy is available at brevo.com. We may use Google Analytics or similar tools for website analytics.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Your Rights</h2>
            <p>You have the right to request access to the personal data we hold about you, request correction of inaccurate data, request deletion of your data, and withdraw consent at any time. To exercise any of these rights, contact us at <a href="mailto:info@kinetixsoft.com" className="underline" style={{ color: "#4A5FBD" }}>info@kinetixsoft.com</a>.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Cookies</h2>
            <p>Our website may use essential cookies for functionality and analytics cookies to understand usage patterns. You can control cookie preferences through your browser settings.</p>
          </section>
          <section>
            <h2 style={{ color: "#E9EBEF", fontFamily: "Newsreader, Georgia, serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Contact Us</h2>
            <p>For privacy-related enquiries, contact us at <a href="mailto:info@kinetixsoft.com" className="underline" style={{ color: "#4A5FBD" }}>info@kinetixsoft.com</a> or write to: KinetixSoft, Lahore, Pakistan.</p>
          </section>
        </div>
      </section>
    </div>
  );
}
