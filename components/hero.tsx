"use client"
import { Badge } from "@/components/ui/badge" // Assuming this is your custom Badge
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Shield, Zap, Crown, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple observer logic - will rely on the JS added separately
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Optionally unobserve after first time
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    const heroSection = document.querySelector('.luxury-hero'); // Target the hero section element
    if (heroSection) {
        observer.observe(heroSection);
    }

    // Cleanup
    return () => {
        if (heroSection) observer.unobserve(heroSection);
    };
  }, [])


  const stats = [
    { number: "500+", label: "Businesses Transformed", icon: <Users className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <Star className="w-5 h-5" /> },
    // Update cost reduction stat to match value prop
    { number: "50%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    // Update to 24/7 Support based on your description
    { number: "24/7", label: "Support Available", icon: <Shield className="w-5 h-5" /> },
  ]

  const benefits = [
     // Example benefits reflecting your services
    { text: "Secure Foundation", icon: <Shield className="w-5 h-5 text-primary" /> },
    { text: "All-in-One Solutions", icon: <Zap className="w-5 h-5 text-primary" /> },
    { text: "Cut Costs by 50%", icon: <Users className="w-5 h-5 text-primary" /> }, // Explicitly mention cost saving
    { text: "Drive Real Growth", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"> {/* Use background variable */}
      {/* Background Gradient & Dots */}
      {/* Background gradients are applied to the body in globals.css */}
      {/* Floating Red Dots */}
      <div className="absolute inset-0">
          <div className="luxury-dot" style={{ top: '20%', left: '70%', animationDelay: '0s' }}></div>
          <div className="luxury-dot" style={{ top: '50%', left: '85%', animationDelay: '1s' }}></div>
          <div className="luxury-dot" style={{ top: '80%', left: '60%', animationDelay: '2s' }}></div>
           {/* Add more dots as needed for visual flair */}
      </div>


      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-luxury-fade" : "opacity-0"}`}>
            <div className="space-y-6">
              {/* Update Badge class and colors */}
              <Badge className="luxury-badge mb-6 animate-luxury-pulse">
                <Crown className="w-4 h-4 mr-2" />
                Premium Business Solutions
              </Badge>

              {/* Update H1 class and text */}
              <h1 className="luxury-heading"> {/* Use new heading class */}
                <span className="block">From Startup</span>
                <span className="block">to Scale-Up</span>
              </h1>

              {/* Update p tag text and colors */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl"> {/* Adjust text size and color */}
                <span className="font-semibold text-text-dark">Struggling to Thriving</span>—We Fix, Build & Grow Your
                Business with proven strategies and cutting-edge solutions.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                 {/* Use standard flex/items-center */}
                <div
                  key={index}
                  className="flex items-center gap-3 text-text-dark animate-luxury-fade" // Use dark text color
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon color controlled by parent text color or specific class */}
                   {benefit.icon}
                  <span className="font-semibold">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/consultation">
                 {/* Use luxury button class */}
                <button className="luxury-button text-lg px-8 py-4 group"> {/* Adjust padding for button class */}
                  <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform" /> {/* Subtle hover animation */}
                  Get Free Consultation
                   {/* Subtle hover translation */}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/case-studies">
                 {/* Use luxury secondary button class */}
                <button className="luxury-btn-secondary px-8 py-4 text-lg group"> {/* Adjust padding for button class */}
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Success Stories
                </button>
              </Link>
            </div>

            {/* Stats */}
            {/* Consider moving stats to the dedicated StatsCounter component area for clarity */}
            {/* Keeping them here for now if layout requires */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/30">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group animate-luxury-fade"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2 text-primary-button"> {/* Use primary button color for icons/numbers */}
                     {stat.icon}
                    <div className="text-3xl md:text-4xl font-bold">{stat.number}</div> {/* Stat number text color */}
                  </div>
                   {/* Stat label text color */}
                  <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div
            className={`relative flex justify-center ${isVisible ? "animate-luxury-fade" : "opacity-0"}`} // Ensure image section is centered and animated
            style={{ animationDelay: "0.3s" }}
          >
             {/* Use luxury card class for the main illustration card */}
            <div className="luxury-card p-8 hover:shadow-xl transition-all duration-500 animate-luxury-glow">
              {/* Business Meeting Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mraIt5Eu0gcCqPG0ZDWpp3ZwoCjFnR.png" // Use your actual image source
                  alt="Business team collaboration and strategy meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                  loading="eager"
                />
                 {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Update text color for dashboard title */}
                  <h3 className="text-2xl font-bold text-text-dark">Business Growth Dashboard</h3>
                  <div className="flex items-center gap-2">
                    {/* Use primary color for dot */}
                    <div className="w-3 h-3 bg-primary-button rounded-full animate-luxury-pulse"></div>
                    {/* Use primary color for live text */}
                    <span className="text-sm text-primary-button font-semibold">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Use luxury card for dashboard metric cards */}
                  <div className="luxury-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      {/* Icon color */}
                      <TrendingUp className="w-6 h-6 text-primary-button" />
                      {/* Text color */}
                      <span className="text-sm font-semibold text-text-dark">Revenue Growth</span>
                    </div>
                     {/* Number color */}
                    <div className="text-3xl font-bold text-text-dark">+247%</div>
                  </div>

                  {/* Use luxury card for dashboard metric cards */}
                  <div className="luxury-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                       {/* Icon color */}
                      <Star className="w-6 h-6 text-accent-orange" /> {/* Use orange accent */}
                       {/* Text color */}
                      <span className="text-sm font-semibold text-text-dark">Client Satisfaction</span>
                    </div>
                     {/* Number color */}
                    <div className="text-3xl font-bold text-text-dark">98.5%</div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70 font-medium">Website Conversion</span>
                    <span className="text-sm font-bold text-primary-button">8.4%</span> {/* Use primary button color */}
                  </div>
                  {/* Use border color for track, primary/secondary for gradient fill */}
                  <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-button to-accent-orange h-3 rounded-full w-[84%] transition-all duration-1000 animate-luxury-shimmer"></div> {/* Gradient fill */}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70 font-medium">Lead Generation</span>
                    <span className="text-sm font-bold text-accent-orange">92%</span> {/* Use accent orange color */}
                  </div>
                  {/* Use border color for track, secondary/accent for gradient fill */}
                  <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent-orange to-gradient-green h-3 rounded-full w-[92%] transition-all duration-1000 animate-luxury-shimmer" // Gradient fill
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/30">
                  <div className="flex items-center gap-3">
                     {/* Icon wrapper */}
                    <div className="luxury-icon-wrapper w-10 h-10 rounded-full p-0">
                       {/* Remove gradient class */}
                      <CheckCircle className="w-6 h-6 text-white" /> {/* White icon */}
                    </div>
                    <span className="text-sm text-foreground/70 font-medium">
                      All systems optimized and running smoothly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 luxury-card p-6 animate-luxury-float"> {/* Use luxury card */}
              <div className="flex items-center gap-3">
                 {/* Icon wrapper */}
                <div className="luxury-icon-wrapper w-12 h-12 rounded-full p-0">
                   {/* Remove gradient class */}
                  <TrendingUp className="w-6 h-6 text-white" /> {/* White icon */}
                </div>
                <div>
                   {/* Text color */}
                  <div className="text-sm font-semibold text-text-dark">ROI Increase</div>
                   {/* Number color */}
                  <div className="text-xl font-bold text-text-dark">+340%</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 luxury-card p-6 animate-luxury-float" // Use luxury card
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                 {/* Icon wrapper */}
                <div className="luxury-icon-wrapper w-12 h-12 rounded-full p-0">
                   {/* Remove gradient class */}
                  <Star className="w-6 h-6 text-white" /> {/* White icon */}
                </div>
                <div>
                   {/* Text color */}
                  <div className="text-sm font-semibold text-text-dark">Client Rating</div>
                   {/* Number color */}
                  <div className="text-xl font-bold text-text-dark">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
