import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "MH Digital Solutions" }],
  creator: "MH Digital Solutions",
  publisher: "MH Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mhdigitalsolution.com"),
  alternates: {
    canonical: "https://mhdigitalsolution.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhdigitalsolution.com",
    title: "MH Digital Solutions - All-in-One Business Solutions",
    description: "From Startup to Scale-Up, Struggling to Thriving—We Fix, Build & Grow Your Business!",
    siteName: "MH Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Digital Solutions - All-in-One Business Solutions",
    description: "From Startup to Scale-Up, Struggling to Thriving—We Fix, Build & Grow Your Business!",
    creator: "@mhdigitalsolutions",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MH Digital Solutions",
              description: "All-in-One Business Solutions from Startup to Scale-Up",
              url: "https://mhdigitalsolution.com",
              logo: "https://mhdigitalsolution.com/logo.webp",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://linkedin.com/company/mhdigitalsolution", "https://twitter.com/mhdigitalsolution"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
