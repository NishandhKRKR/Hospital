import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass w-full border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <HeartPulse className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-tight">
              MedCare <span className="text-primary">Prime</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">1-800-MEDCARE</span>
            </div>
            <Link
              to="/emergency"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-red-500/30 active:scale-95 flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              Emergency
            </Link>
            <Link
              to="/appointment"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden glass absolute w-full left-0 top-20 border-b border-gray-200/50 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-primary bg-primary/10' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-600 px-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold">1-800-MEDCARE</span>
              </div>
              <Link
                to="/emergency"
                onClick={() => setIsOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                <AlertTriangle className="w-4 h-4" />
                Emergency
              </Link>
              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
