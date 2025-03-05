import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
    return (
        <div className='flex flex-col gap-5'>
            <img src="https://framerusercontent.com/images/mHXkmW0Jfupllqyy8XPFTDe0k.jpg?scale-down-to=512" alt="" />
            <p>Aug 9, 2028</p>
            <h2 className='foros-medium text-3xl'>
                Beyond Functionality: Where Creativity and Interior Design
            </h2>
            <button className='w-fit'>
                <Link
                    to="/services"
                    className="bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d] py-3 px-8 text-white font-semibold shadow-md transition-all duration-300 hover:opacity-90 opacity-80"
                >
                    Explore More
                </Link>
            </button>
        </div>
    )
}

export default SingleBlog
