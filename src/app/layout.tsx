import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/data/site";
import { createMetadata, pageSeo, serializeJsonLd, siteUrl, socialImage } from "@/lib/seo";

const SITE_URL = siteUrl;

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
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,

  name: siteConfig.name,
  alternateName: "SVN Enterprises Erode",
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 1024,
    height: 1024,
  },

  image: socialImage.url,

  description:
    siteConfig.description ||
    "SVN Enterprises is a trusted textile machinery manufacturer in Erode, Tamil Nadu, providing fabric inspection, rolling, batching, washing and customized textile processing machines.",

  foundingDate: siteConfig.established || "2012",

  email: siteConfig.email?.trim(),

  telephone: siteConfig.phone
    ? `+91${siteConfig.phone.replace(/\D/g, "")}`
    : undefined,

  openingHours: "Mo-Sa 09:00-19:00",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91${siteConfig.phone.replace(/\D/g, "")}`,
    email: siteConfig.email,
    contactType: "sales",
    areaServed: "IN",
  },

  sameAs: Object.values(siteConfig.socials).filter(Boolean),

  address: {
    "@type": "PostalAddress",

    streetAddress: siteConfig.address?.line2?.trim(),

    addressLocality:
      siteConfig.address?.city || "Erode",

    addressRegion:
      siteConfig.address?.state || "Tamil Nadu",

    postalCode:
      siteConfig.address?.pincode,

    addressCountry: "IN",
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
  ...createMetadata(pageSeo.home),
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Textile Machinery Manufacturing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  verification: { google: "kmVqn_YStuVXKVJubA8gxwQo4OSunHofNYKxShen5TQ" },
  other: { "geo.region": "IN-TN", "geo.placename": "Erode, Tamil Nadu" },
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
            __html: serializeJsonLd(organizationSchema),
          }}
        />

        {/* Website Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(websiteSchema),
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
