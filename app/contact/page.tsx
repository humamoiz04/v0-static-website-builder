"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script")
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js"
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242866469",
          formId: "9560dcf0-5d18-4621-9862-80cd534d8be2",
          region: "na2",
          target: "#hubspot-form",
        })
      }
    }
    document.body.appendChild(script)

    // Load Calendly script
    const calendlyScript = document.createElement("script")
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js"
    calendlyScript.async = true
    document.body.appendChild(calendlyScript)

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(calendlyScript)
    }
  }, [])

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send us a detailed message",
      contact: "hello@mhdigitalsolutions.com",
      availability: "Response within 24 hours",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support and answers",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      description: "Visit our headquarters",
      contact: "123 Business Ave, Suite 100, New York, NY 10001",
      availability: "By appointment only",
    },
  ]

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@mhdigitalsolutions.com",
    },
    {
      city: "Los Angeles",
      address: "456 Innovation Blvd, Floor 12",
      zipcode: "Los Angeles, CA 90210",
      phone: "+1 (555) 234-5678",
      email: "la@mhdigitalsolutions.com",
    },
    {
      city: "Chicago",
      address: "789 Commerce St, Suite 200",
      zipcode: "Chicago, IL 60601",
      phone: "+1 (555) 345-6789",
      email: "chicago@mhdigitalsolutions.com",
    },
  ]

  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/mosaichub56/strategy-call",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Contact MH Digital Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Ready to transform your business? Get in touch with our expert team for a free consultation and discover how
            we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-slate-900 mb-2">{method.contact}</p>
                  <p className="text-xs text-slate-500">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Free Consultation Form */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Get Free Business Consultation</CardTitle>
                <p className="text-slate-600">Tell us about your business challenges and goals</p>
              </CardHeader>
              <CardContent>
                <div id="hubspot-form" className="min-h-[400px]">
                  {/* HubSpot form will be injected here */}
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                      <p className="text-slate-600">Loading consultation form...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy Call Booking */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Schedule Strategy Call</CardTitle>
                <p className="text-slate-600">Book a 30-minute strategy session with our experts</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6">
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">30-Minute Strategy Session</h3>
                    <ul className="text-sm text-emerald-700 space-y-2 mb-6">
                      <li>• Analyze your current business challenges</li>
                      <li>• Identify growth opportunities</li>
                      <li>• Discuss potential solutions</li>
                      <li>• Get actionable recommendations</li>
                    </ul>
                    <Button
                      onClick={handleCalendlyClick}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                    >
                      Schedule Your Call
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-4">Prefer to call directly?</p>
                    <a
                      href="tel:+15551234567"
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Locations</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              With offices across major US cities, we're always close to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{office.city}</h3>
                  <div className="space-y-3 text-emerald-100">
                    <div className="flex items-start justify-center gap-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{office.address}</p>
                        <p>{office.zipcode}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      <p>{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer:
                  "We can typically begin within 1-2 business days after our initial consultation and agreement signing. For urgent projects, we offer expedited start options.",
              },
              {
                question: "Do you work with businesses outside the United States?",
                answer:
                  "While our primary focus is on US businesses, we do work with international clients, especially those looking to enter the US market or leverage our global talent network.",
              },
              {
                question: "What makes your approach different from other agencies?",
                answer:
                  "Our integrated approach combines strategic consulting, digital solutions, and global talent under one roof. This eliminates the complexity of managing multiple vendors while ensuring all aspects of your business work together seamlessly.",
              },
              {
                question: "Can you help with both startup and established businesses?",
                answer:
                  "We work with businesses at all stages - from startups needing foundational setup to established companies looking to optimize operations or expand globally.",
              },
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple projects like business registration can be completed in days, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our consultation.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your business. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={handleCalendlyClick}
            >
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
