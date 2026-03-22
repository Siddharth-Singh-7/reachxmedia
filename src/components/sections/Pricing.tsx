import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Rocket, Moon, Stars } from 'lucide-react';

const plans = [
  {
    name: 'Sky Rocket',
    price: '₹2,00,000',
    description: 'Best For Growing Brands',
    icon: <Rocket className="w-8 h-8 text-primary" />,
    features: [
      '5 Reels',
      '1 Influencer',
      'Carousels',
      'Personalized Branding',
      'Video Editing',
      'Production',
      'Script Writing',
      'Content Research',
      'Content Strategy',
      'Graphic Designing',
      'Account Manager',
      'Dedicated Team',
      'Meme Marketing',
      'Daily Stories',
    ],
  },
  {
    name: 'Moon Rocket',
    price: '₹3,00,000',
    description: 'Best For Big Brands',
    icon: <Moon className="w-8 h-8 text-primary" />,
    recommended: true,
    features: [
      '10 Reels',
      '2 Influencers',
      'Carousels',
      'Personalized Branding',
      'Video Editing',
      'Production',
      'Script Writing',
      'Content Research',
      'Content Strategy',
      'Graphic Designing',
      'Account Manager',
      'Dedicated Team',
      'Meme Marketing',
      'Daily Stories',
    ],
  },
  {
    name: 'Milky Way Rocket',
    price: '₹5,00,000',
    description: 'Best For Premium Brands',
    icon: <Stars className="w-8 h-8 text-primary" />,
    features: [
      '20 Reels',
      '2 Influencers',
      '4 Carousels',
      'Personalized Branding',
      'Video Editing',
      'Production',
      'Script Writing',
      'Content Research',
      'Content Strategy',
      'Graphic Designing',
      'Account Manager',
      'Dedicated Team',
      'Meme Marketing',
      'Daily Stories',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Full Refund If We <br />
            Don't <span className="text-primary italic">Beat</span> Your Current Views
          </motion.h2>
          <p className="text-foreground/40 text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Select Your Package To Build A Viral Brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] p-10 flex flex-col border ${
                plan.recommended 
                  ? 'bg-white/5 border-primary/50 shadow-[0_0_50px_rgba(212,255,0,0.1)]' 
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                {plan.icon}
                <h3 className="text-3xl font-black mt-4 mb-2 tracking-tight uppercase">{plan.name}</h3>
                <div className="text-4xl font-black text-primary mb-2">{plan.price}<span className="text-sm font-medium text-foreground/40">/month</span></div>
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-wider">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.recommended ? 'default' : 'outline'} 
                size="lg" 
                className="w-full rounded-full h-14 text-lg font-bold group"
                onClick={() => window.open('https://calendly.com/angad-growth-rocket/sample', '_blank')}
              >
                Book Call
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
