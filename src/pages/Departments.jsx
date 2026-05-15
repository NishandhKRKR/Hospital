import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users } from 'lucide-react';
import Button from '../components/common/Button';
import { departmentsData } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Departments = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Centers of Excellence</h1>
        <p className="text-primary-light text-lg max-w-2xl mx-auto">
          Explore our specialized medical departments equipped with advanced technology and expert professionals.
        </p>
      </div>

      {/* Departments List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 space-y-12">
        {departmentsData.map((dept, idx) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Dept Info */}
              <div className="lg:w-1/3 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-center">
                <dept.icon className="w-16 h-16 text-primary-light mb-6" />
                <h2 className="text-3xl font-bold mb-4">{dept.name}</h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  {dept.description}
                </p>
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <Users className="w-5 h-5 text-primary-light" />
                  <span>{dept.specialists} Specialist Doctors</span>
                </div>
              </div>

              {/* Treatments & CTA */}
              <div className="lg:w-2/3 p-8 md:p-10 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> Key Treatments & Services
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {dept.treatments.map((treatment, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 rounded-full p-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-slate-700 font-medium">{treatment}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <Link to="/doctors" className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
                    View Department Doctors <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Button to="/appointment" variant="primary" className="w-full sm:w-auto">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
