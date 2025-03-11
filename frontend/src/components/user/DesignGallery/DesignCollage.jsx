import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Dynamically import all images using Vite's glob import
const imageModules = import.meta.glob('../../../assets/images/*.png');

// List of image names
const imageNames = [
    'living-room3.png', 'kitchen1.png', 'kids-room3.png', 'living-room1.png', 'kitchen2.png', 'bed-room3.png',
    'bed-room1.png', 'crockery3.png', 'crockery2.png', 'kitchen8.png', 'kids-room1.png', 'crockery4.png',
    'crockery8.png', 'bed-room2.png', 'kitchen3.png', 'kids-room2.png', 'living-room2.png', 'crockery5.png',
    'kids-room4.png', 'kids-room5.png', 'kitchen4.png', 'crockery1.png', 'kitchen6.png', 'kitchen7.png',
    'kids-room8.png', 'kitchen9.png', 'kids-room6.png', 'kids-room7.png', 'kids-room9.png', 'crockery6.png',
    'crockery7.png', 'crockery9.png', 'kitchen5.png',
];

const DesignCollage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        // Dynamically import the images based on the file names
        const loadImages = async () => {
            const loadedImages = await Promise.all(
                imageNames.map(async (imageName) => {
                    const imageModule = imageModules[`../../../assets/images/${imageName}`];
                    const image = await imageModule();
                    return image.default; // Get the URL for the image
                })
            );
            setImages(loadedImages); // Set the loaded image URLs to state
        };

        loadImages(); // Load images on mount
    }, []);

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
                    <ImageCard key={index} img={img} index={index} setSelectedImage={setSelectedImage} />
                ))}
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // ✅ Smooth close animation
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Expanded view"
                        className="max-w-full min-w-xl max-h-[90vh] rounded-lg shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }} // ✅ Smooth close animation
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // ✅ Prevent click from closing modal
                    />
                </motion.div>
            )}
        </div>
    );
};

const ImageCard = React.memo(({ img, index, setSelectedImage }) => {
    return (
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
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
        </motion.div>
    );
});

export default DesignCollage;