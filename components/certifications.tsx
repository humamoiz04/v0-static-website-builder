"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button" // Assuming this is your custom Button
import { ExternalLink, Award, Shield, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      name: "Clutch Premier Verified",
      description: "Top-rated business solutions provider",
      image: "/images/clutch-verified.png",
      link: "https://clutch.co/profile/mh-digital-solutions",
      badge: "Premier Partner",
      // Use colors from the new palette or remove if gradients aren't part of this style
      color: "from-emerald-500 to-teal-500", // Consider removing or updating these gradients
    },
    {
      name: "Google Partner",
      description: "Certified Google Ads & Analytics expert",
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
      link: "https://partners.google.com",
      badge: "Certified Partner",
      color: "from-blue-500 to-indigo-500", // Consider removing or updating
    },
    {
      name: "HubSpot Solutions Partner",
      description: "Certified CRM and marketing automation",
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
      link: "https://ecosystem.hubspot.com",
      badge: "Solutions Partner",
      color: "from-orange-500 to-red-500", // Consider removing or updating
    },
    {
      name: "Meta Partner",
      description: "Meta certified", 
      image: "/meta-partner-webp", // Replace with actual image
      link: "https://partner.meta.com", // 
      badge: "Gold Partner",
      color: "from-blue-600 to-blue-800", // Consider removing or updating
    },
  ]

  const mediaFeatures = [
    {
      outlet: "Forbes",
      title: "How Small Businesses Can Reduce Costs by 50%",
      link: "https://forbes.com/mh-digital-solutions", // Use actual link
      date: "2024",
      type: "Featured Article",
    },
    {
      outlet: "TechCrunch",
      title: "Global Talent Solutions Revolutionizing SMB Operations",
      link: "https://techcrunch.com/mh-digital-solutions", // Use actual link
      date: "2024",
      type: "Startup Spotlight",
    },
    {
      outlet: "Entrepreneur",
      title: "The Future of Business Process Optimization",
      link: "https://entrepreneur.com/mh-digital-solutions", // Use actual link
      date: "2023",
      type: "Expert Interview",
    },
    {
      outlet: "Inc. Magazine",
      title: "Top Business Solutions Providers to Watch",
      link: "https://inc.com/mh-digital-solutions", // Use actual link
      date: "2023",
      type: "Industry Recognition",
    },
  ]

  const awards = [
    {
      title: "Best Business Solutions Provider 2024",
      organization: "Business Excellence Awards",
      year: "2024",
    },
    {
      title: "Top Digital Marketing Agency",
      organization: "Marketing Awards USA",
      year: "2023",
    },
    {
      title: "Innovation in Global Talent Solutions",
      organization: "HR Tech Awards",
      year: "2023",
    },
    {
      title: "Customer Success Excellence",
      organization: "Service Quality Institute",
      year: "2022",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background"> {/* Use background variable */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="luxury-badge mb-6"> {/* Use new badge class */}
            Trust & Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6"> {/* Use dark text color */}
            Certified Excellence
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"> {/* Use text-foreground */}
            Our certifications, awards, and media recognition demonstrate our commitment to delivering exceptional
            business solutions.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">Official Certifications & Partnerships</h3> {/* Use dark text color */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="luxury-card group hover:shadow-lg transition-all duration-500" // Use luxury card class and subtle hover shadow
              >
                <CardContent className="p-6 text-center">
                   {/* Use icon wrapper for image container */}
                  <div
                    className="luxury-icon-wrapper w-20 h-20 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                    // Remove individual gradient color classes here unless they use the new palette
                     style={{ background: 'rgb(var(--primary-button))' }} // Example: Solid pink background
                  >
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={60}
                      height={60}
                       // rounded-lg on image seems fine
                      className="rounded-lg"
                    />
                  </div>

                  <Badge className="luxury-badge mb-3">{cert.badge}</Badge> {/* Use new badge class */}

                  <h4 className="font-bold text-text-dark mb-2">{cert.name}</h4> {/* Use dark text color */}
                  <p className="text-sm text-foreground/70 mb-4">{cert.description}</p> {/* Use text-foreground */}

                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full luxury-btn-secondary"> {/* Use luxury secondary button */}
                      Verify
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">Featured In Leading Publications</h3> {/* Use dark text color */}
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="luxury-card group hover:shadow-lg transition-all duration-300 border-0"> {/* Use luxury card */}
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                       {/* Use icon wrapper for initial circle */}
                      <div className="luxury-icon-wrapper w-12 h-12 rounded-xl flex items-center justify-center font-bold">
                         {/* Remove gradient class */}
                        {feature.outlet.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-dark">{feature.outlet}</h4> {/* Use dark text color */}
                        <Badge className="luxury-badge text-xs"> {/* Use new badge class */}
                          {feature.type}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-foreground/60">{feature.date}</span> {/* Use text-foreground */}
                  </div>

                  <h5 className="font-semibold text-foreground/90 mb-3 group-hover:text-primary transition-colors"> {/* Use text-foreground/primary */}
                    {feature.title}
                  </h5>

                  <Link href={feature.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80"> {/* Use primary color */}
                      Read Article
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">Industry Awards & Recognition</h3> {/* Use dark text color */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="luxury-card text-center hover:border-primary/30 transition-colors" // Use luxury card
              >
                <CardContent className="p-6">
                   {/* Use icon wrapper for icon container */}
                  <div className="luxury-icon-wrapper w-16 h-16 rounded-full mb-4 mx-auto">
                     {/* Remove gradient class */}
                    <Award className="w-8 h-8" /> {/* Icon color comes from wrapper text color */}
                  </div>

                  <h4 className="font-bold text-text-dark mb-2 text-sm">{award.title}</h4> {/* Use dark text color */}
                  <p className="text-xs text-foreground/70 mb-1">{award.organization}</p> {/* Use text-foreground */}
                  <p className="text-xs text-primary font-semibold">{award.year}</p> {/* Use primary color */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Example using a luxury-cta-section style background */}
        <div className="luxury-cta-section rounded-3xl p-8 md:p-12 text-center"> {/* Use cta section class */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Businesses Trust Us</h3> {/* Ensure white text */}

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4 text-primary-button" /> {/* Use primary button color */}
              <h4 className="text-xl font-semibold mb-2 text-white">Verified & Certified</h4>
              <p className="text-white/80">All our certifications are verified and up-to-date</p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 mb-4 text-primary-button" /> {/* Use primary button color */}
              <h4 className="text-xl font-semibold mb-2 text-white">Award-Winning Service</h4>
              <p className="text-white/80">Recognized by industry leaders and publications</p>
            </div>

            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-primary-button" /> {/* Use primary button color */}
              <h4 className="text-xl font-semibold mb-2 text-white">Proven Results</h4>
              <p className="text-white/80">500+ successful business transformations</p>
            </div>
          </div>

          <Button size="lg" className="luxury-button px-8 py-4 text-lg font-semibold"> {/* Use luxury button */}
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  )
}
