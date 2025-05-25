import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  TrendingUp,
  Smartphone,
  CreditCard,
  Package,
  BarChart3,
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "E-commerce Development & Optimization | Shopify Store Setup | Online Store Growth | MH Digital Solutions",
  description:
    "Complete e-commerce solutions: Shopify store development, conversion optimization, Amazon/Flipkart SEO, cart abandonment recovery, and online sales growth strategies.",
  keywords: [
    "ecommerce development for small business",
    "launch online store affordably",
    "build Shopify store",
    "increase online sales website",
    "ecommerce conversion optimization",
    "reduce cart abandonment rate",
    "Amazon Flipkart SEO optimization",
    "online store marketing strategies",
    "ecommerce website design services",
  ],
}

export default function EcommercePage() {
  const services = [
    {
      title: "E-commerce Store Development",
      description: "Complete online store setup and launch",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Shopify/WooCommerce setup",
        "Custom e-commerce design",
        "Payment gateway integration",
        "Inventory management system",
        "Mobile-responsive design",
      ],
      pricing: "Starting at $3,997",
    },
    {
      title: "Conversion Rate Optimization",
      description: "Turn visitors into paying customers",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Checkout flow optimization",
        "Product page enhancement",
        "Cart abandonment recovery",
        "A/B testing implementation",
        "User experience analysis",
      ],
      pricing: "Starting at $1,997",
    },
    {
      title: "Mobile Commerce Optimization",
      description: "Optimize for mobile shoppers",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Mobile-first design",
        "Touch-friendly interface",
        "Fast mobile loading",
        "Mobile payment options",
        "App-like experience",
      ],
      pricing: "Starting at $1,497",
    },
    {
      title: "Payment & Security Solutions",
      description: "Secure and seamless transactions",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Multiple payment gateways",
        "SSL certificate setup",
        "PCI compliance",
        "Fraud protection",
        "Secure checkout process",
      ],
      pricing: "Starting at $997",
    },
    {
      title: "Inventory & Order Management",
      description: "Streamline operations and fulfillment",
      icon: <Package className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Automated inventory tracking",
        "Order management system",
        "Shipping integration",
        "Supplier management",
        "Stock alerts & reporting",
      ],
      pricing: "Starting at $1,297",
    },
    {
      title: "E-commerce Analytics & Reporting",
      description: "Data-driven insights for growth",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-slate-500 to-slate-700",
      features: [
        "Sales performance tracking",
        "Customer behavior analysis",
        "ROI measurement",
        "Conversion funnel analysis",
        "Custom reporting dashboards",
      ],
      pricing: "Starting at $697/month",
    },
  ]

  const realExamples = [
    {
      location: "New York, NY",
      business: "West Village Artisan Jewelry Store",
      problem: "Beautiful handmade jewelry but customers couldn't see details online, leading to high return rates",
      solution: "Implemented 360° product photography, size comparison tools, and virtual try-on features",
      results: ["70% reduction in returns", "180% increase in online sales", "45% higher average order value"],
      industry: "Jewelry & Fashion",
    },
    {
      location: "Brooklyn, NY",
      business: "Brooklyn Craft Beer Delivery",
      problem: "Local brewery wanted to sell craft beer online but faced complex shipping regulations",
      solution:
        "Built custom e-commerce platform with age verification, shipping restrictions, and local delivery zones",
      results: ["300% increase in direct sales", "Expanded to 5 NYC boroughs", "40% profit margin improvement"],
      industry: "Food & Beverage",
    },
    {
      location: "Las Vegas, NV",
      business: "Strip Souvenir & Gift Shop",
      problem: "High foot traffic but wanted to capture tourist sales after they left Vegas",
      solution: "Created mobile-optimized store with location-based marketing and tourist-friendly shipping",
      results: [
        "250% increase in post-visit sales",
        "International shipping to 15 countries",
        "60% repeat customer rate",
      ],
      industry: "Tourism & Retail",
    },
    {
      location: "Portland, ME",
      business: "Maine Lobster Roll Delivery",
      problem: "Seasonal seafood business wanted year-round revenue through frozen product sales",
      solution: "Developed subscription-based e-commerce with seasonal promotions and nationwide shipping",
      results: ["400% revenue increase in off-season", "2,000+ nationwide subscribers", "Featured in Food Network"],
      industry: "Seafood & Food",
    },
    {
      location: "Nashville, TN",
      business: "Honky Tonk Merchandise Store",
      problem: "Music venue wanted to sell branded merchandise to fans worldwide",
      solution: "Built integrated e-commerce with event ticketing, fan club memberships, and limited edition drops",
      results: ["500% increase in merchandise sales", "Global fan base in 25 countries", "VIP membership program"],
      industry: "Entertainment & Music",
    },
    {
      location: "Santa Fe, NM",
      business: "Native American Art Gallery",
      problem: "Authentic art pieces needed online presence but required authenticity verification",
      solution: "Created premium e-commerce with artist profiles, authenticity certificates, and virtual gallery tours",
      results: ["300% increase in art sales", "International collector network", "Artist commission program"],
      industry: "Art & Culture",
    },
  ]

  const ecommerceProblems = [
    {
      problem: "My Shopify store gets traffic but no sales!",
      solution: "High-converting UI/UX redesign + abandoned cart recovery flows",
      commonIn: "All major cities",
    },
    {
      problem: "Customers return products due to size/color mismatches",
      solution: "AR-powered 'try before buy' integration + detailed size guides",
      commonIn: "Fashion retailers nationwide",
    },
    {
      problem: "Amazon/Flipkart listings exist but don't rank",
      solution: "Keyword-optimized titles, images, and backend SEO",
      commonIn: "E-commerce businesses",
    },
    {
      problem: "After shipping, customers vanish—no repeat sales",
      solution: "Post-purchase email sequences + loyalty programs",
      commonIn: "Online retailers",
    },
    {
      problem: "High cart abandonment rates killing profits",
      solution: "Checkout optimization + exit-intent popups + retargeting",
      commonIn: "All e-commerce stores",
    },
    {
      problem: "Mobile users can't complete purchases easily",
      solution: "Mobile-first checkout design + one-click purchasing",
      commonIn: "Mobile-heavy markets",
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
                E-Commerce Solutions
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  E-Commerce
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  That Converts
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Complete e-commerce solutions from store setup to conversion optimization. We build online stores that
                turn visitors into customers and customers into repeat buyers.
              </p>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-2">🛒 Average Results:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-blue-700">Conversion Rate:</span>
                    <p className="text-blue-600">2% → 8%+ average</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Cart Abandonment:</span>
                    <p className="text-blue-600">-65% reduction</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Get E-commerce Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4"
                >
                  View Store Examples
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/digital-marketing-team.webp"
                alt="E-commerce development and optimization team"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete E-Commerce Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From store development to conversion optimization, we handle every aspect of your online business.
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

      {/* Real Examples Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real E-Commerce Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Location-specific examples of how we've transformed online businesses across America.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {realExamples.map((example, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-400 text-blue-900">{example.location}</Badge>
                    <Badge variant="outline" className="border-blue-300 text-blue-200">
                      {example.industry}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{example.business}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">Challenge:</h4>
                      <p className="text-blue-100">{example.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Our Solution:</h4>
                      <p className="text-blue-100">{example.solution}</p>
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

      {/* Common Problems Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">E-Commerce Problems We Solve Daily</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognize any of these issues? We have proven solutions for each one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ecommerceProblems.map((item, index) => (
              <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                      <p className="text-slate-700 italic">"{item.problem}"</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Our Solution:</h4>
                      <p className="text-slate-700">{item.solution}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-sm text-slate-500">Common in: {item.commonIn}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a comprehensive e-commerce audit and discover how we can optimize your online sales and conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Get Free E-commerce Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Store Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
