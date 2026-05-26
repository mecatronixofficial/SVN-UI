"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Testimonial } from "@/types";

export default function TestimonialSlider({
  items,
  auto = true,
  interval = 6000,
}: {
  items: Testimonial[];
  auto?: boolean;
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [auto, interval, items.length]);

  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const current = items[idx];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-steel-200 shadow-soft p-8 md:p-12">
        <FaQuoteLeft className="absolute top-6 right-8 h-16 w-16 text-brand-50" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: current.rating }).map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-5 font-display text-xl md:text-2xl leading-relaxed text-brand-900">
              &ldquo;{current.message}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-700 text-white font-bold">
                {current.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-brand-900">{current.name}</p>
                <p className="text-sm text-steel-600">
                  {current.role} · {current.company}
                </p>
                <p className="text-xs text-steel-500 mt-0.5">
                  {current.location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-brand-700" : "w-3 bg-steel-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full border border-steel-200 text-brand-700 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-colors"
          >
            <FaChevronLeft className="h-3 w-3" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full border border-steel-200 text-brand-700 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-colors"
          >
            <FaChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
