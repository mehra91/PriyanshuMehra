import { React, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, School, Briefcase, X } from 'lucide-react';
import { title } from 'framer-motion/client'; 

export default function EducationModel({ isOpen, onClose }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1200); // after curtains finish

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  

  const fullName = "Education"; 
  const educationData = [
    {
      icon: School,
      title: "   X",
      institution: "H.S.S.Kasardevi Vidyapeeth",
      year: "2018",
     
    },
    {
      icon: School,
      title: "XII",
      institution: "G.I.C. Deenapani",
      year: "2020",
     
    },
    {
      icon: GraduationCap,
      title: "Diploma",
      institution: "G.P.Dwarahat",
      year: "2020 - 2023",
      detail: "Computer Science and Engineering",
      internship: {
        icon: Briefcase,
        title: "Internship",
        company: "Cognifyz Technologies",
        duration: "1 months",
        site: 'Remote'
      },
    },
    {
      icon: GraduationCap,
      title: "B.Tech",
      institution: "Amrapali University",
      year: "2023 - 2026",
      detail: "Computer Science and Engineering",
      internship: {
        icon: Briefcase,
        title: "Internship",
        company: "Info Web Software",
        duration: "3 months",
        site: 'Onsite'
      },
    },
    {
      icon: Briefcase,
      title:"Internship",
      company:"Empathy Technologies",
      role:" Web Developer",
      duration:'· 2 months',
      site:'Remote',

    }
  ]; 

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const leftOverlayVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const rightOverlayVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const modelContentVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 80,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Left Black Overlay */}
          <motion.div
            variants={leftOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 h-screen w-1/2 bg-zinc-900 z-40"
          />
          {/* Right Black Overlay */}
          <motion.div
            variants={rightOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-1/2 bg-zinc-900 z-40"
          />

          {/* Model */}
          {showContent && (
            <motion.div
              variants={modelContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <div className="p-12 shadow-2xl max-w-screen flex items-center justify-center flex-col w-full h-full relative pointer-events-auto overflow-y-auto custom-scrollbar">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl z-10 cursor-pointer"
                >
                  <X />
                </motion.button>

                {/* Full Name */}
                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.9 }}
                  className="text-3xl font-bold mt-20 text-white mb-15"
                >
                  <span className='h-0.5 w-auto border-b-2 text-white rounded-lg p-2'>
                    {fullName}

                  </span>
                </motion.h2>

                {/* Vertical Timeline */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative w-full max-w-md pl-8"
                >
                  {/* vertical line */}
                  <div className="absolute left-2.75 top-2 bottom-2 w-1 rounded-full bg-white" />
                  {educationData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative pb-10 last:pb-0"
                      >
                        {/* dot */}
                        <span className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center">
                          <Icon className="w-5 h-5 text-black font-bold" />
                        </span>

                        <p className="text-white text-lg font-semibold">{item.title}</p>
                        <p className="text-slate-400 font-medium text-base">{item.institution}  {item.company}</p>
                        <p className="text-slate-500 text-sm">{item.year}{item.role}   {item.duration}  · {item.detail} {item.site}  </p>

                        {item.internship && (
                          <motion.div
                            variants={itemVariants}
                            className="relative mt-4 ml-2 pl-8"
                          >
                            {/* mini vertical line */}
                            <div className="absolute left-2.75 top-1 rounded-2xl bottom-1 w-1 bg-white" />

                            {/* dot */}
                            <span className="absolute left-0.5 top-0 w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center">
                              <item.internship.icon className="w-3.5 h-3.5 text-black font-bold" />
                            </span>

                            <p className="text-white text-sm font-medium">{item.internship.title}</p>
                            <p className="text-slate-400 text-xs">
                              {item.internship.company} · {item.internship.duration} · {item.internship.site}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}