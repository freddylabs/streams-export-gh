"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-poppins font-bold text-brand-brown mb-6"
            >
              Get In <span className="text-brand-gold">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-brown/80 font-inter mb-10"
            >
              Ready to start sourcing from Ghana? Have a question about our products or process? We&apos;d love to hear from you. Reach out via the form, email, or WhatsApp.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
                <Phone className="w-8 h-8 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-poppins font-semibold text-brand-brown text-xl mb-1">Phone</h4>
                  <p className="font-inter text-brand-brown/70">+233 55 636 7951</p>
                  <p className="font-inter text-brand-brown/70 mb-2">+1 225 397 4757</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
                <Mail className="w-8 h-8 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-poppins font-semibold text-brand-brown text-xl mb-1">Email Us</h4>
                  <a href="mailto:info@streamsexportgh.com" className="font-inter text-brand-brown/70 hover:text-brand-orange transition-colors">
                    info@streamsexportgh.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-brand-gold"
          >
            <h3 className="text-2xl font-poppins font-bold text-brand-brown mb-6">Send us a Message</h3>
            <form className="space-y-4 font-inter" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-brand-brown mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-bg border border-brand-brown/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-brown mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-brand-bg border border-brand-brown/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-brown mb-2" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-brand-bg border border-brand-brown/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-brown mb-2" htmlFor="interest">Product Interest</label>
                <select 
                  id="interest" 
                  className="w-full bg-brand-bg border border-brand-brown/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Premium Gari</option>
                  <option>Shea Butter</option>
                  <option>Black Soap</option>
                  <option>Kente Textiles</option>
                  <option>Dried Fish</option>
                  <option>Other (Please specify)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-brown mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-brand-bg border border-brand-brown/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                  placeholder="Tell us about your sourcing needs..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center bg-brand-gold text-brand-brown font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-orange hover:text-white transition-colors"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
