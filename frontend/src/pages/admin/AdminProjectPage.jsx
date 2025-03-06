import React from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';
import ProjectListing from '../../components/admin/projectsPage/ProjectListing';

const AdminProjectPage = () => {
    return (
        <div>
            <AdminTitleCard title='Projects' />
            <ProjectListing />
        </div>
    )
}

export default AdminProjectPage
