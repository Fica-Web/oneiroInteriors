import React from 'react';
import SingleBlog from './SingleBlog';

const LatestBlog = ({ latestBlogs }) => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="my-20">
                <h2 className="text-4xl mb-6">Latest News</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {latestBlogs.map(latestBlog => (
                        <SingleBlog blog={latestBlog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestBlog
