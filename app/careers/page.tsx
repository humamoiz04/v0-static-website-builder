import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, ArrowRight, Heart, Zap, Globe } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Careers at MH Digital Solutions | Join Our Remote Team | Business Consulting Jobs",
  description:
    "Join our growing team of business consultants, digital marketers, and global talent specialists. Remote-first company with competitive benefits and growth opportunities.",
  keywords: [
    "business consulting careers",
    "remote digital marketing jobs",
    "global talent specialist jobs",
    "business consultant positions",
    "remote work opportunities",
    "digital marketing careers",
    "business development jobs",
    "work from home consulting",
  ],
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Business Consultant",
      department: "Consulting",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description:
        "Lead strategic consulting projects for small to medium businesses, helping them optimize operations and achieve growth.",
      requirements: [
        "5+ years business consulting experience",
        "MBA or equivalent experience",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Experience with business process optimization",
      ],
      responsibilities: [
        "Conduct comprehensive business audits",
        "Develop strategic growth plans",
        "Lead client workshops and presentations",
        "Mentor junior consultants",
        "Drive business development initiatives",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Digital Services",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$60,000 - $85,000",
      description:
        "Execute comprehensive digital marketing strategies including SEO, PPC, social media, and content marketing for diverse clients.",
      requirements: [
        "3+ years digital marketing experience",
        "Google Ads & Analytics certified",
        "SEO and content marketing expertise",
        "Social media management experience",
        "Data analysis and reporting skills",
      ],
      responsibilities: [
        "Manage multi-channel marketing campaigns",
        "Optimize websites for search engines",
        "Create and execute content strategies",
        "Analyze campaign performance and ROI",
        "Collaborate with design and development teams",
      ],
    },
    {
      title: "Global Talent Acquisition Manager",
      department: "Global Talent",
      location: "Remote (Global)",
      type: "Full-time",
      salary: "$70,000 - $95,000",
      description:
        "Build and manage our global talent network, focusing on sourcing and vetting professionals from Pakistan, India, Nigeria, and Bangladesh.",
      requirements: [
        "5+ years international recruitment experience",
        "Experience with remote team management",
        "Cultural sensitivity and global mindset",
        "Strong interviewing and assessment skills",
        "Fluency in English plus one regional language",
      ],
      responsibilities: [
        "Source and vet global talent",
        "Conduct virtual interviews and assessments",
        "Build relationships with international partners",
        "Develop talent acquisition strategies",
        "Ensure quality and cultural fit",
      ],
    },
    {
      title: "Full-Stack Developer",
      department: "Technology",
      location: "Remote (US/Global)",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      description:
        "Develop custom web applications, e-commerce solutions, and business automation tools for our clients.",
      requirements: [
        "4+ years full-stack development experience",
        "Proficiency in React, Node.js, and databases",
        "E-commerce platform experience (Shopify, WooCommerce)",
        "API development and integration skills",
        "Understanding of business requirements",
      ],
      responsibilities: [
        "Build custom web applications",
        "Develop e-commerce solutions",
        "Create business automation tools",
        "Integrate third-party services",
        "Maintain and optimize existing systems",
      ],
    },
    {
      title: "Client Success Manager",
      department: "Client Relations",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description:
        "Ensure client satisfaction and success by managing relationships, monitoring project progress, and identifying growth opportunities.",
      requirements: [
        "3+ years client management experience",
        "Strong relationship building skills",
        "Project management experience",
        "Business acumen and consultative approach",
        "Excellent communication skills",
      ],
      responsibilities: [
        "Manage client relationships and satisfaction",
        "Monitor project progress and deliverables",
        "Identify upselling and expansion opportunities",
        "Coordinate between clients and internal teams",
        "Conduct regular check-ins and reviews",
      ],
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$45,000 - $65,000 + Commission",
      description:
        "Generate new business opportunities through outbound prospecting, lead qualification, and relationship building.",
      requirements: [
        "2+ years B2B sales experience",
        "Strong prospecting and lead generation skills",
        "CRM experience (HubSpot preferred)",
        "Excellent phone and email communication",
        "Self-motivated and goal-oriented",
      ],
      responsibilities: [
        "Generate qualified leads through outbound efforts",
        "Conduct discovery calls with prospects",
        "Qualify leads and schedule demos",
        "Maintain accurate CRM records",
        "Collaborate with senior sales team",
      ],
    },
  ]

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and global collaboration opportunities",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance plus 401(k) matching and wellness programs",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Continuous learning budget, conference attendance, and career advancement paths",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team",
      description: "Work with diverse, talented professionals from around the world",
    },
  ]

  const companyValues = [
    {
      title: "Results-Driven Excellence",
      description: "We focus on delivering measurable outcomes that directly impact our clients' success and growth.",
    },
    {
      title: "Global Collaboration",
      description: "We embrace diversity and leverage global talent to provide the best solutions for our clients.",
    },
    {
      title: "Continuous Innovation",
      description: "We stay ahead of industry trends and continuously improve our services and methodologies.",
    },
    {
      title: "Client-Centric Approach",
      description: "Our clients' success is our success. We go above and beyond to exceed expectations.",
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
                Join Our Team
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  Build Your Career
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  With Purpose
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Join a growing team of passionate professionals helping businesses transform and thrive. We offer
                remote-first culture, competitive benefits, and unlimited growth opportunities.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-slate-600">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Remote Friendly</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4"
                >
                  Learn About Culture
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/digital-marketing-team.webp"
                alt="MH Digital Solutions team collaboration"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in creating an environment where talented people can do their best work and grow their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Open Positions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our team and help businesses transform their operations and achieve sustainable growth.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className="bg-blue-100 text-blue-800">{position.department}</Badge>
                        <Badge variant="outline" className="border-slate-300">
                          <MapPin className="w-3 h-3 mr-1" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {position.salary}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{position.title}</h3>
                      <p className="text-slate-600 mb-6">{position.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-blue-100">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals who share our passion for helping
            businesses succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
