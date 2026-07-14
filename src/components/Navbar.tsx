"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";
  const isWhiteNavbar = isScrolled || !isHomePage || isMobileMenuOpen;
  const shouldShimmer = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteNavbar 
          ? "bg-white shadow-md py-2 border-b border-transparent" 
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="flex items-center">
            <Image 
              src="/logo_transparent.png" 
              alt="Streams Export GH Logo" 
              width={160} 
              height={160} 
              className={`object-contain h-16 w-auto md:h-20 ${shouldShimmer ? 'animate-glisten' : ''}`}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isHomeLink = link.href === "/";
              const textColor = isWhiteNavbar ? 'text-brand-brown' : 'text-white';
              
              if (isHomeLink) {
                return (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${textColor} hover:text-brand-gold font-inter font-medium transition-colors`}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${textColor} hover:text-brand-gold font-inter font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/quote"
              className="btn-shimmer bg-brand-gold text-white font-semibold px-6 py-2 rounded-full hover:bg-brand-orange transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className={`md:hidden ${isWhiteNavbar ? 'text-brand-brown' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 shadow-lg">
              {navLinks.map((link) => {
                const isHomeLink = link.href === "/";
                
                if (isHomeLink) {
                  return (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-brand-brown hover:text-brand-gold font-inter text-lg font-medium"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brand-brown hover:text-brand-gold font-inter text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-shimmer bg-brand-gold text-white text-center font-semibold px-6 py-3 rounded-full hover:bg-brand-orange transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
