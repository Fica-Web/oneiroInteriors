import adminInstance from "../axios_instances/adminInstance";
import { toast } from 'react-toastify';

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        return response.data;
    } catch (error) {
        console.log("error during login:", error.response.data);
        return toast.error(error.response.data.error);
    }
}

const isAdminAuthenticatedApi = async () => {
    try {
        const response = await adminInstance.get('/is-admin-protected');
        return response.data;
    } catch (error) {
        console.log("error admin authentication:", error.response);
        return error.response;
    }
}

const adminLogoutApi = async () => {
    try {
        const response = await adminInstance.get('/logout');
        return response.data;
    } catch (error) {
        console.log("error admin logout:", error.response);
        return error.response;
    }
}

const fetchCompanyInfoApi = async () => {
    try {
        const response = await adminInstance.get('/info');
        return response.data;
    } catch (error) {
        console.log("error fetching company info:", error.response);
        return error.response;
    }
}

const fetchAdminDataApi = async () => {
    try {
        const response = await adminInstance.get('/get-admin-data');
        return response.data;
    } catch (error) {
        console.log("error fetching admin data:", error.response);
        return error.response;
    }
}

const updateAdminDataApi = async (data) => {
    try {
        const response = await adminInstance.post('/update', data);
        return response.data;
    } catch (error) {
        console.log("error updating admin data:", error.response);
        return error.response;
    }
}

const fetchStatsApi = async () => {
    try {
        const response = await adminInstance.get('/stats');
        return response.data;
    } catch (error) {
        console.log("error fetching stats:", error.response);
        return error.response;
    }
}

const fetchLatestDataApi = async () => {
    try {
        const response = await adminInstance.get('/latest-data');
        return response.data;
    } catch (error) {
        console.log("error fetching latest data:", error.response);
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
    fetchLatestDataApi,
}