import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminAuth from '../utils/auth/AdminAuth';
import HomeLayout from '../layoutes/HomeLayout';
import HomePage from '../pages/user/HomePage';
import AboutPage from '../pages/user/AboutPage';
import OurWorksPage from '../pages/user/OurWorksPage';
import ServicePage from '../pages/user/ServicePage';
import BlogPage from '../pages/user/BlogPage';
import SingleBlogPage from '../pages/user/SingleBlogPage';
import ContactPage from '../pages/user/ContactPage';
import AdminLayout from '../layoutes/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminCarouselPage from '../pages/admin/AdminCarouselPage';
import AddCarouselPage from '../pages/admin/AddCarouselPage';
import AdminBlogPage from '../pages/admin/AdminBlogPage';
import AdminProjectPage from '../pages/admin/AdminProjectPage';
import AdminSettingsPage from '../pages/admin/AdminSettingsPage';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminEditBlogPage from '../pages/admin/AdminEditBlogPage';
import CreateBlogPage from '../pages/admin/CreateBlogPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
                index: true // Defines this as the default route for "/"
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'our-works',
                element: <OurWorksPage />
            },
            {
                path: 'services',
                element: <ServicePage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'blog/:id',
                element: <SingleBlogPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
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
                        path: 'carousel',
                        element: <AdminCarouselPage />
                    },
                    {
                        path: 'carousel/create',
                        element: <AddCarouselPage />
                    },
                    {
                        path: 'blogs',
                        element: <AdminBlogPage />
                    },
                    {
                        path: 'blogs/create/',  
                        element: <CreateBlogPage />
                    },
                    {
                        path: 'blogs/edit/:id',  
                        element: <CreateBlogPage />
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