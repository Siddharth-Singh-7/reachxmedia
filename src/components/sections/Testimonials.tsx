import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { BGPattern } from '@/components/ui/bg-pattern';

const testimonials = [
  {
    text: "ReachxMedia transformed our social media presence completely. Their strategic approach and creative content helped us grow from 5K to 50K followers in just 3 months!",
    image: "/Ananata%20Chhajer.png",
    name: "Ananta Chhajer",
    role: "Content Creator",
  },
  {
    text: "Working with ReachxMedia was a game-changer. Their team understood our brand voice perfectly and delivered content that truly resonated with our audience.",
    image: "/CA%20Simran%20Bakhtiyar.png",
    name: "CA Simran Bakhtiyar",
    role: "Finance Influencer",
  },
  {
    text: "The quality of content and attention to detail is exceptional. Our engagement rates have tripled since partnering with ReachxMedia. Highly recommend!",
    image: "/Ideaman.png",
    name: "Ideaman",
    role: "Digital Creator",
  },
  {
    text: "ReachxMedia's data-driven approach to content creation helped us achieve our growth goals faster than expected. Their team is professional and results-oriented.",
    image: "/Mahima%20Hans.png",
    name: "Mahima Hans",
    role: "Lifestyle Influencer",
  },
  {
    text: "From strategy to execution, ReachxMedia delivered excellence at every step. Our brand visibility has increased significantly, and we're seeing real business results.",
    image: "/Prityush%20Purwar.png",
    name: "Prityush Purwar",
    role: "Content Creator",
  },
  {
    text: "The team at ReachxMedia is incredibly responsive and creative. They turned our vision into reality and helped us build a strong online community.",
    image: "/Sid%20Upadhyay.png",
    name: "Sid Upadhyay",
    role: "Social Media Creator",
  },
  {
    text: "Outstanding service and results! ReachxMedia helped us create viral content that brought thousands of new customers to our business.",
    image: "/Yash%20Verma.png",
    name: "Yash Verma",
    role: "Brand Influencer",
  },
  {
    text: "Their expertise in social media marketing is unmatched. We've seen consistent growth month over month since working with ReachxMedia.",
    image: "/Ananata%20Chhajer.png",
    name: "Ananta Chhajer",
    role: "Content Creator",
  },
  {
    text: "ReachxMedia doesn't just create content, they create experiences. Our audience engagement has never been higher. Truly a partner in our success.",
    image: "/CA%20Simran%20Bakhtiyar.png",
    name: "CA Simran Bakhtiyar",
    role: "Finance Influencer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-background py-16 relative overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-primary/20 bg-primary/10 py-2 px-6 rounded-full">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Testimonials
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mt-8 text-center">
            What our <span className="text-primary underline">clients say</span>
          </h2>
          <p className="text-center mt-5 text-foreground/60 text-lg">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
