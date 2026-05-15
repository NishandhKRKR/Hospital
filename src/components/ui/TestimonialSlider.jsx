import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../../data/dummyData';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-12">
      <div className="overflow-hidden relative h-[250px] md:h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-medium text-slate-700 italic mb-8">
              "{testimonialsData[currentIndex].text}"
            </p>
            <h4 className="font-semibold text-lg text-primary">
              - {testimonialsData[currentIndex].name}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TestimonialSlider;
