import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

interface FlipCardData {
  name: string;
  username: string;
  image: string;
  bio: string;
  stats: {
    following: number;
    followers: number;
    posts: number;
  };
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface FlipCardProps {
  data: FlipCardData;
}

export const FlipCard: React.FC<FlipCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full aspect-[4/5] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          
          <div className="absolute bottom-10 left-10 z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter text-white">
              {data.name}
            </h3>
            <p className="text-primary text-lg font-bold">@{data.username}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl backface-hidden glass-card border border-white/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full h-full p-10 flex flex-col justify-between">
            {/* Profile Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="text-2xl font-black text-white">{data.name}</h4>
                  <p className="text-primary text-sm font-bold">@{data.username}</p>
                </div>
              </div>

              <p className="text-foreground/80 text-base leading-relaxed mb-8">
                {data.bio}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-2xl font-black text-white">{data.stats.following}</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Following</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl font-black text-white">{data.stats.followers}</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Followers</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl font-black text-white">{data.stats.posts}</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Posts</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {data.socialLinks.github && (
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {data.socialLinks.twitter && (
                <a
                  href={data.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
