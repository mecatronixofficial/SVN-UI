"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Product } from "@/types";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col rounded-2xl bg-white border border-steel-200 overflow-hidden shadow-soft hover:shadow-industrial hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-steel-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-steel-600 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-steel-700"
            >
              <FaCheck className="h-3 w-3 mt-0.5 text-accent flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-steel-100 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-accent-dark"
          >
            View Details <FaArrowRight className="h-3 w-3" />
          </Link>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="rounded-md bg-brand-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
