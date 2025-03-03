import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const videos = [
    { id: 1, title: "Luxury Living Room Design", url: "https://www.youtube.com/embed/jaIPNZQu_Yk?si=_FYSCnRb1o_-4DL5"  },
    { id: 2, title: "Modern Kitchen Makeover", url: "https://www.youtube.com/embed/ABC456" },
    { id: 3, title: "Elegant Bedroom Transformation", url: "https://www.youtube.com/embed/DEF789" },
];

const CompletedVideos = () => {
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true });

    return (
        <div className="w-11/12 mx-auto my-20">
            <motion.h2
                ref={headingRef}
                className="sm:text-5xl text-4xl text-center text-gray-900 mb-12 ackeler-a"
                initial={{ opacity: 0, y: -40 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
            >
                Completed Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                    <VideoCard key={video.id} title={video.title} url={video.url} />
                ))}
            </div>
        </div>
    );
};

const VideoCard = ({ title, url }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shadow-lg rounded-lg overflow-hidden bg-white"
        >
            <div className="relative w-full h-64">
                <iframe
                    src={url}
                    title={title}
                    className="w-full h-full border-none"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
        </motion.div>
    );
};

export default CompletedVideos;