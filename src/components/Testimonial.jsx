import React from 'react';

export default function Testimonial() {
  return (
    <div className="bg-black/85 backdrop-blur rounded-2xl p-8 text-center border border-black/50 hover:scale-105 ease-in-out duration-700 cursor-pointer">
      <p className="text-white text-md font-semibold mb-5">Testimonial</p>
      
      {/* Thumbs Up Emoji */}
      <div className="text-8xl mb-6">👍</div>
      
      <p className="text-white font-semibold text-4xl ">5+</p>
      <p className="text-slate-400 text-sm mt-2">Completed 5+ Projects</p>
    </div>
  );
}