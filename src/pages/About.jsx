import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

// Resolve public asset path with Vite base URL (works in dev and production)
const profileSrc = `${import.meta.env.BASE_URL}images/profile.jpg`;

const About = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                {/* Use <picture> for future responsive images and add loading/decoding to improve layout & perf */}
                <picture>
                  {/* WebP will be used when available (add .webp at build-time or via image pipeline) */}
                  <source srcSet={profileSrc.replace(/\.jpg$/, '.webp')} type="image/webp" />
                  <img
                    src={profileSrc}
                    alt="Joseph Musembi — Full Stack Developer"
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-lg font-semibold">5+ Years Experience</p>
              <p className="text-sm opacity-90">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Crafting Digital Excellence Through Code
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate Full Stack Developer with expertise in building scalable web applications
              and solving complex technical challenges. Specializing in modern JavaScript frameworks
              and cloud technologies.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-indigo-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="8"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Goal-Oriented Developer</h3>
                  <p className="text-gray-600">Focused on delivering high-quality, scalable solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-yellow-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18h6"></path>
                  <path d="M12 2a7 7 0 0 0-4 12.9V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 2z"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Innovation Driven</h3>
                  <p className="text-gray-600">Always exploring new technologies and best practices</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Team Collaborator</h3>
                  <p className="text-gray-600">Experienced in leading and working with diverse teams</p>
                </div>
              </div>
            </div>

            <motion.div 
              className="flex gap-4 pt-6"
              variants={itemVariants}
            >
              <Button 
                variant="primary"
                href="#contact"
              >
                Get in Touch
              </Button>
              <Button 
                variant="secondary"
                href="#projects"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-600">50+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-600">30+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-600">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;