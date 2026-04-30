"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies based on complexity. A standard MVP typically takes 4-6 weeks, while comprehensive enterprise platforms can span 3-6 months. We define exact milestones during discovery.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, I provide monthly maintenance packages that include security updates, performance monitoring, and priority bug fixes to keep your application running at peak efficiency.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern frontend development using React and Next.js, combined with JavaScript (ES6+). I also have experience integrating MongoDB for full-stack data requirements.",
  },
];


import SectionBackground from "./SectionBackground";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-transparent px-4 md:px-8 transition-colors duration-500 relative" id="faq">
      <SectionBackground variant="minimal" />
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-h1 text-center mb-16 text-on-surface"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center cursor-pointer text-left focus:outline-none"
              >
                <span className="font-bold text-on-surface">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="material-symbols-outlined text-on-surface-variant"
                >
                  expand_more
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                  >
                    <div className="px-6 pb-6 text-on-surface-variant text-sm border-t border-on-surface/5 pt-4">
                      {faq.answer}
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
}
