
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
        <img
          src="/favicon.ico"
          alt="Modula Studio Logo"
          className="object-contain"
        />
      </div>
        
        {/* Logo Text */}
        <div className={`ml-2 font-heading font-semibold ${small ? 'text-xl' : 'text-2xl'}`}>
          <span className="text-modula-coral">Modula</span>
          <span className="text-modula-coral">Studio</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
