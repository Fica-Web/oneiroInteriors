import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import kitchen1 from '../../../assets/images/kitchen1.png';
import kitchen2 from '../../../assets/images/kitchen2.png';
import kitchen3 from '../../../assets/images/kitchen3.png';
import bedRoom1 from '../../../assets/images/bed-room1.png';
import bedRoom2 from '../../../assets/images/bed-room2.png';
import KidsRoom1 from '../../../assets/images/kids-room1.png';
import KidsRoom2 from '../../../assets/images/kids-room2.png';
import KidsRoom3 from '../../../assets/images/kids-room3.png';
import crockery1 from '../../../assets/images/crockery1.png';
import crockery2 from '../../../assets/images/crockery2.png';
import crockery3 from '../../../assets/images/crockery3.png';
import crockery4 from '../../../assets/images/crockery4.png';
import livingRoom1 from '../../../assets/images/living-room1.png';
import livingRoom2 from '../../../assets/images/living-room2.png';
import livingRoom3 from '../../../assets/images/living-room3.png';


const images = [
    crockery1,
    kitchen1,
    crockery2,
    KidsRoom3,
    livingRoom1,
    kitchen2,
    bedRoom1,
    crockery3,
    livingRoom2,
    bedRoom2,
    crockery4,
    kitchen3,
    KidsRoom1,
    KidsRoom2,
    livingRoom3,
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