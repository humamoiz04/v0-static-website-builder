"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card" // Make sure to import Card components
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
    support: 0,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      key: "businesses",
      target: 500,
      label: "Businesses Transformed",
      description: "From struggling to thriving",
      icon: <Users className="w-8 h-8 text-mauve-500" />,
      suffix: "+",
    },
    {
      key: "costReduction",
      target: 50,
      label: "Average Cost Reduction",
      description: "Through global talent",
      icon: <DollarSign className="w-8 h-8 text-bronze-500" />,
      suffix: "%",
    },
    {
      key: "successRate",
      target: 95,
      label: "Success Rate",
      description: "Proven track record",
      icon: <Star className="w-8 h-8 text-sage-500" />,
      suffix: "%",
    },
    {
      key: "revenue",
      target: 340,
      label: "Average ROI Increase",
      description: "Measurable results",
      icon: <TrendingUp className="w-8 h-8 text-mauve-500" />,
      suffix: "%",
    },
    {
      key: "countries",
      target: 25,
      label: "Countries Served",
      description: "Global Reach",
      icon: <Globe className="w-8 h-8 text-bronze-500" />,
      suffix: "+"
    },
    {
      key: "awards",
      target: 15,
      label: "Industry Awards",
      description: "Recognition Received",
      icon: <Award className="w-8 h-8 text-sage-500" />,
      suffix: "+"
    },
    {
      key: "support",
      target: 24,
      label: "Support Available",
      description: "Around the clock",
      icon: <Clock className="w-8 h-8 text-mauve-500" />,
      suffix: "/7"
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat) => {
      let currentCount = 0
      const increment = stat.target / steps

      const timer = setInterval(() => {
        currentCount += increment
        const finalValue = stat.key === 'support' ? stat.target : Math.floor(currentCount)

        if (currentCount >= stat.target) {
          currentCount = stat.target
          clearInterval(timer)
        }

        setCounts((prev) => ({
          ...prev,
          [stat.key]: stat.key === 'support' ? currentCount >= stat.target ? '24' : Math.floor(currentCount) : Math.floor(currentCount),
        }))
      }, stepDuration)
    })
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-pearl-100 to-platinum-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-taupe-700 mb-6">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-taupe-500 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join hundreds of successful businesses that have transformed with our
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.key}
              className="luxury-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-pearl-200 to-platinum-200">
                  {stat.icon}
                </div>

                <div className="text-3xl md:text-4xl font-serif font-medium text-taupe-700 mb-2">
                  {stat.key === 'support' && counts[stat.key] === 24 ? '24/7' : counts[stat.key]}
                  {stat.key !== 'support' && stat.suffix}
                </div>

                <div className="text-lg font-medium text-taupe-700 mb-1">{stat.label}</div>
                <div className="text-sm text-taupe-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
