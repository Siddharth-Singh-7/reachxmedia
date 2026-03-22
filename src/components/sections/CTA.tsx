import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

export const CTA = () => {
  const handleGetStarted = () => {
    document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium mb-6 tracking-tighter"
          >
            How to <span className="text-primary decoration-primary/30">work with us?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-12"
          >
            <div className="px-6 py-2 rounded-full bg-foreground text-background text-sm font-bold">
              Brand Scaling
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-1.5 rounded-lg bg-primary/20 border border-primary/30 mb-6">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Authority Engine™ - Growth
              </span>
            </div>
            <p className="text-foreground/70 text-base mb-6">
              For coaches & founders ready to scale discovery & authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Strategy ideation & scripting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">15-16 high-fidelity short-form video/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Strategic content calendar + narrative design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Multi-platform distribution (IG, LinkedIn, YT Shorts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Monthly growth tracking + optimization</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Outcome:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Build team compound attention, attract inbound clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">Form "pouring randomly" → predictable growth</span>
                </li>
              </ul>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full rounded-full h-16 text-lg font-black bg-primary text-background hover:bg-primary/90 transition-all group"
            onClick={handleGetStarted}
          >
            Get started
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
