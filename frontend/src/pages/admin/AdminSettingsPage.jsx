import React from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';
import AdminSettingsBox from '../../components/admin/settingsPage/SettingsBox';

const AdminSettingsPage = () => {

    return (
        <>
            <AdminTitleCard title='Settings' />
            <AdminSettingsBox />
        </>
    )
}

export default AdminSettingsPage;