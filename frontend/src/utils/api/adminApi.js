import adminInstance from "../axios_instances/adminInstance";
import { toast } from 'react-toastify';

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        // console.log('admin login response:', response);
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
        console.log("error admin authentication:", error.response);
        return error.response;
    }
}

const adminLogoutApi = async () => {
    try {
        const response = await adminInstance.get('/logout');
        console.log('admin logout', response.data);
        return response.data;
    } catch (error) {
        console.log("error admin logout:", error.response);
        return error.response;
    }
}

const fetchCompanyInfoApi = async () => {
    try {
        const response = await adminInstance.get('/info');
        console.log('Company Inof response', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching company info:", error.response);
        return error.response;
    }
}

const fetchAdminDataApi = async () => {
    try {
        const response = await adminInstance.get('/get-admin-data');
        console.log('Admin data', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching admin data:", error.response);
        return error.response;
    }
}

const updateAdminDataApi = async (data) => {
    try {
        const response = await adminInstance.post('/update', data);
        console.log('updated admin data', response.data);
        return response.data;
    } catch (error) {
        console.log("error updating admin data:", error.response);
        return error.response;
    }
}

const fetchStatsApi = async () => {
    try {
        const response = await adminInstance.get('/stats');
        console.log('fetched stats:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching stats:", error.response);
        return error.response;
    }
}

export {
    adminLoginApi,
    isAdminAuthenticatedApi,
    adminLogoutApi,
    fetchAdminDataApi,
    updateAdminDataApi,
    fetchCompanyInfoApi,
    fetchStatsApi,
}