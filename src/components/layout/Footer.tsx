import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter mb-4">
               Reach<span className="text-primary">X</span>Media<span className="text-primary">.</span>
            </div>
            <p className="text-foreground/40 text-sm font-medium uppercase tracking-[0.2em]">
              © 2026. All Rights Reserved.
            </p>
            <a href="mailto:contact@reachxmedia.com" className="text-foreground/50 text-sm mt-2 hover:text-primary transition-colors">
              contact@reachxmedia.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/reachxmedia" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/reachxmedia/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-foreground/60">
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#founder" className="hover:text-primary transition-colors">About</a>
          </div>
        </div>
        <p className="text-center text-foreground/40 text-sm mt-10">
          Made with ♥ by{' '}
          <a href="https://www.siddharthsinghdev.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
            Siddharth Singh
          </a>
        </p>
      </div>
    </footer>
  );
};
