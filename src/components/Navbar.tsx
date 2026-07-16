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
        <div className="flex items-center justify-between relative">
          
          <div className="flex flex-1 items-center">
            <button
              className={`mr-4 md:mr-6 transition-colors ${isWhiteNavbar ? 'text-brand-brown hover:text-brand-gold' : 'text-white hover:text-brand-gold'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
            {(!isHomePage || isScrolled) && (
              <a href="/" className="flex items-center transition-opacity duration-300">
                <Image 
                  src="/logo_transparent.png" 
                  alt="Streams Export GH Logo" 
                  width={160} 
                  height={160} 
                  className="object-contain h-12 w-auto md:h-16"
                  priority
                />
              </a>
            )}
          </div>

          <div className="flex justify-end">
            <Link
              href="/quote"
              className={`btn-shimmer bg-brand-gold text-white font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-brand-orange transition-all duration-300 text-sm md:text-base shadow-sm ${
                isHomePage && !isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isHomeLink = link.href === "/";
                
                if (isHomeLink) {
                  return (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-brand-brown hover:text-brand-gold font-poppins text-xl font-medium transition-colors"
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
                    className="text-brand-brown hover:text-brand-gold font-poppins text-xl font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
