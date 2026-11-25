import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const siteUrl = siteConfig.url.replace(/\/$/, "");
export const socialImage = {
  url: `${siteUrl}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "SVN Enterprises textile machinery manufacturing facility in Erode",
  type: "image/jpeg",
};

export const pageSeo = {
  home: {
    path: "",
    label: "Home",
    title: "Textile Machinery Manufacturer in Erode",
    description: "SVN Enterprises manufactures fabric inspection, folding, batching, rolling and textile processing machines in Erode, Tamil Nadu. Request a custom quote.",
    keywords: [
      "textile machinery manufacturer in Erode",
      "textile machinery manufacturer Tamil Nadu",
      "textile machinery manufacturer India",
      "fabric inspection machine manufacturer",
      "book folding machine manufacturer",
      "fabric batching machine manufacturer",
      "fabric rolling machine manufacturer",
      "stretch wrapping machine manufacturer",
      "electronic jigger machine manufacturer",
      "J-Box machine manufacturer",
      "rope opener and slit opener manufacturer",
      "custom textile processing machinery",
    ],
  },
  about: {
    path: "/about",
    label: "About",
    title: "About Our Textile Machinery Manufacturing",
    description: "Meet SVN Enterprises, a textile machinery manufacturer in Erode, Tamil Nadu since 2012. Learn about our factory, team and custom manufacturing capabilities.",
    keywords: ["about SVN Enterprises", "SVN Enterprises Erode", "textile machinery manufacturing company", "textile machinery factory Tamil Nadu", "custom machine manufacturing Erode"],
  },
  products: {
    path: "/products",
    label: "Products",
    title: "Textile Machinery & Fabric Processing Machines",
    description: "Browse SVN Enterprises fabric inspection, folding, rolling, batching, wrapping and dyeing machines. Manufactured in Erode with custom configurations available.",
    keywords: ["textile machinery products", "fabric processing machinery manufacturer", "fabric inspection machines", "fabric folding machines", "fabric rolling and batching machines", "textile dyeing machines", "textile material handling equipment", "textile machinery supplier India"],
  },
  gallery: {
    path: "/gallery",
    label: "Gallery",
    title: "Textile Machinery Photos & Factory Videos",
    description: "View SVN Enterprises machine photos, factory videos and textile machinery in operation. Explore our manufacturing work and fabric processing equipment in Erode.",
    keywords: ["SVN Enterprises gallery", "textile machinery photos", "fabric inspection machine video", "textile machinery factory videos", "fabric processing equipment Erode"],
  },
  testimonials: {
    path: "/testimonials",
    label: "Testimonials",
    title: "Customer Reviews & Textile Machinery Testimonials",
    description: "Read customer experiences with SVN Enterprises textile machinery, manufacturing quality and after-sales support from textile mills and garment units across India.",
    keywords: ["SVN Enterprises reviews", "SVN Enterprises testimonials", "textile machinery customer feedback", "fabric processing machine reviews", "textile machine manufacturer reviews India"],
  },
  faq: {
    path: "/faq",
    label: "FAQ",
    title: "Textile Machinery FAQs, Customization & Support",
    description: "Find answers about SVN Enterprises textile machines, custom configurations, quotations, installation, warranty, spare parts and after-sales support in India.",
    keywords: ["textile machinery FAQ", "textile machine customization", "textile machinery quotation process", "textile machine installation support", "textile machinery spare parts and service"],
  },
  contact: {
    path: "/contact",
    label: "Contact",
    title: "Contact & Textile Machinery Quotations",
    description: "Contact SVN Enterprises in Erode for textile machinery quotations, custom machines, installation and service. Call +91 99943 64935 or send an enquiry online.",
    keywords: ["SVN Enterprises contact", "SVN Enterprises phone number", "textile machinery quotation Erode", "fabric inspection machine price quote", "custom textile machinery enquiry", "textile machine service Tamil Nadu"],
  },
};

interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export function createMetadata(
  page: PageSeo,
  image: { url: string; alt: string; width?: number; height?: number; type?: string } = socialImage,
): Metadata {
  const title = `${page.title.trim()} | ${siteConfig.name}`;
  const url = `${siteUrl}${page.path}`;

  return {
    title: { absolute: title },
    description: page.description.trim(),
    keywords: [...new Set([siteConfig.name, ...page.keywords])],
    alternates: { canonical: url, languages: { "en-IN": url } },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url,
      title,
      description: page.description.trim(),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description.trim(),
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function createPageSchema(
  page: Pick<PageSeo, "path" | "title" | "description"> & { label: string },
  type = "WebPage",
  parents: { path: string; label: string }[] = [],
  properties: Record<string, unknown> = {},
) {
  const url = `${siteUrl}${page.path}`;
  const breadcrumbs = [
    { path: "", label: "Home" },
    ...parents,
    ...(page.path ? [page] : []),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: `${page.title} | ${siteConfig.name}`,
        description: page.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: socialImage.url,
          width: socialImage.width,
          height: socialImage.height,
          caption: socialImage.alt,
        },
        ...(page.path ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
        ...properties,
      },
      ...(page.path ? [{
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `${siteUrl}${item.path}`,
        })),
      }] : []),
    ],
  };
}

// Escape HTML delimiters before placing structured data inside a script tag.
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
