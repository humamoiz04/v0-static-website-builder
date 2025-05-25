"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const FAQ_RESPONSES = {
  "business consultation":
    "Our business consultation services include strategic planning, operational optimization, financial audits, and growth strategies. We help startups and struggling businesses turn around their operations. Would you like to schedule a free consultation? Call us at +1(757)550-4040 or WhatsApp +1(707)582-2255",
  "digital marketing":
    "We offer comprehensive digital marketing including SEO, web design, social media marketing, PPC advertising, and content marketing. Our average client sees 180% increase in online visibility. What specific digital marketing challenge are you facing? Contact us for a free audit!",
  ecommerce:
    "Our e-commerce solutions include Shopify store development, conversion optimization, Amazon/Flipkart SEO, and cart abandonment recovery. We typically improve conversion rates from 2% to 8%+. Do you have an existing online store? Let's discuss your needs!",
  "global talent":
    "We help businesses reduce operational costs by 50% through our global talent network from Pakistan, India, Nigeria, and Bangladesh. This includes customer service, administrative tasks, and technical roles. What positions are you looking to fill?",
  "legal compliance":
    "We handle business registration, GST/tax filing, trademark protection, business insurance, and regulatory compliance. Our legal team ensures your business is fully protected and compliant. What legal services do you need?",
  "premium services":
    "Our premium services include AI chatbot integration, voice search SEO, AR/VR experiences, LinkedIn B2B lead generation, and crisis management. These are for businesses ready to lead their industries. What advanced solutions interest you?",
  pricing:
    "Our pricing varies by service complexity. Business consultation starts at $497, digital marketing at $997/month, e-commerce development at $3,997, and global talent solutions can save you 50% on operational costs. Would you like a custom quote?",
  timeline:
    "Project timelines vary: Business registration (3-5 days), website development (2-4 weeks), digital marketing campaigns (1-3 months), and comprehensive business transformations (3-6 months). What's your target timeline?",
  contact:
    "You can reach us at:\n📞 Call/Text: +1(757)550-4040\n📱 WhatsApp: +1(707)582-2255\n📧 Email: hello@mhdigitalsolutions.com\n🌐 Website: www.mhdigitalsolution.com\n\nWould you like to schedule a free consultation?",
  location:
    "We're a remote-first company serving clients across the USA with offices in New York, Los Angeles, and Chicago. We work with businesses in all 50 states and internationally. Where is your business located?",
  "success stories":
    "We've helped 500+ businesses with a 95% success rate. Recent successes include a restaurant chain growing from near-bankruptcy to $2M revenue, an e-commerce store improving conversion rates by 500%, and manufacturing companies reducing costs by 52%. What industry are you in?",
  appointment:
    "To schedule an appointment:\n1. Call us directly: +1(757)550-4040\n2. WhatsApp us: +1(707)582-2255\n3. Fill out our contact form on our website\n4. Email us: hello@mhdigitalsolutions.com\n\nWe offer free 30-minute consultations. What time works best for you?",
  default:
    "I'm here to help with questions about our business solutions! We offer:\n\n🏢 Business Consultation & Strategy\n💻 Digital Marketing & Web Development\n🛒 E-Commerce Solutions\n🌍 Global Talent Solutions\n⚖️ Legal & Compliance\n🚀 Premium AI & Automation Services\n\nFor specific questions or to speak with our team:\n📞 +1(757)550-4040 or 📱 +1(707)582-2255\n\nWhat can I help you with today?",
}

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help with questions about MH Digital Solutions. What can I assist you with today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const findResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (key !== "default" && message.includes(key)) {
        return response
      }
    }

    // Check for common business problems
    if (message.includes("failing") || message.includes("struggling") || message.includes("problem")) {
      return FAQ_RESPONSES["business consultation"]
    }
    if (message.includes("website") || message.includes("seo") || message.includes("marketing")) {
      return FAQ_RESPONSES["digital marketing"]
    }
    if (message.includes("online store") || message.includes("shopify") || message.includes("sales")) {
      return FAQ_RESPONSES["ecommerce"]
    }
    if (message.includes("cost") || message.includes("expensive") || message.includes("save money")) {
      return FAQ_RESPONSES["global talent"]
    }
    if (message.includes("legal") || message.includes("registration") || message.includes("compliance")) {
      return FAQ_RESPONSES["legal compliance"]
    }
    if (message.includes("ai") || message.includes("automation") || message.includes("advanced")) {
      return FAQ_RESPONSES["premium services"]
    }
    if (message.includes("price") || message.includes("cost") || message.includes("quote")) {
      return FAQ_RESPONSES["pricing"]
    }
    if (message.includes("how long") || message.includes("timeline") || message.includes("when")) {
      return FAQ_RESPONSES["timeline"]
    }
    if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return FAQ_RESPONSES["contact"]
    }
    if (message.includes("where") || message.includes("location") || message.includes("office")) {
      return FAQ_RESPONSES["location"]
    }
    if (message.includes("success") || message.includes("results") || message.includes("case study")) {
      return FAQ_RESPONSES["success stories"]
    }
    if (message.includes("appointment") || message.includes("schedule") || message.includes("meeting")) {
      return FAQ_RESPONSES["appointment"]
    }

    return FAQ_RESPONSES["default"]
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: findResponse(inputText),
      isBot: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputText("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/17075822255?text=Hi! I'm interested in your business solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Chatbot Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="chat-float" aria-label="Open chat">
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="chatbot-container" style={{ display: "flex" }}>
          <div className="chatbot-header">
            <div>
              <div className="font-bold text-sm">MH Digital Solutions</div>
              <div className="text-xs opacity-90">Business Solutions Assistant</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? "bot" : "user"}`}
                style={{
                  whiteSpace: "pre-line",
                  marginLeft: message.isBot ? "0" : "auto",
                  display: "block",
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
              />
              <Button onClick={handleSendMessage} size="sm" className="gradient-secondary text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
