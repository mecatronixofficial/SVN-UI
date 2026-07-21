"use client";

import { useState } from "react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

export default function ContactForm({
  defaultProduct = "",
}: {
  defaultProduct?: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    product: defaultProduct,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSubmitError("");
  }

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const whatsappMessage = [
    `Hello ${siteConfig.name},`,
    "",
    "I want to send an enquiry.",
    `Name: ${form.name || "-"}`,
    `Email: ${form.email || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Product: ${form.product || "Not specified"}`,
    "",
    `Message: ${form.message || "-"}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(data?.error ?? "Unable to send enquiry.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        product: defaultProduct,
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send enquiry. Please try WhatsApp or call us."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center"
      >
        <FaCheckCircle className="mx-auto h-14 w-14 text-green-600" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-900">
          Inquiry Received
        </h3>
        <p className="mt-2 text-steel-600">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setErrors({});
            setSubmitError("");
          }}
          className="btn-primary mx-auto mt-6"
        >
          <FaEnvelopeOpenText /> Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  const inputCls =
    "w-full rounded-md border border-steel-300 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-steel-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-steel-700 mb-1.5">
            Name <span className="text-accent-dark">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputCls}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-steel-700 mb-1.5">
            Email <span className="text-accent-dark">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputCls}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-steel-700 mb-1.5">
            Phone <span className="text-accent-dark">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 ..."
            className={inputCls}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-steel-700 mb-1.5">
            Product Interest
          </label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className={inputCls}
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other">Other / General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-steel-700 mb-1.5">
          Message <span className="text-accent-dark">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your requirement, fabric width, capacity, timeline..."
          className={`${inputCls} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="w-full h-auto flex flex-row items-center justify-between">
        <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <FaPaperPlane /> {submitting ? "Sending..." : "Send Email Inquiry"}
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          if (!validate()) event.preventDefault();
        }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-600 px-5 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white sm:w-auto"
      >
        <FaWhatsapp /> Send on WhatsApp
      </a>
      </div>
      {submitError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </p>
      )}
      <p className="text-xs text-steel-500">
        Your details are kept confidential. We respond within one business day.
      </p>
    </form>
  );
}
