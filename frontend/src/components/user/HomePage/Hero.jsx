import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bedRoom2 from "../../../assets/images/bed-room2.png";
import KidsRoom1 from "../../../assets/images/kids-room1.png";
import livingRoom from "../../../assets/images/living-room1.png";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    return (
        <div className="w-full bg-gradient-to-b from-secondary via-ternary to-primary mb-32">
            <div
                ref={ref}
                className="w-11/12 mx-auto lg:py-28 py-20  text-white sm:p-10 p-2 rounded-lg"
            >
                {/* Headline - Mobile */}
                <motion.h1
                    className="xl:hidden block text-5xl font-semibold foros-medium leading-tight text-white ackeler-a"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Transforming Dreams Into Reality
                </motion.h1>

                {/* Headline - Large Screens */}
                <div className="xl:flex items-center gap-7 hidden foros-medium">
                    <motion.h2
                        className="xl:text-8xl text-5xl font-semibold text-white drop-shadow-lg ackeler-a"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        Transforming Dreams
                    </motion.h2>
                    <motion.img
                        src={KidsRoom1}
                        alt="Interior Design"
                        className="h-24 flex-1 rounded-full object-cover shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>

                <div className="xl:flex items-center gap-7 hidden xl:mt-8 mt-5">
                    <motion.img
                        src={bedRoom2}
                        alt="Interior Design"
                        className="h-24 flex-1 rounded-full object-cover shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.h2
                        className="xl:text-8xl text-5xl foros-medium font-semibold text-white drop-shadow-lg ackeler-a"
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
                        className="lg:w-1/2 w-full lg:p-5 lg:text-lg flex flex-col justify-center lg:gap-8 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="lg:mt-0 mt-6 text-white text-lg leading-relaxed">
                            Oneiro believes a home should reflect its owners. Every design is tailored to match each client’s lifestyle and personality, creating spaces that feel both personal and functional.
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            Guided by the Golden Ratio, Oneiro ensures balanced proportions, seamless layouts, and elegant craftsmanship. Our approach blends timeless beauty with modern innovation, making every space visually harmonious.
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            For Oneiro, a home is more than just a structure—it’s a journey. They transform empty spaces into meaningful experiences, crafting designs that tell a story and bring dreams to life.
                        </p>
                    </motion.div>

                    {/* Right Image with Gradient Overlay */}
                    <motion.div
                        className="lg:w-1/2 w-full lg:mt-0 mt-8 flex justify-center relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="relative w-full max-w-lg">
                            <img
                                src={livingRoom}
                                alt="Interior Design"
                                className="object-cover  shadow-xl hover:scale-105 transition-transform duration-500 w-full"
                            />
                            {/* Gradient Overlay - Matches Image Size */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#d80d0d] via-[#f7501f] to-[#fea034] opacity-10 "></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
