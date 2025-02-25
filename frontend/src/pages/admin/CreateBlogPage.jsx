import React, { useState } from 'react';
import { createBlogApi } from '../../utils/api/blogApi';
import BlogForm from '../../components/admin/blogPage/BlogForm';

const CreateBlogPage = () => {
    const [reset, setReset] = useState(false);

    const handleSubmit = async (formData) => {
        const response = await createBlogApi(formData);
        if (response) {
            console.log("Blog Created Successfully!");
            setReset(true); // Trigger reset
            setTimeout(() => setReset(false), 500); // Reset the flag to allow future resets
        }
    };

    return (
        <div>
            <BlogForm onSubmit={handleSubmit} reset={reset} />
        </div>
    );
};

export default CreateBlogPage;