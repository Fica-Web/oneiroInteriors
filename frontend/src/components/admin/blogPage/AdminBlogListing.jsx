import React, { useState, useEffect } from 'react';
import { getBlogsApi } from '../../../utils/api/blogApi';
import { Link } from 'react-router-dom';

const AdminBlogListing = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className='p-5'>

            {loading && <p className='text-gray-600 text-center'>Loading blogs...</p>}
            {error && <p className='text-red-500 text-center'>{error}</p>}
            {!loading && blogs.length === 0 && <p className='text-gray-600 text-center'>No blogs found.</p>}

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {blogs.map((blog) => (
                    <div 
                        key={blog._id} 
                        className='bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform duration-300 hover:scale-105'
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
                            <Link 
                                to={`/admin/blogs/${blog._id}`} 
                                className='mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                            >
                                View Blog
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminBlogListing;