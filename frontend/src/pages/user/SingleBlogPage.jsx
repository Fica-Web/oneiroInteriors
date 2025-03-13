import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTag, FaUser, FaCalendarAlt } from "react-icons/fa";
import { getLatestBlogApi, getSingleBlogApi } from "../../utils/api/blogApi";
import LatestBlog from "../../components/user/BlogPage/LatestBlog";

const SingleBlogPage = () => {
    const { id } = useParams(); // Get blog ID from URL
    const [blog, setBlog] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Fetch blog data by ID
        const fetchBlog = async () => {
            const response = await getSingleBlogApi(id);
            setBlog(response.blog);
        };

        // Fetch latest blog data by ID
        const fetchLatestBlog = async () => {
            const response = await getLatestBlogApi(id);
            setLatestBlogs(response.latestBlogs);
        };

        fetchBlog();
        fetchLatestBlog();
    }, [id]);

    if (!blog) {
        return <div className="text-center py-20 text-gray-600">Loading...</div>;
    }

    // Format Date
    const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="border-t border-gray-500">
            <div className="w-11/12 mx-auto my-20">
                {/* Blog Details */}
                <motion.div
                    className="mt-10 foros-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="lg:text-6xl text-4xl ackeler-a text-gray-900 my-3">{blog.title}</h1>
                    <div className="flex items-center gap-4 text-gray-600 mt-8 text-sm">
                        <p className="flex items-center gap-2">
                            <FaUser className="text-primary" /> {blog.author}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCalendarAlt className="text-primary" /> {formattedDate}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaTag className="text-primary" /> {blog.category}
                        </p>
                    </div>
                    <p className="mt-5 mb-10 text-lg text-gray-900">{blog.description}</p>
                </motion.div>

                {/* Cover Image */}
                <motion.img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-auto shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Blog Content */}
                <motion.div
                    className="mt-10 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {blog.content.map((section, index) => (
                        <div key={index} className="lg:p-6 p-3">
                            <h2 className="text-3xl font-semibold text-gray-900">{section.contentTitle}</h2>
                            <p className="mt-3 text-lg text-gray-700">{section.contentDescription}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Blog Tags */}
                {blog.tags.length > 0 && (
                    <motion.div
                        className="flex flex-wrap gap-3 ml-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </motion.div>
                )}
            </div>

            <LatestBlog latestBlogs={latestBlogs} />
        </div>
    );
};

export default SingleBlogPage;