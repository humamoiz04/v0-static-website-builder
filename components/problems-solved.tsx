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
    <section className="problems-solved-section">
      <div className="problems-solved-container">
        {/* Header */}
        <div className="problems-solved-header">
          <Badge className="problems-solved-badge">
            Real Problems, Real Solutions
          </Badge>
          <h2 className="problems-solved-title">
            Problems We Solve Daily
          </h2>
          <p className="problems-solved-description">
            See how we've transformed businesses facing the exact same challenges you might be experiencing.
          </p>
        </div>

        {/* Problems by Category */}
        <div className="problems-categories-container">
          {problemCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="problem-category">
              <h3 className="problem-category-title">
                {category.category}
              </h3>
              
              <div className="problems-grid">
                {category.problems.map((item, problemIndex) => (
                  <Card key={problemIndex} className="problem-card">
                    <CardHeader className="problem-card-header">
                      <div className="problem-card-header-content">
                        <div className="problem-icon-container">
                          <AlertTriangle className="problem-icon" />
                        </div>
                        <div className="problem-text-container">
                          <CardTitle className="problem-label">
                            Problem:
                          </CardTitle>
                          <CardDescription className="problem-text">
                            "{item.problem}"
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="problem-card-content">
                      <div className="solution-container">
                        <div className="solution-icon-container">
                          <CheckCircle className="solution-icon" />
                        </div>
                        <div className="solution-text-container">
                          <h4 className="solution-label">Our Solution:</h4>
                          <p className="solution-text">{item.solution}</p>
                        </div>
                      </div>

                      <div className="result-container">
                        <div className="result-icon-container">
                          <TrendingUp className="result-icon" />
                        </div>
                        <div className="result-text-container">
                          <h4 className="result-label">Typical Result:</h4>
                          <p className="result-text">{item.result}</p>
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
        <div className="problems-solved-cta">
          <Button className="problems-solved-button">
            Get Your Custom Solution
            <ArrowRight className="button-icon" />
          </Button>
        </div>
      </div>
    </section>
  )
}
