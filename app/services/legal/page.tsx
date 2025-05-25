import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield, FileText, Building, CreditCard, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Business Legal & Compliance Services | Business Registration | GST Filing | Insurance | MH Digital Solutions",
  description:
    "Complete legal and compliance solutions: business registration, GST/tax filing, trademark protection, business insurance, and regulatory compliance for small businesses.",
  keywords: [
    "business registration services USA",
    "GST tax filing consultant",
    "trademark copyright protection",
    "business insurance consultant",
    "LLC registration help",
    "business compliance consulting",
    "small business legal services",
    "business license consultant",
    "corporate formation services",
  ],
}

export default function LegalCompliancePage() {
  const services = [
    {
      title: "Business Registration & Formation",
      description: "Complete business entity setup and registration",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "LLC, Corporation, Partnership setup",
        "EIN (Tax ID) registration",
        "State business license filing",
        "Operating agreement drafting",
        "Registered agent services",
      ],
      pricing: "Starting at $497",
      timeline: "3-5 business days",
    },
    {
      title: "Tax Filing & GST Compliance",
      description: "Complete tax preparation and filing services",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Federal & state tax filing",
        "Quarterly tax payments",
        "Sales tax registration",
        "Tax planning strategies",
        "IRS correspondence handling",
      ],
      pricing: "Starting at $297/month",
      timeline: "Ongoing monthly",
    },
    {
      title: "Trademark & Copyright Protection",
      description: "Protect your intellectual property",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Trademark search & filing",
        "Copyright registration",
        "Brand protection strategies",
        "IP infringement monitoring",
        "Cease & desist letters",
      ],
      pricing: "Starting at $997",
      timeline: "6-12 months",
    },
    {
      title: "Business Insurance Solutions",
      description: "Comprehensive business protection coverage",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "General liability insurance",
        "Professional liability coverage",
        "Workers' compensation",
        "Cyber liability protection",
        "Business property insurance",
      ],
      pricing: "Starting at $197/month",
      timeline: "1-2 weeks",
    },
    {
      title: "Employment Law Compliance",
      description: "HR compliance and employee protection",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Employee handbook creation",
        "Workplace policy development",
        "Compliance training programs",
        "Employment contract drafting",
        "HR audit services",
      ],
      pricing: "Starting at $797",
      timeline: "2-4 weeks",
    },
    {
      title: "Regulatory Compliance Monitoring",
      description: "Stay compliant with changing regulations",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-slate-500 to-slate-700",
      features: [
        "Industry-specific compliance",
        "Regulatory change monitoring",
        "Compliance audit services",
        "Documentation management",
        "Government filing assistance",
      ],
      pricing: "Starting at $497/month",
      timeline: "Ongoing monitoring",
    },
  ]

  const realExamples = [
    {
      location: "New York, NY",
      business: "Brooklyn Food Truck Collective",
      problem: "Multiple food truck owners needed proper business registration and health department compliance",
      solution: "Registered 12 LLCs, obtained mobile vendor permits, and set up health department compliance systems",
      results: ["100% compliance achieved", "Zero violations in first year", "$2M+ collective revenue protected"],
      industry: "Food Service",
    },
    {
      location: "Las Vegas, NV",
      business: "Strip Entertainment Venue",
      problem: "Nightclub needed liquor license, entertainment permits, and liability protection",
      solution:
        "Secured all required licenses, implemented comprehensive insurance coverage, and ongoing compliance monitoring",
      results: ["All permits approved", "$5M liability coverage", "Zero compliance issues"],
      industry: "Entertainment",
    },
    {
      location: "Portland, ME",
      business: "Maine Lobster Processing Plant",
      problem: "Seafood processor needed FDA compliance, worker safety protocols, and export documentation",
      solution: "Implemented HACCP compliance, worker safety training, and international export documentation",
      results: ["FDA approval maintained", "Zero safety incidents", "Export to 8 countries"],
      industry: "Food Processing",
    },
    {
      location: "Nashville, TN",
      business: "Music Production Studio",
      problem: "Recording studio needed copyright protection, artist contracts, and royalty management",
      solution: "Registered copyrights, created artist agreements, and set up royalty distribution systems",
      results: ["200+ copyrights protected", "Zero contract disputes", "Streamlined royalty payments"],
      industry: "Music & Entertainment",
    },
    {
      location: "Santa Fe, NM",
      business: "Native Art Gallery Collective",
      problem: "Art dealers needed authenticity verification, sales tax compliance, and artist protection",
      solution: "Implemented authenticity protocols, sales tax automation, and artist protection agreements",
      results: ["100% authentic art verified", "Automated tax compliance", "Artist revenue increased 40%"],
      industry: "Art & Culture",
    },
    {
      location: "Birmingham, AL",
      business: "Medical Practice Group",
      problem: "Healthcare practice needed HIPAA compliance, malpractice insurance, and patient privacy protocols",
      solution: "Full HIPAA implementation, comprehensive malpractice coverage, and staff training programs",
      results: ["100% HIPAA compliant", "Zero privacy breaches", "$2M malpractice coverage"],
      industry: "Healthcare",
    },
  ]

  const complianceChecklist = [
    {
      category: "Business Formation",
      items: [
        "Choose appropriate business structure",
        "Register with state authorities",
        "Obtain federal tax ID (EIN)",
        "Open business bank account",
        "Create operating agreements",
      ],
    },
    {
      category: "Licensing & Permits",
      items: [
        "Research industry-specific licenses",
        "Apply for local business permits",
        "Obtain professional certifications",
        "Register for sales tax collection",
        "Secure zoning approvals",
      ],
    },
    {
      category: "Tax Compliance",
      items: [
        "Set up accounting systems",
        "Understand tax obligations",
        "File quarterly payments",
        "Maintain proper records",
        "Plan for tax optimization",
      ],
    },
    {
      category: "Insurance Protection",
      items: [
        "Assess business risks",
        "Obtain general liability coverage",
        "Consider professional liability",
        "Protect against cyber threats",
        "Cover employee injuries",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm font-medium">
                Legal & Compliance Services
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-amber-800 to-slate-900 bg-clip-text text-transparent">
                  Protect & Legitimize
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Your Business
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Complete legal and compliance solutions to protect your business, ensure regulatory compliance, and
                provide peace of mind as you grow.
              </p>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-bold text-amber-800 mb-2">⚖️ Why Legal Compliance Matters:</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Avoid costly fines and penalties</li>
                  <li>• Protect personal assets from business liabilities</li>
                  <li>• Build credibility with customers and partners</li>
                  <li>• Enable business growth and investment opportunities</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
                  Get Compliance Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4"
                >
                  Business Registration
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/business-analytics-3d.webp"
                alt="Legal compliance and business protection services"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Complete Legal & Compliance Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From business formation to ongoing compliance, we handle all legal aspects of your business.
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
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-lg font-bold text-amber-600">{service.pricing}</p>
                    <p className="text-sm text-slate-500">Timeline: {service.timeline}</p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-900 to-orange-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Legal Success Stories Across America</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Real businesses we've helped navigate complex legal and compliance requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {realExamples.map((example, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-amber-400 text-amber-900">{example.location}</Badge>
                    <Badge variant="outline" className="border-amber-300 text-amber-200">
                      {example.industry}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{example.business}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">Legal Challenge:</h4>
                      <p className="text-amber-100">{example.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-300 mb-2">Our Solution:</h4>
                      <p className="text-amber-100">{example.solution}</p>
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

      {/* Compliance Checklist */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Business Compliance Checklist</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential legal and compliance steps every business needs to complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceChecklist.map((category, index) => (
              <Card key={index} className="border border-amber-200 hover:border-amber-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900 text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
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
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Protect Your Business Today</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Don't risk costly legal issues. Get comprehensive legal and compliance protection for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold">
              Get Legal Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Business Registration
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
