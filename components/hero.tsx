"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Shield, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "500+", label: "Businesses Transformed", icon: <Users className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <Star className="w-5 h-5" /> },
    { number: "50%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-5 h-5" /> },
  ]

  const benefits = [
    { text: "Fix What Others Ignore", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "All-in-One Solutions", icon: <Zap className="w-5 h-5" /> },
    { text: "Data-Backed Results", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Global Talent Access", icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl -z-10 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium animate-scale-in">
                🚀 All-in-One Business Solutions
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent">
                  From Startup
                </span>
                <br />
                <span className="linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%) bg-clip-text text-transparent">
                  to Scale-Up
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl text-balance">
                <span className="font-semibold text-slate-800">Struggling to Thriving</span>—We Fix, Build & Grow Your
                Business with proven strategies and cutting-edge solutions.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-emerald-600">{benefit.icon}</div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-emerald-600 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-emerald-600">{stat.number}</div>
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100 hover:shadow-3xl transition-shadow duration-500">
              {/* Business Meeting Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-meeting.webp"
                  alt="Business team collaboration and strategy meeting"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                  loading="eager"
                />
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">Business Growth Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-600 font-medium">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-800">Revenue Growth</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-700">+247%</div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Client Satisfaction</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-700">98.5%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Website Conversion</span>
                    <span className="text-sm font-semibold text-slate-900">8.4%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[84%] transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Lead Generation</span>
                    <span className="text-sm font-semibold text-slate-900">92%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full w-[92%] transition-all duration-1000"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-slate-700">All systems optimized and running smoothly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-emerald-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">ROI Increase</div>
                  <div className="text-lg font-bold text-emerald-600">+340%</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-blue-100 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Client Rating</div>
                  <div className="text-lg font-bold text-blue-600">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
