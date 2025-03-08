import React from 'react';
import HomeCarousel from '../../components/user/HomePage/HomeCarousal';
import Hero from '../../components/user/HomePage/Hero';
import WhyChooseUs from '../../components/user/AboutPage/WhyChoseUs';
import ServiceListing from '../../components/user/ServicePage/ServiceListing';
import HowWeWork from '../../components/user/HomePage/HowWeWork';
import BrandsWeWorkWith from '../../components/user/HomePage/BrandsWeWorkWith';
import CompletedVideos from '../../components/user/HomePage/CompletedVideos';

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <Hero />
            <WhyChooseUs />
            <ServiceListing isHomePage={true} />
            <HowWeWork />
            <BrandsWeWorkWith />
            <CompletedVideos />
        </div>
    )
}

export default HomePage;