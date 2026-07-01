import React from 'react'
import img from '../assets/WP.jpg'

const ImageCard = () => {
  return (
    <div className="    bg-black rounded-lg h-72 flex items-center justify-center overflow-hidden ">
      <img src={img} alt="Profile" className="object-fill  h-96 w-auto  bg-cover shadow-2xl transform transition duration-500 ease-in-out  cursor-move rounded-lg" />
         
    </div>
  )
  
}

export default ImageCard