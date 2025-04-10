
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-modula-coral mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default PageHeader;
