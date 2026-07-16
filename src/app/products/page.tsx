"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const products = [
  // Staples & Flours
  {
    id: "gari",
    name: "Premium Gari",
    description: "Crispy, well-roasted cassava flakes. A true Ghanaian staple.",
    quantity: "2kg Pack",
    price: "$5.50",
    image: "/gari.png"
  },
  {
    id: "kivo-gari",
    name: "Kivo Gari Mix",
    description: "Enriched Gari mix with peanuts and sugar for a quick, delicious snack.",
    quantity: "500g Pack",
    price: "$3.50",
    image: "/kivo gari mix.png"
  },
  {
    id: "kokonte",
    name: "Kokonte Flour",
    description: "High-quality dried cassava flour. Traditionally preserved for rich flavor.",
    quantity: "1kg Pack",
    price: "$4.00",
    image: "/kokonte_flour_ai.png" 
  },
  {
    id: "banku-dough",
    name: "Fermented Corn Dough",
    description: "Perfectly fermented corn dough mix for authentic Banku and Kenkey.",
    quantity: "2kg Pack",
    price: "$7.50",
    image: "/fermented_corn_dough_ai.png"
  },
  {
    id: "fufu",
    name: "Fufu Mix",
    description: "Instant fufu flour. Smooth texture and traditional taste.",
    quantity: "1kg Pack",
    price: "$6.00",
    image: "/Fufu.png"
  },
  {
    id: "tom-brown",
    name: "Tom Brown Porridge",
    description: "Nutritious roasted corn porridge mix with peanuts and soybeans.",
    quantity: "1kg Pack",
    price: "$5.00",
    image: "/Tom Brown.png" 
  },
  {
    id: "hausa-koko",
    name: "Hausa Koko Mix",
    description: "Spicy millet porridge flour. A popular Ghanaian breakfast staple.",
    quantity: "1kg Pack",
    price: "$4.50",
    image: "/Hausa Koko.png"
  },

  // Prepared Foods & Preserves
  {
    id: "ga-kenkey",
    name: "Ga Kenkey",
    description: "Authentic fermented corn dough wrapped in corn husks. Ready to eat.",
    quantity: "Pack of 4 balls",
    price: "$8.00",
    image: "/Ga Kenkey.png" 
  },
  {
    id: "fanti-kenkey",
    name: "Fanti Kenkey",
    description: "Fermented corn dough wrapped in plantain leaves. Ready to eat.",
    quantity: "Pack of 4 balls",
    price: "$8.50",
    image: "/Fante Kenkey.png"
  },
  {
    id: "shito",
    name: "Premium Shito",
    description: "Authentic Ghanaian black pepper sauce. Rich, savory, and spicy.",
    quantity: "400g Jar",
    price: "$8.50",
    image: "/Shito.png"
  },
  {
    id: "peanut-butter",
    name: "Groundnut Paste",
    description: "100% pure roasted peanut butter. Perfect for traditional groundnut soup.",
    quantity: "1kg Jar",
    price: "$7.00",
    image: "/Ground nut Paste.png"
  },

  // Oils & Spices
  {
    id: "palm-oil",
    name: "Red Palm Oil",
    description: "Premium, unrefined red palm oil extracted traditionally. Rich flavor.",
    quantity: "1 Liter",
    price: "$9.00",
    image: "/Palm Oil.png" 
  },
  {
    id: "dawadawa",
    name: "Dawadawa (Locust Beans)",
    description: "Traditional fermented locust beans seasoning for rich, umami flavor.",
    quantity: "250g Pack",
    price: "$4.00",
    image: "/Dawadawa.png" 
  },
  {
    id: "prekese",
    name: "Prekese (Aidan Fruit)",
    description: "Aromatic Aidan fruit used for soups, teas, and traditional medicine.",
    quantity: "Pack of 5",
    price: "$6.00",
    image: "/Prekese.png" 
  },
  {
    id: "sobolo",
    name: "Dried Hibiscus Leaves (Sobolo)",
    description: "Premium dried hibiscus flowers for brewing delicious Sobolo drink.",
    quantity: "500g Pack",
    price: "$5.50",
    image: "/Sobolo.png" 
  },

  // Meats & Fish
  {
    id: "herrings",
    name: "Smoked Fish (Herrings)",
    description: "Traditionally smoked dry herrings for soups and stews.",
    quantity: "500g Pack",
    price: "$10.00",
    image: "/Herrings.png" 
  },
  {
    id: "koobi",
    name: "Koobi (Salted Tilapia)",
    description: "Premium salted and dried tilapia. Adds intense flavor to local dishes.",
    quantity: "Pack of 3",
    price: "$9.50",
    image: "/Kobi.png" 
  },

  // Beauty & Skincare
  {
    id: "shea-butter",
    name: "Raw Shea Butter",
    description: "100% unrefined, ethically sourced shea butter. Rich in vitamins.",
    quantity: "500g Jar",
    price: "$8.50",
    image: "/Shea Butter.png"
  },
  {
    id: "black-soap-bar",
    name: "Authentic Black Soap",
    description: "Traditional African black soap (Alata Samina) made from natural ashes.",
    quantity: "500g Bar",
    price: "$5.00",
    image: "/Black Soap.png"
  },
  {
    id: "black-soap-liquid",
    name: "Liquid Black Soap",
    description: "Convenient liquid form of authentic African black soap with essential oils.",
    quantity: "500ml Bottle",
    price: "$7.50",
    image: "/Liquid Black Soap.png"
  },
  {
    id: "cocoa-butter",
    name: "Raw Cocoa Butter",
    description: "Pure, unrefined cocoa butter. Excellent moisturizer with natural chocolate scent.",
    quantity: "500g Jar",
    price: "$10.50",
    image: "/Cocoa Butter.png" 
  },

  // Textiles & Crafts
  {
    id: "kente",
    name: "Authentic Kente Cloth",
    description: "Vibrant, handwoven Kente cloth for everyday wear and special events.",
    quantity: "2 Yards",
    price: "$35.00",
    image: "/Kente.png"
  },
  {
    id: "smock",
    name: "Traditional Smock (Batakari)",
    description: "Handwoven Northern Ghanaian smock. Durable, cultural, and stylish.",
    quantity: "1 Piece",
    price: "$35.00",
    image: "/smock_model_ai.png" 
  }
];

