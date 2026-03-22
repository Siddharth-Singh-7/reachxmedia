import { motion } from 'framer-motion';

const stats = [
  { label: 'Views Generated', value: '25M+', emoji: '👁️' },
  { label: 'Watch Time', value: '200K Hours+', emoji: '⏱️' },
  { label: 'Audience Reached', value: '10M+', emoji: '🚀' },
];

export const Stats = () => {
  return (
    <section className="py-8 px-6 bg-background border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 px-10 py-3 sm:py-0 group cursor-default"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{stat.emoji}</span>
              <span className="text-4xl font-medium text-white group-hover:text-primary transition-colors">{stat.value}</span>
              <span className="text-base text-foreground/40 uppercase tracking-widest group-hover:text-primary/60 transition-colors">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
