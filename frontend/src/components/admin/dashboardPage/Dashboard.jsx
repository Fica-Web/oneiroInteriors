import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlus, FaBlog, FaEnvelope, FaTasks } from "react-icons/fa";
import { fetchStatsApi, fetchLatestDataApi } from "../../../utils/api/adminApi";
import StatCard from "./StatCard";

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const statsRes = await fetchStatsApi();
            const latestRes = await fetchLatestDataApi();

            setStats(statsRes);
            setProjects(latestRes.projects || []);
            setBlogs(latestRes.blogs || []);
            setMessages(latestRes.messages || []);
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard title="Total Projects" value={stats?.totalProjects || 0} />
                <ActionButton icon={<FaPlus />} label="Add Project" path={"/admin/projects/create"} />
                <StatCard title="Total Blogs" value={stats?.totalBlogs || 0} />
                <ActionButton icon={<FaBlog />} label="Create Blog" path={"/admin/blogs/create"} />
            </div>

            {/* Recent Projects & Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RecentProjects projects={projects} />
                <RecentBlogs blogs={blogs} />
            </div>

            {/* Messages & Activity Log */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActivityLog />
            </div>
        </div>
    );
};

/* 🏗️ Recent Projects Section */
const RecentProjects = ({ projects }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project, index) => (
                        <li key={index} className="border-b py-2 flex justify-between">
                            <span>{project.title}</span>
                            <span className="text-sm text-gray-500">Completed</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No recent projects.</p>
            )}
        </div>
    );
};

/* 🏗️ Recent Blogs Section */
const RecentBlogs = ({ blogs }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
            {blogs.length > 0 ? (
                <ul>
                    {blogs.map((blog, index) => (
                        <li key={index} className="border-b py-2 flex justify-between">
                            <span>{blog.title}</span>
                            <span className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No recent blog posts.</p>
            )}
        </div>
    );
};

/* 🏗️ Activity Log Section */
const ActivityLog = () => {
    const activities = [
        "New project added: 'Luxury Living Room'",
        "Blog post published: '5 Tips for Small Spaces'",
        "Inquiry replied to: John Doe",
    ];

    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
            <ul className="text-sm text-gray-600">
                {activities.map((activity, index) => (
                    <li key={index} className="border-b py-2">{activity}</li>
                ))}
            </ul>
        </div>
    );
};

/* 🏗️ Reusable Action Button */
const ActionButton = ({ icon, label, path }) => {
    return (
        <Link to={path}>
            <motion.button
                className="bg-primary w-full h-full text-white p-4 rounded-xl flex flex-col items-center justify-center shadow-md hover:bg-ternary transition duration-300"
                whileHover={{ scale: 1.05 }}
            >
                <span className="text-2xl">{icon}</span>
                <span className="mt-2 text-sm">{label}</span>
            </motion.button>
        </Link>
    );
};

export default Dashboard;