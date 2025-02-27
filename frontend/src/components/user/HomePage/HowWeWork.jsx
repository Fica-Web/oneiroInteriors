import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
    { title: "Consultation", description: "Understanding your needs and style preferences." },
    { title: "Concept & Design", description: "Crafting detailed layouts and 3D visualizations." },
    { title: "Material Selection", description: "Choosing the best materials and finishes." },
    { title: "Execution", description: "Bringing ideas to life with expert craftsmanship." },
    { title: "Final Touches", description: "Ensuring perfection before handover." }
];

const HowWeWork = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="w-11/12 mx-auto my-20">
            
            {/* Section Title */}
            <motion.h2 
                className="text-5xl text-center mb-10 text-gray-900 ackeler-a"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                How We Work
            </motion.h2>

            {/* Steps Container */}
            <div className="relative flex flex-col lg:flex-row items-center lg:justify-between pl-8 lg:pl-0">
                {steps.map((step, index) => (
                    <motion.div 
                        key={index} 
                        className="relative flex items-center lg:flex-col w-full lg:w-1/5"
                        whileHover={{ scale: 1.1 }}
                    >
                        {/* Step Circle */}
                        <div 
                            className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-lg font-bold cursor-pointer transition-all duration-500 shadow-lg z-50 mt-10 lg:mt-0
                                ${index <= currentStep ? "bg-primary" : "bg-gray-400"}`}
                            onClick={() => setCurrentStep(index)}
                        >
                            {index + 1}
                        </div>

                        {/* Step Connector Line */}
                        {index < steps.length - 1 && (
                            <div 
                                className={`absolute transition-all duration-500 
                                    ${index < currentStep ? "bg-primary" : "bg-gray-300"} 
                                    lg:w-full lg:h-1 lg:top-8 lg:left-1/2 
                                    w-1 h-24 top-16 left-7 transform -translate-x-1/2 lg:translate-x-0`}
                            />
                        )}

                        {/* Step Title */}
                        <div className="ml-6 lg:ml-0 lg:mt-4 mt-9 text-left lg:text-center">
                            <p className={`text-lg font-semibold transition-all duration-300 ${index <= currentStep ? "text-primary" : "text-gray-500"}`}>
                                {step.title}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Step Description */}
            <motion.div 
                className="mt-10 text-center max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p className="text-lg text-gray-800">{steps[currentStep].description}</p>
            </motion.div>

        </div>
    );
};

export default HowWeWork;