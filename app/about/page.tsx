import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Globe, Award, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About MH Digital Solutions | Our Story, Mission & Team | Business Solutions Company",
  description:
    "Learn about MH Digital Solutions - your trusted partner for all-in-one business solutions. Our mission, values, and expert team dedicated to helping businesses grow.",
  keywords: [
    "About MH Digital Solutions",
    "MH Digital Solutions team",
    "MH Digital Solutions company",
    "integrated business solutions approach",
    "problem solving business consultant",
    "results driven business partner",
    "global talent solutions company",
    "business consulting firm USA",
  ],
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "10+", label: "Years Experience" },
    { number: "25+", label: "Countries Served" },
    { number: "95%", label: "Client Success Rate" },
  ]

  const values = [
    {
      title: "Results-Driven Approach",
      description: "We focus on measurable outcomes that directly impact your bottom line",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Integrated Solutions",
      description: "One partner for all your business needs, eliminating the complexity of multiple vendors",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Global Perspective",
      description: "Leveraging worldwide talent and best practices to give you competitive advantages",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Continuous Innovation",
      description: "Staying ahead of industry trends to provide cutting-edge solutions",
      icon: <Award className="w-8 h-8" />,
    },
  ]

  const team = [
    {
      name: "Michael Hassan",
      role: "Founder & CEO",
      bio: "15+ years in business consulting and digital transformation. Former McKinsey consultant with expertise in operational efficiency and global talent management.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/michael-hassan",
      twitter: "https://twitter.com/michael_hassan",
      specialties: ["Strategic Planning", "Global Operations", "Business Transformation"],
    },
    {
      name: "Sarah Johnson",
      role: "Head of Digital Services",
      bio: "Digital marketing expert with 12+ years experience. Led digital transformations for 200+ businesses, specializing in SEO and conversion optimization.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarah_johnson",
      specialties: ["Digital Marketing", "SEO Strategy", "Conversion Optimization"],
    },
    {
      name: "David Chen",
      role: "Global Talent Director",
      bio: "International HR specialist with expertise in remote team management and global talent acquisition. Built remote teams for 100+ companies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/david-chen",
      twitter: "https://twitter.com/david_chen",
      specialties: ["Remote Teams", "Global Recruitment", "HR Strategy"],
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert focused on process optimization and efficiency. Helped businesses reduce operational costs by an average of 40%.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      twitter: "https://twitter.com/emily_rodriguez",
      specialties: ["Process Optimization", "Cost Reduction", "Quality Management"],
    },
    {
      name: "Robert Kim",
      role: "Technology Director",
      bio: "Full-stack developer and technology strategist. 10+ years building scalable solutions for businesses of all sizes.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/robert-kim",
      twitter: "https://twitter.com/robert_kim",
      specialties: ["Software Development", "System Architecture", "Tech Strategy"],
    },
    {
      name: "Lisa Thompson",
      role: "Client Success Manager",
      bio: "Customer success expert ensuring client satisfaction and long-term partnerships. 98% client retention rate over 8 years.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/lisa-thompson",
      twitter: "https://twitter.com/lisa_thompson",
      specialties: ["Client Relations", "Success Strategy", "Account Management"],
    },
  ]

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started as a small consulting firm helping local businesses optimize operations",
    },
    {
      year: "2016",
      title: "Digital Expansion",
      description: "Added comprehensive digital marketing and web development services",
    },
    {
      year: "2018",
      title: "Global Talent Network",
      description: "Launched global talent solutions, connecting businesses with international professionals",
    },
    {
      year: "2020",
      title: "Remote-First Transformation",
      description: "Pivoted to fully remote operations, helping 200+ businesses adapt to new work models",
    },
    {
      year: "2022",
      title: "AI & Automation Integration",
      description: "Integrated AI and automation solutions to further reduce client operational costs",
    },
    {
      year: "2024",
      title: "500+ Businesses Served",
      description: "Reached milestone of transforming 500+ businesses with 95% success rate",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                About MH Digital Solutions
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent">
                  Your Trusted
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Business Partner
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                For over 10 years, we've been helping businesses transform from struggling to thriving. Our integrated
                approach combines strategic consulting, digital solutions, and global talent to deliver measurable
                results and sustainable growth.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/business-meeting.webp"
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

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  To democratize access to world-class business solutions by providing integrated, cost-effective
                  services that help businesses of all sizes achieve sustainable growth and operational excellence
                  through innovative strategies and global talent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  To become the world's leading provider of integrated business solutions, known for transforming
                  businesses through strategic innovation, global talent optimization, and measurable results that
                  create lasting competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and ensure we deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and helping businesses transform their operations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-300"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <Badge className="bg-emerald-100 text-emerald-800 mb-3">{item.year}</Badge>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry experts with decades of combined experience in business transformation, digital solutions, and
              global talent management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our expert team and proven
            methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
