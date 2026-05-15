import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, User, AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';
import { departmentsData, doctorsData } from '../data/dummyData';

const Appointment = () => {
  const [searchParams] = useSearchParams();
  const initialDoctorId = searchParams.get('doctor');
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: initialDoctorId ? parseInt(initialDoctorId) : '',
    date: '',
    time: '',
    patientName: '',
    phone: '',
    email: '',
  });

  const [availableDoctors, setAvailableDoctors] = useState(doctorsData);

  // If a doctor ID is passed in URL, pre-select department
  useEffect(() => {
    if (initialDoctorId) {
      const doc = doctorsData.find(d => d.id === parseInt(initialDoctorId));
      if (doc) {
        setFormData(prev => ({ ...prev, department: doc.department, doctor: doc.id }));
        setAvailableDoctors(doctorsData.filter(d => d.department === doc.department));
      }
    }
  }, [initialDoctorId]);

  const handleDeptChange = (e) => {
    const dept = e.target.value;
    setFormData({ ...formData, department: dept, doctor: '' });
    if (dept) {
      setAvailableDoctors(doctorsData.filter(d => d.department === dept));
    } else {
      setAvailableDoctors(doctorsData);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && formData.department && formData.doctor && formData.date && formData.time) {
      setStep(2);
    } else if (step === 2 && formData.patientName && formData.phone) {
      setStep(3); // Confirmation
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Progress Tracker */}
        <div className="mb-10 flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= num ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-slate-200 text-slate-500'}`}>
              {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Selection */}
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleNext}
                className="p-8 md:p-12 h-full flex flex-col"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h2>
                  <p className="text-slate-500">Select your preferred department, doctor, and time slot.</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Department</label>
                    <select 
                      required
                      value={formData.department}
                      onChange={handleDeptChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="">Select Department</option>
                      {departmentsData.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Doctor</label>
                    <select 
                      required
                      value={formData.doctor}
                      onChange={(e) => setFormData({...formData, doctor: parseInt(e.target.value)})}
                      disabled={!formData.department}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
                    >
                      <option value="">{formData.department ? 'Select Doctor' : 'Select Department First'}</option>
                      {availableDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                          type="date" 
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <select 
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        >
                          <option value="">Time</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <Button type="submit" variant="primary">
                    Next Step
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Step 2: Patient Details */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleNext}
                className="p-8 md:p-12 h-full flex flex-col"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Patient Details</h2>
                  <p className="text-slate-500">Please provide your contact information.</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex items-start gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Please arrive 15 minutes prior to your appointment time for registration.</p>
                  </div>
                </div>

                <div className="mt-10 flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" variant="primary">
                    Confirm Booking
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Appointment Confirmed!</h2>
                <p className="text-slate-600 text-lg mb-8 max-w-md">
                  Thank you, <span className="font-semibold text-slate-800">{formData.patientName}</span>. Your appointment has been successfully booked for 
                  <span className="font-semibold text-slate-800"> {formData.date}</span> at <span className="font-semibold text-slate-800">{formData.time}</span>.
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 w-full max-w-sm mb-8 text-left border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Doctor</p>
                  <p className="font-semibold text-slate-800 mb-4">{doctorsData.find(d => d.id === formData.doctor)?.name}</p>
                  <p className="text-sm text-slate-500 mb-1">Department</p>
                  <p className="font-semibold text-slate-800">{departmentsData.find(d => d.id === formData.department)?.name}</p>
                </div>
                <Button to="/" variant="primary">
                  Return to Home
                </Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
