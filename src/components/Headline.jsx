
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export default function Headline() {
  const headlines = [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Mern Stack "
  ];

  const [index, setIndex] = useState(0);


  const nextHeadline = () => {
    setIndex((prev) => (prev + 1) % headlines.length);
  };



  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={nextHeadline}
      className="bg-violet-600 rounded-2xl p-5 text-white  ease-in-out duration-700 cursor-pointer ">
      <p className="text-lg font-semibold text-violet-100 mb-2">Headline</p>
      <h2 className="text-4xl font-bold">
        {headlines[index]}
      </h2>
    </ motion.div>
  );
} 