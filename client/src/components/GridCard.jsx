import React from 'react';
import { FaTrash } from 'react-icons/fa';

const GridCard = ({ projectName, creationDate, onDelete }) => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 p-2 rounded-full cursor-pointer">
          <span className="text-white text-lg">&lt;/&gt;</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">{projectName}</h3>
          <p className="text-sm text-gray-400">{creationDate}</p>
        </div>
      </div>
      <button 
        className="text-red-500 hover:text-red-700"
        onClick={() => onDelete(projectName)}
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default GridCard;
