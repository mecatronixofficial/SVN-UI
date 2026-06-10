import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "fabric-inspection-machine",
    name: "Fabric Inspection Machine",
    category: "Inspection Machines",
    shortDescription:
      "Precision fabric inspection machine with edge guiding, lighting, counting, weighing and winding control.",
    description:
      "Fabric Inspection Machine is designed for accurate fabric quality inspection and controlled fabric handling. It helps identify defects, maintain proper fabric alignment, reduce wrinkles and improve roll quality during textile processing.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780036415/2148828328_soy6vr.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780036567/fabric-inspection-machine-1_rup19u.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780036568/fabric-inspection-machine-2_rmmxxm.jpg",
    ],
    features: [
      "Edge guiding system",
      "Inspection table with lighting",
      "Variable speed AC drive",
      "Digital encoder and mechanical counting meter",
      "Take-up roll with forward and reverse control",
      "Double coated inspection glass",
      "Individual winding roller drive",
      "Optional ERP defect logging",
      "Optional digital roll weighing unit",
    ],
    applications: [
      "Fabric inspection",
      "Textile mills",
      "Weaving units",
      "Dyeing units",
      "Processing units",
    ],
    specifications: [
      { label: "Fabric Width", value: "300 mm to 4500 mm" },
      { label: "Speed", value: "Up to 90 m/min" },
      { label: "Power Supply", value: "400V / 50Hz" },
      { label: "Drive", value: "Variable Speed AC Drive" },
      { label: "Power", value: "From 4 HP depending on requirement" },
    ],
    benefits: [
      "Wrinkle-free fabric handling",
      "Improves inspection accuracy",
      "Reduces manual errors",
      "Better batch traceability",
      "Improves production quality",
    ],
    faqs: [
      {
        question: "Can data logging be added?",
        answer: "Yes, ERP-based defect logging can be added as an optional feature.",
      },
    ],
  },

  {
    slug: "rope-opener-and-slit-opener",
    name: "Rope Opener and Slit Opener",
    category: "Opening Machines",
    shortDescription:
      "Textile rope opener and slit opener for opening tubular or rope-form fabric before further processing.",
    description:
      "Rope Opener and Slit Opener is used to open rope-form fabric and slit tubular fabric for continuous processing. It helps prepare fabric for washing, drying, stentering, inspection and finishing operations.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037015/Rope_Opener_and_Slit_Opener_machine-1_2_v63tiw.png",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037018/Rope_Opener_and_Slit_Opener_machine-1_3_lo4tq8.png",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037014/Rope_Opener_and_Slit_Opener_machine-1_1_gdreeg.png",
    ],
    features: [
      "Rope fabric opening system",
      "Slitting arrangement for tubular fabric",
      "Fabric centering system",
      "Variable speed drive",
      "Heavy-duty frame",
      "Operator-friendly control panel",
      "Smooth fabric path",
    ],
    applications: [
      "Knitted fabric processing",
      "Tubular fabric slitting",
      "Fabric washing line",
      "Dyeing and finishing units",
    ],
    specifications: [
      { label: "Fabric Type", value: "Knitted / woven / tubular fabric" },
      { label: "Operation", value: "Continuous" },
      { label: "Drive", value: "AC variable speed drive" },
      { label: "Voltage", value: "415V / 3 Phase" },
      { label: "Frame", value: "Heavy-duty MS structure" },
    ],
    benefits: [
      "Prepares fabric for finishing",
      "Reduces fabric twisting",
      "Improves processing flow",
      "Saves manual handling time",
    ],
    faqs: [
      {
        question: "Is this suitable for tubular knitted fabric?",
        answer: "Yes, it is suitable for tubular knitted fabric slitting and opening.",
      },
    ],
  },

  {
    slug: "folding-machine",
    name: "Folding Machine",
    category: "Folding Machines",
    shortDescription:
      "Fabric folding machine for neat, uniform and production-ready fabric folding.",
    description:
      "Folding Machine is used to fold fabric accurately and uniformly after inspection, finishing or rolling operations. It improves packing quality, reduces manual effort and gives a neat presentation for dispatch.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037217/Folding_Machine_3_ahkl8l.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037218/Folding_Machine_2_utzjgo.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037216/Folding_Machine_1_axpone.jpg",
    ],
    features: [
      "Adjustable folding length",
      "Variable speed control",
      "Fabric guiding system",
      "Smooth roller mechanism",
      "Digital length counter",
      "Compact and strong structure",
    ],
    applications: [
      "Fabric folding",
      "Textile finishing",
      "Garment units",
      "Export packing",
      "Processing units",
    ],
    specifications: [
      { label: "Working Width", value: "Customizable" },
      { label: "Speed", value: "Variable speed" },
      { label: "Voltage", value: "415V / 3 Phase" },
      { label: "Control", value: "Manual / semi-automatic" },
      { label: "Frame", value: "MS fabricated structure" },
    ],
    benefits: [
      "Neat fabric folding",
      "Improves packing presentation",
      "Reduces labour work",
      "Easy to operate",
    ],
    faqs: [
      {
        question: "Can folding size be adjusted?",
        answer: "Yes, folding size can be adjusted based on fabric and packing requirement.",
      },
    ],
  },

  {
    slug: "stretch-wrapping-machine",
    name: "Stretch Wrapping Machine",
    category: "Wrapping Machines",
    shortDescription:
      "PLC-controlled stretch wrapping machine for heavy and wide fabric roll packing.",
    description:
      "Stretch Wrapping Machine is designed for wrapping heavy, wide-width and narrow-width fabric rolls. The automated PLC cycle controls wrapping parameters such as rotation speed and film tension, giving secure roll protection during storage and transport.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037640/PLC-controlled_stretch_wrapping_machine_for_heavy_and_wide_fabric_roll_packing_2_opfxi1.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037640/PLC-controlled_stretch_wrapping_machine_for_heavy_and_wide_fabric_roll_packing_1_uqtp6k.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780037642/PLC-controlled_stretch_wrapping_machine_for_heavy_and_wide_fabric_roll_packing_1_devsif.png",
    ],
    features: [
      "PLC controlled automatic wrapping",
      "Adjustable rotation speed",
      "Adjustable film tension",
      "Heavy-duty structure",
      "Low maintenance design",
      "Suitable for large diameter rolls",
      "Supports LLDPE stretch film",
    ],
    applications: [
      "Fabric roll packing",
      "Textile export packing",
      "Finishing units",
      "Processing units",
    ],
    specifications: [
      { label: "Roller Height Above GL", value: "450 mm" },
      { label: "Speed", value: "80 meters/minute" },
      { label: "Installed Power", value: "2.5 kW" },
      { label: "Power Supply", value: "415V, 3 Phase, 50Hz" },
      { label: "Rolls Per Hour", value: "20–40 rolls" },
      { label: "Weight Per Roll", value: "Up to 400 kg" },
      { label: "Film Width", value: "250–500 mm LLDPE stretch film" },
    ],
    benefits: [
      "Protects fabric rolls",
      "Improves packing speed",
      "Reduces manual wrapping work",
      "Consistent wrapping quality",
    ],
    faqs: [
      {
        question: "What film is used?",
        answer: "The machine uses LLDPE stretch film of 250–500 mm width.",
      },
    ],
  },

  {
    slug: "rotating-station",
    name: "Rotating Station",
    category: "Material Handling",
    shortDescription:
      "Rotating station for easy turning, positioning and handling of fabric rolls or batches.",
    description:
      "Rotating Station is used in textile processing lines to rotate, position and handle fabric rolls or batches safely. It improves material movement, reduces operator effort and supports continuous production flow.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038071/Rotating_station_1_iy3dlo.png",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038071/Rotating_station_1_svapyx.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038072/Rotating_station_2_bgyluk.jpg",
    ],
    features: [
      "Rotating platform mechanism",
      "Heavy-duty load capacity",
      "Smooth rotation",
      "Operator-safe design",
      "Easy integration with production line",
      "Robust fabricated structure",
    ],
    applications: [
      "Fabric roll handling",
      "Batch movement",
      "Textile processing lines",
      "Material handling systems",
    ],
    specifications: [
      { label: "Operation", value: "Manual / motorized" },
      { label: "Load Capacity", value: "As per requirement" },
      { label: "Voltage", value: "415V / 3 Phase for motorized model" },
      { label: "Structure", value: "Heavy-duty MS frame" },
    ],
    benefits: [
      "Easy roll positioning",
      "Reduces manual lifting",
      "Improves production flow",
      "Safer material handling",
    ],
    faqs: [
      {
        question: "Can load capacity be customized?",
        answer: "Yes, the rotating station can be customized based on roll size and weight.",
      },
    ],
  },

  {
    slug: "batching-machine",
    name: "Batching Machine",
    category: "Batching Machines",
    shortDescription:
      "Textile batching machine for uniform fabric batching with controlled tension.",
    description:
      "Batching Machine is used to wind fabric into batches with proper alignment and tension. It is suitable for dyeing, processing and finishing lines where fabric needs to be collected uniformly for the next operation.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038527/Batching_Machine_1_mtymrf.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038527/Batching_Machine_2_mwedab.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038527/Batching_Machine_1_ulq71w.png",
    ],
    features: [
      "Uniform fabric batching",
      "Variable speed control",
      "Tension control system",
      "Edge guiding option",
      "Forward and reverse operation",
      "Heavy-duty winding rollers",
    ],
    applications: [
      "Dyeing units",
      "Processing plants",
      "Finishing lines",
      "Fabric batching before inspection",
    ],
    specifications: [
      { label: "Working Width", value: "Customizable" },
      { label: "Drive", value: "Variable speed AC drive" },
      { label: "Voltage", value: "415V / 3 Phase" },
      { label: "Operation", value: "Forward / reverse" },
      { label: "Structure", value: "Heavy-duty fabricated frame" },
    ],
    benefits: [
      "Uniform batching",
      "Reduces fabric wrinkles",
      "Improves process efficiency",
      "Suitable for continuous production",
    ],
    faqs: [
      {
        question: "Can edge guiding be added?",
        answer: "Yes, edge guiding can be added as per requirement.",
      },
    ],
  },

  {
    slug: "rolling-machine",
    name: "Rolling Machine",
    category: "Rolling Machines",
    shortDescription:
      "Fabric rolling machine for neat, uniform and tension-controlled fabric rolls.",
    description:
      "Rolling Machine is used to roll fabric smoothly after inspection, finishing or processing. It provides uniform roll formation, accurate length measurement and controlled fabric tension.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038979/roling_machine_r7wnzf.png",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038979/Rolling_machine_myehpi.png",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780038978/386_v5socn.jpg",
    ],
    features: [
      "Uniform fabric rolling",
      "Variable speed drive",
      "Digital meter counter",
      "Forward and reverse control",
      "Fabric guide rollers",
      "Heavy-duty frame",
    ],
    applications: [
      "Fabric rolling",
      "Textile mills",
      "Finishing units",
      "Garment units",
      "Inspection departments",
    ],
    specifications: [
      { label: "Working Width", value: "60 / 72 / 90 / 110 inch or custom" },
      { label: "Speed", value: "0–80 m/min" },
      { label: "Motor", value: "1 HP / 1.5 HP / 2 HP" },
      { label: "Voltage", value: "415V / 3 Phase" },
      { label: "Control", value: "Variable speed control" },
    ],
    benefits: [
      "Neat roll formation",
      "Reduces fabric wrinkles",
      "Improves packing quality",
      "Low maintenance",
    ],
    faqs: [
      {
        question: "Can it roll different fabric types?",
        answer: "Yes, it is suitable for woven, knitted and processed fabrics.",
      },
    ],
  },

  {
    slug: "desizing-tank",
    name: "Desizing Tank",
    category: "Processing Machines",
    shortDescription:
      "Textile desizing tank for removing size material from fabric before further processing.",
    description:
      "Desizing Tank is used in textile wet processing to remove sizing agents from fabric before bleaching, dyeing or finishing. It supports proper fabric preparation and improves processing quality.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780039493/ds3_yzpa6g.png",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780039494/ds_2_-_Copy_orh9rc.png",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780039496/ds_xmwecq.png",
    ],
    features: [
      "Heavy-duty tank construction",
      "Fabric guide rollers",
      "Chemical processing support",
      "Heating option",
      "Drain and cleaning arrangement",
      "Suitable for continuous processing",
    ],
    applications: [
      "Textile wet processing",
      "Desizing process",
      "Fabric preparation",
      "Dyeing and bleaching units",
    ],
    specifications: [
      { label: "Tank Material", value: "MS / SS as per requirement" },
      { label: "Heating", value: "Steam / electric optional" },
      { label: "Operation", value: "Batch / continuous" },
      { label: "Capacity", value: "Customizable" },
      { label: "Application", value: "Fabric desizing" },
    ],
    benefits: [
      "Improves fabric absorbency",
      "Prepares fabric for dyeing",
      "Removes sizing chemicals",
      "Customizable tank capacity",
    ],
    faqs: [
      {
        question: "Can stainless steel tank be provided?",
        answer: "Yes, MS or SS tank construction can be provided based on requirement.",
      },
    ],
  },

  {
    slug: "conveyor-belt",
    name: "Conveyor Belt",
    category: "Material Handling",
    shortDescription:
      "Industrial conveyor belt system for smooth material movement in textile production lines.",
    description:
      "Conveyor Belt is used for transferring fabric rolls, packed goods or materials between different production stages. It improves workflow, reduces manual movement and supports continuous operation.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781077258/162_gxayd0.jpg",
    gallery: [
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781077258/162_gxayd0.jpg",
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781077258/162_gxayd0.jpg",
    ],
    features: [
      "Continuous belt movement",
      "Variable speed option",
      "Heavy-duty frame",
      "Custom belt length",
      "Easy integration with machines",
      "Low maintenance design",
    ],
    applications: [
      "Fabric roll transfer",
      "Packing line",
      "Material handling",
      "Textile production line",
      "Warehouse movement",
    ],
    specifications: [
      { label: "Belt Width", value: "Customizable" },
      { label: "Belt Length", value: "Customizable" },
      { label: "Speed", value: "Variable speed optional" },
      { label: "Voltage", value: "415V / 3 Phase" },
      { label: "Frame", value: "MS fabricated structure" },
    ],
    benefits: [
      "Reduces manual handling",
      "Improves production flow",
      "Easy material transfer",
      "Customizable size",
    ],
    faqs: [
      {
        question: "Can conveyor length be customized?",
        answer: "Yes, conveyor length and width can be customized based on layout.",
      },
    ],
  },

