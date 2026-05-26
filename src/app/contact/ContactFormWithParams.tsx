"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormWithParams() {
  const params = useSearchParams();
  const productParam = params.get("product") ?? "";

  return <ContactForm defaultProduct={productParam} />;
}
