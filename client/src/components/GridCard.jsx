import React from 'react';
import { FaTrash } from 'react-icons/fa'; // FontAwesome for the delete icon

const GridCard = ({ projectName, creationDate }) => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-4 rounded-lg shadow-md flex justify-between items-center">
      {/* Left Section with Icon and Project Details */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="bg-blue-500 p-2 rounded-full cursor-pointer">
          <span className="text-white text-lg">&lt;/&gt;</span>
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">{projectName}</h3>
          <p className="text-sm text-gray-400">{creationDate}</p>
        </div>
      </div>

      {/* Delete Icon */}
      <button className="text-red-500 hover:text-red-700">
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default GridCard;
