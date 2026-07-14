"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Order = {
  id: string;
  product: string;
  weight: string;
  destinationState: string;
  totalAmount: number;
  amountPaid: number;
  status: "pending_payment" | "processing" | "shipped";
};

export type User = {
  name: string;
  email: string;
  orders: Order[];
};

type AuthContextType = {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  addOrder: (order: Order) => void;
  updateOrderPayment: (orderId: string, amount: number) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("streams_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (name: string, email: string) => {
    // Check if user already exists in local storage to preserve orders
    const storedUser = localStorage.getItem("streams_user");
    let orders: Order[] = [];
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email === email) {
        orders = parsedUser.orders || [];
      }
    }
    
    const newUser = { name, email, orders };
    setUser(newUser);
    localStorage.setItem("streams_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("streams_user");
  };

  const addOrder = (order: Order) => {
    if (!user) return;
    const updatedUser = { ...user, orders: [...user.orders, order] };
    setUser(updatedUser);
    localStorage.setItem("streams_user", JSON.stringify(updatedUser));
  };

  const updateOrderPayment = (orderId: string, amount: number) => {
    if (!user) return;
    const updatedOrders = user.orders.map(o => {
      if (o.id === orderId) {
        return { ...o, amountPaid: amount, status: "processing" as const };
      }
      return o;
    });
    const updatedUser = { ...user, orders: updatedOrders };
    setUser(updatedUser);
    localStorage.setItem("streams_user", JSON.stringify(updatedUser));
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthModalOpen, openAuthModal, closeAuthModal, addOrder, updateOrderPayment }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
