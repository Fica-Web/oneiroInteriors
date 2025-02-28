import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
    "https://5.imimg.com/data5/SELLER/Default/2023/12/365864781/HG/BT/BC/70161538/bedroom-interior-design-decor-services.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjzVj2OG7oU8K72QUdpBABuQRG7NMzZEw9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcWgIPTgzHX1e028GmekiFbKUFlF0DWP5g9-mjFuuPTKoxNdj3MepDu4wYXUpDHIwwcY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3NusAIJCZUD9V8vJZ5uDt3D2_0khrzmQxg&s",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/351500615/IB/FE/DW/193487231/2id-interiors-showcase-their-contemporary-golden-isles-project.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/12/365864781/HG/BT/BC/70161538/bedroom-interior-design-decor-services.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcWgIPTgzHX1e028GmekiFbKUFlF0DWP5g9-mjFuuPTKoxNdj3MepDu4wYXUpDHIwwcY&usqp=CAU",
    "https://5.imimg.com/data5/SELLER/Default/2023/12/365864781/HG/BT/BC/70161538/bedroom-interior-design-decor-services.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjzVj2OG7oU8K72QUdpBABuQRG7NMzZEw9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcWgIPTgzHX1e028GmekiFbKUFlF0DWP5g9-mjFuuPTKoxNdj3MepDu4wYXUpDHIwwcY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3NusAIJCZUD9V8vJZ5uDt3D2_0khrzmQxg&s",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/351500615/IB/FE/DW/193487231/2id-interiors-showcase-their-contemporary-golden-isles-project.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/12/365864781/HG/BT/BC/70161538/bedroom-interior-design-decor-services.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcWgIPTgzHX1e028GmekiFbKUFlF0DWP5g9-mjFuuPTKoxNdj3MepDu4wYXUpDHIwwcY&usqp=CAU",
];

const DesignCollage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="w-11/12 mx-auto my-20">
            <motion.h2
                ref={ref}
                className="text-5xl text-center text-gray-900 mb-12 ackeler-a"
                initial={{ opacity: 0, y: -40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
            >
                Design Gallery 
            </motion.h2>

            {/* 3-Column Flexbox Layout */}
            <div className="flex gap-5">
                {[0, 1, 2].map((colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-5 w-1/3">
                        {images
                            .filter((_, index) => index % 3 === colIndex)
                            .map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <motion.img
                                        src={img}
                                        alt={`Design ${index + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-500 rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                                </motion.div>
                            ))}
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Expanded view"
                        className="max-w-full min-w-xl max-h-[90vh] rounded-lg shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default DesignCollage;