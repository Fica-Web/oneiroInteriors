import React from "react";

const CoverImageUpload = ({ coverImagePreview, onImageChange, error }) => {
    return (
        <div>
            <label className="block text-gray-700 font-medium">Cover Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="w-full border p-2 rounded-md mt-1 file:bg-gray-800 hover:file:bg-gray-900 file:text-white file:py-1 file:px-5 file:rounded-lg file:cursor-pointer"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Live Preview */}
            {coverImagePreview && (
                <img
                    src={coverImagePreview}
                    alt="Cover Preview"
                    className="w-full h-40 object-cover mt-3 rounded-lg shadow-md"
                />
            )}
        </div>
    );
};

export default CoverImageUpload;