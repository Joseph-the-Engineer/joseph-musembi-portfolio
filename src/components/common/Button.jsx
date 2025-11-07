import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced Button component with animations and loading states
 * @param {('primary'|'secondary'|'ghost'|'gradient')} variant - The visual style of the button
 * @param {string} href - If provided, renders an <a> tag instead of a <button>
 * @param {node} children - The content inside the button
 * @param {string} className - Additional CSS classes
 * @param {boolean} isLoading - Shows loading spinner when true
 * @param {string} size - Button size (sm, md, lg)
 * @param {node} icon - Icon to show before text
 * @param {object} props - Additional HTML attributes
 */
const Button = ({
  children,
  variant = 'primary',
  href,
  className = '',
  isLoading = false,
  size = 'md',
  icon,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg text-center whitespace-nowrap relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 disabled:bg-primary-300",
    secondary: "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-4 focus:ring-primary-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 shadow-none",
    gradient: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 animate-gradient bg-[length:200%_auto]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const Component = href ? motion.a : motion.button;
  
  const buttonVariants = {
    hover: { 
      scale: 1.02,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const Spinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-3 h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      href={href}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
      {variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}
    </Component>
  );
};

export default Button;