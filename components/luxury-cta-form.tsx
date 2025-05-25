"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Assuming this is your custom Card
import { Badge } from "@/components/ui/badge" // Assuming this is your custom Badge
// Assuming Button, Input, Textarea are styled by luxury-button/input classes or base styles
import { Send, CheckCircle, Sparkles, Crown, Star, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"

export default function LuxuryCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

   // ... (handleSubmit function remains the same) ...
   const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault()
       setIsSubmitting(true)

       try {
           // Formspree Submission
           const formspreeResponse = await fetch("https://formspree.io/f/xyz", { // REPLACE with your actual Formspree endpoint
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                   email: formData.email,
                   name: formData.name,
                   phone: formData.phone,
                   company: formData.company,
                   service: formData.service,
                   message: formData.message,
                   _subject: `Premium Consultation Request from ${formData.name}`,
               }),
           })

           if (formspreeResponse.ok) {
               setIsSubmitted(true)
               setFormData({
                   name: "",
                   email: "",
                   phone: "",
                   company: "",
                   service: "",
                   message: "",
               })
           } else {
               // Attempt HubSpot as fallback if Formspree fails
               const hubspotData = {
                   fields: [
                       { name: "firstname", value: formData.name.split(" ")[0] },
                       { name: "lastname", value: formData.name.split(" ").slice(1).join(" ") || "" },
                       { name: "email", value: formData.email },
                       { name: "phone", value: formData.phone },
                       { name: "company", value: formData.company },
                       { name: "service_interest", value: formData.service },
                       { name: "message", value: formData.message },
                   ],
                   context: { // Optional context data
                       pageUri: window.location.href,
                       pageName: document.title,
                   },
                   // LEAVE HUTK BLANK - HubSpot JS will populate it
                   // huts_tok: 'INSERT_HUTK_HERE' // Do NOT hardcode
               }

               const hubspotResponse = await fetch(
                   "https://api.hsforms.com/submissions/v3/integration/submit/YOUR_HUBSPOT_PORTAL_ID/YOUR_FORM_GUID", // REPLACE with your actual HubSpot Portal ID and Form GUID
                   {
                       method: "POST",
                       headers: {
                           "Content-Type": "application/json",
                       },
                       body: JSON.stringify(hubspotData),
                   }
               )

               if (hubspotResponse.ok) {
                  setIsSubmitted(true)
                   setFormData({
                       name: "",
                       email: "",
                       phone: "",
                       company: "",
                       service: "",
                       message: "",
                   })
               } else {
                  throw new Error("Both Formspree and HubSpot submissions failed");
               }
           }
       } catch (error) {
           console.error("Form submission error:", error);
           // Fallback: Open email client
           const subject = encodeURIComponent(`Premium Consultation Request from ${formData.name}`);
           const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}
           `);
           window.location.href = `mailto:mhdigitalsolutionsus@gmail.com?subject=${subject}&body=${body}`;

       } finally {
           setIsSubmitting(false);
       }
   };
    // ... (Rest of handleSubmit remains the same) ...


  if (isSubmitted) {
    return (
      <section className="py-24 px-4 bg-background"> {/* Use background variable */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="luxury-card p-12 animate-luxury-fade"> {/* Use luxury card */}
            <div className="luxury-icon-wrapper w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-luxury-glow"> {/* Use icon wrapper and glow */}
              <CheckCircle className="w-10 h-10 text-white" /> {/* White icon */}
            </div>
            <h2 className="text-4xl font-bold text-text-dark mb-4">Thank You!</h2> {/* Use dark text color */}
            <p className="text-xl text-foreground/80 mb-8"> {/* Use text-foreground */}
              Your premium consultation request has been received. Our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17575504040" className="luxury-button px-6 py-3"> {/* Use luxury button */}
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now: +1 (757) 550-4040
              </a>
              {/* Use WhatsApp-branded color for this button or luxury button with green icon */}
              <a href="https://wa.me/17075822255" className="luxury-button px-6 py-3 bg-green-500 hover:bg-green-600"> {/* Use luxury button and green background */}
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: +1 (707) 582-2255
              </a>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 bg-background"> {/* Use background variable */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           {/* Use luxury badge */}
          <Badge className="luxury-badge mb-6 animate-luxury-pulse">
            <Crown className="w-5 h-5 mr-2" />
            Premium Consultation
          </Badge>
           {/* Use luxury heading and dark text */}
          <h2 className="luxury-heading text-5xl md:text-6xl font-bold text-text-dark mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto"> {/* Use text-foreground */}
            Get expert advice from our premium business consultants. Schedule your free consultation and discover
            opportunities for exponential growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
           {/* Apply luxury card class to form container */}
          <div className="luxury-card p-8 animate-luxury-fade"> {/* Add padding and animation */}
            <div className="mb-8">
               {/* Use dark text */}
              <h3 className="text-2xl font-bold text-text-dark mb-2">Get Your Free Premium Consultation</h3>
              <p className="text-foreground/70">Fill out the form below and we'll get back to you within 24 hours.</p> {/* Use text-foreground */}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label> {/* Use text-foreground */}
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="luxury-input" // Use luxury input
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label> {/* Use text-foreground */}
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="luxury-input" // Use luxury input
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label> {/* Use text-foreground */}
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="luxury-input" // Use luxury input
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label> {/* Use text-foreground */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="luxury-input" // Use luxury input
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Service Interest *</label> {/* Use text-foreground */}
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="luxury-input" // Use luxury input
                >
                  <option value="">Select a service</option>
                  <option value="Business Consultation">Business Consultation & Strategy</option>
                  <option value="Digital Marketing">Digital Marketing & Web Development</option>
                  <option value="E-Commerce">E-Commerce Solutions</option>
                  <option value="Global Talent">Global Talent Solutions</option>
                  <option value="Legal Compliance">Legal & Compliance</option>
                  <option value="Premium Services">Premium AI & Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label> {/* Use text-foreground */}
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="luxury-input resize-none" // Use luxury input
                  placeholder="Tell us about your business challenges and goals..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="luxury-button w-full text-lg py-4 group"> {/* Use luxury button */}
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    Get Free Premium Consultation
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Benefits & Contact Info */}
          <div className="space-y-8">
            {/* What You Get */}
            <Card className="luxury-card animate-luxury-fade" style={{ animationDelay: "0.2s" }}> {/* Use luxury card */}
              <CardHeader>
                 {/* Use dark text for title */}
                <CardTitle className="flex items-center gap-3 text-text-dark">
                  <Sparkles className="w-6 h-6 text-primary-button" /> {/* Icon color */}
                  What You Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "30-minute premium consultation with our experts",
                  "Comprehensive business analysis and audit",
                  "Customized growth strategy recommendations",
                  "Cost reduction opportunities assessment",
                  "Implementation roadmap with timelines",
                  "No obligations - completely free",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-button mt-0.5 flex-shrink-0" /> {/* Icon color */}
                    <span className="text-foreground/80">{benefit}</span> {/* Use text-foreground */}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Options */}
            <Card className="luxury-card animate-luxury-fade" style={{ animationDelay: "0.4s" }}> {/* Use luxury card */}
              <CardHeader>
                 {/* Use dark text for title */}
                <CardTitle className="text-text-dark">Prefer to Talk Directly?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:+17575504040"
                   // Consistent styling for contact links
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors group"
                >
                  <div className="luxury-icon-wrapper w-12 h-12 rounded-full p-0"> {/* Use icon wrapper */}
                    <Phone className="w-6 h-6 text-white" /> {/* White icon */}
                  </div>
                  <div>
                     {/* Text colors */}
                    <div className="font-semibold text-foreground group-hover:text-primary-button transition-colors">
                      Call Us Now
                    </div>
                    <div className="text-foreground/70">+1 (757) 550-4040</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/17075822255"
                   // Consistent styling for contact links
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors group"
                >
                   {/* Icon wrapper - use green for WhatsApp */}
                  <div className="luxury-icon-wrapper w-12 h-12 rounded-full p-0 bg-green-500 hover:bg-green-600">
                    <MessageCircle className="w-6 h-6 text-white" /> {/* White icon */}
                  </div>
                  <div>
                     {/* Text colors */}
                    <div className="font-semibold text-foreground group-hover:text-green-600 transition-colors">
                      WhatsApp
                    </div>
                    <div className="text-foreground/70">+1 (707) 582-2255</div>
                  </div>
                </a>

                <a
                  href="mailto:mhdigitalsolutionsus@gmail.com"
                   // Consistent styling for contact links
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors group"
                >
                   {/* Icon wrapper */}
                  <div className="luxury-icon-wrapper w-12 h-12 rounded-full p-0">
                    <Mail className="w-6 h-6 text-white" /> {/* White icon */}
                  </div>
                  <div>
                     {/* Text colors */}
                    <div className="font-semibold text-foreground group-hover:text-primary-button transition-colors"> {/* Hover color */}
                      Email Us
                    </div>
                    <div className="text-foreground/70">mhdigitalsolutionsus@gmail.com</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="luxury-card animate-luxury-fade" style={{ animationDelay: "0.6s" }}> {/* Use luxury card */}
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                     {/* Use dark text for numbers */}
                    <div className="text-2xl font-bold text-text-dark">500+</div>
                    <div className="text-sm text-foreground/70">Businesses Transformed</div> {/* Use text-foreground */}
                  </div>
                  <div>
                     {/* Use dark text for numbers */}
                    <div className="text-2xl font-bold text-text-dark">95%</div>
                    <div className="text-sm text-foreground/70">Success Rate</div> {/* Use text-foreground */}
                  </div>
                  <div>
                     {/* Use dark text for numbers */}
                    <div className="text-2xl font-bold text-text-dark">4.9/5</div>
                     {/* Use text-foreground, primary button color for star */}
                    <div className="text-sm text-foreground/70 flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 fill-primary-button text-primary-button" />
                      Client Rating
                    </div>
                  </div>
                  <div>
                     {/* Use dark text for numbers */}
                    <div className="text-2xl font-bold text-text-dark">24/7</div>
                    <div className="text-sm text-foreground/70">Support Available</div> {/* Use text-foreground */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
