import React from 'react';
import HomeCarousel from '../../components/user/HomePage/HomeCarousal';
import Hero from '../../components/user/HomePage/Hero';
import DesigningDreams from '../../components/user/HomePage/DesigningDreams';
import WhyChooseUs from '../../components/user/AboutPage/WhyChoseUs';
import ServiceListing from '../../components/user/ServicePage/ServiceListing';
import HowWeWork from '../../components/user/HomePage/HowWeWork';
import BrandsWeWorkWith from '../../components/user/HomePage/BrandsWeWorkWith';
import CompletedVideos from '../../components/user/HomePage/CompletedVideos';
import FAQ from '../../components/user/HomePage/FAQ';
import BlogListing from '../../components/user/BlogPage/BlogListing';

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <Hero />
            <DesigningDreams />
            <ServiceListing isHomePage={true} />
            <WhyChooseUs />
            <HowWeWork />
            <BrandsWeWorkWith />
            <CompletedVideos isHomePage={true} />
            <BlogListing isHomePage={true} />
            <FAQ />
        </div>
    )
}

export default HomePage;