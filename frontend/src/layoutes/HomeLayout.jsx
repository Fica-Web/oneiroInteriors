import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchAdminDataApi } from '../utils/api/adminApi';
import { set_company_info } from '../redux/slices/companySlice';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import WhatsAppButton from '../components/shared/WhatsappButton';

const HomeLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCompanyInfo = async () => {
            try {
                const response = await fetchAdminDataApi();
                if (response?.admin) {
                    dispatch(set_company_info(response.admin)); // ✅ Set company info in Redux
                }
            } catch (error) {
                console.error("Error fetching company info:", error);
            }
        };

        getCompanyInfo();
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <WhatsAppButton />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeLayout
