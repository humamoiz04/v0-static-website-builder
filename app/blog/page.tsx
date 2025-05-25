import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Business Growth Blog | Expert Insights & Tips | MH Digital Solutions",
  description:
    "Expert insights on business growth, cost reduction, global talent solutions, and digital transformation. Learn from industry leaders.",
  keywords: [
    "business growth blog",
    "small business tips",
    "cost reduction strategies",
    "global talent solutions",
    "digital transformation",
    "business optimization",
    "startup advice",
    "business consulting insights",
  ],
}

export default function BlogPage() {
  const featuredPost = {
    title: "How to Reduce Business Costs by 50% with Global Talent Solutions",
    excerpt:
      "Discover proven strategies to cut operational costs while maintaining quality through strategic global talent acquisition.",
    image: "/images/business-growth.webp",
    category: "Cost Optimization",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Sarah Johnson",
    slug: "reduce-business-costs-global-talent",
  }

  const blogPosts = [
    {
      title: "The Complete Guide to Business Registration in 2024",
      excerpt:
        "Everything you need to know about registering your business, from choosing the right structure to compliance requirements.",
      image: "/images/analytics-team.webp",
      category: "Legal & Compliance",
      readTime: "12 min read",
      date: "2024-01-12",
      author: "Michael Chen",
      slug: "complete-guide-business-registration-2024",
    },
    {
      title: "Digital Marketing Strategies That Actually Work for Small Businesses",
      excerpt: "Proven digital marketing tactics that deliver real ROI for small businesses on limited budgets.",
      image: "/images/data-analytics.webp",
      category: "Digital Marketing",
      readTime: "10 min read",
      date: "2024-01-10",
      author: "Emily Rodriguez",
      slug: "digital-marketing-strategies-small-businesses",
    },
    {
      title: "Building a Remote Team: Best Practices for Global Talent Management",
      excerpt: "Learn how to successfully build and manage remote teams with global talent for maximum efficiency.",
      image: "/images/business-meeting.webp",
      category: "Global Talent",
      readTime: "15 min read",
      date: "2024-01-08",
      author: "David Park",
      slug: "building-remote-team-global-talent",
    },
    {
      title: "E-commerce Optimization: Converting Visitors into Customers",
      excerpt: "Advanced techniques to optimize your e-commerce store for higher conversion rates and increased sales.",
      image: "/images/analytics-dashboard.webp",
      category: "E-commerce",
      readTime: "9 min read",
      date: "2024-01-05",
      author: "Lisa Thompson",
      slug: "ecommerce-optimization-conversion-strategies",
    },
    {
      title: "Crisis Management: How to Protect Your Business Reputation",
      excerpt:
        "Essential strategies for managing business crises and protecting your brand reputation in the digital age.",
      image: "/images/business-process-optimization.webp",
      category: "Crisis Management",
      readTime: "11 min read",
      date: "2024-01-03",
      author: "Robert Kim",
      slug: "crisis-management-business-reputation",
    },
    {
      title: "AI and Automation: The Future of Small Business Operations",
      excerpt: "How artificial intelligence and automation can streamline your business operations and reduce costs.",
      image: "/images/data-analytics-dashboard.webp",
      category: "Technology",
      readTime: "13 min read",
      date: "2024-01-01",
      author: "Jennifer Lee",
      slug: "ai-automation-small-business-operations",
    },
  ]

  const categories = [
    "All Posts",
    "Cost Optimization",
    "Digital Marketing",
    "Global Talent",
    "Legal & Compliance",
    "E-commerce",
    "Technology",
    "Crisis Management",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg font-medium">
            Expert Insights
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Business Growth Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Expert insights, proven strategies, and actionable tips to help your business grow, reduce costs, and thrive
            in today's competitive market.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 bg-emerald-100 text-emerald-800 w-fit">{featuredPost.category}</Badge>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-100 text-emerald-800">{post.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 p-0">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated with Business Insights</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get the latest business growth strategies, cost optimization tips, and industry insights delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300 outline-none"
            />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 font-semibold">Subscribe</Button>
          </div>
          <p className="text-sm text-emerald-200 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>
    </div>
  )
}
