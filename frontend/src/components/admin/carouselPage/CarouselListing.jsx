import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCarouselApi, deleteCarouselApi } from "../../../utils/api/carouselApi";

const CarouselListing = () => {
    const [carousels, setCarousels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                const response = await getCarouselApi();
                console.log("Carousel frontend:", response);
                setCarousels(response.carousels);
            } catch (err) {
                console.error("Error fetching carousels:", err);
                setError("Failed to load carousels. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCarousel();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this carousel?")) return;

        try {
            await deleteCarouselApi(id); // Call API to delete
            setCarousels(carousels.filter((carousel) => carousel._id !== id)); // Remove locally
        } catch (err) {
            console.error("Error deleting carousel:", err);
            alert("Failed to delete carousel.");
        }
    };

    return (
        <div className="p-5">
            {/* Add Carousel Button */}
            <div className="flex justify-end mb-5">
                <Link
                    to={"/admin/carousel/create"}
                    className="text-white bg-blue-500 px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-600"
                >
                    Add Carousel
                </Link>
            </div>

            {/* Loading & Error Handling */}
            {loading && <p className="text-gray-600 text-center">Loading Carousels...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && carousels.length === 0 && <p className="text-gray-600 text-center">No Carousels found.</p>}

            {/* Carousel List */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {carousels.map((carousel) => (
                    <div
                        key={carousel._id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform transform duration-300 hover:scale-105"
                    >
                        {/* Carousel Image */}
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={carousel.imageUrl || "https://via.placeholder.com/400"}
                                alt={carousel.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Carousel Content */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">{carousel.title}</h3>
                            <div className="mt-3 flex justify-between">
                                {/* Edit Button */}
                                <Link
                                    to={`/admin/carousel/edit/${carousel._id}`}
                                    className="bg-green-600 text-white px-7 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                                    onClick={(e) => e.stopPropagation()} // Prevent navigation on edit click
                                >
                                    Edit
                                </Link>
                                {/* Delete Button */}
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent navigation on delete click
                                        handleDelete(carousel._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselListing;