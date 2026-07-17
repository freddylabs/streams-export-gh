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
    <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-20 pb-2">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" // Shipping/Export placeholder
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-brand-brown/50" />
      </div>

      <div className="container relative z-10 mx-auto px-2 md:px-4 flex flex-col justify-center h-full pt-8">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-1.5 md:space-y-2 mb-1 md:mb-3 mt-auto"
          >
            {/* Added Logo specifically requested by user */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo_transparent.png" 
              alt="Streams Export GH Logo" 
              className="h-32 sm:h-40 md:h-24 lg:h-28 w-auto object-contain drop-shadow-xl animate-glisten"
            />

            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-brand-gold/30 rounded-full px-3 py-1 w-fit shadow-lg">
              <Globe className="w-3 md:w-4 h-3 md:h-4 text-brand-gold mr-2" />
              <span className="text-white text-[9px] sm:text-xs md:text-sm font-inter font-semibold tracking-wide uppercase">
                Direct from Ghana
              </span>
              <div className="ml-2 flex space-x-1">
                <span className="w-1.5 h-1.5 md:w-2 h-2 rounded-full bg-brand-red"></span>
                <span className="w-1.5 h-1.5 md:w-2 h-2 rounded-full bg-brand-flagGold"></span>
                <span className="w-1.5 h-1.5 md:w-2 h-2 rounded-full bg-brand-green"></span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl leading-tight sm:text-5xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-1 md:mb-3 drop-shadow-2xl"
          >
            IMPORT THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-flagGold">
              BEST OF GHANA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 font-inter max-w-[90%] md:max-w-2xl mb-2 md:mb-5 leading-relaxed drop-shadow-md mx-auto"
          >
            Partner with us to source premium Ghanaian goods for your international market and everyday living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-2 md:mb-6 w-full max-w-[85%] sm:max-w-none mx-auto justify-center px-2"
          >
            <Link
              href="/quote"
              className="btn-shimmer w-full sm:w-auto flex items-center justify-center bg-brand-gold text-brand-brown font-bold text-sm md:text-base px-6 py-2 sm:py-3 md:px-8 md:py-3 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto flex items-center justify-center bg-black/20 backdrop-blur-sm border border-brand-gold/50 text-white font-bold text-sm md:text-base px-6 py-2 sm:py-3 md:px-8 md:py-3 rounded-full hover:bg-white/10 hover:border-brand-gold transition-all shadow-xl"
            >
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-row justify-center flex-wrap sm:flex-nowrap gap-1 sm:gap-2 w-full max-w-full pb-2 md:pb-4"
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className="text-brand-gold bg-brand-brown/50 border border-brand-gold/30 px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] md:text-xs font-semibold backdrop-blur-sm shadow-sm whitespace-nowrap"
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
