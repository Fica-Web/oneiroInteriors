import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto sm:px-4 lg:px-7 my-20 mb-32">
                <div className="py-16 lg:px-12 sm:px-8 px-4 bg-admin-gray rounded-lg shadow-md">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="text-center mx-auto max-w-3xl text-lg ">
                                <h1 className="text-dark-green font-regular text-xl sm:text-3xl lg:text-5xl font-bold mb-10 ackeler-a">Get in touch</h1>
                                <p className=" text-gray-700">
                                    Oneiro Interiors is a creative interior design company dedicated to transforming spaces into personalized and functional environments. With a keen eye for detail and a passion for aesthetics, we craft interiors that blend elegance, comfort, and innovation. Whether it's a home, office, or commercial space, we bring your vision to life with thoughtful design solutions tailored to your lifestyle.
                                </p>
                                <p className='mb-12 text-gray-700'>
                                    Feel free to reach out to us—we’d love to help design your dream space!
                                </p>
                            </div>
                        </div>

                        {/* Left Section - Form */}
                        <div className="col-span-12 lg:col-span-7">
                            <form action="/message-from-user" method="post" className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full form-control border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="w-full form-control border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full form-control border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-white font-semibold bg-primary rounded-lg hover:scale-105 transition duration-200 cursor-pointer"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Right Section - Contact Info */}
                        <div className="col-span-12 lg:col-span-5">
                            <div className="space-y-6">
                                <div className="flex gap-1 items-center p-4 bg-white border rounded-lg shadow-md">
                                    <FaMapMarkerAlt className="text-easy-secondary text-2xl mr-4" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className="text-xl font-semibold text-dark-green">Address</h4>
                                        <p className="text-gray-600">Oneiro Interiors LLP, Shivaram karanth Nagar, Bangalore-77
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center p-4 bg-white border rounded-lg shadow-md">
                                    <FaEnvelope className="text-easy-secondary text-2xl mr-4" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className="text-xl font-semibold text-dark-green">Mail Us</h4>
                                        <p className="text-gray-600">info@easy-live.in</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center p-4 bg-white border rounded-lg shadow-md">
                                    <FaPhoneAlt className="text-easy-secondary text-2xl mr-4" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className="text-xl font-semibold text-dark-green">Telephone</h4>
                                        <p className="text-gray-600">(+91) 9847483333</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;