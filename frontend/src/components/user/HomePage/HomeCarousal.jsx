import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import crockery1 from '../../../assets/images/crockery1.png';
import crockery2 from '../../../assets/images/crockery2.png';
import crockery3 from '../../../assets/images/crockery3.png';
import crockery4 from '../../../assets/images/crockery4.png';

const HomeCarousel = () => {
    const slides = [
        { id: 1, image: "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg" },
        { id: 2, image: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/06/10131120/interior-wall-design.jpg" },
        { id: 3, image: "https://sumesshmenonassociates.com/wp-content/uploads/2024/08/1-2.webp" },
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