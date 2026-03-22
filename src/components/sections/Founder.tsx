import React from 'react';
import { motion } from 'framer-motion';
import { FlipCard } from '@/components/ui/flip-card';
import { BGPattern } from '@/components/ui/bg-pattern';

const founderData = {
  name: 'Harsh Gupta',
  username: 'harshgupta',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
  bio: 'Entrepreneur and content strategist with a passion for creating exceptional content that resonates with audiences and drives real business results.',
  stats: {
    following: 250,
    followers: 5000,
    posts: 320,
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/reachxmedia',
    instagram: 'https://www.instagram.com/reachxmedia/',
  },
};

export const Founder = () => {
  return (
    <section className="py-32 px-6 bg-background relative z-10 overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        {/* Founder FlipCard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <FlipCard data={founderData} />
          
          {/* Animated Glow behind card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[50px] rounded-full -z-10" />
        </motion.div>

        {/* Founder Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-widest uppercase"
          >
            Meet The Founder
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter"
          >
            Harsh <br /> Gupta
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white">100K+</span>
              <span className="text-xs font-bold text-foreground/40 uppercase tracking-[0.2em]">Clients Reached</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white">500+</span>
              <span className="text-xs font-bold text-foreground/40 uppercase tracking-[0.2em]">Projects</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-8"
          >
            As an entrepreneur and content strategist, Harsh Gupta has a passion for creating exceptional content that resonates with audiences and drives real business results. With years of experience in digital marketing and social media strategy, he founded ReachxMedia to help brands connect authentically with their target audience.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/60 leading-relaxed"
          >
            Harsh specializes in creating data-driven content strategies that combine creativity with analytics to deliver measurable growth for businesses across various industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
