import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt, } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import logo from '../../assets/images/logo-black.png';
import navOptions from '../../data/navOptions';

const Footer = () => {
    return (
        <div
            // style={{ backgroundImage: 'linear-gradient(#FDECF0 40%, #F598A6 120%)' }}
            className="text-brown sm:pt-10 pt-6 lg:px-4 w-full bg-admin-gray"
        >
            <div className="mx-auto py-10 px-4 sm:px-10 lg:px-16">
                {/* Top Section */}
                <div className="pb-4 mb-4 border-b border-primary ">
                    <div className="flex justify-between items-center ">
                        {/* Logo Section */}
                        <div className="w-full lg:w-1/4 ">
                            <Link to={'/'} className='flex items-center'>
                                <img
                                    src={logo}
                                    alt="Flowra Logo"
                                    className='lg:h-10 h-8'
                                />
                            </Link>
                        </div>
                        {/* Social Icons */}
                        <div className="w-full lg:w-1/4 flex justify-end space-x-3">
                            <a
                                className="p-2 border border-brown rounded-full hover:text-white hover:bg-primary hover:border-0"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className='text-2xl font-semibold' />
                            </a>
                            <a
                                className="p-2 border border-brown rounded-full hover:text-white hover:bg-primary hover:border-0"
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className='text-2xl font-semibold' />
                            </a>
                            <a
                                className="p-2 border border-brown rounded-full  hover:text-white hover:bg-primary hover:border-0"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className='text-2xl font-semibold' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
                    {/* Section 1 */}
                    <div className=''>
                        <h4 className="text-lg mb-3">Why People Like us!</h4>
                        <p className="mb-4">
                            We believe a home should reflect its owners. Every design is tailored to match each client’s lifestyle and personality, creating spaces that feel both personal and functional.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block py-2 px-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-gray-50 hover:border-0"
                        >
                            Read More
                        </Link>
                    </div>
                    {/* Section 2 */}

                    <div className='flex flex-col lg:items-center'>
                        <div className='w-fit'>
                            <h4 className="font-semibold text-lg mb-7">Explore</h4>
                            <div className="flex flex-col space-y-2">
                                {navOptions.map((item) => (
                                    <Link to={item.path} className="hover:font-semibold text-lg">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-col lg:items-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-7">Account</h4>
                            <div className="flex flex-col space-y-2">
                                <Link to={'/flowra/blog'} className="hover:font-semibold text-lg">
                                    Blog
                                </Link>
                                <Link to={'/login'} className="hover:font-semibold text-lg">
                                    Login/Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Section 4 */}
                    <div className='flex flex-col lg:items-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-7" >Contact Us</h4>
                            <div className='flex gap-3 items-center text-lg mb-1'>
                                <FaPhoneAlt className='text-lg ' />
                                <p>+91 98754 32100</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg my-1'>
                                <IoIosMail className='text-2xl ' />
                                <p>oneirointeriors.in@gmail.com</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg mb-1'>
                                <IoLocationSharp className='text-xl ' />
                                <p>Kozhikode, Kerala, India</p>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <a
                                    className="p-2 border border-brown rounded-full hover:text-white hover:bg-primary hover:border-0"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className='text-2xl font-semibold' />
                                </a>
                                <a
                                    className="p-2 border border-brown rounded-full hover:text-white hover:bg-primary hover:border-0"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className='text-2xl font-semibold' />
                                </a>
                                <a
                                    className="p-2 border border-brown rounded-full  hover:text-white hover:bg-primary hover:border-0"
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className='text-2xl font-semibold' />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='lg:mt-20 mt-10 text-lg text-center lg:text-start'>
                    <p>
                        ©oneiro.in
                        <span className='mx-3'>Powered by
                            <a
                                className="ml-2 hover:text-blue-500"
                                href="https://ficaads.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fica Ads
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;