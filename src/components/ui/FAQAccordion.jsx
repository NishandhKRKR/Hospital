import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {data.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => toggleOpen(index)}
            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
          >
            <span className="font-semibold text-slate-800 text-lg">{item.question}</span>
            <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
              {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
