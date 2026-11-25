import type { Metadata } from "next";
import { createMetadata, pageSeo } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";
import Link from "next/link";
import moment from "moment";

import {
  FaShieldAlt,
  FaAward,
  FaIndustry,
  FaSmile,
  FaUsers,
  FaHeadset,
  FaArrowRight,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";

import HeroSection from "@/components/HeroSection";
import OpeningCard from "@/components/OpeningCard";
import SectionTitle from "@/components/SectionTitle";
import StatsCounter from "@/components/StatsCounter";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import FeaturedProductsSlider from "@/components/FeaturedProductsSlider";
import CTASection from "@/components/CTASection";

import { products } from "@/data/products";
import { faqs } from "@/data/faqs";
import {
  whyChooseUs,
  latestUpdates,
  siteConfig,
} from "@/data/site";

export const metadata: Metadata = createMetadata(pageSeo.home);

/* -------------------------------------------------------------------------- */
/*                                  ICON MAP                                  */
/* -------------------------------------------------------------------------- */

const iconMap = {
  FaShieldAlt,
  FaAward,
  FaIndustry,
  FaSmile,
  FaUsers,
  FaHeadset,
} as const;

/* -------------------------------------------------------------------------- */
/*                                 HOME PAGE                                  */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const featured = products;

  return (
    <>
      <PageStructuredData page="home" />

      <OpeningCard />

      {/* Hero Section */}
      <HeroSection />

      {/* Company Introduction */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-industrial">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1781762583/WhatsApp_Image_2026-06-18_at_11.23.34_AM_1_rlufwq.jpg"
                alt="SVN Enterprises textile machinery manufacturing facility in Erode Tamil Nadu"
                className="h-[500px] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl p-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  Established
                </p>

                <p className="font-display text-3xl font-bold text-accent-dark">
                  2012
                </p>

                <p className="mt-1 text-xs text-accent-dark">
                  Erode, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="stripe-bg absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-xl md:block" />
          </div>

          <div>
            <SectionTitle
              eyebrow="About SVN Enterprises"
              title="Engineering reliable machinery for India's textile industry"
              description="SVN Enterprises is a leading textile machinery manufacturer based in Erode, Tamil Nadu, India. Established in October 2012, we manufacture reliable textile processing and industrial machinery with a strong commitment to quality, service and customer satisfaction."
            />

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["CEO", siteConfig.ceo],
                ["Legal Status", siteConfig.legalStatus],
                ["Team Size", siteConfig.employees],
                ["GST Since", siteConfig.gstSince],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg bg-brand-50/60 px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-widest text-steel-500">
                    {key}
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-brand-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Learn More
                <FaArrowRight aria-hidden="true" />
              </Link>

              <Link href="/products" className="btn-outline">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-steel-50/40">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Built on trust, engineered to last"
            description="Discover why textile manufacturers choose SVN Enterprises for reliable machines, customized solutions, quality engineering and responsive customer support."
            align="center"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon =
                iconMap[item.icon as keyof typeof iconMap];

              return (
                <article
                  key={item.title || index}
                  className="group relative overflow-hidden rounded-2xl border border-steel-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-industrial"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-700 text-white transition-colors group-hover:bg-accent group-hover:text-brand-900">
                    {Icon && (
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h2 className="mt-5 font-display text-xl font-bold text-brand-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {item.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 font-display text-3xl text-brand-50 transition-colors group-hover:text-brand-100"
                  >
                    0{index + 1}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Textile Machinery */}
      <FeaturedProductsSlider featured={featured} />

      {/* Company Statistics */}
      <section className="section-padding relative isolate overflow-hidden bg-brand-950 text-white">
        <div className="blueprint-bg absolute inset-0 opacity-30" />

        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/ddpfxvydm/image/upload/v1779959028/29631_neyozz.jpg')",
          }}
        />

        <div className="container-x relative">
          <SectionTitle
            eyebrow="Our Numbers"
            title="A track record built over a decade"
            description="Real achievements from our textile machinery manufacturing, delivery and service operations across South India."
            align="center"
            light
          />

          <StatsCounter light />
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Our Process"
          title="From machine requirement to final delivery"
          description="Our transparent four-step manufacturing process ensures every textile machine is designed, fabricated, inspected and delivered according to the customer's requirements."
          align="center"
        />

        <ProcessTimeline />
      </section>

      {/* FAQ Preview */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Frequently Asked Questions"
              title="Learn more about our textile machinery"
              description="Find answers about our textile machines, customization options, manufacturing process, delivery, installation and after-sales service."
            />

            <Link href="/faq" className="btn-outline">
              View all FAQs
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      {/* Call To Action */}
      <CTASection />

      {/* Latest Updates and Contact */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Latest Updates */}
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Latest Updates"
              title="News from the factory floor"
              description="Read recent machine releases, manufacturing updates, announcements and milestones from SVN Enterprises."
            />

            <div className="space-y-4">
              {latestUpdates.map((update) => (
                <article
                  key={update.id}
                  className="group rounded-xl border border-steel-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-industrial"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-semibold uppercase tracking-wider text-accent-dark">
                      <FaTag
                        className="h-2.5 w-2.5"
                        aria-hidden="true"
                      />

                      {update.tag}
                    </span>

                    <time
                      dateTime={moment(update.date).format(
                        "YYYY-MM-DD",
                      )}
                      className="inline-flex items-center gap-1.5 text-steel-500"
                      title={moment(update.date).format(
                        "MMMM Do, YYYY",
                      )}
                    >
                      <FaCalendarAlt
                        className="h-3 w-3"
                        aria-hidden="true"
                      />

                      {moment(update.date).fromNow()}
                    </time>
                  </div>

                  <h2 className="mt-3 font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
                    {update.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {update.excerpt}
                  </p>

                  <p className="mt-2 text-[11px] text-steel-400">
                    Posted on{" "}
                    {moment(update.date).format("DD MMM YYYY")}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Contact SVN Enterprises"
              title="Have a textile machinery requirement?"
              description="Contact our team by phone, email, WhatsApp or inquiry form. Share your machine type, production requirement and customization details."
            />

            <div className="rounded-2xl border border-steel-200 bg-white p-6 shadow-soft md:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
                    Address
                  </h2>

                  <address className="mt-2 text-sm not-italic leading-relaxed text-brand-900">
                    {siteConfig.address.line2}
                    <br />

                    {siteConfig.address.city},{" "}
                    {siteConfig.address.state}
                    <br />

                    {siteConfig.address.pincode},{" "}
                    {siteConfig.address.country}
                  </address>
                </div>

                <div>
                  <h2 className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
                    Phone and Email
                  </h2>

                  <p className="mt-2 text-sm text-brand-900">
                    <a
                      href={`tel:${siteConfig.phone.replace(
                        /\s/g,
                        "",
                      )}`}
                      className="hover:text-accent-dark"
                      aria-label={`Call ${siteConfig.name}`}
                    >
                      {siteConfig.phone}
                    </a>
                  </p>

                  <p className="text-sm text-brand-900">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-accent-dark"
                      aria-label={`Email ${siteConfig.name}`}
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
                    Working Hours
                  </h2>

                  <p className="mt-2 text-sm text-brand-900">
                    {siteConfig.workingHours}
                  </p>
                </div>

                <div>
                  <h2 className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
                    Chief Executive Officer
                  </h2>

                  <p className="mt-2 text-sm text-brand-900">
                    {siteConfig.ceo}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Contact Form
                  <FaArrowRight aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  aria-label={`Contact ${siteConfig.name} on WhatsApp`}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
