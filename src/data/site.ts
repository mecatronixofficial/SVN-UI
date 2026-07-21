import type { Update, ProcessStep } from "@/types";

export const siteConfig = {
  name: "SVN Enterprises",
  url: "https://www.svnenterprises.co.in",
  logoUrl: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1784030005/logo_svn_dcmq5b.png",

  tagline: "Reliable Industrial & Textile Machinery Manufacturer Since 2012",

  description:
    "SVN Enterprises is a leading manufacturer of textile machinery, sewing machines, washer extractors and fabric inspection systems based in Erode, Tamil Nadu.",
  ceo: "Randhir Singh",
  established: "2012",
  gstSince: "July 2017",
  employees: "Up to 18 People",
  legalStatus: "Partnership Firm",
  natureOfBusiness: "Manufacturer",
  additionalBusiness: ["Retail Business", "Factory / Manufacturing"],

  address: {
    line1: "SVN Enterprises",
    line2:
      "Subramaniam Nagar, Vivekanandar Salai, Veerappampalayam, Thindal",
    city: "Erode",
    state: "Tamil Nadu",
    country: "India",
    pincode: "638012",
  },
  phone: "9994364935",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9344035935",
  email: "svnindustries2012@gmail.com ",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM",

  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const stats = [
  { value: 14, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Machines Delivered" },
  { value: 250, suffix: "+", label: "Valuable Customers" },
  {
    value: "Pan India & Asian Countries",
    suffix: "",
    label: "Cities Served",
  },
];

export const whyChooseUs = [
  {
    title: "Trusted Since 2012",
    description:
      "Over a decade of consistent service to the textile and industrial sector across South India.",
    icon: "FaShieldAlt",
  },
  {
    title: "Quality Assurance",
    description:
      "Every machine is inspected at multiple stages — raw material, fabrication, assembly and final QC.",
    icon: "FaAward",
  },
  {
    title: "Modern Manufacturing",
    description:
      "Equipped with up-to-date metal fabrication, welding and assembly capabilities.",
    icon: "FaIndustry",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Long-standing customers and repeat orders reflect the trust we have built over years.",
    icon: "FaSmile",
  },
  {
    title: "Skilled Workforce",
    description:
      "Experienced fitters, welders and engineers who understand the textile process inside out.",
    icon: "FaUsers",
  },
  {
    title: "Reliable Support",
    description:
      "Prompt after-sales service, spare parts availability and ongoing technical assistance.",
    icon: "FaHeadset",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "We discuss your production needs, machine specifications, fabric machine dimensions, machine capacity, and optic fabric requirements.",
    icon: "FaClipboardList",
  },
  {
    step: 2,
    title: "Machine Manufacturing",
    description:
      "Our team prepares CAD diagrams and handles laser cutting, welding, fabrication, powder coating, and complete manufacturing support.",
    icon: "FaTools",
  },
  {
    step: 3,
    title: "Quality Inspection",
    description:
      "Every unit goes through a structured QC checklist before it leaves our facility.",
    icon: "FaSearchPlus",
  },
  {
    step: 4,
    title: "Delivery & Support",
    description:
      "Before delivery, our team conducts a complete inspection and checks all machine parameters to ensure quality before dispatch.",
    icon: "FaTruck",
  },
];

export const timeline = [
  {
    year: "2012",
    title: "Company Founded",
    description:
      "SVN Enterprises was established in Erode with a focus on textile machinery manufacturing.",
  },
  {
    year: "2015",
    title: "Product Range Expanded",
    description:
      "Added industrial sewing machines and rolling machines to our manufacturing line.",
  },
  {
    year: "2017",
    title: "GST Registration",
    description:
      "Formally GST-registered in July 2017, expanding our reach across multiple states.",
  },
  {
    year: "2018",
    title: "Exports Global Country",
    description:
      "Began exporting our textile machinery to international markets, including several Asian countries.",
  },
  {
    year: "2019",
    title: "Fabric Inspection Line",
    description:
      "Launched our flagship Inspection Cum Rolling Machine series with strong market response.",
  },
  {
    year: "2025",
    title: "250+ Clients & Growing",
    description:
      "Crossed 250 satisfied clients across 25+ cities, with continued investment in capability.",
  },
];

export const latestUpdates: Update[] = [
  {
    id: 1,
    title: "New 110-inch Fabric Inspection Machine Released",
    excerpt:
      "We've added an extra-wide variant of our Fabric Inspection Machine to support large-format textile units.",
    date: "2026-04-12",
    tag: "Product Launch",
  },
  {
    id: 2,
    title: "Workshop on Textile QC Best Practices",
    excerpt:
      "Hosted production managers from Tiruppur for a hands-on workshop on improving fabric inspection workflow.",
    date: "2026-03-04",
    tag: "Event",
  },
  {
    id: 3,
    title: "Service Network Expanded to Bangalore",
    excerpt:
      "Our after-sales technicians are now available for on-site service across Bangalore and surrounding areas.",
    date: "2026-01-21",
    tag: "Announcement",
  },
];