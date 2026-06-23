"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedProductsSlider({
  featured,
}: {
  featured: Product[];
}) {
  return (
    <section className="section-padding container-x">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
            <span className="h-px w-8 bg-accent" />
            Featured Products
          </span>

          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-brand-900 heading-accent">
            Machinery built for production floors
          </h2>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-accent-dark"
        >
          View all products <FaArrowRight />
        </Link>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={featured.length > 3}
        speed={800}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        className="py-20 px-10"
      >
        {featured.map((p, i) => (
          <SwiperSlide key={p.slug} className="">
           <div className="w-full h-auto pb-20">
             <ProductCard product={p} index={i} />
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}