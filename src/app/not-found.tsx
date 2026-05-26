import Link from "next/link";
import { FaHome, FaCogs } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-brand-950 text-white min-h-[80vh] grid place-items-center">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 blueprint-bg opacity-30" />

      <div className="container-x text-center py-24">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          Error 404
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl font-bold leading-none">
          Page Not Found
        </h1>
        <p className="mt-6 text-brand-100 max-w-xl mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to something useful.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-accent">
            <FaHome className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="btn-outline border-white/30 text-white hover:bg-white hover:text-brand-950"
          >
            <FaCogs className="h-4 w-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
