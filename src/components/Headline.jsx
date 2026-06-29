import React, { useEffect, useState } from 'react';

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
    <div
      onClick={nextHeadline}
      className="bg-violet-600 rounded-2xl p-8 text-white hover:scale-105 ease-in-out duration-700 cursor-pointer ">
      <p className="text-sm font-semibold text-violet-100 mb-2">Headline</p>
      <h2 className="text-4xl font-bold">
        {headlines[index]}
      </h2>
    </div>
  );
}