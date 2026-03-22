import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

export const LeadPopup = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000); // 5 seconds, shows on every load
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({ ...form, source: 'Lead Popup' });
    setSubmitted(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative w-full max-w-md pointer-events-auto mx-auto">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-foreground/60" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Free Strategy Call</span>
                    </div>
                    <h2 className="text-2xl font-medium tracking-tight mb-2">
                      Let's grow your <span className="text-primary">brand together</span>
                    </h2>
                    <p className="text-foreground/50 text-sm">
                      Drop your details and we'll reach out to schedule a free discovery call.
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
                      className="w-full bg-primary text-background font-bold rounded-xl py-3 text-sm hover:bg-primary/90 transition-colors mt-2"
                    >
                      Get in touch →
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-medium mb-2">You're all set!</h3>
                  <p className="text-foreground/50 text-sm">
                    Thanks! We'll reach out to you shortly to schedule your free strategy call.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
