import React from 'react';
import HomeCarousel from '../../components/user/HomePage/HomeCarousal';
import Hero from '../../components/user/HomePage/Hero';
import HowWeWork from '../../components/user/HomePage/HowWeWork';
import BrandsWeWorkWith from '../../components/user/HomePage/BrandsWeWorkWith';

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <Hero />
            <HowWeWork />
            <BrandsWeWorkWith />
        </div>
    )
}

export default HomePage;