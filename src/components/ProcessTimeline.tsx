"use client";

import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaTools,
  FaSearchPlus,
  FaTruck,
} from "react-icons/fa";
import { processSteps } from "@/data/site";

const iconMap = {
  FaClipboardList,
  FaTools,
  FaSearchPlus,
  FaTruck,
} as const;

export default function ProcessTimeline() {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Decorative dashed line on lg */}
      <div className="hidden lg:block absolute top-12 left-12 right-12 h-px border-t border-dashed border-brand-300/50" />

      {processSteps.map((step, i) => {
        const Icon = iconMap[step.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative bg-white rounded-2xl border border-steel-200 p-6 shadow-soft hover:shadow-industrial hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-700 text-white">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <span className="font-display text-5xl font-bold text-brand-100">
                0{step.step}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-brand-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-steel-600 leading-relaxed">
              {step.description}
            </p>
            <div className="mt-5 h-0.5 w-12 bg-accent rounded-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
