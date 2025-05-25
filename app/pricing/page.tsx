import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star, ArrowRight, Zap, Crown } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - Affordable Business Solutions | MH Digital Solutions",
  description:
    "Transparent pricing for all-in-one business solutions. Compare our affordable packages vs typical agencies. 50% cost reduction guaranteed.",
  keywords: [
    "affordable business solutions",
    "business consulting pricing",
    "cost effective business services",
    "business solutions pricing",
    "compare business agencies",
    "business cost reduction 50%",
  ],
}

export default function PricingPage() {
  const plans = [
    {
      name: "Startup Essentials",
      price: "$497",
      period: "/month",
      description: "Perfect for new businesses getting started",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      popular: false,
      features: [
        "Business Registration & Setup",
        "Basic Website Design",
        "Google My Business Setup",
        "Basic SEO Optimization",
        "Social Media Setup (3 platforms)",
        "Email Marketing Setup",
        "Monthly Strategy Call",
        "Basic Analytics Reporting",
      ],
      notIncluded: ["Advanced Marketing Automation", "Global Talent Solutions", "Custom Software Development"],
    },
    {
      name: "Growth Accelerator",
      price: "$997",
      period: "/month",
      description: "Comprehensive solutions for growing businesses",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      popular: true,
      features: [
        "Everything in Startup Essentials",
        "Advanced Website with E-commerce",
        "Comprehensive SEO Strategy",
        "Paid Advertising Management",
        "Content Marketing (8 pieces/month)",
        "CRM Setup & Training",
        "Global Talent Solutions (Basic)",
        "Bi-weekly Strategy Calls",
        "Advanced Analytics & Reporting",
        "Email & Chat Support",
      ],
      notIncluded: ["Custom Software Development", "Dedicated Account Manager"],
    },
    {
      name: "Enterprise Scale",
      price: "$1,997",
      period: "/month",
      description: "Full-scale solutions for established businesses",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      popular: false,
      features: [
        "Everything in Growth Accelerator",
        "Custom Software Development",
        "Advanced Global Talent Solutions",
        "Dedicated Account Manager",
        "Weekly Strategy Sessions",
        "Custom Integrations & Automation",
        "Priority Support (24/7)",
        "Advanced Security & Compliance",
        "Custom Reporting Dashboards",
        "Unlimited Revisions",
        "Crisis Management Support",
      ],
      notIncluded: [],
    },
  ]

  const comparison = {
    "Typical Agency": {
      setup: "$5,000 - $15,000",
      monthly: "$3,000 - $8,000",
      features: [
        "Single service focus",
        "Multiple vendors needed",
        "High setup costs",
        "Limited global talent access",
        "Basic reporting",
        "Standard support hours",
      ],
      total: "$41,000 - $111,000/year",
    },
    "MH Digital Solutions": {
      setup: "$0",
      monthly: "$497 - $1,997",
      features: [
        "All-in-one solutions",
        "Single trusted partner",
        "No setup fees",
        "Global talent network",
        "Advanced analytics",
        "24/7 support available",
      ],
      total: "$5,964 - $23,964/year",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Affordable Business Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            No hidden fees, no setup costs, no surprises. Choose the plan that fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4"
            >
              Compare with Agencies
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular ? "border-emerald-500 shadow-xl scale-105" : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-6 py-2 text-sm font-semibold">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mb-4 mx-auto`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-slate-900 mb-3 mt-6">Not Included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <X className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us Over Typical Agencies?</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              See how much you can save with our all-in-one approach compared to traditional agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(comparison).map(([provider, details]) => (
              <Card
                key={provider}
                className={`${
                  provider === "MH Digital Solutions"
                    ? "border-2 border-emerald-400 bg-emerald-50/10 backdrop-blur-sm"
                    : "bg-white/10 backdrop-blur-sm border-white/20"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-bold ${
                      provider === "MH Digital Solutions" ? "text-emerald-300" : "text-white"
                    }`}
                  >
                    {provider}
                    {provider === "MH Digital Solutions" && (
                      <Badge className="ml-3 bg-emerald-500 text-white">Recommended</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-200 mb-2">Setup Cost:</h4>
                      <p
                        className={`text-2xl font-bold ${
                          provider === "MH Digital Solutions" ? "text-emerald-300" : "text-white"
                        }`}
                      >
                        {details.setup}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-200 mb-2">Monthly Cost:</h4>
                      <p
                        className={`text-2xl font-bold ${
                          provider === "MH Digital Solutions" ? "text-emerald-300" : "text-white"
                        }`}
                      >
                        {details.monthly}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-200 mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                provider === "MH Digital Solutions" ? "text-emerald-400" : "text-emerald-200"
                              }`}
                            />
                            <span className={provider === "MH Digital Solutions" ? "text-emerald-100" : "text-white"}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-emerald-200/20">
                      <h4 className="font-semibold text-emerald-200 mb-2">Total Annual Cost:</h4>
                      <p
                        className={`text-3xl font-bold ${
                          provider === "MH Digital Solutions" ? "text-emerald-300" : "text-white"
                        }`}
                      >
                        {details.total}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-emerald-500 text-emerald-900 px-8 py-4 rounded-2xl inline-block font-bold text-xl">
              Save up to $87,000+ per year with MH Digital Solutions!
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: "Are there any setup fees or hidden costs?",
                answer:
                  "No, absolutely not. Unlike traditional agencies that charge $5,000-$15,000 in setup fees, we include everything in your monthly subscription with no hidden costs.",
              },
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
              },
              {
                question: "What's included in the Global Talent Solutions?",
                answer:
                  "Access to our network of pre-vetted professionals from Pakistan, India, Nigeria, and Bangladesh for customer service, administrative tasks, and specialized roles at 50-70% cost savings.",
              },
              {
                question: "How do you guarantee 50% cost reduction?",
                answer:
                  "Through our global talent network, process optimization, and integrated approach, we eliminate the need for multiple vendors and reduce operational costs significantly.",
              },
              {
                question: "What if I'm not satisfied with the service?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your first month's payment, no questions asked.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
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
            Join hundreds of businesses that have reduced costs by 50% while scaling their operations with our proven
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
