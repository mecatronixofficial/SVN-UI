"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CTASection({
  title = "Ready to upgrade your production line?",
  description = "Talk to our engineers about the right machine for your factory. Quick quotes, honest specs, reliable delivery.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-16 md:px-16 md:py-20">
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Let&apos;s build together
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-brand-100 text-base md:text-lg max-w-xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row lg:justify-end gap-3"
          >
            <Link href="/contact" className="btn-accent">
              Get a Quote <FaArrowRight />
            </Link>
            <a href="tel:+919876543210" className="btn-ghost">
              <FaPhoneAlt /> Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
