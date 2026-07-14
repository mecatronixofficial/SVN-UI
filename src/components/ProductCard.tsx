/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaArrowRight, FaImage, FaTag } from "react-icons/fa";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-industrial">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-64 overflow-hidden bg-black">
          {product.video ? (
            <video
              src={product.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              Your browser does not support the video tag.
            </video>
          ) : product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-steel-100 text-steel-500">
              No media available
            </div>
          )}

          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Machine {product.machineNumber}
          </div>
        </div>

        <div className="p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
            <FaTag className="h-2.5 w-2.5" />
            {product.category}
          </span>

          <h3 className="mt-4 font-display text-xl font-bold text-brand-900 transition-colors group-hover:text-brand-700">
            {product.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel-600">
            {product.shortDescription}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            View Details
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
