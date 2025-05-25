import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Zap, Target, Shield, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const coreServices = [
    {
      id: 'consultation',
      title: 'Business Consultation & Strategy',
      subtitle: 'For startups, struggling businesses, or those with operational gaps',
      icon: <Target className="w-8 h-8" />,
      color: 'from-emerald-400 to-teal-500',
      services: [
        'Startup Launch Guidance – Idea validation, business model, funding advice',
        'Struggling Business Revival – Diagnose why you\'re losing clients & fix it',
        'Operational Problem-Solving',
        'Competitor & Market Analysis – Find gaps and dominate your niche',
        'Financial Health Audit – Fix cash flow, pricing, and profit leaks'
      ],
      examples: [
        'Restaurant always full, but customers leave due to long waits → We optimize seating, reservations, and staff flow',
        'Shop gets traffic but no sales → We redesign layout, pricing, or customer journey'
      ]
    },
    {
      id: 'digital',
      title: 'Digital Services',
      subtitle: 'Full-spectrum online growth & visibility',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-500',
      services: [
        'Website & UI/UX Design - High-converting websites (Mobile-friendly, Fast Loading)',
        'UI/UX Redesign for better engagement & sales',
        'E-commerce Optimization (Checkout flow, product pages)',
        'Local SEO – Rank #1 in your area (Google Maps, "near me" searches)',
        'Global SEO – Organic traffic from search engines',
        'Google My Business Optimization – Get more calls & visits',
        'Paid Ads (Google Ads, Meta, LinkedIn)',
        'Social Media Marketing (Content + Targeted Campaigns)',
        'Email Marketing & Automation (Retain customers & boost sales)'
      ]
    },
    {
      id: 'marketing',
      title: 'Organic Marketing & Branding',
      subtitle: 'Long-term reputation & loyal customers',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-500',
      services: [
        'Content Marketing (Blogs, Videos, Storytelling)',
        'Social Media Growth (Organic engagement strategies)',
        'Influencer & Collaboration Marketing',
        'Reputation Management (Google Reviews, PR Crisis Handling)'
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      subtitle: 'Protect and legitimize your business',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-500',
      services: [
        'Business Registration (LLP, Pvt Ltd, Sole Proprietorship)',
        'GST/Tax Filing & Compliance',
        'Trademark & Copyright Protection',
        'Business Insurance (Fire, Liability, Cyber)',
        'Employee Health & Worker\'s Compensation'
      ]
    }
  ]

  const premiumServices = [
    {
      title: 'AI & Chatbot Integration',
      description: 'Automate customer support & sales with intelligent bots'
    },
    {
      title: 'Voice Search SEO',
      description: 'Optimize for Alexa, Google Assistant, and voice queries'
    },
    {
      title: 'AR Experiences',
      description: 'Virtual product trials for e-commerce and retail stores'
    },
    {
      title: 'LinkedIn B2B Lead Generation',
      description: 'Targeted outreach campaigns for corporate clients'
    },
    {
      title: 'Amazon/Flipkart SEO',
      description: 'Dominate e-commerce marketplaces with optimized listings'
    },
    {
      title: 'Crisis Management',
      description: 'PR damage control and business continuity planning'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            All-in-One Business Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            From Startup to Scale-Up
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Struggling to Thriving—We Fix, Build & Grow Your Business!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Core Business Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive services designed to address every aspect of your business growth and optimization
            </p>
          </div>

          <div className="grid gap-8">
            {coreServices.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {index + 1}. {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600">
                        {service.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4 text-lg">What We Offer:</h4>
                      <ul className="space-y-3">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.examples && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-lg">Real Examples:</h4>
                        <div className="space-y-4">
                          {service.examples.map((example, idx) => (
                            <div key={idx} className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                              <p className="text-slate-700 italic">"{example}"</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link href={`/services/${service.id}`}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Learn More About {service.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-400 text-emerald-900 hover:bg-emerald-300 px-6 py-2 text-lg font-medium">
              Premium Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced & Specialized Services
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Cutting-edge solutions for businesses ready to dominate their markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumServices.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-emerald-400" />
                    <CardTitle className="text-white text-lg group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-emerald-100">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-900 px-8 py-4 text-lg font-semibold">
              Explore Premium Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* E-Commerce Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              E-Commerce Specialized Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              For online stores, D2C brands, and businesses expanding into digital sales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Problems We Solve in E-Commerce:</h3>
              <div className="space-y-6">
                {[
                  {
                    problem: "My Shopify store gets traffic but no sales!",
                    solution: "High-converting UI/UX redesign + abandoned cart recovery flows"
                  },
                  {
                    problem: "Amazon/Flipkart listings exist but don't rank",
                    solution: "Keyword-optimized titles, images, and backend SEO"
                  },
                  {
                    problem: "Customers return products due to size/color mismatches",
                    solution: "AR-powered 'try before buy' integration + size guide popups"
                  },
                  {
                    problem: "After shipping, customers vanish—no repeat sales",
                    solution: "Post-purchase email sequences + loyalty programs"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
                    <p className="font-semibold text-red-600 mb-2">Problem: "{item.problem}"</p>
                    <p className="text-emerald-700">
                      <span className="font-semibold">→ Fix:</span> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our E-Commerce Solutions:</h3>
              <ul className="space-y-4">
                {[
                  'E-Commerce Launch & Setup',
                  'Conversion Rate Optimization (CRO)',
                  'E-Commerce SEO & Visibility',
                  'E-Commerce Marketing',
                  'Advanced E-Commerce Tech',
                  'AI-powered recommendations',
                  'Subscription model setup',
                  'Voice commerce optimization'
                ].map((solution, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">{solution}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                Get E-Commerce Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have scaled from struggling to thriving with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Start Free Consultation
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
