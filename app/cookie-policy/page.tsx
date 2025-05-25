import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | MH Digital Solutions",
  description:
    "Learn about how MH Digital Solutions uses cookies to improve your browsing experience and provide personalized services.",
  canonical: "https://www.mhdigitalsolution.com/cookie-policy",
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-pink to-light-orange">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-coral hover:text-deep-purple transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-deep-purple to-coral bg-clip-text text-transparent mb-8">
              Cookie Policy
            </h1>

            <div className="prose prose-lg max-w-none text-text-gray space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="animate-fade-in animation-delay-200">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our
                  website. They are widely used to make websites work more efficiently and provide information to
                  website owners.
                </p>
              </section>

              <section className="animate-fade-in animation-delay-400">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">How We Use Cookies</h2>
                <p>We use cookies for several purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
              </section>

              <section className="animate-fade-in animation-delay-600">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Types of Cookies We Use</h2>

                <div className="space-y-4">
                  <div className="bg-light-pink/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Strictly Necessary Cookies</h3>
                    <p>These cookies are essential for the website to function and cannot be disabled.</p>
                  </div>

                  <div className="bg-light-orange/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Performance Cookies</h3>
                    <p>These cookies collect information about how you use our website to help us improve it.</p>
                  </div>

                  <div className="bg-cream/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Functionality Cookies</h3>
                    <p>These cookies remember your preferences and provide enhanced features.</p>
                  </div>
                </div>
              </section>

              <section className="animate-fade-in animation-delay-800">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Managing Cookies</h2>
                <p>You can control and manage cookies in various ways. Most browsers allow you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </section>

              <section className="animate-fade-in animation-delay-1000">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Third-Party Cookies</h2>
                <p>We may use third-party services that set cookies on our website, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>HubSpot for customer relationship management</li>
                  <li>Social media platforms for sharing content</li>
                  <li>Advertising networks for targeted advertising</li>
                </ul>
              </section>

              <section className="animate-fade-in animation-delay-1200">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Contact Us</h2>
                <p>If you have any questions about our Cookie Policy, please contact us:</p>
                <div className="bg-gradient-to-r from-coral/10 to-deep-purple/10 p-4 rounded-lg mt-4">
                  <p>
                    <strong>Email:</strong> info@mhdigitalsolution.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1(757)550-4040
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +1(707)582-2255
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
