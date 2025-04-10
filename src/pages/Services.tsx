
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PageHeader from '@/components/PageHeader';
import { Code, Layout, Palette, Globe, Database, LineChart, Share2, Search, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <Layout size={36} />,
      title: "Web Design",
      description: "Beautiful, intuitive designs tailored to your brand that engage visitors and drive conversions. We focus on user experience and modern aesthetics.",
    },
    {
      icon: <Code size={36} />,
      title: "Web Development",
      description: "Clean, efficient code built on modern frameworks that ensure your website loads quickly and functions flawlessly across all devices and browsers.",
    },
    {
      icon: <Palette size={36} />,
      title: "UI/UX Design",
      description: "User-centered design that creates seamless, enjoyable experiences. We craft interfaces that are intuitive, accessible, and visually appealing.",
    },
    {
      icon: <Globe size={36} />,
      title: "Responsive Design",
      description: "Websites that look and perform beautifully on any device. We ensure optimal viewing and interaction experiences across desktops, tablets, and phones.",
    },
    {
      icon: <Database size={36} />,
      title: "CMS Integration",
      description: "Custom content management systems that make it easy for you to update and maintain your website without technical knowledge.",
    },
    {
      icon: <LineChart size={36} />,
      title: "Analytics Setup",
      description: "Implementation of tracking tools to monitor website performance, user behavior, and conversion rates to help optimize your digital strategy.",
    },
    {
      icon: <Search size={36} />,
      title: "SEO Optimization",
      description: "Strategic optimization to improve your website's visibility in search engine results and drive more organic traffic to your business.",
    },
    {
      icon: <Share2 size={36} />,
      title: "Social Media Integration",
      description: "Seamless integration of social media platforms to enhance your online presence and enable easy sharing of your content.",
    },
    {
      icon: <Rocket size={36} />,
      title: "Performance Optimization",
      description: "Fine-tuning of your website's speed and performance to ensure fast loading times and smooth operation for all users.",
    }
  ];

  // Simple scroll animation
  React.useEffect(() => {
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
      <section className="bg-gradient-to-br from-white to-modula-beige py-24">
        <div className="container-custom">
          <PageHeader
            title="Our Services"
            subtitle="We offer comprehensive web design and development solutions tailored to your unique business needs."
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
