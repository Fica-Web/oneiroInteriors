import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getCarouselApi } from "../../../utils/api/carouselApi";

const HomeCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Prevents memory leaks

        const fetchCarousel = async () => {
            try {
                const response = await getCarouselApi();
                if (isMounted) {
                    setSlides(response?.carousels || []);
                    setLoading(false);
                }
            } catch (err) {
                console.error("Error fetching carousel:", err);
                if (isMounted) {
                    setError("Failed to load carousel.");
                    setLoading(false);
                }
            }
        };

        fetchCarousel();

        return () => {
            isMounted = false; // Cleanup function to prevent state updates on unmounted component
        };
    }, []);

    return (
        <div className="relative sm:w-full sm:h-96 md:h-fit">
            {loading ? (
                <p className="text-gray-600 text-center">Loading Carousel...</p>
            ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={5000}
                    transitionTime={500}
                    stopOnHover={false}
                    swipeable
                >
                    {slides.map((hero) => (
                        <div key={hero._id} className="relative w-full max-h-[90vh]">
                            <img
                                className="w-full h-full object-cover"
                                src={hero.imageUrl}
                                alt={`slide ${hero._id}`}
                                onError={(e) => (e.target.src = "https://via.placeholder.com/800x400")}
                            />
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default HomeCarousel;