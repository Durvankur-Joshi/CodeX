import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ListCard = ({ projectName, creationDate, onDelete }) => {
  return (
    <div className='pl-10'>
      <div className='flex items-center justify-between bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 shadow-md w-[700px]'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-500 p-3 rounded-xl cursor-pointer'>
            <span className='text-white text-xl'>&lt;/&gt;</span>
          </div>
          <div>
            <h3 className='text-lg font-semibold cursor-pointer'>{projectName}</h3>
            <p className='text-sm text-gray-500'>{creationDate}</p>
          </div>
        </div>
        <button 
          className='text-red-500 hover:text-red-700 cursor-pointer'
          onClick={() => onDelete(projectName)}
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default ListCard;