// Add these inside your products array

{
  slug: "jigger",
  name: "Jigger",
  category: "Dyeing Machines",
  shortDescription:
    "Textile dyeing jigger machine for controlled fabric dyeing and wet processing.",
  description:
    "Jigger machine is used in textile dyeing and wet processing for uniform dye application on woven fabrics. It helps maintain controlled fabric movement, proper chemical contact and consistent shade results.",
  image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780746550/1000007667_xwhh5e.jpg",
  gallery: [
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780746550/1000007667_xwhh5e.jpg",
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1780746550/1000007667_xwhh5e.jpg",
  ],
  features: [
    "Uniform fabric dyeing",
    "Controlled fabric movement",
    "Heavy-duty dyeing tank",
    "Forward and reverse fabric motion",
    "Variable speed control",
    "Steam heating option",
  ],
  applications: [
    "Textile dyeing",
    "Wet processing",
    "Woven fabric dyeing",
    "Bleaching and washing",
  ],
  specifications: [
    { label: "Fabric Type", value: "Woven fabric" },
    { label: "Operation", value: "Batch dyeing" },
    { label: "Heating", value: "Steam / electric optional" },
    { label: "Drive", value: "Variable speed drive" },
    { label: "Structure", value: "MS / SS construction" },
  ],
  benefits: [
    "Uniform shade results",
    "Controlled dyeing process",
    "Suitable for wet processing",
    "Durable construction",
  ],
  faqs: [
    {
      question: "Is stainless steel construction available?",
      answer:
        "Yes, MS or stainless steel construction can be provided based on requirement.",
    },
  ],
},

