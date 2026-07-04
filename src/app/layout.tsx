import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06121E",
};

const SITE_URL = "https://izavitainfratech.com";

export const metadata: Metadata = {
  title: {
    default: "IzaVita Infratech Kochi | BIM Engineering | Designing | Construction Services | Professional Training",
    template: "%s | IzaVita Infratech",
  },
  description:
    "IzaVita Infratech, Kochi — BIM coordination, Revit/AutoCAD modeling, MEP engineering, Primavera P6 project controls & Quantity Surveying services, plus industry-oriented EdTech training for engineers and students in Kerala.",
  keywords: [
    "BIM training Kochi",
    "Revit course Kerala",
    "Best BIM company in Kochi",
    "Best Construction Engineering Services Kerala",
    "Building Construction services Kochi",
    "BIM coordination company Kochi",
    "MEP engineering services Kochi",
    "Quantity Surveying course Kerala",
    "BOQ estimation services",
    "AutoCAD training Kochi",
    "SketchUp 3D modeling",
    "Digital engineering consultancy Kerala",
    "IzaVita",
    "IzaVita Infratech",
  ],
  authors: [{ name: "IzaVita Infratech", url: SITE_URL }],
  creator: "IzaVita Infratech",
  publisher: "IzaVita Infratech",
  metadataBase: new URL(SITE_URL),
  applicationName: "IzaVita Infratech",
  category: "Engineering & Education",

  openGraph: {
    title: "IzaVita Infratech | BIM & Design Engineering Solutions, Kochi",
    description:
      "Building Information Modeling, Revit/MEP engineering, Primavera project controls, Quantity Surveying — and hands-on EdTech training — based in Kochi, Kerala.",
    url: SITE_URL,
    siteName: "IzaVita Infratech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "IzaVita Infratech - BIM & Design Engineering Solutions, Kochi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IzaVita Infratech | BIM, MEP, Primavera & Quantity Surveying, Kochi",
    description: "Digital engineering consultancy and EdTech training based in Kochi, Kerala.",
    images: ["/images/og-cover.jpg"],
  },

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

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    // Replace with your actual Google Search Console token
    google: "your-google-site-verification-code",
  },

  icons: {
    icon: "/images/LOGO ICON.svg",
    shortcut: "/images/LOGO ICON.svg",
    apple: "/images/LOGO ICON.svg",
  },

  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi",
    "geo.position": "9.9312;76.2673",
    ICBM: "9.9312, 76.2673",
  },
};

// JSON-LD: combines Organization + LocalBusiness + EducationalOrganization facts
// so AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini) and
// Google's Knowledge Graph can extract accurate, quotable facts about you.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "EducationalOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: "IzaVita Infratech",
      alternateName: "IzaVita",
      url: SITE_URL,
      logo: `${SITE_URL}/images/LOGO ICON.svg`,
      image: `${SITE_URL}/images/og-cover.jpg`,
      description:
        "IzaVita Infratech provides BIM coordination, Revit/AutoCAD modeling, MEP engineering, Primavera P6 project controls, and Quantity Surveying services, alongside industry-oriented EdTech training programs, based in Kochi, Kerala, India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9312,
        longitude: 76.2673,
      },
      areaServed: ["Kochi", "Kerala", "India"],
      knowsAbout: [
        "Building Information Modeling (BIM)",
        "Autodesk Revit",
        "AutoCAD",
        "SketchUp 3D Modeling",
        "MEP Engineering",
        "Primavera P6 Project Controls",
        "Quantity Surveying",
        "BOQ Estimation",
      ],
      sameAs: [
        // add real profiles
        "https://www.linkedin.com/company/izavita-infratech",
        "https://www.instagram.com/izavita.infratech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "IzaVita Infratech",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full bg-[#06121E] text-white selection:bg-[#00A5EC] selection:text-white">
        {children}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
