import React, { useState } from 'react';

const services = [
    { id: 2, title: "Commercial Spaces", description: "Enhance productivity and brand presence with our innovative commercial space designs.", image: "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg" },
    { id: 3, title: "Space Planning", description: "Optimize your space with our expert planning solutions for a functional and aesthetic layout.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 4, title: "Furniture & Decor", description: "Curate the perfect ambiance with our handpicked furniture and decor elements.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
    { id: 1, title: "Commercial Spaces", description: "Enhance productivity and brand presence with our innovative commercial space designs.", image: "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg" },
    { id: 5, title: "Space Planning", description: "Optimize your space with our expert planning solutions for a functional and aesthetic layout.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 6, title: "Furniture & Decor", description: "Curate the perfect ambiance with our handpicked furniture and decor elements.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
];

const ServiceListing = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-5xl ackeler-a font-bold text-center mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className={`relative overflow-hidden  rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedService === service.id ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`}
                        onClick={() => setSelectedService(service.id)}
                    >
                        <div className="relative group">
                            <img src={service.image} alt={service.title} className="w-full h-56 object-cover rounded-md transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className='p-6'>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceListing;
