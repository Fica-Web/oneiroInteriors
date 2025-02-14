import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminAuth from '../utils/auth/AdminAuth';
import HomeLayout from '../layoutes/HomeLayout';
import AdminLayout from '../layoutes/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminBlogPage from '../pages/admin/AdminBlogPage';
import AdminProjectPage from '../pages/admin/AdminProjectPage';
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
            {
                element: <AdminAuth />,
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />
                    },
                    {
                        path: 'blog',
                        element: <AdminBlogPage />
                    },
                    {
                        path: 'projects',
                        element: <AdminProjectPage />
                    },
                ]
            }
        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />,
    }
])

export default router