
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ChevronUp, Heart } from 'lucide-react';
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
    <footer className="bg-gradient-to-br from-modula-charcoal to-[#292929] text-white pt-16 relative">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#ffffff"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-5">
            <div className="flex flex-col">
              <div className="mb-6 inline-block">
                <Logo />
              </div>
              <p className="text-modula-grey opacity-90 mb-8 text-sm md:text-base leading-relaxed">
                Creating beautiful, responsive websites that elevate your brand and engage your audience. 
                Simplicity meets elegance in our tailored web solutions designed with passion and precision.
              </p>
              <div className="flex space-x-5">
                <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-modula-coral transition-all duration-300 hover:scale-110">
                  <div className="bg-white/10 p-2.5 rounded-full">
                    <Instagram size={18} />
                  </div>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-modula-coral transition-all duration-300 hover:scale-110">
                  <div className="bg-white/10 p-2.5 rounded-full">
                    <Twitter size={18} />
                  </div>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-modula-coral transition-all duration-300 hover:scale-110">
                  <div className="bg-white/10 p-2.5 rounded-full">
                    <Linkedin size={18} />
                  </div>
                </a>
                <a href="mailto:hello@modulastudio.com" aria-label="Email" className="text-white hover:text-modula-coral transition-all duration-300 hover:scale-110">
                  <div className="bg-white/10 p-2.5 rounded-full">
                    <Mail size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Site Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-lg font-medium mb-5 flex items-center">
              <span className="h-5 w-1 bg-modula-coral rounded-full mr-2 inline-block"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-5 flex items-center">
              <span className="h-5 w-1 bg-modula-coral rounded-full mr-2 inline-block"></span>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-modula-grey hover:text-modula-coral transition-all duration-300 flex items-center">
                  <span className="mr-2 text-xs opacity-60">→</span>
                  Branding
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-5 flex items-center">
              <span className="h-5 w-1 bg-modula-coral rounded-full mr-2 inline-block"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">hello@modulastudio.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">+123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-modula-coral mt-1 flex-shrink-0" />
                <span className="text-modula-grey">
                  123 Design Street<br />
                  Creative District<br />
                  Web City, 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-center my-10">
          <button 
            onClick={scrollToTop}
            className="bg-modula-coral hover:bg-opacity-80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-modula-grey mb-4 md:mb-0 flex items-center">
            © {currentYear} Modula Studio. Made with <Heart size={14} className="text-modula-coral mx-1" /> in Web City
          </p>
          <div className="flex space-x-6 text-sm text-modula-grey">
            <a href="#" className="hover:text-modula-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-modula-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
