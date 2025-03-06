import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCarouselApi, updateCarouselApi, getCarouselByIdApi } from "../../utils/api/carouselApi";
import CoverImageUpload from "../../components/admin/blogPage/CoverImageUpload";
import LoadingButton from "../../components/reusable/LoadingButton";

const AddCarouselPage = () => {
    const { id } = useParams(); // Check if editing an existing carousel

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch existing carousel if editing
    useEffect(() => {
        if (id) {
            const fetchCarousel = async () => {
                try {
                    const response = await getCarouselByIdApi(id);
                    setTitle(response.carousel.title);
                    setPreview(response.carousel.imageUrl);
                } catch (err) {
                    setError("Failed to load carousel data.");
                }
            };
            fetchCarousel();
        }
    }, [id]);

    // Handle Cropped Image
    const handleCroppedImage = (croppedImage) => {
        setImage(croppedImage);
        setPreview(URL.createObjectURL(croppedImage));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || (!image && !preview)) {
            setError("Please fill all fields!");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("title", title);
            if (image) formData.append("image", image); // Only append image if changed

            let response;
            if (id) {
                // Editing existing carousel
                response = await updateCarouselApi(id, formData);
            } else {
                // Creating new carousel
                response = await createCarouselApi(formData);
            }

            if (response.message) {
                alert(`Carousel ${id ? "updated" : "added"} successfully!`);

                // Reset form fields after success
                setTitle("");
                setImage(null);
                setPreview(null);

                navigate("/admin/carousel"); // Redirect to carousel list
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 my-20">
            <h2 className="text-2xl font-bold mb-4">{id ? "Edit" : "Add"} Carousel</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Title Input */}
                <div>
                    <label className="block text-gray-700 font-semibold">Title:</label>
                    <input
                        type="text"
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
                    text={id ? "Update Carousel" : "Submit Carousel"}
                    loadingText={id ? "Updating..." : "Submitting..."}
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddCarouselPage;