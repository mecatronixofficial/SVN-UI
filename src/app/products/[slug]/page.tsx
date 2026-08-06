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
  FaPlayCircle,
} from "react-icons/fa";

import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";
import ProductGallery from "@/components/ProductGallery";

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

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Manufacturer in India`,
    description: product.shortDescription,
    keywords: [
      product.name,
      `${product.name} manufacturer`,
      `${product.name} manufacturer India`,
      `${product.name} supplier India`,
      `${product.name} price quotation`,
      product.category.trim(),
      "textile machinery manufacturer Erode",
      "custom textile machinery India",
    ],
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${siteConfig.url}/products/${product.slug}`,
      siteName: siteConfig.name,
      title: `${product.name} - SVN Enterprises`,
      description: product.shortDescription,
      images: product.image
        ? [{ url: product.image, alt: product.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - SVN Enterprises`,
      description: product.shortDescription,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);
  const productUrl = `${siteConfig.url}/products/${product.slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name.trim(),
    description: product.description,
    category: product.category.trim(),
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: product.image ? [product.image] : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Hero Without Image */}
      <section className="relative overflow-hidden bg-brand-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]" />

        <div className="container-x relative">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {product.category}
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            {product.shortDescription}
          </p>
        </div>
      </section>

      {/* Video + Quick info */}
      <section className="section-padding container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Video Only */}
          <div className="lg:col-span-7">
            <ProductGallery
  video={product.video}
  image={product.image}
  name={product.name}
/>
          </div>

          {/* Quick info card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 rounded-2xl border border-steel-200 bg-white p-6 shadow-soft md:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
                <FaTag className="h-2.5 w-2.5" /> {product.category}
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold text-brand-900">
                {product.name}
              </h2>

              <p className="mt-3 leading-relaxed text-steel-600">
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
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-green-600 px-4 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white"
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

              <div className="mt-8 border-t border-steel-100 pt-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-steel-500">
                  At a glance
                </p>

                <dl className="space-y-2 text-sm">
                  {product.specifications.slice(0, 4).map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-4"
                    >
                      <dt className="text-steel-600">{s.label}</dt>
                      <dd className="text-right font-medium text-brand-900">
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
          <div className="rounded-2xl border border-steel-200 bg-white p-8 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
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
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-steel-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-steel-200 bg-white p-8 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-brand-900">
                <FaIndustry />
              </div>

              <h3 className="font-display text-2xl font-bold text-brand-900">
                Benefits & Industrial Usage
              </h3>
            </div>

            <ul className="mb-6 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-700" />
                  <span className="text-steel-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-steel-100 pt-4">
              <p className="mb-3 text-xs uppercase tracking-widest text-steel-500">
                Applications
              </p>

              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
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
                  <td className="w-1/3 border-r border-steel-100 px-6 py-4 font-semibold text-brand-900">
                    {s.label}
                  </td>
                  <td className="px-6 py-4 text-steel-700">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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
