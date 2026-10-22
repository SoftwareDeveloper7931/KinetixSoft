import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-jet text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cerulean/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-rose/15 blur-[100px] pointer-events-none" />

      <div className="text-center max-w-md relative z-10 p-8 rounded-3xl bg-jet-surface/80 border border-jet-border backdrop-blur-xl shadow-2xl">
        <div className="text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose font-mono">
          404
        </div>
        <h1 className="text-2xl font-bold mb-3 text-white/95 tracking-tight">
          Coordinate Not Found
        </h1>
        <p className="mb-8 text-sm text-white/60 leading-relaxed">
          The requested route doesn't exist in our deployment registry or has been moved.
        </p>
        <Link href="/">
          <button className="btn-duo mx-auto">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
