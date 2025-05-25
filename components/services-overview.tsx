import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Assuming this is your custom Card
// Assuming Button is styled by luxury-button class
import { Badge } from "@/components/ui/badge" // Assuming this is your custom Badge
import { ArrowRight, Target, Zap, TrendingUp, Shield, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Consultation & Strategy",
      description: "From startup launch to struggling business revival, we diagnose and fix operational gaps.",
      features: ["Startup Launch Guidance", "Business Revival", "Operational Problem-Solving", "Market Analysis"],
      href: "/services/consultation",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Services",
      description: "Full-spectrum online growth with high-converting websites, SEO, and digital marketing.",
      features: ["Website & UI/UX Design", "SEO Optimization", "Digital Marketing", "E-commerce Solutions"],
      href: "/services/digital",
    },
     // Added Global Talent service
     {
       icon: <Users className="w-8 h-8" />,
       title: "Global Talent & Cost Savings",
       description: "Cut labor costs by 50%+ using our vetted global professionals for key roles.",
       features: ["Customer Service Outsourcing", "Admin Support", "Remote Hiring", "Operational Cost Reduction"],
       href: "/services/global-talent",
     },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Organic Marketing & Branding", // Renamed to match problem categories
      description: "Build long-term reputation and loyal customers through strategic content and social media.",
      features: ["Content Marketing", "Social Media Growth", "Influencer Marketing", "Reputation Management"],
      href: "/services/marketing",
    },
     // Renamed Legal & Compliance to match problem categories (if needed)
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Compliance",
      description: "Protect your business with proper registration, compliance, and insurance coverage.",
      features: ["Business Registration", "GST/Tax Filing", "Trademark Protection", "Business Insurance"],
      href: "/services/legal",
    },
     // Renamed E-commerce Specialized to match problem categories (if needed)
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Optimize online stores, improve conversions, and dominate e-commerce marketplaces.",
      features: ["Store Optimization", "Conversion Rate Boost", "Marketplace SEO", "AI Recommendations"],
      href: "/services/ecommerce",
    },
    {
      icon: <Users className="w-8 h-8" />, // Icon might need change
      title: "Premium Solutions", // Added Premium Solutions category
      description: "Advanced AI, automation, and specialized services for market-leading businesses.",
      features: ["AI Integration", "Voice Search SEO", "AR Experiences", "Crisis Management"],
      href: "/services/premium",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background"> {/* Use background variable */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
           {/* Use luxury badge */}
          <Badge className="luxury-badge mb-6 animate-luxury-pulse">Our Services</Badge>
           {/* Use luxury heading and dark text */}
          <h2 className="luxury-heading text-4xl md:text-6xl font-bold text-text-dark mb-6">Complete Business Solutions</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"> {/* Use text-foreground */}
            We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business with
            comprehensive solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
             {/* Use luxury card class */}
            <Card key={index} className="luxury-card group hover:shadow-lg transition-all duration-500">
              <CardHeader className="pb-4">
                 {/* Use luxury icon wrapper */}
                <div className="luxury-icon-wrapper">{service.icon}</div>
                 {/* Dark text for title, primary button color on hover */}
                <CardTitle className="text-xl font-bold text-text-dark group-hover:text-primary-button transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-foreground/80 leading-relaxed"> {/* Use text-foreground */}
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80"> {/* Use text-foreground */}
                       {/* Use primary button color for bullets */}
                      <div className="w-1.5 h-1.5 bg-primary-button rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                   {/* Use luxury button class */}
                  <button className="luxury-button w-full px-6 py-3 group"> {/* Adjust padding */}
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Use luxury cta section class */}
        <div className="text-center luxury-cta-section rounded-3xl p-8 md:p-12">
           {/* White text for headers/paragraphs */}
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-white/90 text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can fix, build, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* Use luxury button class */}
            <button className="luxury-button bg-white text-primary-button hover:bg-white/90 px-8 py-4 text-lg font-semibold"> {/* White button with primary button text */}
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
             {/* Use luxury secondary button class (outline) */}
            <button className="luxury-btn-secondary border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
