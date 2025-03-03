import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AdminTitleCard = ({ title }) => {
    return (
        <div className='my-5 px-3 '>
            <h2 className='text-3xl font-semibold'>
                Admin Console
            </h2>
            <div className='flex gap-3 items-center my-4'>
                <p>
                    Admin
                </p>
                <MdOutlineKeyboardArrowRight />
                <p className='text-admin-primary'>
                    { title }
                </p>
            </div>
        </div>
    )
}

export default AdminTitleCard
