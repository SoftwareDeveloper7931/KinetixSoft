import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Who <span className="text-gradient">Nest of Dev</span> Is
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We are a team of passionate developers, designers, and strategists dedicated to helping businesses grow through innovative technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-card rounded-2xl p-8"
           >
             <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
             <p className="text-muted-foreground leading-relaxed">
               Our mission is to democratize access to enterprise-grade software. We believe that powerful tools shouldn't be reserved for Fortune 500 companies. By leveraging modern low-code platforms alongside traditional development, we deliver superior solutions at a fraction of the traditional cost and time.
             </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-card rounded-2xl p-8"
           >
             <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
             <p className="text-muted-foreground leading-relaxed">
               We envision a world where technology is an enabler, not a bottleneck. We strive to be the bridge between complex technical possibilities and intuitive, user-friendly business applications.
             </p>
           </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", icon: <Zap />, desc: "We constantly explore new technologies to give our clients a competitive edge." },
              { title: "Transparency", icon: <Users />, desc: "We believe in open communication and honest partnerships with our clients." },
              { title: "Excellence", icon: <Target />, desc: "We don't settle for 'good enough'. We aim for perfection in every pixel and line of code." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
