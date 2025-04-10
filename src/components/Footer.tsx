
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-modula-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="flex flex-col">
              <div className="mb-4 inline-block">
                <Logo />
              </div>
              <p className="text-modula-grey opacity-80 mb-6">
                Creating beautiful, responsive websites that elevate your brand and engage your audience. 
                Simplicity meets elegance in our tailored web solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-modula-coral transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-modula-coral transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-modula-coral transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:hello@modulastudio.com" aria-label="Email" className="text-white hover:text-modula-coral transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Site Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-lg font-medium mb-4">Site</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-modula-grey hover:text-modula-coral transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-modula-grey hover:text-modula-coral transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-modula-grey hover:text-modula-coral transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-modula-grey hover:text-modula-coral transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-modula-grey hover:text-modula-coral transition-colors">Web Design</a></li>
              <li><a href="#" className="text-modula-grey hover:text-modula-coral transition-colors">Development</a></li>
              <li><a href="#" className="text-modula-grey hover:text-modula-coral transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-modula-grey hover:text-modula-coral transition-colors">Branding</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-modula-grey">hello@modulastudio.com</li>
              <li className="text-modula-grey">+123 456 7890</li>
              <li className="text-modula-grey">
                123 Design Street<br />
                Creative District<br />
                Web City, 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-modula-grey mb-4 md:mb-0">
            © {currentYear} Modula Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-modula-grey">
            <a href="#" className="hover:text-modula-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-modula-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
