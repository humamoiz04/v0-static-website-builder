import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Brain, Mic, Eye, Linkedin, AlertTriangle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Premium Business Solutions | AI Integration | Voice Search SEO | AR Experiences | MH Digital Solutions",
  description:
    "Advanced business solutions: AI chatbot integration, voice search optimization, AR experiences, LinkedIn B2B lead generation, and crisis management for market-leading businesses.",
  keywords: [
    "AI chatbot integration business",
    "voice search SEO optimization",
    "AR virtual reality business solutions",
    "LinkedIn B2B lead generation",
    "crisis management consulting",
    "advanced business automation",
    "cutting edge business technology",
    "premium business consulting services",
    "enterprise business solutions",
  ],
}

export default function PremiumServicesPage() {
  const services = [
    {
      title: "AI & Chatbot Integration",
      description: "Automate customer support & sales with intelligent bots",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Custom AI chatbot development",
        "Natural language processing",
        "Multi-platform integration",
        "24/7 automated support",
        "Lead qualification automation",
        "CRM integration & data sync",
      ],
      pricing: "Starting at $4,997",
      roi: "300% increase in lead response time",
    },
    {
      title: "Voice Search SEO",
      description: "Optimize for Alexa, Google Assistant, and voice queries",
      icon: <Mic className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Voice search optimization",
        "Featured snippet targeting",
        "Local voice search setup",
        "Smart speaker optimization",
        "Conversational keyword research",
        "Voice commerce integration",
      ],
      pricing: "Starting at $2,997",
      roi: "250% increase in voice traffic",
    },
    {
      title: "AR & VR Experiences",
      description: "Virtual product trials for e-commerce and retail stores",
      icon: <Eye className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "AR product visualization",
        "Virtual try-on experiences",
        "3D product modeling",
        "VR showroom creation",
        "Interactive product demos",
        "Mobile AR integration",
      ],
      pricing: "Starting at $7,997",
      roi: "400% reduction in returns",
    },
    {
      title: "LinkedIn B2B Lead Generation",
      description: "Targeted outreach campaigns for corporate clients",
      icon: <Linkedin className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "LinkedIn automation setup",
        "Targeted prospect research",
        "Personalized outreach campaigns",
        "Connection building strategies",
        "Content marketing on LinkedIn",
        "Sales funnel optimization",
      ],
      pricing: "Starting at $1,997/month",
      roi: "500% increase in B2B leads",
    },
    {
      title: "Advanced Marketing Automation",
      description: "Enterprise-level marketing automation and personalization",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500",
      features: [
        "Multi-channel automation",
        "Behavioral trigger campaigns",
        "Dynamic content personalization",
        "Advanced segmentation",
        "Predictive analytics",
        "ROI tracking & optimization",
      ],
      pricing: "Starting at $3,497/month",
      roi: "600% improvement in conversion rates",
    },
    {
      title: "Crisis Management & PR",
      description: "PR damage control and business continuity planning",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Crisis response planning",
        "Reputation monitoring",
        "Media relations management",
        "Social media crisis control",
        "Legal communication support",
        "Recovery strategy implementation",
      ],
      pricing: "Starting at $5,997",
      roi: "Protect millions in brand value",
    },
  ]

  const realExamples = [
    {
      location: "New York, NY",
      business: "Manhattan Luxury Real Estate",
      problem:
        "High-end real estate firm needed to showcase million-dollar properties to international buyers remotely",
      solution:
        "Implemented VR property tours, AI-powered property matching, and voice search optimization for luxury keywords",
      results: [
        "300% increase in international inquiries",
        "50% reduction in physical showings needed",
        "$50M+ in remote sales",
      ],
      industry: "Real Estate",
      technology: "VR + AI + Voice Search",
    },
    {
      location: "Las Vegas, NV",
      business: "Strip Casino Entertainment Group",
      problem:
        "Casino needed crisis management after negative publicity and wanted to improve high-roller customer experience",
      solution: "Crisis PR campaign, AI-powered VIP customer service, and AR gaming experiences for premium guests",
      results: [
        "Reputation restored in 3 months",
        "40% increase in VIP retention",
        "Featured in positive media coverage",
      ],
      industry: "Entertainment & Gaming",
      technology: "Crisis Management + AI + AR",
    },
    {
      location: "Portland, ME",
      business: "Maine Seafood Export Company",
      problem: "Seafood exporter wanted to reach international B2B buyers and showcase product quality remotely",
      solution:
        "LinkedIn B2B automation for international markets, AR product visualization for seafood quality, voice search for export keywords",
      results: [
        "200% increase in international B2B leads",
        "Expanded to 12 new countries",
        "$5M+ in new export contracts",
      ],
      industry: "Food Export",
      technology: "LinkedIn B2B + AR + Voice Search",
    },
    {
      location: "Nashville, TN",
      business: "Country Music Label",
      problem: "Record label needed advanced fan engagement and crisis management for artist reputation issues",
      solution:
        "AI-powered fan interaction bots, voice search optimization for artist discovery, crisis management protocols",
      results: [
        "500% increase in fan engagement",
        "Crisis incidents resolved 80% faster",
        "3 artists reached #1 charts",
      ],
      industry: "Music & Entertainment",
      technology: "AI + Voice Search + Crisis Management",
    },
    {
      location: "Santa Fe, NM",
      business: "High-End Art Gallery Network",
      problem: "Art galleries needed to sell expensive pieces to collectors worldwide and verify authenticity",
      solution:
        "AR art visualization in collectors' homes, AI-powered authenticity verification, LinkedIn outreach to art collectors",
      results: [
        "400% increase in international art sales",
        "Zero authenticity disputes",
        "Collector network in 25 countries",
      ],
      industry: "Art & Luxury Goods",
      technology: "AR + AI + LinkedIn B2B",
    },
    {
      location: "Birmingham, AL",
      business: "Medical Device Manufacturer",
      problem: "B2B medical device company needed to demonstrate complex equipment to hospitals remotely",
      solution:
        "AR product demonstrations, LinkedIn B2B campaigns targeting hospital decision-makers, AI-powered lead qualification",
      results: ["300% increase in qualified leads", "60% reduction in sales cycle", "$10M+ in new contracts"],
      industry: "Medical Technology",
      technology: "AR + LinkedIn B2B + AI",
    },
  ]

  const technologyStack = [
    {
      category: "Artificial Intelligence",
      technologies: [
        "OpenAI GPT Integration",
        "Custom ML Models",
        "Natural Language Processing",
        "Predictive Analytics",
      ],
    },
    {
      category: "Augmented Reality",
      technologies: ["WebAR Development", "3D Modeling", "Unity Integration", "Mobile AR Apps"],
    },
    {
      category: "Voice Technology",
      technologies: ["Alexa Skills", "Google Actions", "Voice Commerce", "Speech Recognition"],
    },
    {
      category: "Automation Platforms",
      technologies: ["Zapier Integration", "HubSpot Automation", "Salesforce Workflows", "Custom APIs"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 text-sm font-medium">
                Premium Solutions
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent">
                  Cutting-Edge
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Business Technology
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Advanced AI, automation, and specialized solutions for market-leading businesses ready to dominate their
                industries with innovative technology.
              </p>

              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-2">🚀 For Businesses Ready to Lead:</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Implement cutting-edge AI and automation</li>
                  <li>• Create immersive customer experiences</li>
                  <li>• Dominate voice search and emerging channels</li>
                  <li>• Build crisis-resistant business operations</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4">
                  Explore Premium Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4"
                >
                  Schedule Strategy Call
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/business-analytics-3d.webp"
                alt="Advanced business technology and AI solutions"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Business Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed for businesses ready to lead their industries.
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
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-lg font-bold text-purple-600">{service.pricing}</p>
                    <p className="text-sm text-emerald-600 font-medium">{service.roi}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Technology Success Stories</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Advanced implementations that have transformed industry-leading businesses across America.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {realExamples.map((example, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-purple-400 text-purple-900">{example.location}</Badge>
                    <Badge variant="outline" className="border-purple-300 text-purple-200">
                      {example.industry}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{example.business}</h3>
                  <p className="text-sm text-purple-300 mb-4">Technology: {example.technology}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">Challenge:</h4>
                      <p className="text-purple-100">{example.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Advanced Solution:</h4>
                      <p className="text-purple-100">{example.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {example.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-emerald-100 font-medium">{result}</span>
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

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Technology Stack</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technologies and platforms we use to deliver premium business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStack.map((category, index) => (
              <Card key={index} className="border border-purple-200 hover:border-purple-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900 text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Lead Your Industry?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Implement cutting-edge technology solutions that set you apart from competitors and position you as an
            industry leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
              Schedule Premium Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Technology Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
