import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google" // Import Poppins
import "./globals.css"
import Navigation from "@/components/navigation" // Assuming updated Navigation component
import Footer from "@/components/footer" // Assuming updated Footer component
import WhatsAppChat from "@/components/whatsapp-chat" // Assuming updated WhatsAppChat component

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }) // Define as variable
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '700'], variable: '--font-poppins' }) // Define Poppins as variable

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mhdigitalsolution.com"),
  title: {
    default: "MH Digital Solutions - All-in-One Business Solutions | From Startup to Scale-Up",
    template: "%s | MH Digital Solutions",
  },
  description:
    "Comprehensive business solutions from registration to growth. We fix, build & grow your business with 50% cost reduction through global talent solutions. Free consultation available.",
  keywords: [
    "all in one business solutions",
    "integrated business services",
    "small business consulting USA",
    "business development services",
    "business solutions from registration to growth",
    "problem solving business solutions",
    "comprehensive business help",
    "business cost reduction 50%",
    "global talent solutions",
    "affordable business solutions",
    "business growth consultant",
    "small business problem solver",
    "business registration and branding services",
    "fix my business operations",
  ],
  authors: [{ name: "MH Digital Solutions" }],
  creator: "MH Digital Solutions",
  publisher: "MH Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mhdigitalsolution.com",
    title: "MH Digital Solutions - All-in-One Business Solutions",
    description: "From Startup to Scale-Up, Struggling to Thriving—We Fix, Build & Grow Your Business!",
    siteName: "MH Digital Solutions",
    images: [
      {
        url: "/images/og-image.webp", // Ensure this image exists and matches your new brand style
        width: 1200,
        height: 630,
        alt: "MH Digital Solutions - Business Transformation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Digital Solutions - All-in-One Business Solutions",
    description: "From Startup to Scale-Up, Struggling to Thriving—We Fix, Build & Grow Your Business!",
    creator: "@moiz_khan845", // Use your actual Twitter handle
    images: ["/images/og-image.webp"], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual code
  },
    generator: 'v0.dev' // Keep or remove as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts Links - Add these */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> {/* Link Inter and Poppins */}

        <link rel="canonical" href="https://www.mhdigitalsolution.com" />
        {/* Schema Markup - Looks correct */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MH Digital Solutions",
              description: "All-in-One Business Solutions from Startup to Scale-Up",
              url: "https://www.mhdigitalsolution.com",
              logo: "https://www.mhdigitalsolution.com/images/mh-logo.webp", // Ensure this logo exists and matches brand
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-757-550-4040",
                  contactType: "customer service",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+1-707-582-2255",
                  contactType: "WhatsApp",
                  availableLanguage: "English",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/1C6iWHe1fC/", // Verify URLs
                "https://www.instagram.com/mh_digitalsolutions", // Verify URLs
                "https://x.com/moiz_khan845", // Verify URLs
                "https://linkedin.com/company/mhdigitalsolutions", // Add LinkedIn
              ],
               // Update address if necessary
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "NY",
                addressLocality: "New York",
                streetAddress: "123 Business Ave, Suite 100",
                postalCode: "10001",
              },
              // Update founder name
              founder: {
                "@type": "Person",
                name: "Your Founder Name", // Replace with actual founder name
              },
               // Update founding date
              foundingDate: "Your Founding Date", // Replace with actual date (e.g., "2014-01-01")
              numberOfEmployees: "50+", // Update count if necessary
              areaServed: "United States",
              serviceType: [
                "Business Consulting",
                "Digital Marketing",
                "E-commerce Development",
                "Global Talent Solutions",
                "Legal & Compliance",
                "Premium Business Solutions",
              ],
            }),
          }}
        />
      </head>
      {/* Apply font variables to body class */}
      <body className={`${inter.variable} ${poppins.variable}`}> {/* Use font variables */}
        <Navigation /> {/* Ensure Navigation uses updated styles */}
        <main>{children}</main>
        <Footer /> {/* Ensure Footer uses updated styles */}
        <WhatsAppChat /> {/* Ensure WhatsAppChat uses updated styles */}
      </body>
    </html>
  )
}
