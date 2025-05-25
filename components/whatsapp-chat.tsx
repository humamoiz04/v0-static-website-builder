"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button" // Assuming custom Button

// ... (FAQ_RESPONSES object remains the same) ...
const FAQ_RESPONSES = {
  "business consultation":
    "Our premium business consultation services include strategic planning, operational optimization, financial audits, and growth strategies. We help startups and struggling businesses turn around their operations with luxury-grade solutions. Would you like to schedule a free consultation? Call us at +1(757)550-4040 or WhatsApp +1(707)582-2255",
  "digital marketing":
    "We offer comprehensive digital marketing including SEO, web design, social media marketing, PPC advertising, and content marketing. Our average client sees 180% increase in online visibility with our premium approach. What specific digital marketing challenge are you facing? Contact us for a free audit!",
  ecommerce:
    "Our e-commerce solutions include Shopify store development, conversion optimization, Amazon/Flipkart SEO, and cart abandonment recovery. We typically improve conversion rates from 2% to 8%+ using luxury design principles. Do you have an existing online store? Let's discuss your needs!",
  "global talent":
    "We help businesses reduce operational costs by 50% through our curated global talent network from Pakistan, India, Nigeria, and Bangladesh. This includes customer service, administrative tasks, and technical roles. What positions are you looking to fill?",
  "legal compliance":
    "We handle business registration, GST/tax filing, trademark protection, business insurance, and regulatory compliance. Our legal team ensures your business is fully protected and compliant with premium service standards. What legal services do you need?",
  "premium services":
    "Our premium services include AI chatbot integration, voice search SEO, AR/VR experiences, LinkedIn B2B lead generation, and crisis management. These are for businesses ready to lead their industries with luxury solutions. What advanced solutions interest you?",
  pricing:
    "Our pricing reflects our premium service quality. Business consultation starts at $497, digital marketing at $997/month, e-commerce development at $3,997, and global talent solutions can save you 50% on operational costs. Would you like a custom quote?",
  timeline:
    "Project timelines vary: Business registration (3-5 days), website development (2-4 weeks), digital marketing campaigns (1-3 months), and comprehensive business transformations (3-6 months). What's your target timeline?",
  contact:
    "You can reach us at:\n📞 Call/Text: +1(757)550-4040\n📱 WhatsApp: +1(707)582-2255\n📧 Email: mhdigitalsolutionsus@gmail.com\n🌐 Website: www.mhdigitalsolution.com\n\nWould you like to schedule a free consultation?",
  location:
    "We're a premium remote-first company serving clients across the USA with offices in New York, Los Angeles, and Chicago. We work with businesses in all 50 states and internationally. Where is your business located?",
  "success stories":
    "We've helped 500+ businesses with a 95% success rate using our luxury approach. Recent successes include a restaurant chain growing from near-bankruptcy to $2M revenue, an e-commerce store improving conversion rates by 500%, and manufacturing companies reducing costs by 52%. What industry are you in?",
  appointment:
    "To schedule an appointment:\n1. Call us directly: +1(757)550-4040\n2. WhatsApp us: +1(707)582-2255\n3. Fill out our contact form on our website\n4. Email us: mhdigitalsolutionsus@gmail.com\n\nWe offer free 30-minute premium consultations. What time works best for you?",
  default:
    "Welcome to MH Digital Solutions! I'm here to help with questions about our premium business solutions:\n\n✨ Business Consultation & Strategy\n💎 Digital Marketing & Web Development\n🛒 E-Commerce Solutions\n🌍 Global Talent Solutions\n⚖️ Legal & Compliance\n🚀 Premium AI & Automation Services\n\nFor specific questions or to speak with our team:\n📞 +1(757)550-4040 or 📱 +1(707)582-2255\n\nWhat can I help you with today?",
}


export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to MH Digital Solutions! I'm here to help with questions about our premium business solutions. What can I assist you with today?",
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
       {/* --- REMOVED DEFAULT WHATSAPP/CHATBOT FLOAT STYLES --- */}
       {/* You will need to define new, non-floating styles if you want a static chat window */}
       {/* Or implement a custom floating button using Tailwind utilities */ }

       {/* Example: A static div at the bottom of the page */}
       {/*
       <div className="fixed bottom-0 right-0 z-50 m-4 w-80 bg-white shadow-lg rounded-lg">
         <div className="p-4">Static Chat UI Here</div>
       </div>
       */}

       {/* If you *still* want floating but with your new style, define these classes in globals.css or your component */}
       {/* Example floating classes (you need to define these CSS rules) */}
       <a
         href="https://wa.me/17075822255?text=Hi! I'm interested in your premium business solutions."
         target="_blank"
         rel="noopener noreferrer"
         className="custom-whatsapp-float" // Define this class
         aria-label="Contact us on WhatsApp"
       >
         <MessageCircle className="w-8 h-8" />
       </a>

       <button onClick={() => setIsOpen(!isOpen)} className="custom-chat-float" aria-label="Open premium chat"> // Define this class
         {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
       </button>


      {/* Chatbot Container - Style this with Tailwind utilities */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex flex-col rounded-lg shadow-lg w-80 max-h-[80vh] bg-white text-foreground border border-border" style={{ display: "flex" }}> {/* Styled with Tailwind */}
          <div className="flex items-center justify-between p-4 bg-primary-button text-primary-foreground rounded-t-lg"> {/* Styled header */}
            <div>
              <div className="font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                MH Digital Solutions
              </div>
              <div className="text-sm opacity-90">Premium Business Assistant</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors"> {/* Styled close button */}
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4"> {/* Styled messages container */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg max-w-[80%] ${message.isBot ? "bg-gray-200 text-black self-start" : "bg-primary-button text-primary-foreground self-end"}`} // Styled individual messages
                style={{
                  whiteSpace: "pre-line",
                  marginLeft: message.isBot ? "0" : "auto",
                  display: "block",
                }}
              >
                {message.text}
              </div>
            ))}
             {/* Optional: Add a ref here and use it in useEffect to auto-scroll to latest message */}
          </div>

          <div className="p-4 border-t border-border"> {/* Styled input container */}
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="luxury-input flex-1 text-sm" // Use luxury input
              />
              <button onClick={handleSendMessage} className="luxury-button px-4 py-2"> {/* Use luxury button */}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// --- Define custom-whatsapp-float and custom-chat-float in globals.css if you want them floating ---
/*
.custom-whatsapp-float {
    position: fixed;
    bottom: 24px; // Adjust as needed
    left: 24px; // Adjust as needed
    width: 60px;
    height: 60px;
    background-color: #25d366; // WhatsApp green
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
}
.custom-whatsapp-float:hover {
    transform: scale(1.1);
}

.custom-chat-float {
    position: fixed;
    bottom: 96px; // Adjust to be above WhatsApp
    left: 24px; // Align with WhatsApp
    width: 60px;
    height: 60px;
    background-color: rgb(var(--primary-button)); // Your button color
    color: rgb(var(--primary-foreground)); // Your button text color
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
}
.custom-chat-float:hover {
    transform: scale(1.1);
}
*/
