import { motion } from 'framer-motion';
import { Ambulance, Activity, Clock, Droplet, AlertTriangle, ShieldAlert } from 'lucide-react';
import { useState, useEffect } from 'react';

const EmergencyDashboard = () => {
  // Live simulation data
  const [beds, setBeds] = useState(12);
  const [ambulances, setAmbulances] = useState(5);
  const [waitMinutes, setWaitMinutes] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeds(prev => Math.max(0, Math.min(25, prev + (Math.random() > 0.5 ? 1 : -1))));
      setAmbulances(prev => Math.max(0, Math.min(15, prev + (Math.random() > 0.5 ? 1 : -1))));
      setWaitMinutes(prev => Math.max(5, Math.min(45, prev + (Math.random() > 0.5 ? 2 : -2))));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-28 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <ShieldAlert className="w-10 h-10 text-red-500" />
              Emergency Response Dashboard
            </h1>
            <p className="text-slate-400">Live operational status of MedCare Prime emergency services.</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            Live Updates Active
          </div>
        </div>

        {/* Widgets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Widget 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-24 h-24" /></div>
            <div className="relative z-10">
              <h3 className="text-slate-400 font-medium mb-1">Available ICU Beds</h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-5xl font-bold text-white">{beds}</span>
                <span className="text-slate-500 mb-1">/ 25</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all duration-1000 ${beds < 5 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${(beds/25)*100}%` }}></div>
              </div>
            </div>
          </motion.div>

          {/* Widget 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Ambulance className="w-24 h-24" /></div>
            <div className="relative z-10">
              <h3 className="text-slate-400 font-medium mb-1">Active Ambulances</h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-5xl font-bold text-white">{ambulances}</span>
                <span className="text-slate-500 mb-1">on route</span>
              </div>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-2 flex-1 rounded-sm transition-colors duration-500 ${i < ambulances ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Widget 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-24 h-24" /></div>
            <div className="relative z-10">
              <h3 className="text-slate-400 font-medium mb-1">ER Wait Time</h3>
              <div className="flex items-end gap-3 mb-4">
                <span className={`text-5xl font-bold transition-colors duration-1000 ${waitMinutes > 30 ? 'text-red-400' : 'text-yellow-400'}`}>{waitMinutes}</span>
                <span className="text-slate-500 mb-1">mins</span>
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-yellow-500" /> Triage depends on severity
              </p>
            </div>
          </motion.div>

          {/* Widget 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Droplet className="w-24 h-24" /></div>
            <div className="relative z-10">
              <h3 className="text-slate-400 font-medium mb-4">Blood Availability</h3>
              <div className="grid grid-cols-4 gap-2">
                {['O+', 'O-', 'A+', 'B+'].map((type, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-full h-10 rounded flex items-center justify-center font-bold mb-1 ${i === 1 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-700 text-white'}`}>
                      {type}
                    </div>
                    <span className="text-xs text-slate-500">{i === 1 ? 'Low' : 'Adequate'}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default EmergencyDashboard;
