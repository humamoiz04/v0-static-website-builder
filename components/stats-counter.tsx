"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Star, DollarSign, Globe, Award, Clock } from "lucide-react"

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    businesses: 0,
    successRate: 0,
    costReduction: 0,
    countries: 0,
    revenue: 0,
    clients: 0,
    awards: 0,
    support: 24,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      key: "businesses",
      target: 500,
      label: "Businesses Transformed",
      description: "From struggling to thriving",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      suffix: "+",
    },
    {
      key: "successRate",
      target: 95,
      label: "Success Rate",
      description: "Proven track record",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      suffix: "%",
    },
    {
      key: "costReduction",
      target: 50,
      label: "Average Cost Reduction",
      description: "Through global talent",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      suffix: "%",
    },
    {
      key: "countries",
      target: 25,
      label: "Countries Served",
      description: "Global reach",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      suffix: "+",
    },
    {
      key: "revenue",
      target: 340,
      label: "Average ROI Increase",
      description: "Measurable results",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      suffix: "%",
    },
    {
      key: "clients",
      target: 1200,
      label: "Happy Clients",
      description: "Worldwide",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      suffix: "+",
    },
    {
      key: "awards",
      target: 15,
      label: "Industry Awards",
      description: "Recognition received",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      suffix: "+",
    },
    {
      key: "support",
      target: 24,
      label: "Support Available",
      description: "Always here for you",
      icon: <Clock className="w-8 h-8" />,
      color: "from-slate-500 to-slate-700",
      suffix: "/7",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat) => {
      let currentCount = 0
      const increment = stat.target / steps

      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.target) {
          currentCount = stat.target
          clearInterval(timer)
        }

        setCounts((prev) => ({
          ...prev,
          [stat.key]: Math.floor(currentCount),
        }))
      }, stepDuration)
    })
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-slide-up">
            Our numbers speak for themselves. Join hundreds of successful businesses that have transformed with our
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.key}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counts[stat.key as keyof typeof counts]}
                  {stat.suffix}
                </div>

                <div className="text-lg font-semibold text-emerald-300 mb-1">{stat.label}</div>

                <div className="text-sm text-emerald-100">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Featured In</div>
              <div className="text-emerald-100">Forbes, TechCrunch, Entrepreneur</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Certified By</div>
              <div className="text-emerald-100">Google Partner, HubSpot, Clutch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Trusted Since</div>
              <div className="text-emerald-100">2014 - 10+ Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
