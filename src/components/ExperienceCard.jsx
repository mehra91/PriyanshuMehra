import React from 'react';

export default function ExperienceCard() {
  return (
    <div className="bg-amber-500 rounded-2xl p-5 text-white cursor-pointer hover:scale-105 ease-in-out duration-700">
      <p className=" font-semibold text-white text-md mb-4">Experience</p>
      <div>
        <p className="text-5xl font-bold mb-1">3y</p>
        <p className="text-amber-100 mt-2">Years of Experience</p>
      </div>
    </div>
  );
}