import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import CompletedVideos from '../../components/user/HomePage/CompletedVideos';
import DesignCollage from '../../components/user/DesignGallery/DesignCollage';

const OurWorksPage = () => {
    return (
        <div>
            <ReusableTitle 
                page='Our Works'
                title='Crafting Timeless Spaces'
                description="Explore our portfolio of beautifully designed interiors, where every detail is thoughtfully curated to blend aesthetics with functionality. At Oneiro Interiors, we transform spaces into inspiring experiences."
            />
            <CompletedVideos />
            <DesignCollage />
        </div>
    )
}

export default OurWorksPage;
