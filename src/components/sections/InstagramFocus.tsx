import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, TrendingUp, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InstagramFocus = () => {
  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]"
          >
            If your business <br /> 
            isn't on <span className="text-primary italic underline">Instagram</span>, <br />
            it should be.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/60 mb-12 max-w-xl leading-relaxed"
          >
            Engage your followers daily. Create end-to-end content for your Instagram. 
            We will create Reels, Carousels, Memes & Daily Stories for your page. 
            Grow organically and build a community that converts.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Organic Growth</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Community</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="rounded-full h-14 px-10 text-lg font-bold group"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Go Viral
            <Instagram className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Instagram Marketing"
            />
            
            {/* Mock Instagram Feed UI */}
            <div className="absolute bottom-10 left-10 right-10 glass-card rounded-2xl p-6 border-white/20 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-black text-background">RM</div>
                <span className="text-sm font-bold text-white">reachxmedia</span>
              </div>
              <p className="text-xs text-white/80 line-clamp-2 mb-4 italic">"ReachxMedia helped us scale our community from 10k to 100k in less than 6 months!"</p>
              <div className="flex items-center gap-4">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-xs font-bold text-white/40 tracking-[0.2em] uppercase">1,234 Likes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
