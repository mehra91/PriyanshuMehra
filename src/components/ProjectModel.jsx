import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';


export default function ProjectsModel({ isOpen, onClose }) {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "FoodUI",
      description: "Food related web3 project",
      image:'/FoodUI.png',
      link: "https://foodie-ten-tau.vercel.app/",
      tech: [ "Reactjs", "Nodejs",'TailwindCss','Express.js','MongoDB']
    },
    {
      title: "Project 2",
      description: "Your project description",
      image: "https://via.placeholder.com/400x300?text=Project+2",
      link: "https://example.com",
      tech: ["Tech1", "Tech2"]
    }
  ];

  const leftOverlayVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
    exit: {
      x: '-100%',
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };


  const modelContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.8 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Black Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-30"
          />

          {/* Left Black Overlay */}
          <motion.div
            variants={leftOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" inset-0 bg-black z-40 w-1/3 h-[90vh] rounded-lg absolute top-10 "
          />


          {/* Model */}
          <motion.div
            variants={modelContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" z-50 rounded-3xl  shadow-2xl max-w-lg h-[90vh] w-1/3  absolute  top-10 left-0 pointer-events-auto  flex flex-col  items-center justify-center "
          >
        
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-0 text-slate-400 hover:text-white cursor-pointer z-10"
              >
                <X size={28} />
              </motion.button>

              {/* Project Image */}
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="mb-8  h-64 w-[60vh] flex items-center justify-center rounded-2xl cursor-pointer hover:scale-105 duration-700"
              >
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </motion.div>

              {/* Project Title & Description */}
              <motion.div
                key={`title-${currentProject}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  {projects[currentProject].title}
                </h2>
                <p className="text-slate-400 text-sm mb-4">
                  {projects[currentProject].description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {projects[currentProject].tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Link */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center px-15 h-8 gap-2 mb-6  w-full"
              >
                {projects[currentProject].link}
                <ExternalLink size={16} />
              </motion.a>

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                className="flex gap-4 justify-evenly  h-12 w-full items-center "
              >
                <button
                  onClick={prevProject}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all cursor-pointer"
                >
                  Previous
                </button>

                <span className="text-slate-400 text-sm">
                  {currentProject + 1} / {projects.length}
                </span>

                <button
                  onClick={nextProject}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all cursor-pointer"
                >
                  Next
                </button>
              </motion.div>

           
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}