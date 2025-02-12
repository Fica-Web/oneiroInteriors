import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layoutes/HomeLayout';
import AdminLayout from '../layoutes/AdminLayout';
import AdminLogin from '../pages/admin/AdminLogin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [

        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />,
    }
])

export default router