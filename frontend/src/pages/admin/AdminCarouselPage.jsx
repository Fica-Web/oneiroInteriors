import React from 'react';
import AdminTitleCard from '../../components/reusable/AdminTitleCard';
import CarouselListing from '../../components/admin/carouselPage/CarouselListing';

const AdminCarouselPage = () => {
    return (
        <>
            <AdminTitleCard title={'Carousel'} />
            <CarouselListing />
        </>
    )
}

export default AdminCarouselPage
