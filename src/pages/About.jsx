import { motion } from 'framer-motion';
import { Award, ShieldPlus, Heart, Users } from 'lucide-react';
import Button from '../components/common/Button';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About MedCare Prime</h1>
        <p className="text-primary-light text-lg max-w-2xl mx-auto">
          A legacy of excellence, compassion, and innovation in healthcare.
        </p>
      </div>

      {/* Story & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Founded in 2005, MedCare Prime Hospital began with a simple mission: to provide the highest standard of medical care to our community. Over the years, we have grown from a small clinic to a state-of-the-art multi-specialty hospital.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Today, we are proud to be recognized as a leader in medical innovation, patient safety, and compassionate care. Our dedicated team of specialists works tirelessly to ensure that every patient receives personalized treatment.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Hospital Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our everyday interactions and medical decisions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy, respect, and kindness." },
            { icon: ShieldPlus, title: "Integrity", desc: "Maintaining the highest ethical standards in all our practices." },
            { icon: Award, title: "Excellence", desc: "Striving for continuous improvement in healthcare delivery." },
            { icon: Users, title: "Teamwork", desc: "Collaborating across disciplines to provide holistic care." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Leadership in Healthcare</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
              "Our vision is to set a global standard in healthcare by integrating cutting-edge technology with human-centric care. We believe that true healing begins with trust and ends with exceptional medical outcomes."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-xl">Dr. Robert H. Carter</h4>
              <p className="text-primary-light">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
