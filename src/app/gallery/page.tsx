import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Textile Machinery Factory & Machine Gallery | SVN Enterprises",
  description:
    "Explore SVN Enterprises' textile machinery factory, manufacturing process, fabric processing machines and installation work in Erode, Tamil Nadu.",
  keywords: [
    "textile machinery factory Erode",
    "textile machine manufacturer gallery",
    "fabric inspection machine manufacturer India",
    "textile processing machinery India",
    "industrial machinery manufacturer Tamil Nadu",
  ],
  alternates: {
    canonical: "https://www.svnenterprises.co.in/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
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
