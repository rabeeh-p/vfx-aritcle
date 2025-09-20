import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


// INTERFACE FAQ
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}


// FAQ SECTION
const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);



  return (
    <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>



      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>


            <AnimatePresence>
              {openFAQ === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;