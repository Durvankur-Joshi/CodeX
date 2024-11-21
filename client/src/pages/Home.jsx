import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  // State for layout toggle (Grid/List)
  const [isGridLayout, setIsGridLayout] = useState(true);

  // State for light mode toggle
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to handle layout toggle
  const toggleLayout = () => {
    setIsGridLayout((prevLayout) => !prevLayout);
  };

  // Function to handle theme toggle
  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
    // Add/Remove the light mode class to the body
    document.body.classList.toggle('light-mode', !isLightMode);
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar
        toggleLayout={toggleLayout}
        toggleTheme={toggleTheme}
        isLightMode={isLightMode}
        isGridLayout={isGridLayout}
      />

      {/* Main Container */}
      <div className='px-10 py-8'>
        {/* Top Section: Greeting & Search */}
        <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
          {/* Greeting Message */}
          <h2 className='text-3xl font-semibold text-green-400 mb-6 md:mb-0'>
            Hi Durvankur
          </h2>

          {/* Search Bar and Add Button Container */}
          <div className='flex items-center gap-4 w-full md:w-auto'>
            {/* Search Bar */}
            <div className='w-full max-w-md'>
              <label className='relative block'>
                <input
                  type='text'
                  placeholder='Search Project'
                  className='w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400'
                />
                {/* Search Icon */}
                <span className='absolute right-3 top-2.5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='h-5 w-5 text-gray-500 hover:text-green-400 cursor-pointer'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </label>
            </div>

            {/* Add Project Button */}
            <button className='bg-green-400 rounded-lg px-4 py-2 text-xl text-white hover:bg-green-500 transition'>
              <IoMdAdd />
            </button>
          </div>
        </div>

        {/* Project Cards Section */}
        <div className=''>
          {isGridLayout ? (
            // Grid Layout
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <GridCard projectName="My first project" creationDate="9 mon 2023" />
              <GridCard projectName="My Second project" creationDate="9 mon 2023" />
              <GridCard projectName="My Third project" creationDate="9 mon 2023" />
              <GridCard projectName="My Third project" creationDate="9 mon 2023" />
              <GridCard projectName="My Third project" creationDate="9 mon 2023" />
              
            </div>
          ) : (
            // List Layout
            <div className='space-y-4'>
              <ListCard projectName="My first project" creationDate="9 mon 2023" />
              <ListCard projectName="My Second project" creationDate="9 mon 2023" />
              <ListCard projectName="My Third project" creationDate="9 mon 2023" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
