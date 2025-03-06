import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import logo from '../../assets/images/logo-black.png';
import navOptions from '../../data/navOptions';

const Footer = () => {
    return (
        <div className="text-white sm:pt-10 pt-6 lg:px-4 w-full bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d] opacity-90">
            <div className="mx-auto py-12 px-6 sm:px-12 lg:px-20">
                {/* Top Section */}
                <div className="pb-6 mb-6 border-b border-white/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Logo Section */}
                        <div className="w-full lg:w-1/4 flex justify-center sm:justify-start">
                            <Link to={'/'} className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Oneiro Logo"
                                    className="h-10 lg:h-12 drop-shadow-lg"
                                />
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="w-full lg:w-1/4 flex justify-center sm:justify-end space-x-4">
                            <a
                                className="p-3 bg-white/20 hover:bg-white hover:text-primary transition rounded-full"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                className="p-3 bg-white/20 hover:bg-white hover:text-primary transition rounded-full"
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a
                                className="p-3 bg-white/20 hover:bg-white hover:text-primary transition rounded-full"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
                    {/* Section 1 */}
                    <div>
                        <h4 className="text-lg mb-4 font-semibold">Why People Like Us!</h4>
                        <p className="mb-4 opacity-80">
                            We believe a home should reflect its owners. Every design is tailored to match each client’s lifestyle and personality, creating spaces that feel both personal and functional.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block py-2 px-5 border border-white text-white rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Read More
                        </Link>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-col lg:items-center'>
                        <div className='w-fit'>
                            <h4 className="font-semibold text-lg mb-5">Explore</h4>
                            <div className="flex flex-col space-y-2">
                                {navOptions.map((item, index) => (
                                    <Link key={index} to={item.path} className="hover:underline text-lg opacity-80 hover:opacity-100">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3 (Contact Us) */}
                    <div className='flex flex-col lg:items-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-5">Contact Us</h4>
                            <div className='flex gap-3 items-center text-lg mb-2 opacity-80'>
                                <FaPhoneAlt className='text-lg' />
                                <p>+91 98754 32100</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg my-2 opacity-80'>
                                <IoIosMail className='text-2xl' />
                                <p>oneirointeriors.in@gmail.com</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg mb-2 opacity-80'>
                                <IoLocationSharp className='text-xl' />
                                <p>Kozhikode, Kerala, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className='lg:mt-16 mt-10 text-lg text-center lg:text-start opacity-80'>
                    <p>
                        ©oneiro.in
                        <span className='mx-3'>
                            Powered by
                            <a
                                className="ml-2 hover:text-white hover:underline"
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