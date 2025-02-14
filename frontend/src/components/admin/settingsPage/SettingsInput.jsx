import React from 'react'

const SettingsInput = ({ name, type, value, label, placeholder, isEditing, handleChange }) => {
    return (
        <div className="mt-6">
            <label className="block text-gray-700 font-medium">{label}:</label>
            {isEditing ? (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full p-2 border rounded mt-1"
                />
            ) : (
                <p className="p-2 border rounded bg-gray-100">{value}</p>
            )}
        </div>
    )
}

export default SettingsInput
