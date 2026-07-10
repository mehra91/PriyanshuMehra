import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isUnlocking, setIsUnlocking] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-9999 cursor-pointer"
      onClick={() => setShowPasswordBox(true)}
    >
      {/* Wallpaper Background - MOVES UP */}
      <motion.div
        animate={{ y: isUnlocking ? '-100%' : '0%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Time - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-12 left-12 text-white pointer-events-none z-20"
      >
        <h1 className="text-6xl font-light">
          {time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </h1>
        <p className="text-xl mt-2 text-white/80">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </motion.div>

      {/* Click Hint - Top Left */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-8 left-12 text-white/60 pointer-events-none text-sm z-20"
      >
        <p>Click anywhere to unlock</p>
      </motion.div>

      {/* Unlock Box - Only Shows on Click */}
      {showPasswordBox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto z-30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dark Overlay for Unlock Box */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowPasswordBox(false)} />

          {/* Unlock Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative z-40 flex items-center justify-between h-16 w-96 border-2 border-black rounded-lg bg-white p-2 gap-2"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 h-12 px-4 bg-white text-black rounded-md border-2 border-transparent focus:outline-none focus:border-blue-500 transition-all"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsUnlocking(true);
                setShowPasswordBox(false);
                setTimeout(() => {
                  onUnlock();
                }, 1200);
              }}
              className="h-12 w-12 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all cursor-pointer"
            >
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}