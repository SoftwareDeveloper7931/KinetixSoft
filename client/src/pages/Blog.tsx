import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    { 
      slug: "future-of-low-code",
      title: "The Future of Low-Code", 
      date: "Jan 12, 2026", 
      author: "Nova Team", 
      excerpt: "How platforms like FlutterFlow and Retool are changing development forever." 
    },
    { 
      slug: "automating-crm-podio",
      title: "Automating Your CRM with Podio", 
      date: "Jan 10, 2026", 
      author: "Solutions Dept", 
      excerpt: "5 ways Globiflow can save you 10+ hours a week." 
    },
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
            Our <span className="text-gradient">Insights</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-white/10 rounded-2xl flex flex-col"
            >
              <div className="flex gap-4 text-xs text-cyan-400 mb-4 font-mono">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
              <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-cyan-400 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Read More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
