"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, AlertTriangle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const US_STATES = [
  "California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", 
  "Ohio", "Georgia", "North Carolina", "Michigan", "New Jersey", "Virginia", 
  "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Maryland"
];

const PRODUCTS = [
  { id: "cocoa", name: "Cocoa Beans/Powder", basePricePerKg: 12 },
  { id: "gari", name: "Premium Gari / Cassava Dough", basePricePerKg: 10 },
  { id: "fish", name: "Dried Fish / Shrimp (Smoked)", basePricePerKg: 15 },
  { id: "yam", name: "Yams & Plantains", basePricePerKg: 8 },
  { id: "palmoil", name: "Palm Oil (Zomi)", basePricePerKg: 12 },
  { id: "shea", name: "Shea Butter (Raw/Unrefined)", basePricePerKg: 10 },
  { id: "soap", name: "African Black Soap", basePricePerKg: 10 },
  { id: "kente", name: "Kente Cloth & Garments", basePricePerKg: 10 },
  { id: "cashew", name: "Cashew Nuts (Raw/Roasted)", basePricePerKg: 12 },
  { id: "driedfruit", name: "Dried Mangoes & Pineapples", basePricePerKg: 15 },
  { id: "prekese", name: "Prekese (Aidan Fruit)", basePricePerKg: 18 },
  { id: "basket", name: "Bolga Baskets", basePricePerKg: 20 },
  { id: "other", name: "Other (Custom Item)", basePricePerKg: 0 }
];

export default function QuotePage() {
  const { user } = useAuth();
  const router = useRouter();
  
  const [product, setProduct] = useState("");
  const [customItem, setCustomItem] = useState("");
  const [weight, setWeight] = useState("");
  const [state, setState] = useState("");
  
  const [quote, setQuote] = useState<{ amount: number; message: string; requiresReview: boolean } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !weight || !state) return;
    
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) return;

    if (product === "other" || weightNum > 500) {
      setQuote({
        amount: 0,
        message: "This request requires manual review by our logistics team for the best bulk/custom rate.",
        requiresReview: true
      });
      return;
    }

    const selectedProduct = PRODUCTS.find(p => p.id === product);
    if (selectedProduct) {
      const estimatedCost = selectedProduct.basePricePerKg * weightNum;
      setQuote({
        amount: estimatedCost,
        message: `Estimated Air Freight Cost: $${estimatedCost.toFixed(2)}`,
        requiresReview: false
      });
    }
  };

  const handlePlaceOrder = () => {
    const pendingOrder = {
      product,
      customItem,
      weight,
      state,
      quote
    };
    localStorage.setItem("streams_pending_order", JSON.stringify(pendingOrder));

    if (!user) {
      router.push("/register");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-brand-bg"></div>
      
      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 bg-brand-gold/20 rounded-full mb-4"
          >
            <Calculator className="w-8 h-8 text-brand-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-brand-brown mb-4"
          >
            Get a Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-inter max-w-2xl mx-auto"
          >
            Instantly estimate your shipping costs from Ghana to the USA.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-2">Origin</label>
                  <input
                    type="text"
                    value="Accra, Ghana"
                    disabled
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-500 font-medium cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-2">Destination (US State)</label>
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a state</option>
                    {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-brown mb-2">Select Product</label>
                <select
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select an item</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              <AnimatePresence>
                {product === "other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div>
                      <label className="block text-sm font-medium text-brand-brown mb-2">Describe Custom Item</label>
                      <input
                        type="text"
                        required
                        value={customItem}
                        onChange={(e) => setCustomItem(e.target.value)}
                        placeholder="E.g., Custom wooden furniture"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-red-800">
                        <strong className="block mb-1">Prohibited Items Warning:</strong>
                        We cannot ship Bushmeat, Fresh Fruits/Vegetables (unless certified), Untreated Wood, Counterfeit Goods, or Narcotics.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-sm font-medium text-brand-brown mb-2">Estimated Weight (kg)</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 25"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-shimmer bg-brand-gold text-brand-brown font-semibold py-4 rounded-xl hover:bg-brand-orange hover:text-white transition-colors"
              >
                Calculate Quote
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="bg-brand-brown p-8 rounded-3xl shadow-xl text-white sticky top-32">
              <h3 className="text-xl font-poppins font-semibold mb-6 border-b border-white/10 pb-4">
                Your Quote Summary
              </h3>
              
              {!quote ? (
                <div className="text-white/60 text-sm text-center py-8">
                  Fill out the form to generate your estimated quote.
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {quote.requiresReview ? (
                    <div className="bg-white/10 rounded-xl p-4 text-sm leading-relaxed">
                      {quote.message}
                    </div>
                  ) : (
                    <div>
                      <div className="text-sm text-brand-gold mb-1">Estimated Cost</div>
                      <div className="text-4xl font-bold font-poppins mb-2">
                        ${quote.amount.toFixed(2)}
                      </div>
                      <div className="text-sm text-white/70">
                        *Final price may vary based on exact volumetric weight and carrier surcharges.
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full flex items-center justify-center space-x-2 bg-white text-brand-brown font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <span>Place Order</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  {!user && (
                    <p className="text-xs text-center text-white/60 mt-2">
                      You will be asked to log in or create an account.
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
