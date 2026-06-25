import React from 'react'
import img from '../assets/WP.jpg'

const ImageCard = () => {
  return (
    <div className="    bg-black rounded-lg h-72 flex items-center justify-center overflow-hidden ">
      <img src={img} alt="Profile" className="object-fill  h-96 w-auto  bg-cover shadow-2xl transform transition duration-500 ease-in-out  cursor-move rounded-lg" />
         {/* <div className='w-88  h-72 border-2 p-3 border-white rounded-lg'>
           <p className=' text-md'>
               Full-stack web developer | React • JavaScript • MERN • MongoDB
           </p>
           <button className=' text-black bg-green-600  h-12 rounded-xl w-20 font-semibold text-lg'>
            Resume
           </button>
         </div> */}
    </div>
  )
  
}

export default ImageCard