import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="w-11/12 mx-auto lg:my-28 my-20">
            
            {/* Headline - Mobile */}
            <motion.h1 
                className="xl:hidden block text-5xl font-semibold foros-medium leading-tight text-gray-900 ackeler-a"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                Transforming Dream Into Reality
            </motion.h1>

            {/* Headline - Large Screens */}
            <div className="xl:flex items-center gap-7 hidden foros-medium">
                <motion.h2 
                    className="xl:text-8xl text-5xl font-semibold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Transforming Dream
                </motion.h2>
                <motion.img
                    src="https://mojoboutique.com/cdn/shop/articles/what_interior_design_style_uses_plants_1344x.jpg?v=1710240081"
                    alt="Interior Design"
                    className="h-24 rounded-full object-cover flex-1 shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </div>

            <div className="xl:flex items-center gap-7 hidden xl:mt-8 mt-5">
                <motion.img
                    src="https://www.fabmodula.com/images/Newbanner3.jpg"
                    alt="Interior Design"
                    className="h-24 rounded-full object-cover flex-1 hidden xl:block shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.h2 
                    className="xl:text-8xl text-5xl foros-medium font-semibold text-gray-900"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Into Reality
                </motion.h2>
            </div>

            {/* Content Section */}
            <div className="lg:flex xl:mt-24 gap-12">
                <motion.div 
                    className="lg:w-1/3 w-full lg:p-5 lg:text-lg flex flex-col lg:gap-8 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className="lg:mt-0 mt-6 text-gray-700 text-lg leading-relaxed">
                        Oneiro believes a home should reflect its owners. Every design is tailored to match each client’s lifestyle and personality, creating spaces that feel both personal and functional.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Guided by the Golden Ratio, Oneiro ensures balanced proportions, seamless layouts, and elegant craftsmanship. Their approach blends timeless beauty with modern innovation, making every space visually harmonious.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        For Oneiro, a home is more than just a structure—it’s a journey. They transform empty spaces into meaningful experiences, crafting designs that tell a story and bring dreams to life.
                    </p>
                </motion.div>

                {/* Right Image */}
                <motion.div 
                    className="lg:w-2/3 w-full lg:mt-0 mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <img
                        src="https://www.fabmodula.com/images/Newbanner3.jpg"
                        alt="Interior Design"
                        className="object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
