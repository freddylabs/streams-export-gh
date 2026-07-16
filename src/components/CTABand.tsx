"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-orange to-brand-brown z-0" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1605333171802-31c19b06ff82?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-8 md:p-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-5xl font-poppins font-bold text-white mb-4 md:mb-6 leading-tight">
            Let&apos;s Do Business Together
          </h2>
          <p className="text-sm md:text-xl text-white/90 font-inter max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Partner with us for reliable, high-quality sourcing directly from Ghana. We handle the complexities so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center bg-white text-brand-brown font-semibold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-brand-bg transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Link>
            <Link
              href="https://wa.me/233000000000" // Placeholder WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
