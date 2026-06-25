import React, { useState } from 'react';

export default function TotalFollowers() {
  const [totalFollower,setTotalFollower]  = useState(0)
  const handleFollower =()=> {
       setTotalFollower(totalFollower+1)

  }
  return (
    <div  onClick={handleFollower} 
     className="bg-black/85 backdrop-blur rounded-2xl p-8 text-center border cursor-pointer border-black/50 hover:scale-105 ease-in-out duration-700">
      <p className="text-white text-md font-semibold mb-5 ">Total Followers</p>
      
      {/* Heart Icon */}
      <div className="text-8xl mb-6 ">❤️</div>
      
      <p className="text-white  font-semibold text-4xl">{totalFollower}</p>
      <p className="text-slate-400 text-sm mt-2 ">{totalFollower} &nbsp;Users Followed</p>
    </div>
  );
}