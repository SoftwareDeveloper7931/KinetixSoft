import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Careers() {
  const jobs = [
    { title: "Senior FlutterFlow Developer", location: "Remote", type: "Full-time" },
    { title: "Podio Solutions Architect", location: "Remote", type: "Full-time" },
    { title: "Internal Tools Engineer (Retool)", location: "Remote", type: "Contract" },
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
            Join the <span className="text-gradient">Team</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground">We're looking for passionate builders who love low-code/no-code platforms as much as we do.</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 border border-white/10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="glass-panel hover:bg-white/10 text-white border-white/10">Apply Now</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
