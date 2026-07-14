"use client";

import { motion } from "framer-motion";
import { ShieldCheck, PackageCheck, Truck } from "lucide-react";
// We can use next/image later if actual images are provided, for now we can use icons and divs. Actually we should use next/image.
// Wait, the prompt said: each with image, icon, and label

import NextImage from "next/image";

const features = [
  {
    title: "Reliable Suppliers",
    description: "We work directly with trusted farmers and producers across Ghana to ensure consistent supply and fair trade practices.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?q=80&w=800&auto=format&fit=crop", // Farmer/Market
  },
  {
    title: "Quality Products",
    description: "Every item undergoes rigorous quality checks to meet international export standards and preserve authenticity.",
    icon: PackageCheck,
    image: "https://images.unsplash.com/photo-1611078716550-9c2f6e917d21?q=80&w=800&auto=format&fit=crop", // Products/Shea butter
  },
  {
    title: "Safe & Timely Delivery",
    description: "We manage logistics end-to-end, guaranteeing that your goods arrive safely and on schedule, wherever you are.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800&auto=format&fit=crop", // Shipping boxes/Logistics
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-bg text-brand-brown">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-poppins font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-brown/80 font-inter"
          >
            We bridge the gap between premium Ghanaian products and international markets with unmatched reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <NextImage 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-brand-gold p-3 rounded-full shadow-lg text-brand-brown transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-8 transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-4 group-hover:hidden">
                  <feature.icon className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-poppins font-bold text-brand-brown">
                    {feature.title}
                  </h3>
                </div>
                <h3 className="text-xl font-poppins font-bold text-brand-brown mb-4 hidden group-hover:block transition-all">
                  {feature.title}
                </h3>
                <p className="text-brand-brown/70 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
