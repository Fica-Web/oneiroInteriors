import React from "react";
import { motion } from "framer-motion";

const ReusableTitle = ({ page, title, description }) => {
  return (
    <div className="w-full border-t border-gray-300 py-28 bg-gradient-to-b from-primary via-ternary to-secondary">
      <div className="w-11/12 mx-auto">
        
        {/* Page Indicator */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-1 w-16 bg-white rounded-full"></div>
          <h3 className="text-lg uppercase tracking-wider text-white font-semibold">
            {page}
          </h3>
        </motion.div>

        {/* Title with Gradient Effect */}
        <motion.h2 
          className="text-5xl font-bold ackeler-a text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mt-5 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="mt-5 text-lg text-white max-w-4xl leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default ReusableTitle;
