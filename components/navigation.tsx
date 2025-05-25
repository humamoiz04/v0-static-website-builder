--- START OF FILE navigation.tsx ---
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// Assuming Button is styled by luxury-button class
import { Menu, X, ChevronDown, Phone, MessageCircle, Crown } from "lucide-react"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "luxury-nav-scrolled" : "luxury-nav" // Use new scroll classes
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 animate-luxury-fade">
             {/* Use luxury button class for logo circle */}
            <div className="luxury-button w-12 h-12 rounded-xl flex items-center justify-center p-0">
              <Crown className="w-6 h-6 text-white" /> {/* White icon */}
            </div>
             {/* Use dark text for logo text */}
            <span className="text-2xl font-bold text-text-dark">MH Digital Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              Home
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary-button transition-colors font-semibold"> {/* Use primary button color on hover */}
                Services
                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Use luxury card for dropdown menu style */}
              <div className="absolute top-full left-0 mt-2 w-80 luxury-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                       // Consistent link styling
                      href={service.href}
                      className="flex items-center justify-between px-4 py-3 text-foreground hover:text-primary-button rounded-xl transition-all duration-300 hover:bg-background/50"
                    >
                      <span className="font-semibold">{service.name}</span>
                       {/* Use luxury badge for popular */}
                      {service.popular && (
                        <Badge className="luxury-badge text-xs animate-luxury-pulse">
                          ✨ POPULAR
                        </Badge>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              About
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/case-studies"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              Case Studies
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              Blog
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              Pricing
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary-button transition-colors font-semibold relative group" // Use primary button color on hover
            >
              Contact
               {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-button to-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+17575504040"
              className="flex items-center text-foreground hover:text-primary-button transition-colors group" // Use primary button color on hover
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-luxury-pulse" />
              <span className="font-semibold">+1 (757) 550-4040</span>
            </a>
            <Link href="/consultation">
               {/* Use luxury button class */}
              <button className="luxury-button px-4 py-2"> {/* Adjust padding for button class */}
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-foreground hover:text-primary-button transition-colors hover:bg-background/50" // Use primary button color on hover and background/50
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
           // Use luxury card for mobile menu style
          <div className="lg:hidden absolute top-full left-0 right-0 luxury-card mx-4 animate-luxury-fade">
            <div className="p-6 space-y-4">
              <Link
                href="/"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2" // Use primary button color on hover
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-foreground font-bold">Services</div> {/* Use text-foreground */}
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center justify-between pl-4 py-2 text-foreground/80 hover:text-primary-button transition-colors" // Use primary button color on hover
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{service.name}</span>
                     {/* Use luxury badge for popular */}
                    {service.popular && (
                       <Badge className="luxury-badge text-xs">
                        ✨ POPULAR
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>

               {/* Consistent mobile link styling */}
              <Link
                href="/about"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-foreground hover:text-primary-button transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3 border-t border-border/30"> {/* Use border/30 */}
                <a
                  href="tel:+17575504040"
                  className="flex items-center text-foreground hover:text-primary-button transition-colors" // Use primary button color on hover
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">+1 (757) 550-4040</span>
                </a>
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                   {/* Use luxury button class */}
                  <button className="luxury-button w-full px-4 py-2"> {/* Adjust padding for button class */}
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
