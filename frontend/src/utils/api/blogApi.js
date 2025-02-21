import blogInstance from "../axios_instances/blogInstance";

const getBlogsApi = async () => {
    try {
        const response = await adminInstance.get('/');
        console.log('get blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blogs:", error.response.data);
    }
}

const createBlogsApi = async (data) => {
    try {
        const response = await adminInstance.post('/', data);
        console.log('Blogs created response:', response);
        return response.data;
    } catch (error) {
        console.log("error creating blogs:", error.response.data);
    }
}

const updateBlogsApi = async (data) => {
    try {
        const response = await adminInstance.put('/', data);
        console.log('updated blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error updating blogs:", error.response.data);
    }
}

const deleteBlogsApi = async () => {
    try {
        const response = await adminInstance.delete('/');
        console.log('deleted blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error deleting blogs:", error.response.data);
    }
}

export {
    getBlogsApi,
    createBlogsApi,
    updateBlogsApi,
    deleteBlogsApi,
}