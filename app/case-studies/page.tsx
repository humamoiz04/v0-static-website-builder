import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, DollarSign, Clock, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | Business Transformation Portfolio | MH Digital Solutions",
  description:
    "Real business success stories and case studies. See how we've helped 500+ businesses reduce costs, increase revenue, and achieve sustainable growth.",
  keywords: [
    "business success stories",
    "case studies business growth",
    "client results consulting",
    "business problem solutions examples",
    "business cost reduction case study",
    "increase sales case study",
    "operational efficiency case study",
    "startup success stories",
    "small business growth case studies",
  ],
}

export default function CaseStudiesPage() {
  const featuredCaseStudy = {
    title: "Restaurant Chain: From Near-Bankruptcy to $2M Annual Revenue",
    client: "Bella Vista Restaurant Group",
    industry: "Food & Beverage",
    challenge: "3-location restaurant chain facing bankruptcy due to poor operations, declining sales, and high costs",
    solution: "Complete operational overhaul, staff retraining, digital marketing launch, and cost optimization",
    timeline: "6 months",
    results: [
      { metric: "Revenue Growth", value: "+340%", description: "From $600K to $2M annually" },
      { metric: "Cost Reduction", value: "-45%", description: "Operational costs decreased" },
      { metric: "Customer Satisfaction", value: "4.8/5", description: "Google Reviews average" },
      { metric: "Table Turnover", value: "+65%", description: "Improved efficiency" },
    ],
    image: "/images/business-growth.webp",
    testimonial: {
      quote:
        "MH Digital Solutions saved our business. We went from considering bankruptcy to opening our 4th location. Their integrated approach addressed every aspect of our operations.",
      author: "Maria Rodriguez",
      position: "Owner, Bella Vista Restaurant Group",
    },
  }

  const caseStudies = [
    {
      title: "E-commerce Store: 2% to 12% Conversion Rate",
      client: "TechGear Online",
      industry: "E-commerce",
      challenge: "High traffic but extremely low conversion rates",
      solution: "Complete UI/UX redesign, checkout optimization, and abandoned cart recovery",
      results: [
        { metric: "Conversion Rate", value: "+500%", color: "text-emerald-600" },
        { metric: "Revenue", value: "+280%", color: "text-blue-600" },
        { metric: "Cart Abandonment", value: "-70%", color: "text-purple-600" },
      ],
      timeline: "3 months",
      image: "/images/analytics-dashboard.webp",
      tags: ["E-commerce", "Conversion Optimization", "UI/UX"],
    },
    {
      title: "Manufacturing Company: 50% Cost Reduction",
      client: "Precision Parts Inc.",
      industry: "Manufacturing",
      challenge: "High operational costs and inefficient processes",
      solution: "Global talent integration, process automation, and workflow optimization",
      results: [
        { metric: "Cost Reduction", value: "-52%", color: "text-emerald-600" },
        { metric: "Productivity", value: "+85%", color: "text-blue-600" },
        { metric: "Quality Score", value: "+40%", color: "text-purple-600" },
      ],
      timeline: "4 months",
      image: "/images/business-process-optimization.webp",
      tags: ["Manufacturing", "Cost Reduction", "Global Talent"],
    },
    {
      title: "SaaS Startup: $0 to $1M ARR",
      client: "CloudSync Solutions",
      industry: "Technology",
      challenge: "New startup needing complete business foundation and growth strategy",
      solution: "Business registration, product development, marketing strategy, and funding preparation",
      results: [
        { metric: "ARR Growth", value: "$1M", color: "text-emerald-600" },
        { metric: "Funding Raised", value: "$2.5M", color: "text-blue-600" },
        { metric: "Enterprise Clients", value: "25+", color: "text-purple-600" },
      ],
      timeline: "12 months",
      image: "/images/data-analytics-dashboard.webp",
      tags: ["SaaS", "Startup", "Funding"],
    },
    {
      title: "Healthcare Practice: Digital Transformation",
      client: "Wellness Medical Group",
      industry: "Healthcare",
      challenge: "Outdated systems, poor patient experience, and declining revenue",
      solution: "Digital system implementation, patient portal, and online marketing",
      results: [
        { metric: "Patient Satisfaction", value: "+90%", color: "text-emerald-600" },
        { metric: "Online Bookings", value: "+300%", color: "text-blue-600" },
        { metric: "Revenue", value: "+45%", color: "text-purple-600" },
      ],
      timeline: "5 months",
      image: "/images/analytics-team.webp",
      tags: ["Healthcare", "Digital Transformation", "Patient Experience"],
    },
    {
      title: "Retail Chain: Omnichannel Success",
      client: "Fashion Forward Stores",
      industry: "Retail",
      challenge: "Declining in-store sales and no online presence",
      solution: "E-commerce platform, inventory integration, and omnichannel marketing",
      results: [
        { metric: "Online Sales", value: "+400%", color: "text-emerald-600" },
        { metric: "Total Revenue", value: "+120%", color: "text-blue-600" },
        { metric: "Customer Retention", value: "+75%", color: "text-purple-600" },
      ],
      timeline: "6 months",
      image: "/images/business-cycle.webp",
      tags: ["Retail", "Omnichannel", "E-commerce"],
    },
    {
      title: "Professional Services: Global Expansion",
      client: "Elite Consulting Group",
      industry: "Professional Services",
      challenge: "Limited by local talent pool and high operational costs",
      solution: "Global talent network implementation and remote team management",
      results: [
        { metric: "Cost Savings", value: "-60%", color: "text-emerald-600" },
        { metric: "Service Capacity", value: "+200%", color: "text-blue-600" },
        { metric: "Client Satisfaction", value: "4.9/5", color: "text-purple-600" },
      ],
      timeline: "3 months",
      image: "/images/client-logos.webp",
      tags: ["Professional Services", "Global Talent", "Remote Teams"],
    },
  ]

  const industries = [
    "All Industries",
    "E-commerce",
    "Manufacturing",
    "Technology",
    "Healthcare",
    "Retail",
    "Professional Services",
    "Food & Beverage",
  ]

  const metrics = [
    { label: "Average Revenue Increase", value: "+185%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Average Cost Reduction", value: "-48%", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Client Satisfaction Rate", value: "98.5%", icon: <Star className="w-6 h-6" /> },
    { label: "Average Project Timeline", value: "4.2 months", icon: <Clock className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Real Results, Real Businesses
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped 500+ businesses transform their operations, reduce costs, and achieve sustainable
            growth through our integrated business solutions.
          </p>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-emerald-600 mb-3 flex justify-center">{metric.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Success Story</h2>
            <p className="text-xl text-slate-600">Our most dramatic business transformation</p>
          </div>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredCaseStudy.image || "/placeholder.svg"}
                  alt={featuredCaseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800">{featuredCaseStudy.industry}</Badge>
                  <Badge variant="outline">{featuredCaseStudy.timeline}</Badge>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">{featuredCaseStudy.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-slate-700">{featuredCaseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-slate-700">{featuredCaseStudy.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {featuredCaseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">{result.value}</div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">{result.metric}</div>
                      <div className="text-xs text-slate-600">{result.description}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <p className="text-slate-700 italic mb-3">"{featuredCaseStudy.testimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-slate-900">{featuredCaseStudy.testimonial.author}</div>
                    <div className="text-slate-600">{featuredCaseStudy.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                }
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-100 text-emerald-800">{study.industry}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {study.timeline}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">{study.challenge}</p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold ${result.color} mb-1`}>{result.value}</div>
                        <div className="text-xs text-slate-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Track Record</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Consistent results across industries and business sizes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-emerald-100">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$50M+</div>
              <div className="text-emerald-100">Client Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">25+</div>
              <div className="text-emerald-100">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-emerald-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations and achieved remarkable growth with our
            proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
