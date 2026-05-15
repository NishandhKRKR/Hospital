import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg inline-flex">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                MedCare <span className="text-primary-light">Prime</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering premium healthcare services with state-of-the-art facilities and compassionate care. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-primary-light transition-colors">Our Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-primary-light transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Departments</h3>
            <ul className="space-y-3">
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Cardiology</Link></li>
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Neurology</Link></li>
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Orthopedics</Link></li>
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Pediatrics</Link></li>
              <li><Link to="/departments" className="hover:text-primary-light transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span>123 Health Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span>1-800-MEDCARE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span>info@medcareprime.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} StackNova Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
