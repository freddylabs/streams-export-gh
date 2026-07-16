"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function TrustedByBanner() {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Globe2 className="w-[800px] h-[800px] text-brand-brown" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-poppins font-medium text-brand-brown mb-8 leading-relaxed">
            Trusted by buyers across <span className="font-bold text-brand-gold">the United States of America</span>.
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
            <div className="flex items-center space-x-2 text-brand-brown font-inter font-semibold uppercase tracking-widest text-sm">
              <span>NEW YORK</span>
            </div>
            <div className="flex items-center space-x-2 text-brand-brown font-inter font-semibold uppercase tracking-widest text-sm">
              <span>CALIFORNIA</span>
            </div>
            <div className="flex items-center space-x-2 text-brand-brown font-inter font-semibold uppercase tracking-widest text-sm">
              <span>TEXAS</span>
            </div>
            <div className="flex items-center space-x-2 text-brand-brown font-inter font-semibold uppercase tracking-widest text-sm">
              <span>FLORIDA</span>
            </div>
            <div className="flex items-center space-x-2 text-brand-brown font-inter font-semibold uppercase tracking-widest text-sm">
              <span>ILLINOIS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
