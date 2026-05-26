"use client";

import { useMemo, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products, productCategories } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Industrial and textile machinery designed for everyday production use. Browse by category, search, or click any product for full specifications."
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="section-padding container-x">
        {/* Filter / search bar */}
        <div className="mb-10 grid gap-4 lg:grid-cols-[1fr_auto] items-center">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-400" />
            <input
              type="text"
              placeholder="Search machines, categories, applications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-steel-200 bg-white pl-11 pr-4 py-3 text-sm placeholder:text-steel-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200 transition"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-steel-500">
            <FaFilter />
            <span>{filtered.length} products</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          {["All", ...productCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                category === c
                  ? "bg-brand-700 text-white shadow-soft"
                  : "bg-white text-steel-700 border border-steel-200 hover:border-brand-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-steel-300 p-16 text-center">
            <p className="text-steel-500">No products match your filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-accent-dark"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>

      <CTASection
        title="Can't find what you're looking for?"
        description="We build custom configurations regularly. Tell us your requirement — we'll quote it."
      />
    </>
  );
}
