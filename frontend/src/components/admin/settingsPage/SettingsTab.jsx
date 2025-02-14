import React from 'react'

const SettingsTab = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex space-x-4 border-b pb-2">
            <button
                className={`px-4 py-2 cursor-pointer ${activeTab === "general" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
                onClick={() => setActiveTab("general")}
            >
                General
            </button>
            <button
                className={`px-4 py-2 cursor-pointer ${activeTab === "socials" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
                onClick={() => setActiveTab("socials")}
            >
                Socials
            </button>
        </div>
    )
}

export default SettingsTab
