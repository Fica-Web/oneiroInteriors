import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminAuthenticatedApi } from '../api/adminApi';

const useCheckAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await isAdminAuthenticatedApi();
                
                if (response?.isAuthenticated) {
                    return navigate('/admin');
                }
            } catch (error) {
                console.log('Authentication check failed:', error);
            }
        };
        checkAuthStatus();
    }, [navigate]);
};

export default useCheckAuth;