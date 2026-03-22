import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ElegantShape } from '@/components/ui/shape-landing-hero';

const influencers = [
  {
    name: 'Kasturi Jha',
    followers: '194K Followers',
    image: '/Kasturi%20Jha.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'Mahima Hans',
    followers: '74.2K Followers',
    image: '/Mahima%20Hans-1.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'Ananta Chhajer',
    followers: '471K Followers',
    image: '/Ananata%20Chhajer.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'idea____man',
    followers: '1M Followers',
    image: '/Ideaman.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'Damini Tripathi',
    followers: '751K Followers',
    image: '/Damini%20Tripathi.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'Yash Verma',
    followers: '17K Followers',
    image: '/Yash%20Verma.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'dhairyadecodes',
    followers: '27.6K Followers',
    image: '/Dhairya%20Gangwani.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'CA Simran Bakhtiyar',
    followers: '365K Followers',
    image: '/CA%20Simran%20Bakhtiyar.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
  },
  {
    name: 'Prityush Purwar',
    followers: '13K Followers',
    image: '/Prityush%20Purwar.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
    platform: 'linkedin',
  },
  {
    name: 'Sid Upadhyay',
    followers: '30K+ Followers',
    image: '/Sid%20Upadhyay.png',
    height: 'h-[240px] sm:h-[280px] md:h-[320px]',
    platform: 'linkedin',
  },
];

const col1 = [...influencers];
const col2 = [...influencers.slice(4), ...influencers.slice(0, 4)];

export const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-12 lg:min-h-screen lg:py-20">
      {/* Elegant floating shapes background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.05] blur-3xl pointer-events-none" />
      <ElegantShape delay={0.3} width={500} height={120} rotate={12} gradient="from-primary/[0.12]" className="left-[-5%] top-[20%]" />
      <ElegantShape delay={0.5} width={350} height={90} rotate={-15} gradient="from-primary/[0.08]" className="right-[-3%] top-[65%]" />
      <ElegantShape delay={0.4} width={250} height={65} rotate={-8} gradient="from-primary/[0.10]" className="left-[8%] bottom-[12%]" />
      <ElegantShape delay={0.6} width={180} height={50} rotate={20} gradient="from-primary/[0.07]" className="right-[18%] top-[12%]" />
      <ElegantShape delay={0.7} width={130} height={35} rotate={-25} gradient="from-primary/[0.09]" className="left-[22%] top-[8%]" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 w-full lg:w-[650px] space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05]">
              Stop Chasing Leads. We Build the Content Ecosystem That Makes {' '}
              <span className="text-primary">High-Ticket Clients </span>
            Chase You.
            </h1>

            <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
              We install the complete, 10-step inbound marketing 
              infrastructure that completely removes you from the 
              daily grind and scales your inbound lead flow.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="rounded-full h-14 px-10 text-base font-bold bg-primary text-background hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Discovery Call
              </Button>
            </div>
          </motion.div>

          {/* Mobile photo grid - 2 columns, fixed height, shown only below lg */}
          <div className="lg:hidden w-full grid grid-cols-2 gap-3 mt-4">
            {influencers.slice(0, 6).map((person, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden h-[160px] border border-primary/10">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center gap-1 mb-0.5">
                    <img src={person.platform === 'linkedin' ? '/linkedin.png' : '/instas.png'} alt={person.platform === 'linkedin' ? 'LinkedIn' : 'Instagram'} className="w-7 h-7 rounded object-contain" />
                    <span className="text-[9px] font-medium text-white/80">{person.followers}</span>
                  </div>
                  <p className="text-[10px] font-medium text-white truncate">{person.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Animated columns, desktop only */}
          <div className="hidden lg:block relative flex-1 h-[700px] w-full max-w-[600px] lg:max-w-none">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-primary/10 blur-[120px] rounded-full" />
            
            <div className="relative w-full h-full flex gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-end overflow-hidden lg:pr-12">
              {/* Column 1 - Scrolling Down */}
              <motion.div
                animate={{ y: [0, -1600] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px]"
              >
                {[...col1, ...col1, ...col1].map((person, i) => (
                  <div 
                    key={`col1-${i}`} 
                    className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 border border-primary/10 ${person.height}`}
                  >
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                      <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                        <img src={person.platform === 'linkedin' ? '/linkedin.png' : '/instas.png'} alt={person.platform === 'linkedin' ? 'LinkedIn' : 'Instagram'} className="w-8 h-8 sm:w-9 sm:h-9 rounded object-contain flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs font-medium text-white/90">{person.followers}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-medium text-white truncate">{person.name}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Column 2 - Scrolling Up */}
              <motion.div
                animate={{ y: [-1600, 0] }}
                transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] pt-12 sm:pt-16 md:pt-20"
              >
                {[...col2, ...col2, ...col2].map((person, i) => (
                  <div 
                    key={`col2-${i}`} 
                    className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 border border-primary/10 ${person.height}`}
                  >
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                      <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                        <img src={person.platform === 'linkedin' ? '/linkedin.png' : '/instas.png'} alt={person.platform === 'linkedin' ? 'LinkedIn' : 'Instagram'} className="w-8 h-8 sm:w-9 sm:h-9 rounded object-contain flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs font-medium text-white/90">{person.followers}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-medium text-white truncate">{person.name}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
