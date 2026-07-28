"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaIndustry, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  // { href: "/testimonials", label: "Testimonials" },
  // { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block fixed top-0 inset-x-0 z-40 bg-brand-900 text-brand-100 text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <p className="opacity-90">
            GST Registered Manufacturer · Established 2012 · Erode, Tamil Nadu
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <FaPhoneAlt /> {siteConfig.phone}
            </a>
            <span>·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur shadow-soft md:top-0"
            : "md:top-8 top-0 bg-white"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-3 md:py-4">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="SVN Enterprises Home"
          >
            <span className="relative h-12 w-12 flex-shrink-0">
  <Image
    src="/images/logo.png"
    alt="SVN Logo"
    fill
    className="object-contain"
    priority
  />
</span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-brand-900">
                SVN Enterprises
              </span>
              <span className="text-[10px] uppercase tracking-widest text-steel-500">
                Industrial Machinery
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-brand-700"
                        : "text-steel-700 hover:text-brand-700"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="/contact"
            className="relative hidden lg:flex items-center gap-3 text-sm group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get a Quote</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-brand-900 hover:bg-steel-100"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-steel-100 bg-white overflow-hidden"
            >
              <ul className="container-x py-4 space-y-1">
                {navLinks.map((link) => {
                  const active =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                          active
                            ? "bg-brand-50 text-brand-700"
                            : "text-steel-700 hover:bg-steel-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Link href="/contact" className="btn-primary w-full">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
