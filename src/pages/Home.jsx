import { motion } from 'framer-motion';
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, Clock, Activity, Users } from 'lucide-react';
import Button from '../components/common/Button';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import FAQAccordion from '../components/ui/FAQAccordion';
import { statsData, departmentsData, doctorsData, faqData } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000"
            alt="Hospital Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light mb-6">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium text-sm">Top Rated Hospital in the Region</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Advanced Care. <br />
              <span className="text-primary-light">Exceptional Health.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Experience world-class medical facilities, distinguished specialists, and compassionate patient care dedicated to your well-being.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button to="/appointment" variant="primary" className="py-4 px-8 text-lg">
                Book an Appointment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="tel:1800MEDCARE" variant="outline" className="py-4 px-8 text-lg border-white text-white hover:bg-white hover:!text-slate-900">
                <PhoneCall className="mr-2 w-5 h-5" /> Emergency: 1-800-MEDCARE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {statsData.map((stat) => (
              <div key={stat.id} className="text-center px-4">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-primary-light font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features / Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose MedCare Prime?</h2>
            <p className="text-slate-600 text-lg">We combine cutting-edge medical technology with empathetic care to ensure the best outcomes for our patients.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise diagnostics and effective treatments.' },
              { icon: Users, title: 'Expert Specialists', desc: 'A team of globally recognized doctors and highly trained medical staff.' },
              { icon: Clock, title: '24/7 Emergency Care', desc: 'Round-the-clock emergency services ready to handle critical situations.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Departments Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Centers of Excellence</h2>
              <p className="text-slate-600 text-lg">Comprehensive healthcare departments equipped to handle complex medical conditions.</p>
            </div>
            <Link to="/departments" className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Departments <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentsData.slice(0, 6).map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-slate-50 rounded-2xl p-8 overflow-hidden hover:bg-primary transition-colors duration-300 border border-slate-100"
              >
                <dept.icon className="w-12 h-12 text-primary group-hover:text-white transition-colors mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-3">{dept.name}</h3>
                <p className="text-slate-600 group-hover:text-white/80 transition-colors mb-6">{dept.description}</p>
                <Link to={`/departments`} className="inline-flex items-center text-primary font-medium group-hover:text-white">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet Our Doctors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Specialists</h2>
            <p className="text-slate-600 text-lg">Highly qualified professionals dedicated to providing the best medical care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctorsData.slice(0, 4).map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">{doc.specialty}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">{doc.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{doc.experience} Experience</p>
                  <Button to="/appointment" variant="outline" className="w-full py-2">Book Visit</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/doctors" variant="primary">View All Doctors</Button>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Patient Stories</h2>
            <p className="text-slate-600 text-lg">Hear from those who have experienced our care firsthand.</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Find answers to common questions about our hospital and services.</p>
          </div>
          <FAQAccordion data={faqData} />
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Need Medical Assistance?</h2>
          <p className="text-xl text-primary-light mb-10">Our emergency team is available 24/7 to provide immediate care.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/appointment" variant="secondary" className="py-4 px-8 text-lg">
              <Calendar className="mr-2 w-5 h-5" /> Book Appointment
            </Button>
            <Button href="tel:1800MEDCARE" variant="outline" className="py-4 px-8 text-lg border-white text-white hover:bg-white hover:!text-slate-900">
              <PhoneCall className="mr-2 w-5 h-5" /> Call 1-800-MEDCARE
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
