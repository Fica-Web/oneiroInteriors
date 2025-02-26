import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import ServiceListing from '../../components/user/ServicePage/ServiceListing';

const ServicePage = () => {
    return (
        <div>
            <ReusableTitle 
                page='Services'
                title='Discover Our Expertise'
                description='At Oneiro Interiors, we bring dreams to life with bespoke designs tailored to your lifestyle. Our commitment to creativity, functionality, and elegance ensures that every space is a perfect reflection of you.'
            />
            <ServiceListing />
        </div>
    )
}

export default ServicePage
