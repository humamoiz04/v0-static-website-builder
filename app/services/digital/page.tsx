import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Search, Smartphone, Code, Palette, BarChart3 } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Services | UI/UX Design | SEO | MH Digital Solutions",
  description:
    "Full-spectrum digital services including web design, UI/UX optimization, SEO, digital marketing, and e-commerce development for small businesses.",
  keywords: [
    "digital marketing and web development",
    "UI UX design to increase conversions",
    "affordable web design small business",
    "organic SEO services USA",
    "professional web design for startups",
    "high converting website design",
    "custom software development",
    "mobile app development",
    "ecommerce development",
  ],
}

export default function DigitalServicesPage() {
  const services = [
    {
      title: "Website & UI/UX Design",
      description: "High-converting websites that drive results",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Mobile-responsive design",
        "Fast loading optimization",
        "Conversion-focused UI/UX",
        "SEO-friendly structure",
        "Analytics integration",
      ],
      pricing: "Starting at $2,997",
    },
    {
      title: "Search Engine Optimization",
      description: "Rank #1 in your area and globally",
      icon: <Search className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Local SEO optimization",
        "Global SEO strategies",
        "Google My Business setup",
        "Keyword research & targeting",
        "Technical SEO audit",
      ],
      pricing: "Starting at $997/month",
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile apps for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "App Store optimization",
        "Push notifications",
        "Analytics & reporting",
      ],
      pricing: "Starting at $15,000",
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions for your business",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Custom web applications",
        "API development & integration",
        "Database design",
        "Cloud deployment",
        "Ongoing maintenance",
      ],
      pricing: "Starting at $25,000",
    },
    {
      title: "Branding & Graphic Design",
      description: "Professional brand identity and marketing materials",
      icon: <Palette className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Logo design & brand identity",
        "Marketing material design",
        "Social media graphics",
        "Print design services",
        "Brand guidelines",
      ],
      pricing: "Starting at $1,497",
    },
    {
      title: "Digital Marketing Analytics",
      description: "Data-driven insights for better decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-slate-500 to-slate-700",
      features: [
        "Google Analytics setup",
        "Conversion tracking",
        "Performance reporting",
        "ROI analysis",
        "Marketing automation",
      ],
      pricing: "Starting at $497/month",
    },
  ]

  const digitalMarketingServices = [
    {
      category: "Search Engine Optimization",
      services: [
        "Local SEO for 'near me' searches",
        "Global SEO for organic traffic",
        "Technical SEO optimization",
        "Content optimization",
        "Link building strategies",
      ],
    },
    {
      category: "Paid Advertising",
      services: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "LinkedIn advertising",
        "YouTube advertising",
        "Retargeting campaigns",
      ],
    },
    {
      category: "Social Media Marketing",
      services: [
        "Content creation & scheduling",
        "Community management",
        "Influencer partnerships",
        "Social media advertising",
        "Analytics & reporting",
      ],
    },
    {
      category: "Email Marketing",
      services: [
        "Email campaign design",
        "Automated sequences",
        "List building strategies",
        "A/B testing",
        "Performance tracking",
      ],
    },
  ]

  const caseStudies = [
    {
      title: "Bakery Website: From Traffic to Premium Orders",
      problem: "Bakery ranked #1 for 'cheap cakes' but wanted luxury wedding cake orders",
      solution: "Reoptimized SEO for 'premium wedding cakes [City]' + luxury photo gallery redesign",
      results: ["250% increase in average order value", "300% more luxury inquiries", "40% revenue growth"],
      image: "/images/business-growth.webp",
    },
    {
      title: "E-commerce Store: Traffic to Sales Conversion",
      problem: "Shopify store getting traffic but no sales conversions",
      solution: "Complete UI/UX redesign + abandoned cart recovery flows + checkout optimization",
      results: ["Conversion rate: 2% to 8%", "180% increase in phone inquiries", "65% reduction in cart abandonment"],
      image: "/images/analytics-dashboard.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                Digital Services
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  Full-Spectrum
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Complete digital transformation services including high-converting websites, SEO optimization, mobile
                apps, and digital marketing that drives real business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Get Free Digital Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/data-analytics.webp"
                alt="Digital marketing analytics and data visualization"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Digital Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From website design to mobile apps, we provide comprehensive digital solutions that drive growth and
              engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-lg font-bold text-blue-600 mb-3">{service.pricing}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Marketing Services</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies to increase your online visibility and drive qualified leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalMarketingServices.map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-blue-300 text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Digital Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our digital solutions have transformed businesses and delivered measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                      <p className="text-slate-700">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-3">Results:</h4>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Go Digital?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive digital solutions. Get a free audit and see how we can help
            you grow online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Get Free Digital Audit
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
