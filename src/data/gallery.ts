import type { GalleryItem } from "@/types";

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&auto=format&fit=crop&q=70",
    alt: "Textile factory floor",
    category: "Factory Images",
    height: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=70",
    alt: "Industrial machine close-up",
    category: "Machines",
    height: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&auto=format&fit=crop&q=70",
    alt: "Manufacturing line",
    category: "Manufacturing Process",
    height: "short",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&auto=format&fit=crop&q=70",
    alt: "Fabric inspection setup",
    category: "Product Showcase",
    height: "medium",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&auto=format&fit=crop&q=70",
    alt: "Quality inspection",
    category: "Manufacturing Process",
    height: "tall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&auto=format&fit=crop&q=70",
    alt: "Sewing machines",
    category: "Machines",
    height: "short",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=70",
    alt: "Textile machinery",
    category: "Product Showcase",
    height: "medium",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?w=1200&auto=format&fit=crop&q=70",
    alt: "Skilled workers",
    category: "Team & Infrastructure",
    height: "tall",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=1200&auto=format&fit=crop&q=70",
    alt: "Factory equipment",
    category: "Factory Images",
    height: "short",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1565299543923-37dd37887442?w=1200&auto=format&fit=crop&q=70",
    alt: "Production floor",
    category: "Factory Images",
    height: "medium",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&auto=format&fit=crop&q=70",
    alt: "Rolling machinery",
    category: "Machines",
    height: "tall",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1606293459339-aa4f3d61f6f3?w=1200&auto=format&fit=crop&q=70",
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
