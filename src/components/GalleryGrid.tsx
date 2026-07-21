"use client";

import { useMemo, useState } from "react";
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

type GalleryGridProps = {
  filterDefault?: string;
};

export default function GalleryGrid({
  filterDefault = "All",
}: GalleryGridProps) {
  const [filter, setFilter] = useState<string>(filterDefault);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [failedMedia, setFailedMedia] = useState<Record<string, boolean>>({});

  const validGallery = useMemo(
    () =>
      gallery.filter(
        (item) => typeof item.src === "string" && item.src.trim().length > 0,
      ),
    [],
  );

  const filtered = useMemo(() => {
    if (filter === "All") return validGallery;

    return validGallery.filter((item) => item.category === filter);
  }, [filter, validGallery]);

  const active =
    activeIdx !== null && filtered[activeIdx] ? filtered[activeIdx] : null;

  const heightCls = (height: GalleryItem["height"]) => {
    if (height === "tall") return "h-[420px]";
    if (height === "short") return "h-[220px]";
    return "h-[320px]";
  };

  const hasMedia = (src: string) => src.trim().length > 0;

  const handleMediaError = (itemId: string | number) => {
    setFailedMedia((previous) => ({
      ...previous,
      [String(itemId)]: true,
    }));
  };

  const showNext = () => {
    if (activeIdx === null || filtered.length === 0) return;

    setActiveIdx((activeIdx + 1) % filtered.length);
  };

  const showPrevious = () => {
    if (activeIdx === null || filtered.length === 0) return;

    setActiveIdx((activeIdx - 1 + filtered.length) % filtered.length);
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {["All", ...galleryCategories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setFilter(category);
              setActiveIdx(null);
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === category
                ? "bg-brand-700 text-white shadow-soft"
                : "border border-steel-200 bg-white text-steel-700 hover:border-brand-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-steel-200 bg-steel-50 px-6 py-16 text-center">
          <FaImage className="mx-auto h-10 w-10 text-steel-400" />
          <h3 className="mt-4 text-lg font-semibold text-brand-950">
            No gallery media available
          </h3>
          <p className="mt-2 text-sm text-steel-600">
            Images and videos will be added soon.
          </p>
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((item, index) => {
            const mediaFailed = failedMedia[String(item.id)];

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => !mediaFailed && setActiveIdx(index)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-steel-100 ${
                  mediaFailed ? "cursor-default" : "cursor-zoom-in"
                } ${heightCls(item.height)}`}
              >
                {mediaFailed ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-steel-100 px-5 text-center">
                    <FaImage className="h-10 w-10 text-steel-400" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-steel-500">
                      Media unavailable
                    </p>
                    <p className="mt-2 text-sm font-medium text-brand-950">
                      {item.alt}
                    </p>
                  </div>
                ) : item.type === "video" ? (
                  <>
                    <video
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      muted
                      playsInline
                      preload="auto"
                      onError={() => handleMediaError(item.id)}
                    >
                      <source src={item.src.trim()} type="video/mp4" />
                    </video>

                    <div className="pointer-events-none absolute inset-0 grid place-items-center">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-900 shadow-lg">
                        <FaPlay className="ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src.trim()}
                    alt={item.alt}
                    loading="lazy"
                    onError={() => handleMediaError(item.id)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {!mediaFailed && (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                    <div className="pointer-events-none absolute bottom-0 left-0 p-4 text-left">
                      <span className="inline-block rounded bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-900">
                        {item.category}
                      </span>
                      <p className="mt-2 text-sm font-medium text-white">
                        {item.alt}
                      </p>
                    </div>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-brand-950/95 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIdx(null)}
              className="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900 md:right-6 md:top-6"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous gallery item"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute left-3 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900 md:left-8"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  aria-label="Next gallery item"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-3 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-brand-900 md:right-8"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              {active.type === "video" ? (
                <video
                  key={active.src}
                  className="mx-auto max-h-[80vh] w-full rounded-xl bg-black object-contain shadow-industrial"
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                >
                  <source src={active.src.trim()} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              ) : (
                <img
                  src={active.src.trim()}
                  alt={active.alt}
                  className="mx-auto max-h-[80vh] max-w-full rounded-xl object-contain shadow-industrial"
                />
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