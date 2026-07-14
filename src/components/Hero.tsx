"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const badges = [
    "Reliable Suppliers",
    "Premium Quality",
    "Timely Delivery",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-48">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" // Shipping/Export placeholder
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-brand-brown/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-brand-gold/30 rounded-full px-4 py-1.5 w-fit">
              <Globe className="w-4 h-4 text-brand-gold mr-2" />
              <span className="text-white text-sm font-inter font-medium tracking-wide uppercase">
                Direct from Ghana
              </span>
              <div className="ml-3 flex space-x-1">
                <span className="w-3 h-3 rounded-full bg-brand-red"></span>
                <span className="w-3 h-3 rounded-full bg-brand-flagGold"></span>
                <span className="w-3 h-3 rounded-full bg-brand-green"></span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight mb-6"
          >
            IMPORT THE <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-flagGold">
              BEST OF GHANA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 font-inter max-w-2xl mb-10 leading-relaxed"
          >
            Authentic products. Reliable suppliers. Safe delivery. Partner with us to source premium Ghanaian goods for your international market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Link
              href="/quote"
              className="btn-shimmer flex items-center justify-center bg-brand-gold text-brand-brown font-semibold text-lg px-8 py-4 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className="text-brand-gold bg-brand-brown/50 border border-brand-gold/30 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
