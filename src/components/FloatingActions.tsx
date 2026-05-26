"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
          "Hi SVN Enterprises, I would like to know more about your products."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-industrial hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 -z-10" />
      </motion.a>
      <motion.a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        className="grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-white shadow-soft hover:bg-brand-800 transition-colors lg:hidden"
      >
        <FaPhoneAlt className="h-4 w-4" />
      </motion.a>
    </div>
  );
}
