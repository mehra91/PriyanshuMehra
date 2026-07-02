import React from 'react';
import { motion } from 'framer-motion';
export default function Testimonial() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-black/85 backdrop-blur rounded-2xl px-8 py-5 text-center border border-black/50  ease-in-out duration-700 cursor-pointer">
      <p className="text-white text-md font-semibold mb-4">Testimonial</p>

      {/* Thumbs Up Emoji */}
      <div className="text-8xl mb-4">👍</div>

      <p className="text-white font-semibold text-4xl ">5+</p>
      <p className="text-slate-400 text-sm mt-2">Completed 5+ Projects</p>
    </motion.div>
  );
}