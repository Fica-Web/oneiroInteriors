import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import WhatsAppButton from '../components/shared/WhatsappButton';

const HomeLayout = () => {
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
