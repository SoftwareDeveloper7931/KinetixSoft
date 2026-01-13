import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Link, useRoute } from "wouter";

const BLOG_POSTS = {
  "future-of-low-code": {
    title: "The Future of Low-Code",
    date: "Jan 12, 2026",
    author: "Nova Team",
    readTime: "5 min read",
    content: `
      <p>The landscape of software development is undergoing a seismic shift. Low-code and no-code platforms are no longer just toys for simple prototypes; they are becoming the backbone of enterprise-grade solutions.</p>
      
      <h3>Why the Shift?</h3>
      <p>Traditional development cycles are often slow and expensive. Platforms like FlutterFlow and Retool allow teams to bridge the gap between design and production with unprecedented speed. By handling the boilerplate, these tools free up developers to focus on what truly matters: business logic and user experience.</p>
      
      <h3>The Hybrid Approach</h3>
      <p>We believe the future isn't "no code" or "all code"—it's hybrid. Using FlutterFlow for the UI while injecting custom Dart for complex logic, or using Retool to manage data while maintaining strict SQL controls, is how modern high-performance apps are built.</p>
      
      <h3>What's Next?</h3>
      <p>As AI integration becomes standard within these platforms, we'll see even faster iteration cycles. The barrier to entry for building complex software is falling, but the need for skilled architects who understand how to leverage these platforms effectively is higher than ever.</p>
    `
  },
  "automating-crm-podio": {
    title: "Automating Your CRM with Podio",
    date: "Jan 10, 2026",
    author: "Solutions Dept",
    readTime: "7 min read",
    content: `
      <p>Podio is often misunderstood as just another project management tool. In reality, it's a flexible database that can be transformed into a bespoke CRM tailored to your specific business needs.</p>
      
      <h3>The Power of Globiflow</h3>
      <p>Automation is the secret sauce. With Globiflow (Podio Workflow Automation), you can trigger complex actions based on simple data changes. A lead changes status? Automatically generate a contract, notify the sales team, and set a follow-up reminder.</p>
      
      <h3>Centralizing Communication</h3>
      <p>One of the biggest leaks in business efficiency is scattered communication. By integrating your email and messaging directly into Podio items, you ensure that everyone has the context they need to move projects forward.</p>
      
      <h3>Scaling with Data</h3>
      <p>Custom calculation fields allow for real-time reporting without manual exports. Know your conversion rates, project margins, and team velocity at a glance.</p>
    `
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS] : null;

  if (!post) {
    return (
      <div className="min-h-screen relative">
        <BackgroundElements />
        <Navigation />
        <main className="pt-32 pb-24 px-4 text-center relative z-10">
          <h1 className="text-2xl text-white">Post not found</h1>
          <Link href="/blog" className="text-cyan-400 mt-4 block">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex gap-4 text-sm text-cyan-400 mb-4 font-mono">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="glass-card p-8 md:p-12 border border-white/10 rounded-3xl">
            <div 
              className="prose prose-invert prose-cyan max-w-none prose-headings:text-white prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 p-8 glass-panel rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Want more insights?</h3>
              <p className="text-muted-foreground text-sm">Subscribe to our newsletter for the latest in low-code development.</p>
            </div>
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-white border-0">Subscribe</Button>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

function Button({ children, className, ...props }: any) {
  return (
    <button className={`px-6 py-2 rounded-full font-bold transition-all ${className}`} {...props}>
      {children}
    </button>
  );
}
