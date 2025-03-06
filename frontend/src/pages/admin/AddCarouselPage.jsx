import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCarouselApi } from "../../utils/api/carouselApi";
import CoverImageUpload from "../../components/admin/blogPage/CoverImageUpload";
import LoadingButton from "../../components/reusable/LoadingButton";

const AddCarouselPage = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Handle Cropped Image
    const handleCroppedImage = (croppedImage) => {
        setImage(croppedImage);
        setPreview(URL.createObjectURL(croppedImage));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !image) {
            setError("Please fill all fields!");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);

            const response = await createCarouselApi(formData);
            
            if (response.message) {
                // Reset form fields
                setTitle("");
                setImage(null);
                setPreview(null);
            }
        }  finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 my-20">
            <h2 className="text-2xl font-bold mb-4">Add New Carousel</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Title Input */}
                <div>
                    <label className="block text-gray-700 font-semibold">Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter carousel title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Image Upload with Cropping */}
                <CoverImageUpload
                    coverImagePreview={preview}
                    onCropComplete={handleCroppedImage}
                />

                {/* Submit Button */}
                <LoadingButton
                    loading={loading}
                    text="Submit Carousel"
                    loadingText="Submitting..."
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddCarouselPage;