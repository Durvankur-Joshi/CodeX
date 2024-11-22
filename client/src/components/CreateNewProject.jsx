import React, { useState } from 'react';

const CreateNewProject = ({ onClose, onCreate }) => {
  // State to manage form input
  const [projectName, setProjectName] = useState('');
  const [visibility, setVisibility] = useState('public'); // 'public' or 'private' options

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onCreate function with the new project details
    if (projectName) {
      const newProject = {
        name: projectName,
        visibility: visibility,
        creationDate: new Date().toLocaleDateString(),
      };
      onCreate(newProject);
    }

    // Reset form and close the modal
    setProjectName('');
    setVisibility('public');
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center'>
      <div className='bg-gray-800 text-gray-200 rounded-lg shadow-lg p-8 w-80'>
        <h2 className='text-2xl font-semibold mb-4'>Create New Project</h2>
        <form onSubmit={handleSubmit}>
          {/* Project Name Input */}
          <div className='mb-4'>
            <label className='block text-gray-400 font-medium mb-2'>Project Name</label>
            <input
              type='text'
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder='Enter project name'
              className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-100 placeholder-gray-400'
              required
            />
          </div>

          {/* Project Visibility (Private or Public) */}
          <div className='mb-6'>
            <label className='block text-gray-400 font-medium mb-2'>Visibility</label>
            <div className='flex gap-4'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='visibility'
                  value='public'
                  checked={visibility === 'public'}
                  onChange={(e) => setVisibility(e.target.value)}
                  className='mr-2 text-green-500 bg-gray-800 border-gray-600 focus:ring-green-500'
                />
                Public
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='visibility'
                  value='private'
                  checked={visibility === 'private'}
                  onChange={(e) => setVisibility(e.target.value)}
                  className='mr-2 text-green-500 bg-gray-800 border-gray-600 focus:ring-green-500'
                />
                Private
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-md px-4 py-2 mr-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-green-600 hover:bg-green-500 text-gray-100 rounded-md px-4 py-2'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProject;
