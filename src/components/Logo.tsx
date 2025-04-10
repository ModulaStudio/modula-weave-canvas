
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        {/* Logo Icon */}
        <div className={`${small ? 'h-8 w-8' : 'h-10 w-10'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-modula-coral rounded-md"></div>
          <div className="absolute inset-x-3 inset-y-1 bg-white rounded-t-sm"></div>
          <div className="absolute bottom-1 left-3 h-3 w-1 bg-modula-charcoal rounded-sm"></div>
          <div className="absolute bottom-1 right-3 h-3 w-1 bg-modula-charcoal rounded-sm"></div>
        </div>
        
        {/* Logo Text */}
        <div className={`ml-2 font-heading font-semibold ${small ? 'text-xl' : 'text-2xl'}`}>
          <span className="text-modula-charcoal">Modula</span>
          <span className="text-modula-coral">Studio</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
