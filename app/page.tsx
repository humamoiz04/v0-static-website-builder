import type { Metadata } from "next"
import Hero from "@/components/hero" // Assuming updated Hero component
import StatsCounter from "@/components/stats-counter" // Assuming updated StatsCounter component
import ServicesOverview from "@/components/services-overview" // Assuming updated ServicesOverview component
import WhyChooseUs from "@/components/why-choose-us" // Assuming updated WhyChooseUs component
import ProblemsSolved from "@/components/problems-solved" // Assuming updated ProblemsSolved component
import Certifications from "@/components/certifications" // Assuming updated Certifications component
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "All-in-One Business Solutions | From Startup to Scale-Up | MH Digital Solutions", // Review and update title
  description:
    "Struggling to Thriving—We Fix, Build & Grow Your Business! Comprehensive business solutions with 50% cost reduction through global talent. Free consultation available.", // Review and update description
  keywords: [ // Ensure keywords are relevant and cover key services/VPs
    "all in one business solutions",
    "integrated business services",
    "small business consulting USA",
    "business development services",
    "unregistered business help",
    "business cost reduction 50%",
    "global talent solutions for small business",
    "free business consultation",
    "get free business help",
     // Add more keywords from the comprehensive list
     "business registration help",
     "small business insurance",
     "affordable web design small business",
     "organic SEO services USA",
     "operational efficiency consulting",
     "cost effective business solutions",
     "hire remote employees global",
  ],
  openGraph: { // Review and update based on final site message
    title: "All-in-One Business Solutions | From Startup to Scale-Up",
    description: "Struggling to Thriving—We Fix, Build & Grow Your Business!",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero /> {/* Uses updated Hero */}
      <Suspense fallback={<div className="h-32 bg-background" />}> {/* Use background variable */}
        <StatsCounter /> {/* Uses updated StatsCounter */}
      </Suspense>
      <ServicesOverview /> {/* Uses updated ServicesOverview */}
      <WhyChooseUs /> {/* Uses updated WhyChooseUs */}
      <ProblemsSolved /> {/* Uses updated ProblemsSolved */}
      <Certifications /> {/* Uses updated Certifications */}
       {/* Assuming LuxuryCTAForm is used elsewhere, e.g., on a consultation page */}
       {/* <LuxuryCTAForm /> */}
    </>
  )
}
