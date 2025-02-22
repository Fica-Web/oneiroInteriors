import React, { useState } from 'react';
import { createBlogsApi } from '../../utils/api/blogApi';
import BlogForm from '../../components/admin/blogPage/BlogForm';

const CreateBlogPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        category: "",
        tags: "",
        coverImage: "",
        content: [{ contentTitle: "", contentDescription: "" }],
    });

    const handleSubmit = async (formData) => {
        const response = await createBlogsApi(formData);

        if (response) {
            setFormData({
                title: "",
                description: "",
                author: "",
                category: "",
                tags: "",
                coverImage: "",
                content: [{ contentTitle: "", contentDescription: "" }],
            })
        }
    }

    return (
        <div>
            <BlogForm 
                onSubmit={handleSubmit} 
                formData={formData}
                setFormData={setFormData}
            />
        </div>
    )
}

export default CreateBlogPage
