"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaIndustry,
  FaTools,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] text-white">
      {/* Clear background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ddpfxvydm/image/upload/v1780746508/Shirpur-Inspection_machine_x8ordq.jpg')",
        }}
        aria-hidden
      />

      {/* Light overlay for image clarity */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/25" />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Premium glow */}
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="container-x relative grid min-h-[90vh] items-center gap-12 py-24 lg:grid-cols-12">
        {/* Left Content */}
        <div className="max-w-3xl lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur"
          >
            <FaIndustry className="text-accent" />
            Trusted Manufacturer Since 2012
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
          >
           Modern 
            <span className="bg-gradient-to-r from-accent via-yellow-200 to-accent bg-clip-text text-transparent">
           Textile Machinery Manufacturer
            </span>{" "}
        
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg"
          >
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-brand-950 shadow-xl shadow-accent/25 transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Machines <FaArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-brand-950"
            >
              <FaPhoneAlt /> Request a Quote
            </Link>
          </motion.div>

         
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              ["13+", "Years"],
              ["500+", "Machines"],
              ["250+", "Clients"],
              ["100%", "Quality"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-center backdrop-blur"
              >
                <p className="font-display text-3xl font-bold text-accent">
                  {num}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

       
       
      </div>

      {/* Bottom premium line */}
      <div className="h-2 bg-gradient-to-r from-accent via-yellow-200 to-accent" />
    </section>
  );
}