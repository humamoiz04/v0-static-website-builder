"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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
    {
      name: "Business Consultation",
      href: "/services/consultation",
      description: "Strategic planning and operational optimization",
    },
    { name: "Digital Services", href: "/services/digital", description: "Web design, SEO, and digital marketing" },
    { name: "E-Commerce Solutions", href: "/services/ecommerce", description: "Online store optimization and growth" },
    { name: "Legal & Compliance", href: "/services/legal", description: "Business registration and legal protection" },
    {
      name: "Global Talent Solutions",
      href: "/services/global-talent",
      description: "Cost-effective global workforce solutions",
    },
    { name: "Premium Services", href: "/services/premium", description: "AI, automation, and advanced solutions" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MH Digital Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-emerald-600 font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-emerald-500/50 to-emerald-700/50 p-6 no-underline outline-none focus:shadow-md"
                            href="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">All Services</div>
                            <p className="text-sm leading-tight text-emerald-100">
                              Comprehensive business solutions from startup to scale-up
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-600">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/pricing"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/blog"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/case-studies"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    Case Studies
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-3 py-2"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-100 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Home
              </Link>
              <Link href="/services" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Services
              </Link>
              <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                About
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Blog
              </Link>
              <Link href="/case-studies" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Case Studies
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-emerald-600 font-medium px-3 py-2">
                Contact
              </Link>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white mx-3 mt-4">
                Get Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
