import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
    // Convert ISO date to "Aug 9, 2028" format
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="flex flex-col gap-3 overflow-hidden h-full group relative">
            {/* Blog Image */}
            <img
                src={blog.coverImage}
                alt="Blog"
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Blog Content */}
            <div className="relative p-4 h-full transition-all duration-500 group-hover:text-white">
                <p className="font-mono text-gray-600 text-lg group-hover:text-white">{formattedDate}</p>
                <h2 className="foros-medium lg:text-3xl text-2xl mb-4">
                    {blog.title}
                </h2>

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-ternary to-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>

                {/* Read More Button */}
                <button className="w-fit flex">
                    <Link
                        to={`/blog/${blog._id}`}
                        className="uppercase bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d] py-3 px-8 text-white font-semibold shadow-md transition-all duration-300 hover:opacity-90 opacity-80"
                        onClick={() => window.scrollTo(0, 0)} // Ensure scroll to top on click
                    >
                        Read Full Post
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default SingleBlog;