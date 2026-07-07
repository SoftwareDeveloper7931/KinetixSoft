import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#0A0E14" }}
    >
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-bold mb-4"
          style={{ color: "#4A5FBD", fontFamily: "Newsreader, serif" }}
        >
          404
        </div>
        <h1 className="text-2xl font-semibold mb-3" style={{ color: "#E9EBEF" }}>
          Page not found
        </h1>
        <p className="mb-8" style={{ color: "#8A93A3" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button
            className="h-11 px-8 text-sm font-semibold"
            style={{
              background: "#4A5FBD",
              color: "#E9EBEF",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
