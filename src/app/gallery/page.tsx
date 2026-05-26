import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of our factory, machinery, manufacturing process and team at SVN Enterprises, Erode.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="A look inside our factory floor, machines in production, our process, and the people who make it all happen."
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
