import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../../utils/cropImage/cropImage"; // Function to process cropped image

const CoverImageUpload = ({ coverImagePreview, onImageChange, error, onCropComplete }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropModal, setShowCropModal] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImageSrc(reader.result);
                setShowCropModal(true); // Open cropping modal
            };
        }
    };

    // Handle cropping area selection
    const onCropChange = (crop) => setCrop(crop);
    const onZoomChange = (zoom) => setZoom(zoom);
    const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    // Process cropped image
    const handleCropDone = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            onCropComplete(croppedImage);
            setShowCropModal(false);
        } catch (error) {
            console.error("Crop processing error:", error);
        }
    };

    return (
        <div>
            <label className="block text-gray-700 font-medium">Cover Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border p-2 rounded-md mt-1 file:bg-gray-800 hover:file:bg-gray-900 file:text-white file:py-1 file:px-5 file:rounded-lg file:cursor-pointer"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Cropping Modal */}
            {showCropModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-lg font-semibold mb-4">Crop Image</h3>
                        <div className="relative w-full h-64">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={16 / 9} // Change aspect ratio if needed
                                onCropChange={onCropChange}
                                onZoomChange={onZoomChange}
                                onCropComplete={onCropCompleteHandler}
                            />
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setShowCropModal(false)}>
                                Cancel
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleCropDone}>
                                Crop & Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Live Preview */}
            {coverImagePreview && (
                <img
                    src={coverImagePreview}
                    alt="Cover Preview"
                    className="w-auto h-40 object-cover mt-3 rounded-lg shadow-md"
                />
            )}
        </div>
    );
};

export default CoverImageUpload;