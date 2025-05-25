import type { Metadata } from "next"
import Hero from "@/components/hero"
import StatsCounter from "@/components/stats-counter"
import ServicesOverview from "@/components/services-overview"
import WhyChooseUs from "@/components/why-choose-us"
import ProblemsSolved from "@/components/problems-solved"
import Certifications from "@/components/certifications"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "All-in-One Business Solutions | From Startup to Scale-Up | MH Digital Solutions",
  description:
    "Struggling to Thriving—We Fix, Build & Grow Your Business! Comprehensive business solutions with 50% cost reduction through global talent. Free consultation available.",
  keywords: [
    "all in one business solutions",
    "integrated business services",
    "small business consulting USA",
    "business development services",
    "unregistered business help",
    "business cost reduction 50%",
    "global talent solutions for small business",
    "free business consultation",
    "get free business help",
  ],
  openGraph: {
    title: "All-in-One Business Solutions | From Startup to Scale-Up",
    description: "Struggling to Thriving—We Fix, Build & Grow Your Business!",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-32 bg-slate-50" />}>
        <StatsCounter />
      </Suspense>
      <ServicesOverview />
      <WhyChooseUs />
      <ProblemsSolved />
      <Certifications />
    </>
  )
}
