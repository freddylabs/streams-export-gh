"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown pt-20 pb-10 text-white/80 border-t-4 border-brand-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo_transparent.png" 
                alt="Streams Export GH Logo" 
                width={200} 
                height={200} 
                className="object-contain h-24 w-auto"
              />
            </Link>
            <p className="font-inter leading-relaxed max-w-sm">
              Your premier partner for importing authentic, high-quality Ghanaian products. We bridge the gap between local producers and global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-brand-orange">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-brand-orange">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-brand-orange">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-brand-orange">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 font-inter">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business / Products */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-lg mb-6">Business</h4>
            <ul className="space-y-4 font-inter">
              <li>
                <Link href="/products#gari" className="hover:text-brand-gold transition-colors">
                  Premium Gari
                </Link>
              </li>
              <li>
                <Link href="/products#shea-butter" className="hover:text-brand-gold transition-colors">
                  Raw Shea Butter
                </Link>
              </li>
              <li>
                <Link href="/products#black-soap" className="hover:text-brand-gold transition-colors">
                  Authentic Black Soap
                </Link>
              </li>
              <li>
                <Link href="/products#kokonte" className="hover:text-brand-gold transition-colors">
                  Dried Fish (Kokonte)
                </Link>
              </li>
              <li>
                <Link href="/products#kente" className="hover:text-brand-gold transition-colors">
                  Kente Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 font-inter">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  123 Export Avenue,<br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+233000000000" className="hover:text-white transition-colors">
                  +233 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@streamsexportgh.com" className="hover:text-white transition-colors">
                  info@streamsexportgh.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://wa.me/233000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white font-medium px-5 py-2.5 rounded hover:bg-[#128C7E] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-inter text-white/50">
          <p>© {currentYear} Streams Export GH. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
