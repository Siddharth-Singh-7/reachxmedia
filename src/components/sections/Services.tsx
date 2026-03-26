import { motion } from 'framer-motion';
import { Video, Edit3, Palette, Film, Users, Bot } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

const services = [
  {
    icon: Video,
    title: 'Lead Creatives',
    description: 'Strategic content direction that shapes your brand voice and drives audience engagement.',
  },
  {
    icon: Film,
    title: 'World-class Editors',
    description: 'High-fidelity video editing that transforms raw footage into scroll-stopping content.',
  },
  {
    icon: Edit3,
    title: 'Content Writers',
    description: 'Compelling scripts and captions crafted to convert viewers into paying customers.',
  },
  {
    icon: Users,
    title: 'Project Managers',
    description: 'Dedicated managers who keep every deliverable on time, every single month.',
  },
  {
    icon: Palette,
    title: 'Designers',
    description: 'Thumb-stopping visuals and thumbnails built to maximise click-through rates.',
  },
  {
    icon: Bot,
    title: 'Virtual Assistants',
    description: 'Behind-the-scenes support so you never have to worry about the small stuff.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background relative z-10 overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
            What <span className="text-primary">we do</span>
          </h2>
          <p className="text-foreground/50 text-base md:text-lg">
            Imagine an in-house content team you never have to manage.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl bg-[#111] border border-white/8 hover:bg-[#161616] hover:border-white/15 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-white mb-2">{service.title}</h3>
              <p className="text-foreground/40 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
