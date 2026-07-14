"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User as UserIcon, Building2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { login, user } = useAuth();
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    const processPendingOrderAndRedirect = () => {
      const pendingOrderStr = localStorage.getItem("streams_pending_order");
      if (pendingOrderStr) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    };

    if (user) {
      processPendingOrderAndRedirect();
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    
    // Simulate user creation and login
    login(name, email);
    // Note: useEffect will trigger processPendingOrderAndRedirect
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative flex items-center justify-center bg-brand-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-poppins font-bold text-brand-brown mb-2">Create Account</h1>
          <p className="text-gray-500 font-inter text-sm">
            Register to finalize your quote and track your shipments on the dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-inter">
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1">Company (Optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                placeholder="Doe Imports LLC"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-shimmer mt-6 bg-brand-gold text-brand-brown font-semibold py-3 rounded-xl hover:bg-brand-orange hover:text-white transition-colors"
          >
            Register & Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
}
