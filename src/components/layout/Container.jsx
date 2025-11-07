import React from 'react';
import { motion } from 'framer-motion';

const Container = ({ 
  children, 
  className = '', 
  animation = true,
  delay = 0,
  id
}) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const Wrapper = animation ? motion.div : 'div';
  const animationProps = animation ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: containerVariants
  } : {};

  return (
    <Wrapper
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
};

export default Container;