export default function ProductsPage() {
  const router = useRouter();
  const { user } = useAuth();

  const handleOrder = (productId: string) => {
    if (user) {
      router.push(`/dashboard`);
    } else {
      localStorage.setItem("streams_pending_order", productId);
      router.push("/register");
    }
  };

  return (
    <main className="min-h-screen bg-brand-bg pt-32">
      <Navbar />
      
      <div className="container mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-poppins font-bold text-brand-brown mb-6"
          >
            Our <span className="text-brand-gold">Catalog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-brown/80 font-inter"
          >
            Explore our extensive curated selection of premium Ghanaian products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-gold flex flex-col h-full overflow-hidden"
            >
              {/* Image Container with robust CSS to handle varied screenshots cleanly */}
              <div className="relative h-56 w-full bg-white flex items-center justify-center p-4">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-4 drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white border-t border-gray-50">
                <div className="flex-grow">
                  <h3 className="text-xl font-poppins font-bold text-brand-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-brown/70 font-inter text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto border-t border-brand-brown/10 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-brand-brown/50 font-semibold uppercase tracking-wider mb-1">Unit</p>
                      <p className="font-inter font-medium text-brand-brown">{product.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-brand-brown/50 font-semibold uppercase tracking-wider mb-1">Price</p>
                      <p className="text-xl font-poppins font-bold text-brand-gold">{product.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOrder(product.id)}
                    className="w-full flex items-center justify-center bg-brand-brown text-white font-semibold py-3 rounded-xl hover:bg-brand-gold transition-colors text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
