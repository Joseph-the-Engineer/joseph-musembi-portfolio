import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from './common/Badge';
import Button from './common/Button';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            >
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <Button
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="flex-1"
                >
                  Live Demo
                </Button>
                <Button
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                >
                  View Code
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.featured && (
            <Badge
              text="Featured"
              className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
            />
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              text={tech}
              className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
          ))}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>{project.date}</span>
          </div>
          {project.category && (
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <span>{project.category}</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;