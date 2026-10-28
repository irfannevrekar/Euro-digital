import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

function FAQ({ faqs, title = "Frequently Asked Questions", subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const componentId = useId();
  const prefersReducedMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => currentIndex === index ? null : index);
  };

  return (
    <section aria-labelledby={`${componentId}-heading`} className="overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side - Title and Subtitle */}
          <div className="md:sticky md:top-24 z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
              Need a quick answer?
            </p>
            <h2 id={`${componentId}-heading`} className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--primary-navy)' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg leading-relaxed mb-8 md:mb-0" style={{ color: 'var(--text-secondary)' }}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : Math.min(index * 0.06, 0.24) }}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  id={`${componentId}-question-${index}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`${componentId}-answer-${index}`}
                  className="flex w-full items-center justify-between px-5 py-5 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-600 sm:px-6"
                >
                  <span className="pr-4 text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                    className="flex-shrink-0 text-slate-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`${componentId}-answer-${index}`}
                      role="region"
                      aria-labelledby={`${componentId}-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 sm:px-6">
                        <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 sm:text-base">
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
      </div>
    </section>
  );
}

export default FAQ;

