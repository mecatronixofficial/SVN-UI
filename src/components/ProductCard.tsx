import Link from "next/link";
import { FaArrowRight, FaImage, FaTag } from "react-icons/fa";
import type { Product } from "@/types";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const videoSrc = product.video.trim();

  return (
    <article className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-industrial">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-64 overflow-hidden bg-black">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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

          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Machine {product.machineNumber}
          </div>
        </div>

        <div className="p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
            <FaTag className="h-2.5 w-2.5" />
            {product.category}
          </span>

          <h3 className="mt-4 font-display text-xl font-bold text-brand-900 group-hover:text-brand-700">
            {product.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel-600">
            {product.shortDescription}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            View Details
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
