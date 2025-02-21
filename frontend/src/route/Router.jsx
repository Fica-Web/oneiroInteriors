import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminAuth from '../utils/auth/AdminAuth';
import HomeLayout from '../layoutes/HomeLayout';
import AdminLayout from '../layoutes/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminBlogPage from '../pages/admin/AdminBlogPage';
import AdminProjectPage from '../pages/admin/AdminProjectPage';
import AdminSettingsPage from '../pages/admin/AdminSettingsPage';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminEditBlogPage from '../pages/admin/AdminEditBlogPage';
import BlogForm from '../components/admin/blogPage/BlogForm';

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
                        path: 'blogs',
                        element: <AdminBlogPage />
                    },
                    {
                        path: 'blogs/create/',  
                        element: <BlogForm />
                    },
                    {
                        path: 'blogs/edit/:id',  
                        element: <AdminEditBlogPage />
                    },
                    {
                        path: 'projects',
                        element: <AdminProjectPage />
                    },
                    {
                        path: 'settings',
                        element: <AdminSettingsPage />
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