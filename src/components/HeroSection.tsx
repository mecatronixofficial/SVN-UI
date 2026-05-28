"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/handsome-carpenter-working-with-wood_yasooi.jpg')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-800/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 blueprint-bg opacity-40"
        aria-hidden
      />

      <div className="container-x relative py-24 md:py-32 lg:py-40 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Established 2012 · Erode, Tamil Nadu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05]"
          >
            Reliable Industrial &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Textile</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 rounded-sm" />
            </span>{" "}
            Machinery Manufacturer Since 2012
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-brand-100 max-w-2xl leading-relaxed"
          >
            From fabric inspection lines to washer extractors, SVN Enterprises
            builds purpose-engineered machinery for textile mills, garment
            units and commercial laundries across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-accent">
              Explore Products <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-ghost">
              <FaPhoneAlt /> Contact Us
            </Link>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-6"
          >
            {[
              { num: "13+", lbl: "Years" },
              { num: "500+", lbl: "Machines" },
              { num: "250+", lbl: "Clients" },
            ].map((s) => (
              <div key={s.lbl}>
                <p className="font-display text-3xl font-bold text-white">
                  {s.num}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-300 mt-1">
                  {s.lbl}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating spec card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-accent/30" />
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-industrial">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-200">
                  Spec Sheet · Featured
                </span>
                <span className="text-[10px] uppercase tracking-widest text-accent">
                  Model · IRM-110
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-white">
                Inspection Cum Rolling Machine
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {[
                  ["Width", "110 inch"],
                  ["Speed", "60 m/min"],
                  ["Motor", "1.5 HP"],
                  ["Voltage", "415V"],
                  ["Lighting", "LED Panel"],
                  ["Frame", "MS Welded"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-brand-200 text-xs uppercase tracking-wider">
                      {k}
                    </span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/products/inspection-cum-rolling-machine"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
              >
                View full specifications <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom industrial stripe */}
      <div className="relative">
        <div className="stripe-bg h-2" />
      </div>
    </section>
  );
}
