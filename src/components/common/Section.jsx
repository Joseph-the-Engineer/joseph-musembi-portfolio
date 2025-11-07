import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = '', 
  fullHeight = false,
  gradient = false,
  dark = false 
}) => {
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const baseClasses = `
    relative 
    ${fullHeight ? 'min-h-screen' : 'py-20'} 
    ${dark ? 'bg-gray-900 text-white' : 'bg-white dark:bg-gray-900 dark:text-white'} 
    ${gradient ? 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800' : ''}
    ${className}
  `;

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className={baseClasses}
    >
      {/* Decorative Background Elements */}
      {gradient && (
        <>
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;