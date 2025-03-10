import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
            {/* Glitching 404 Effect */}
            <motion.h1 
                className="text-9xl font-bold relative select-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d]">
                    404
                </span>
                <span className="absolute top-0 left-0 text-[#fea034] blur-[2px] opacity-70 animate-glitch">
                    404
                </span>
                <span className="absolute top-0 left-0 text-[#f7501f] blur-[3px] opacity-50 animate-glitch">
                    404
                </span>
            </motion.h1>

            {/* Error Message */}
            <motion.p 
                className="mt-6 text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Oops! The page you're looking for doesn't exist.
            </motion.p>

            {/* Home Button */}
            <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <Link 
                    to="/" 
                    className="px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d] hover:scale-105"
                >
                    Go Back Home
                </Link>
            </motion.div>

            {/* Floating Stars Effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{ repeat: Infinity, duration: Math.random() * 2 + 1 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Error404;