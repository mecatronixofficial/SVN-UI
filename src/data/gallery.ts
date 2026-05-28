import type { GalleryItem } from "@/types";

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/7605_he8upt.jpg",
    alt: "Textile factory floor",
    category: "Factory Images",
    height: "tall",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779959028/29631_neyozz.jpg",
    alt: "Industrial machine close-up",
    category: "Machines",
    height: "medium",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958260/60001_bavcok.jpg",
    alt: "Manufacturing line",
    category: "Manufacturing Process",
    height: "short",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779958261/3266_usfxca.jpg",
    alt: "Fabric inspection setup",
    category: "Product Showcase",
    height: "medium",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779959705/15850_kgshjp.jpg",
    alt: "Quality inspection",
    category: "Manufacturing Process",
    height: "tall",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953948/main_q5bhdr.jpg",
    alt: "Sewing machines",
    category: "Machines",
    height: "short",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/female-business-owner-working-portrait_dpapam.jpg",
    alt: "Product showcase",
    category: "Product Showcase",
    height: "medium",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/handsome-carpenter-working-with-wood_yasooi.jpg",
    alt: "Skilled workers",
    category: "Team & Infrastructure",
    height: "tall",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953948/close-up-sewing-machine-tailor-shop_f7mm93.jpg",
    alt: "Factory equipment",
    category: "Factory Images",
    height: "short",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779953947/technician-worker-cutting-metal-with-many-sharp-sparks-using-equipments-cat-iron_boxbcl.jpg",
    alt: "Production floor",
    category: "Factory Images",
    height: "medium",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779960595/19562_e37ssk.jpg",
    alt: "Rolling machinery",
    category: "Machines",
    height: "tall",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779960520/17180_wdjem1.jpg",
    alt: "Manufacturing process",
    category: "Manufacturing Process",
    height: "medium",
  },
];

export const galleryCategories: GalleryItem["category"][] = [
  "Factory Images",
  "Machines",
  "Manufacturing Process",
  "Product Showcase",
  "Team & Infrastructure",
];
