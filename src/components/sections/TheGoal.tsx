import React from 'react';
import { motion } from 'framer-motion';

export const TheGoal = () => {
  return (
    <section className="py-24 px-6 bg-background relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                The <span className="text-primary">Goal</span>
              </h2>
              <span className="text-primary text-3xl leading-none" style={{ rotate: '-20deg', display: 'inline-block' }}>✦</span>
            </div>
            <p className="text-foreground/50 text-lg">
              We handle the vision and the work behind it.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-5 text-foreground/70 text-base md:text-lg leading-relaxed"
          >
            <p>Show up once a month. We take care of the rest.</p>
            <p>
              Most clients film just 3–5 hours, and we turn that into consistent,
              high-performing content. Already have footage? We can work with that too.
            </p>
            <p>Content built to grow your brand and drive real results.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
