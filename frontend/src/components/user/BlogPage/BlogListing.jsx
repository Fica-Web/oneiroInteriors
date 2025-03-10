import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { getBlogsApi } from '../../../utils/api/blogApi';
import SingleBlog from './SingleBlog';

const BlogListing = ({ isHomePage }) => {
    const [blogs, setBlogs] = useState([]);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        const getBlogs = async () => {
            const response = await getBlogsApi();
            setBlogs(response.blogs)
        }

        getBlogs()
    }, [])

    // Determine the number of blogs to display
    const blogsToShow = isHomePage ? blogs.slice(0, 2) : blogs;

    return (
        <div ref={ref} className='w-11/12 mx-auto my-20 lg:my-32' >
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {isHomePage && blogs.length > 0 && (
                    <div className="w-full lg:pt-16 p-3 relative group">

                    {/* Overlay Effect */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-secondary via-ternary to-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div> */}

                        {/* Page Indicator */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="h-0.5 w-14 bg-primary rounded"></div>
                            <h3 className="text-lg tracking-wide text-gray-900 foros-medium">
                                News
                            </h3>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            className="lg:text-5xl text-4xl foros-medium text-gray-900 mt-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Stay Updated with Our Latest Insights
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="mt-5 text-lg text-gray-700 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Check out our latest blog posts and industry insights to stay informed about the latest trends, technologies, and project updates.
                        </motion.p>
                    </div>
                )}
                {blogsToShow.map((blog, index) => (
                    <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SingleBlog blog={blog} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default BlogListing