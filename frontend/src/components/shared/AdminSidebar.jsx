import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import adminNavOptions from '../../data/adminNavOptions';
import { adminLogoutApi } from '../../utils/api/adminApi';

const AdminSidebar = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await adminLogoutApi();
        if (response) {
            navigate('/admin/login');
        }
    };

    return (
        <aside
            className={`z-50 text-admin-black bg-admin-white w-64 space-y-6 absolute inset-y-0 left-0 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
            <nav className='flex flex-col gap-5 my-20 bg-admin-white py-14 px-2'>
                <ul>
                    {adminNavOptions.map((option) => (
                        <NavLink
                            key={option.path}
                            to={option.path}
                            end={option.end || false} 
                            className={({ isActive }) =>
                                isActive
                                    ? " text-primary font-semibold py-2 p-10 hover:text-primary rounded-full border-4 border-admin-gray block"
                                    : "py-2 p-10 hover:text-primary rounded block"
                            }
                        >
                            {option.name}
                        </NavLink>
                    ))}
                </ul>
                <button
                    onClick={handleLogout}
                    className='flex items-center gap-1 py-2 p-10 my-5 text-red-600 font-semibold text-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                >
                    <IoMdLogOut className='font-extrabold' />
                    Logout
                </button>
            </nav>
        </aside>
    );
};

export default AdminSidebar;