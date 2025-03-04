import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import kitchen2 from '../../../assets/images/kitchen2.png';
import KidsRoom1 from '../../../assets/images/kids-room1.png';
import crockery1 from '../../../assets/images/crockery1.png';
import livingRoom2 from '../../../assets/images/living-room2.png';

const services = [
    { id: 1, title: "Crockery Unit", description: "Elegant and space-efficient crockery units for organized and stylish dining spaces.", image: crockery1 },
    { id: 2, title: "Modular Kitchen", description: "Modern, efficient, and stylish modular kitchen designs tailored to your needs.", image: kitchen2 },
    { id: 14, title: "Kids Bedroom", description: "Creative and fun kids' bedroom designs with smart storage solutions.", image: KidsRoom1 },
    { id: 3, title: "Storage & Wardrobe", description: "Customized wardrobes and storage solutions for a clutter-free and organized space.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 4, title: "Study Table", description: "Ergonomic and stylish study tables designed for comfort and productivity.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
    { id: 5, title: "False Ceiling", description: "Decorative false ceiling designs that add elegance and sophistication to your interiors.", image: "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg" },
    { id: 6, title: "Bathroom", description: "Luxury and functional bathroom designs with a touch of elegance.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 7, title: "Space Saving Furniture", description: "Innovative space-saving furniture solutions for compact homes.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
    { id: 8, title: "Lights", description: "Stylish lighting solutions that enhance the ambiance of your home.", image: "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg" },
    { id: 9, title: "Wallpaper", description: "Trendy and durable wallpapers that add character to your walls.", image: "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg" },
    { id: 10, title: "Foyer", description: "Beautifully designed foyers that create a lasting first impression.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 11, title: "Movable Furniture", description: "Flexible and modular furniture solutions that adapt to your changing needs.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
    { id: 12, title: "TV Unit", description: "Sleek and stylish TV units designed for modern living spaces.", image: livingRoom2 },
    { id: 13, title: "Paints", description: "Premium quality wall paints for a vibrant and durable finish.", image: "https://www.venzahomedecorss.com/blog/wp-content/uploads/2020/10/venza-blog.jpg" },
    { id: 15, title: "Pooja Unit", description: "Beautifully crafted pooja units designed to bring a spiritual touch to your home.", image: "https://media.designcafe.com/wp-content/uploads/2024/12/27181027/interior-design-trends-in-2025.jpg" },
];

const ServiceListing = ({ isHomePage }) => {
    const [selectedService, setSelectedService] = useState(null);

    // Show only first 3 services if it's the homepage
    const displayedServices = isHomePage ? services.slice(0, 3) : services;

    return (
        <div className="w-11/12 mx-auto my-10 lg:my-20">
            <motion.h2 
                className="sm:text-5xl text-4xl text-center mb-12 text-gray-900 ackeler-a"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Services
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedServices.map((service) => (
                    <div
                        key={service.id}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105"
                        onClick={() => setSelectedService(service)}
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

            {isHomePage && (
                <div className="flex justify-center my-10">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link
                            to="/services"
                            className="bg-gray-500 py-3 px-8 rounded-lg text-white font-semibold shadow-md transition-all duration-300"
                        >
                            Explore More
                        </Link>
                    </motion.div>
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {/* Close Button (Replaced Lucide with SVG) */}
                            <button 
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setSelectedService(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <img src={selectedService.image} alt={selectedService.title} className="w-full h-auto object-cover rounded-md shadow-lg mt-5" />
                            <h3 className="text-2xl font-semibold mt-4 text-gray-900">{selectedService.title}</h3>
                            <p className="text-gray-600 mt-2">{selectedService.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceListing;