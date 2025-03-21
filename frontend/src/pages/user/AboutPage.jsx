import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import BrandPillar from '../../components/user/AboutPage/BrandPillar';
import WhyChooseUs from '../../components/user/AboutPage/WhyChoseUs';

const AboutPage = () => {
    return (
        <div>
            <ReusableTitle 
                page='About Us'
                title='Designing with Purpose'
                description="Oneiro isn’t just about creating beautiful interiors, it’s about crafting spaces that embody personal stories and aspirations. Each home is more than its walls, it
                    reflects its owner’s life, memories, and future. Oneiro translates visions into tangible, livable environments where form meets function with artistry."
            />
            <BrandPillar />
            <WhyChooseUs />
        </div>
    )
}

export default AboutPage
