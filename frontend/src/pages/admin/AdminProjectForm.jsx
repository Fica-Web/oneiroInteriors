import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProjectApi,  } from "../../utils/api/projectApi";

const AdminProjectForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Form State
    const [project, setProject] = useState({
        title: "",
        thumbnail: "",
        youtubeUrl: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const isEditMode = Boolean(id);

    // Fetch project data if editing
    useEffect(() => {
        if (isEditMode) {
            const fetchProject = async () => {
                try {
                    const response = await getProjectByIdApi(id);
                    setProject(response.project);
                } catch (error) {
                    console.error("Error fetching project:", error);
                }
            };
            fetchProject();
        }
    }, [id, isEditMode]);

    // Handle input changes
    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    // Convert standard YouTube URL to an embed URL
    const convertYouTubeUrl = (url) => {
        const match = url.match(
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
        );
        return match ? `https://www.youtube.com/embed/${match[1]}` : "";
    };

    // Handle YouTube URL input
    const handleYouTubeUrlChange = (e) => {
        const inputUrl = e.target.value;
        const embedUrl = convertYouTubeUrl(inputUrl);
        setProject({ ...project, youtubeUrl: embedUrl });
    };

    // Validate form inputs
    const validateForm = () => {
        let errors = {};
        if (!project.title.trim()) errors.title = "Title is required.";

        if (project.thumbnail && !/^https?:\/\/.*\.(jpeg|jpg|png|gif|webp)$/.test(project.thumbnail)) {
            errors.thumbnail = "Invalid thumbnail URL. Use a valid image link.";
        }

        if (!project.youtubeUrl) {
            errors.youtubeUrl = "Please enter a valid YouTube URL.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            if (isEditMode) {
                await updateProjectApi(id, project);
                alert("Project updated successfully!");
            } else {
                await createProjectApi(project);
                alert("Project added successfully!");
            }
            navigate("/admin/projects");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to save project.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isEditMode ? "Edit Project" : "Add New Project"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title Input */}
                <div>
                    <label className="block text-gray-700 font-semibold">Project Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={project.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                {/* YouTube URL Input */}
                <div>
                    <label className="block text-gray-700 font-semibold">YouTube Video URL:</label>
                    <input
                        type="text"
                        name="youtubeUrl"
                        placeholder="Paste YouTube link (e.g., https://www.youtube.com/watch?v=abcd1234)"
                        onChange={handleYouTubeUrlChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.youtubeUrl && <p className="text-red-500 text-sm">{errors.youtubeUrl}</p>}
                    
                    {/* YouTube Video Preview */}
                    {project.youtubeUrl && (
                        <div className="mt-2">
                            <iframe
                                className="w-full h-56 rounded-lg"
                                src={project.youtubeUrl}
                                title="YouTube Preview"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                        disabled={loading}
                    >
                        {loading ? "Saving..." : isEditMode ? "Update Project" : "Add Project"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminProjectForm;