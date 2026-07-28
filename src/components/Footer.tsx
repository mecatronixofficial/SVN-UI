import Link from "next/link";
import Image from "next/image";
import {
  FaIndustry,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 text-brand-100 mt-24 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-1 stripe-bg" />

      <div className="container-x relative py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-white shadow-soft group-hover:bg-brand-800 transition-colors">
                          <Image
                            src="/images/logo.png"
                            alt="SVN Logo"
                            width={44}
                            height={44}
                            className="object-contain"
                          />
                        </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold text-white">
                SVN Enterprises
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-300">
                Industrial Machinery
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm text-brand-200 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: FaFacebookF, href: siteConfig.socials.facebook },
              { icon: FaInstagram, href: siteConfig.socials.instagram },
              { icon: FaLinkedinIn, href: siteConfig.socials.linkedin },
              { icon: FaYoutube, href: siteConfig.socials.youtube },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-md border border-brand-700 text-brand-200 hover:border-accent hover:text-accent transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/gallery", label: "Gallery" },
              { href: "/testimonials", label: "Testimonials" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-brand-200 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">
            Products
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {products.slice(-6).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-brand-200 hover:text-accent transition-colors"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">
            Contact Info
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
              <span className="text-brand-200">
                {siteConfig.address.line2}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.pincode},{" "}
                {siteConfig.address.country}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-brand-200 hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-200 hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
              <span className="text-brand-200">{siteConfig.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Business info strip */}
      <div className="relative border-t border-brand-800/60">
        <div className="container-x py-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-xs text-brand-300">
          <div>
            <span className="block text-brand-400 uppercase tracking-widest text-[10px] mb-1">
              Nature of Business
            </span>
            {siteConfig.natureOfBusiness}
          </div>
          <div>
            <span className="block text-brand-400 uppercase tracking-widest text-[10px] mb-1">
              Legal Status
            </span>
            {siteConfig.legalStatus}
          </div>
          <div>
            <span className="block text-brand-400 uppercase tracking-widest text-[10px] mb-1">
              GST Since
            </span>
            {siteConfig.gstSince}
          </div>
          <div>
            <span className="block text-brand-400 uppercase tracking-widest text-[10px] mb-1">
              CEO
            </span>
            {siteConfig.ceo}
          </div>
        </div>
      </div>

      <div className="relative border-t border-brand-800/60">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-300">
          <p>© 2026 SVN Enterprises. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Designed By <span className="hover:text-red-600">Mecatronix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
