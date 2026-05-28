import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "inspection-cum-rolling-machine",
    name: "Inspection Cum Rolling Machine",
    category: "Inspection Machines",
    shortDescription:
      "Combined fabric inspection and rolling machine with precise tension control.",
    description:
      "Our Inspection Cum Rolling Machine integrates fabric inspection and rolling in a single, compact unit. Engineered for textile mills and garment manufacturers, it offers smooth fabric flow, accurate length measurement, and consistent rolling — significantly reducing manual handling.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/7605_he8upt.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/7605_he8upt.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/7605_he8upt.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/7605_he8upt.jpg",
    ],
    features: [
      "Variable speed drive control",
      "Automatic edge alignment system",
      "Digital fabric length counter",
      "Bright LED inspection lighting",
      "Heavy-duty steel frame",
      "Pneumatic roll lifting mechanism",
    ],
    applications: [
      "Textile mills",
      "Garment manufacturing units",
      "Fabric processing units",
      "Knitted fabric inspection",
      "Quality control departments",
    ],
    specifications: [
      { label: "Working Width", value: "60 inch / 72 inch / 110 inch" },
      { label: "Inspection Speed", value: "0–60 meters / minute" },
      { label: "Power", value: "1.5 HP, 3-Phase" },
      { label: "Voltage", value: "415V / 50Hz" },
      { label: "Roll Diameter", value: "Up to 500 mm" },
      { label: "Machine Weight", value: "Approx. 450 kg" },
    ],
    benefits: [
      "Reduces fabric handling time by up to 40%",
      "Improves inspection accuracy and defect detection",
      "Lower power consumption with efficient drive system",
      "Long service life with robust construction",
    ],
    faqs: [
      {
        question: "Can the machine be customized for different fabric widths?",
        answer:
          "Yes, we manufacture this machine in multiple widths and can customize as per client requirement.",
      },
      {
        question: "What is the typical delivery timeline?",
        answer:
          "Standard delivery is 3–4 weeks from confirmed order; custom variants may take 5–6 weeks.",
      },
    ],
  },
  {
    slug: "textile-machine-typing",
    name: "Textile Machine Typing",
    category: "Textile Machines",
    shortDescription:
      "Precision textile machine for accurate marking, tying and finishing operations.",
    description:
      "Built specifically for the textile finishing line, our Textile Machine Typing offers reliable performance for high-speed marking and tying operations. Sturdy frame, easy controls and consistent output make it an essential component on the production floor.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/45884_jvtkzh.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/45884_jvtkzh.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/45884_jvtkzh.jpg",
    ],
    features: [
      "Heavy-duty motor",
      "Easy operator controls",
      "Adjustable speed",
      "Robust mechanical structure",
      "Low maintenance design",
    ],
    applications: [
      "Textile finishing units",
      "Garment factories",
      "Yarn processing",
      "Fabric bundling",
    ],
    specifications: [
      { label: "Motor", value: "1 HP / 1.5 HP" },
      { label: "Voltage", value: "230V / 415V" },
      { label: "Operation", value: "Semi-automatic" },
      { label: "Frame", value: "MS Powder Coated" },
    ],
    benefits: [
      "Consistent output across long production runs",
      "Easy to install and operate",
      "Minimal downtime",
    ],
    faqs: [
      {
        question: "Is operator training provided?",
        answer:
          "Yes — we provide on-site demonstration and operator training at the time of installation.",
      },
    ],
  },
  {
    slug: "rolling-machine",
    name: "Rolling Machine",
    category: "Textile Machines",
    shortDescription:
      "Industrial fabric rolling machine for clean, tension-controlled fabric rolls.",
    description:
      "Our Rolling Machine delivers uniform, wrinkle-free rolls every time. Variable speed drive and tension control allow operators to roll a wide variety of fabrics without distortion. Ideal for mid-size and large textile production lines.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953948/close-up-sewing-machine-tailor-shop_f7mm93.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953948/close-up-sewing-machine-tailor-shop_f7mm93.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953948/close-up-sewing-machine-tailor-shop_f7mm93.jpg",
    ],
    features: [
      "Variable speed AC drive",
      "Smooth fabric guide rollers",
      "Pneumatic shaft loading",
      "Digital meter counter",
      "Auto-stop on fabric break",
    ],
    applications: [
      "Woven fabric units",
      "Knitted fabric processing",
      "Dyeing and finishing plants",
    ],
    specifications: [
      { label: "Working Width", value: "60 / 72 / 90 / 110 inch" },
      { label: "Speed", value: "0–80 m/min" },
      { label: "Motor", value: "1 / 1.5 / 2 HP" },
      { label: "Voltage", value: "415V, 3-Phase" },
    ],
    benefits: [
      "Tighter, neater rolls reduce downstream defects",
      "Significantly reduces operator fatigue",
      "Built to last with industrial-grade components",
    ],
    faqs: [
      {
        question: "Can it roll lightweight knit fabric?",
        answer:
          "Yes — tension control settings make it suitable for knitted, woven and lightweight fabrics.",
      },
    ],
  },
  {
    slug: "industrial-sewing-machine",
    name: "Industrial Sewing Machine",
    category: "Sewing Machines",
    shortDescription:
      "Heavy-duty industrial sewing machine for continuous production.",
    description:
      "Designed for demanding production environments, our Industrial Sewing Machine delivers stitch consistency at high speeds. Reliable motor, durable hook system and easy thread management make it a workhorse on any garment line.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/technician-worker-cutting-metal-with-many-sharp-sparks-using-equipments-cat-iron_boxbcl.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/45884_jvtkzh.jpg",
    ],
    features: [
      "High-speed servo motor",
      "Automatic thread trimmer",
      "Adjustable stitch length",
      "Drop feed system",
      "LED workspace lighting",
    ],
    applications: [
      "Garment manufacturing",
      "Home textiles",
      "Leather and bag manufacturing",
      "Upholstery",
    ],
    specifications: [
      { label: "Speed", value: "Up to 5000 stitches per minute" },
      { label: "Motor", value: "Servo motor 550W" },
      { label: "Needle System", value: "DBx1 / DPx5" },
      { label: "Voltage", value: "220V, single phase" },
    ],
    benefits: [
      "Higher productivity per shift",
      "Reduced thread wastage with auto trimmer",
      "Lower noise compared to clutch motors",
    ],
    faqs: [
      {
        question: "Does it come with a stand and table?",
        answer:
          "Yes, the machine is supplied with a standard table, stand and motor as a complete unit.",
      },
    ],
  },
  {
    slug: "textile-sewing-machine",
    name: "Textile Sewing Machine",
    category: "Sewing Machines",
    shortDescription:
      "Versatile textile sewing machine engineered for everyday production needs.",
    description:
      "Built for textile workshops and small-to-medium garment units, this machine balances speed, precision and ease of operation. Smooth stitch formation across a wide variety of fabrics.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/female-business-owner-working-portrait_dpapam.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/female-business-owner-working-portrait_dpapam.jpg",
    ],
    features: [
      "Smooth stitch formation",
      "Compact footprint",
      "Easy bobbin loading",
      "Low vibration operation",
    ],
    applications: [
      "Small garment units",
      "Tailoring workshops",
      "Home textile production",
    ],
    specifications: [
      { label: "Stitch Speed", value: "Up to 4500 SPM" },
      { label: "Motor", value: "Clutch / Servo" },
      { label: "Voltage", value: "220V" },
    ],
    benefits: [
      "Easy for operators to learn",
      "Affordable to maintain",
      "Suitable for both light and medium fabrics",
    ],
    faqs: [
      {
        question: "Can it handle heavy denim?",
        answer:
          "It handles medium-weight fabrics well. For heavy denim, we recommend our Industrial Sewing Machine.",
      },
    ],
  },
  {
    slug: "foot-massager",
    name: "Foot Massager",
    category: "Wellness Products",
    shortDescription:
      "Compact electric foot massager designed for daily relief and comfort.",
    description:
      "Our Foot Massager is engineered to deliver soothing relief through carefully designed roller mechanisms. Suitable for home and clinic use, it features multiple intensity levels and a quiet motor.",
    image:
      "https://images.unsplash.com/photo-1601925240970-98447ad9f5e3?w=1200&auto=format&fit=crop&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1200&auto=format&fit=crop&q=70",
    ],
    features: [
      "Multiple massage modes",
      "Adjustable intensity",
      "Quiet motor operation",
      "Compact, portable design",
    ],
    applications: [
      "Home use",
      "Wellness clinics",
      "Reflexology centers",
      "Hospitality / spas",
    ],
    specifications: [
      { label: "Power", value: "30W" },
      { label: "Voltage", value: "220V / 50Hz" },
      { label: "Modes", value: "3 intensity levels" },
      { label: "Weight", value: "Approx. 3 kg" },
    ],
    benefits: [
      "Relieves muscle fatigue",
      "Easy to use at home",
      "Low power consumption",
    ],
    faqs: [
      {
        question: "Is the warranty available?",
        answer: "Yes — we offer a 1-year warranty against manufacturing defects.",
      },
    ],
  },
  {
    slug: "fabric-inspection-machine",
    name: "Fabric Inspection Machine",
    category: "Inspection Machines",
    shortDescription:
      "Dedicated fabric inspection machine with bright lighting and accurate metering.",
    description:
      "A purpose-built inspection machine that lets quality teams identify defects early, measure fabric accurately, and roll fabric uniformly. Trusted by textile mills across South India.",
    image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/handsome-carpenter-working-with-wood_yasooi.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/handsome-carpenter-working-with-wood_yasooi.jpg",
    ],
    features: [
      "High-CRI LED inspection panel",
      "Adjustable fabric tension",
      "Digital length counter",
      "Variable inspection speed",
      "Edge alignment guide",
    ],
    applications: [
      "Fabric quality control",
      "Mills",
      "Garment exporters",
      "Dyeing units",
    ],
    specifications: [
      { label: "Working Width", value: "60 / 72 / 110 inch" },
      { label: "Speed", value: "0–60 m/min" },
      { label: "Lighting", value: "LED, daylight white" },
      { label: "Motor", value: "1 HP, 3-phase" },
    ],
    benefits: [
      "Catches defects early in the process",
      "Reduces customer rejection rates",
      "Operator-friendly controls",
    ],
    faqs: [
      {
        question: "What lighting is provided?",
        answer:
          "We use high-CRI LED panels that closely simulate daylight for accurate defect detection.",
      },
    ],
  },
  {
    slug: "washer-extractor",
    name: "Washer Extractor",
    category: "Laundry Machines",
    shortDescription:
      "Industrial washer extractor combining washing and high-speed extraction.",
    description:
      "Our Washer Extractor is built for commercial laundries, hotels, hospitals and garment processing units. The combined wash and extract cycle reduces overall processing time and improves throughput.",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1200&auto=format&fit=crop&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&auto=format&fit=crop&q=70",
    ],
    features: [
      "Stainless steel inner and outer drum",
      "Programmable wash cycles",
      "High-G extraction",
      "Heavy-duty suspension system",
      "Auto chemical dosing ready",
    ],
    applications: [
      "Commercial laundries",
      "Hotels and resorts",
      "Hospitals",
      "Garment processing",
    ],
    specifications: [
      { label: "Capacity", value: "15 / 25 / 50 / 100 kg" },
      { label: "Motor", value: "3 / 5 / 7.5 HP" },
      { label: "Heating", value: "Steam / Electric" },
      { label: "Voltage", value: "415V, 3-phase" },
    ],
    benefits: [
      "Faster turnaround per load",
      "Better fabric care with controlled cycles",
      "Lower water and chemical consumption",
    ],
    faqs: [
      {
        question: "Is steam heating available?",
        answer:
          "Yes — both electric and steam heated versions are available depending on your utility setup.",
      },
    ],
  },
  {
    slug: "textile-washer-machine",
    name: "Textile Washer Machine",
    category: "Laundry Machines",
    shortDescription:
      "Robust textile washer designed for fabric processing units.",
    description:
      "Engineered specifically for textile processing, this washer machine handles delicate to heavy fabric loads with consistent care. Customisable cycle settings and stainless steel construction extend its service life.",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&auto=format&fit=crop&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1200&auto=format&fit=crop&q=70",
    ],
    features: [
      "Stainless steel drum",
      "Programmable cycles",
      "Variable wash speed",
      "Low-noise drive system",
    ],
    applications: [
      "Textile processing",
      "Dyeing units",
      "Garment washing",
    ],
    specifications: [
      { label: "Capacity", value: "20 / 30 / 50 kg" },
      { label: "Motor", value: "3 / 5 HP" },
      { label: "Voltage", value: "415V, 3-phase" },
    ],
    benefits: [
      "Gentle on fabric, strong on dirt",
      "Reduces water usage per cycle",
      "Easy maintenance access",
    ],
    faqs: [
      {
        question: "Do you provide spare parts support?",
        answer:
          "Yes, all our machines come with prompt after-sales spare parts and service support.",
      },
    ],
  },
];

export const productCategories = Array.from(
  new Set(products.map((p) => p.category))
);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  const current = getProductBySlug(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, count)
    .concat(
      products.filter((p) => p.slug !== slug && p.category !== current.category)
    )
    .slice(0, count);
}
