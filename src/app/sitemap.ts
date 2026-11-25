import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { pageSeo } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes = Object.values(pageSeo).map((page) => page.path);

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content update dates are available.
  const pages: SitemapEntry[] = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productPages: SitemapEntry[] = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    ...(product.image ? { images: [product.image.trim()] } : {}),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...productPages];
}
