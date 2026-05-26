import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaCogs,
  FaIndustry,
  FaTag,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - SVN Enterprises`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        bgImage={product.image}
      />

      {/* Gallery + Quick info */}
      <section className="section-padding container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-steel-200 shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[480px] object-cover"
              />
            </div>
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.slice(0, 3).map((g, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-steel-200 h-32"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g}
                      alt={`${product.name} ${i + 1}`}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick info card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 rounded-2xl bg-white border border-steel-200 p-6 md:p-8 shadow-soft">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 text-accent-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                <FaTag className="h-2.5 w-2.5" /> {product.category}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand-900">
                {product.name}
              </h2>
              <p className="mt-3 text-steel-600 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary"
                >
                  Request Quote <FaArrowRight />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${
                      siteConfig.whatsapp
                    }?text=${encodeURIComponent(
                      `Hi, I'm interested in ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-green-600 text-green-700 px-4 py-2.5 text-sm font-semibold hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="btn-outline"
                  >
                    <FaPhoneAlt /> Call
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-steel-100">
                <p className="text-xs uppercase tracking-widest text-steel-500 mb-3">
                  At a glance
                </p>
                <dl className="space-y-2 text-sm">
                  {product.specifications.slice(0, 4).map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-4"
                    >
                      <dt className="text-steel-600">{s.label}</dt>
                      <dd className="text-brand-900 font-medium text-right">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-steel-50/60">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-white border border-steel-200 p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                <FaCogs />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-900">
                Key Features
              </h3>
            </div>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <FaCheck className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                  <span className="text-steel-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-steel-200 p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-brand-900">
                <FaIndustry />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-900">
                Benefits & Industrial Usage
              </h3>
            </div>
            <ul className="space-y-3 mb-6">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-700 flex-shrink-0" />
                  <span className="text-steel-700">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-steel-100">
              <p className="text-xs uppercase tracking-widest text-steel-500 mb-3">
                Applications
              </p>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Technical Details"
          title="Full specifications"
          description="Complete technical details for the standard configuration. Custom configurations available on request."
        />
        <div className="overflow-hidden rounded-2xl border border-steel-200 shadow-soft">
          <table className="w-full text-sm">
            <tbody>
              {product.specifications.map((s, i) => (
                <tr
                  key={s.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-brand-50/30"}
                >
                  <td className="px-6 py-4 font-semibold text-brand-900 w-1/3 border-r border-steel-100">
                    {s.label}
                  </td>
                  <td className="px-6 py-4 text-steel-700">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      {product.faqs.length > 0 && (
        <section className="section-padding bg-steel-50/60">
          <div className="container-x max-w-3xl">
            <SectionTitle
              eyebrow="Product FAQ"
              title="Common questions"
              align="center"
            />
            <FAQAccordion items={product.faqs} />
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-padding container-x">
          <SectionTitle
            eyebrow="More Products"
            title="You might also be interested in"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <CTASection
        title={`Need a quote for the ${product.name}?`}
        description="Share your width, capacity and voltage requirements — we'll send a tailored quote within one business day."
      />
    </>
  );
}
