
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo small={isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>
              Portfolio
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-modula-charcoal focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-lg py-2 ${isActive('/') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className={`text-lg py-2 ${isActive('/portfolio') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`text-lg py-2 ${isActive('/about') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg py-2 ${isActive('/contact') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
