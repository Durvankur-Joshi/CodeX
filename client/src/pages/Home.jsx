import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';
import { IoMdAdd } from "react-icons/io";
import DeleteProject from '../components/DeleteProject';
import CreateNewProject from '../components/CreateNewProject'; // Import CreateNewProject modal component
import { useAppStore } from '../store/store';

const Home = () => {
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const {userInfo} = useAppStore()
  
  // State to control Delete Project modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);

  // State to control Create New Project modal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const toggleLayout = () => {
    setIsGridLayout((prevLayout) => !prevLayout);
  };

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
    document.body.classList.toggle('light-mode', !isLightMode);
  };

  // Function to handle opening the delete modal
  const handleDeleteClick = (projectName) => {
    setTargetProject(projectName);
    setIsDeleteModalOpen(true);
  };

  // Function to handle closing the delete modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTargetProject(null);
  };

  // Function to handle opening the create new project modal
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  // Function to handle closing the create new project modal
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  // Function to handle creating a new project (example function)
  const handleCreateProject = (newProject) => {
    console.log('New project created:', newProject);
    // Add logic here to update your projects list with the new project
    closeCreateModal();
  };

  return (
    <>
      <Navbar
        toggleLayout={toggleLayout}
        toggleTheme={toggleTheme}
        isLightMode={isLightMode}
        isGridLayout={isGridLayout}
      />

      <div className='px-10 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
          <h2 className='text-3xl font-semibold text-green-400 mb-6 md:mb-0'>
            Hi {userInfo.username}👋
          </h2>

          <div className='flex items-center gap-4 w-full md:w-auto'>
            <div className='w-full max-w-md'>
              <label className='relative block'>
                <input
                  type='text'
                  placeholder='Search Project'
                  className='w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400'
                />
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
            <button
              className='bg-green-400 rounded-lg px-4 py-2 text-xl text-white hover:bg-green-500 transition'
              onClick={openCreateModal} // Open CreateNewProject modal
            >
              <IoMdAdd />
            </button>
          </div>
        </div>

        <div className=''>
          {isGridLayout ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <GridCard projectName="My first project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
              <GridCard projectName="My Second project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
              <GridCard projectName="My Third project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
            </div>
          ) : (
            <div className='space-y-4'>
              <ListCard projectName="My first project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
              <ListCard projectName="My Second project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
              <ListCard projectName="My Third project" creationDate="9 mon 2023" onDelete={handleDeleteClick} />
            </div>
          )}
        </div>

        {/* Delete Project Modal */}
        {isDeleteModalOpen && (
          <DeleteProject 
            projectName={targetProject} 
            onClose={closeDeleteModal} 
          />
        )}

        {/* Create New Project Modal */}
        {isCreateModalOpen && (
          <CreateNewProject 
            onClose={closeCreateModal} 
            onCreate={handleCreateProject} 
          />
        )}
      </div>
    </>
  );
};

export default Home;
