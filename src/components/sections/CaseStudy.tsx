import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "ReachxMedia helped me grow to 50K in just 2 months with constant support, strategy, communication. Their consistency made all the difference.",
    author: "Zeel Mehta Jain",
    role: "AI Entrepreneur",
    icon: "⭐",
  },
  {
    text: "By far the best video editing team we have ever worked with - quick, communicative, and diligent with the highest quality videos. Will be using again and have recommended to many friends!",
    author: "Tristan Barrett",
    role: "Creative Director @ SpaceGod Studios",
    icon: "🎬",
  },
  {
    text: "Very receptive to feedback, quick to adapt and genuinely collaborative. Their editing always captures the tone and story we're trying to tell, and they deliver with care and attention to detail.",
    author: "Lian Yoo",
    role: "Founder, Nrlyve Beauty",
    icon: "😊",
  },
  {
    text: "Working with ReachxMedia transformed our social media presence. Their creative approach and dedication to understanding our brand made all the difference in our growth journey.",
    author: "Sarah Mitchell",
    role: "Marketing Head @ TechFlow",
    icon: "🚀",
  },
];

export const CaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 px-6 bg-background relative z-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">✨</div>
      <div className="absolute top-40 right-20 text-6xl opacity-20">🎯</div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-20">💫</div>
      <div className="absolute bottom-40 right-10 text-6xl opacity-20">⚡</div>

      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-medium mb-6 tracking-tighter">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Real feedback from real people who trusted us with their brand growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {reviews.map((review, index) => {
            const initialRotation = index % 2 === 0 ? -8 : 8;
            const rotation = initialRotation * (1 - scrollProgress);
            return (
              <motion.div
                key={index}
                style={{ rotate: rotation }}
                className="glass-card rounded-3xl p-8 flex flex-col relative group hover:scale-105 transition-transform duration-300 border border-white/10 h-full"
              >
                <div className="text-6xl mb-6 opacity-90">{review.icon}</div>
                <p className="text-foreground/90 text-base leading-relaxed mb-8 italic font-medium">
                  "{review.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="text-lg font-black tracking-tight text-primary mb-1">{review.author}</h4>
                  <p className="text-foreground/60 text-sm font-medium">{review.role}</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
