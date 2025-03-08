import React from "react";
import { motion } from "framer-motion";

const ReusableTitle = ({ page, title, description }) => {
  return (
    <div className="w-full border-t border-gray-400 py-12">
      <div className="w-11/12 mx-auto">
        
        {/* Page Indicator */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-0.5 w-14 bg-primary rounded"></div>
          <h3 className="text-lg uppercase tracking-wide text-gray-600 font-semibold">
            {page}
          </h3>
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="text-5xl font-bold ackeler-a text-gray-900 mt-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="mt-5 text-lg text-gray-700 max-w-4xl leading-relaxed"
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