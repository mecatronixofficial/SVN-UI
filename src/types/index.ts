export type Product = {
  machineNumber: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;

  video?: string;
  image?: string;

  features: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};
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

export type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  name?: string;
  slug?: string;
  height: "short" | "medium" | "tall";
  category:
    | "Inspection Machines"
    | "Opening Machines"
    | "Book Folding Machine"
    | "Wrapping Machines"
    | "Material Handling"
    | "Batching Machines"
    | "Rolling Machines"
    | "Processing Machines"
    | "Dyeing Machines"
    | "Garmenting Machines"
    | "Material Handling Equipments"
    | "Finishing Machines"
    | "Drying Machines"
    | "Washing Machines"
    | "Factory Images";
};

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
