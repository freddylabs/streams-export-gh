"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Products Sourced" },
  { value: "120+", label: "Trusted Suppliers" },
  { value: "15+", label: "Countries Served" },
  { value: "10+", label: "Years Experience" },
];

export default function StatsBand() {
  return (
    <section className="bg-brand-brown py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-gold/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-brand-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-inter font-medium text-white/90 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
