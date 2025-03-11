import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value }) => {
    return (
        <motion.div
            className="bg-white shadow-md p-6 rounded-xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">{value}</p>
        </motion.div>
    );
};

export default StatCard
