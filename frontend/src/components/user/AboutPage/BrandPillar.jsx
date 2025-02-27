import React from "react";
import { motion } from "framer-motion";

const BrandPillar = () => {
    return (
        <div className="w-11/12 mx-auto my-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2 className="text-5xl text-gray-900 leading-tight ackeler-a">
                        Core Brand Pillars
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="text-primary font-semibold">Oneiro</span> believes that a home should be an extension of its inhabitants. Every project is approached with a tailored mindset, ensuring that the design reflects each client’s lifestyle and personality.
                        By understanding the unique way people live and interact with their spaces, <span className="text-primary font-semibold">Oneiro</span> crafts environments that feel both personal and functional.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Rooted in the principles of the Golden Ratio, <span className="text-primary font-semibold">Oneiro</span> emphasizes balanced proportions, seamless layouts, and elegant craftsmanship. This guiding force ensures that every space is aesthetically harmonious and visually pleasing, blending timeless beauty with cutting-edge innovation.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        For <span className="text-primary font-semibold">Oneiro</span>, a home is not just a physical structure—it is a journey. They transform blank spaces into meaningful experiences by weaving together
                        curated textures, architectural flow, and thoughtful design choices. Every project tells a story, capturing the client’s dreams and turning them into
                        tangible realities. Through this narrative-driven approach, <span className="text-primary font-semibold">Oneiro</span> elevates interior design from mere decoration to an expression of life’s most
                        cherished moments.
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="lg:py-12 py-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <img
                        src="https://aitiinterieurs.com/wp-content/uploads/2024/09/R1_12-e1725883932723-964x1024.jpg"
                        alt="Elegant Interior Design"
                        className="w-full h-auto rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BrandPillar;
