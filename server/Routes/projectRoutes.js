import express from "express"
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectCode,
    deleteProject,
}
    from "../controllers/projectController.js"


const projectRoutes = express.Router();

// Routes
projectRoutes.post('/projects', createProject); // Create a new project
projectRoutes.get('/projects', getAllProjects); // Get all projects
projectRoutes.get('/projects/:id', getProjectById); // Get a specific project by ID
projectRoutes.put('/projects/:id/code', updateProjectCode); // Update HTML/CSS/JS code for a project
projectRoutes.delete('/projects/:id', deleteProject); // Delete a specific project by ID


export default projectRoutes;
