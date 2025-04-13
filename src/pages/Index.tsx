
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
              <span className="inline-block py-1 px-3 bg-modula-coral bg-opacity-10 text-modula-coral rounded-full text-sm font-medium mb-4">
                Web Design Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Crafting <span className="text-modula-coral">beautiful</span> digital experiences
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We design and build modern, responsive websites that help small businesses stand out from the crowd. Our focus is on creating clean, user-friendly sites that drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-primary">
                  View Our Work
                </Link>
                <Link to="/contact" className="btn-outline">
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
                    className="rounded-2xl shadow-2xl"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive web design and development services to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <ServiceCard 
                icon={<Layout size={36} />}
                title="Web Design"
                description="Beautiful, intuitive designs that engage your visitors and reflect your brand's unique identity."
              />
            </div>
            <div className="animate-on-scroll">
              <ServiceCard
                icon={<Code size={36} />}
                title="Web Development"
                description="Clean, efficient code that ensures your website loads quickly and functions flawlessly."
              />
            </div>
            <div className="animate-on-scroll">
              <ServiceCard
                icon={<Palette size={36} />}
                title="UI/UX Design"
                description="User-centered design that creates seamless, enjoyable experiences for your customers."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 bg-modula-coral bg-opacity-10 text-modula-coral rounded-full text-sm font-medium mb-4">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work that showcases our design philosophy and technical expertise.
            </p>
          </div>
          
          {/* Featured Project */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center animate-on-scroll">
            <div className="md:col-span-6">
              <img 
                src="/background.png" 
                alt="GlowUp Beauty Bar Website" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-6">
              <span className="text-sm text-modula-coral uppercase tracking-wider">Beauty & Wellness</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">GlowUp Beauty Bar</h3>
              <p className="text-gray-600 mb-6">
                A single-page landing site for a local beauty salon featuring a clean, elegant design with smooth scrolling sections for services, testimonials, and contact information.
              </p>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-modula-coral font-medium hover:underline"
              >
                View Project Details
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Second Featured Project */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-on-scroll">
            <div className="md:col-span-6 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80" 
                alt="Mombasa Escapes Website" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-6 md:order-1">
              <span className="text-sm text-modula-coral uppercase tracking-wider">Travel & Tourism</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Mombasa Escapes</h3>
              <p className="text-gray-600 mb-6">
                A multi-page website for a travel agency featuring image-rich layouts, interactive tour listings, and an engaging blog section to inspire wanderlust.
              </p>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-modula-coral font-medium hover:underline"
              >
                View Project Details
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn-primary">
              Browse All Projects
            </Link>
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
            <Link to="/contact" className="bg-modula-coral text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium">
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
