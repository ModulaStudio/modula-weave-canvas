import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioProjects = [
  {
    id: 'glowup-beauty',
    title: 'GlowUp Beauty Bar',
    category: 'Beauty & Wellness',
    description: 'A single-page landing site with smooth scroll sections featuring services, testimonials, and contact information.',
    image: '/background.png',
    href: '/portfolio'
  },
  {
    id: 'mombasa-escapes',
    title: 'Mombasa Escapes',
    category: 'Travel & Tourism',
    description: 'A multi-page travel agency website with pages for home, tours, blog, and contact information.',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80',
    href: '/portfolio'
  },
  {
    id: 'coastalfit-studio',
    title: 'CoastalFit Studio',
    category: 'Fitness & Health',
    description: 'A dynamic fitness website featuring an interactive booking form, trainer bios, and class schedules.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    href: '/portfolio'
  },
  {
    id: 'modula-admin',
    title: 'Modula Admin',
    category: 'Dashboard UI',
    description: 'A static admin dashboard UI with sidebar navigation, cards, charts, and a chatbot component.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    href: '/portfolio'
  }
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(portfolioProjects.map(p => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <PageHeader
            title="Our Portfolio"
            subtitle="Take a look at our recent projects that showcase our design and development expertise."
          />

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-modula-coral text-white'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-modula-coral hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT GRID WITH FADE-IN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    href={`/portfolio/${project.id}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA SECTION */}
          <section className="mt-24">
            <div className="bg-modula-light-grey rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Need a custom website for your business?
                  </h2>
                  <p className="text-gray-600">
                    We design and develop tailored websites that align with your brand and business goals. Let's discuss your project!
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
