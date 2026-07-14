"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaImage,
} from "react-icons/fa";
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
    h === "tall" ? "h-[420px]" : h === "short" ? "h-[220px]" : "h-[320px]";

  const hasMedia = (src: string) => src.trim().length > 0;

  function showNext() {
    if (activeIdx === null || filtered.length === 0) return;
    setActiveIdx((activeIdx + 1) % filtered.length);
  }

  function showPrev() {
    if (activeIdx === null || filtered.length === 0) return;
    setActiveIdx((activeIdx - 1 + filtered.length) % filtered.length);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {["All", ...galleryCategories].map((c) => (
          <button
            key={c}
            onClick={() => {
              setFilter(c);
              setActiveIdx(null);
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === c
                ? "bg-brand-700 text-white shadow-soft"
                : "border border-steel-200 bg-white text-steel-700 hover:border-brand-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {filtered.map((item, i) => {
          const mediaSrc = item.src.trim();

          return (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => setActiveIdx(i)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className={`group relative mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl ${heightCls(
                item.height
              )}`}
            >
              {hasMedia(mediaSrc) && item.type === "video" ? (
                <>
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={mediaSrc} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-900">
                      <FaPlay className="ml-1" />
                    </div>
                  </div>
                </>
              ) : hasMedia(mediaSrc) ? (
                <img
                  src={mediaSrc}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-brand-900 text-white">
                  <div className="text-center">
                    <FaImage className="mx-auto h-9 w-9 text-accent" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/80">
                      Media coming soon
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent opacity-60 transition-opacity group-hover:opacity-90" />

              <div className="absolute bottom-0 left-0 p-4 text-left">
                <span className="inline-block rounded bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-900">
                  {item.category}
                </span>
                <p className="mt-2 text-sm font-medium text-white">
                  {item.alt}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-brand-950/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveIdx(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900"
              onClick={() => setActiveIdx(null)}
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Previous"
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900 md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              aria-label="Next"
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900 md:right-8"
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
              className="relative max-h-[85vh] max-w-5xl"
            >
              {hasMedia(active.src) && active.type === "video" ? (
                <video
                  className="max-h-[80vh] w-full rounded-xl bg-black shadow-industrial"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={active.src.trim()} type="video/mp4" />
                  Your browser does not support video.
                </video>
              ) : hasMedia(active.src) ? (
                <img
                  src={active.src.trim()}
                  alt={active.alt}
                  className="max-h-[85vh] w-auto rounded-xl object-contain shadow-industrial"
                />
              ) : (
                <div className="grid h-[50vh] w-[min(88vw,720px)] place-items-center rounded-xl bg-brand-900 text-white shadow-industrial">
                  <div className="text-center">
                    <FaImage className="mx-auto h-12 w-12 text-accent" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/80">
                      Media coming soon
                    </p>
                  </div>
                </div>
              )}

              <p className="mt-3 text-center text-white">
                <span className="mr-2 text-xs uppercase tracking-widest text-accent">
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
