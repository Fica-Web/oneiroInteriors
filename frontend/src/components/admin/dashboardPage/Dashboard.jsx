import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaPlus, FaBlog, FaEnvelope, FaTasks } from "react-icons/fa";
import { fetchStatsApi } from "../../../utils/api/adminApi";
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
            // const projectsRes = await fetch("/api/dashboard/projects");
            // const blogsRes = await fetch("/api/dashboard/blogs");
            // const messagesRes = await fetch("/api/dashboard/messages");

            // const statsData = await statsRes.json();
            // const projectsData = await projectsRes.json();
            // const blogsData = await blogsRes.json();
            // const messagesData = await messagesRes.json();

            setStats(statsRes);
            // setProjects(projectsData);
            // setBlogs(blogsData);
            // setMessages(messagesData);
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard title="Total Projects" value={stats?.totalProjects || 0} />
                <ActionButton icon={<FaPlus />} label="Add Project" path={'/admin/projects/create'} />
                <StatCard title="Total Blogs" value={stats?.totalBlogs || 0} />
                <ActionButton icon={<FaBlog />} label="Create Blog" path={'/admin/blogs/create'} />
            </div>

            {/* Recent Projects & Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RecentProjects />
                <RecentBlogs />
            </div>

            {/* Messages & Activity Log */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactMessages />
                <ActivityLog />
            </div>

            {/* Quick Actions */}
            <QuickActions />
        </div>
    );
};

// Recent Projects Section
const RecentProjects = () => {
    const projects = [
        { title: "Luxury Living Room", status: "Completed" },
        { title: "Modern Kitchen", status: "In Progress" },
        { title: "Cozy Bedroom", status: "Completed" },
    ];

    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="border-b py-2 flex justify-between">
                        <span>{project.title}</span>
                        <span className="text-sm text-gray-500">{project.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Recent Blogs Section
const RecentBlogs = () => {
    const blogs = [
        { title: "5 Tips for Small Spaces", date: "March 10, 2025" },
        { title: "Choosing the Right Colors", date: "March 5, 2025" },
    ];

    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index} className="border-b py-2 flex justify-between">
                        <span>{blog.title}</span>
                        <span className="text-sm text-gray-500">{blog.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Contact Messages Overview
const ContactMessages = () => {
    return (
        <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Latest Messages</h2>
            <p className="text-gray-500">3 new inquiries received.</p>
        </div>
    );
};

// Activity Log
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

// Quick Actions Section
const QuickActions = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">

            <ActionButton icon={<FaEnvelope />} label="View Messages" />
            <ActionButton icon={<FaTasks />} label="Manage Tasks" />
        </div>
    );
};

// Reusable Quick Action Button
const ActionButton = ({ icon, label, path }) => {
    return (
        <Link to={path}>
            <motion.button
                className="bg-primary w-full h-full text-white p-4 rounded-xl flex flex-col items-center justify-center shadow-md hover:bg-orange-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
            >
                <span className="text-2xl">{icon}</span>
                <span className="mt-2 text-sm">{label}</span>
            </motion.button>
        </Link>
    );
};

export default Dashboard;
