import React, { useState } from 'react';
import SettingsTab from './SettingsTab';
import SettingsInput from './SettingsInput';

const SettingsBox = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [general, setGeneral] = useState({ email: "current@example.com", mobile: "123-456-7890" });
    const [socials, setSocials] = useState({
        facebook: "www.instagram.com",
        twitter: "www.instagram.com",
        instagram: "www.instagram.com",
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
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            {/* Tabs */}
            <SettingsTab activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* General Settings */}
            {activeTab === "general" && (
                <div className="mt-6">
                    <SettingsInput
                        label='Email'
                        type='email'
                        name='email'
                        value={general.email}
                        isEditing={isEditing}
                        placeholder='Enter new email'
                        handleChange={(e) => handleChange(e, "general")}
                    />

                    <SettingsInput
                        label='Mobile'
                        type='number'
                        name='mobile'
                        value={general.mobile}
                        isEditing={isEditing}
                        placeholder='Enter new mobile number'
                        handleChange={(e) => handleChange(e, "general")}
                    />
                </div>
            )}

            {/* Social Settings */}
            {activeTab === "socials" && (
                <div className="mt-6">
                    <SettingsInput
                        label='Facebook URL'
                        type='text'
                        name='facebook'
                        value={socials.facebook}
                        isEditing={isEditing}
                        placeholder="Enter Facebook URL"
                        handleChange={(e) => handleChange(e, "socials")}
                    />

                    <SettingsInput
                        label='Instagram URL'
                        type='text'
                        name='instagram'
                        value={socials.instagram}
                        isEditing={isEditing}
                        placeholder="Enter Facebook URL"
                        handleChange={(e) => handleChange(e, "socials")}
                    />

                    <SettingsInput
                        label='Twitter URL'
                        type='text'
                        name='twitter'
                        value={socials.twitter}
                        isEditing={isEditing}
                        placeholder="Enter Facebook URL"
                        handleChange={(e) => handleChange(e, "socials")}
                    />

                    {/* <label className="block text-gray-700 font-medium mt-4">Twitter URL:</label>
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
                    /> */}
                </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
                <button
                    className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default SettingsBox
