import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileModel from './ProfileModel';

export default function ProfileCard() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <ProfileModel isOpen={isModelOpen} onClose={closeModel} />

      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={openModel}
        className="bg-blue-600 rounded-2xl p-8 text-white ease-in-out duration-700 cursor-pointer"
      >
        <p className="text-sm font-semibold text-blue-100 mb-2">Full Name</p>
        <h1 className="text-4xl font-bold">Priyanshu Mehra</h1>
      </motion.div>
    </>
  );
}