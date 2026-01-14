import React, { useState, useEffect, createContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import Section from './components/common/Section.jsx';

// Hooks
import useScrollSpy from './hooks/useScrollSpy.js';

// Page Sections
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';

// Data Imports
import experienceData from './data/experience.js';
import { PROJECTS_DATA } from './data/projects.js'; // Fixed: Using curly braces for named export
import skillsData from './data/skills.js';

// Create theme context
export const ThemeContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [reduceMotion, setReduceMotion] = useState(() => {
    try {
      const v = localStorage.getItem('reduceMotion');
      return v === 'true';
    } catch (e) {
      return false;
    }
  });

  // Array of section IDs to manage navigation
  const sections = [
    'about',
    'experience',
    'projects',
    'skills',
    'education', 
    'contact'
  ];

  const activeSection = useScrollSpy(sections);

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Persist motion preference
  useEffect(() => {
    try {
      localStorage.setItem('reduceMotion', reduceMotion ? 'true' : 'false');
    } catch (e) {}
  }, [reduceMotion]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Loading screen component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mb-4 mx-auto"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-gray-900 dark:text-white"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, reduceMotion, setReduceMotion }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
      } font-inter antialiased`}>
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>

        <ScrollProgress />
        
        <Header 
          sections={sections} 
          activeSection={activeSection}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="pt-20"
          role="main"
          id="main"
        >
          <Section id="about" fullHeight gradient>
            <About id="about" />
          </Section>

          <Section id="experience" dark>
            <Experience id="experience" data={experienceData} />
          </Section>

          <Section id="projects" gradient>
            {/* Updated to use the correct variable PROJECTS_DATA */}
            <Projects id="projects" data={PROJECTS_DATA} />
          </Section>

          <Section id="skills" dark>
            <Skills id="skills" data={skillsData} />
          </Section>

          <Section id="education" gradient>
            <Education id="education" />
          </Section>

          <Section id="contact">
            <Contact id="contact" />
          </Section>
        </motion.main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;