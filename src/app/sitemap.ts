import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/gallery",
  "/testimonials",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: SitemapEntry[] = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productPages: SitemapEntry[] = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...productPages];
}
