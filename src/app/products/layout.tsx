import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textile Machinery Manufacturer & Supplier in India",
  description:
    "Browse fabric inspection, rolling, batching, folding, washing, drying, wrapping and customised textile processing machinery from SVN Enterprises, Erode.",
  keywords: [
    "textile machinery manufacturer India",
    "textile machinery supplier India",
    "textile machinery manufacturer Erode",
    "textile machinery manufacturer Tamil Nadu",
    "fabric inspection machine manufacturer",
    "fabric rolling machine manufacturer",
    "fabric batching machine manufacturer",
    "textile processing machinery manufacturer",
    "custom textile machinery manufacturer",
    "industrial textile equipment supplier",
  ],
  alternates: {
    canonical: "https://www.svnenterprises.co.in/products",
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
