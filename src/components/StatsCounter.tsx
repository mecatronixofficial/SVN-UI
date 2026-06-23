"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/site";

function CountUp({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function StatsCounter({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 ">
      {stats.map((s, i) => {
        const isNumber = typeof s.value === "number";

        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative flex min-h-[270px] w-[270px] flex-col justify-center items-center rounded-2xl border p-6 md:p-8 ${
              light
                ? "border-white/10 bg-white/5 backdrop-blur"
                : "border-steel-200 bg-white shadow-soft"
            }`}
          >
            <div className="flex items-start gap-1">
              <span
                className={`font-display font-bold leading-tight ${
                  isNumber
                    ? "text-xl md:text-5xl"
                    : "text-xl md:text-2xl lg:text-xl"
                } ${light ? "text-white" : "text-brand-900"}`}
              >
                {isNumber ? <CountUp end={Number(s.value)} /> : s.value}
              </span>

              {s.suffix && (
                <span
                  className={`font-display text-xl font-bold md:text-4xl ${
                    light ? "text-accent" : "text-accent-dark"
                  }`}
                >
                  {s.suffix}
                </span>
              )}
            </div>

            <p
              className={`mt-4 text-xs uppercase tracking-widest ${
                light ? "text-brand-200" : "text-steel-600"
              }`}
            >
              {s.label}
            </p>

            <div
              className={`absolute bottom-4 right-4 h-1 w-10 ${
                light ? "bg-accent" : "bg-accent-dark"
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
