import type { Metadata } from "next";
import { createMetadata, pageSeo } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";
import { Suspense } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ContactFormWithParams from "./ContactFormWithParams";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createMetadata(pageSeo.contact);

const socials = [
  {
    href: siteConfig.socials.facebook,
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: siteConfig.socials.instagram,
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: siteConfig.socials.linkedin,
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: siteConfig.socials.youtube,
    label: "YouTube",
    Icon: FaYoutube,
  },
].filter((social) => Boolean(social.href));

export default function ContactPage() {
  return (
    <main>
      <PageStructuredData page="contact" type="ContactPage" />

      <PageHero
        title="Contact SVN Enterprises"
        subtitle="Contact our team in Erode for textile machinery quotations, customized machines, installation, service and technical support."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact",
          },
        ]}
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Quick contact tiles */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactTile
              Icon={FaMapMarkerAlt}
              label="Visit Us"
              lines={[
                siteConfig.address.line2,
                `${siteConfig.address.city}, ${siteConfig.address.state}`,
                `${siteConfig.address.country} — ${siteConfig.address.pincode}`,
              ]}
            />

            <ContactTile
              Icon={FaPhoneAlt}
              label="Call Us"
              lines={[siteConfig.phone, "Monday to Saturday"]}
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            />

            <ContactTile
              Icon={FaEnvelope}
              label="Email Us"
              lines={[siteConfig.email, "Send your machinery requirement"]}
              href={`mailto:${siteConfig.email}`}
            />

            <ContactTile
              Icon={FaClock}
              label="Working Hours"
              lines={[
                siteConfig.workingHours,
                "Scheduled factory visits available",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact form and business details */}
      <section className="section-padding bg-steel-50">
        <div className="container-x">
          <SectionTitle
            eyebrow="Textile Machinery Enquiry"
            title="Tell us about your machinery requirement"
            description="Share your required machine type, production capacity, specifications, quantity and delivery location. Our team will provide a suitable quotation and technical response."
            align="center"
          />

          <div className="mt-4 grid gap-8 lg:grid-cols-12">
            <div className="rounded-2xl border border-steel-200 bg-white p-6 shadow-soft md:p-10 lg:col-span-7">
              <Suspense fallback={<FormSkeleton />}>
                <ContactFormWithParams />
              </Suspense>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-brand-950 p-8 text-white">
                <div className="blueprint-bg pointer-events-none absolute inset-0 opacity-30" />

                <div className="relative">
                  <h2 className="font-display text-2xl font-semibold">
                    Contact our textile machinery team
                  </h2>

                  <p className="mt-2 text-sm text-brand-100">
                    Call or WhatsApp us directly for quotations, customized
                    textile machinery, installation and service enquiries.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl bg-accent px-5 py-4 text-white transition hover:bg-accent-dark"
                      aria-label={`Contact ${siteConfig.name} on WhatsApp`}
                    >
                      <FaWhatsapp
                        className="h-6 w-6"
                        aria-hidden="true"
                      />

                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          WhatsApp
                        </div>

                        <div className="font-semibold">
                          {siteConfig.phone}
                        </div>
                      </div>
                    </a>

                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
                      aria-label={`Call ${siteConfig.name}`}
                    >
                      <FaPhoneAlt
                        className="h-5 w-5"
                        aria-hidden="true"
                      />

                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          Phone
                        </div>

                        <div className="font-semibold">
                          {siteConfig.phone}
                        </div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
                      aria-label={`Email ${siteConfig.name}`}
                    >
                      <FaEnvelope
                        className="h-5 w-5"
                        aria-hidden="true"
                      />

                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          Email
                        </div>

                        <div className="font-semibold">
                          {siteConfig.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-steel-200 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl font-semibold text-brand-950">
                  SVN Enterprises business information
                </h2>

                <dl className="mt-5 space-y-3 text-sm">
                  <Row
                    label="Legal Status"
                    value={siteConfig.legalStatus}
                  />

                  <Row label="CEO" value={siteConfig.ceo} />

                  <Row
                    label="Established"
                    value={siteConfig.established}
                  />

                  <Row
                    label="GST Since"
                    value={siteConfig.gstSince}
                  />

                  <Row
                    label="Employees"
                    value={siteConfig.employees}
                  />

                  <Row
                    label="Nature of Business"
                    value={siteConfig.natureOfBusiness}
                  />
                </dl>

                {socials.length > 0 && (
                  <div className="mt-6 border-t border-steel-200 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-steel-500">
                      Follow SVN Enterprises
                    </p>

                    <div className="flex items-center gap-3">
                      {socials.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${siteConfig.name} on ${label}`}
                          className="grid h-10 w-10 place-items-center rounded-full bg-steel-100 text-brand-900 transition hover:bg-brand-900 hover:text-white"
                        >
                          <Icon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Factory location */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="SVN Enterprises Location"
            title="Visit our textile machinery factory in Erode"
            description="Our manufacturing facility is located in Erode, Tamil Nadu, one of India's important textile and industrial centres. Contact us before visiting to schedule a factory meeting."
            align="center"
          />

          <div className="overflow-hidden rounded-2xl border border-steel-200 shadow-soft">
            <iframe
              title="SVN Enterprises textile machinery factory location in Erode Tamil Nadu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9716146101914!2d77.68880709999999!3d11.3367839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fcaacb8403b%3A0x3768fe5ee06a2921!2sSVN%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1780050954312!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-steel-200 bg-steel-50 p-5">
              <FaMapMarkerAlt
                className="h-5 w-5 text-accent"
                aria-hidden="true"
              />

              <h2 className="mt-3 text-xs font-semibold uppercase tracking-wider text-steel-500">
                Head Office
              </h2>

              <address className="mt-1 text-sm font-medium not-italic text-brand-950">
                {siteConfig.address.line2},{" "}
                {siteConfig.address.city}
              </address>
            </div>

            <div className="rounded-xl border border-steel-200 bg-steel-50 p-5">
              <FaClock
                className="h-5 w-5 text-accent"
                aria-hidden="true"
              />

              <h2 className="mt-3 text-xs font-semibold uppercase tracking-wider text-steel-500">
                Working Hours
              </h2>

              <p className="mt-1 text-sm font-medium text-brand-950">
                {siteConfig.workingHours}
              </p>
            </div>

            <div className="rounded-xl border border-steel-200 bg-steel-50 p-5">
              <FaPhoneAlt
                className="h-5 w-5 text-accent"
                aria-hidden="true"
              />

              <h2 className="mt-3 text-xs font-semibold uppercase tracking-wider text-steel-500">
                Phone
              </h2>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="mt-1 block text-sm font-medium text-brand-950 hover:text-accent-dark"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactTile({
  Icon,
  label,
  lines,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="group h-full rounded-2xl border border-steel-200 bg-white p-6 shadow-soft transition hover:border-brand-200 hover:shadow-industrial">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-900 text-white transition group-hover:bg-accent">
        <Icon className="h-5 w-5" />
      </div>

      <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-steel-500">
        {label}
      </h2>

      <div className="mt-2 space-y-1">
        {lines.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={
              index === 0
                ? "font-semibold text-brand-950"
                : "text-sm text-steel-600"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a href={href} aria-label={`${label}: ${lines[0]}`}>
      {content}
    </a>
  ) : (
    content
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-steel-500">{label}</dt>

      <dd className="text-right font-medium text-brand-950">
        {value}
      </dd>
    </div>
  );
}

function FormSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-12 rounded-lg bg-steel-100" />
      <div className="h-12 rounded-lg bg-steel-100" />
      <div className="h-12 rounded-lg bg-steel-100" />
      <div className="h-32 rounded-lg bg-steel-100" />
      <div className="h-12 w-40 rounded-lg bg-steel-100" />
    </div>
  );
}
