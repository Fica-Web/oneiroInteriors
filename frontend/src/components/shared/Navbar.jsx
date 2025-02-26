import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import navOptions from '../../data/navOptions';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="">
            <div className="w-full mx-auto sm:px-4 lg:px-7 ">
                <div className="flex items-center justify-between h-24 ">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-xl font-bold">
                            <img 
                                src={logo} 
                                alt="Oneiro Logo"
                                className='lg:h-8 h-6'
                            />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:space-x-6 space-x-2 items-center text-sm font-semibold uppercase">
                        {navOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.path}  // ✅ FIXED
                                end={option.end || false}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md ${
                                        isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                                    }`
                                }
                            >
                                {option.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="hover:text-primary p-2 rounded-md cursor-pointer"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // Close icon
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out bg-gray-100 absolute top-20 right-0 left-0 z-50 ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="px-4 py-2 space-y-2">
                    {navOptions.map((option) => (
                        <NavLink
                            key={option.name}
                            to={option.path}  // ✅ FIXED
                            end={option.end || false}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {option.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;