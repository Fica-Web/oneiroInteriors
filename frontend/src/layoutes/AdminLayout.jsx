import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/shared/AdminNavbar';
import AdminSidebar from '../components/shared/AdminSidebar';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="flex h-screen bg-admin-white">
            <AdminSidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminNavbar onToggleSidebar={handleToggleSidebar} isOpen={isSidebarOpen} />
                <div className="flex-1 p-6 bg-admin-gray overflow-y-auto lg:rounded-tl-3xl">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
