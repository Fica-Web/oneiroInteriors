import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjectsApi, deleteProjectApi } from "../../../utils/api/projectApi";

const ProjectListing = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjectsApi();
                setProjects(response.completedProjects);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Failed to load projects. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;

        setLoading(true);
        try {
            await deleteProjectApi(id);
            setProjects(projects.filter((project) => project._id !== id));
        } catch (err) {
            console.error("Error deleting project:", err);
            alert("Failed to delete project.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-5">
            {/* Add Project Button */}
            <div className="flex justify-end mb-5">
                <Link
                    to={"/admin/project/create"}
                    className="text-white bg-blue-500 px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-600"
                >
                    Add Project
                </Link>
            </div>

            {/* Loading & Error Handling */}
            {loading && <p className="text-gray-600 text-center">Loading Projects...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && projects.length === 0 && <p className="text-gray-600 text-center">No projects found.</p>}

            {/* Project List */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform transform duration-300 hover:scale-105"
                    >
                        {/* Project Thumbnail */}
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={project.thumbnail || "https://via.placeholder.com/400"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

                            {/* YouTube Video */}
                            <div className="mt-3">
                                <iframe
                                    className="w-full h-40 rounded-lg"
                                    src={project.youtubeUrl}
                                    title={project.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Buttons */}
                            <div className="mt-3 flex justify-between">
                                {/* Edit Button */}
                                <Link
                                    to={`/admin/project/edit/${project._id}`}
                                    className="bg-green-600 text-white px-7 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                                >
                                    Edit
                                </Link>
                                {/* Delete Button */}
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(project._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectListing;
