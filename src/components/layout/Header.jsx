import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../App.jsx';

// Resolve profile image for header/logo using Vite base URL (works in dev and prod)
const headerLogo = `${import.meta.env.BASE_URL}images/profile.jpg`;

const Header = ({ sections, activeSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { reduceMotion, setReduceMotion } = useContext(ThemeContext);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleReduceMotion = () => setReduceMotion(prev => !prev);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center text-xl font-bold text-gray-900 dark:text-white tracking-wider"
        >
          <img src={headerLogo} alt="Joseph Musembi" width={32} height={32} className="w-8 h-8 rounded-full mr-3 object-cover" />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            JOSEPH MUSEMBI
          </span>
        </motion.div>
        
        {/* Navigation Links */}
        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center space-x-6">
          {sections.map(sectionId => (
            <motion.a 
              key={sectionId}
              href={`#${sectionId}`}
              className={`capitalize text-sm font-medium transition duration-150 ease-in-out hover:text-primary-600 dark:hover:text-primary-400 ${
                activeSection === sectionId 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              aria-current={activeSection === sectionId ? 'page' : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sectionId}
              {activeSection === sectionId && (
                <motion.div
                  className="h-0.5 bg-primary-600 dark:bg-primary-400 mt-0.5"
                  layoutId="underline"
                />
              )}
            </motion.a>
          ))}

          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={reduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              )}
            </motion.button>

            {/* UPDATED DOWNLOAD LINK */}
            <a 
              href="./joseph-musembi-cv.pdf" 
              download="Joseph-Musembi-CV.pdf" 
              className="px-3 py-1 text-sm rounded-md bg-indigo-600 text-white inline-block transition-transform hover:scale-105"
            >
              Download CV
            </a>

            <button 
              onClick={toggleReduceMotion} 
              className="p-2 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300" 
              aria-pressed={reduceMotion} 
              aria-label="Reduce motion"
            >
              {reduceMotion ? 'Reduced' : 'Motion'}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              {sections.map(sectionId => (
                <motion.a
                  key={sectionId}
                  href={`#${sectionId}`}
                  className={`block capitalize text-sm font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out ${
                    activeSection === sectionId
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {sectionId}
                </motion.a>
              ))}
              {/* Mobile Download Link */}
              <a 
                href="./joseph-musembi-cv.pdf" 
                download="Joseph-Musembi-CV.pdf" 
                className="block text-center px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white font-medium"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;