import React from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoGrid, IoList } from "react-icons/io5";

const Navbar = ({ toggleTheme, toggleLayout, isLightMode, isGridLayout }) => {
  // Container class based on dark or light mode
  const navbarClass = isLightMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white';
  const dropdownClass = isLightMode ? 'bg-base-100 text-white' : 'bg-gray-800';

  return (
    <>
      <div className={`navbar ${navbarClass}`}>
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
              className={`menu menu-sm dropdown-content ${dropdownClass} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
              <li><a>Services</a></li>
            </ul>
          </div>
          <a className="text-2xl pl-5 cursor-pointer">Code<span className='text-3xl text-green-500 uppercase'>x</span></a>
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
              className={`menu menu-sm dropdown-content ${dropdownClass} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
              
              {/* User Information */}
              <li className='items-center p-0'>
                <h3 className='text-2xl'>Durvankur</h3>
              </li>
              <div className="divider"></div>
              
              {/* Light/Dark Mode Toggle */}
              <li>
                <a onClick={toggleTheme} className="cursor-pointer">
                  {isLightMode ? <MdDarkMode /> : <MdLightMode />} {isLightMode ? 'Dark Mode' : 'Light Mode'}
                </a>
              </li>
              
              {/* Grid/List View Toggle */}
              <li>
                <a onClick={toggleLayout} className="cursor-pointer">
                  {isGridLayout ? <IoList /> : <IoGrid />} {isGridLayout ? 'List View' : 'Grid View'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
