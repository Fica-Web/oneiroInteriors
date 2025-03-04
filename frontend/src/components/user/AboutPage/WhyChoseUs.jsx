import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle } from 'react-icons/fa'

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    const benefits = [
        { id: 1, text: "Experienced and qualified designers" },
        { id: 2, text: "A client-centric approach" },
        { id: 3, text: "High-quality materials and craftsmanship" },
        { id: 4, text: "30-day delivery promise" },
        { id: 5, text: "No-cost EMI options" },
        { id: 6, text: "End-to-end interior solutions" },
        { id: 7, text: "12-year warranty" },
    ];

    return (
        <div ref={sectionRef} className="w-11/12 mx-auto my-20">
            {/* Heading */}
            <motion.h2
                className="sm:text-5xl text-4xl text-center text-gray-900 mb-12 ackeler-a"
                initial={{ opacity: 0, y: -40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
            >
                Why Choose Us?
            </motion.h2>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="flex items-center gap-4  p-5 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 20, background: "linear-gradient(90deg, #d80d0d, #f7501f, #fea034)" }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            background: [
                                "linear-gradient(90deg, #d80d0d, #fea034, #f7501f)",
                                "linear-gradient(90deg, #f7501f, #d80d0d, #fea034)",
                                "linear-gradient(90deg, #fea034, #f7501f, #d80d0d)",
                            ],
                            transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
                        }}
                    >
                        {/* Icon */}
                        <FaCheckCircle className="text-white text-3xl" />
                        {/* Text */}
                        <p className="text-lg font-semibold text-white">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;