"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react'

export default function ProblemsSolved() {
  const problemCategories = [
    {
      category: 'Business Consultation & Strategy',
      problems: [
        {
          problem: 'I started a café but customers don\'t return.',
          solution: 'We audit your menu pricing, staff training, and customer experience to identify leaks.',
          result: 'Customer retention increased by 65%'
        },
        {
          problem: 'My 10-year-old hardware store is losing to new competitors.',
          solution: 'We rebrand your shop, modernize inventory tracking, and launch "loyalty for seniors" campaigns.',
          result: 'Revenue growth of 40% in 6 months'
        }
      ]
    },
    {
      category: 'Digital Services',
      problems: [
        {
          problem: 'My website gets traffic but no one calls.',
          solution: 'Redesign UI/UX to highlight your phone number + add a WhatsApp chat button.',
          result: 'Phone inquiries increased by 180%'
        },
        {
          problem: 'My bakery ranks #1 on Google but only for "cheap cakes"—I want luxury orders!',
          solution: 'Reoptimize SEO for "premium wedding cakes [City]" + luxury photo gallery.',
          result: 'Average order value increased by 250%'
        }
      ]
    },
    {
      category: 'E-Commerce Solutions',
      problems: [
        {
          problem: 'My Shopify store gets traffic but no sales!',
          solution: 'High-converting UI/UX redesign + abandoned cart recovery flows.',
          result: 'Conversion rate improved from 2% to 8%'
        },
        {
          problem: 'Customers return products due to size/color mismatches.',
          solution: 'AR-powered "try before buy" integration + size guide popups.',
          result: 'Return rate reduced by 70%'
        }
      ]
    },
    {
      category: 'Organic Marketing',
      problems: [
        {
          problem: 'I post daily on Instagram but get no sales.',
          solution: 'Shift from product photos to "behind-the-scenes" storytelling (e.g., "How our organic soap is handmade").',
          result: 'Social media sales increased by 300%'
        }
      ]
    },
    {
      category: 'Business Optimization',
      problems: [
        {
          problem: 'My restaurant has empty tables but customers wait because hostess is overwhelmed.',
          solution: 'Install a digital kiosk for self-check-in + staff retraining.',
          result: 'Table turnover increased by 40%'
        },
        {
          problem: 'My real estate agency loses leads who call after hours.',
          solution: 'AI chatbot on WhatsApp to answer FAQs and schedule viewings 24/7.',
          result: 'Lead capture increased by 85%'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 px-4 py-2 text-sm font-medium mb-4 animate-scale-in">
            Real Problems, Real Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Problems We Solve Daily
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses facing the exact same challenges you might be experiencing.
          </p>
        </div>

        {/* Problems by Category */}
        <div className="space-y-16">
          {problemCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-pink-200 pb-2 inline-block">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.problems.map((item, problemIndex) => (
                  <Card 
                    key={problemIndex} 
                    className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-gray-200"
                  >
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-100/30 rounded-full blur-xl -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-100/20 rounded-full blur-xl -z-10"></div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Problem:
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-gray-800 mt-1">
                            "{item.problem}"
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Solution:</h4>
                          <p className="text-gray-700 mt-1">{item.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Typical Result:</h4>
                          <p className="text-gray-700 mt-1 font-medium">{item.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            Get Your Custom Solution
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
