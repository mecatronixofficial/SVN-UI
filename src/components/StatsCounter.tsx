"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/site";

function CountUp({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function StatsCounter({ light = false }: { light?: boolean }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={`relative rounded-2xl p-6 md:p-8 border ${
            light
              ? "bg-white/5 backdrop-blur border-white/10"
              : "bg-white border-steel-200 shadow-soft"
          }`}
        >
          <div className="flex items-end gap-1">
            <span
              className={`font-display text-4xl md:text-5xl font-bold ${
                light ? "text-white" : "text-brand-900"
              }`}
            >
              <CountUp end={s.value} />
            </span>
            <span
              className={`font-display text-3xl md:text-4xl font-bold ${
                light ? "text-accent" : "text-accent-dark"
              }`}
            >
              {s.suffix}
            </span>
          </div>
          <p
            className={`mt-2 text-xs uppercase tracking-widest ${
              light ? "text-brand-200" : "text-steel-600"
            }`}
          >
            {s.label}
          </p>
          <div
            className={`absolute bottom-3 right-3 h-1 w-10 ${
              light ? "bg-accent" : "bg-accent-dark"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
