import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { update_admin_data } from '../../../redux/slices/adminSlice';
import { updateAdminDataApi } from '../../../utils/api/adminApi';
import SettingsTab from './SettingsTab';
import SettingsInput from './SettingsInput';

const SettingsBox = () => {
    const admin = useSelector(state => state.adminData.adminInfo)
    console.log('redux setup:', admin);

    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("general");
    const [general, setGeneral] = useState({ email: admin.email, mobile: admin.mobile });
    const [socials, setSocials] = useState({
        facebook: admin.facebook,
        twitter: admin.twitter,
        instagram: admin.instagram,
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

    const updateData = async () => {
        try {
            const updatedInfo = { ...general, ...socials };
    
            // Call the API to update admin data
            const response = await updateAdminDataApi(updatedInfo);
            console.log('updatedInfo:', response)
    
            if (response) {
                // Dispatch the updated data to Redux store
                dispatch(update_admin_data(response.admin));

                toast.success(response.message)
    
                // Disable editing mode
                setIsEditing(false);
            }
        } catch (error) {
            console.error("Failed to update admin data:", error);
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
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                    onClick={updateData}
                    disabled={!isEditing} // Prevent accidental clicks
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default SettingsBox
