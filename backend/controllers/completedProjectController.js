import CompletedProject from "../models/completedProjectSchema.js";

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