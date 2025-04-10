
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  href
}) => {
  return (
    <div className="group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-modula-charcoal opacity-0 group-hover:opacity-40 transition duration-300"></div>
      </div>
      <div className="p-6">
        <span className="text-sm text-modula-coral uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={href} 
          className="inline-flex items-center text-modula-coral font-medium hover:underline"
        >
          View Project
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
