"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gallery, galleryCategories } from "@/data/gallery";
import type { GalleryItem } from "@/types";

export default function GalleryGrid({
  filterDefault = "All",
}: {
  filterDefault?: string;
}) {
  const [filter, setFilter] = useState<string>(filterDefault);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filtered =
    filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  const active = activeIdx !== null ? filtered[activeIdx] : null;

  const heightCls = (h: GalleryItem["height"]) =>
    h === "tall"
      ? "h-[420px]"
      : h === "short"
      ? "h-[220px]"
      : "h-[320px]";

  function showNext() {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % filtered.length);
  }
  function showPrev() {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + filtered.length) % filtered.length);
  }

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {["All", ...galleryCategories].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === c
                ? "bg-brand-700 text-white shadow-soft"
                : "bg-white text-steel-700 border border-steel-200 hover:border-brand-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveIdx(i)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className={`mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl group relative cursor-zoom-in ${heightCls(
              item.height
            )}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-4 text-left">
              <span className="inline-block rounded bg-accent text-brand-900 text-[10px] uppercase tracking-widest px-2 py-1 font-semibold">
                {item.category}
              </span>
              <p className="mt-2 text-sm text-white font-medium">{item.alt}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-950/95 backdrop-blur-sm grid place-items-center p-4"
            onClick={() => setActiveIdx(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-brand-900 transition-colors"
              onClick={() => setActiveIdx(null)}
            >
              <FaTimes className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-brand-900 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-brand-900 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <FaChevronRight />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[85vh] w-auto rounded-xl object-contain shadow-industrial"
              />
              <p className="mt-3 text-center text-white">
                <span className="text-accent text-xs uppercase tracking-widest mr-2">
                  {active.category}
                </span>
                {active.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
