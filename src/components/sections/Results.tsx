import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    brand: 'TechCorp',
    logo: 'https://via.placeholder.com/150x50/212121/d4ff00?text=TechCorp',
    title: '1100% Increase in views within 45 days',
    description: "TechCorp's Instagram reels used to get an average of 300-400 organic views. After partnering with us, their average views on reels skyrocketed to 3500 in less than 45 days.",
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    brand: 'StartupX',
    logo: 'https://via.placeholder.com/150x50/212121/d4ff00?text=StartupX',
    title: '50,000 followers and 5 million lifetime views in 6 months',
    description: "StartupX's personal brand page gained over 50,000 followers and over 5 million views in less than 6 months. ReachxMedia helped build their personal brand from day 1.",
    color: 'bg-primary/10 text-primary',
  },
  {
    brand: 'BrandY',
    logo: 'https://via.placeholder.com/150x50/212121/d4ff00?text=BrandY',
    title: '800% more virality and 6x growth in average views',
    description: "BrandY created a reel in house and it got 6800 views. We created a reel on the exact same topic and it went viral with over 61,000 views!",
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
                <div className="h-12 w-32 flex items-center justify-start grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <span className="text-2xl font-bold tracking-tighter uppercase">{caseStudy.brand}</span>
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