{
  slug: "cutting-machine",
  name: "Cutting Machine",
  category: "Garmenting Machines",
  shortDescription:
    "Garment cutting machine for accurate and efficient fabric cutting operations.",
  description:
    "Cutting Machine is used in garmenting units for accurate cutting of fabric layers before stitching and production. It improves cutting speed, reduces manual effort and supports consistent garment production quality.",
  image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078203/2148828328_1_xzswj2.jpg",
  gallery: [
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078203/2148828328_1_xzswj2.jpg",
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078203/2148828328_1_xzswj2.jpg",
  ],
  features: [
    "Accurate fabric cutting",
    "Suitable for multiple fabric layers",
    "Easy operator handling",
    "Sharp cutting blade",
    "Compact design",
    "Low maintenance",
  ],
  applications: [
    "Garment manufacturing",
    "Textile workshops",
    "Fabric cutting sections",
    "Home textile production",
  ],
  specifications: [
    { label: "Application", value: "Fabric cutting" },
    { label: "Operation", value: "Manual / electric" },
    { label: "Fabric Type", value: "Woven, knitted and garment fabrics" },
    { label: "Voltage", value: "220V / 415V depending on model" },
    { label: "Usage", value: "Garmenting production" },
  ],
  benefits: [
    "Improves cutting accuracy",
    "Reduces fabric wastage",
    "Speeds up garment production",
    "Easy to operate",
  ],
  faqs: [
    {
      question: "Can it cut multiple fabric layers?",
      answer:
        "Yes, it can be selected based on required cutting height and fabric type.",
    },
  ],
},

