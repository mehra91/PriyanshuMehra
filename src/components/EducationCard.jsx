import { useState } from 'react';
import { motion } from 'framer-motion';
import EducationModel from './EducationModel';

export default function EducationCard() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={() => setIsModelOpen(true)}
        className="bg-black/85 backdrop-blur rounded-2xl px-8 py-5 text-center border border-black/50  ease-in-out duration-700 cursor-pointer">
        <p className="text-white text-xl font-semibold m-2">Education</p>

        {/* Emoji */}
        <div className=" text-9xl  ">📖</div>

       
        <p className="text-slate-400 text-sm mt-5 mb-2">Building Knowledge, Step by Step</p>
      </motion.div>

      <EducationModel isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />
    </>
  );
}