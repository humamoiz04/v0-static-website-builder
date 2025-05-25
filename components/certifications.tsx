"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Google Partner",
      description: "Certified Google Ads & Analytics expert",
      image: "/placeholder.svg?height=80&width=80",
      link: "https://partners.google.com",
      badge: "Certified Partner",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "HubSpot Solutions Partner",
      description: "Certified CRM and marketing automation",
      image: "/placeholder.svg?height=80&width=80",
      link: "https://ecosystem.hubspot.com",
      badge: "Solutions Partner",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Meta Partner",
      description: "Azure and Office 365 certified",
      image: "/placeholder.svg?height=80&width=80",
      link: "https://partner.meta.com",
      badge: "Gold Partner",
      color: "from-blue-600 to-blue-800",
    },
  ]

  const mediaFeatures = [
    {
      outlet: "Forbes",
      title: "How Small Businesses Can Reduce Costs by 50%",
      link: "https://forbes.com/mh-digital-solutions",
      date: "2024",
      type: "Featured Article",
    },
    {
      outlet: "TechCrunch",
      title: "Global Talent Solutions Revolutionizing SMB Operations",
      link: "https://techcrunch.com/mh-digital-solutions",
      date: "2024",
      type: "Startup Spotlight",
    },
    {
      outlet: "Entrepreneur",
      title: "The Future of Business Process Optimization",
      link: "https://entrepreneur.com/mh-digital-solutions",
      date: "2023",
      type: "Expert Interview",
    },
    {
      outlet: "Inc. Magazine",
      title: "Top Business Solutions Providers to Watch",
      link: "https://inc.com/mh-digital-solutions",
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
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Trust & Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Certified Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our certifications, awards, and media recognition demonstrate our commitment to delivering exceptional
            business solutions.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Official Certifications & Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                  </div>

                  <Badge className="mb-3 bg-emerald-100 text-emerald-800">{cert.badge}</Badge>

                  <h4 className="font-bold text-slate-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-slate-600 mb-4">{cert.description}</p>

                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full">
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
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured In Leading Publications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">
                        {feature.outlet.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{feature.outlet}</h4>
                        <Badge variant="outline" className="text-xs">
                          {feature.type}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">{feature.date}</span>
                  </div>

                  <h5 className="font-semibold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h5>

                  <Link href={feature.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
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
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Industry Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="text-center border border-emerald-200 hover:border-emerald-300 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                    <Award className="w-8 h-8" />
                  </div>

                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{award.title}</h4>
                  <p className="text-xs text-slate-600 mb-1">{award.organization}</p>
                  <p className="text-xs text-emerald-600 font-semibold">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Trust Us</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4 text-emerald-200" />
              <h4 className="text-xl font-semibold mb-2">Verified & Certified</h4>
              <p className="text-emerald-100">All our certifications are verified and up-to-date</p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 mb-4 text-emerald-200" />
              <h4 className="text-xl font-semibold mb-2">Award-Winning Service</h4>
              <p className="text-emerald-100">Recognized by industry leaders and publications</p>
            </div>

            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-emerald-200" />
              <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
              <p className="text-emerald-100">500+ successful business transformations</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  )
}
