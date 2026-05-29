import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBullseye,
  FaEye,
  FaQuoteLeft,
  FaIndustry,
  FaUsers,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";
import { siteConfig, timeline } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about SVN Enterprises — a leading textile machinery manufacturer based in Erode, Tamil Nadu since 2012.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About SVN Enterprises"
        subtitle="A decade of building dependable machinery for textile mills, garment units and commercial laundries across India."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Overview */}
      <section className="section-padding container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-industrial">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/60001_bavcok.jpg"
                alt="SVN Enterprises factory"
                className="h-[680px] w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -left-6 h-24 w-24 stripe-bg rounded-xl" />
          </div>
          <div>
            <SectionTitle
              eyebrow="Company Overview"
              title="SVN Enterprises in brief"
              description=" Established in 2012 and headquartered in Erode, SVN Enterprises is a leading manufacturer of precision-engineered textile processing and finishing machinery. We specialize in delivering reliable, energy-efficient solutions for weaving, dyeing, processing, and garment applications, designed to enhance productivity, quality, and operational efficiency.

Driven by engineering excellence, advanced in-house design capabilities, and a commitment to continuous innovation, we provide durable machinery, customized solutions, and responsive technical support to meet the evolving demands of the textile industry."
            />
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Nature of Business", siteConfig.natureOfBusiness],
                ["Legal Status", siteConfig.legalStatus],
                ["Established", siteConfig.established],
                ["GST Since", siteConfig.gstSince],
                ["CEO", siteConfig.ceo],
                ["Team Size", siteConfig.employees],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-brand-50/70 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-steel-500">
                    {k}
                  </p>
                  <p className="font-semibold text-brand-900 mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-steel-50/60">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            {
              icon: FaBullseye,
              title: "Our Mission",
              text: "To empower the global textile industry with reliable, innovative machinery that enhances operational excellence,fosters sustainable practices,and delivers measurable value to every client",
            },
            {
              icon: FaEye,
              title: "Our Vision",
              text: "To be the foremost pioneer in textile machinery,setting new benchmarks in technology, efficiency,and environmental responsibility while propelling industry growth worldwide.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl bg-white border border-steel-200 p-8 shadow-soft"
            >
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-brand-50" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-700 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">
                  {title}
                </h3>
                <p className="mt-3 text-steel-600 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Our Journey"
          title="Company history at a glance"
          description="Key milestones in the SVN Enterprises story so far."
          align="center"
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-700 via-accent to-brand-300" />
          <div className="space-y-10">
            {timeline.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={t.year}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    isLeft ? "" : "md:[direction:rtl]"
                  }`}
                >
                  <div className="md:[direction:ltr]">
                    <div
                      className={`relative pl-12 md:pl-0 ${
                        isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      }`}
                    >
                      <span className="absolute left-0 md:hidden grid h-8 w-8 place-items-center rounded-full bg-brand-700 text-white text-xs font-bold ring-4 ring-white">
                        {i + 1}
                      </span>
                      <span className="inline-block rounded-full bg-accent/15 text-accent-dark text-xs font-bold uppercase tracking-widest px-3 py-1">
                        {t.year}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold text-brand-900">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:[direction:ltr]" />
                  <span className="hidden md:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white border-2 border-brand-700 text-brand-700 text-xs font-bold shadow-soft">
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="section-padding bg-brand-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-30" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Manufacturing Excellence"
              title="A facility built around quality"
              description="Our Erode facility is organised into clear workstations — metal fabrication, welding, assembly, electricals and final QC — so every machine passes through structured checkpoints."
              light
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: FaIndustry, label: "Modern fabrication setup" },
                { icon: FaTools, label: "Skilled assembly team" },
                { icon: FaUsers, label: "Experienced fitters" },
                { icon: FaIndustry, label: "In-house QC" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-sm text-brand-100">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-industrial">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1779959705/15850_kgshjp.jpg"
              alt="Factory infrastructure"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-50/40 border border-steel-200 p-8 md:p-16">
          <FaQuoteLeft className="absolute top-8 right-12 h-32 w-32 text-brand-100/60" />
          <div className="relative max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
              Message from our CEO
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand-900">
              &ldquo;Build it right the first time.&rdquo;
            </h2>
            <p className="mt-5 text-steel-600 leading-relaxed">
              For more than a decade, SVN Enterprises has stood for one simple
              principle — build it right the first time. We treat every order,
              big or small, with the same seriousness, because our customers
              depend on these machines to run their business. Thank you for
              trusting us. We will continue to earn that trust, one machine at
              a time.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white font-bold">
                SG
              </div>
              <div>
                <p className="font-display text-lg font-bold text-brand-900">
                  S Guru
                </p>
                <p className="text-sm text-steel-600">CEO, SVN Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding container-x">
        <SectionTitle
          eyebrow="Our Team"
          title="The people behind the machines"
          description="A compact, experienced team of engineers, fabricators and field technicians."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "Leadership", count: "1", note: "CEO & Founder" },
            { role: "Engineering & Design", count: "2", note: "Mech. Engineers" },
            { role: "Fabrication & Assembly", count: "5", note: "Skilled Workers" },
            { role: "Service & Support", count: "2", note: "Field Technicians" },
          ].map((t) => (
            <div
              key={t.role}
              className="rounded-2xl border border-steel-200 bg-white p-6 text-center shadow-soft hover:shadow-industrial transition-shadow"
            >
              <p className="font-display text-5xl font-bold text-brand-700">
                {t.count}
              </p>
              <p className="mt-3 font-semibold text-brand-900">{t.role}</p>
              <p className="text-xs text-steel-500 mt-1">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="section-padding bg-steel-50/60">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Why Customers Trust Us"
              title="Quiet, consistent reliability"
              description="We don't oversell. We deliver on time, install properly, and stand behind every machine we make."
            />
            <ul className="space-y-3">
              {[
                "Transparent quotations — no surprise costs",
                "Honest delivery timelines",
                "On-site installation & operator training",
                "Long-standing spare parts availability",
                "Direct relationship with our CEO and senior team",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-steel-700 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8">
              Get in touch <FaArrowRight />
            </Link>
          </div>
          <StatsCounter />
        </div>
      </section>

      <CTASection
        title="Looking for a manufacturing partner you can rely on?"
        description="We'd be glad to discuss your project, share specifications, and provide an honest quote."
      />
    </>
  );
}
