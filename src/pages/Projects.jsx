import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Import the dedicated ProjectCard component (with multi-image carousel)
import ProjectCard from '../components/ProjectCard'; 
import Button from '../components/common/Button'; // Assuming you have a reusable Button component

const Projects = ({ id, data }) => {
  const [filter, setFilter] = useState('all');

  // 2. Dynamically extract all unique categories from the project data
  const categories = useMemo(() => {
    // Ensure data exists and is an array before reducing
    if (!data || !Array.isArray(data)) return []; 
    
    const uniqueCategories = data.reduce((acc, project) => {
      if (project.category && !acc.includes(project.category)) {
        acc.push(project.category);
      }
      return acc;
    }, []);
    return uniqueCategories;
  }, [data]); // Recalculate only if data prop changes

  // Filter the projects based on the selected category
  const filteredProjects = data.filter(project => 
    filter === 'all' || project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Faster stagger for cleaner grid reveal
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Slightly tighter spring
        damping: 15
      }
    }
  };

  return (
    <section id={id} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Featured Projects 💡
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              A selection of my most impactful and innovative work, spanning multiple technologies and domains.
            </p>
            
            {/* 3. Dynamic and Aesthetically Improved Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                onClick={() => setFilter('all')}
                variant={filter === 'all' ? 'primary' : 'tertiary'}
                size="sm"
              >
                All Projects
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? 'primary' : 'tertiary'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {data.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No project data available. Please check your data source.
            </p>
          ) : (
            // Use AnimatePresence and map filtered projects to the dedicated card
            <AnimatePresence mode='wait'> 
              {/* Force re-render of the grid when filter changes */}
              <motion.div
                key={filter} 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id} // Use project.id for stable keys
                    variants={cardVariants}
                  >
                    <ProjectCard project={project} /> 
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;