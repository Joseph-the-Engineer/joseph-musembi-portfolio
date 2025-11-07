import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced Badge component for displaying skills with proficiency levels.
 * @param {string} text - The text to display inside the badge
 * @param {string} className - Additional CSS classes for styling
 * @param {string} icon - Optional icon to display before the text
 */
const Badge = ({ text, className, icon }) => {
  const badgeVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.span 
      variants={badgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold 
                 shadow-sm transition-all duration-300 ${className || 'bg-indigo-100 text-indigo-800'}`}
    >
      {icon && <span className="text-base">{icon}</span>}
      {text}
    </motion.span>
  );
};

export default Badge;