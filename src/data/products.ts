import type { Product } from "@/types";

export const products: Product[] = [
  {
    machineNumber: "01",
    slug: "fabric-inspection-machine",
    name: "Fabric Inspection Machine",
    category: "Inspection Machines",
    shortDescription:
      "Precision fabric inspection machine with edge guiding, lighting, counting, weighing and winding control.",
    description:
      "Fabric Inspection Machine is designed for accurate fabric quality inspection and controlled fabric handling.",

    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781766963/Fabric_Machine_eljdoq.mp4",

    features: [
      "Edge guiding system",
      "Inspection table with lighting",
      "Variable speed AC drive",
      "Digital encoder and mechanical counting meter",
    ],

    applications: [
      "Fabric inspection",
      "Textile mills",
      "Weaving units",
      "Dyeing units",
    ],

    specifications: [
      { label: "Fabric Width", value: "300 mm to 4500 mm" },
      { label: "Speed", value: "Up to 90 m/min" },
      { label: "Power Supply", value: "400V / 50Hz" },
      { label: "Drive", value: "Variable Speed AC Drive" },
    ],

    benefits: [
      "Wrinkle-free fabric handling",
      "Improves inspection accuracy",
      "Reduces manual errors",
    ],

    faqs: [],
  },

  {
    machineNumber: "02",
    slug: "rope-opener-and-slit-opener",
    name: "Rope Opener and Slit Opener",
    category: "Opening Machines",
    shortDescription:
      "Textile rope opener and slit opener for opening tubular or rope-form fabric before further processing.",
    description:
      "Rope Opener and Slit Opener is used to open rope-form fabric and slit tubular fabric for continuous processing. It helps prepare fabric for washing, drying, stentering, inspection and finishing operations.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1784017503/rope_opner_oze4ji.mp4",

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
        answer:
          "Yes, it is suitable for tubular knitted fabric slitting and opening.",
      },
    ],
  },

  {
    machineNumber: "03",
    slug: "book-folding-machine",
    name: "Book Folding Machine",
    category: "Book Folding Machine",
    shortDescription:
      "Fabric folding machine for net, uniform and production-ready fabric folding.",
    description:
      "Book Folding Machine is used to fold fabric accurately and uniformly after inspection, finishing or rolling operations. It improves packing quality, reduces manual effort and gives a neat presentation for dispatch.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1784017462/Folding_machine_neibk6.mp4",

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
        answer:
          "Yes, folding size can be adjusted based on fabric and packing requirement.",
      },
    ],
  },

  {
    machineNumber: "04",
    slug: "stretch-wrapping-machine",
    name: "Stretch Wrapping Machine",
    category: "Wrapping Machines",
    shortDescription:
      "PLC-controlled stretch wrapping machine for heavy and wide fabric roll packing.",
    description:
      "Stretch Wrapping Machine is designed for wrapping heavy, wide-width and narrow-width fabric rolls. The automated PLC cycle controls wrapping parameters such as rotation speed and film tension, giving secure roll protection during storage and transport.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781767033/inspection_Machine_with_rapping_machine_cvilnv.mp4",
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
    machineNumber: "05",
    slug: "rotating-station",
    name: "Rotating Station",
    category: "Material Handling",
    shortDescription:
      "Rotating station for easy turning, positioning and handling of fabric rolls or batches.",
    description:
      "Rotating Station is used in textile processing lines to rotate, position and handle fabric rolls or batches safely. It improves material movement, reduces operator effort and supports continuous production flow.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781766625/Rotating_Station_qswdt8.mp4",
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
        answer:
          "Yes, the rotating station can be customized based on roll size and weight.",
      },
    ],
  },

  {
    machineNumber: "06",
    slug: "batching-machine",
    name: " Batching Machine",
    category: " Batching Machines",
    shortDescription:
      "Textile batching machine for uniform fabric batching with controlled tension.",
    description:
      "Batching Machine is used to wind fabric into batches with proper alignment and tension. It is suitable for dyeing, processing and finishing lines where fabric needs to be collected uniformly for the next operation.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781766594/Batching_Machine_un7cn4.mp4",
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
    machineNumber: "07",
    slug: "rolling-machine",
    name: "Rolling Machine",
    category: "Rolling Machines",
    shortDescription:
      "Fabric rolling machine for neat, uniform and tension-controlled fabric rolls.",
    description:
      "Rolling Machine is used to roll fabric smoothly after inspection, finishing or processing. It provides uniform roll formation, accurate length measurement and controlled fabric tension.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1786005389/Roling_Machine_hwxndr.mp4",
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
    machineNumber: "08",
    slug: "inspection-with-conveyor-belt",
    name: "Inspection with Conveyor Belt",
    category: "Material Handling",
    shortDescription:
      "Industrial conveyor belt system for smooth material movement in textile production lines.",
    description:
      "Inspection with Conveyor Belt is used for transferring fabric rolls, packed goods or materials between different production stages. It improves workflow, reduces manual movement and supports continuous operation.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781767035/Conveyer_Belt_codz8j.mp4",
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
        answer:
          "Yes, conveyor length and width can be customized based on layout.",
      },
    ],
  },

  {
    machineNumber: "09",
    slug: "electronic-jigger-machine",
    name: "Electronic Jigger Machine",
    category: "Dyeing Machines",
    shortDescription:
      "Textile dyeing jigger machine for controlled fabric dyeing and wet processing.",
    description:
      "Electronic Jigger Machine is used in textile dyeing and wet processing for uniform dye application on woven fabrics. It helps maintain controlled fabric movement, proper chemical contact and consistent shade results.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1786005398/Jigar_Machine_ryyqdb.mp4",
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
    machineNumber: "10",
    slug: "cutting-machine",
    name: "Cutting Machine",
    category: "Garmenting Machines",
    shortDescription:
      "Garment cutting machine for accurate and efficient fabric cutting operations.",
    description:
      "Cutting Machine is used in garmenting units for accurate cutting of fabric layers before stitching and production. It improves cutting speed, reduces manual effort and supports consistent garment production quality.",
    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781767385/Cutting_Machine_n7cq3d.mp4",
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
    machineNumber: "11",
    slug: "a-frame-trolley",
    name: "A-Frame Trolley",
    category: "Material Handling Equipments",
    shortDescription:
      "A-frame trolley for safe fabric roll, batch and material movement in textile units.",
    description:
      "A-Frame Trolley is used for safe handling and movement of fabric rolls, batches and textile materials inside production areas. Its strong A-frame structure provides stability and easy movement during material transfer.",
    image: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1786005348/WhatsApp_Image_2026-08-06_at_13.47.04_fgmycg.jpg",
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
      { label: "Machine No", value: "01" },
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
    machineNumber: "12",
    slug: "box-trolley",
    name: "Box Trolley",
    category: "Material Handling Equipments",
    shortDescription:
      "Box trolley for carrying fabric, garments and production materials safely.",
    description:
      "Box Trolley is used for handling fabrics, garments, accessories and production materials inside textile and garment units. It helps keep materials organized and improves internal movement efficiency.",
     image:
      "https://res.cloudinary.com/ddpfxvydm/image/upload/v1784017455/Box_Trolly_orll3m.jpg",

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

  {
    machineNumber: "13",
    slug: "brushing-machine",
    name: "Brushing Machine",
    category: "Finishing Machines",
    shortDescription:
      "Textile brushing machine for improving fabric surface finish, softness and appearance.",
    description:
      "Brushing Machine is used in textile finishing to raise and clean the fabric surface using rotating brushes. It improves fabric softness, removes loose fibers and gives a better surface finish for garments, home textiles and processed fabrics.",

    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781766591/Bressing_rx4dyz.mp4",

    features: [
      "Rotating brush roller system",
      "Adjustable fabric tension",
      "Variable speed control",
      "Smooth fabric feeding",
      "Dust and loose fiber removal",
      "Heavy-duty fabricated structure",
      "Operator-friendly control panel",
    ],

    applications: [
      "Fabric finishing",
      "Textile processing units",
      "Garment fabric preparation",
      "Home textile production",
      "Surface cleaning and softening",
    ],

    specifications: [
      { label: "Fabric Type", value: "Woven / knitted / processed fabric" },
      { label: "Working Width", value: "Customizable as per requirement" },
      { label: "Brush Roller", value: "Rotating brush roller system" },
      { label: "Speed", value: "Variable speed control" },
      { label: "Power Supply", value: "415V / 3 Phase" },
      { label: "Structure", value: "Heavy-duty MS fabricated frame" },
    ],

    benefits: [
      "Improves fabric softness",
      "Enhances surface finish",
      "Removes loose fibers and dust",
      "Improves fabric appearance",
      "Reduces manual finishing work",
    ],

    faqs: [
      {
        question: "Can brush pressure be adjusted?",
        answer:
          "Yes, brush pressure and fabric tension can be adjusted based on fabric type and finishing requirement.",
      },
    ],
  },
  
  {
    machineNumber: "14",
    slug: "j-box-machine",
    name: "J-Box Machine",
    category: "Processing Machines",
    shortDescription:
      "Textile J-Box machine for continuous fabric storage, relaxation and smooth feeding in processing lines.",
    description:
      "J-Box Machine is used in textile processing lines to store and relax fabric temporarily during continuous operations. It helps maintain smooth fabric flow, prevents tension variation and supports washing, dyeing, bleaching, desizing and finishing processes.",

    video:
      "https://res.cloudinary.com/ddpfxvydm/video/upload/v1781766629/J-Box_Machine_tmfwet.mp4",

    features: [
      "Continuous fabric storage system",
      "Smooth fabric feeding",
      "Fabric relaxation arrangement",
      "Tension-free fabric handling",
      "Heavy-duty fabricated structure",
      "Easy integration with processing line",
      "Operator-friendly design",
    ],

    applications: [
      "Textile processing lines",
      "Washing range",
      "Dyeing and bleaching units",
      "Desizing process",
      "Fabric relaxation and storage",
      "Finishing lines",
    ],

    specifications: [
      { label: "Fabric Type", value: "Woven / knitted / processed fabric" },
      { label: "Operation", value: "Continuous fabric storage" },
      { label: "Working Width", value: "Customizable as per requirement" },
      { label: "Structure", value: "Heavy-duty MS / SS fabricated frame" },
      { label: "Drive", value: "Variable speed drive optional" },
      { label: "Power Supply", value: "415V / 3 Phase" },
      { label: "Application", value: "Fabric relaxation and line balancing" },
    ],

    benefits: [
      "Maintains continuous fabric flow",
      "Reduces fabric tension variation",
      "Improves process stability",
      "Prevents fabric stretching",
      "Supports smooth line operation",
    ],

    faqs: [
      {
        question: "Why is J-Box used in textile processing?",
        answer:
          "J-Box is used to temporarily store and relax fabric during continuous processing, helping maintain smooth fabric flow and reduce tension variation.",
      },
    ],
  },
  {
  machineNumber: "15",
  slug: "open-width-tumbler-swing-machine",
  name: "Open Width Tumbler Swing Machine",
  category: "Finishing Machines",

  shortDescription:
    "Open Width Tumbler Swing Machine for soft finishing, wrinkle removal, fabric relaxation, and improved fabric appearance.",

  description:
    "Open Width Tumbler Swing Machine is designed for textile finishing processes to provide fabric relaxation, softness, wrinkle removal, and improved hand feel while maintaining the fabric in open-width form. It ensures uniform treatment with controlled temperature and airflow, making it suitable for woven, knitted, and processed fabrics before final inspection and packing.",

  video:
    "https://res.cloudinary.com/ddpfxvydm/video/upload/v1786005902/open_with_tm_ry93n0.mp4",

  features: [
    "Open-width fabric processing",
    "Uniform tumbling action",
    "Controlled temperature system",
    "Adjustable fabric speed",
    "Energy-efficient hot air circulation",
    "Heavy-duty drive mechanism",
    "User-friendly control panel",
  ],

  applications: [
    "Textile finishing units",
    "Knitted fabric processing",
    "Woven fabric finishing",
    "Garment fabric preparation",
    "Fabric softening",
    "Final finishing departments",
  ],

  specifications: [
    { label: "Fabric Type", value: "Woven / Knitted / Processed Fabrics" },
    { label: "Working Width", value: "Customizable as per requirement" },
    { label: "Operation", value: "Open Width Continuous Processing" },
    { label: "Heating System", value: "Hot Air Circulation" },
    { label: "Power Supply", value: "415V / 3 Phase" },
    { label: "Structure", value: "Heavy-duty MS Fabricated Frame" },
  ],

  benefits: [
    "Improves fabric softness",
    "Removes wrinkles effectively",
    "Provides uniform finishing",
    "Enhances fabric appearance",
    "Suitable for continuous production",
  ],

  faqs: [
    {
      question: "What is the purpose of an Open Width Tumbler Swing Machine?",
      answer:
        "It is used to provide fabric relaxation, softness, wrinkle removal, and uniform finishing while processing fabrics in open-width form before final inspection or packing.",
    },
  ],
},
 
];

export const productCategories = Array.from(
  new Set(products.map((p) => p.category)),
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
        (p) => p.slug !== slug && p.category !== current.category,
      ),
    )
    .slice(0, count);
}
