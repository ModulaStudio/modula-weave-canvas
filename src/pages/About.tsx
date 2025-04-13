
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Code, FileCode, Figma, Github, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <PageHeader 
            title="About Us" 
            subtitle="Get to know the creative minds behind Modula Studio and our approach to web design."
          />
          
          {/* Brand Story */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Modula Studio was founded with a passion for creating beautiful, functional websites that help small businesses thrive in the digital world.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe in the power of clean design and efficient code. Our approach combines aesthetic beauty with technical excellence to deliver websites that not only look great but perform exceptionally well.
                </p>
                <p className="text-gray-600">
                  Over the years, we've helped dozens of small businesses establish a strong online presence. Our clients appreciate our attention to detail, responsive communication, and commitment to delivering high-quality results.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/brainstorming.jpg" 
                  alt="Team brainstorming session" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-modula-coral rounded-lg -z-10"></div>
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-modula-coral bg-opacity-10 text-modula-coral rounded-full mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  We take pride in our attention to detail and commitment to excellence in every aspect of our work, from design to development.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-modula-coral bg-opacity-10 text-modula-coral rounded-full mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                <p className="text-gray-600">
                  We view each project as a collaboration, working closely with clients to understand their vision and bring it to life through thoughtful design.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-modula-coral bg-opacity-10 text-modula-coral rounded-full mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  We stay at the forefront of web design trends and technologies, continuously expanding our skills to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </section>
          
          {/* Skills & Tools */}
          <section className="mb-24 bg-modula-light-grey py-16 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="mr-2 text-modula-coral" />
                  Development Skills
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-modula-coral h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">TypeScript</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-modula-coral h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-modula-coral h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Tailwind CSS</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-modula-coral h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tools */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FileCode className="mr-2 text-modula-coral" />
                  Design & Collaboration Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <Figma size={20} className="mr-3 text-modula-coral" />
                    <span>Figma</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-modula-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12l4 6-10 12L2 9z"></path>
                    </svg>
                    <span>Sketch</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <Github size={20} className="mr-3 text-modula-coral" />
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-modula-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20h20"></path>
                      <path d="M5 4v10"></path>
                      <path d="M19 4v10"></path>
                      <path d="M5 14h14"></path>
                      <path d="M7 7h.01"></path>
                      <path d="M12 7h.01"></path>
                      <path d="M17 7h.01"></path>
                    </svg>
                    <span>Trello</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-modula-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M15 18h-5"></path>
                      <path d="M10 6h8v4h-8V6Z"></path>
                    </svg>
                    <span>Notion</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-modula-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    <span>Slack</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Personal Touch Section */}
          <section className="mb-16">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Why Choose Modula Studio?</h2>
              <p className="text-gray-600 mb-6">
                We're not just another web design agency. We're a small, passionate team dedicated to crafting exceptional digital experiences for our clients. We take the time to understand your business, your goals, and your audience to create websites that truly reflect who you are and what you do.
              </p>
              <p className="text-gray-600 mb-6">
                Our collaborative approach means you're involved at every stage of the process, ensuring the final product aligns with your vision. We believe in building lasting relationships with our clients, providing ongoing support and guidance even after your website goes live.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="btn-primary">Start Your Project</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
