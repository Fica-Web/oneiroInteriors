import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

const AdminSidebar = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await adminLogoutApi();
        if (response){
            navigate('/admin/login')
        }
    }

    return (
        <aside
            className={`z-50 text-admin-black bg-admin-white w-64 space-y-6 absolute inset-y-0 left-0 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
            <nav className='flex flex-col gap-5 my-20 bg-admin-white py-14'>
                <ul className=''>
                    <NavLink
                        to="/admin" end
                        className={({ isActive }) =>
                            isActive
                                ? "bg-admin-gray text-primary py-2 p-10 hover:text-primary rounded block"
                                : "py-2 p-10 hover:text-primary rounded block"
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-admin-gray py-2 p-10 hover:bg-admin-white rounded block"
                                : "py-2 p-10 hover:text-primary rounded block"
                        }
                    >
                        Users
                    </NavLink>
                    <NavLink
                        to="/admin/reports"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-admin-gray py-2 p-10 hover:text-primary rounded block"
                                : "py-2 p-10 hover:text-primary rounded block"
                        }
                    >
                        Reports
                    </NavLink>
                </ul>
                <button className='flex items-center gap-1 py-2 p-10 my-5 text-red-600 font-semibold text-lg'>
                    <IoMdLogOut className='font-extrabold' />
                    Logout
                </button>
            </nav>
        </aside>
    );
};

export default AdminSidebar;