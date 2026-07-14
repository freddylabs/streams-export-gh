"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Lock, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function PaymentPage() {
  const { user, updateOrderPayment } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const orderId = searchParams.get("orderId");
  const amountStr = searchParams.get("amount");
  const amount = amountStr ? parseFloat(amountStr) : 0;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!user || !orderId || amount <= 0) {
      router.push("/dashboard");
    }
  }, [user, orderId, amount, router]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment gateway delay
    setTimeout(() => {
      if (orderId) {
        updateOrderPayment(orderId, amount);
      }
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Simulate Email Notification
      alert(`SIMULATED EMAIL: Receipt for Order ${orderId} has been sent to ${user?.email}`);

      // Redirect back to dashboard after a short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }, 2000);
  };

  if (!user || !orderId || amount <= 0) return null;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg flex items-center justify-center relative">
      <div className="absolute top-24 left-6 md:left-12">
        <Link href="/dashboard" className="flex items-center text-gray-500 hover:text-brand-brown transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="payment-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-brand-brown p-8 text-center text-white">
              <div className="mb-2 text-white/70 text-sm font-medium">70% Deposit Required</div>
              <div className="text-4xl font-poppins font-bold mb-2">${amount.toFixed(2)}</div>
              <div className="text-white/70 text-sm">Order #{orderId}</div>
            </div>

            <div className="p-8">
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-2">Card Information</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-t-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                    />
                    <div className="flex border border-t-0 border-gray-200 rounded-b-xl">
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        className="w-1/2 px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm border-r border-gray-200"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        className="w-1/2 px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm rounded-br-xl"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-2">Name on Card</label>
                  <input
                    type="text"
                    required
                    defaultValue={user.name}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-500 justify-center pb-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>Payments are secure and encrypted</span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex justify-center items-center bg-brand-gold text-brand-brown font-semibold py-4 rounded-xl hover:bg-brand-orange hover:text-white transition-colors disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...
                    </>
                  ) : (
                    `Pay $${amount.toFixed(2)}`
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white p-12 rounded-3xl shadow-xl text-center"
          >
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-poppins font-bold text-brand-brown mb-2">Payment Successful!</h2>
            <p className="text-gray-500 font-inter mb-8">
              Your 70% deposit of ${amount.toFixed(2)} has been received. Redirecting to your dashboard...
            </p>
            <Loader2 className="w-6 h-6 text-brand-gold animate-spin mx-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
