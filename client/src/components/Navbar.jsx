import React from 'react'
import { MdLightMode } from "react-icons/md";
import { IoGrid } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      <li><a>Services</a></li>
      </ul>
    </div>
    <a className="text-2xl pl-5 cursor-pointer ">Code<span className='text-3xl text-green-500 uppercase'>x</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      <li><a>Services</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
        <li className='items-center p-0'>
            <h3 className='text-2xl'>Durvankur</h3>
        </li>
            <div className="divider text-white"></div>
        <li><a> <MdLightMode /> Light Mode</a></li>
        <li><a> <IoGrid /> Toggole Grid</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar