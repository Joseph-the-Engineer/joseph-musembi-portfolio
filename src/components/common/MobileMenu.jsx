import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, sections, activeSection, theme, toggleTheme }) => {
  const [activeSub, setActiveSub] = useState(null);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  const MenuItem = ({ section }) => (
    <motion.a
      href={`#${section}`}
      variants={itemVariants}
      onClick={() => {
        onClose();
        setActiveSub(null);
      }}
      className={`block w-full px-6 py-4 text-lg capitalize transition-colors
        ${activeSection === section 
          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
          : 'text-gray-600 dark:text-gray-300'}`}
      whileTap={{ scale: 0.95 }}
    >
      {section}
    </motion.a>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="py-4">
              <motion.div variants={itemVariants}>
                {sections.map(section => (
                  <MenuItem key={section} section={section} />
                ))}
              </motion.div>
            </nav>

            {/* Theme Toggle */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800"
            >
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;