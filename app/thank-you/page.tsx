import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-coral-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-coral-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl font-bold bg-gradient-to-r from-coral-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Thank You!
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Your consultation request has been successfully submitted. We'll get back to you within 24 hours to
              confirm your appointment.
            </p>

            <div className="bg-pink-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">We'll review your submission and prepare for your consultation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">Our team will contact you within 24 hours to confirm your appointment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">We'll send you a calendar invite with all the details</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-cream-50 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-coral-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">Need to talk now?</p>
                <a href="tel:+17575504040" className="text-coral-600 hover:text-coral-700">
                  +1 (757) 550-4040
                </a>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg">
                <Mail className="w-6 h-6 text-coral-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">Email us directly</p>
                <a href="mailto:hello@mhdigitalsolutions.com" className="text-coral-600 hover:text-coral-700">
                  hello@mhdigitalsolutions.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="border-coral-600 text-coral-600 hover:bg-coral-50">
                  Back to Home
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-coral-600 hover:bg-coral-700 text-white">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
