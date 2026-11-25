import type { Metadata } from "next";
import { createMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.products);

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
