import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'about' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = "text-white font-bold py-2 px-4 border-b-4 rounded";
  
  const variantStyles = {
    primary: "bg-pink hover:bg-pink/90 border-pink/80 hover:border-pink/70",
    about: "bg-bgpink hover:bg-bgpink/90 border-bgpink/80 hover:border-bgpink/70",
    secondary: "bg-lightpink hover:bg-lightpink/90 border-lightpink/80 hover:border-lightpink/70"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button; 