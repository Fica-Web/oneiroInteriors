import blogInstance from "../axios_instances/blogInstance";
import { toast } from "react-toastify";

const getBlogsApi = async () => {
    try {
        const response = await blogInstance.get('/');
        console.log('get blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blogs:", error.response.data);
    }
}

const createBlogsApi = async (formData) => {
    const data = new FormData();

    // Append text fields
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("slug", formData.slug);
    data.append("author", formData.author);
    data.append("category", formData.category);
    data.append("tags", JSON.stringify(formData.tags)); // Convert tags to JSON string
    data.append("content", JSON.stringify(formData.content)); // Convert content to JSON string

    // Append image file
    data.append("coverImage", formData.coverImage);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        const response = await blogInstance.post("/", data, config);
        
        console.log("Full Response:", response); // 🔍 Debug response
        
        if (response.status === 201) {
            console.log("Success Response Data:", response.data);
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error creating blogs:", error);
    }
};

const getSingleBlogApi = async (id) => {
    try {
        const response = await blogInstance.get(`/${id}`);
        console.log('single blog response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching blog:", error?.response?.data);
    }
}

const updateBlogApi = async (id, data) => {
    const formData = new FormData();

    // Append text fields
    formData.append("title", formData.title);
    formData.append("description", formData.description);
    formData.append("slug", formData.slug);
    formData.append("author", formData.author);
    formData.append("category", formData.category);
    formData.append("tags", JSON.stringify(formData.tags)); // Convert tags to JSON string
    formData.append("content", JSON.stringify(formData.content)); // Convert content to JSON string

    // Append image file
    formData.append("coverImage", formData.coverImage);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        console.log('Update blog works')
        const response = await blogInstance.put(`/${id}`, data, config);
        console.log('updated blogs response:', response);
        toast.success(response.data.message)
        return response.data;
    } catch (error) {
        console.log("error updating blogs:", error?.response?.data);
    }
}

const deleteBlogsApi = async (id) => {
    try {
        const response = await blogInstance.delete(`/${id}`);
        console.log('deleted blogs response:', response);
        toast.success(response.data.message)
        return response.data;
    } catch (error) {
        console.log("error deleting blogs:", error.response.data);
    }
}

export {
    getBlogsApi,
    createBlogsApi,
    getSingleBlogApi,
    updateBlogApi,
    deleteBlogsApi,
}