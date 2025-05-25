import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-pink to-light-orange flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="animate-bounce mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-coral to-deep-purple bg-clip-text text-transparent">
            404
          </div>
        </div>

        <h1 className="text-3xl font-bold text-text-gray mb-4 animate-fade-in">Page Not Found</h1>

        <p className="text-text-gray/70 mb-8 animate-fade-in animation-delay-200">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
          wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
          <Button
            asChild
            className="bg-gradient-to-r from-coral to-orange-400 hover:from-coral/90 hover:to-orange-400/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-coral text-coral hover:bg-coral hover:text-white transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="mt-12 animate-fade-in animation-delay-600">
          <h3 className="text-lg font-semibold text-text-gray mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/services" className="text-coral hover:text-deep-purple transition-colors">
              Our Services
            </Link>
            <Link href="/about" className="text-coral hover:text-deep-purple transition-colors">
              About Us
            </Link>
            <Link href="/pricing" className="text-coral hover:text-deep-purple transition-colors">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-coral hover:text-deep-purple transition-colors">
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
