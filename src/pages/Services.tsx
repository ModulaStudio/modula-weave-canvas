import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PageHeader from '@/components/PageHeader';
import { Layout, Globe, Rocket, Palette, Video } from 'lucide-react'; // Adjusted icons for branding and design services

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <Layout size={36} />,
      title: "Multi-Page Website Creation",
      description: "We create custom, multi-page websites tailored to your business needs. Perfect for showcasing your brand and services with a seamless user experience.",
    },
    {
      icon: <Globe size={36} />,
      title: "Landing Page Design",
      description: "Quick and effective landing pages designed to capture attention and convert visitors for promotions, products, or services.",
    },
    {
      icon: <Rocket size={36} />,
      title: "Website Redesign & Maintenance",
      description: "We refresh outdated websites with modern designs and provide ongoing maintenance to ensure they remain functional and up-to-date.",
    },
    {
      icon: <Palette size={36} />,
      title: "Logo & Branding Design",
      description: "We craft unique, professional logos and brand identity designs to ensure your business stands out in a competitive market.",
    },
    {
      icon: <Video size={36} />,
      title: "Video Production & Marketing",
      description: "Engage your audience with high-quality promotional videos that highlight your brand story, products, or services.",
    }
  ];

  React.useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if(position.top < window.innerHeight * 0.85) {
          if (element.classList.contains('animate-on-scroll')) {
            element.classList.add('animate-fade-in');
          }
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-modula-beige py-24">
        <div className="container-custom">
          <PageHeader
            title="Our Services"
            subtitle="We offer a range of web design, development, and branding services tailored to your business needs."
          />
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-modula-light-grey">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block py-1 px-3 bg-modula-coral bg-opacity-10 text-modula-coral rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures we deliver exceptional results on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, and target audience."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap outlining the project scope, timeline, and deliverables."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Our team designs and builds your website with a focus on aesthetics and functionality."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your website and provide ongoing maintenance and support."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <div className="text-modula-coral text-4xl font-bold mb-3">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-modula-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and let's create something amazing together.
            </p>
            <a href="/contact" className="bg-modula-coral text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
