import React from 'react';

export default function ProjectComplete() {
  return (
    <div className="bg-black/85 backdrop-blur rounded-2xl p-8 text-center border border-black/50 hover:scale-105 ease-in-out duration-700 cursor-pointer">
      <h3 className="text-white text-md font-semibold mb-5">Project Complete</h3>
      
      {/* Circular Progress */}
      <div className="flex justify-center mb-5">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-white"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="439.82 439.82"
              strokeLinecap="round"
              className="text-emerald-400 transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-emerald-400">100%</span>
          </div>
        </div>
      </div>

      <p className="text-white font-bold text-4xl ">5+</p>
      <p className="text-slate-400 text-sm mt-2">Completed 5+ Projects</p>
    </div>
  );
}