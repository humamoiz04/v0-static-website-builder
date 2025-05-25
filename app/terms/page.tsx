import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - MH Digital Solutions",
  description: "Read our terms of service and understand the legal agreement for using MH Digital Solutions services.",
  keywords: ["terms of service", "legal agreement", "business terms", "service agreement"],
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-pink-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-coral-lg animate-float">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to these
            terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>

        {/* Back Button */}
        <div className="mb-8 animate-slide-up">
          <Link href="/">
            <Button variant="outline" className="border-coral-200 text-coral-600 hover:bg-coral-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-coral-lg p-8 animate-scale-in">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl animate-slide-up">
                <FileText className="w-6 h-6 text-coral-500 mx-auto mb-2" />
                <h3 className="font-semibold text-sm text-gray-800">Agreement</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl animate-slide-up">
                <Shield className="w-6 h-6 text-coral-500 mx-auto mb-2" />
                <h3 className="font-semibold text-sm text-gray-800">Protection</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl animate-slide-up">
                <Scale className="w-6 h-6 text-coral-500 mx-auto mb-2" />
                <h3 className="font-semibold text-sm text-gray-800">Fair Terms</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl animate-slide-up">
                <AlertTriangle className="w-6 h-6 text-coral-500 mx-auto mb-2" />
                <h3 className="font-semibold text-sm text-gray-800">Important</h3>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using MH Digital Solutions services, you agree to be bound by these Terms of Service and
              all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-4">
              MH Digital Solutions provides comprehensive business solutions including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Business consultation and strategy development</li>
              <li>Digital marketing and web development services</li>
              <li>E-commerce solutions and optimization</li>
              <li>Global talent acquisition and management</li>
              <li>Legal and compliance services</li>
              <li>Premium business automation and AI solutions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Pay all fees and charges in a timely manner</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>All fees are due and payable in advance unless otherwise agreed</li>
              <li>Payments are non-refundable except as specified in our refund policy</li>
              <li>We reserve the right to suspend services for non-payment</li>
              <li>All prices are subject to change with 30 days notice</li>
              <li>Additional charges may apply for scope changes or rush orders</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and intellectual property on our website and in our services remain the property
              of MH Digital Solutions or our licensors. You may not use, reproduce, or distribute our intellectual
              property without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              We understand the sensitive nature of business information. Both parties agree to maintain confidentiality
              of proprietary information shared during the course of our business relationship. This obligation survives
              termination of services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Service Level Agreement</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>We strive to maintain 99.9% uptime for our digital services</li>
              <li>Response times for support requests: 24 hours for standard, 4 hours for urgent</li>
              <li>Project deliverables will be completed within agreed timelines</li>
              <li>Regular progress updates will be provided for ongoing projects</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, MH Digital Solutions shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
              data, or business opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">Either party may terminate services with written notice:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>30 days notice for ongoing monthly services</li>
              <li>Immediate termination for breach of terms</li>
              <li>Upon completion of project-based work</li>
              <li>Refunds will be provided according to our refund policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these terms or our services will be resolved through binding arbitration in
              accordance with the rules of the American Arbitration Association. The arbitration will take place in New
              York, NY.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Force Majeure</h2>
            <p className="text-gray-600 mb-6">
              Neither party shall be liable for any failure to perform due to circumstances beyond their reasonable
              control, including but not limited to natural disasters, government actions, or technical failures.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Modifications</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by the laws of the State of New York, without regard to conflict of law
              principles. Any legal action must be brought in the courts of New York, NY.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">For questions about these terms, please contact us:</p>
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@mhdigitalsolutions.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (757) 550-4040
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in">
          <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Now that you understand our terms, let's discuss how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="gradient-secondary text-white hover:shadow-glow transition-all duration-300">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-coral-200 text-coral-600 hover:bg-coral-50">
                Contact Legal Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
