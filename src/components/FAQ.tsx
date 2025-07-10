import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if we don't see significant savings potential?",
      answer: "We only engage with companies where we can identify substantial annual savings opportunities in the discovery phase. If we can't find meaningful potential, we'll refer you to more suitable solutions at no charge."
    },
    {
      question: "Will this disrupt our current operations?",
      answer: "Our AI solutions integrate seamlessly with your existing systems. We deploy in parallel environments first, ensuring zero disruption to daily operations during the pilot phase."
    },
    {
      question: "How do you guarantee ROI in 90 days?",
      answer: "We provide detailed ROI documentation with verified savings metrics. If documented savings don't meet projections within 90 days, you pay nothing and keep all implemented solutions."
    },
    {
      question: "What happens after the 6-week sprint?",
      answer: "You receive a complete implementation roadmap, trained team, and optional ongoing optimization support. Most clients see 3x additional savings in months 6-12 following our playbook."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="bg-canvas-navy py-20" role="region" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-elevated-card rounded-lg overflow-hidden border border-neutral-stroke"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-canvas-navy transition-colors duration-200 group"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-primary-text font-inter font-semibold text-lg pr-4 group-hover:text-primary-purple transition-colors duration-200" itemProp="name">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-6 h-6 text-primary-magenta group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary-magenta group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    id={`faq-answer-${index}`}
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-body-text font-inter leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;