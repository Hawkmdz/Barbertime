import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  className = '', 
  onClick,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-md font-medium transition-all duration-300 text-base
        ${primary 
          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 hover:from-amber-600 hover:to-yellow-600 shadow-lg hover:shadow-xl' 
          : 'bg-gray-800 text-white hover:bg-gray-700'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;