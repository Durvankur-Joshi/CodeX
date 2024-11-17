import React from 'react';
import { FaTrash } from 'react-icons/fa'; // FontAwesome for the delete icon

const GridCard = () => {
  const projects = [
    { name: 'My First Project', date: 'Created in Mar 2023' },
    { name: 'Project Two', date: 'Created in Apr 2023' },
    { name: 'Project Three', date: 'Created in May 2023' },
    // Add more project objects here if needed
  ];

  return (
    <div className='grid pl-10 h-[100px] sm:w-[850px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {projects.map((project, index) => (
        <div
          key={index}
          className='bg-base-200 hover:bg-base-300 text-gray-300 p-3 rounded-lg shadow-md flex justify-between items-center'
        >
          {/* Left Section with Icon and Project Details */}
          <div className='flex items-center gap-3'>
            {/* Icon */}
            <div className='bg-blue-500 p-2 rounded-xl cursor-pointer'>
              <span className='text-white text-lg'>&lt;/&gt;</span>
            </div>

            {/* Project Info */}
            <div>
              <h3 className='text-md font-semibold cursor-pointer'>{project.name}</h3>
              <p className='text-xs text-gray-500'>{project.date}</p>
            </div>
          </div>

          {/* Delete Icon */}
          <button className='text-red-500 hover:text-red-700'>
            <FaTrash size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
