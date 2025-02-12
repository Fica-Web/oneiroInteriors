import adminInstance from "../axios_instances/adminInstance";
import { toast } from 'react-toastify';

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        console.log('admin login response:', response);
        return response.data;
    } catch (error) {
        console.log("error during login:", error.response.data);
        return toast.error(error.response.data.error);
    }
}

const isAdminAuthenticatedApi = async () => {
    try {
        const response = await adminInstance.get('/is-admin-protected');
        console.log('admin auhthenticated response:', response);
        return response.data;
    } catch (error) {
        console.error("error admin authentication:", error.response.data);
    }
}

export {
    adminLoginApi,
    isAdminAuthenticatedApi,
}