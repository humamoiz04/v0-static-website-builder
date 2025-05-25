import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - MH Digital Solutions",
  description: "Learn how MH Digital Solutions protects your privacy and handles your personal information.",
  keywords: ["privacy policy", "data protection", "GDPR compliance", "business privacy"],
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-pink-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-coral-lg animate-float">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl animate-slide-up">
                <Eye className="w-8 h-8 text-coral-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Transparency</h3>
                <p className="text-sm text-gray-600">Clear about data collection</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl animate-slide-up">
                <Lock className="w-8 h-8 text-coral-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Security</h3>
                <p className="text-sm text-gray-600">Your data is protected</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl animate-slide-up">
                <FileText className="w-8 h-8 text-coral-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Compliance</h3>
                <p className="text-sm text-gray-600">GDPR & CCPA compliant</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, contact us, or use
              our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Business information (company name, industry, size)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences and history</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Process payments and transactions</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and abuse</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>With your explicit consent</li>
              <li>To service providers who assist us in operating our business</li>
              <li>To comply with legal requirements or protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure
              servers, and regular security assessments.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide
              personalized content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">International Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place to protect your information in accordance with applicable data
              protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 13. We do not knowingly collect personal information from
              children under 13. If we become aware of such collection, we will delete the information immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting
              the new policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@mhdigitalsolutions.com
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
          <h3 className="text-2xl font-bold gradient-text mb-4">Questions About Our Privacy Practices?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you understand how we protect your information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="gradient-secondary text-white hover:shadow-glow transition-all duration-300">
                Contact Our Privacy Team
              </Button>
            </Link>
            <Link href="/gdpr">
              <Button variant="outline" className="border-coral-200 text-coral-600 hover:bg-coral-50">
                GDPR Compliance Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
