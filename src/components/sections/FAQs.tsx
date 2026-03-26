import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BGPattern } from '@/components/ui/bg-pattern';

const faqs = [
  {
    question: "What is the 100% refund policy exactly?",
    answer: "Our 100% refund policy ensures that if we don't beat your current average views within the agreed timeframe, you get a full refund. No questions asked. We are confident in our results-driven strategy."
  },
  {
    question: "Who will create this content exactly?",
    answer: "We have a dedicated team of content strategists, scriptwriters, production experts, and video editors. Each piece of content goes through a rigorous quality check to ensure it aligns with your brand's voice and goals."
  },
  {
    question: "How long will it take to start posting content on my page?",
    answer: "Typically, it takes about 10-14 days to complete the research, scripting, and production phases for your first batch of content. Once the initial cycle is established, we maintain a consistent posting schedule."
  },
  {
    question: "Can I post this content on Youtube & Facebook too?",
    answer: "Absolutely! While we optimize for Instagram, the high-quality video content we produce is perfect for YouTube Shorts, Facebook Reels, and TikTok. It's multi-platform ready content."
  },
  {
    question: "Who will be my point of contact and how do I communicate with them?",
    answer: "You will be assigned a dedicated Account Manager who will be your primary point of contact. Communication happens via Slack or WhatsApp groups for real-time updates and seamless collaboration."
  },
  {
    question: "My requirements are different from the listed package. Can you help me with that too?",
    answer: "Yes, we do offer custom solutions for brands with unique requirements. Book a call with us, and we can tailor a package that fits your specific needs and goals."
  }
];

export const FAQs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "reachxmedia/30min",
      });
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="faqs" className="py-20 bg-background relative z-10 overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(255,255,255,0.03)" />
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left — FAQs */}
          <div className="w-full lg:w-[40%] min-w-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-medium tracking-tighter mb-6"
            >
              FAQs
            </motion.h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-white/10 rounded-xl px-5 overflow-hidden"
                    style={{ backgroundColor: '#121212' }}
                  >
                    <AccordionTrigger className="text-sm md:text-base font-medium text-left hover:text-primary transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/50 text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Right — Cal.com booking */}
          <div className="w-full lg:w-[60%] min-w-0 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-2">
                Let us understand your <span className="text-primary">growth goals</span>
              </h2>
              <p className="text-foreground/50 text-base">
                Book a 30-minute discovery call to discuss your brand's growth strategy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div
                id="my-cal-inline-30min"
                className="rounded-2xl border border-white/10"
                style={{ backgroundColor: '#121212', width: '100%', height: '500px', overflow: 'scroll' }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
