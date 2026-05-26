"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import type { FAQItem } from "@/types";

export default function FAQAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-colors ${
              isOpen
                ? "border-brand-700/40 bg-brand-50/40 shadow-soft"
                : "border-steel-200 bg-white hover:border-brand-300"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-4">
                <span
                  className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-md text-xs font-bold ${
                    isOpen
                      ? "bg-brand-700 text-white"
                      : "bg-brand-50 text-brand-700"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-brand-900">
                  {item.question}
                </span>
              </span>
              <span
                className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full transition-colors ${
                  isOpen
                    ? "bg-accent text-brand-900"
                    : "bg-steel-100 text-steel-700"
                }`}
              >
                {isOpen ? (
                  <FaMinus className="h-3 w-3" />
                ) : (
                  <FaPlus className="h-3 w-3" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-16 text-sm text-steel-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
