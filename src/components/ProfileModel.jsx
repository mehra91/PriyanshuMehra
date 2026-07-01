import { React, useState, useEffect } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion';
import { X, MapPin, Calendar, Clock, Mail, SquareArrowOutUpRight } from 'lucide-react';
import img from '../assets/WP.jpg'

export default function ProfileModel({ isOpen, onClose }) {
  const [showContent, setShowContent] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  


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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const profileData = [
    { icon: MapPin, value: "Haldwani, Uttarakhand" },
    { icon: Calendar, value: "03 August, 2004" },
    {
      icon: Clock,
      value: currentTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }),
    },
    {
      icon: Mail,
      value: "pm7300779625@gmail.com",
      link: true,
    },
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
      ease: "easeINOut",
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

  // Modal content fade in
  const modalContentVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay:0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: {
      duration:0.5,
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
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="black  p-12 shadow-2xl max-w-screen flex items-center justify-center flex-col w-full  h-full relative pointer-events-auto">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl z-10 cursor-pointer"
              >
                X
              </motion.button>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.9 }}
                className="flex justify-center mb-8 w-45 h-45 rounded-full overflow-hidden"
              >
                <img src={img} className='h-45 w-45 rounded-full object-cover object-top-right' alt="Profile" />
              </motion.div>

              {/* Profile Data - Line by Line */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                {profileData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 pb-4"
                    >
                      <span className="w-10 shrink-0">
                        <Icon className="w-6 h-6 text-violet-400" />
                      </span>

                      <div className="flex-1">
                        {item.link ? (
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${item.value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:text-blue-400 transition-colors flex items-center justify-center gap-x-1"
                          >
                            {item.value} <SquareArrowOutUpRight />
                          </a>
                        ) : (
                          <p className="text-white font-semibold">{item.value}</p>
                        )}
                      </div>
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