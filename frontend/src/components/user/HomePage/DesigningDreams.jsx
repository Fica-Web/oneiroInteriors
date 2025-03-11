import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../../assets/images/bed-room9.png";

const DesigningDreams = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            {/* Background Image */}
            <img src={image} alt="Designing Dreams" className="w-full h-full object-cover brightness-75" />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec6624] via-[#f7501f] to-[#fea034] opacity-20"></div>

            {/* Animated Caption */}
            <motion.h1
                ref={ref}
                className="absolute inset-0 flex items-center justify-center text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider uppercase"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        background: "linear-gradient(to right, #fea034, #f7501f, #fea034)",
        WebkitBackgroundClip: "text", // For Safari support
        backgroundClip: "text", // For Chrome and other modern browsers
        color: "transparent", // Make the text color transparent so the background is visible
        textShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
      }}
            >
                Designing Your Dreams
            </motion.h1>
        </div>
    );
};

export default DesigningDreams;