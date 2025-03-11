import React from "react";
import { motion } from "framer-motion";

const dotVariants = {
    animate: {
        y: [0, -10, 0], // Bounce effect
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-800"
            >
                Loading
            </motion.div>

            <div className="flex space-x-2 mt-4">
                <motion.div
                    variants={dotVariants}
                    animate="animate"
                    className="w-4 h-4 rounded-full bg-[#fea034]"
                />
                <motion.div
                    variants={dotVariants}
                    animate="animate"
                    transition={{ delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-[#f7501f]"
                />
                <motion.div
                    variants={dotVariants}
                    animate="animate"
                    transition={{ delay: 0.4 }}
                    className="w-4 h-4 rounded-full bg-[#d80d0d]"
                />
            </div>
        </div>
    );
};

export default Loading;
