import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { getProjectsApi } from "../../../utils/api/projectApi";
import bgImage from "../../../assets/images/bed-room1.png";

const videoListing = ({ isHomePage }) => {
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true });

    const [videos, setVideos] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchVideos = async () => {
            try {
                const response = await getProjectsApi({ signal: controller.signal });
                setVideos(response.completedProjects || []);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error fetching videos:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
        return () => controller.abort();
    }, []);

    const listingVideos = isHomePage ? videos.slice(0, 3) : videos;

    // Animation Variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { type: "tween", ease: "easeInOut", duration: 0.6 },
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: { type: "tween", ease: "easeInOut", duration: 0.6 },
        }),
    };

    const nextSlide = () => {
        setDirection(1);
        setStartIndex((prevIndex) => (prevIndex + 2) % listingVideos.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setStartIndex((prevIndex) => (prevIndex - 2 + listingVideos.length) % listingVideos.length);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-gray-500">Loading completed projects...</p>
            </div>
        );
    }

    return (
        videos.length > 0 && (
            <div className="relative w-full h-[70vh] flex items-center justify-center my-20 lg:my-28 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${bgImage})` }}>
                
                {/* Dark Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                {/* Heading */}
                <motion.h2
                    ref={headingRef}
                    className="absolute top-5 sm:text-5xl text-4xl text-center text-white font-bold"
                    initial={{ opacity: 0, y: -40 }}
                    animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    Completed Projects
                </motion.h2>

                {/* Video Slider Container */}
                <motion.div
                    className="relative z-10 flex overflow-hidden w-[600px] p-6 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-lg"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={startIndex}
                            className="flex gap-6"
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            custom={direction}
                        >
                            {listingVideos.slice(startIndex, startIndex + 2).map((video) => (
                                <VideoCard key={video._id} title={video.title} url={video.youtubeUrl} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.button
                    onClick={prevSlide}
                    className="absolute left-5 z-20 bg-white/80 text-gray-900 px-5 py-3 rounded-full shadow-lg hover:bg-white transition"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ❮
                </motion.button>

                <motion.button
                    onClick={nextSlide}
                    className="absolute right-5 z-20 bg-white/80 text-gray-900 px-5 py-3 rounded-full shadow-lg hover:bg-white transition"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ❯
                </motion.button>
            </div>
        )
    );
};

// Video Card Component
const VideoCard = React.memo(({ title, url }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[250px] w-[270px] bg-white/90 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer p-4"
        >
            {/* Video Title */}
            <h3 className="text-gray-900 font-semibold text-lg mb-2 text-center">
                {title}
            </h3>

            {/* YouTube Video */}
            <div className="w-full h-40 rounded-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src={url}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
    );
});

export default videoListing;