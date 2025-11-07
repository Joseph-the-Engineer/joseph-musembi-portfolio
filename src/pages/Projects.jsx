import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/common/Badge';

const Projects = ({ id, data }) => {
  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const filteredProjects = data.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A showcase of my best work and technical capabilities
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                All Projects
              </button>
              {['Frontend', 'Backend', 'Full Stack', 'Mobile'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    filter === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {data.length === 0 ? (
            <p className="text-center text-gray-500">No project data available yet. Please populate src/data/projects.js.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          text={tech}
                          className="bg-indigo-50 text-indigo-600"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 font-medium"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;