import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminAuth from '../utils/auth/AdminAuth';
import HomeLayout from '../layoutes/HomeLayout';
import AdminLayout from '../layoutes/AdminLayout';

// Lazy-loaded components
const HomePage = lazy(() => import('../pages/user/HomePage'));
const AboutPage = lazy(() => import('../pages/user/AboutPage'));
const OurWorksPage = lazy(() => import('../pages/user/OurWorksPage'));
const ServicePage = lazy(() => import('../pages/user/ServicePage'));
const BlogPage = lazy(() => import('../pages/user/BlogPage'));
const SingleBlogPage = lazy(() => import('../pages/user/SingleBlogPage'));
const ContactPage = lazy(() => import('../pages/user/ContactPage'));
const Error404 = lazy(() => import('../pages/user/Error404'));
const Loading = lazy(() => import('../components/reusable/Loading'));

const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const AdminCarouselPage = lazy(() => import('../pages/admin/AdminCarouselPage'));
const AddCarouselPage = lazy(() => import('../pages/admin/AddCarouselPage'));
const AdminBlogPage = lazy(() => import('../pages/admin/AdminBlogPage'));
const CreateBlogPage = lazy(() => import('../pages/admin/CreateBlogPage'));
const AdminProjectPage = lazy(() => import('../pages/admin/AdminProjectPage'));
const AdminProjectForm = lazy(() => import('../pages/admin/AdminProjectForm'));
const AdminSettingsPage = lazy(() => import('../pages/admin/AdminSettingsPage'));
const AdminLogin = lazy(() => import('../pages/admin/AdminLogin'));

// Loading fallback component
// const Loading = () => (
//     <div className="flex justify-center items-center h-screen text-lg text-gray-700">
//         Loading...
//     </div>
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: '', element: <Suspense fallback={<Loading />}><HomePage /></Suspense>, index: true },
            { path: 'about', element: <Suspense fallback={<Loading />}><AboutPage /></Suspense> },
            { path: 'our-works', element: <Suspense fallback={<Loading />}><OurWorksPage /></Suspense> },
            { path: 'services', element: <Suspense fallback={<Loading />}><ServicePage /></Suspense> },
            { path: 'blog', element: <Suspense fallback={<Loading />}><BlogPage /></Suspense> },
            { path: 'blog/:id', element: <Suspense fallback={<Loading />}><SingleBlogPage /></Suspense> },
            { path: 'contact', element: <Suspense fallback={<Loading />}><ContactPage /></Suspense> },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                element: <AdminAuth />,
                children: [
                    { index: true, element: <Suspense fallback={<Loading />}><AdminDashboard /></Suspense> },
                    { path: 'carousel', element: <Suspense fallback={<Loading />}><AdminCarouselPage /></Suspense> },
                    { path: 'carousel/create', element: <Suspense fallback={<Loading />}><AddCarouselPage /></Suspense> },
                    { path: 'carousel/edit/:id', element: <Suspense fallback={<Loading />}><AddCarouselPage /></Suspense> },
                    { path: 'blogs', element: <Suspense fallback={<Loading />}><AdminBlogPage /></Suspense> },
                    { path: 'blogs/create', element: <Suspense fallback={<Loading />}><CreateBlogPage /></Suspense> },
                    { path: 'blogs/edit/:id', element: <Suspense fallback={<Loading />}><CreateBlogPage /></Suspense> },
                    { path: 'projects', element: <Suspense fallback={<Loading />}><AdminProjectPage /></Suspense> },
                    { path: 'projects/create', element: <Suspense fallback={<Loading />}><AdminProjectForm /></Suspense> },
                    { path: 'projects/edit/:id', element: <Suspense fallback={<Loading />}><AdminProjectForm /></Suspense> },
                    { path: 'settings', element: <Suspense fallback={<Loading />}><AdminSettingsPage /></Suspense> },
                ]
            }
        ]
    },
    { path: '/admin/login', element: <Suspense fallback={<Loading />}><AdminLogin /></Suspense> },
    { path: '*', element: <Suspense fallback={<Loading />}><Error404 /></Suspense> }
]);

export default router;