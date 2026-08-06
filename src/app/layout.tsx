import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/data/site";

const SITE_URL = "https://www.svnenterprises.co.in";

const LOGO_URL = `${SITE_URL}/images/logo.png`;

/* =========================
   FONTS
========================= */

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* =========================
   ORGANIZATION SCHEMA
========================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Manufacturer"],
  "@id": `${SITE_URL}/#organization`,

  name: siteConfig.name,
  alternateName: "SVN Enterprises Erode",
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },

  image: LOGO_URL,

  description:
    siteConfig.description ||
    "SVN Enterprises is a trusted textile machinery manufacturer in Erode, Tamil Nadu, providing fabric inspection, rolling, batching, washing and customized textile processing machines.",

  foundingDate: siteConfig.established || "2012",

  founder: {
    "@type": "Person",
    name: siteConfig.ceo,
  },

  email: siteConfig.email?.trim(),

  telephone: siteConfig.phone
    ? `+91${siteConfig.phone.replace(/\D/g, "")}`
    : undefined,

  openingHours: "Mo-Sa 09:00-19:00",

  address: {
    "@type": "PostalAddress",

    streetAddress: siteConfig.address?.line2?.trim(),

    addressLocality:
      siteConfig.address?.city || "Erode",

    addressRegion:
      siteConfig.address?.state || "Tamil Nadu",

    postalCode:
      siteConfig.address?.pincode,

    addressCountry:
      siteConfig.address?.country || "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  knowsAbout: [
    "Textile Machinery",
    "Textile Processing Machinery",
    "Fabric Inspection Machines",
    "Rope Opener and Slit Opener",
    "Book Folding Machines",
    "Stretch Wrapping Machines",
    "Batching Machines",
    "Fabric Rolling Machines",
    "Electronic Jigger Machines",
    "J-Box Machines",
    "Brushing Machines",
    "Open Width Tumbler Swing Machines",
    "Material Handling Equipment",
    "Customized Textile Machinery",
    "Industrial Textile Equipment",
  ],
};

/* =========================
   WEBSITE SCHEMA
========================= */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  name: siteConfig.name,
  url: SITE_URL,

  description:
    siteConfig.description ||
    "SVN Enterprises manufactures textile processing machinery and customized industrial textile equipment in Erode, Tamil Nadu.",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en-IN",
};

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: siteConfig.name,

  title: {
    default: `${siteConfig.name} | Textile Machinery Manufacturer`,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    siteConfig.description ||
    "SVN Enterprises is a trusted textile machinery manufacturer in Erode, Tamil Nadu, providing fabric inspection, folding, batching, rolling, wrapping, dyeing and customized textile processing machines.",

  keywords: [
    "SVN Enterprises",
    "SVN Enterprises Erode",
    "textile machinery manufacturer",
    "textile machine manufacturer in Erode",
    "textile machinery manufacturer in Tamil Nadu",
    "fabric inspection machine manufacturer",
    "fabric rolling machine manufacturer",
    "batching machine manufacturer",
    "book folding machine manufacturer",
    "stretch wrapping machine manufacturer",
    "electronic jigger machine manufacturer",
    "J Box machine",
    "J-Box machine manufacturer",
    "rope opener and slit opener manufacturer",
    "material handling equipment manufacturer",
    "industrial textile machines",
    "custom textile machinery",
    "textile processing equipment",
    "textile machinery manufacturer in India",
    "textile processing machinery manufacturer",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: SITE_URL,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  category: "Textile Machinery Manufacturing",

  alternates: {
    languages: {
      "en-IN": SITE_URL,
    },
  },

  /* =========================
     OPEN GRAPH
  ========================= */

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: SITE_URL,

    siteName: siteConfig.name,

    title: `${siteConfig.name} | Textile Machinery Manufacturer`,

    description:
      siteConfig.description ||
      "Manufacturer of reliable textile processing machines and customized industrial machinery in Erode, Tamil Nadu.",

    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} - Textile Machinery Manufacturer`,
      },
    ],
  },

  /* =========================
     TWITTER / X
  ========================= */

  twitter: {
    card: "summary_large_image",

    title: `${siteConfig.name} | Textile Machinery Manufacturer`,

    description:
      siteConfig.description ||
      "Reliable textile machinery manufacturing and customized industrial solutions in Erode, Tamil Nadu.",

    images: [LOGO_URL],
  },

  /* =========================
     ROBOTS
  ========================= */

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // `src/app/icon.png` and `src/app/apple-icon.png` are discovered by Next.js
  // and generate valid, crawlable icon links automatically.

  /* =========================
     WEB APP MANIFEST
  ========================= */

  manifest: "/manifest.webmanifest",

  /* =========================
     GOOGLE SEARCH CONSOLE
  ========================= */

  verification: {
    google: "kmVqn_YStuVXKVJubA8gxwQo4OSunHofNYKxShen5TQ",
  },

  /* =========================
     GEO META
  ========================= */

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Erode, Tamil Nadu",
  },
};

/* =========================
   VIEWPORT
========================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${sans.variable} ${display.variable}`}
    >
      <body>
        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Navbar */}

        <Navbar />

        {/* Main Content */}

        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Footer */}

        <Footer />

        {/* Floating Components */}

        <ScrollToTop />

        <FloatingActions />
      </body>
    </html>
  );
}
