import React from 'react';
import { FaTrash } from 'react-icons/fa'; // FontAwesome for the delete icon

const ListCard = ({projectName, creationDate}) => {
  return (
    <>
    <div className='pl-10'>

    <div className=' flex items-center justify-between bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 shadow-md w-[700px] '>
      {/* Left Section with Icon and Project Details */}
      <div className='flex items-center gap-4'>
        {/* Icon */}
        <div className='bg-blue-500 p-3 rounded-xl cursor-pointer'>
          <span className='text-white text-xl'>&lt;/&gt;</span>
        </div>
        
        {/* Project Info */}
        <div>
          <h3 className='text-lg font-semibold cursor-pointer'>{projectName}</h3>
          <p className='text-sm text-gray-500'>{creationDate}</p>
        </div>
      </div>
      
      {/* Delete Icon */}
      <button className='text-red-500 hover:text-red-700 cursor-pointer'>
        <FaTrash size={20} />
      </button>
    </div>
    </div>
    </>
  );
};

export default ListCard;
