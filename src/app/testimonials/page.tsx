import type { Metadata } from "next";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Textile Machinery Customer Reviews | SVN Enterprises",
  description:
    "Read customer feedback from textile mills, garment units and laundry operators using SVN Enterprises textile and industrial machinery across India.",
  keywords: [
    "textile machinery customer reviews",
    "textile machinery manufacturer India reviews",
    "fabric processing machinery supplier reviews",
    "textile machinery Erode",
  ],
  alternates: {
    canonical: "https://www.svnenterprises.co.in/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="What production managers, factory owners and procurement teams say about working with us."
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Featured Review"
          title="From the production floor"
          align="center"
        />
        <div className="max-w-4xl mx-auto">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="section-padding bg-steel-50/60">
        <div className="container-x">
          <SectionTitle
            eyebrow="All Reviews"
            title="Every client matters"
            description="A small sample of feedback we've received from customers across South India."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="relative rounded-2xl bg-white border border-steel-200 p-6 shadow-soft hover:shadow-industrial transition-shadow"
              >
                <FaQuoteLeft className="absolute top-5 right-5 h-10 w-10 text-brand-50" />
                <div className="relative">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-4 text-steel-700 leading-relaxed">
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-steel-100 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-white text-sm font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-steel-600">
                        {t.role} · {t.company}
                      </p>
                      <p className="text-[11px] text-steel-500 mt-0.5">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be our next happy customer?"
        description="Reach out for a quote — we'll do our best to earn your trust the way we earned theirs."
      />
    </>
  );
}
