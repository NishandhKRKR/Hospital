import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../components/common/Button';
import { doctorsData, departmentsData } from '../data/dummyData';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Find a Doctor</h1>
          
          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 py-2">
              <Search className="text-slate-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Search doctors by name or specialty..." 
                className="w-full bg-transparent border-none focus:outline-none text-slate-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-[1px] h-[1px] md:h-8 bg-slate-200 self-center"></div>
            <div className="flex-1 flex items-center px-4 py-2">
              <select 
                className="w-full bg-transparent border-none focus:outline-none text-slate-600 appearance-none cursor-pointer"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departmentsData.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            <Button variant="primary" className="py-3 px-8 md:rounded-full w-full md:w-auto">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {doc.experience}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {departmentsData.find(d => d.id === doc.department)?.name || doc.specialty}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{doc.name}</h3>
                  
                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-start text-sm text-slate-600 gap-3">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{doc.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 gap-3">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>MedCare Prime Main Campus</span>
                    </div>
                  </div>
                  
                  <Button to={`/appointment?doctor=${doc.id}`} variant="outline" className="w-full py-2.5">
                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No doctors found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
