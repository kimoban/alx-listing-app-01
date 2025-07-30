import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const baseClasses = "py-2 px-4 rounded font-bold";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 hover:bg-blue-700 text-white" 
    : "bg-gray-300 hover:bg-gray-400 text-gray-800";

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
