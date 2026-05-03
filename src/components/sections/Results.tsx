import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    brand: 'Points9',
    title: '2000 followers within 25 days',
    description: "2K organic followers in 25 days. Great results and smooth work. Highly recommend.",
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    brand: 'GeeksforGeeks',
    title: 'Delivering Proper Organic Growth throughout their editing style',
    description: "Delivered 1M+ organic YouTube Shorts views in just 24 hours. Smooth process and excellent results.",
    color: 'bg-primary/10 text-primary',
  },
  {
    brand: 'Social Kraft',
    title: 'Real Growth for Brands & Creators',
    description: "Great experience working together. The content distribution was on point and helped us reach the right audience with better engagement.",
    color: 'bg-amber-500/10 text-amber-500',
  },
];

export const Results = () => {
  return (
    <section id="results" className="py-32 px-6 bg-background relative z-10">
      <div className="w-full px-4 md:px-16 lg:px-40">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-6xl font-medium mb-6 tracking-tighter">
            Stories of our brands <br />
            that saw <span className="text-primary">exponential growth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 flex items-center justify-start grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <span className="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">{caseStudy.brand}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-medium mb-4 tracking-tight leading-tight">
                {caseStudy.title}
              </h3>

              <p className="text-foreground/50 text-base leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              <div className={`mt-auto inline-flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${caseStudy.color}`}>
                Case Study Success
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
