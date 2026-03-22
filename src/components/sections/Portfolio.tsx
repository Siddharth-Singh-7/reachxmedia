import React from 'react';
import { motion } from 'framer-motion';
import { BGPattern } from '@/components/ui/bg-pattern';

const shortVideos = [
  { vimeoId: '1175964818', title: 'Short Form Reel', subtitle: 'Instagram Reel', tag: 'VIRAL' },
  { vimeoId: '1175964537', title: 'Short Form Reel', subtitle: 'Instagram Reel', tag: 'TRENDING' },
  { vimeoId: '1175963351', title: 'Short Form Reel', subtitle: 'Instagram Reel', tag: 'POPULAR' },
  { vimeoId: '1175963001', title: 'Short Form Reel', subtitle: 'Instagram Reel', tag: 'HOT' },
  { vimeoId: '1175978085', title: 'Short Form Reel', subtitle: 'Instagram Reel', tag: 'NEW' },
];

const longVideos = [
  { vimeoId: '1175967287', title: 'Brand Documentary', subtitle: 'Long Form', tag: 'FEATURED' },
  { vimeoId: '1175970440', title: 'Founder Story', subtitle: 'Long Form', tag: 'POPULAR' },
  { vimeoId: '1175972779', title: 'Product Deep Dive', subtitle: 'Long Form', tag: 'TRENDING' },
];

const VimeoCard = ({ item, i, short }: { item: { vimeoId: string; title: string; subtitle: string; tag: string }; i: number; short: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative overflow-hidden shadow-2xl border border-white/15 bg-black flex-shrink-0 ${
      short ? 'rounded-xl w-[320px] h-[560px]' : 'rounded-2xl w-full'
    }`}
    style={short ? {} : { aspectRatio: '16/9' }}
  >
    {item.vimeoId ? (
      <iframe
        src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=0&loop=1&muted=1&background=0&controls=1&title=0&byline=0&portrait=0`}
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-white/5">
        <span className="text-foreground/30 text-sm">Coming soon</span>
      </div>
    )}
  </motion.div>
);



export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative z-10 overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tighter">
            Videos that rapidly grow your brand <span className="text-primary underline decoration-primary/30">reach</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Our system helps you gain consistent organic followers and turn them into paying customers for profitable growth
          </p>
        </div>

        {/* Short videos row */}
        <div className="mb-12">
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
              Short-Form Videos <span className="text-primary">That Drive Virality</span>
            </h3>
          </div>
          <div className="flex justify-start items-end gap-6 mb-8 overflow-x-auto pb-2">
            {shortVideos.map((item, i) => (
              <VimeoCard key={i} item={item} i={i} short={true} />
            ))}
          </div>
        </div>

        {/* Long videos row */}
        <div>
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
              Podcasts and <span className="text-primary">Long Form</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {longVideos.map((item, i) => (
              <VimeoCard key={i} item={item} i={i} short={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
