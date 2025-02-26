import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

const HomeCarousel = () => {
    const slides = [
        { id: 1, image: "https://www.getonecard.app/images/blog/book_affordable_flights.png" },
        { id: 2, image: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/06/10131120/interior-wall-design.jpg" },
        { id: 3, image: "https://www.getonecard.app/images/blog/book_affordable_flights.png" },
    ];

    return (
        <div className="relative sm:w-full sm:h-96 md:h-fit">
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
                    <div key={hero.id} className="relative w-full max-h-[90vh]">
                        <img className="w-full h-full object-cover" src={hero.image} alt={`slide ${hero.id}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;