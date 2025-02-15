import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { update_admin_data } from '../../../redux/slices/adminSlice';
import { updateAdminDataApi } from '../../../utils/api/adminApi';
import SettingsTab from './SettingsTab';
import SettingsInput from './SettingsInput';

const SettingsBox = () => {
    const admin = useSelector(state => state.adminData.adminInfo);
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("general");
    const [general, setGeneral] = useState({ email: admin.email, mobile: admin.mobile });
    const [socials, setSocials] = useState({
        facebook: admin.facebook,
        twitter: admin.twitter,
        instagram: admin.instagram,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({}); // 🔹 Store validation errors

    const validateField = (name, value) => {
        let error = "";
        if (!value.trim()) {
            error = `${name} is required.`;
        } else {
            if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
                error = "Invalid email format.";
            }
            if (name === "mobile" && !/^\d{10}$/.test(value)) {
                error = "Mobile number must be 10 digits.";
            }
            if (["facebook", "twitter", "instagram"].includes(name) && !/^https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+\/?$/.test(value)) {
                error = "Enter a valid URL (e.g., https://example.com).";
            }            
        }
        return error;
    };

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        if (section === "general") {
            setGeneral((prev) => ({ ...prev, [name]: value }));
        } else {
            setSocials((prev) => ({ ...prev, [name]: value }));
        }

        // 🔹 Validate on change
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.entries({ ...general, ...socials }).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        console.log('new error:', newErrors)
        return Object.keys(newErrors).length === 0; // 🔹 Return true if no errors
    };

    const updateData = async () => {
        if (!validateForm()) return; // 🔹 Prevent submission if validation fails

        try {
            const updatedInfo = { ...general, ...socials };
            const response = await updateAdminDataApi(updatedInfo);

            if (response) {
                dispatch(update_admin_data(response.admin));
                toast.success(response.message);
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
                        error={errors.email} // 🔹 Pass error message
                    />

                    <SettingsInput
                        label='Mobile'
                        type='number'
                        name='mobile'
                        value={general.mobile}
                        isEditing={isEditing}
                        placeholder='Enter new mobile number'
                        handleChange={(e) => handleChange(e, "general")}
                        error={errors.mobile}
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
                        error={errors.facebook}
                    />

                    <SettingsInput
                        label='Instagram URL'
                        type='text'
                        name='instagram'
                        value={socials.instagram}
                        isEditing={isEditing}
                        placeholder="Enter Instagram URL"
                        handleChange={(e) => handleChange(e, "socials")}
                        error={errors.instagram}
                    />

                    <SettingsInput
                        label='Twitter URL'
                        type='text'
                        name='twitter'
                        value={socials.twitter}
                        isEditing={isEditing}
                        placeholder="Enter Twitter URL"
                        handleChange={(e) => handleChange(e, "socials")}
                        error={errors.twitter}
                    />
                </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
                <button
                    className={`text-white px-6 py-2 rounded transition cursor-pointer ${isEditing ? 'bg-red-500 hover:bg-red-500' : 'bg-green-600 hover:bg-green-700'}`}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={updateData}
                    disabled={!isEditing || Object.keys(errors).some((key) => errors[key])} // 🔹 Disable if errors exist
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default SettingsBox;