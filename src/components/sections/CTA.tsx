import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

const podcastingPlans = [
  {
    tag: 'CLIPPING',
    description: 'For founders who already record podcasts but want to go viral.',
    features: [
      'Post-production from existing podcasts',
      '60-100 short-form clips/month',
      'Advanced multi-platform distribution (IG, LinkedIn, X, YT)',
      'Guaranteed virality through algorithm-tested editing',
    ],
    outcome: 'Explosive top-of-funnel awareness & reach.',
  },
  {
    tag: 'STARTER',
    description: 'For founders ready to turn content into a distribution machine.',
    features: [
      'Content audit + pre-production planning',
      'Post-production at scale',
      'State-of-the-art short-form distribution for maximum discovery',
      'Advanced multi-platform distribution (IG, LinkedIn, X, YT)',
      'Dedicated strategist + account manager',
      'Media reports & analytics',
    ],
    outcome: 'Predictable growth, authority building, consistent inbound.',
  },
  {
    tag: 'STANDARD',
    description: 'For founders ready to build an industry-leading podcast from scratch.',
    features: [
      'Pre-production (show concept, branding, positioning)',
      'Post-production (long-form + clips)',
      'Guest list curation & invitations',
      'Studio booking & logistics handling',
      'Thought-leadership ghostwriting (LinkedIn, Twitter, newsletters)',
      'Advanced multi-platform distribution (IG, LinkedIn, X, YT)',
      'Dedicated strategist + account manager',
      'Media reports & analytics',
    ],
    outcome: 'From zero to an industry-leading podcast + distribution system within 6 months.',
  },
];

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5">
    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
    <span className="text-foreground/70 text-sm leading-snug">{text}</span>
  </li>
);

export const CTA = () => {
  const [tab, setTab] = useState<'brand' | 'podcast'>('brand');

  const handleGetStarted = () => {
    document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium mb-8 tracking-tighter"
          >
            How to <span className="text-primary">work with us?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 p-1.5 rounded-full border border-white/10 bg-white/5"
          >
            <button
              onClick={() => setTab('brand')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${tab === 'brand' ? 'bg-foreground text-background' : 'text-foreground/50 hover:text-foreground'}`}
            >
              Brand Scaling
            </button>
            <button
              onClick={() => setTab('podcast')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${tab === 'podcast' ? 'bg-foreground text-background' : 'text-foreground/50 hover:text-foreground'}`}
            >
              Authority Builder
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'brand' && (
            <motion.div
              key="brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-primary/20 border border-primary/30 mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Authority Engine - Growth</span>
                </div>
                <p className="text-foreground/70 text-base">For coaches, consultant & business owners ready to scale discovery & authority.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-base font-bold text-white mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {['Strategy ideation & scripting', '18-20 post + short-form video/month', 'Strategic content calendar + narrative design', 'Multi-platform distribution (Instagram, Facebook, LinkedIn & Youtube)', 'Monthly growth tracking + optimization', 'Content scheduling calendar'].map((item, i) => (
                      <CheckItem key={i} text={item} />
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-4">Outcome:</h4>
                  <ul className="space-y-3">
                    {['Build compound attention, attract inbound clients', 'From random posting to predictable growth'].map((item, i) => (
                      <CheckItem key={i} text={item} />
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full h-14 text-base font-black bg-primary text-background hover:bg-primary/90 transition-all group"
                onClick={handleGetStarted}
              >
                Get started
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}

          {tab === 'podcast' && (
            <motion.div
              key="podcast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-primary/20 border border-primary/30 mb-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">The Authority Builder</span>
                </div>
                
                <p className="text-foreground/70 text-base">For coaches & founders ready to scale discovery & authority.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-base font-bold text-white mb-4">Monthly Deliverables:</h4>
                  <ul className="space-y-3">
                    {[
                      '12 short-form videos scripted, edited, caption-ready, platform-optimized',
                      '2 long-form videos scripted and edited',
                      'Basic content angle strategy (3 core authority topics defined in Month 1)',
                      'Repurposing of long-form into 2 additional short-form clips',
                      'Content scheduling calendar',
                    ].map((item, i) => (
                      <CheckItem key={i} text={item} />
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-4">Outcome:</h4>
                  <ul className="space-y-3">
                    {[
                      'Consistent presence across platforms without lifting a finger',
                      'Build authority in your niche month over month',
                      'Turn content into a reliable inbound lead source',
                    ].map((item, i) => (
                      <CheckItem key={i} text={item} />
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full h-14 text-base font-black bg-primary text-background hover:bg-primary/90 transition-all group"
                onClick={handleGetStarted}
              >
                Get started
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
