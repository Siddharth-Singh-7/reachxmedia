import React from 'react';
import { motion } from 'framer-motion';
import { BGPattern } from '@/components/ui/bg-pattern';


const brands = [
  'GeeksforGeeks', 'Points9', 'iQuanta', 'Finnet Media'
];

export const BrandsMarquee = () => {
  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-xl md:text-3xl font-medium text-center text-foreground/40 mb-12 tracking-tight">
          Brands That Trust Us
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap min-w-full">
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-5xl font-black text-foreground/20 hover:text-primary transition-colors cursor-default select-none tracking-tighter uppercase"
            >
              {brand}
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};
