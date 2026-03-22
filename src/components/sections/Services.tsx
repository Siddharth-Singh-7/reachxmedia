import { motion } from 'framer-motion';
import { Video, Edit3, Palette, Film, Users, Bot } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

const leftCards = [
  { title: 'Lead Creatives', icon: Video, rotate: -6 },
  { title: 'Content Writers', icon: Edit3, rotate: -4 },
  { title: 'Designers', icon: Palette, rotate: -7 },
];

const rightCards = [
  { title: 'World-class Editors', icon: Film, rotate: 6 },
  { title: 'Project Managers', icon: Users, rotate: 4 },
  { title: 'Virtual Assistants', icon: Bot, rotate: 7 },
];

const ServiceCard = ({ title, icon: Icon, rotate, delay }: {
  title: string;
  icon: any;
  rotate: number;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileHover={{ rotate: 0, scale: 1.04 }}
    style={{ rotate: `${rotate}deg` }}
    className="w-[240px] h-[190px] rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center gap-3 p-5 cursor-pointer hover:border-primary/40 hover:bg-white/[0.06] transition-colors duration-300 shadow-2xl"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
    </div>
    <span className="text-xl font-medium text-white/70 text-center leading-tight">{title}</span>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background relative z-10 overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-3 items-center gap-12">

          {/* Left Column */}
          <div className="flex flex-col gap-6 items-center">
            {leftCards.map((card, i) => (
              <ServiceCard key={i} {...card} delay={i * 0.1} />
            ))}
          </div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-4">
              What <span className="text-primary">we do</span>
            </h2>
            <p className="text-foreground/50 text-base md:text-lg leading-relaxed whitespace-nowrap">
              Imagine an in-house content team you never<br />have to manage.
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 items-center">
            {rightCards.map((card, i) => (
              <ServiceCard key={i} {...card} delay={0.3 + i * 0.1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
