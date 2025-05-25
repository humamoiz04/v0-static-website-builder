import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Target, TrendingUp, Users, Lightbulb, BarChart3, Shield } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Business Consultation & Strategy Services | Expert Business Advisor | MH Digital Solutions",
  description:
    "Strategic business consulting for startups and struggling businesses. Business strategy consulting, growth planning, profit improvement, and expert business advisory services.",
  keywords: [
    "business strategy consulting",
    "growth planning consulting",
    "business roadmap consultant",
    "profit improvement consulting",
    "expert business advisor",
    "startup business consultant",
    "struggling business revival",
    "operational problem solving",
    "business development consulting",
  ],
}

export default function BusinessConsultationPage() {
  const services = [
    {
      title: "Startup Launch Guidance",
      description: "Complete roadmap from idea validation to market entry",
      icon: <Lightbulb className="w-8 h-8" />,
      features: [
        "Idea validation and market research",
        "Business model development",
        "Funding strategy and investor preparation",
        "Go-to-market planning",
        "Risk assessment and mitigation",
      ],
    },
    {
      title: "Struggling Business Revival",
      description: "Diagnose problems and implement turnaround strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Comprehensive business audit",
        "Problem identification and root cause analysis",
        "Revenue optimization strategies",
        "Cost reduction implementation",
        "Performance monitoring and adjustment",
      ],
    },
    {
      title: "Operational Problem-Solving",
      description: "Streamline operations and eliminate inefficiencies",
      icon: <Target className="w-8 h-8" />,
      features: [
        "Process optimization and automation",
        "Workflow redesign and improvement",
        "Resource allocation optimization",
        "Quality control implementation",
        "Performance metrics establishment",
      ],
    },
    {
      title: "Competitor & Market Analysis",
      description: "Find gaps and dominate your niche",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Competitive landscape analysis",
        "Market opportunity identification",
        "SWOT analysis and strategic positioning",
        "Pricing strategy optimization",
        "Market entry and expansion planning",
      ],
    },
    {
      title: "Financial Health Audit",
      description: "Fix cash flow, pricing, and profit leaks",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Cash flow analysis and optimization",
        "Pricing strategy review and adjustment",
        "Cost structure analysis",
        "Profitability improvement plans",
        "Financial forecasting and budgeting",
      ],
    },
    {
      title: "Strategic Growth Planning",
      description: "Long-term vision and scalable growth strategies",
      icon: <Users className="w-8 h-8" />,
      features: [
        "5-year strategic roadmap development",
        "Scalability assessment and planning",
        "Market expansion strategies",
        "Partnership and acquisition opportunities",
        "Exit strategy planning",
      ],
    },
  ]

  const caseStudies = [
    {
      title: "Restaurant Turnaround: From Empty Tables to Fully Booked",
      problem:
        "Local restaurant had empty tables despite good food due to long wait times and poor customer experience",
      solution:
        "Optimized seating arrangements, implemented reservation system, retrained staff, and improved kitchen workflow",
      results: [
        "40% increase in table turnover",
        "65% improvement in customer retention",
        "25% revenue growth in 3 months",
      ],
      industry: "Food & Beverage",
    },
    {
      title: "Hardware Store Revival: Competing with Big Box Stores",
      problem: "10-year-old hardware store losing customers to new competitors and online retailers",
      solution:
        "Rebranded store, modernized inventory system, launched 'loyalty for seniors' program, and improved customer service",
      results: [
        "40% revenue growth in 6 months",
        "300% increase in repeat customers",
        "50% improvement in profit margins",
      ],
      industry: "Retail",
    },
    {
      title: "Tech Startup: From Idea to $1M ARR",
      problem: "Entrepreneur with great idea but no clear path to market or funding strategy",
      solution: "Validated market demand, developed MVP, created investor pitch deck, and implemented growth strategy",
      results: ["$500K seed funding raised", "$1M ARR achieved in 18 months", "15 enterprise clients acquired"],
      industry: "Technology",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your business, challenges, and opportunities",
      duration: "1-2 weeks",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom strategic plan with actionable recommendations and timelines",
      duration: "1-2 weeks",
    },
    {
      step: "3",
      title: "Implementation Planning",
      description: "Detailed roadmap with milestones, resources, and success metrics",
      duration: "1 week",
    },
    {
      step: "4",
      title: "Execution Support",
      description: "Ongoing guidance and support during strategy implementation",
      duration: "Ongoing",
    },
    {
      step: "5",
      title: "Monitoring & Optimization",
      description: "Regular review and adjustment of strategies based on results",
      duration: "Monthly",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Badge className="bg-coral-100 text-coral-800 hover:bg-coral-200 px-4 py-2 text-sm font-medium">
                  Business Consultation & Strategy
                </Badge>
                <Badge className="bg-gradient-to-r from-coral-500 to-purple-500 text-white px-3 py-1 text-xs font-bold animate-pulse">
                  🔥 POPULAR
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-coral-600 to-gray-800 bg-clip-text text-transparent">
                  Strategic Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-coral-600 to-purple-600 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Expert business advisory services for startups, struggling businesses, and companies with operational
                gaps. We diagnose problems, develop strategies, and guide implementation for sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
                  Get Free Business Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4"
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/business-meeting.webp"
                alt="Business consultation and strategy meeting"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Consultation Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive business consulting services designed to address every aspect of your business challenges
              and growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Consultation Process</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              A proven 5-step methodology that ensures comprehensive analysis and successful strategy implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-emerald-100 text-sm mb-3">{step.description}</p>
                  <Badge className="bg-emerald-400 text-emerald-900 text-xs">{step.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real businesses we've helped transform from struggling to thriving with our strategic consultation
              services.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <Badge className="mb-4 bg-blue-100 text-blue-800">{study.industry}</Badge>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                          <p className="text-slate-700">{study.problem}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-2">Our Solution:</h4>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Results Achieved:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get expert business consultation and strategic guidance to overcome challenges and achieve sustainable
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Download Business Audit Checklist
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
