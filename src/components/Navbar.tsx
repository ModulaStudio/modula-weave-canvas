
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`nav-link px-0 bg-transparent hover:bg-transparent focus:bg-transparent ${
                    isActive('/services') ? 'active' : ''
                  }`}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[200px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-2 hover:bg-gray-100 rounded"
                            onClick={closeMenu}
                          >
                            Our Services
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/pricing"
                            className="block p-2 hover:bg-gray-100 rounded"
                            onClick={closeMenu}
                          >
                            Our Pricing
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
              
              {/* Mobile Services Dropdown Header */}
              <div className="text-lg py-2 text-modula-charcoal font-medium">Services</div>
              <Link 
                to="/services" 
                className={`text-lg py-2 pl-4 ${isActive('/services') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                Our Services
              </Link>
              <Link 
                to="/pricing" 
                className={`text-lg py-2 pl-4 ${isActive('/pricing') ? 'text-modula-coral' : 'text-modula-charcoal'}`}
                onClick={closeMenu}
              >
                Our Pricing
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
