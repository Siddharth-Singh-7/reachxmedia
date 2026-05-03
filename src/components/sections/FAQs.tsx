import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BGPattern } from '@/components/ui/bg-pattern';

const faqs = [
  {
    question: "Do you guarantee leads?",
    answer: "No. Anyone who guarantees a fixed number of leads is either lying or desperate. We guarantee execution research, scripting, editing, posting, distribution. Authority is what we build. Leads are what authority produces."
  },
  {
    question: "How long before I see results?",
    answer: "Better content and positioning: week 2–3. Engagement shift: month 1. Inbound DMs and bookings: month 2–3, compounding from there.Want instant ROI? Run ads. Want a brand that brings clients to you for years? Give it 90 days."
  },
  {
    question: "Do I have to create content myself?",
    answer: "You record. Once a month. That's it. Half a day, one time per month. We handle research, scripts, editing, posting, repurposing, distribution. We can't replace your face everything else is off your plate."
  },
  {
    question: "What if this doesn't work for me?",
    answer: "Define 'not work' Inconsistent posting, unprofessional content, weak positioning? That won't happen. We guarantee that part. The real risk isn't this not working. It's staying invisible for another 12 months and competing on price."
  },
  {
    question: "How is this different from freelancers or other agencies?",
    answer: "Freelancers edit videos. Agencies post videos. We build authority. Most agencies sell deliverables. We sell a system research, positioning, messaging, distribution. The videos are just the output. And we don't take everyone. We work with founders who already have a real offer. We make experts un-ignorable."
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
