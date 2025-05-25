import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

export default function ProblemsSolved() {
  const problemCategories = [
    {
      category: "Business Consultation & Strategy",
      color: "from-coral to-orange",
      problems: [
        {
          problem: "I started a café but customers don't return.",
          solution: "We audit your menu pricing, staff training, and customer experience to identify leaks.",
          result: "Customer retention increased by 65%",
        },
        {
          problem: "My 10-year-old hardware store is losing to new competitors.",
          solution: 'We rebrand your shop, modernize inventory tracking, and launch "loyalty for seniors" campaigns.',
          result: "Revenue growth of 40% in 6 months",
        },
      ],
    },
    {
      category: "Digital Services",
      color: "from-purple to-pink",
      problems: [
        {
          problem: "My website gets traffic but no one calls.",
          solution: "Redesign UI/UX to highlight your phone number + add a WhatsApp chat button.",
          result: "Phone inquiries increased by 180%",
        },
        {
          problem: 'My bakery ranks #1 on Google but only for "cheap cakes"—I want luxury orders!',
          solution: 'Reoptimize SEO for "premium wedding cakes [City]" + luxury photo gallery.',
          result: "Average order value increased by 250%",
        },
      ],
    },
    {
      category: "E-Commerce Solutions",
      color: "from-coral to-pink",
      problems: [
        {
          problem: "My Shopify store gets traffic but no sales!",
          solution: "High-converting UI/UX redesign + abandoned cart recovery flows.",
          result: "Conversion rate improved from 2% to 8%",
        },
        {
          problem: "Customers return products due to size/color mismatches.",
          solution: 'AR-powered "try before buy" integration + size guide popups.',
          result: "Return rate reduced by 70%",
        },
      ],
    },
    {
      category: "Organic Marketing",
      color: "from-orange to-coral",
      problems: [
        {
          problem: "I post daily on Instagram but get no sales.",
          solution:
            'Shift from product photos to "behind-the-scenes" storytelling (e.g., "How our organic soap is handmade").',
          result: "Social media sales increased by 300%",
        },
      ],
    },
    {
      category: "Business Optimization",
      color: "from-purple to-coral",
      problems: [
        {
          problem: "My restaurant has empty tables but customers wait because hostess is overwhelmed.",
          solution: "Install a digital kiosk for self-check-in + staff retraining.",
          result: "Table turnover increased by 40%",
        },
        {
          problem: "My real estate agency loses leads who call after hours.",
          solution: "AI chatbot on WhatsApp to answer FAQs and schedule viewings 24/7.",
          result: "Lead capture increased by 85%",
        },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#370034] via-pink to-cream animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-6 bg-coral text-white hover:bg-coral/90 px-6 py-2 text-lg font-medium animate-bounce">
            Real Problems, Real Solutions
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray mb-6 animate-glow">Problems We Solve Daily</h2>
          <p className="text-xl text-gray/80 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed businesses facing the exact same challenges you might be experiencing.
          </p>
        </div>

        {/* Problems by Category */}
        <div className="space-y-12">
          {problemCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray mb-8 text-center animate-glow">
                {category.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {category.problems.map((item, problemIndex) => (
                  <Card
                    key={problemIndex}
                    className="bg-white/90 backdrop-blur-sm border-pink/20 hover:bg-white hover:shadow-coral-glow transition-all duration-500 animate-scale-in group"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-red-500/20 rounded-lg animate-wiggle">
                          <AlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-gray text-lg mb-2">Problem:</CardTitle>
                          <CardDescription className="text-red-600 text-base italic">"{item.problem}"</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-coral/20 rounded-lg animate-pulse">
                          <CheckCircle className="w-6 h-6 text-coral" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-coral font-semibold mb-2">Our Solution:</h4>
                          <p className="text-gray/80">{item.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-r from-coral to-orange rounded-lg animate-glow">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-purple font-semibold mb-2">Result:</h4>
                          <p className="text-gray font-medium">{item.result}</p>
                        </div>
                      </div>

                      <Button className="w-full mt-4 bg-gradient-to-r from-coral to-orange hover:from-orange hover:to-coral text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:scale-105 animate-float">
                        Get Similar Results
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <Button className="bg-gradient-to-r from-coral to-orange hover:from-orange hover:to-coral text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 animate-glow">
            Solve Your Business Problems Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
