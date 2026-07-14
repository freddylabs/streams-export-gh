"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: "1",
  sender: "ai",
  text: "Hello! I'm the Streams Export GH AI Assistant. How can I help you source the best of Ghana today?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate smart AI response
    setTimeout(() => {
      let aiResponseText = "Thanks for reaching out! Please leave your contact details or email us at info@streamsexportgh.com, and our team will get back to you shortly.";
      
      const lowerInput = userMessage.text.toLowerCase();
      if (lowerInput.includes("product") || lowerInput.includes("catalog")) {
        aiResponseText = "Taking you to our products page! We export a variety of premium Ghanaian goods including Premium Gari, Shea Butter, Black Soap, Kente Textiles, Cocoa Beans, and Dried Fish.";
        router.push("/products");
      } else if (lowerInput.includes("shipping") || lowerInput.includes("delivery")) {
        aiResponseText = "We handle end-to-end logistics and guarantee safe, timely delivery worldwide. Shipping timelines depend on your location and order volume.";
      } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote") || lowerInput.includes("order")) {
        aiResponseText = "Let me take you to our Quote Calculator where you can get an instant estimate and place an order!";
        router.push("/quote");
      } else if (lowerInput.includes("gari")) {
        aiResponseText = "Our Premium Gari is 100% natural, crisp, and finely roasted. We can supply in bulk quantities for retail or wholesale.";
      } else if (lowerInput.includes("shea butter")) {
        aiResponseText = "We supply unrefined, Grade-A Shea Butter sourced directly from Northern Ghana, perfect for cosmetics and skin care.";
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiResponseText,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white text-brand-brown px-4 py-2 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 text-sm font-semibold font-inter flex items-center space-x-2"
            >
              <span>👋 Ask me anything!</span>
            </motion.div>
            <button
              onClick={() => setIsOpen(true)}
              className="p-4 bg-brand-gold text-brand-brown rounded-full shadow-2xl hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center group"
            >
              <MessageSquare className="w-7 h-7" />
              <span className="absolute right-full mr-4 bg-white text-brand-brown px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                Chat with AI
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col font-inter"
            style={{ maxHeight: "calc(100vh - 120px)", height: "500px" }}
          >
            {/* Header */}
            <div className="bg-brand-brown p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-brand-gold" />
                <div>
                  <h3 className="font-semibold leading-tight">Streams AI Assistant</h3>
                  <p className="text-xs text-white/70">Online & ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-bg">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      msg.sender === "user" 
                        ? "bg-brand-gold text-brand-brown rounded-br-sm" 
                        : "bg-white text-brand-brown shadow-sm border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm p-3 shadow-sm flex space-x-1 items-center h-10">
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our products..."
                className="flex-1 bg-brand-bg border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-brand-gold text-brand-brown rounded-full hover:bg-brand-orange hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