{
  slug: "a-frame-trolley",
  name: "A-Frame Trolley",
  category: "Material Handling Equipments",
  shortDescription:
    "A-frame trolley for safe fabric roll, batch and material movement in textile units.",
  description:
    "A-Frame Trolley is used for safe handling and movement of fabric rolls, batches and textile materials inside production areas. Its strong A-frame structure provides stability and easy movement during material transfer.",
  image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078291/Screenshot_2026-06-10_132452_fdjoj7.png",
  gallery: [
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078291/Screenshot_2026-06-10_132452_fdjoj7.png",
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078291/Screenshot_2026-06-10_132452_fdjoj7.png",
  ],
  features: [
    "Strong A-frame structure",
    "Heavy-duty wheels",
    "Easy roll handling",
    "Stable movement",
    "Custom size available",
    "Durable MS fabrication",
  ],
  applications: [
    "Fabric roll movement",
    "Textile production floor",
    "Processing units",
    "Warehouse material handling",
  ],
  specifications: [
    { label: "Structure", value: "A-frame MS fabrication" },
    { label: "Wheels", value: "Heavy-duty caster wheels" },
    { label: "Capacity", value: "Customizable" },
    { label: "Finish", value: "Painted / powder coated" },
    { label: "Usage", value: "Material handling" },
  ],
  benefits: [
    "Easy material movement",
    "Reduces manual lifting",
    "Improves workplace safety",
    "Customizable capacity",
  ],
  faqs: [
    {
      question: "Can trolley size be customized?",
      answer:
        "Yes, size and load capacity can be customized based on requirement.",
    },
  ],
},

