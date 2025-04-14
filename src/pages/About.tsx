import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Code, FileCode, Figma, Github, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container-custom">
          <PageHeader 
            title="About Us" 
            subtitle="Get to know the creative minds behind Modula Studio and our approach to web design."
          />

          {/* Brand Story */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
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
          </motion.section>

          {/* Our Values */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Quality Craftsmanship", "Client Partnership", "Continuous Learning"].map((value, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md cursor-default"
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-modula-coral bg-opacity-10 text-modula-coral rounded-full mb-6">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value}</h3>
                  <p className="text-gray-600">
                    {idx === 0 && "We take pride in our attention to detail and commitment to excellence in every aspect of our work, from design to development."}
                    {idx === 1 && "We view each project as a collaboration, working closely with clients to understand their vision and bring it to life through thoughtful design."}
                    {idx === 2 && "We stay at the forefront of web design trends and technologies, continuously expanding our skills to deliver cutting-edge solutions."}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills & Tools */}
          <motion.section 
            className="mb-24 bg-modula-light-grey py-16 px-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="mr-2 text-modula-coral" />
                  Development Skills
                </h3>
                {[
                  { name: 'React', percent: '98%' },
                  { name: 'TypeScript', percent: '95%' },
                  { name: 'JavaScript', percent: '90%' },
                  { name: 'Tailwind CSS', percent: '96%' }
                ].map(skill => (
                  <div key={skill.name} className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percent}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <motion.div
                        className="bg-modula-coral h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percent }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FileCode className="mr-2 text-modula-coral" />
                  Design & Collaboration Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Figma size={20} className="mr-3 text-modula-coral" />
                    <span>Figma</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FileCode size={20} className="mr-3 text-modula-coral" />
                    <span>Sketch</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github size={20} className="mr-3 text-modula-coral" />
                    <span>GitHub</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FileCode size={20} className="mr-3 text-modula-coral" />
                    <span>Trello</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FileCode size={20} className="mr-3 text-modula-coral" />
                    <span>Notion</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-3 bg-white rounded-md shadow-sm cursor-default"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FileCode size={20} className="mr-3 text-modula-coral" />
                    <span>Slack</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Personal Touch Section */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Why Choose Modula Studio?</h2>
              <p className="text-gray-600 mb-6">
                We're not just another web design agency. We're a small, passionate team dedicated to crafting exceptional digital experiences for our clients...
              </p>
              <p className="text-gray-600 mb-6">
              Our collaborative approach means you're involved at every stage of the process, ensuring the final product aligns with your vision.
              We believe in building lasting relationships with our clients, providing ongoing support and guidance even after your website goes live.
              </p>
              <div className="flex justify-center">
                <motion.a 
                  href="/contact" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
