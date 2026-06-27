import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {skillsData} from '../assets/img.js'


export default function SkillsModel({ isOpen, onClose }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: { opacity: 0, y: 20 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 50,
      transition: { duration: 0.2 },
    },
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          />

          {/* Model */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl max-w-2xl w-full border border-slate-700/50">
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-3xl font-bold text-white">My Skills</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-200 text-2xl transition-colors cursor-pointer"
                >
                  <X />
                </motion.button>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-2"
              >
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-linear from-blue-700 to-blue-300 rounded-2xl p-4 text-center cursor-pointer "
                  >
                    {/* Icon */}
                    <div className="text-2xl  group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <img src={skill.img} alt={skill.name}  className='h-16 w-16 object-contain ' />
                    </div>

                    {/* Name */}
                    <p className="text-white font-semibold text-sm mt-1">
                      {skill.name}
                    </p>
            
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}