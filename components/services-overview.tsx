import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Zap, TrendingUp, Shield, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Business Consultation & Strategy',
      description: 'From startup launch to struggling business revival, we diagnose and fix operational gaps.',
      features: ['Startup Launch Guidance', 'Business Revival', 'Operational Problem-Solving', 'Market Analysis'],
      color: 'from-emerald-500 to-teal-500',
      href: '/services/consultation'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Services',
      description: 'Full-spectrum online growth with high-converting websites, SEO, and digital marketing.',
      features: ['Website & UI/UX Design', 'SEO Optimization', 'Digital Marketing', 'E-commerce Solutions'],
      color: 'from-blue-500 to-indigo-500',
      href: '/services/digital'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Organic Marketing & Branding',
      description: 'Build long-term reputation and loyal customers through strategic content and social media.',
      features: ['Content Marketing', 'Social Media Growth', 'Influencer Marketing', 'Reputation Management'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/marketing'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Legal & Compliance',
      description: 'Protect your business with proper registration, compliance, and insurance coverage.',
      features: ['Business Registration', 'GST/Tax Filing', 'Trademark Protection', 'Business Insurance'],
      color: 'from-amber-500 to-orange-500',
      href: '/services/legal'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Specialized',
      description: 'Optimize online stores, improve conversions, and dominate e-commerce marketplaces.',
      features: ['Store Optimization', 'Conversion Rate Boost', 'Marketplace SEO', 'AI Recommendations'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/ecommerce'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Premium Solutions',
      description: 'Advanced AI, automation, and specialized services for market-leading businesses.',
      features: ['AI Integration', 'Voice Search SEO', 'AR Experiences', 'Crisis Management'],
      color: 'from-slate-600 to-slate-800',
      href: '/services/premium'
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Complete Business Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business with comprehensive solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group-hover:shadow-lg transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how we can fix, build, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
