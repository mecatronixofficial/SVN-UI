import type { Metadata } from "next";
import Link from "next/link";
import { FaQuestionCircle, FaHeadset, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ — Learn More From SVN Enterprises",
  description:
    "Frequently asked questions about SVN Enterprises, our textile and industrial machinery, manufacturing capability, customization, after-sales support and more.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        title="Learn More From FAQ"
        subtitle="Answers to the most common questions about our machinery, manufacturing process, customization options and ongoing support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        bgImage="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1920&auto=format&fit=crop&q=80"
      />

      {/* FAQ list */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: intro */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <SectionTitle
                  eyebrow="Help Center"
                  title="Got questions? We've got answers."
                  description="Browse common questions about our products, services, lead times and how we work with clients across India."
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
                      <FaQuestionCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-950">8+ Common Questions</h3>
                      <p className="text-sm text-steel-600 mt-1">
                        Covering products, customization, support and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
                      <FaHeadset className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-950">Still need help?</h3>
                      <p className="text-sm text-steel-600 mt-1">
                        Our team is happy to walk you through any specific requirement.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-brand-950 text-white p-6">
                    <h3 className="font-display text-xl font-semibold">Talk to an expert</h3>
                    <p className="text-sm text-brand-100 mt-2">
                      Reach out via WhatsApp or email for a faster response.
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent w-full justify-center"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="btn-outline w-full justify-center border-white/30 text-white hover:bg-white hover:text-brand-950"
                      >
                        <FaEnvelope className="h-5 w-5" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: accordion */}
            <div className="lg:col-span-8">
              <FAQAccordion items={faqs} />

              <div className="mt-12 rounded-2xl border border-dashed border-steel-300 bg-white p-8 text-center">
                <p className="text-steel-600">
                  Didn't find what you were looking for?
                </p>
                <Link
                  href="/contact"
                  className="btn-primary mt-5 inline-flex"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-16">
        <div className="container-x">
          <CTASection
            title="Let's build the right machine for your operation"
            description="Share your requirement and our engineers will get back to you with a tailored proposal within 24 working hours."
          />
        </div>
      </section>
    </main>
  );
}
