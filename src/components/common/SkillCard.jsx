import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from './Badge';

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.4 }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.4 }
    }
  };

  const skillLevelColors = {
    Beginner: 'bg-purple-100 text-purple-800 border-purple-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Advanced: 'bg-blue-100 text-blue-800 border-blue-300',
    Expert: 'bg-green-100 text-green-800 border-green-300'
  };

  return (
    <motion.div
      className="relative h-48 cursor-pointer perspective"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={isFlipped ? 'back' : 'front'}
        variants={flipVariants}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <motion.div
          className={`absolute w-full h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
            ${isHovered ? 'shadow-lg' : 'shadow-md'} backface-hidden`}
        >
          <div className="flex items-start space-x-4">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Click to view details
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {skill.items.slice(0, 3).map((item, index) => (
              <Badge
                key={index}
                text={item.name || item}
                className={skillLevelColors[item.level] || 'bg-gray-100 text-gray-800'}
              />
            ))}
            {skill.items.length > 3 && (
              <Badge
                text={`+${skill.items.length - 3} more`}
                className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              />
            )}
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
            shadow-md backface-hidden overflow-y-auto"
          style={{ rotateY: 180, transformStyle: 'preserve-3d' }}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.category} Skills
            </h3>
            <div className="space-y-2">
              {skill.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.name || item}
                  </span>
                  {item.level && (
                    <Badge
                      text={item.level}
                      className={skillLevelColors[item.level]}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Flip indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute bottom-2 right-2 text-gray-400"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;