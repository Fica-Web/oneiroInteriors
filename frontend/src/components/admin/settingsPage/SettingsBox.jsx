import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { update_admin_data } from '../../../redux/slices/adminSlice';
import { fetchAdminDataApi, updateAdminDataApi } from '../../../utils/api/adminApi';
import SettingsTab from './SettingsTab';
import SettingsInput from './SettingsInput';

const SettingsBox = () => {
    const admin = useSelector(state => state.adminData.adminInfo);
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("general");
    const [general, setGeneral] = useState({
        email: admin?.email || "",
        mobile: admin?.mobile || "",
        location: admin?.location || "",
    });

    const [socials, setSocials] = useState({
        facebook: admin?.facebook || "",
        twitter: admin?.twitter || "",
        instagram: admin?.instagram || "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!admin) {
            const getAdminData = async () => {
                const response = await fetchAdminDataApi();
                if (response?.admin) {
                    dispatch(update_admin_data(response.admin));
                    setGeneral({
                        email: response.admin.email,
                        mobile: response.admin.mobile,
                        location: response.admin.location, // 🔹 Ensure location is fetched
                    });
                    setSocials({
                        facebook: response.admin.facebook,
                        twitter: response.admin.twitter,
                        instagram: response.admin.instagram,
                    });
                }
            };
            getAdminData();
        }
    }, [admin]);

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
            if (
                ["facebook", "twitter", "instagram"].includes(name) &&
                value.trim() &&
                !/^https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+\/?$/.test(value)
            ) {
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
        return Object.keys(newErrors).length === 0;
    };

    const updateData = async () => {
        if (!validateForm()) return;
        if (Object.keys(errors).some((key) => errors[key])) return;

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
            <SettingsTab activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "general" && (
                <div className="mt-6">
                    <SettingsInput label="Email" type="email" name="email" value={general.email} isEditing={isEditing} placeholder="Enter new email" handleChange={(e) => handleChange(e, "general")} error={errors.email} />
                    <SettingsInput label="Mobile" type="tel" name="mobile" value={general.mobile} isEditing={isEditing} placeholder="Enter new mobile number" handleChange={(e) => handleChange(e, "general")} error={errors.mobile} />
                    <SettingsInput label="Location" type="text" name="location" value={general.location} isEditing={isEditing} placeholder="Enter location" handleChange={(e) => handleChange(e, "general")} error={errors.location} /> 
                </div>
            )}

            {activeTab === "socials" && (
                <div className="mt-6">
                    {["facebook", "instagram", "twitter"].map((platform) => (
                        <SettingsInput key={platform} label={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`} type="text" name={platform} value={socials[platform]} isEditing={isEditing} placeholder={`Enter ${platform} URL`} handleChange={(e) => handleChange(e, "socials")} error={errors[platform]} />
                    ))}
                </div>
            )}

            <div className="flex space-x-4 mt-6">
                <button className={`text-white px-6 py-2 rounded cursor-pointer ${isEditing ? "bg-red-500" : "bg-green-600"}`} onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit"}</button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" onClick={updateData} disabled={!isEditing || Object.keys(errors).some((key) => errors[key])}>Save Changes</button>
            </div>
        </div>
    );
};

export default SettingsBox;