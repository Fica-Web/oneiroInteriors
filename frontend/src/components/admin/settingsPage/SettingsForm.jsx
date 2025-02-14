import React from 'react'

const SettingsForm = () => {
    return (
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
    )
}

export default SettingsForm
