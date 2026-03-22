import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContactModal } from '@/components/ui/ContactModal';

const leftNavLinks = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
];

const rightNavLinks = [
  { name: 'About Us', href: '#founder' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12',
          scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-16">
          {/* Left Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Rocket className="w-7 h-7 text-background" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Reach<span className="text-primary">X</span>Media<span className="text-primary">.</span>
            </span>
          </div>

          {/* Right Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {rightNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden absolute right-6 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-8 px-6">
                {[...leftNavLinks, ...rightNavLinks].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  className="text-lg font-medium text-foreground/70 text-left"
                  onClick={() => { setMobileMenuOpen(false); setContactOpen(true); }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {createPortal(
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />,
        document.body
      )}
    </>
  );
};
