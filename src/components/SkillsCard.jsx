import React from 'react';
import { motion } from 'framer-motion';
import {skillsData} from '../assets/img.js'

export default function SkillsCard({ onCardClick }) {
  return (

    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onCardClick} 
      className="bg-emerald-500 rounded-2xl p-5 text-white cursor-pointer ease-in-out duration-700">
      <p className="text-md font-semibold text-white mb-2">Skills</p>
      <div>
        <p className="text-5xl font-bold ">{skillsData.length}</p>
        <p className="text-emerald-100 mt-2">Professional Skills</p>
      </div>
    </motion.div>
  );
}