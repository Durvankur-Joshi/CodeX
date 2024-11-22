import React from 'react'
import { FaCircleDown } from "react-icons/fa6";

const Editornavbar = () => {
  return (
    <>
    <div className="navbar flex text-white items-center justify-between bg-base-300 p-4">
      {/* Brand Logo / Title */}
      <a className="text-2xl pl-5 cursor-pointer">
        Code<span className='text-3xl text-green-500 uppercase'>x</span>
      </a>

      {/* Middle section for File/Project Name */}
      <div className=" flex justify-center">
        <p className="">File / <span>My First Project</span> </p>
      </div>

      {/* Right-side Download Icon */}
      <div className=' flex'>
        <FaCircleDown className='text-2xl cursor-pointer text-slate-100 hover:text-slate-300' />
      </div>
    </div>
    </>
  )
}

export default Editornavbar