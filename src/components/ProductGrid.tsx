"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white text-brand-brown overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Products</h2>
          <p className="text-lg text-brand-brown/80 font-inter mb-8">
            Explore our wide range of authentic, premium Ghanaian products sourced directly from trusted local producers.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-brand-gold text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            Browse Our Catalog
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
