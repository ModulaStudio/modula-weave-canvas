import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, Palette, Rocket, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Index: React.FC = () => {
  // Simple scroll animation
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight * 0.85) {
          if (element.classList.contains('animate-on-scroll')) {
            element.classList.add('animate-fade-in');
          }
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-white to-modula-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 bg-modula-coral bg-opacity-10 text-modula-coral rounded-full text-sm font-medium mb-4 animate-fade-in">
                Web Design Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-title">
                Crafting <span className="text-modula-coral">beautiful</span> digital experiences
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We design and build modern, responsive websites that help small businesses stand out from the crowd. Our focus is on creating clean, user-friendly sites that drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-primary hover:scale-105 transition-all duration-300">
                  View Our Work
                </Link>
                <Link to="/contact" className="btn-outline hover:scale-105 transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-modula-coral rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-modula-beige rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="relative">
                  <img 
                    src="/new logo.png" 
                    alt="Modern laptop with code" 
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-modula-light-grey">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 bg-modula-coral bg-opacity-10 text-modula-coral rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive web design and development services to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <ServiceCard 
                icon={<Layout size={36} className="transition-transform duration-300 hover:rotate-12" />}
                title="Web Design"
                description="Beautiful, intuitive designs that engage your visitors and reflect your brand's unique identity."
              />
            </div>
            <div className="animate-on-scroll">
              <ServiceCard
                icon={<Code size={36} className="transition-transform duration-300 hover:rotate-12" />}
                title="Web Development"
                description="Clean, efficient code that ensures your website loads quickly and functions flawlessly."
              />
            </div>
            <div className="animate-on-scroll">
              <ServiceCard
                icon={<Palette size={36} className="transition-transform duration-300 hover:rotate-12" />}
                title="UI/UX Design"
                description="User-centered design that creates seamless, enjoyable experiences for your customers."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-modula-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your online presence?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's work together to create a website that captures your brand essence and helps you reach your business goals.
            </p>
            <Link to="/contact" className="bg-modula-coral text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
