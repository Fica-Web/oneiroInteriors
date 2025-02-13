import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { isAdminAuthenticatedApi } from "../api/adminApi";

const AdminAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await isAdminAuthenticatedApi();
                // console.log('response from admin page:', response.isAuthenticated)
                setIsAuthenticated(response && response.isAuthenticated);
            } catch (error) {
                console.error("Error checking admin authentication:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false); // Set loading to false once the check is complete
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div className='w-full h-[90vh] flex justify-center items-center'>Loading...</div>; // Optionally display a loading message
    }

    return isAuthenticated ? <Outlet /> : <Navigate to='/admin/login' replace />;
};

export default AdminAuth;