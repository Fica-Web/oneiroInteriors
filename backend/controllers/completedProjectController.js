import CompletedProject from "../models/completedProjectSchema.js";

export const getCompletedProject = async (req, res) => {
    try {
        const completedProjects = await CompletedProject.find();

        res.status(201).json({ completedProjects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Create a New Completed Project
export const createCompletedProject = async (req, res) => {
    try {
        const { title, thumbnail, youtubeUrl } = req.body;

        // Check if all required fields exist
        if (!title || !youtubeUrl) {
            return res.status(400).json({ error: "Title and YouTube URL are required" });
        }

        // Create new project instance
        const newProject = new CompletedProject({
            title,
            thumbnail,
            youtubeUrl,
        });

        // Save to database
        await newProject.save();

        res.status(201).json({
            message: "Completed Project created successfully!",
            project: newProject
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get a Completed Project by ID
export const getCompletedProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await CompletedProject.findById(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ success: true, project });
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// ✅ Update a Completed Project
export const updateCompletedProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, youtubeUrl } = req.body;

        // Validate input
        if (!title || !youtubeUrl) {
            return res.status(400).json({ message: "Title and YouTube URL are required" });
        }

        const updatedProject = await CompletedProject.findByIdAndUpdate(
            id,
            { title, youtubeUrl },
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ success: true, message: "Project updated successfully", updatedProject });
    } catch (error) {
        console.error("Error updating project:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// ✅ Delete a Completed Project
export const deleteCompletedProject = async (req, res) => {
    try {
        const { id } = req.params;

        // Find project by ID
        const project = await CompletedProject.findById(id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Delete project from database
        await CompletedProject.findByIdAndDelete(id);

        res.status(200).json({
            message: "Completed Project deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};