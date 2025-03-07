import projectInstance from "../axios_instances/projectInstance";
import { toast } from 'react-toastify';

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

const getProjectByIdApi = async (id) => {
    try {
        const response = await projectInstance.get(`/${id}`);
        console.log('single project response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching single project:", error?.response?.data);
    }
}

const updateProjectApi = async (id, data) => {
    try {
        const response = await projectInstance.put(`/${id}`, data);
        console.log('updated Project response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error updating Project:", error?.response?.data);
    }
}

const deleteProjectApi = async (id) => {
    try {
        const response = await projectInstance.delete(`/${id}`);
        console.log('project deleted response:', response.data);
        toast.success(response.data.message)
        return response.data;
    } catch (error) {
        console.log("error deleting project:", error?.response?.data);
    }
}

export {
    getProjectsApi,
    createProjectApi,
    getProjectByIdApi,
    updateProjectApi,
    deleteProjectApi,
}