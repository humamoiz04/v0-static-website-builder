import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Assuming this is your custom Card
import { Badge } from "@/components/ui/badge" // Assuming this is your custom Badge
// Assuming Button is styled by luxury-button class
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

export default function ProblemsSolved() {
  const problemCategories = [
    {
      category: "Business Consultation & Strategy",
      color: "from-coral to-orange", // Consider removing or updating gradients
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
      color: "from-purple to-pink", // Consider removing or updating gradients
      problems: [
        {
          problem: "My website gets traffic but no one calls.",
          solution: "Redesign UI/UX to highlight your phone number + add a WhatsApp chat button.", // WhatsApp chat button specifically mentioned - if not using, remove
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
      color: "from-coral to-pink", // Consider removing or updating gradients
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
      category: "Organic Marketing", // Added Organic Marketing category
      color: "from-orange to-coral", // Consider removing or updating gradients
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
      color: "from-purple to-coral", // Consider removing or updating gradients
      problems: [
        {
          problem: "My restaurant has empty tables but customers wait because hostess is overwhelmed.",
          solution: "Install a digital kiosk for self-check-in + staff retraining.",
          result: "Table turnover increased by 40%",
        },
        {
          problem: "My real estate agency loses leads who call after hours.",
          solution: "AI chatbot on WhatsApp to answer FAQs and schedule viewings 24/7.", // WhatsApp chatbot specifically mentioned - if not using, remove
          result: "Lead capture increased by 85%",
        },
      ],
    },
     // Add category for Global Talent & Cost Savings problems
     {
       category: "Global Talent & Cost Savings",
       color: "from-green-500 to-teal-500", // Example gradient
       problems: [
         {
           problem: "High US customer service costs are eating into profits.",
           solution: "Leverage our vetted global talent team for high-quality customer support at 50% less cost.",
           result: "Customer service costs reduced by 55%, support coverage increased to 24/7.",
         },
         {
           problem: "Hiring local staff for admin tasks is too expensive.",
           solution: "Access skilled administrative professionals from our global network for efficient, cost-effective support.",
           result: "Administrative labor costs decreased by 45%.",
         },
       ],
     },
  ]

  return (
    <section className="py-24 px-4 bg-pink-500"> {/* Use background variable */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="luxury-badge mb-6 animate-luxury-pulse"> {/* Use luxury badge */}
            Real Problems, Real Solutions
          </Badge>
           {/* Use luxury problem header h2 style */}
          <div className="luxury-problem-header">
             <h2>Problems We Solve Daily</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"> {/* Use text-foreground */}
            See how we've transformed businesses facing the exact same challenges you might be experiencing.
          </p>
        </div>

        {/* Problems by Category */}
        <div className="space-y-12">
          {problemCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}> {/* Reduced delay */}
               {/* Use dark text for category title */}
              <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
                {category.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {category.problems.map((item, problemIndex) => (
                  <Card
                    key={problemIndex}
                    className="luxury-card hover:shadow-coral-glow transition-all duration-500 animate-scale-in" // Use luxury card, add glow on hover
                    style={{ animationDelay: `${problemIndex * 0.1}s` }} // Add animation delay per card
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                         {/* Problem Icon Wrapper - Use solid color or subtle gradient */}
                        <div className="p-2 bg-red-500/20 rounded-lg"> {/* Keep original red if needed */}
                           <AlertTriangle className="w-6 h-6 text-red-500" /> {/* Keep original red if needed */}
                        </div>
                        <div className="flex-1">
                           {/* Dark text */}
                          <CardTitle className="text-text-dark text-lg mb-2">Problem:</CardTitle>
                           {/* Red text for problem description */}
                          <CardDescription className="text-red-600 text-base italic">"{item.problem}"</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4">
                         {/* Solution Icon Wrapper - Use pink/primary color */}
                        <div className="p-2 bg-primary-button/50 rounded-lg animate-luxury-pulse"> {/* Use primary button color */}
                          <CheckCircle className="w-6 h-6 text-primary-button" /> {/* Use primary button color */}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-text-dark font-semibold mb-2">Our Solution:</h4> {/* Use dark text */}
                          <p className="text-foreground/80">{item.solution}</p> {/* Use text-foreground */}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                         {/* Result Icon Wrapper - Use orange/accent color */}
                        <div className="p-2 bg-accent-orange/50 rounded-lg animate-luxury-glow"> {/* Use accent orange color */}
                          <TrendingUp className="w-6 h-6 text-white" /> {/* White icon */}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-text-dark font-semibold mb-2">Result:</h4> {/* Use dark text */}
                          <p className="text-text-dark font-medium">{item.result}</p> {/* Use dark text */}
                        </div>
                      </div>

                       {/* Use luxury button with gradient */}
                      <button className="luxury-button w-full mt-4 bg-gradient-to-r from-accent-orange to-primary-button hover:from-primary-button hover:to-accent-orange text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:scale-105 animate-luxury-pulse"> {/* Gradient button */}
                        Get Similar Results
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Use a different class if not the dark background type */}
        <div className="text-center mt-16 animate-slide-up">
           {/* Use luxury button with gradient */}
          <button className="luxury-button bg-gradient-to-r from-accent-orange to-primary-button hover:from-primary-button hover:to-accent-orange text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 animate-luxury-glow"> {/* Gradient button */}
            Solve Your Business Problems Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
