import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Users, DollarSign, Globe, Clock, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Global Talent Solutions | Cut Labor Costs 50% | Remote Staffing | MH Digital Solutions",
  description:
    "Access pre-vetted global talent from Pakistan, India, Nigeria, and Bangladesh. Reduce labor costs by 50-70% while maintaining quality. Remote staffing solutions for small businesses.",
  keywords: [
    "cut business labor costs 50%",
    "hire remote customer service Pakistan",
    "offshore staffing solutions small business",
    "cost effective hiring solutions",
    "global talent acquisition",
    "Pakistan India Nigeria Bangladesh talent",
    "outsource administrative tasks affordably",
    "save money on labor costs",
    "remote team management",
  ],
}

export default function GlobalTalentPage() {
  const talentPools = [
    {
      country: "Pakistan",
      flag: "🇵🇰",
      specialties: ["Customer Service", "Virtual Assistance", "Content Writing", "Digital Marketing"],
      costSaving: "60-70%",
      timeZone: "GMT+5",
      languages: ["English", "Urdu"],
      avgRate: "$3-8/hour",
    },
    {
      country: "India",
      flag: "🇮🇳",
      specialties: ["Software Development", "Data Analysis", "Accounting", "Technical Support"],
      costSaving: "50-65%",
      timeZone: "GMT+5:30",
      languages: ["English", "Hindi"],
      avgRate: "$4-12/hour",
    },
    {
      country: "Nigeria",
      flag: "🇳🇬",
      specialties: ["Sales", "Lead Generation", "Social Media", "Project Management"],
      costSaving: "55-70%",
      timeZone: "GMT+1",
      languages: ["English"],
      avgRate: "$3-10/hour",
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      specialties: ["Graphic Design", "Web Development", "Data Entry", "Research"],
      costSaving: "65-75%",
      timeZone: "GMT+6",
      languages: ["English", "Bengali"],
      avgRate: "$2-7/hour",
    },
  ]

  const services = [
    {
      title: "Customer Service Representatives",
      description: "24/7 multilingual customer support",
      icon: <Users className="w-8 h-8" />,
      savings: "Save $35,000/year per agent",
      features: [
        "Live chat support",
        "Email customer service",
        "Phone support (VoIP)",
        "Social media management",
        "Order processing",
      ],
    },
    {
      title: "Virtual Assistants",
      description: "Administrative and operational support",
      icon: <Clock className="w-8 h-8" />,
      savings: "Save $28,000/year per VA",
      features: [
        "Calendar management",
        "Email management",
        "Data entry & research",
        "Travel planning",
        "Document preparation",
      ],
    },
    {
      title: "Software Developers",
      description: "Full-stack development teams",
      icon: <Globe className="w-8 h-8" />,
      savings: "Save $60,000/year per developer",
      features: [
        "Web application development",
        "Mobile app development",
        "API development",
        "Database management",
        "Quality assurance testing",
      ],
    },
    {
      title: "Digital Marketing Specialists",
      description: "Complete marketing team solutions",
      icon: <TrendingUp className="w-8 h-8" />,
      savings: "Save $40,000/year per specialist",
      features: [
        "SEO optimization",
        "Content creation",
        "Social media marketing",
        "PPC campaign management",
        "Analytics & reporting",
      ],
    },
    {
      title: "Accounting & Finance",
      description: "Financial management and bookkeeping",
      icon: <DollarSign className="w-8 h-8" />,
      savings: "Save $32,000/year per accountant",
      features: [
        "Bookkeeping services",
        "Financial reporting",
        "Tax preparation",
        "Payroll processing",
        "Budget analysis",
      ],
    },
    {
      title: "Sales Representatives",
      description: "Lead generation and sales support",
      icon: <Shield className="w-8 h-8" />,
      savings: "Save $38,000/year per rep",
      features: ["Lead generation", "Cold calling", "Email outreach", "CRM management", "Sales reporting"],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "We understand your specific needs, skills required, and budget constraints",
      duration: "1-2 days",
    },
    {
      step: "2",
      title: "Talent Sourcing",
      description: "Access our pre-vetted talent pool and identify the best candidates",
      duration: "3-5 days",
    },
    {
      step: "3",
      title: "Screening & Interviews",
      description: "Comprehensive screening process including skills tests and interviews",
      duration: "2-3 days",
    },
    {
      step: "4",
      title: "Onboarding & Training",
      description: "Complete onboarding process with your systems and processes",
      duration: "1-2 weeks",
    },
    {
      step: "5",
      title: "Ongoing Management",
      description: "Continuous performance monitoring and support",
      duration: "Ongoing",
    },
  ]

  const costComparison = {
    "US Employee": {
      salary: "$45,000",
      benefits: "$13,500",
      overhead: "$9,000",
      total: "$67,500/year",
    },
    "Global Talent": {
      salary: "$15,000",
      benefits: "$0",
      overhead: "$3,000",
      total: "$18,000/year",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 text-sm font-medium">
                Global Talent Solutions
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-green-800 to-slate-900 bg-clip-text text-transparent">
                  Cut Labor Costs
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  by 50-70%
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Access pre-vetted global talent from Pakistan, India, Nigeria, and Bangladesh. Build high-performing
                remote teams while dramatically reducing operational costs.
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-2">💰 Potential Annual Savings:</h3>
                <p className="text-2xl font-bold text-green-700">$49,500 per employee</p>
                <p className="text-sm text-green-600">Based on average cost comparison</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                  Calculate Your Savings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4"
                >
                  View Talent Pool
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/business-meeting.webp"
                alt="Global talent collaboration and remote team management"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Talent Pools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Global Talent Network</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access skilled professionals from top talent markets worldwide, all pre-vetted and ready to contribute to
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentPools.map((pool, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{pool.flag}</div>
                  <CardTitle className="text-xl font-bold text-slate-900">{pool.country}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 mx-auto">Save {pool.costSaving}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pool.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-slate-700">Time Zone:</span>
                        <p className="text-slate-600">{pool.timeZone}</p>
                      </div>
                      <div>
                        <span className="font-medium text-slate-700">Avg Rate:</span>
                        <p className="text-slate-600">{pool.avgRate}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-slate-700">Languages:</span>
                      <p className="text-slate-600">{pool.languages.join(", ")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Talent Services</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Complete staffing solutions across all business functions with significant cost savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-green-100">{service.description}</CardDescription>
                  <Badge className="bg-green-400 text-green-900 w-fit">{service.savings}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-green-100 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cost Comparison: US vs Global Talent</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the dramatic cost savings when you leverage our global talent network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(costComparison).map(([type, costs]) => (
              <Card
                key={type}
                className={`${type === "Global Talent" ? "border-2 border-green-500 bg-green-50/50" : "border border-slate-200"}`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-bold ${type === "Global Talent" ? "text-green-700" : "text-slate-900"}`}
                  >
                    {type}
                    {type === "Global Talent" && <Badge className="ml-3 bg-green-500 text-white">Recommended</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Annual Salary:</span>
                      <span className="font-semibold">{costs.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Benefits & Insurance:</span>
                      <span className="font-semibold">{costs.benefits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Overhead & Equipment:</span>
                      <span className="font-semibold">{costs.overhead}</span>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total Annual Cost:</span>
                        <span
                          className={`text-2xl font-bold ${type === "Global Talent" ? "text-green-600" : "text-slate-900"}`}
                        >
                          {costs.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-500 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl">
              Save $49,500 per employee annually!
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Hiring Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined 5-step process to get you the right talent quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <Card
                key={index}
                className="text-center border border-green-200 hover:border-green-300 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{step.description}</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">{step.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Cut Your Labor Costs in Half?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses saving thousands with our global talent solutions. Get started with a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
              Calculate Your Savings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Browse Talent Pool
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
