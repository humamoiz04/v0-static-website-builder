import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

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
        url: "/images/og-image.webp",
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
    creator: "@moiz_khan845",
    images: ["/images/og-image.webp"],
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
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://www.mhdigitalsolution.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MH Digital Solutions",
              description: "All-in-One Business Solutions from Startup to Scale-Up",
              url: "https://www.mhdigitalsolution.com",
              logo: "https://www.mhdigitalsolution.com/images/mh-logo.webp",
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
                "https://www.facebook.com/share/1C6iWHe1fC/",
                "https://www.instagram.com/mh_digitalsolutions",
                "https://x.com/moiz_khan845",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "NY",
                addressLocality: "New York",
                streetAddress: "123 Business Ave, Suite 100",
                postalCode: "10001",
              },
              founder: {
                "@type": "Person",
                name: "Michael Hassan",
              },
              foundingDate: "2014",
              numberOfEmployees: "50+",
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
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
