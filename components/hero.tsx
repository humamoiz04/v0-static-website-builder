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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pink-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-float animation-delay-1000" />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 px-4 py-2 text-sm font-medium animate-scale-in">
                🚀 All-in-One Business Solutions
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-pink-600 to-gray-900 bg-clip-text text-transparent">
                  From Startup
                </span>
                <br />
                <span className="bg-[linear-gradient(135deg,#8B5CF6_0%,#7C3AED_100%)] bg-clip-text text-transparent">
                  to Scale-Up
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl text-balance">
                <span className="font-semibold text-gray-800">Struggling to Thriving</span>—We Fix, Build & Grow Your
                Business with proven strategies and cutting-edge solutions.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 animate-fade-in animation-delay-${index * 100}`}
                >
                  <div className="text-pink-500">{benefit.icon}</div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats - Colorful Version */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl p-5 text-center group transition-all duration-300 animate-scale-in animation-delay-${index * 200}`}
                >
                  {/* Background Blur */}
                  <div className={`absolute inset-0 opacity-20 blur-md -z-10 ${
                    index === 0 ? "bg-pink-500" : 
                    index === 1 ? "bg-purple-500" : 
                    index === 2 ? "bg-green-500" : 
                    "bg-blue-500"
                  }`}></div>
                  
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-xl border-2 ${
                    index === 0 ? "border-pink-500" : 
                    index === 1 ? "border-purple-500" : 
                    index === 2 ? "border-green-500" : 
                    "border-blue-500"
                  } opacity-30 group-hover:opacity-70 transition-opacity`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className={`${
                        index === 0 ? "text-pink-500" : 
                        index === 1 ? "text-purple-500" : 
                        index === 2 ? "text-green-500" : 
                        "text-blue-500"
                      } group-hover:scale-110 transition-transform`}>
                        {stat.icon}
                      </div>
                      <div className={`text-3xl font-bold ${
                        index === 0 ? "text-pink-600" : 
                        index === 1 ? "text-purple-600" : 
                        index === 2 ? "text-green-600" : 
                        "text-blue-600"
                      }`}>
                        {stat.number}
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${
                      index === 0 ? "text-pink-700" : 
                      index === 1 ? "text-purple-700" : 
                      index === 2 ? "text-green-700" : 
                      "text-blue-700"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Floating Circles */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full ${
                    index === 0 ? "bg-pink-400/50" : 
                    index === 1 ? "bg-purple-400/50" : 
                    index === 2 ? "bg-green-400/50" : 
                    "bg-blue-400/50"
                  }`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full ${
                    index === 0 ? "bg-pink-300/70" : 
                    index === 1 ? "bg-purple-300/70" : 
                    index === 2 ? "bg-green-300/70" : 
                    "bg-blue-300/70"
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`relative ${isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 hover:shadow-3xl transition-shadow duration-500">
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
                  <h3 className="text-xl font-bold text-gray-900">Business Growth Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-pink-600 font-medium">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 hover:bg-pink-100 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-pink-600" />
                      <span className="text-sm font-medium text-pink-800">Revenue Growth</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-700">+247%</div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">Client Satisfaction</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-700">98.5%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Website Conversion</span>
                    <span className="text-sm font-semibold text-gray-900">8.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-[84%] transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lead Generation</span>
                    <span className="text-sm font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-[92%] transition-all duration-1000 animation-delay-500"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                    </div>
                    <span className="text-sm text-gray-700">All systems optimized and running smoothly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-pink-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">ROI Increase</div>
                  <div className="text-lg font-bold text-pink-600">+340%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-purple-100 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Client Rating</div>
                  <div className="text-lg font-bold text-purple-600">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
