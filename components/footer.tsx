import Link from "next/link"
import { Button } from "@/components/ui/button" // Assuming this is your custom Button
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
    <footer className="luxury-cta-section"> {/* Use cta section class for dark background */}
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
               {/* Luxury button class for logo circle */}
              <div className="luxury-button w-10 h-10 rounded-xl flex items-center justify-center p-0">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              {/* Use text dark for logo text or keep gradient subtle */}
              <span className="text-2xl font-bold text-white">
                MH Digital Solutions
              </span>
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed"> {/* Use white/80 for description */}
              All-in-One Business Solutions from Startup to Scale-Up. We fix, build & grow your business with proven
              strategies and 50% cost reduction through global talent solutions.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-button" /> {/* Use primary button color */}
                <span className="text-white/80 text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-button" /> {/* Use primary button color */}
                <span className="text-white/80 text-sm">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-button" /> {/* Use primary button color */}
                <span className="text-white/80 text-sm">Award Winner</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-button" /> {/* Use primary button color */}
                <a href="tel:+17575504040" className="text-white/80 hover:text-primary-button transition-colors">
                  +1 (757) 550-4040
                </a>
              </div>
              <div className="flex items-center gap-3">
                 {/* Use primary button color or green if keeping WhatsApp branding */}
                <Phone className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/17075822255" className="text-white/80 hover:text-green-400 transition-colors">
                  +1 (707) 582-2255 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-button" /> {/* Use primary button color */}
                <a
                  href="mailto:hello@mhdigitalsolutions.com"
                  className="text-white/80 hover:text-primary-button transition-colors"
                >
                  hello@mhdigitalsolutions.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-button mt-0.5" /> {/* Use primary button color */}
                <span className="text-white/80">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001, USA
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3> {/* Ensure white text */}
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-white/80 hover:text-primary-button transition-colors text-sm"> {/* Use white/80 text and primary button color on hover */}
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3> {/* Ensure white text */}
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-white/80 hover:text-primary-button transition-colors text-sm"> {/* Use white/80 text and primary button color on hover */}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3> {/* Ensure white text */}
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href} className="text-white/80 hover:text-primary-button transition-colors text-sm"> {/* Use white/80 text and primary button color on hover */}
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20"> {/* Use white border */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Get Business Growth Tips</h3> {/* Ensure white text */}
              <p className="text-white/80">
                Subscribe to our newsletter for the latest insights on cost reduction, global talent, and business
                optimization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                 // Style input for dark background
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-button"
              />
               {/* Use luxury button */}
              <button className="luxury-button px-6 py-3">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20"> {/* Use white border */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/60 text-sm">© 2024 MH Digital Solutions. All rights reserved.</div> {/* Use white/60 text */}

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white/60 hover:text-primary-button transition-colors text-sm" // Use white/60 text and primary button color on hover
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
                className="text-white/60 hover:text-primary-button transition-colors" // Use white/60 text and primary button color on hover
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/mh_digitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-button transition-colors" // Use white/60 text and primary button color on hover
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/moiz_khan845"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-button transition-colors" // Use white/60 text and primary button color on hover
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/mhdigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-button transition-colors" // Use white/60 text and primary button color on hover
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
