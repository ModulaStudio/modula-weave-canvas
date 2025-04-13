
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Globe, Calendar, Layers, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for projects - in a real app, this would come from an API or database
const projectsData = {
  'glowup-beauty': {
    title: 'GlowUp Beauty Bar',
    category: 'Beauty & Wellness',
    description: 'A single-page landing site with smooth scroll sections featuring services, testimonials, and contact information.',
    fullDescription: 'GlowUp Beauty Bar needed an elegant yet modern website to showcase their premium beauty services. We created a smooth-scrolling single page experience that guides potential customers through their offerings, showcases glowing testimonials, and provides easy contact options. The design features soft pastel tones with bold typography to reflect their upscale yet approachable brand.',
    image: '/background.png',
    gallery: [
      '/background2.png',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Smooth scrolling navigation', 'Service cards with hover effects', 'Testimonial carousel', 'Mobile-responsive design', 'Contact form with validation'],
    technologies: ['HTML5', 'CSS3/TailwindCSS', 'JavaScript', 'Responsive Design'],
    completionDate: 'March 2023',
    clientUrl: 'https://glowupbeauty.example.com'
  },
  'mombasa-escapes': {
    title: 'Mombasa Escapes',
    category: 'Travel & Tourism',
    description: 'A multi-page travel agency website with pages for home, tours, blog, and contact information.',
    fullDescription: 'Mombasa Escapes required a comprehensive website to showcase their stunning travel destinations and tour packages. We developed a multi-page site with intuitive navigation, visually appealing tour listings, an informative blog section, and streamlined contact options. The design captures the vibrant essence of East African travel experiences with immersive imagery and thoughtful user experience.',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Multi-page architecture', 'Tour package listings', 'Blog with categories', 'Interactive map integration', 'Booking inquiry form'],
    technologies: ['HTML5', 'CSS3/TailwindCSS', 'JavaScript', 'Responsive Design'],
    completionDate: 'June 2023',
    clientUrl: 'https://mombasaescapes.example.com'
  },
  'coastalfit-studio': {
    title: 'CoastalFit Studio',
    category: 'Fitness & Health',
    description: 'A dynamic fitness website featuring an interactive booking form, trainer bios, and class schedules.',
    fullDescription: 'CoastalFit Studio needed a functional website that would not only showcase their state-of-the-art facilities and expert trainers but also provide an easy way for clients to book classes. We designed a dynamic site featuring an interactive booking system, detailed trainer profiles, and a comprehensive class schedule. The design emphasizes energy and wellness through a clean layout with bold accents.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Interactive class booking system', 'Trainer profiles', 'Dynamic class schedule', 'Membership options', 'Client testimonials'],
    technologies: ['HTML5', 'CSS3/TailwindCSS', 'JavaScript', 'Form validation'],
    completionDate: 'September 2023',
    clientUrl: 'https://coastalfit.example.com'
  },
  'modula-admin': {
    title: 'Modula Admin',
    category: 'Dashboard UI',
    description: 'A static admin dashboard UI with sidebar navigation, cards, charts, and a chatbot component.',
    fullDescription: 'Modula Admin is our showcase of dashboard UI capabilities, featuring a clean and intuitive admin interface. This demonstration project includes sidebar navigation, informative cards and statistics displays, interactive charts for data visualization, and a simulated chatbot component. The design prioritizes usability and information hierarchy while maintaining visual appeal.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Sidebar navigation', 'Statistical dashboard cards', 'Interactive charts', 'Data tables', 'Chatbot UI component'],
    technologies: ['HTML5', 'CSS3/TailwindCSS', 'JavaScript', 'Chart.js'],
    completionDate: 'November 2023',
    clientUrl: 'https://modulaadmin.example.com'
  }
};

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (projectId && projectsData[projectId as keyof typeof projectsData]) {
      const projectData = projectsData[projectId as keyof typeof projectsData];
      setProject(projectData);
      setActiveImage(projectData.image);
    }
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container-custom pt-24 pb-16 min-h-[80vh] flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading project details...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container-custom pt-24 pb-16 min-h-[80vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/portfolio">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Back button */}
          <Link to="/portfolio" className="inline-flex items-center text-modula-coral hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
          
          {/* Project Header */}
          <header className="mb-10">
            <span className="text-sm text-modula-coral uppercase tracking-wider">{project.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6">{project.title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl">{project.fullDescription}</p>
          </header>
          
          {/* Project Gallery */}
          <section className="mb-16">
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg h-[60vh] bg-gray-100">
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[project.image, ...project.gallery].slice(0, 3).map((img, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer rounded-md overflow-hidden h-24 ${activeImage === img ? 'ring-2 ring-modula-coral' : 'opacity-80 hover:opacity-100'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </section>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Details Column */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Info</h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span key={index} className="bg-modula-light-grey px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Completed</h3>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-modula-coral mr-2" />
                    <span>{project.completionDate}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Category</h3>
                  <div className="flex items-center">
                    <Layers size={16} className="text-modula-coral mr-2" />
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <a 
                    href={project.clientUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-modula-coral hover:underline"
                  >
                    <Globe size={16} className="mr-2" />
                    <span>View Live Site</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Projects (for future expansion) */}
          <section className="mt-16">
            <div className="bg-modula-light-grey rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a similar project?</h2>
                  <p className="text-gray-600">
                    We design and develop tailored websites that align with your brand and business goals. Let's discuss your project!
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <a href="/contact" className="btn-primary">Contact Us</a>
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

export default ProjectDetails;
