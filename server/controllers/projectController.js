import Project from "../models/projectModel.js";

// Create a new project
export const createProject = async (req, res) => {
  try {
    const { name, visibility, htmlCode, cssCode, jsCode } = req.body;

    // Validation
    if (!name) {
      return res.status(400).json({ error: 'Project name is required' });
    }

    const newProject = await Project.create({
      name,
      visibility,
      htmlCode,
      cssCode,
      jsCode,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single project by ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update project code
export const updateProjectCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { htmlCode, cssCode, jsCode } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { htmlCode, cssCode, jsCode },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
