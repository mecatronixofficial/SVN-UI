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
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import StatsCounter from "@/components/StatsCounter";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import FeaturedProductsSlider from "@/components/FeaturedProductsSlider";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whyChooseUs, latestUpdates, siteConfig } from "@/data/site";

const iconMap = {
  FaShieldAlt,
  FaAward,
  FaIndustry,
  FaSmile,
  FaUsers,
  FaHeadset,
} as const;

export default function Home() {
  const featured = products;

  return (
    <>
      <HeroSection />

      {/* Company Introduction */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-industrial">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1781762583/WhatsApp_Image_2026-06-18_at_11.23.34_AM_1_rlufwq.jpg"
                alt="SVN Enterprises manufacturing"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl   p-2">
                <p className="text-xs uppercase tracking-widest text-accent-dark font-semibold">
                  Established
                </p>
                <p className="font-display text-3xl font-bold text-accent-dark">
                  2012
                </p>
                <p className="text-xs text-accent-dark mt-1">
                  Erode, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 h-32 w-32 stripe-bg rounded-xl" />
          </div>
          <div>
            <SectionTitle
              eyebrow="About SVN Enterprises"
              title="Engineering reliable machinery for India's textile industry"
              description="SVN Enterprises is a leading Manufacturer based in Erode, Tamil Nadu, India. Established in October 2012, the company is committed to delivering high-quality industrial and textile machinery solutions with reliable service and customer satisfaction."
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                ["CEO", siteConfig.ceo],
                ["Legal Status", siteConfig.legalStatus],
                ["Team Size", siteConfig.employees],
                ["GST Since", siteConfig.gstSince],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-brand-50/60 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-steel-500">
                    {k}
                  </p>
                  <p className="text-sm font-semibold text-brand-900 mt-0.5">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Learn More <FaArrowRight />
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
            description="What our clients value most about working with SVN Enterprises."
            align="center"
        
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-steel-200 bg-white p-6 shadow-soft hover:shadow-industrial hover:-translate-y-1 transition-all"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-700 text-white group-hover:bg-accent group-hover:text-brand-900 transition-colors">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="absolute top-4 right-4 font-display text-3xl text-brand-50 group-hover:text-brand-100 transition-colors">
                    0{i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
     <FeaturedProductsSlider featured={featured} />

      {/* Stats */}
      <section className="relative isolate section-padding bg-brand-950 text-white overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-30" />
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
            description="Real metrics from our day-to-day work — built, delivered and serviced across South India."
            align="center"
            light
          />
          <StatsCounter light />
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Our Process"
          title="From requirement to delivery"
          description="A simple, transparent 4-step workflow that ensures every machine we ship meets your expectations."
          align="center"
        />
        <ProcessTimeline />
      </section>


      {/* FAQ Preview */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              eyebrow="FAQ"
              title="Learn more from FAQ"
              description="Answers to the questions we hear most often. Don't see yours? Get in touch."
            />
            <Link href="/faq" className="btn-outline">
              View all FAQs <FaArrowRight />
            </Link>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Get In Touch / Latest Updates */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Latest Updates"
              title="News from the factory floor"
              description="Recent announcements, releases and milestones from SVN Enterprises."
            />
            <div className="space-y-4">
              {latestUpdates.map((u) => (
                <article
                  key={u.id}
                  className="group rounded-xl border border-steel-200 bg-white p-5 shadow-soft hover:shadow-industrial hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 text-accent-dark px-3 py-1 font-semibold uppercase tracking-wider">
                      <FaTag className="h-2.5 w-2.5" /> {u.tag}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-steel-500"
                      title={moment(u.date).format("MMMM Do, YYYY")}
                    >
                      <FaCalendarAlt className="h-3 w-3" />
                      {moment(u.date).fromNow()}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                    {u.excerpt}
                  </p>
                  <p className="mt-2 text-[11px] text-steel-400">
                    Posted on {moment(u.date).format("DD MMM YYYY")}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Get In Touch"
              title="Have a project in mind?"
              description="Reach out by phone, email or send a quick inquiry — our team will respond within one business day."
            />
            <div className="rounded-2xl border border-steel-200 bg-white p-6 md:p-8 shadow-soft">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-dark font-semibold">
                    Address
                  </p>
                  <p className="mt-2 text-sm text-brand-900 leading-relaxed">
                    {siteConfig.address.line2},<br />
                    {siteConfig.address.city}, {siteConfig.address.state}
                    <br />
                    {siteConfig.address.pincode}, {siteConfig.address.country}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-dark font-semibold">
                    Phone & Email
                  </p>
                  <p className="mt-2 text-sm text-brand-900">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="hover:text-accent-dark"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p className="text-sm text-brand-900">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-accent-dark"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-dark font-semibold">
                    Working Hours
                  </p>
                  <p className="mt-2 text-sm text-brand-900">
                    {siteConfig.workingHours}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-dark font-semibold">
                    CEO
                  </p>
                  <p className="mt-2 text-sm text-brand-900">{siteConfig.ceo}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Contact Form <FaArrowRight />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
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
