import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../assets/img';

export default function ExperienceCard() {

  const currentYear = new Date().getFullYear();

  const skillsWithExperience = skillsData.map(skill => {
    return {
      ...skill,
      experience: currentYear - skill.years
    };
  });


  const avgExp = () => {
    let totalYear = 0;

    skillsWithExperience.forEach((skill) => {
      totalYear += skill.experience;
    });

    let avgYear = Math.round(totalYear / skillsWithExperience.length);

    return avgYear;
  };

  const handleResumeClick = () => {
    const resumeURL = './resume.pdf';
    window.open(resumeURL, '_blank');
  };

  return (
    <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
    onClick={handleResumeClick}
      className="bg-amber-500 rounded-2xl p-5 text-white cursor-pointer  ease-in-out duration-700">
      <p className=" font-semibold text-white text-md mb-2">Experience</p>
      <div>
        <p className="text-5xl font-bold ">
          {avgExp()}y
        </p>
        <p className="text-amber-100 mt-2">Years of Experience</p>
      </div>
    </motion.div>
  );
}