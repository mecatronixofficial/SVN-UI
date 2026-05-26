export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category:
    | "Factory Images"
    | "Machines"
    | "Manufacturing Process"
    | "Product Showcase"
    | "Team & Infrastructure";
  height?: "short" | "medium" | "tall";
}

export interface Update {
  id: number;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tag: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
