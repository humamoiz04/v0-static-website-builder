import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Star,
  Shield,
  Award,
} from "lucide-react"

export default function Footer() {
  const services = [
    { name: "Business Consultation", href: "/services/consultation" },
    { name: "Digital Services", href: "/services/digital" },
    { name: "E-Commerce Solutions", href: "/services/ecommerce" },
    { name: "Global Talent Solutions", href: "/services/global-talent" },
    { name: "Legal & Compliance", href: "/services/legal" },
    { name: "Premium Services", href: "/services/premium" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  const resources = [
    { name: "Pricing", href: "/pricing" },
    { name: "Free Consultation", href: "/consultation" },
    { name: "Business Tools", href: "/tools" },
    { name: "Knowledge Base", href: "/knowledge-base" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Global Talent Guide", href: "/global-talent-guide" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Refund Policy", href: "/refund" },
    { name: "SLA Agreement", href: "/sla" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-coral-400 to-purple-400 bg-clip-text text-transparent">
                MH Digital Solutions
              </span>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              All-in-One Business Solutions from Startup to Scale-Up. We fix, build & grow your business with proven
              strategies and 50% cost reduction through global talent solutions.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-coral-400" />
                <span className="text-sm text-gray-300">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Award Winner</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral-400" />
                <a href="tel:+17575504040" className="text-gray-300 hover:text-coral-400 transition-colors">
                  +1 (757) 550-4040
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/17075822255" className="text-gray-300 hover:text-green-400 transition-colors">
                  +1 (707) 582-2255 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral-400" />
                <a
                  href="mailto:hello@mhdigitalsolutions.com"
                  className="text-gray-300 hover:text-coral-400 transition-colors"
                >
                  hello@mhdigitalsolutions.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001, USA
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-coral-400 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-coral-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href} className="text-gray-300 hover:text-coral-400 transition-colors text-sm">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Get Business Growth Tips</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest insights on cost reduction, global talent, and business
                optimization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
              <Button className="bg-coral-600 hover:bg-coral-700 text-white px-6 py-3">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">© 2024 MH Digital Solutions. All rights reserved.</div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-coral-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/1C6iWHe1fC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-coral-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/mh_digitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-coral-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/moiz_khan845"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-coral-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/mhdigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-coral-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
