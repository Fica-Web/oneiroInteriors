import React, { useState } from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';

const AdminSettingsPage = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [general, setGeneral] = useState({ email: "current@example.com", mobile: "123-456-7890" });
    const [socials, setSocials] = useState({
        facebook: "",
        twitter: "",
        instagram: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        if (section === "general") {
            setGeneral((prev) => ({ ...prev, [name]: value }));
        } else {
            setSocials((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <>
            <AdminTitleCard title='Settings' />
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                {/* Tabs */}
                <div className="flex space-x-4 border-b pb-2">
                    <button
                        className={`px-4 py-2 ${activeTab === "general" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("general")}
                    >
                        General
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === "socials" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("socials")}
                    >
                        Socials
                    </button>
                </div>

                {/* General Settings */}
                {activeTab === "general" && (
                    <div className="mt-6">
                        <label className="block text-gray-700 font-medium">Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={general.email}
                                onChange={(e) => handleChange(e, "general")}
                                className="w-full p-2 border rounded mt-1"
                            />
                        ) : (
                            <p className="p-2 border rounded bg-gray-100">{general.email}</p>
                        )}

                        <label className="block text-gray-700 font-medium mt-4">Mobile:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="mobile"
                                value={general.mobile}
                                onChange={(e) => handleChange(e, "general")}
                                className="w-full p-2 border rounded mt-1"
                            />
                        ) : (
                            <p className="p-2 border rounded bg-gray-100">{general.mobile}</p>
                        )}
                    </div>
                )}

                {/* Social Settings */}
                {activeTab === "socials" && (
                    <div className="mt-6">
                        <label className="block text-gray-700 font-medium">Facebook URL:</label>
                        <input
                            type="text"
                            name="facebook"
                            value={socials.facebook}
                            onChange={(e) => handleChange(e, "socials")}
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter Facebook URL"
                        />

                        <label className="block text-gray-700 font-medium mt-4">Twitter URL:</label>
                        <input
                            type="text"
                            name="twitter"
                            value={socials.twitter}
                            onChange={(e) => handleChange(e, "socials")}
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter Twitter URL"
                        />

                        <label className="block text-gray-700 font-medium mt-4">Instagram URL:</label>
                        <input
                            type="text"
                            name="instagram"
                            value={socials.instagram}
                            onChange={(e) => handleChange(e, "socials")}
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter Instagram URL"
                        />
                    </div>
                )}

                {/* Buttons */}
                <div className="flex space-x-4 mt-6">
                    {activeTab === "general" && (
                        <button
                            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? "Cancel" : "Edit"}
                        </button>
                    )}
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminSettingsPage;