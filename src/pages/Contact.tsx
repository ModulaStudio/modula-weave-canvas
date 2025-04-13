
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <PageHeader 
            title="Contact Us" 
            subtitle="Have a project in mind? Reach out to discuss how we can help bring your vision to life."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="text-modula-coral" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        Mombasa, Kenya<br />
                        86014 - 80100
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="text-modula-coral" size={20} />
                    </div>
                    {/* <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+123 456 7890</p>
                    </div> */}
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="text-modula-coral" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">hellomodulastudio@gmail.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="text-modula-coral" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com/modulastudio.ke" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-modula-light-grey text-modula-charcoal rounded-full hover:bg-modula-coral hover:text-white transition-all">
                      <Instagram size={18} />
                    </a>
                    <a href="https://x.com/ModulaStudio" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-modula-light-grey text-modula-charcoal rounded-full hover:bg-modula-coral hover:text-white transition-all">
                      <Twitter size={18} />
                    </a>
                    {/* <a href="https://linkedin.com" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-modula-light-grey text-modula-charcoal rounded-full hover:bg-modula-coral hover:text-white transition-all">
                      <Linkedin size={18} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">What is your typical process for new projects?</h3>
                <p className="text-gray-600">
                  We start with a discovery call to understand your needs, followed by research and a detailed proposal. After approval, we move through design, development, testing, and launch phases, keeping you involved at every step.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">How long does it take to complete a website?</h3>
                <p className="text-gray-600">
                  Most projects take 4-8 weeks from start to finish, depending on complexity. Simple landing pages may be faster, while more complex sites with custom functionality might take longer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">Do you provide website maintenance services?</h3>
                <p className="text-gray-600">
                  Yes, we offer ongoing maintenance packages to keep your site secure, up-to-date, and running smoothly. These can be customized based on your specific needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">What information do you need to start a project?</h3>
                <p className="text-gray-600">
                  We'll need information about your business, target audience, project goals, design preferences, and any existing brand materials you have. The more details you can provide, the better!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
