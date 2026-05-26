import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Contact Us — SVN Enterprises",
  description:
    "Get in touch with SVN Enterprises for industrial and textile machinery enquiries. Visit our Erode facility, call, email, or send us a message online.",
};

const socials = [
  { href: siteConfig.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: siteConfig.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: siteConfig.socials.youtube, label: "YouTube", Icon: FaYoutube },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get in Touch With SVN Enterprises"
        subtitle="Whether you need a custom machine, a quotation, or simply have a question — our team in Erode is ready to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Quick contact tiles */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              lines={[siteConfig.phone, "Mon – Sat"]}
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            />
            <ContactTile
              Icon={FaEnvelope}
              label="Email Us"
              lines={[siteConfig.email, "24×7 response"]}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactTile
              Icon={FaClock}
              label="Working Hours"
              lines={[siteConfig.workingHours, "Closed on Sundays"]}
            />
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-steel-50 section-padding">
        <div className="container-x">
          <SectionTitle
            eyebrow="Send a Message"
            title="Tell us about your project"
            description="Share a few details about your requirement and we'll get back with a tailored response. For urgent enquiries, please call or WhatsApp."
            align="center"
          />

          <div className="grid lg:grid-cols-12 gap-8 mt-4">
            {/* Form */}
            <div className="lg:col-span-7 rounded-2xl bg-white p-6 md:p-10 shadow-soft border border-steel-200">
              <Suspense fallback={<FormSkeleton />}>
                <ContactFormWithParams />
              </Suspense>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-brand-950 text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <h3 className="font-display text-2xl font-semibold">
                    Talk to us directly
                  </h3>
                  <p className="mt-2 text-brand-100 text-sm">
                    Skip the wait — reach our team instantly via WhatsApp or
                    phone.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl bg-accent px-5 py-4 text-white hover:bg-accent-dark transition"
                    >
                      <FaWhatsapp className="h-6 w-6" />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          WhatsApp
                        </div>
                        <div className="font-semibold">{siteConfig.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 text-white hover:bg-white/20 transition"
                    >
                      <FaPhoneAlt className="h-5 w-5" />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          Phone
                        </div>
                        <div className="font-semibold">{siteConfig.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 text-white hover:bg-white/20 transition"
                    >
                      <FaEnvelope className="h-5 w-5" />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          Email
                        </div>
                        <div className="font-semibold">{siteConfig.email}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-soft border border-steel-200">
                <h3 className="font-display text-xl font-semibold text-brand-950">
                  Business Information
                </h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <Row label="Legal Status" value={siteConfig.legalStatus} />
                  <Row label="CEO" value={siteConfig.ceo} />
                  <Row label="Established" value={siteConfig.established} />
                  <Row label="GST Since" value={siteConfig.gstSince} />
                  <Row label="Employees" value={siteConfig.employees} />
                  <Row
                    label="Nature of Business"
                    value={siteConfig.natureOfBusiness}
                  />
                </dl>

                <div className="mt-6 pt-6 border-t border-steel-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-steel-500 font-semibold mb-3">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {socials.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-10 w-10 place-items-center rounded-full bg-steel-100 text-brand-900 hover:bg-brand-900 hover:text-white transition"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Find Us"
            title="Our Factory Location"
            description="Located in the heart of Erode — Tamil Nadu's textile manufacturing hub. We welcome scheduled visits to our facility."
            align="center"
          />
          <div className="overflow-hidden rounded-2xl border border-steel-200 shadow-soft">
            <iframe
              title="SVN Enterprises Location — Erode"
              src="https://www.google.com/maps?q=Erode,Tamil+Nadu,India&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-steel-50 p-5 border border-steel-200">
              <FaMapMarkerAlt className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs uppercase tracking-wider text-steel-500 font-semibold">
                Head Office
              </div>
              <div className="mt-1 text-sm text-brand-950 font-medium">
                {siteConfig.address.line2}, {siteConfig.address.city}
              </div>
            </div>
            <div className="rounded-xl bg-steel-50 p-5 border border-steel-200">
              <FaClock className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs uppercase tracking-wider text-steel-500 font-semibold">
                Working Hours
              </div>
              <div className="mt-1 text-sm text-brand-950 font-medium">
                {siteConfig.workingHours}
              </div>
            </div>
            <div className="rounded-xl bg-steel-50 p-5 border border-steel-200">
              <FaPhoneAlt className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs uppercase tracking-wider text-steel-500 font-semibold">
                Phone
              </div>
              <div className="mt-1 text-sm text-brand-950 font-medium">
                {siteConfig.phone}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small helpers (server components) ---------- */

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
  const inner = (
    <div className="group h-full rounded-2xl border border-steel-200 bg-white p-6 shadow-soft hover:shadow-industrial hover:border-brand-200 transition">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-900 text-white group-hover:bg-accent transition">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-5 text-xs uppercase tracking-[0.2em] text-steel-500 font-semibold">
        {label}
      </div>
      <div className="mt-2 space-y-1">
        {lines.map((l, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "text-brand-950 font-semibold"
                : "text-steel-600 text-sm"
            }
          >
            {l}
          </p>
        ))}
      </div>
    </div>
  );

  return href ? <a href={href}>{inner}</a> : inner;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-steel-500">{label}</dt>
      <dd className="text-brand-950 font-medium text-right">{value}</dd>
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
