import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false,
  padding = 'md'
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6'
  };
  
  const hoverClasses = hoverable 
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1' 
    : '';
  
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm border border-gray-100
        ${paddings[padding]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;