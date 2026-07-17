"use client";

import { AuthProvider } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";
import Chatbot from "@/components/Chatbot";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <AuthModal />
      <Chatbot />
    </AuthProvider>
  );
}
