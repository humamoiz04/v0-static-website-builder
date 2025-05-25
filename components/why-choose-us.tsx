import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card' // Assuming custom Card
import { Badge } from '@/components/ui/badge' // Assuming custom Badge
import { CheckCircle, Target, Zap, BarChart3, Users, Shield, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'We Fix What Others Ignore',
      description: 'Not just "more marketing"—we diagnose why customers leave (e.g., long waits, poor UX).',
       // Use colors from the new palette or remove if gradients aren't part of this style
      color: 'from-primary-button to-accent-orange', // Example using new palette
      examples: ['Identify real bottlenecks', 'Fix customer experience gaps', 'Solve operational issues']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'All-in-One = Faster Results',
      description: 'No juggling 10 agencies. We handle legal, branding, and tech under one roof.',
      color: 'from-accent-orange to-gradient-green', // Example using new palette
      examples: ['Single point of contact', 'Integrated solutions', 'Streamlined processes']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data-Backed, Not Guesswork',
      description: 'Track ROI with real metrics (e.g., "Table turnover increased 40% post-optimization").',
      color: 'from-gradient-green to-primary-button', // Example using new palette
      examples: ['Measurable results', 'Performance tracking', 'ROI optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cut Costs by 50% & Scale', // Highlight cost saving
      description: 'Leverage global talent to slash labor costs while expanding your team and capabilities.',
      color: 'from-text-dark to-primary-button', // Example using new palette
      examples: ['50% labor cost reduction', 'Access skilled global teams', 'Affordable scaling']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Your Problems = Our Playbook',
      description: 'Every solution is custom (e.g., "For your hotel, we\'ll fix OTAs and train cleaners to boost reviews").',
      color: 'from-primary-button to-accent-orange', // Example using new palette
      examples: ['Industry-specific solutions', 'Tailored strategies', 'Proven methodologies']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Future-Proof Your Business',
      description: 'We don\'t just solve today\'s problems—we prepare you for tomorrow\'s opportunities.',
      color: 'from-accent-orange to-gradient-green', // Example using new palette
      examples: ['Scalable systems', 'Technology integration', 'Growth planning']
    }
  ]

  // Using stats from StatsCounter component instead of duplicating here
  // const stats = [ ... ];

  return (
    // Use background variable, removed gradient class here as background is set on body
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
           {/* Use luxury badge */}
          <Badge className="luxury-badge mb-6">
            Why Choose Us
          </Badge>
           {/* Use luxury heading and dark text */}
          <h2 className="luxury-heading text-4xl md:text-6xl font-bold text-text-dark mb-6">
            The Ultimate Summary
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"> {/* Use text-foreground */}
            We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business.
          </p>
        </div>

        {/* Stats Section - Using StatsCounter component */}
         {/* Removed stats section here and rely on the dedicated component */}


        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
             {/* Use luxury card class */}
            <Card key={index} className="luxury-card group hover:shadow-lg transition-all duration-500">
              <CardHeader className="pb-4">
                 {/* Use luxury icon wrapper - apply gradient color from reason.color */}
                <div className={`luxury-icon-wrapper w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${reason.color}`}> {/* Re-added gradient */}
                   {reason.icon} {/* Icon color comes from wrapper text color (white by default) */}
                </div>
                 {/* Dark text for title, primary button color on hover */}
                <CardTitle className="text-xl font-bold text-text-dark group-hover:text-primary-button transition-colors">
                  ✅ {reason.title} {/* Checkmark might be part of title or icon */}
                </CardTitle>
                 {/* Text-foreground for description */}
                <CardDescription className="text-foreground/80 leading-relaxed">
                  → {reason.description} {/* Arrow might be part of description or list item */}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {reason.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground/80"> {/* Use text-foreground */}
                       {/* Use primary button color for checkmark */}
                      <CheckCircle className="w-4 h-4 text-primary-button flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Line - Use luxury cta section class */}
        <div className="mt-16 text-center luxury-cta-section rounded-3xl p-8 md:p-12">
           {/* White text for headers/paragraphs */}
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Bottom Line
          </h3>
          <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed">
            We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business.
            Your success is our reputation.
          </p>
        </div>
      </div>
    </section>
  )
}
