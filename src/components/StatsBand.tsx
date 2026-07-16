"use client";

import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to, suffix, duration = 2 }: { from: number; to: number; suffix: string, duration?: number }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, suffix, duration]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const stats = [
  { value: 100, suffix: "%", label: "Quality Guarantee" },
  { value: 24, suffix: "/7", label: "Dedicated Support" },
  { value: 48, suffix: "h", label: "Global Logistics" },
  { value: 1, suffix: "st", label: "Class Service" },
];

export default function StatsBand() {
  return (
    <section className="bg-brand-brown py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-gold/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-brand-gold mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-inter font-medium text-white/90 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
