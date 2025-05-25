"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    businessStage: "",
    challenges: "",
    goals: "",
    timeline: "",
    budget: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "phone",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create HubSpot form submission
    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.firstName },
        { name: "lastname", value: formData.lastName },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "company", value: formData.company },
        { name: "industry", value: formData.industry },
        { name: "business_stage", value: formData.businessStage },
        { name: "challenges", value: formData.challenges },
        { name: "goals", value: formData.goals },
        { name: "timeline", value: formData.timeline },
        { name: "budget", value: formData.budget },
        { name: "preferred_date", value: formData.preferredDate },
        { name: "preferred_time", value: formData.preferredTime },
        { name: "consultation_type", value: formData.consultationType },
      ],
    }

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242866469/9560dcf0-5d18-4621-9862-80cd534d8be2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        },
      )

      if (response.ok) {
        window.location.href = "/thank-you"
      } else {
        alert("There was an error submitting your form. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form. Please try again or call us directly.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-coral-100 text-coral-800 hover:bg-coral-200 px-6 py-2 text-lg font-medium">
            Free Business Consultation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-coral-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get expert advice on your business challenges and discover opportunities for growth. Our 30-minute
            consultation is completely free with no obligations.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-coral-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Book Your Free Consultation</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        >
                          <option value="">Select Industry</option>
                          <option value="retail">Retail</option>
                          <option value="restaurant">Restaurant/Food Service</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="technology">Technology</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="professional-services">Professional Services</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Stage</label>
                      <select
                        name="businessStage"
                        value={formData.businessStage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                      >
                        <option value="">Select Stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="startup">Startup (0-2 years)</option>
                        <option value="growth">Growth Stage (2-5 years)</option>
                        <option value="established">Established (5+ years)</option>
                        <option value="struggling">Struggling/Turnaround</option>
                      </select>
                    </div>

                    {/* Consultation Details */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Main Challenges *</label>
                      <textarea
                        name="challenges"
                        required
                        rows={3}
                        value={formData.challenges}
                        onChange={handleChange}
                        placeholder="Describe your main business challenges..."
                        className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Objectives</label>
                      <textarea
                        name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="What do you want to achieve?"
                        className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                        >
                          <option value="">Select Time</option>
                          <option value="9am-11am">9:00 AM - 11:00 AM</option>
                          <option value="11am-1pm">11:00 AM - 1:00 PM</option>
                          <option value="1pm-3pm">1:00 PM - 3:00 PM</option>
                          <option value="3pm-5pm">3:00 PM - 5:00 PM</option>
                          <option value="5pm-7pm">5:00 PM - 7:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="consultationType"
                            value="phone"
                            checked={formData.consultationType === "phone"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Phone Call
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="consultationType"
                            value="video"
                            checked={formData.consultationType === "video"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Video Call
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="consultationType"
                            value="in-person"
                            checked={formData.consultationType === "in-person"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          In-Person
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-coral-600 hover:bg-coral-700 text-white py-4 text-lg font-semibold"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-coral border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-coral-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">30-Minute Session</p>
                        <p className="text-sm text-gray-600">Focused discussion on your business</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Expert Analysis</p>
                        <p className="text-sm text-gray-600">Professional assessment of your situation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Actionable Recommendations</p>
                        <p className="text-sm text-gray-600">Specific steps you can implement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">No Obligations</p>
                        <p className="text-sm text-gray-600">Completely free with no strings attached</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-coral border-0 bg-gradient-to-br from-coral-500 to-purple-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+17575504040"
                      className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Call Us Now</p>
                        <p className="text-sm opacity-90">+1 (757) 550-4040</p>
                      </div>
                    </a>
                    <a
                      href="mailto:hello@mhdigitalsolutions.com"
                      className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm opacity-90">hello@mhdigitalsolutions.com</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
