import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/data/site";

const SITE_URL = "https://www.svnenterprises.co.in";

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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logoUrl,
  description: siteConfig.description,
  email: siteConfig.email.trim(),
  telephone: `+91${siteConfig.phone.replace(/\D/g, "")}`,
  foundingDate: siteConfig.established,
  founder: {
    "@type": "Person",
    name: siteConfig.ceo,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line2.trim(),
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pincode,
    addressCountry: siteConfig.address.country,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: siteConfig.name,

  title: {
    default: `${siteConfig.name} | Textile Machinery Manufacturer`,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    siteConfig.description ||
    "SVN Enterprises is a trusted textile machinery manufacturer in Erode, Tamil Nadu, providing fabric inspection, rolling, batching, washing and customized textile processing machines.",

  keywords: [
    "SVN Enterprises",
    "SVN Enterprises Erode",
    "textile machinery manufacturer",
    "textile machine manufacturer in Erode",
    "textile machinery manufacturer in Tamil Nadu",
    "fabric inspection machine manufacturer",
    "fabric rolling machine manufacturer",
    "gray batching machine",
    "J Box machine",
    "drying range machine",
    "continuous washing range",
    "washer extractor machine",
    "industrial textile machines",
    "custom textile machinery",
    "textile processing equipment",
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
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },

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
        url: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1784030005/logo_svn_dcmq5b.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} textile machinery manufacturer`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Textile Machinery Manufacturer`,
    description:
      siteConfig.description ||
      "Reliable textile machinery manufacturing and customized industrial solutions.",
    images: ["https://res.cloudinary.com/ddpfxvydm/image/upload/v1784030005/logo_svn_dcmq5b.png"],
  },

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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  verification: {
    // Add the verification code from Google Search Console.
    google: "kmVqn_YStuVXKVJubA8gxwQo4OSunHofNYKxShen5TQ",
  },

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Erode, Tamil Nadu",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: siteConfig.name,
  url: SITE_URL,

  logo:
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1784030005/logo_svn_dcmq5b.png",

  image:
    "https://res.cloudinary.com/ddpfxvydm/image/upload/v1784030005/logo_svn_dcmq5b.png",

  description:
    siteConfig.description ||
    "SVN Enterprises manufactures textile processing machinery and customized industrial equipment.",

  foundingDate: "2012",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Erode",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  knowsAbout: [
    "Textile Machinery",
    "Fabric Inspection Machines",
    "Fabric Rolling Machines",
    "Gray Batching Machines",
    "Drying Range Machines",
    "J-Box Machines",
    "Continuous Washing Range",
    "Customized Textile Machinery",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: siteConfig.name,
  url: SITE_URL,
  description: siteConfig.description,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Navbar />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />
        <ScrollToTop />
        <FloatingActions />
      </body>
    </html>
  );
}