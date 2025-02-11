import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layoutes/HomeLayout';
import AdminLayout from '../layoutes/AdminLayout';

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
    }
])

export default router