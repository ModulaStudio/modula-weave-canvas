
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-br from-modula-charcoal to-[#292929] text-white pt-10 relative">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#ffffff"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="mb-4 inline-block">
              <Logo small />
            </div>
            <p className="text-modula-grey text-sm mb-4 leading-relaxed max-w-xs">
              Creating beautiful, responsive websites that elevate your brand and engage your audience.
            </p>
            <div className="flex space-x-3 mb-6">
              <a href="https://instagram.com/modulastudio.ke" aria-label="Instagram" className="text-white hover:text-modula-coral transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://x.com/ModulaStudio" aria-label="Twitter" className="text-white hover:text-modula-coral transition-all duration-300">
                <Twitter size={16} />
              </a>
              {/* <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-modula-coral transition-all duration-300">
                <Linkedin size={16} />
              </a> */}
              <a href="mailto:hellomodulastudio@gmail.com" aria-label="Email" className="text-white hover:text-modula-coral transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-sm font-medium mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300">
                  Branding
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-sm font-medium mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={14} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">hellomodulastudio@gmail.com</span>
              </li>
              {/* <li className="flex items-start space-x-2">
                <Phone size={14} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">+123 456 7890</span>
              </li> */}
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">
                  Mombasa, Kenya.
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-center my-6">
          <button 
            onClick={scrollToTop}
            className="bg-modula-coral hover:bg-opacity-80 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-modula-grey mb-2 md:mb-0">
            © {currentYear} Modula Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 text-modula-grey">
            <a href="#" className="hover:text-modula-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-modula-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

