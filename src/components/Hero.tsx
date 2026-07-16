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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" // Shipping/Export placeholder
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-brand-brown/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 md:space-y-6 mb-6 md:mb-8"
          >
            {/* Added Logo specifically requested by user */}
            <img 
              src="/logo_transparent.png" 
              alt="Streams Export GH Logo" 
              className="h-20 md:h-28 lg:h-32 w-auto object-contain drop-shadow-xl animate-glisten"
            />

            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-brand-gold/30 rounded-full px-4 md:px-5 py-1.5 md:py-2 w-fit shadow-lg">
              <Globe className="w-4 md:w-5 h-4 md:h-5 text-brand-gold mr-2 md:mr-3" />
              <span className="text-white text-xs md:text-sm font-inter font-semibold tracking-wide uppercase">
                Direct from Ghana
              </span>
              <div className="ml-3 md:ml-4 flex space-x-1 md:space-x-1.5">
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-red"></span>
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-flagGold"></span>
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-green"></span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl"
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
            className="text-base sm:text-lg md:text-xl text-gray-200 font-inter max-w-2xl mb-8 md:mb-10 leading-relaxed drop-shadow-md mx-auto px-2"
          >
            Partner with us to source premium Ghanaian goods for your international market and everyday living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-10 md:mb-12"
          >
            <Link
              href="/quote"
              className="btn-shimmer flex items-center justify-center bg-brand-gold text-brand-brown font-bold text-lg px-10 py-5 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center bg-black/20 backdrop-blur-sm border-2 border-brand-gold/50 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-white/10 hover:border-brand-gold transition-all shadow-xl"
            >
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className="text-brand-gold bg-brand-brown/50 border border-brand-gold/30 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-sm"
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
