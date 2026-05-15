import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-primary pt-32 pb-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-primary-light text-lg max-w-2xl mx-auto">
          We are here to assist you. Reach out to us for appointments, emergencies, or general inquiries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Contact Info Panel */}
          <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                    <p className="text-slate-400">123 Health Avenue,<br />Medical District,<br />NY 10001, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone Numbers</h4>
                    <p className="text-slate-400 mb-1">Emergency: <span className="text-white font-medium">1-800-MEDCARE</span></p>
                    <p className="text-slate-400">Reception: <span className="text-white font-medium">+1 (555) 123-4567</span></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                    <p className="text-slate-400">info@medcareprime.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-light" /> Working Hours
              </h4>
              <p className="text-slate-400 mb-2 flex justify-between"><span>Mon - Sat:</span> <span className="text-white">8:00 AM - 8:00 PM</span></p>
              <p className="text-slate-400 flex justify-between"><span>Emergency:</span> <span className="text-red-400 font-medium">24/7 Available</span></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-10 bg-white">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                  <option>General Inquiry</option>
                  <option>Medical Records Request</option>
                  <option>Billing Question</option>
                  <option>Feedback/Complaint</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full md:w-auto">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-300">
           {/* Embedded Google Maps iframe would go here. Using an image placeholder for the demo. */}
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map Location" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 rounded-xl shadow-lg font-semibold text-slate-800 flex items-center gap-2">
               <MapPin className="text-primary w-5 h-5" /> MedCare Prime Hospital Location
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
