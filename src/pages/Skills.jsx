import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import SkillCard from '../components/SkillCard';
import Modal from '../components/common/Modal';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = ({ id, data }) => {
  const { scrollYProgress } = useScroll();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  // Filter skills based on search term and category
  const filteredSkills = data.filter(skill => {
    const matchesSearch = searchTerm === '' || 
      skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.items.some(item => 
        (item.name || item).toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesFilter = filter === 'all' || 
      skill.items.some(item => item.level === filter);

    return matchesSearch && matchesFilter;
  });

  const calculateProficiency = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'beginner':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 
              className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
              variants={filterVariants}
            >
              Technical Skills
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              variants={filterVariants}
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </motion.p>

            {/* Search and Filter Controls */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={filterVariants}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="flex gap-2">
                {['all', 'Expert', 'Advanced', 'Intermediate', 'Beginner'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFilter(level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                      ${filter === level 
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                  >
                    {level === 'all' ? 'All' : level}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.length === 0 ? (
              <motion.p 
                variants={filterVariants}
                className="text-center text-gray-500 dark:text-gray-400 col-span-full"
              >
                {searchTerm 
                  ? 'No skills match your search criteria.'
                  : 'No skills data available yet. Please populate src/data/skills.js.'
                }
              </motion.p>
            ) : (
              filteredSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  category={skill.category}
                  icon={skill.icon}
                  items={skill.items}
                  onClick={() => {
                    setSelectedSkill(skill);
                    setIsModalOpen(true);
                  }}
                />
              ))
            )}
          </div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedSkill?.category}
      >
        {selectedSkill && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{selectedSkill.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedSkill.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed skill breakdown and proficiency levels
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {selectedSkill.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {item.name || item}
                  </span>
                  {item.level && (
                    <Badge
                      text={item.level}
                      className={`${calculateProficiency(item.level)}`}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Skills;