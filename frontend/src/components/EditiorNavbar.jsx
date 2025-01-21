import React from 'react'
import logo from "../images/logo.png"
import { FiDownload } from "react-icons/fi";


const EditiorNavbar = () => {
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
       <div>
       <a className="text-2xl pl-5 cursor-pointer">Code<span className='text-3xl text-green-500 uppercase'>x</span></a>
       </div>
        <p>File / <span className='text-[gray]'>My first project</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]'><FiDownload /></i>
      </div>
    </>
  )
}

export default EditiorNavbar