import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const DeleteProject = ({ projectName, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Box */}
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <IoWarningOutline className="text-red-500 text-3xl" />
          <h3 className="text-xl font-semibold text-red-500">Delete Project</h3>
        </div>

        {/* Modal Body */}
        <p className="text-gray-300 mb-6">
          Are you sure you want to delete the project "<span className="font-semibold text-white">{projectName}</span>"? This action cannot be undone.
        </p>

        {/* Modal Actions */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            className="px-4 py-2 rounded-lg bg-gray-600 text-gray-300 hover:bg-gray-500 transition duration-150"
            onClick={onClose}
          >
            Cancel
          </button>

          {/* Delete Button */}
          <button
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-150"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
