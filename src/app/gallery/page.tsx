import type { Metadata } from "next";
import { createMetadata, pageSeo } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata(pageSeo.gallery);

export default function GalleryPage() {
  return (
    <>
      <PageStructuredData page="gallery" type="CollectionPage" />
      <PageHero
        title="Gallery"
        subtitle="A look inside our factory floor, machines in production, manufacturing process, videos, and the people who make it all happen."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-padding container-x">
        <GalleryGrid />
      </section>

      <CTASection
        title="Want to visit our factory?"
        description="We welcome serious buyers for factory visits in Erode. Get in touch to schedule a time."
      />
    </>
  );
}
