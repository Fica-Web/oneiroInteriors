import React from 'react';
import HomeCarousel from '../../components/user/HomePage/HomeCarousal';
import Hero from '../../components/user/HomePage/Hero';
import HowWeWork from '../../components/user/HomePage/HowWeWork';

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <Hero />
            <HowWeWork />
        </div>
    )
}

export default HomePage;