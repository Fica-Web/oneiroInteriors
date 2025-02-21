import React from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';
import AdminBlogListing from '../../components/admin/blogPage/AdminBlogListing';

const AdminBlogPage = () => {
    return (
        <div>
            <AdminTitleCard title='Blog' />
            <AdminBlogListing />
        </div>
    )
}

export default AdminBlogPage;
