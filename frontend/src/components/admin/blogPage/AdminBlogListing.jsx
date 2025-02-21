import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getBlogsApi, deleteBlogsApi } from '../../../utils/api/blogApi';
import { Link, useNavigate } from 'react-router-dom';

const AdminBlogListing = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogsApi();
                setBlogs(response.blogs);
            } catch (err) {
                setError("Failed to load blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlogsApi(id);
                setBlogs(blogs.filter(blog => blog._id !== id));
            } catch (err) {
                console.error("Error deleting blog:", err);
                toast.error("Failed to delete blog.");
            }
        }
    };

    return (
        <div className='p-5'>
            <div className='flex justify-end mb-5'>
                <Link to={'/admin/blogs/create'} className='text-white bg-blue-500 px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-600'>
                    Add Blog
                </Link>
            </div>

            {loading && <p className='text-gray-600 text-center'>Loading blogs...</p>}
            {error && <p className='text-red-500 text-center'>{error}</p>}
            {!loading && blogs.length === 0 && <p className='text-gray-600 text-center'>No blogs found.</p>}

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {blogs.map((blog) => (
                    <div 
                        key={blog._id} 
                        className='bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform transform duration-300 hover:scale-105'
                        onClick={() => navigate(`/admin/blogs/${blog._id}`)} // Navigate on card click
                    >
                        <div className='w-full h-48 bg-gray-200'>
                            <img 
                                src={blog.coverImage || 'https://via.placeholder.com/400'} 
                                alt={blog.title} 
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-900'>{blog.title}</h3>
                            <div className='mt-3 flex justify-between'>
                                <Link 
                                    to={`/admin/blogs/edit/${blog._id}`} 
                                    className='bg-green-600 text-white px-7 py-2 rounded-lg hover:bg-green-700 transition duration-200'
                                    onClick={(e) => e.stopPropagation()} // Prevent navigation on edit click
                                >
                                    Edit
                                </Link>
                                <button 
                                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200'
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent navigation on delete click
                                        handleDelete(blog._id);
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

export default AdminBlogListing;