{
  slug: "box-trolley",
  name: "Box Trolley",
  category: "Material Handling Equipments",
  shortDescription:
    "Box trolley for carrying fabric, garments and production materials safely.",
  description:
    "Box Trolley is used for handling fabrics, garments, accessories and production materials inside textile and garment units. It helps keep materials organized and improves internal movement efficiency.",
  image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078199/857_gutxa4.jpg",
  gallery: [
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078199/857_gutxa4.jpg",
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1781078199/857_gutxa4.jpg",
  ],
  features: [
    "Box-type storage design",
    "Heavy-duty wheels",
    "Easy push-pull movement",
    "Strong fabricated body",
    "Custom size available",
    "Suitable for shopfloor use",
  ],
  applications: [
    "Garment material movement",
    "Fabric handling",
    "Textile production floor",
    "Warehouse handling",
    "Packing section",
  ],
  specifications: [
    { label: "Structure", value: "MS fabricated box trolley" },
    { label: "Wheels", value: "Caster wheels" },
    { label: "Capacity", value: "Customizable" },
    { label: "Finish", value: "Painted / powder coated" },
    { label: "Usage", value: "Fabric and garment handling" },
  ],
  benefits: [
    "Keeps materials organized",
    "Easy movement inside factory",
    "Reduces manual carrying",
    "Improves production workflow",
  ],
  faqs: [
    {
      question: "Can box trolley size be made as per factory layout?",
      answer:
        "Yes, trolley dimensions can be customized based on your production layout.",
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
      products.filter(
        (p) => p.slug !== slug && p.category !== current.category
      )
    )
    .slice(0, count);
}