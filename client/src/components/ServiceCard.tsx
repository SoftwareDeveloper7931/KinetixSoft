import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-8 group hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <Link href="/services">
          <button className="flex items-center text-sm font-semibold text-white/70 hover:text-white group-hover:translate-x-1 transition-all">
            Learn more <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
