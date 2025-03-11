import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { getProjectsApi } from "../../../utils/api/projectApi";

const CompletedVideos = ({ isHomePage }) => {
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true });

    const [videos, setVideos] = useState([]);
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

        return () => controller.abort(); // Cleanup function
    }, []);

    const listingVideos = isHomePage ? videos.slice(0, 3) : videos;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-gray-500">Loading completed projects...</p>
            </div>
        );
    }

    return (
        videos.length > 0 && (
            <div className="w-11/12 mx-auto my-20 lg:my-28">
                <motion.h2
                    ref={headingRef}
                    className="sm:text-5xl text-4xl text-center text-gray-900 mb-12 ackeler-a"
                    initial={{ opacity: 0, y: -40 }}
                    animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    Completed Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listingVideos.map((video) => (
                        <VideoCard key={video._id} title={video.title} url={video.youtubeUrl} />
                    ))}
                </div>
            </div>
        )
    );
};

const VideoCard = React.memo(({ title, url }) => {
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
        </motion.div>
    );
});

export default CompletedVideos;