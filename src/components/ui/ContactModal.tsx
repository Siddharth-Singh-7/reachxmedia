import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({ ...form, source: 'Contact Modal' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '' });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative w-full max-w-md"
          >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-foreground/60" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Get in Touch</span>
                    </div>
                    <h2 className="text-2xl font-medium tracking-tight mb-2">
                      Let's talk about your <span className="text-primary">brand</span>
                    </h2>
                    <p className="text-foreground/50 text-sm">
                      Fill in your details and we'll reach out — or email us directly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Contact number"
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-background font-bold rounded-xl py-3 text-sm hover:bg-primary/90 transition-colors"
                    >
                      Send Message →
                    </button>
                  </form>

                  <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-foreground/40">
                    <Mail className="w-4 h-4" />
                    <span>Or email us at</span>
                    <a href="mailto:contact@reachxmedia.com" className="text-primary hover:underline">
                      contact@reachxmedia.com
                    </a>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-medium mb-2">Message sent!</h3>
                  <p className="text-foreground/50 text-sm">
                    Thanks! We'll get back to you shortly.
                  </p>
                </motion.div>
              )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
