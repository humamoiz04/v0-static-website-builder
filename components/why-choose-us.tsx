import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Zap, BarChart3, Users, Shield, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'We Fix What Others Ignore',
      description: 'Not just "more marketing"—we diagnose why customers leave (e.g., long waits, poor UX).',
      color: 'from-red-500 to-pink-500',
      examples: ['Identify real bottlenecks', 'Fix customer experience gaps', 'Solve operational issues']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'All-in-One = Faster Results',
      description: 'No juggling 10 agencies. We handle legal, branding, and tech under one roof.',
      color: 'from-blue-500 to-indigo-500',
      examples: ['Single point of contact', 'Integrated solutions', 'Streamlined processes']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data-Backed, Not Guesswork',
      description: 'Track ROI with real metrics (e.g., "Table turnover increased 40% post-optimization").',
      color: 'from-emerald-500 to-teal-500',
      examples: ['Measurable results', 'Performance tracking', 'ROI optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'For Strugglers and High-Flyers',
      description: 'Whether you\'re a failing store or a booked-out salon needing systems—we scale you.',
      color: 'from-purple-500 to-pink-500',
      examples: ['Startup to enterprise', 'Crisis to growth', 'Custom solutions']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Your Problems = Our Playbook',
      description: 'Every solution is custom (e.g., "For your hotel, we\'ll fix OTAs and train cleaners to boost reviews").',
      color: 'from-amber-500 to-orange-500',
      examples: ['Industry-specific solutions', 'Tailored strategies', 'Proven methodologies']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Future-Proof Your Business',
      description: 'We don\'t just solve today\'s problems—we prepare you for tomorrow\'s opportunities.',
      color: 'from-green-500 to-emerald-500',
      examples: ['Scalable systems', 'Technology integration', 'Growth planning']
    }
  ]

  const stats = [
    { number: '500+', label: 'Businesses Transformed', description: 'From struggling to thriving' },
    { number: '95%', label: 'Success Rate', description: 'Proven track record' },
    { number: '340%', label: 'Average ROI Increase', description: 'Measurable results' },
    { number: '24/7', label: 'Support Available', description: 'Always here for you' }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            The Ultimate Summary
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  ✅ {reason.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  → {reason.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {reason.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Bottom Line
            </h3>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              We don't just sell services—we remove headaches, plug profit leaks, and future-proof your business. 
              Your success is our reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
