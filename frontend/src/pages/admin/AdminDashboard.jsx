import React from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';
import Dashboard from '../../components/admin/dashboardPage/Dashboard';

const AdminDashboard = () => {
    return (
        <div>
            <AdminTitleCard title='Dashboard' />
            <Dashboard />
        </div>
    )
}

export default AdminDashboard;
