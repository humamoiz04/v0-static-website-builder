"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "Business Consultation", href: "/services/consultation", popular: true },
    { name: "Digital Services", href: "/services/digital", popular: true },
    { name: "E-Commerce Solutions", href: "/services/ecommerce" },
    { name: "Global Talent Solutions", href: "/services/global-talent" },
    { name: "Legal & Compliance", href: "/services/legal", popular: true },
    { name: "Premium Services", href: "/services/premium" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-coral">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold gradient-text">MH Digital Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-coral-500 transition-colors font-medium">
                Services
                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 gradient-primary rounded-lg shadow-coral-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center justify-between px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <span>{service.name}</span>
                      {service.popular && (
                        <span className="text-xs bg-gradient-secondary text-white px-2 py-1 rounded-full animate-pulse-slow">
                          🔥 POPULAR
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium animate-slide-up"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+17575504040"
              className="flex items-center text-gray-700 hover:text-coral-500 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+1 (757) 550-4040</span>
            </a>
            <Link href="/consultation">
              <Button className="gradient-secondary text-white hover:shadow-glow transition-all duration-300 animate-glow">
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-coral-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 gradient-primary shadow-coral-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-medium">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center justify-between pl-4 py-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{service.name}</span>
                    {service.popular && (
                      <span className="text-xs gradient-secondary text-white px-2 py-1 rounded-full">🔥 POPULAR</span>
                    )}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-coral-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+17575504040"
                  className="flex items-center text-white hover:text-coral-200 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">+1 (757) 550-4040</span>
                </a>
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gradient-secondary text-white hover:shadow-glow transition-all duration-300">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
