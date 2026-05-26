"use client";

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
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
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
            <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-700 text-white shadow-soft group-hover:bg-brand-800 transition-colors">
              <FaIndustry className="h-5 w-5" />
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

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-brand-900 hover:bg-steel-100"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
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
