import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    { title: "Consultation", description: "Understanding your needs and style preferences." },
    { title: "Concept & Design", description: "Crafting detailed layouts and 3D visualizations." },
    { title: "Material Selection", description: "Choosing the best materials and finishes." },
    { title: "Execution", description: "Bringing ideas to life with expert craftsmanship." },
    { title: "Hand Over", description: "Final walkthrough and ensuring your satisfaction." }
];

const HowWeWork = () => {
    const [currentStep, setCurrentStep] = useState(0);

    // Ref for animations
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div ref={ref} className="w-11/12 mx-auto my-20 mt-32">
            
            {/* Section Title */}
            <motion.h2 
                className="sm:text-5xl text-4xl text-center mb-12 text-gray-900 font-bold"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                How We Work
            </motion.h2>

            {/* Steps Container */}
            <div className="relative flex flex-col lg:flex-row items-center lg:justify-between pl-8 lg:pl-0">
                {steps.map((step, index) => {
                    const stepRef = useRef(null);
                    const stepInView = useInView(stepRef, { once: true });

                    return (
                        <motion.div 
                            key={index} 
                            ref={stepRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={stepInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex items-center lg:flex-col w-full lg:w-1/5"
                        >
                            {/* Step Circle */}
                            <div 
                                className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-lg font-bold cursor-pointer transition-all duration-500 shadow-lg z-10 mt-10 lg:mt-0
                                    ${index <= currentStep ? "bg-gradient-to-r from-[#fea034] via-[#f7501f] to-[#d80d0d]" : "bg-gray-400"} 
                                    hover:scale-110`}
                                onClick={() => setCurrentStep(index)}
                            >
                                {index + 1}
                            </div>

                            {/* Step Connector Line */}
                            {index < steps.length - 1 && (
                                <div 
                                    className={`absolute transition-all duration-500 
                                        ${index < currentStep ? "bg-gradient-to-r from-[#fea034] to-[#f7501f]" : "bg-gray-300"} 
                                        lg:w-full lg:h-1 lg:top-8 lg:left-1/2 
                                        w-1 h-24 top-16 left-7 transform -translate-x-1/2 lg:translate-x-0`}
                                />
                            )}

                            {/* Step Title */}
                            <div className="ml-6 lg:ml-0 lg:mt-4 mt-9 text-left lg:text-center">
                                <p className={`text-lg font-semibold transition-all duration-300 ${index <= currentStep ? "text-[#f7501f]" : "text-gray-500"}`}>
                                    {step.title}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Step Description */}
            <motion.div 
                className="mt-10 text-center max-w-lg mx-auto p-6 rounded-lg shadow-md border border-gray-300"
                style={{
                    background: "linear-gradient(90deg, #fea034, #f7501f, #d80d0d)",
                    color: "white"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p className="text-lg font-medium">{steps[currentStep].description}</p>
            </motion.div>

        </div>
    );
};

export default HowWeWork;