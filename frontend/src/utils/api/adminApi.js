import adminInstance from "../axios_instances/adminInstance";

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        console.log('admin login response:', response)
    } catch (error) {
        console.log("error during login:", error.response.data);
    }
}

const isAdminAuthenticatedApi = async () => {
    try {
        const response = await adminInstance.get('/is-admin-protected');
        console.log('admin auhthenticated response:', response)
    } catch (error) {
        console.log("error admin authentication:", error.response.data);
    }
}

export {
    adminLoginApi,
    isAdminAuthenticatedApi,
}