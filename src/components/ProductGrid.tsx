"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Premium Gari",
    description: "Finely roasted, crisp cassava flakes. 100% natural, perfectly suited for snacks and traditional meals.",
    badge: "100% Natural",
    image: "https://images.unsplash.com/photo-1504670073073-6123e39e0754?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dried Fish (Smoked)",
    description: "Sustainably sourced, sun-dried and smoked fish providing rich flavor and high nutritional value.",
    badge: "Sustainably Sourced",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Authentic Black Soap",
    description: "Handcrafted traditional Alata Samina (African Black Soap) for natural skin cleansing and nourishment.",
    badge: "Handcrafted",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Raw Shea Butter",
    description: "Unrefined, grade-A Shea Butter directly from Northern Ghana. Excellent for cosmetics and personal care.",
    badge: "Grade A",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Kente Textiles",
    description: "Vibrant, handwoven Kente cloth representing the rich cultural heritage and artisanal skill of Ghana.",
    badge: "Handwoven",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Cocoa Beans & Powder",
    description: "Premium sun-dried cocoa beans, the foundation of the world's finest chocolate.",
    badge: "Premium Export",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Yams & Plantains",
    description: "Fresh, high-quality agricultural produce carefully sourced and packed for international markets.",
    badge: "Export Grade",
    image: "https://images.unsplash.com/photo-1596647413665-27a3cce88006?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Palm Oil (Zomi)",
    description: "Rich, unrefined red palm oil essential for authentic West African cooking.",
    badge: "100% Pure",
    image: "https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Cashew Nuts (Raw/Roasted)",
    description: "Premium grade cashew nuts sourced directly from local farmers. Perfect for snacking and culinary use.",
    badge: "Top Export",
    image: "https://images.unsplash.com/photo-1599818815147-32ebfec87e4f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dried Mangoes & Pineapples",
    description: "Naturally sweet, sun-dried tropical fruits with no added sugar or preservatives.",
    badge: "100% Natural",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Prekese (Aidan Fruit)",
    description: "Traditional aromatic spice and medicinal plant known for its rich flavor and health benefits.",
    badge: "Authentic Spice",
    image: "https://images.unsplash.com/photo-1596647413665-27a3cce88006?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Bolga Baskets",
    description: "Hand-woven elephant grass baskets from Bolgatanga, showcasing exquisite craftsmanship.",
    badge: "Handcrafted",
    image: "https://images.unsplash.com/photo-1610408542918-028f0de20b8e?q=80&w=600&auto=format&fit=crop",
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white text-brand-brown">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-poppins font-bold mb-4"
            >
              Our Products
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-brand-brown/80 font-inter"
            >
              Discover our diverse range of authentic Ghanaian export commodities, sourced and processed to perfection.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-0"
          >
            <Link 
              href="/products"
              className="inline-flex items-center text-brand-gold font-semibold hover:text-brand-orange transition-colors"
            >
              View Full Catalog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-brand-bg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider font-inter">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-poppins font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-brand-brown/70 font-inter leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="mt-6 pt-6 border-t border-brand-brown/10">
                  <Link 
                    href="/quote"
                    className="inline-flex items-center text-sm font-semibold text-brand-brown hover:text-brand-orange transition-colors"
                  >
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
