import projectInstance from "../axios_instances/projectInstance";

const getProjectsApi = async () => {
    try {
        const response = await projectInstance.get('/');
        console.log('single blog response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching blog:", error?.response?.data);
    }
}

const createProjectApi = async (data) => {
    try {
        const response = await projectInstance.post('/', data);
        console.log('single blog response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching blog:", error?.response?.data);
    }
}

const deleteProjectApi = async () => {
    try {
        const response = await projectInstance.get(`/${id}`);
        console.log('single blog response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching blog:", error?.response?.data);
    }
}

export {
    getProjectsApi,
    createProjectApi,
    deleteProjectApi,
}