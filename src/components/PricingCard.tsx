
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  emoji?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  highlight = false,
  emoji
}) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        highlight 
          ? 'border-2 border-modula-coral shadow-lg scale-105 z-10' 
          : 'border border-gray-200 shadow-md hover:-translate-y-1'
      }`}
    >
      {highlight && (
        <div className="absolute top-0 left-0 w-full bg-modula-coral text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="bg-white p-6">
        <div className="text-center mb-6">
          {emoji && <div className="text-3xl mb-2">{emoji}</div>}
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold">{price}</span>
          </div>
          <p className="mt-3 text-gray-600 text-sm">{description}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check size={18} className="text-modula-coral shrink-0 mt-0.5" />
              <span className="ml-2 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to="/contact" 
          className={`block text-center py-2 px-4 rounded-md transition-colors w-full ${
            highlight 
              ? 'bg-modula-coral text-white hover:bg-opacity-90' 
              : 'border border-modula-coral text-modula-coral hover:bg-modula-coral hover:text-white'
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
