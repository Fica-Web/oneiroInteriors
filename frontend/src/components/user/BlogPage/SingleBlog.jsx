import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
    // Convert ISO date (2025-02-22T09:13:33.010Z) to "Aug 9, 2028" format
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className='flex flex-col gap-3 overflow-hidden'>
            <img
                    src={blog.coverImage}
                    alt="Blog"
                    className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
                />
            <p className='font-mono text-gray-600 text-lg'>{formattedDate}</p>
            <h2 className='foros-medium lg:text-3xl text-2xl mb-4'>
                {blog.title}
            </h2>
            <button className='w-fit flex'>
                <Link
                    to={`/blog/${blog._id}`}
                    className="uppercase bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d] py-3 px-8 text-white font-semibold shadow-md transition-all duration-300 hover:opacity-90 opacity-80"
                >
                    Read Full Post
                </Link>
            </button>
        </div>
    );
};

export default SingleBlog;