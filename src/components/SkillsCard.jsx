import React from 'react';

export default function SkillsCard() {
  return (
    <div className="bg-emerald-500 rounded-2xl p-5 text-white cursor-pointer hover:scale-105 ease-in-out duration-700">
      <p className="text-md font-semibold text-white mb-4">Skills</p>
      <div>
        <p className="text-5xl font-bold mb-2">10</p>
        <p className="text-emerald-100 mt-2">Professional Skills</p>
      </div>
    </div>
  );
}