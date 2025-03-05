import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import BlogListing from '../../components/user/BlogPage/BlogListing';

const BlogPage = () => {
    return (
        <>
            <ReusableTitle 
                page='News'
                title='Stay Updated On The Latest News'
                description="Check out our latest blog posts and industry insights to stay informed about the latest trends, technologies, and project updates."
            />
            <BlogListing />
        </>
    )
}

export default BlogPage
