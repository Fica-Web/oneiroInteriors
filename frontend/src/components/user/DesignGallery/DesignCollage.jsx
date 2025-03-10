import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import kitchen1 from '../../../assets/images/kitchen1.png';
import kitchen2 from '../../../assets/images/kitchen2.png';
import kitchen3 from '../../../assets/images/kitchen3.png';
import kitchen4 from '../../../assets/images/kitchen4.png';
import kitchen5 from '../../../assets/images/kitchen5.png';
import kitchen6 from '../../../assets/images/kitchen6.png';
import kitchen7 from '../../../assets/images/kitchen7.png';
import kitchen8 from '../../../assets/images/kitchen8.png';
import kitchen9 from '../../../assets/images/kitchen9.png';
import bedRoom1 from '../../../assets/images/bed-room1.png';
import bedRoom2 from '../../../assets/images/bed-room2.png';
import bedRoom3 from '../../../assets/images/bed-room3.png';
import KidsRoom1 from '../../../assets/images/kids-room1.png';
import KidsRoom2 from '../../../assets/images/kids-room2.png';
import KidsRoom3 from '../../../assets/images/kids-room3.png';
import KidsRoom4 from '../../../assets/images/kids-room4.png';
import KidsRoom5 from '../../../assets/images/kids-room5.png';
import KidsRoom6 from '../../../assets/images/kids-room6.png';
import KidsRoom7 from '../../../assets/images/kids-room7.png';
import KidsRoom8 from '../../../assets/images/kids-room8.png';
import KidsRoom9 from '../../../assets/images/kids-room9.png';
import crockery1 from '../../../assets/images/crockery1.png';
import crockery2 from '../../../assets/images/crockery2.png';
import crockery3 from '../../../assets/images/crockery3.png';
import crockery4 from '../../../assets/images/crockery4.png';
import crockery5 from '../../../assets/images/crockery5.png';
import crockery6 from '../../../assets/images/crockery6.png';
import crockery7 from '../../../assets/images/crockery7.png';
import crockery8 from '../../../assets/images/crockery8.png';
import crockery9 from '../../../assets/images/crockery9.png';
import livingRoom1 from '../../../assets/images/living-room1.png';
import livingRoom2 from '../../../assets/images/living-room2.png';
import livingRoom3 from '../../../assets/images/living-room3.png';

const images = [
    livingRoom3, kitchen1, KidsRoom3, livingRoom1, kitchen2, bedRoom3,
    bedRoom1, crockery3, crockery2, kitchen8, KidsRoom1, crockery4,
    crockery8, bedRoom2, kitchen3, KidsRoom2, livingRoom2, crockery5, KidsRoom4,
    KidsRoom5, kitchen4, crockery1, kitchen6, kitchen7, KidsRoom8,
    kitchen9, KidsRoom6, KidsRoom7, KidsRoom9, crockery6,
    crockery7, crockery9, kitchen5,
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

            {/* Masonry Layout with Lazy Loading */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid"
                        onClick={() => setSelectedImage(img)}
                    >
                        <motion.img
                            src={img}
                            alt={`Design ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 rounded-lg"
                            loading="lazy" // ✅ Lazy loading added
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                    </motion.div>
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