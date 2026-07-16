"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "DHL", logo: "/partners/dhl.svg" },
  { name: "FedEx", logo: "/partners/fedex.svg" },
  { name: "Delta Cargo", logo: "/partners/delta.svg" },
  { name: "KLM", logo: "/partners/klm.svg" },
  { name: "UPS", logo: "/partners/ups.svg" },
  { name: "Nestlé", logo: "/partners/nestle.svg" },
  { name: "Unilever", logo: "/partners/unilever.svg" },
];

export default function PartnersBand() {
  return (
    <section className="py-12 bg-white border-y border-brand-brown/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-poppins font-semibold text-brand-brown/50 uppercase tracking-widest">
          Our Logistics, Airlines & Trade Partners
        </h3>
      </div>
      
      {/* Seamless Marquee Container */}
      <div className="w-full flex overflow-hidden">
        <motion.div 
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* We create two identical blocks side by side. By moving the parent -50%, it seamlessly loops. */}
          <div className="flex w-max items-center space-x-16 px-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center transition-opacity min-w-[120px]">
                {partner.logo ? (
                  partner.logo.startsWith('http') ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={partner.logo} alt={partner.name} className="object-contain h-12 w-auto max-w-[160px]" />
                  ) : (
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={140} 
                      height={60} 
                      className="object-contain h-12 w-auto max-w-[160px]"
                    />
                  )
                ) : (
                  <span className="text-2xl md:text-3xl font-poppins font-extrabold text-brand-brown/60 uppercase tracking-widest">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex w-max items-center space-x-16 px-8">
            {partners.map((partner, index) => (
              <div key={`clone-${index}`} className="flex-shrink-0 flex items-center justify-center transition-opacity min-w-[120px]">
                {partner.logo ? (
                  partner.logo.startsWith('http') ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={partner.logo} alt={partner.name} className="object-contain h-12 w-auto max-w-[160px]" />
                  ) : (
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={140} 
                      height={60} 
                      className="object-contain h-12 w-auto max-w-[160px]"
                    />
                  )
                ) : (
                  <span className="text-2xl md:text-3xl font-poppins font-extrabold text-brand-brown/60 uppercase tracking-widest">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
