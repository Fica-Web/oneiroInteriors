import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { sendMessageApi } from "../../../utils/api/messageApi";

const ContactForm = () => {
    const companyInfo = useSelector((state) => state.companyInfo.companyInfo);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            const response = await sendMessageApi(formData);
            if (response.success) {
                setSuccess("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                setSuccess("Failed to send message. Try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setSuccess("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="w-11/12 mx-auto sm:px-4 lg:px-7 my-20 mb-32">
                <div className="py-16 lg:px-12 sm:px-8 px-4 bg-admin-gray rounded-lg shadow-md">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="col-span-12 text-center mx-auto max-w-3xl">
                            <h1 className="text-dark-green font-bold text-xl sm:text-3xl lg:text-5xl mb-10">Get in touch</h1>
                            <p className="mb-12 text-gray-700">Feel free to reach out to us—we’d love to help design your dream space!</p>
                        </div>

                        {/* Left Section - Form */}
                        <div className="col-span-12 lg:col-span-7">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-easy-primary-dark"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-white font-semibold bg-gradient-to-r from-[#d80d0d] via-[#f7501f] to-[#fea034] opacity-90 rounded-lg hover:scale-105 transition duration-200"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                            </form>
                            {success && <p className="text-center text-sm text-gray-600 mt-3">{success}</p>}
                        </div>

                        {/* Right Section - Contact Info */}
                        <div className="col-span-12 lg:col-span-5 space-y-6">
                            <ContactInfo icon={<FaMapMarkerAlt />} title="Address" value={companyInfo?.location} />
                            <ContactInfo icon={<FaEnvelope />} title="Mail Us" value={companyInfo?.email} />
                            <ContactInfo icon={<FaPhoneAlt />} title="Telephone" value={`(+91) ${companyInfo?.mobile}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Contact Info Card
const ContactInfo = ({ icon, title, value }) => (
    <div className="flex gap-1 items-center p-4 bg-white border rounded-lg shadow-md">
        <span className="text-easy-secondary text-2xl mr-4">{icon}</span>
        <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold text-dark-green">{title}</h4>
            <p className="text-gray-600">{value}</p>
        </div>
    </div>
);

export default ContactForm;