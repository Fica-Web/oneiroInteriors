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

const createBlogsApi = async (data) => {
    try {
        const response = await blogInstance.post('/', data);
        console.log('Blogs created response:', response);
        return response.data;
    } catch (error) {
        console.log("error creating blogs:", error.response.data);
    }
}

const getSingleBlogApi = async (id) => {
    try {
        const response = await blogInstance.get(`/${id}`);
        console.log('single blog response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blog:", error.response.data);
    }
}

const updateBlogsApi = async (data) => {
    try {
        const response = await blogInstance.put(`/${id}`, data);
        console.log('updated blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error updating blogs:", error.response.data);
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
    updateBlogsApi,
    deleteBlogsApi,
}